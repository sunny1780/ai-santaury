import Sidebaar from './Sidebaar';

const instructors = [
  {
    name: 'Faizan Rasool',
    role: 'Institute Manager',
    description: 'Leading the community with passion',
    image: '1.png',
  },
  {
    name: 'Muhammad Moeez',
    role: 'Institute Manager',
    description: 'Organizing memorable experiences',
    image: '2.png',
  },
  {
    name: 'Amir Abbasi',
    role: 'AI tools & automations',
    description: 'Leading the community with passion',
    image: '3.png',
  },
  {
    name: 'Steve',
    role: 'English Communication',
    description: 'Building bridges in the community',
    image: '4.png',
  },
];

export default function Instructors() {
  return (
    <div className="min-h-screen bg-[#F6F8FB] flex">
      <Sidebaar />

      <main className="flex-1 min-w-0 px-5 sm:px-8 lg:px-10 py-6 sm:py-8">
        <div className="flex items-center justify-between mb-6 sm:mb-8 gap-4">
          <h1
            className="m-0 text-lg sm:text-xl font-semibold text-[#111827]"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            Instructors
          </h1>

          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-xl bg-[#2563EB] px-4 py-2.5 text-sm font-medium text-white hover:bg-[#1D4ED8] transition-colors"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
              <path d="M12 5v14" strokeLinecap="round" />
              <path d="M5 12h14" strokeLinecap="round" />
            </svg>
            Add New Instructor
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {instructors.map((ins, idx) => (
            <div key={idx} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              <div className="h-72 sm:h-52 lg:h-60 overflow-hidden">
                <img
                  src={`${process.env.PUBLIC_URL}/images/team/${ins.image}`}
                  alt={ins.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 sm:p-5 flex flex-col gap-2">
                <h3
                  className="text-base sm:text-lg font-semibold text-[#1B1D21] m-0"
                  style={{ fontFamily: 'Manrope, sans-serif', lineHeight: '24px' }}
                >
                  {ins.name}
                </h3>
                <p
                  className="text-xs sm:text-sm font-medium text-[#6B7280] m-0"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '20px' }}
                >
                  {ins.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
