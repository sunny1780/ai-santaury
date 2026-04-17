import { useEffect, useMemo, useState } from 'react';
import Sidebar from './Sidebar';
import { enrollInCourse, getApprovedCourses, getEnrolledCourses } from '../../utils/authApi';
import { cacheEnrolledCourses, updateCachedEnrolledCourse } from '../../utils/courseCache';
import { getCourseCardImage, getCourseImageAlt } from '../../utils/courseMedia';
import { addCurrentUserNotification } from '../../utils/notificationStore';

const CourseIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M10 2.5L2.5 7 10 11.5 17.5 7 10 2.5Z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.5 12.5L10 17 17.5 12.5" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

function getStoredAuthUser() {
  try {
    const raw = localStorage.getItem('authUser');
    return raw ? JSON.parse(raw) : null;
  } catch (error) {
    return null;
  }
}

export default function AllOnlineCourses() {
  const [courses, setCourses] = useState([]);
  const [enrolledIds, setEnrolledIds] = useState([]);
  const [busyCourseId, setBusyCourseId] = useState('');
  const [error, setError] = useState('');
  const authUser = useMemo(() => getStoredAuthUser(), []);
  const isStudent = authUser?.role === 'student';

  useEffect(() => {
    let ignore = false;

    async function loadCourses() {
      try {
        const [approvedData, enrolledData] = await Promise.all([
          getApprovedCourses(),
          isStudent ? getEnrolledCourses() : Promise.resolve({ courses: [] }),
        ]);

        if (ignore) return;

        const approvedCourses = approvedData.courses || [];
        const enrolledCourses = enrolledData.courses || [];

        setCourses(approvedCourses);
        setEnrolledIds(enrolledCourses.map((course) => course._id));
        cacheEnrolledCourses(enrolledCourses);
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message || 'Unable to load courses.');
        }
      }
    }

    loadCourses();

    return () => {
      ignore = true;
    };
  }, [isStudent]);

  async function handleEnroll(courseId) {
    try {
      setBusyCourseId(courseId);
      const data = await enrollInCourse(courseId);
      const enrolledCourse = data.course || null;

      setEnrolledIds((prev) => (prev.includes(courseId) ? prev : [...prev, courseId]));

      if (enrolledCourse) {
        updateCachedEnrolledCourse(enrolledCourse);
        addCurrentUserNotification({
          text: `You registered in "${enrolledCourse.title}".`,
          type: 'success',
        });
      }
    } catch (loadError) {
      setError(loadError.message || 'Course enroll nahi ho saka.');
    } finally {
      setBusyCourseId('');
    }
  }

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#111827] m-0"
            style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.01em' }}
          >
            Explore
          </h1>
        </div>

        <div className="mb-4 sm:mb-6 flex items-center justify-between">
          <h2
            className="text-lg sm:text-xl font-semibold text-[#111827] m-0"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            All Courses
          </h2>
        </div>

        {error ? (
          <div className="mb-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
            {error}
          </div>
        ) : null}

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {courses.map((course) => {
            const isEnrolled = enrolledIds.includes(course._id);

            return (
              <article
                key={course._id}
                className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col"
                style={{ minHeight: 420 }}
              >
                <div className="mx-3 mt-3 shrink-0 overflow-hidden rounded-xl bg-[#0B0B0B]" style={{ height: 230 }}>
                  <img
                    src={getCourseCardImage(course)}
                    alt={getCourseImageAlt(course)}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="px-4 pt-3 pb-4 flex flex-col flex-1 min-h-0">
                  <div className="flex items-center gap-1.5">
                    <CourseIcon />
                    <span
                      className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wide"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      {course.subCategory || course.category}
                    </span>
                  </div>

                  <h3
                    className="mt-2 mb-0 text-sm font-semibold text-[#111827] leading-snug line-clamp-2"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {course.title}
                  </h3>

                  <p
                    className="mt-2 mb-0 text-xs leading-5 text-[#6B7280] line-clamp-3 flex-1"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {course.description || course.topic}
                  </p>

                  <div className="h-px bg-[#E5E7EB] mt-3" />

                  <div className="mt-2.5 flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-[#D1D5DB] shrink-0" />
                    <div className="min-w-0 flex-1">
                      <div
                        className="text-xs font-medium text-[#111827] leading-none truncate"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {course.createdBy?.email?.split('@')[0] || 'Instructor'}
                      </div>
                      <div
                        className="text-[10px] text-[#6B7280] leading-none mt-0.5 truncate"
                        style={{ fontFamily: 'Inter, sans-serif' }}
                      >
                        {course.level}
                      </div>
                    </div>
                  </div>

                  {isStudent ? (
                    <button
                      type="button"
                      onClick={() => handleEnroll(course._id)}
                      disabled={isEnrolled || busyCourseId === course._id}
                      className={[
                        'mt-4 rounded-xl px-4 py-2.5 text-sm font-semibold transition-colors',
                        isEnrolled
                          ? 'bg-[#DCFCE7] text-[#166534] cursor-not-allowed'
                          : 'bg-[#2563EB] text-white hover:bg-[#1D4ED8]',
                      ].join(' ')}
                    >
                      {busyCourseId === course._id ? 'Registering...' : isEnrolled ? 'Registered' : 'Register Now'}
                    </button>
                  ) : null}
                </div>
              </article>
            );
          })}
        </div>

        {!error && courses.length === 0 ? (
          <div className="mt-6 rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-10 text-center text-sm text-[#6B7280]">
            No approved courses are currently available for students.
          </div>
        ) : null}
      </main>
    </div>
  );
}
