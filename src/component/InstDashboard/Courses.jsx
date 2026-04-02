import Sidebaar from './Sidebaar';

const courseCards = [1, 2, 3];

function SearchIcon() {
  return (
    <svg className="h-4 w-4 text-[#6B7280]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M11 19a8 8 0 1 1 0-16 8 8 0 0 1 0 16Z" stroke="currentColor" strokeWidth="2" />
      <path d="m21 21-4.35-4.35" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export default function Courses() {
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
              className="w-full bg-transparent text-sm text-[#111827] placeholder:text-[#6B7280] focus:outline-none"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            />
          </div>
        </div>

        <h2 className="mb-0 mt-5 text-2xl font-semibold text-[#182126]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          All Courses
        </h2>

        <div className="mt-4 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {courseCards.map((item) => (
            <article key={item} className="rounded-2xl bg-[#FAFAFA] p-2.5">
              <div className="h-36 rounded-xl bg-[#D2D2D2]" />

              <div className="mt-2 text-[8px] font-medium uppercase tracking-wide text-[#A0A0A0]">FRONT END</div>

              <h3
                className="mb-0 mt-2 text-[21px] font-medium leading-[1.3] text-[#182126]"
                style={{ fontFamily: 'Manrope, sans-serif' }}
              >
                Beginner&apos;s guide to become a Professional Front-end developer
              </h3>

              <div className="mt-3 flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-[#111827]" />
                <div>
                  <div className="text-[10px] font-semibold text-[#182126]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    Name
                  </div>
                  <div className="text-[7px] text-[#8C8C8C]" style={{ fontFamily: 'Manrope, sans-serif' }}>
                    20 mutuals
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
