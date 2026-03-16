export default function OurInstructors() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="max-w-[1080px] mx-auto">
      {/* Header */}
      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-6 mb-8 lg:mb-12">
        <h2
          className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] font-semibold text-[#162D66] m-0 leading-tight"
          style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
        >
          What Our Learners
          <br />
          Say
        </h2>
        <p
          className="max-w-[400px] text-[16px] sm:text-[18px] leading-[26px] sm:leading-[28px] font-normal text-[#162D66] m-0 text-left lg:text-right pt-0 lg:pt-[15px]"
          style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
        >
          Real stories from students building skills, confidence, and opportunities with Ai Sanctuary.
        </p>
      </div>

      {/* Video Placeholder */}
      <div
        className="w-full rounded-xl overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-[#F3F4F6]"
        style={{
          backgroundImage: `
            linear-gradient(45deg, #E5E7EB 25%, transparent 25%),
            linear-gradient(-45deg, #E5E7EB 25%, transparent 25%),
            linear-gradient(45deg, transparent 75%, #E5E7EB 75%),
            linear-gradient(-45deg, transparent 75%, #E5E7EB 75%)
          `,
          backgroundSize: '24px 24px',
          backgroundPosition: '0 0, 0 12px, 12px -12px, -12px 0px',
        }}
      />
      </div>
    </section>
  );
}
