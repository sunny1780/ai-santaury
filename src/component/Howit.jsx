import Heading2 from './Headings';
import Description from './Descriptions';

const steps = [
  {
    number: '01',
    title: 'Inspire',
    description: 'We inspire Ukrainians in Norway to embrace their heritage while building a new life, fostering confidence and cultural pride.',
  },
  {
    number: '02',
    title: 'Support',
    description: 'From language learning to legal guidance, we provide comprehensive support for every step of the integration journey.',
  },
  {
    number: '03',
    title: 'Connect',
    description: 'We create meaningful connections between Ukrainian families, Norwegian communities, and professional networks.',
  },
  {
    number: '04',
    title: 'Shape the Future',
    description: 'Through education and mentorship, we prepare Ukrainian families to thrive and contribute to Norwegian society.',
  },
];

export default function Howit() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="flex flex-col items-center gap-4 mb-8 lg:mb-12">
        <Heading2>How It Works</Heading2>
        <Description className="text-center">
          Learning With Ai Sanctuary is Simple & Supportive
        </Description>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-5 sm:p-6 lg:p-8 flex flex-col gap-3 sm:gap-4 shadow-sm"
            style={{ boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)' }}
          >
            <p
              className="text-[32px] sm:text-[40px] lg:text-[48px] font-bold text-right text-[#2C5FE3] m-0 leading-none"
              style={{ fontFamily: 'Manrope, sans-serif' }}
            >
              {step.number}
            </p>
            <h3
              className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#1B1D21] m-0"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.005em', lineHeight: '1.3' }}
            >
              {step.title}
            </h3>
            <p
              className="text-sm sm:text-base lg:text-lg font-normal text-[#6B7280] m-0"
              style={{ fontFamily: 'Inter, sans-serif', letterSpacing: '0.005em', lineHeight: '1.6' }}
            >
              {step.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
