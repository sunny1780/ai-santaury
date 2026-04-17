import { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
import { getEnrolledCourseById } from '../../utils/authApi';
import { getCachedEnrolledCourse } from '../../utils/courseCache';
import { getCourseCardImage, getCourseImageAlt } from '../../utils/courseMedia';
import { trackVideoWatchProgress } from '../../utils/watchProgress';

function DetailBlock({ title, items, emptyText }) {
  return (
    <section className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
      <h2 className="m-0 text-lg font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {title}
      </h2>

      {items?.length ? (
        <div className="mt-4 space-y-3">
          {items.map((item, index) => (
            <div key={`${title}-${index}`} className="rounded-xl bg-[#F8FAFC] px-4 py-3 text-sm text-[#334155]">
              {item}
            </div>
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-xl border border-dashed border-[#CBD5E1] px-4 py-5 text-sm text-[#64748B]">
          {emptyText}
        </div>
      )}
    </section>
  );
}

function isPlayableVideoSource(value) {
  if (!value || typeof value !== 'string') return false;
  return value.startsWith('data:video/') || value.startsWith('blob:') || /^https?:\/\//i.test(value);
}

function getLectureVideoSource(course, lecture) {
  if (isPlayableVideoSource(lecture?.contents?.videoSection)) {
    return lecture.contents.videoSection;
  }

  if (isPlayableVideoSource(course?.lectureAssets?.videoSection)) {
    return course.lectureAssets.videoSection;
  }

  return '';
}

export default function StudentCourseDetails() {
  const { courseId } = useParams();
  const location = useLocation();
  const initialCourse = location.state?.course || getCachedEnrolledCourse(courseId);
  const [course, setCourse] = useState(initialCourse);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(!initialCourse);
  const [openLectureKey, setOpenLectureKey] = useState(null);
  const videoProgressRef = useRef({});

  useEffect(() => {
    if (initialCourse?._id === courseId) {
      setLoading(false);
      return undefined;
    }

    let ignore = false;

    async function loadCourse() {
      try {
        const data = await getEnrolledCourseById(courseId);
        if (!ignore) {
          setCourse(data.course || null);
          setError('');
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message || 'Course detail load nahi ho saki.');
        }
      } finally {
        if (!ignore) {
          setLoading(false);
        }
      }
    }

    loadCourse();

    return () => {
      ignore = true;
    };
  }, [courseId, initialCourse]);

  function handleVideoTimeUpdate(lectureKey, lectureId, event) {
    const video = event.currentTarget;
    const previousTime = videoProgressRef.current[lectureKey] ?? 0;
    const currentTime = video.currentTime;
    const delta = currentTime - previousTime;

    videoProgressRef.current[lectureKey] = currentTime;

    if (delta >= 5) {
      trackVideoWatchProgress({
        courseId,
        lectureId,
        watchedSecondsDelta: delta,
      });
    }
  }

  function handleVideoSeeked(lectureKey, event) {
    videoProgressRef.current[lectureKey] = event.currentTarget.currentTime;
  }

  function handleVideoLoaded(lectureKey, event) {
    videoProgressRef.current[lectureKey] = event.currentTarget.currentTime;
  }

  function handleVideoPause(lectureKey, lectureId, event) {
    const video = event.currentTarget;
    const previousTime = videoProgressRef.current[lectureKey] ?? 0;
    const currentTime = video.currentTime;
    const delta = currentTime - previousTime;

    videoProgressRef.current[lectureKey] = currentTime;

    if (delta > 0) {
      trackVideoWatchProgress({
        courseId,
        lectureId,
        watchedSecondsDelta: delta,
      });
    }
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebar />

      <main className="flex-1 px-6 py-6 lg:px-8">
        <div>
          <Link
            to="/dashboard/learnings"
            className="text-sm font-medium text-[#2563EB] no-underline"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Back to My Learnings
          </Link>
          <h1 className="mb-0 mt-2 text-[30px] font-semibold text-[#182126]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Course Details
          </h1>
        </div>

        {loading ? (
          <div className="mt-6 rounded-2xl border border-[#E5E7EB] bg-white px-6 py-10 text-sm text-[#64748B]">
            Course load ho raha hai...
          </div>
        ) : null}

        {!loading && error ? (
          <div className="mt-6 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
            {error}
          </div>
        ) : null}

        {!loading && !error && course ? (
          <div className="mt-6 space-y-6">
            <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="overflow-hidden rounded-3xl bg-white p-4 shadow-sm">
                <div className="overflow-hidden rounded-2xl">
                  <img
                    src={getCourseCardImage(course)}
                    alt={getCourseImageAlt(course)}
                    className="h-[280px] w-full object-cover"
                  />
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <div className="inline-flex rounded-full bg-[#DBEAFE] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#1D4ED8]">
                  {course.subCategory || course.category}
                </div>
                <h2 className="mb-0 mt-4 text-3xl font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {course.title}
                </h2>
                <p className="mb-0 mt-3 text-sm leading-6 text-[#64748B]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  {course.description || course.topic}
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl bg-[#F8FAFC] p-4">
                    <div className="text-[#64748B]">Instructor</div>
                    <div className="mt-1 font-semibold text-[#111827]">{course.createdBy?.email?.split('@')[0] || 'Instructor'}</div>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] p-4">
                    <div className="text-[#64748B]">Level</div>
                    <div className="mt-1 font-semibold text-[#111827]">{course.level}</div>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] p-4">
                    <div className="text-[#64748B]">Duration</div>
                    <div className="mt-1 font-semibold text-[#111827]">{course.durationValue} {course.durationUnit}</div>
                  </div>
                  <div className="rounded-2xl bg-[#F8FAFC] p-4">
                    <div className="text-[#64748B]">Language</div>
                    <div className="mt-1 font-semibold text-[#111827]">{course.courseLang}</div>
                  </div>
                </div>
              </div>
            </section>

            <DetailBlock
              title="What You Will Learn"
              items={course.teachList}
              emptyText="Is course ke learning points abhi add nahi kiye gaye."
            />

            <DetailBlock
              title="Requirements"
              items={course.reqList}
              emptyText="Is course ke requirements abhi add nahi kiye gaye."
            />

            <section className="rounded-2xl border border-[#E5E7EB] bg-white p-5">
              <h2 className="m-0 text-lg font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Lectures List
              </h2>

              {course.curriculum?.length ? (
                <div className="mt-5 space-y-4">
                  {course.curriculum.map((section, sectionIndex) => (
                    <div key={`${section.title}-${sectionIndex}`} className="rounded-2xl border border-[#E5E7EB] bg-[#F8FAFC] p-4">
                      <div className="text-base font-semibold text-[#111827]">
                        {section.title}
                      </div>

                      <div className="mt-3 space-y-2">
                        {section.lectures?.map((lecture, lectureIndex) => (
                          <div key={`${lecture.name}-${lectureIndex}`} className="rounded-xl bg-white px-4 py-3">
                            <button
                              type="button"
                              onClick={() =>
                                setOpenLectureKey((current) =>
                                  current === `${sectionIndex}-${lectureIndex}` ? null : `${sectionIndex}-${lectureIndex}`
                                )
                              }
                              className="flex w-full items-start justify-between gap-3 bg-transparent p-0 text-left"
                            >
                              <div>
                                <div className="text-sm font-semibold text-[#111827]">
                                  {lectureIndex + 1}. {lecture.name}
                                </div>
                                <div className="mt-1 text-xs text-[#64748B]">
                                  {[
                                    lecture.contents?.videoFileName ? 'Video' : null,
                                    lecture.contents?.attachFileName ? 'Attachment' : null,
                                    lecture.contents?.descriptionText ? 'Description' : null,
                                    lecture.contents?.notesFileName || lecture.contents?.notesText ? 'Notes' : null,
                                  ]
                                    .filter(Boolean)
                                    .join(' • ') || 'Basic lecture item'}
                                </div>
                              </div>
                              <span className="rounded-full bg-[#EFF6FF] px-3 py-1 text-[11px] font-semibold text-[#2563EB]">
                                {openLectureKey === `${sectionIndex}-${lectureIndex}` ? 'Hide' : 'Open'}
                              </span>
                            </button>

                            {openLectureKey === `${sectionIndex}-${lectureIndex}` ? (
                              <div className="mt-4 space-y-4 border-t border-[#E5E7EB] pt-4">
                                {getLectureVideoSource(course, lecture) ? (
                                  <div className="overflow-hidden rounded-2xl bg-[#0F172A]">
                                    <video
                                      src={getLectureVideoSource(course, lecture)}
                                      controls
                                      onLoadedMetadata={(event) =>
                                        handleVideoLoaded(`${sectionIndex}-${lectureIndex}`, event)
                                      }
                                      onSeeked={(event) =>
                                        handleVideoSeeked(`${sectionIndex}-${lectureIndex}`, event)
                                      }
                                      onTimeUpdate={(event) =>
                                        handleVideoTimeUpdate(
                                          `${sectionIndex}-${lectureIndex}`,
                                          `${courseId}-${sectionIndex}-${lectureIndex}`,
                                          event
                                        )
                                      }
                                      onPause={(event) =>
                                        handleVideoPause(
                                          `${sectionIndex}-${lectureIndex}`,
                                          `${courseId}-${sectionIndex}-${lectureIndex}`,
                                          event
                                        )
                                      }
                                      className="h-[260px] w-full object-cover"
                                    />
                                  </div>
                                ) : lecture.contents?.videoFileName ? (
                                  <div className="rounded-2xl border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-4 py-5 text-sm text-[#64748B]">
                                    Video file `{lecture.contents.videoFileName}` attached hai, lekin is course mein playable video source save nahi hui.
                                  </div>
                                ) : null}

                                {lecture.contents?.descriptionText ? (
                                  <div className="rounded-2xl bg-[#F8FAFC] px-4 py-4">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
                                      Description
                                    </div>
                                    <div className="mt-2 text-sm leading-6 text-[#334155]">
                                      {lecture.contents.descriptionText}
                                    </div>
                                  </div>
                                ) : null}

                                {lecture.contents?.notesText ? (
                                  <div className="rounded-2xl bg-[#F8FAFC] px-4 py-4">
                                    <div className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">
                                      Notes
                                    </div>
                                    <div className="mt-2 text-sm leading-6 text-[#334155]">
                                      {lecture.contents.notesText}
                                    </div>
                                  </div>
                                ) : null}
                              </div>
                            ) : null}
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="mt-4 rounded-xl border border-dashed border-[#CBD5E1] px-4 py-5 text-sm text-[#64748B]">
                  Is course ki lectures list abhi available nahi hai.
                </div>
              )}
            </section>
          </div>
        ) : null}
      </main>
    </div>
  );
}
