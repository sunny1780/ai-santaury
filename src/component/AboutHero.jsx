import Heading2 from './Headings';
import Description from './Descriptions';

const bulletPoints = [
  'Passionate mentors who care',
  'Hands-on projects that matter',
  'Welcoming community in Pakistan',
  'Practical skills for your future',
];

export default function AboutHero() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-6 md:px-8 lg:px-[80px] py-8 sm:py-10 md:py-12 lg:py-16">
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
          className="absolute w-[130%] sm:w-[120%] left-[0%] sm:left-[8%] lg:left-[12%] -top-40 sm:-top-56 md:-top-64 lg:-top-80 h-full object-contain opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1080px] mx-auto flex flex-col lg:flex-row gap-8 sm:gap-10 md:gap-12 lg:gap-16">
        {/* Left Column - Who We Are */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 min-w-0">
          <Heading2 className="!text-left">Who We Are</Heading2>
          <div className="flex flex-col gap-3 sm:gap-4">
            <Description className="!text-left !max-w-none">
              Established in 2023, Ai Sanctuary is dedicated to creating supportive digital learning experiences.
            </Description>
            <Description className="!text-left !max-w-none">
              We started with one simple idea: give beginners and youth in Pakistan a safe space to build real skills in design, AI, development, and communication.
            </Description>
          </div>
          <div className="rounded-lg sm:rounded-xl overflow-hidden w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/a1.png`}
              alt="Ai Sanctuary classroom"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Column - Why Us */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-5 md:gap-6 pt-0 sm:pt-8 md:pt-20 lg:pt-40 min-w-0">
          <Heading2 className="!text-left">Why Us</Heading2>
          <Description className="!text-left !max-w-none">
            We are more than a platform; we are your trusted learning companion.
          </Description>
          <ul className="list-disc pl-5 sm:pl-6 flex flex-col gap-1.5 sm:gap-2 m-0">
            {bulletPoints.map((point, index) => (
              <li key={index}>
                <span
                  className="text-[15px] sm:text-[16px] md:text-[18px] font-normal"
                  style={{
                    fontFamily: 'Manrope, sans-serif',
                    letterSpacing: '0.005em',
                    lineHeight: '1.6',
                    color: '#162D66',
                  }}
                >
                  {point}
                </span>
              </li>
            ))}
          </ul>
          <div className="rounded-lg sm:rounded-xl overflow-hidden w-full">
            <img
              src={`${process.env.PUBLIC_URL}/images/a2.png`}
              alt="Ai Sanctuary learning space"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
