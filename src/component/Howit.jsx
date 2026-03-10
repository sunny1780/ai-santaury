import Heading2 from './Headings';
import Description from './Descriptions';

const steps = [
  {
    number: '01',
    title: 'Enroll',
    description: 'Sign up and select your focus area in minutes.',
  },
  {
    number: '02',
    title: 'Engage & Build',
    description: 'Participate in live classes and apply concepts through projects.',
  },
  {
    number: '03',
    title: 'Create Your Portfolio',
    description: 'Develop real work samples to showcase your abilities.',
  },
  {
    number: '04',
    title: 'Earn Your Certificate',
    description: 'Complete milestones and receive official recognition.',
  },
];

export default function Howit() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="flex flex-col items-center gap-4 mb-8 lg:mb-12">
        <Heading2>How It Works</Heading2>
        <Description className="text-center">
          Your Learning Path
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
