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

      {/* Learners Video */}
      <div className="w-full rounded-xl overflow-hidden min-h-[280px] sm:min-h-[360px] lg:min-h-[420px] bg-black flex items-center justify-center">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          controls
          playsInline
          preload="metadata"
          onEnded={(e) => {
            e.currentTarget.currentTime = 0;
            e.currentTarget.play();
          }}
        >
          <source src="https://customer-leo8lubv91ct4vwd.cloudflarestream.com/362626039cd0538734e5a41b4e3d2923/manifest/video.m3u8" type="application/x-mpegURL" />
          Your browser does not support the video tag.
        </video>
      </div>
      </div>
    </section>
  );
}
