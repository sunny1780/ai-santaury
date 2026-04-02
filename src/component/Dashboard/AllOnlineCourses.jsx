import Sidebar from './Sidebar';

const dummyCourses = Array.from({ length: 6 }).map((_, idx) => ({
  id: idx + 1,
  title: "Beginner's guide to become a Professional Front-end developer",
  category: 'FRONT END',
  instructor: 'Ava Chen',
  role: 'Professor',
}));

const CourseIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M10 2.5L2.5 7 10 11.5 17.5 7 10 2.5Z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.5 12.5L10 17 17.5 12.5" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

export default function AllOnlineCourses() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      {/* Sidebar on the left */}
      <Sidebar />

      {/* Main content */}
      <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        {/* Top bar with page title + profile */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1
            className="text-xl sm:text-2xl lg:text-3xl font-semibold text-[#111827] m-0"
            style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.01em' }}
          >
            Explore
          </h1>
          <div className="hidden sm:flex items-center gap-3">
            <span className="text-sm font-medium text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              John Doe
            </span>
            <div className="w-9 h-9 rounded-full bg-[#CBD5F5]" />
          </div>
        </div>

        {/* Search bar */}
        <div className="mb-6 sm:mb-8">
          <div className="w-full rounded-full border border-[#E5E7EB] bg-white px-4 sm:px-6 py-2.5 flex items-center gap-3">
            <svg
              className="w-4 h-4 text-[#9CA3AF]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="7" />
              <line x1="16.65" y1="16.65" x2="21" y2="21" />
            </svg>
            <input
              type="text"
              placeholder="What do you want to learn"
              className="flex-1 border-0 bg-transparent outline-none text-sm sm:text-base text-[#111827] placeholder:text-[#9CA3AF]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            />
          </div>
        </div>

        {/* All Courses header */}
        <div className="mb-4 sm:mb-6 flex items-center justify-between">
          <h2
            className="text-lg sm:text-xl font-semibold text-[#111827] m-0"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            All Courses
          </h2>
        </div>

        {/* Courses grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6">
          {dummyCourses.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col"
              style={{ height: 384 }}
            >
              <div className="mx-3 mt-3 rounded-xl bg-[#0B0B0B] shrink-0" style={{ height: 230 }} />

              <div className="px-4 pt-3 pb-4 flex flex-col flex-1 min-h-0">
                <div className="flex items-center gap-1.5">
                  <CourseIcon />
                  <span
                    className="text-[11px] font-semibold text-[#2563EB] uppercase tracking-wide"
                    style={{ fontFamily: 'Manrope, sans-serif' }}
                  >
                    {course.category}
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
                  <div className="w-7 h-7 rounded-full bg-[#D1D5DB] shrink-0" />
                  <div className="min-w-0">
                    <div
                      className="text-xs font-medium text-[#111827] leading-none truncate"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {course.instructor}
                    </div>
                    <div
                      className="text-[10px] text-[#6B7280] leading-none mt-0.5 truncate"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      {course.role}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}

