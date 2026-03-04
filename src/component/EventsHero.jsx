import Heading2 from './Headings';
import Description from './Descriptions';

export default function EventsHero() {
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
          className="absolute w-[120%] left-[12%] -top-14 h-full object-contain opacity-90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Text Content - Centered */}
        <div className="flex flex-col items-center gap-4 mb-8 lg:mb-16">
          <Heading2>Our Events</Heading2>
          <Description className="text-center max-w-[600px]">
            Join exciting workshops, challenges, and sessions to build skills and connect with the community.
          </Description>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden bg-[#D3DBE0] aspect-square max-w-[280px] mx-auto w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/comp.png`}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden bg-[#D3DBE0] aspect-[16/9] w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/Hero.png`}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden bg-[#D3DBE0] min-h-[250px] w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/peoples.png`}
              alt="Event"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Layout - Unchanged */}
        <div className="hidden lg:flex flex-row gap-6">
          {/* Left div - 2 images, right aligned */}
          <div className="flex-1 flex justify-end">
            <div className="flex flex-col gap-6 items-end">
              <div className="rounded-xl overflow-hidden bg-[#D3DBE0] w-[305px] h-[215.5px]">
                <img
                  src={`${process.env.PUBLIC_URL}/images/comp.png`}
                  alt="Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-[#D3DBE0] w-[502px] h-[215.5px]">
                <img
                  src={`${process.env.PUBLIC_URL}/images/Hero.png`}
                  alt="Event"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right div - 1 image, left aligned */}
          <div className="flex-1 flex justify-start">
            <div className="rounded-xl overflow-hidden bg-[#D3DBE0] w-[502px] h-[452px]">
              <img
                src={`${process.env.PUBLIC_URL}/images/peoples.png`}
                alt="Event"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
