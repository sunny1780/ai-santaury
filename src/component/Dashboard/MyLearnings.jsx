import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import { getEnrolledCourses } from '../../utils/authApi';
import { cacheEnrolledCourses } from '../../utils/courseCache';
import { getCourseCardImage, getCourseImageAlt } from '../../utils/courseMedia';
import ProgressHeatmap from './ProgressHeatmap';

const CourseIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M10 2.5L2.5 7 10 11.5 17.5 7 10 2.5Z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.5 12.5L10 17 17.5 12.5" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

function CourseCard({ course }) {
  const navigate = useNavigate();

  return (
    <article
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/dashboard/learnings/${course._id}`, { state: { course } })}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          navigate(`/dashboard/learnings/${course._id}`, { state: { course } });
        }
      }}
      className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col"
      style={{ height: 384, cursor: 'pointer' }}
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
          className="mt-2 mb-0 text-sm font-semibold text-[#111827] leading-snug line-clamp-2 flex-1"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {course.title}
        </h3>

        <div className="mt-2 text-xs font-semibold text-[#2563EB]">
          View Lectures
        </div>

        <div className="h-px bg-[#E5E7EB] mt-2" />

        <div className="mt-2.5 flex items-center gap-2.5">
          <div className="grid h-7 w-7 place-items-center rounded-full bg-[#D1D5DB] text-[10px] font-semibold text-[#111827] shrink-0">
            {(course.createdBy?.email || 'I').charAt(0).toUpperCase()}
          </div>
          <div className="min-w-0">
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
      </div>
    </article>
  );
}

export default function MyLearnings() {
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadCourses() {
      try {
        const data = await getEnrolledCourses();
        if (!ignore) {
          const nextCourses = data.courses || [];
          setCourses(nextCourses);
          cacheEnrolledCourses(nextCourses);
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message || 'Unable to load your learning courses.');
        }
      }
    }

    loadCourses();

    return () => {
      ignore = true;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebar />

      <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-6">
          <h1
            className="m-0 text-lg sm:text-xl font-semibold text-[#111827]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            My Learnings
          </h1>
        </div>

        {error ? (
          <div className="mb-6 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
            {error}
          </div>
        ) : null}

        {courses.length > 0 ? (
          <>
            <div className="mb-5 grid gap-5 xl:grid-cols-[minmax(0,1fr)_340px] items-start">
              <div className="rounded-2xl border border-[#E5E7EB] bg-white px-6 py-6 shadow-sm">
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <div
                      className="inline-flex rounded-full bg-[#EEF4FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-[#2563EB]"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Learning Overview
                    </div>
                    <h2
                      className="m-0 mt-4 text-xl font-semibold text-[#111827]"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      Enrolled Courses
                    </h2>
                    <p
                      className="mb-0 mt-2 max-w-2xl text-sm leading-6 text-[#6B7280]"
                      style={{ fontFamily: 'Manrope, sans-serif' }}
                    >
                      This section shows the courses you are currently enrolled in. Open any course to continue learning and review its lecture content.
                    </p>
                  </div>

                  <div className="grid gap-3 sm:min-w-[220px] sm:max-w-[240px]">
                    <div className="rounded-2xl border border-[#DBEAFE] bg-[#F8FBFF] px-4 py-4">
                      <div
                        className="text-xs font-semibold uppercase tracking-[0.14em] text-[#2563EB]"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        Active Count
                      </div>
                      <div
                        className="mt-2 text-3xl font-semibold text-[#111827]"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {courses.length}
                      </div>
                      <div
                        className="mt-1 text-sm text-[#6B7280]"
                        style={{ fontFamily: 'Manrope, sans-serif' }}
                      >
                        {courses.length === 1 ? 'course in progress' : 'courses in progress'}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm px-5 py-5 flex flex-col justify-between">
                <ProgressHeatmap />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
              {courses.map((course) => (
                <CourseCard key={course._id} course={course} />
              ))}
            </div>
          </>
        ) : (
          !error && (
            <div className="rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-10 text-center text-sm text-[#6B7280]">
              You are not enrolled in any courses yet.
            </div>
          )
        )}
      </main>
    </div>
  );
}
