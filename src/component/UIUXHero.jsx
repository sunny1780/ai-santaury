export default function UIUXHero() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-8 sm:py-12 lg:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto">
        {/* Top - Image */}
        <div className="w-full rounded-xl overflow-hidden mb-8 lg:mb-10">
          <img
            src={`${process.env.PUBLIC_URL}/images/uiux.png`}
            alt="UI/UX Design Course"
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Bottom - Title, metadata, button */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div className="flex flex-col gap-4">
            <h1
              className="text-[28px] sm:text-[36px] md:text-[42px] font-semibold text-[#162D66] m-0"
              style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
            >
              UI/UX Design Course
            </h1>
            <button
              type="button"
              className="w-fit px-6 py-3 rounded-full text-white font-medium text-base"
              style={{ fontFamily: 'Manrope, sans-serif', background: '#326AFD' }}
            >
              Get Registered Today →
            </button>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-8 text-[#2C5FE3]">
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
              <span className="text-base font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                4 Weeks
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              <span className="text-base font-medium" style={{ fontFamily: 'Manrope, sans-serif' }}>
                18:00 - 21:00
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
