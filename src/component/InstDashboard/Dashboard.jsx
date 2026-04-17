import Sidebaar from './Sidebaar';
import InstructorUserBadge from './InstructorUserBadge';

const dicon = (n) => `${process.env.PUBLIC_URL}/images/Dicons/${n}.svg`;

const Dicon = ({ n, className = 'w-7 h-7' }) => (
  <img src={dicon(n)} alt="" className={className} width={28} height={28} />
);

const StatCard = ({ iconBg, icon, value, label }) => (
  <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-sm px-4 py-3 flex items-center gap-3 min-w-0">
    <div className={`w-9 h-9 rounded-xl flex items-center justify-center ${iconBg} shrink-0`}>
      {icon}
    </div>
    <div className="min-w-0">
      <div className="text-lg font-semibold text-[#111827] leading-6" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {value}
      </div>
      <div className="text-[11px] text-[#6B7280] leading-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
        {label}
      </div>
    </div>
  </div>
);

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] flex">
      <Sidebaar />

      <main className="flex-1 px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
        {/* Top bar */}
        <div className="flex items-center justify-between mb-6 sm:mb-8">
          <h1 className="text-lg sm:text-xl font-semibold text-[#111827] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
            Dashboard
          </h1>
          <div className="hidden sm:block">
            <InstructorUserBadge />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            iconBg="bg-[#E9F1FF]"
            icon={<Dicon n={1} />}
            value="957"
            label="Enrolled Courses"
          />
          <StatCard
            iconBg="bg-[#EEF2FF]"
            icon={<Dicon n={2} />}
            value="19"
            label="Active Courses"
          />
          <StatCard
            iconBg="bg-[#FFF1E6]"
            icon={<Dicon n={3} />}
            value="241"
            label="Courses Instructors"
          />
          <StatCard
            iconBg="bg-[#E9FBF0]"
            icon={<Dicon n={4} />}
            value="951"
            label="Completed Courses"
          />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <StatCard
            iconBg="bg-[#FFE7F0]"
            icon={<Dicon n={5} />}
            value="1,674,767"
            label="Students"
          />
          <StatCard
            iconBg="bg-[#FFF7D6]"
            icon={<Dicon n={6} />}
            value="3"
            label="Online Courses"
          />
          <StatCard
            iconBg="bg-[#EEF2F7]"
            icon={<Dicon n={7} />}
            value="$7,461,767"
            label="USD Total Earning"
          />
          <StatCard
            iconBg="bg-[#F3E8FF]"
            icon={<Dicon n={8} />}
            value="56,489"
            label="Course Sold"
          />
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-4">
          {/* Revenue */}
          <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-sm p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Revenue
              </div>
              <div className="text-xs text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                This month ▾
              </div>
            </div>
            <div className="h-[220px] w-full">
              <svg viewBox="0 0 640 220" className="w-full h-full">
                <defs>
                  <linearGradient id="revFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#2563EB" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#2563EB" stopOpacity="0.02" />
                  </linearGradient>
                </defs>
                {/* grid */}
                {[0, 1, 2, 3].map((i) => (
                  <line key={i} x1="40" y1={30 + i * 45} x2="630" y2={30 + i * 45} stroke="#EEF2F7" strokeWidth="1" />
                ))}
                <path
                  d="M40,120 C80,90 120,140 160,110 C200,80 240,140 280,100 C320,60 360,150 400,120 C440,90 480,140 520,110 C560,80 600,140 630,95 L630,210 L40,210 Z"
                  fill="url(#revFill)"
                />
                <path
                  d="M40,120 C80,90 120,140 160,110 C200,80 240,140 280,100 C320,60 360,150 400,120 C440,90 480,140 520,110 C560,80 600,140 630,95"
                  fill="none"
                  stroke="#2563EB"
                  strokeWidth="3"
                />
                <circle cx="160" cy="110" r="5" fill="#2563EB" />
                <rect x="120" y="58" width="90" height="38" rx="10" fill="#111827" opacity="0.85" />
                <text x="165" y="82" textAnchor="middle" fontSize="12" fill="white">
                  51,749
                </text>
              </svg>
            </div>
          </div>

          {/* Profile View */}
          <div className="bg-white rounded-2xl border border-[#EEF2F7] shadow-sm p-4 sm:p-5">
            <div className="flex items-center justify-between mb-3">
              <div className="text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Profile View
              </div>
              <div className="text-xs text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                Today ▾
              </div>
            </div>
            <div className="h-[220px] w-full flex items-end gap-2">
              {[60, 130, 95, 160, 85, 140, 70, 125, 90, 110, 80].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-md bg-[#10B981]"
                  style={{ height: `${h}px`, opacity: i % 3 === 0 ? 0.8 : 0.65 }}
                />
              ))}
            </div>
            <div className="mt-3 text-xs text-[#6B7280]" style={{ fontFamily: 'Manrope, sans-serif' }}>
              <div className="text-sm font-semibold text-[#111827]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                $7,443
              </div>
              USD Dollar you earned.
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
