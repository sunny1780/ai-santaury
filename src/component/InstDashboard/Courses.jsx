import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebaar from './Sidebaar';
import { getMyCourses } from '../../utils/authApi';
import { cacheInstructorCourses } from '../../utils/courseCache';
import { getCourseCardImage, getCourseImageAlt } from '../../utils/courseMedia';

function SearchIcon() {
  return (
    <svg className="h-4 w-4 text-[#6B7280]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
      <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Courses() {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    let ignore = false;

    async function loadCourses() {
      try {
        const data = await getMyCourses();
        if (!ignore) {
          const nextCourses = data.courses || [];
          setCourses(nextCourses);
          cacheInstructorCourses(nextCourses);
        }
      } catch (loadError) {
        if (!ignore) {
          setError(loadError.message || 'Courses load nahi ho sake.');
        }
      }
    }

    loadCourses();

    return () => {
      ignore = true;
    };
  }, []);

  const filteredCourses = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return courses;

    return courses.filter((course) =>
      [course.title, course.topic, course.category, course.subCategory]
        .filter(Boolean)
        .some((value) => value.toLowerCase().includes(query))
    );
  }, [courses, search]);

  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebaar />

      <main className="flex-1 px-6 py-6 lg:px-8">
        <h1 className="m-0 text-[30px] font-semibold text-[#182126]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          Courses
        </h1>

        <div className="mt-5">
          <div className="flex h-12 items-center gap-3 rounded-2xl border border-[#B8C2CC] bg-transparent px-4">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search Course"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#6B7280] focus:outline-none"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            />
          </div>
        </div>

        <h2 className="mb-0 mt-5 text-2xl font-semibold text-[#182126]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          All Courses
        </h2>

        {error ? (
          <div className="mt-4 rounded-xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm text-[#B91C1C]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            {error}
          </div>
        ) : null}

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {filteredCourses.map((course) => (
            <article
              key={course._id}
              role="button"
              tabIndex={0}
              onClick={() => navigate(`/inst/courses/${course._id}`, { state: { course } })}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  navigate(`/inst/courses/${course._id}`, { state: { course } });
                }
              }}
              className="cursor-pointer rounded-2xl bg-[#FAFAFA] p-2.5 transition hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#2563EB] focus:ring-offset-2"
            >
              <div className="grid h-36 place-items-center overflow-hidden rounded-xl bg-[#D2DFFB] px-4 text-center text-sm font-semibold text-[#1E3A8A]">
                <img
                  src={getCourseCardImage(course)}
                  alt={getCourseImageAlt(course)}
                  className="h-full w-full object-cover"
                />
              </div>

              <div className="mt-2 flex items-center justify-between gap-3">
                <div className="text-[8px] font-medium uppercase tracking-wide text-[#A0A0A0]">
                  {course.subCategory || course.category}
                </div>
                <div className="text-[11px] font-semibold text-[#2563EB]">View List</div>
              </div>

              <div className="mt-2 inline-flex rounded-full bg-[#FEF3C7] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-[#92400E]">
                {course.status || 'pending'}
              </div>

              <h3
                className="mb-0 mt-2 text-[21px] font-medium leading-[1.3] text-[#182126]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                {course.title}
              </h3>

              <p className="mb-0 mt-2 text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                {course.topic}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <div className="grid h-8 w-8 place-items-center rounded-full bg-[#111827] text-xs font-semibold text-white">
                  {(course.title || 'C').charAt(0).toUpperCase()}
                </div>
                <div>
                  <div className="text-[10px] font-semibold text-[#182126]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {course.level}
                  </div>
                  <div className="text-[10px] text-[#8C8C8C]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    {course.durationValue} {course.durationUnit}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {!error && filteredCourses.length === 0 ? (
          <div className="mt-4 rounded-2xl border border-dashed border-[#CBD5E1] bg-white px-6 py-10 text-center text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Abhi koi saved course nahi mila.
          </div>
        ) : null}
      </main>
    </div>
  );
}
