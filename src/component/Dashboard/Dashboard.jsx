import Sidebar from './Sidebar';

const dummyContinueWatching = [
  {
    img: 'g1.png',
    category: 'FRONT END',
    title: "Beginner's guide to become a Professional Front-end developer",
    progress: '20 mutuals',
  },
  {
    img: 'g2.png',
    category: 'JAVASCRIPT ESSENTIALS',
    title: 'JavaScript Essentials for Aspiring Front-End Developers',
    progress: '20 mutuals',
  },
  {
    img: 'g3.png',
    category: 'RESPONSIVE WEB DESIGN',
    title: 'Responsive Web Design: From Basics to Best Practices',
    progress: '20 mutuals',
  },
];

const CourseIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M10 2.5L2.5 7 10 11.5 17.5 7 10 2.5Z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.5 12.5L10 17 17.5 12.5" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

// 7 columns x 4 rows = 28 blocks (matches MyLearnings “My Progress” card)
const progressData = [
  [0, 0, 0, 2, 0, 3, 1],
  [0, 2, 4, 2, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0],
  [0, 2, 0, 4, 0, 0, 0],
];

const levelClass = [
  'bg-[#EFF6FF]', // very light
  'bg-[#BFDBFE]', // light
  'bg-[#93C5FD]', // medium
  'bg-[#3B82F6]', // dark blue
  'bg-[#1E40AF]', // navy
];

const ProgressBlocks = () => {
  return (
    <div className="flex flex-col gap-3">
      {progressData.map((row, ri) => (
        <div key={ri} className="grid grid-cols-7 gap-3">
          {row.map((lvl, ci) => (
            <div key={ci} className={`rounded-lg aspect-square ${levelClass[lvl]}`} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebar />

      <main className="flex-1 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Row 1 col 1-2: Hero */}
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

              <div className="mt-6">
                <button
                  type="button"
                  className="inline-flex items-center justify-center rounded-full bg-white/20 px-5 py-2 text-sm font-semibold text-white hover:bg-white/25 transition-colors"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Explore Now
                </button>
              </div>
            </div>
          </section>

          {/* Row 1 col 3: My Progress */}
          <aside>
            <div
              className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm px-5 py-5 flex flex-col justify-between"
              style={{ height: 332 }}
            >
              {/* Header */}
              <div className="flex items-center justify-between">
                <h3
                  className="m-0 text-[#111827]"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    fontWeight: 700,
                    fontSize: '16px',
                    lineHeight: '24px',
                    letterSpacing: '0.005em',
                  }}
                >
                  My Progress
                </h3>
                <span className="text-sm text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                  October
                </span>
              </div>

              {/* Divider */}
              <div className="h-px bg-[#E5E7EB] my-3" />

              {/* Day labels (7 boxes) */}
              <div className="grid grid-cols-7 gap-3 mb-3">
                {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((d) => (
                  <span
                    key={d}
                    className="w-[40px] h-[20px] rounded-[4px] text-[#374151] flex items-center justify-center"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      fontWeight: 600,
                      fontSize: '14px',
                      lineHeight: '20px',
                      letterSpacing: '0.005em',
                    }}
                  >
                    {d}
                  </span>
                ))}
              </div>

              {/* Progress blocks */}
              <ProgressBlocks />

              {/* Legend */}
              <div className="mt-4 flex items-center justify-center gap-2">
                <span
                  className="text-xs text-[#374151] mr-1"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Low
                </span>
                {[0, 1, 2, 3, 4].map((l) => (
                  <span
                    key={l}
                    className={`w-[24px] h-[24px] rounded-[4px] inline-block ${levelClass[l]}`}
                  />
                ))}
                <span
                  className="text-xs text-[#374151] ml-1"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  Full
                </span>
              </div>
            </div>
          </aside>

          {/* Row 2 title */}
          <div className="lg:col-span-3 flex items-center justify-between">
            <h2 className="m-0 text-base sm:text-lg font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Continue Watching
            </h2>
          </div>

          {/* Row 2 cards full width (3 equal columns) */}
          {dummyContinueWatching.map((c, idx) => (
            <article
              key={idx}
              className="bg-white rounded-2xl border border-[#E5E7EB] overflow-hidden flex flex-col"
              style={{ height: 384 }}
            >
              <div className="mx-3 mt-3 rounded-xl bg-[#EEF2F7] overflow-hidden shrink-0" style={{ height: 230 }}>
                <img
                  src={`${process.env.PUBLIC_URL}/images/${c.img}`}
                  alt={c.title}
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
                    {c.category}
                  </span>
                </div>

                <h3
                  className="mt-2 mb-0 text-sm font-semibold text-[#111827] leading-snug line-clamp-2 flex-1"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {c.title}
                </h3>

                <div className="h-px bg-[#E5E7EB] mt-2" />

                <div className="mt-2.5 flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-full bg-[#D1D5DB] shrink-0" />
                  <div className="min-w-0">
                    <div
                      className="text-xs font-medium text-[#111827] leading-none truncate"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Ava Chen
                    </div>
                    <div
                      className="text-[10px] text-[#6B7280] leading-none mt-0.5 truncate"
                      style={{ fontFamily: 'Inter, sans-serif' }}
                    >
                      Professor
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

