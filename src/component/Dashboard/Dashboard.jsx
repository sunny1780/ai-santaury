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

function ContinueWatchingCard({ course }) {
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
      className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col cursor-pointer"
      style={{ height: 384 }}
    >
      <div className="mx-3 mt-3 rounded-xl bg-[#EEF2F7] overflow-hidden shrink-0" style={{ height: 230 }}>
        <img
          src={getCourseCardImage(course)}
          alt={getCourseImageAlt(course)}
          className="w-full h-full object-cover"
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

export default function Dashboard() {
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
          setError(loadError.message || 'Unable to load continue watching courses.');
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

      <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          <section className="relative overflow-hidden rounded-2xl lg:col-span-2" style={{ height: 332 }}>
            <img
              src={`${process.env.PUBLIC_URL}/images/bgdash.svg`}
              alt="bg"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="relative px-6 sm:px-10 py-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-opacity-20 px-4 py-2">
                <span className="text-[11px] font-semibold text-white" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  ONLINE COURSE
                </span>
              </div>

              <h1
                className="mt-4 text-white text-2xl sm:text-3xl font-bold leading-tight"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Sharpen Your Skills with
                <br />
                Professional Online Courses
              </h1>
            </div>
          </section>

          <aside>
            <div
              className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm px-5 py-5 flex flex-col justify-between"
              style={{ height: 332 }}
            >
              <ProgressHeatmap compact />
            </div>
          </aside>

          <div className="lg:col-span-3 flex items-center justify-between">
            <h2 className="m-0 text-base sm:text-lg font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Continue Watching
            </h2>
          </div>

          {error ? (
            <div className="lg:col-span-3 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]">
              {error}
            </div>
          ) : null}

          {!error && courses.length === 0 ? (
            <div className="lg:col-span-3 rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-10 text-center text-sm text-[#6B7280]">
              Only enrolled courses appear in Continue Watching. You have not registered for any courses yet.
            </div>
          ) : null}

          {courses.map((course) => (
            <ContinueWatchingCard key={course._id} course={course} />
          ))}
        </div>
      </main>
    </div>
  );
}
