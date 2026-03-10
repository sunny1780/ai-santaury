import Description from './Descriptions';

const stats = [
  { number: '100+', label: 'Enrolled\nLearners' },
  { number: '4+', label: 'Classes\nCompleted' },
  { number: '90+', label: 'Satisfaction\nRate' },
];

export default function WhyLearn() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-[#F5F8FF]">
      <div className="max-w-[1080px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center">
        {/* Left: Image */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end order-first lg:order-none">
          <img
            src={`${process.env.PUBLIC_URL}/images/comp.png`}
            alt="Learning with laptop"
            className="w-full max-w-[300px] sm:max-w-[350px] lg:max-w-[400px] rounded-2xl object-cover"
          />
        </div>

        {/* Right: Text Content */}
        <div className="w-full lg:flex-1 flex flex-col gap-4 lg:gap-6 items-center lg:items-start text-center lg:text-left">
          <h2
            className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[100%] font-semibold text-[#162D66]"
            style={{
              fontFamily: 'Manrope, sans-serif',
              letterSpacing: '0.005em',
              fontWeight: 600,
              margin: 0,
            }}
          >
            Why Ai Sanctuary Stands Out
          </h2>
          <Description className="text-center lg:text-left">
            Learn smarter. Grow faster.
          </Description>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-8 sm:gap-12 lg:gap-20 mt-4 lg:mt-6">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-2 items-center lg:items-start">
                <p
                  className="text-[24px] sm:text-[28px] lg:text-[32px] font-bold text-[#2C5FE3] m-0 leading-none"
                  style={{ fontFamily: 'Manrope, sans-serif' }}
                >
                  {stat.number}
                </p>
                <p
                  className="text-sm lg:text-base font-normal text-[#6B7280] m-0 whitespace-pre-line text-center lg:text-left"
                  style={{ fontFamily: 'Inter, sans-serif', lineHeight: '24px' }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
