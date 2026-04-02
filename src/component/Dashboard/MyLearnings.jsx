import Sidebar from './Sidebar';

const cards = [
  {
    id: 1,
    category: 'FRONT END',
    title: "Beginner's guide to become a Professional Front-end developer",
    instructor: 'Ava Chen',
    role: 'Professor',
    fillPct: 40,
  },
  {
    id: 2,
    category: 'FRONT END',
    title: 'JavaScript Essentials for Aspiring Front-End Developers',
    instructor: 'Ava Chen',
    role: 'Professor',
    fillPct: 60,
  },
  {
    id: 3,
    category: 'FRONT END',
    title: "Beginner's guide to become a Professional Front-end developer",
    instructor: 'Ava Chen',
    role: 'Professor',
    fillPct: 40,
  },
  {
    id: 4,
    category: 'FRONT END',
    title: 'JavaScript Essentials for Aspiring Front-End Developers',
    instructor: 'Ava Chen',
    role: 'Professor',
    fillPct: 60,
  },
  {
    id: 5,
    category: 'FRONT END',
    title: 'Responsive Web Design: From Basics to Best Practices',
    instructor: 'Ava Chen',
    role: 'Professor',
    fillPct: 55,
  },
];

const CourseIcon = () => (
  <svg className="w-3.5 h-3.5 shrink-0" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <path d="M10 2.5L2.5 7 10 11.5 17.5 7 10 2.5Z" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M2.5 12.5L10 17 17.5 12.5" stroke="#2563EB" strokeWidth="1.5" strokeLinejoin="round" />
  </svg>
);

function CourseCard({ card }) {
  return (
    <article
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
            {card.category}
          </span>
        </div>

        <h3
          className="mt-2 mb-0 text-sm font-semibold text-[#111827] leading-snug line-clamp-2 flex-1"
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {card.title}
        </h3>

        <div className="h-px bg-[#E5E7EB] mt-2" />

        <div className="mt-2.5 flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-[#D1D5DB] shrink-0" />
          <div className="min-w-0">
            <div
              className="text-xs font-medium text-[#111827] leading-none truncate"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {card.instructor}
            </div>
            <div
              className="text-[10px] text-[#6B7280] leading-none mt-0.5 truncate"
              style={{ fontFamily: 'Inter, sans-serif' }}
            >
              {card.role}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

// 0=very-light, 1=light, 2=medium, 3=dark, 4=navy  (matches screenshot shades)
const progressData = [
  [0, 0, 0, 2, 0, 3, 1],
  [0, 2, 4, 2, 0, 0, 0],
  [0, 0, 0, 0, 3, 0, 0],
  [0, 2, 0, 4, 0, 0, 0],
];

const levelClass = [
  'bg-[#EFF6FF]',   // 0 very light
  'bg-[#BFDBFE]',   // 1 light
  'bg-[#93C5FD]',   // 2 medium
  'bg-[#3B82F6]',   // 3 dark blue
  'bg-[#1E40AF]',   // 4 navy
];

function ProgressBlocks() {
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
}

export default function MyLearnings() {
  return (
    <div className="min-h-screen bg-[#F3F4F6] flex">
      <Sidebar />

      <main className="flex-1 min-w-0 px-4 sm:px-8 lg:px-10 py-6 sm:py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h1
            className="m-0 text-lg sm:text-xl font-semibold text-[#111827]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            My Learnings
          </h1>
          <div className="hidden sm:flex items-center gap-3">
            <span
              className="text-sm font-medium text-[#111827]"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              John Doe
            </span>
            <div className="w-9 h-9 rounded-full bg-[#CBD5F5]" />
          </div>
        </div>

        {/*
          3-column grid:
          Row 1 → card[0]  card[1]  My Progress
          Row 2 → card[2]  card[3]  card[4]
          All columns equal (1fr), so all cards & sidebar share the same width.
        */}
        <div className="grid grid-cols-3 gap-5">
          {/* Row 1 — cards 0 & 1 */}
          <CourseCard card={cards[0]} />
          <CourseCard card={cards[1]} />

          {/* Row 1 col 3 — My Progress sidebar */}
          <div className="bg-white rounded-2xl border border-[#E5E7EB] shadow-sm px-5 py-5 flex flex-col justify-between" style={{ height: 384 }}>
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

            {/* Day labels */}
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

          {/* Row 2 — cards 2, 3, 4 (fills full width including sidebar column) */}
          <CourseCard card={cards[2]} />
          <CourseCard card={cards[3]} />
          <CourseCard card={cards[4]} />
        </div>
      </main>
    </div>
  );
}
