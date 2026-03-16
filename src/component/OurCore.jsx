import Heading2 from './Headings';
import Description from './Descriptions';

const values = [
  {
    icon: 'ai1.svg',
    title: 'Discovery',
    description: 'We understand your current level and goals first.',
  },
  {
    icon: 'ai2.svg',
    title: 'Strategy',
    description: 'Personalized learning plan for your pace and needs.',
  },
  {
    icon: 'ai3.svg',
    title: 'Execution',
    description: 'Live sessions, projects, and modern tools.',
  },
  {
    icon: 'ai4.svg',
    title: 'Measurement',
    description: 'Regular feedback to help you grow steadily.',
  },
];

const ValueItem = ({ icon, title, description }) => (
  <div className="flex gap-4 items-start">
    <div className="w-16 h-16 rounded-xl bg-[#285ADE] flex items-center justify-center flex-shrink-0">
      <img
        src={`${process.env.PUBLIC_URL}/images/${icon}`}
        alt={title}
        className="w-9 h-9"
      />
    </div>
    <div className="flex flex-col gap-1">
      <h3
        className="text-black m-0"
        style={{
          fontFamily: 'Inter, sans-serif',
          fontWeight: 600,
          fontSize: '24px',
          lineHeight: '32px',
          letterSpacing: '0.005em',
        }}
      >
        {title}
      </h3>
      <p
        className="text-[#6B7280] m-0"
        style={{
          fontFamily: 'Manrope, sans-serif',
          fontWeight: 400,
          fontSize: '18px',
          lineHeight: '28px',
          letterSpacing: '0.005em',
        }}
      >
        {description}
      </p>
    </div>
  </div>
);

export default function OurCore() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
        {/* Left Column */}
        <div className="flex-1 flex flex-col gap-6">
          <Heading2 className="!text-left">Our Core Values</Heading2>
          <Description className="!text-left !max-w-none">
            The heart of everything we do at Ai Sanctuary
          </Description>
          <div className="rounded-xl overflow-hidden w-full max-w-[447px] h-[311px]">
            <img
              src={`${process.env.PUBLIC_URL}/images/a3.png`}
              alt="Love to learn"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex-1 flex flex-col gap-8 pt-6 lg:pt-10">
          {values.map((item, index) => (
            <ValueItem key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
