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
      <div className="relative z-10 max-w-[1080px] mx-auto">
        {/* Text Content - Centered */}
        <div className="flex flex-col items-center gap-4 mb-8 lg:mb-16">
          <Heading2>Our Events</Heading2>
          <Description className="text-center max-w-[600px]">
            Join exciting workshops, challenges, and sessions to build skills and connect with the community.
          </Description>
        </div>

        {/* Mobile Layout - 1, 2, 3 */}
        <div className="lg:hidden flex flex-col gap-4">
          <div className="rounded-xl overflow-hidden bg-[#D3DBE0] aspect-square max-w-[280px] mx-auto w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/one.png`}
              alt="Event 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden bg-[#D3DBE0] aspect-[16/9] w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/two.png`}
              alt="Event 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="rounded-xl overflow-hidden bg-[#D3DBE0] min-h-[250px] w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/three.png`}
              alt="Event 3"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Desktop Layout - Left: 1 & 2, Right: 3 */}
        <div className="hidden lg:flex flex-row gap-6">
          {/* Left - image 1 aur 2 */}
          <div className="flex-1 flex justify-end">
            <div className="flex flex-col gap-6 items-end">
              <div className="rounded-xl overflow-hidden bg-[#D3DBE0] w-[305px] h-[215.5px]">
                <img
                  src={`${process.env.PUBLIC_URL}/images/one.png`}
                  alt="Event 1"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden bg-[#D3DBE0] w-[502px] h-[215.5px]">
                <img
                  src={`${process.env.PUBLIC_URL}/images/two.png`}
                  alt="Event 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right - image 3 */}
          <div className="flex-1 flex justify-start">
            <div className="rounded-xl overflow-hidden bg-[#D3DBE0] w-[502px] h-[452px]">
              <img
                src={`${process.env.PUBLIC_URL}/images/three.png`}
                alt="Event 3"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
