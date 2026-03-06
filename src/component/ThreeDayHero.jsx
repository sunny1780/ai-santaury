export default function ThreeDayHero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16">
      {/* Gradient Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(135deg, #E8EEFF 0%, #F5F8FF 50%, #FFFFFF 100%)',
        }}
      />

      {/* Background Lines (bgline.svg) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/bgline.svg`}
          alt=""
          className="absolute w-[120%] left-[12%] -top-14 h-full object-contain opacity-70"
        />
      </div>

      {/* Content - only image */}
      <div className="relative z-10 flex justify-center">
        <div className="w-full max-w-[1024px] h-[452px] rounded-xl overflow-hidden bg-[#D3DBE0] shadow-sm">
          <img
            src={`${process.env.PUBLIC_URL}/images/banner.svg`}
            alt="3-Day Challenge banner"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
