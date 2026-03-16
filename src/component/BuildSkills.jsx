const features = [
  {
    icon: 'icons/1.svg',
    title: 'Community Support',
    description: 'Connect with peers, mentors, and learners across Pakistan for motivation and help.',
  },
  {
    icon: 'icons/2.svg',
    title: 'Hands-On Projects',
    description: 'Build real-world work through practical assignments and live sessions.',
  },
  {
    icon: 'icons/3.svg',
    title: 'Personalized Guidance',
    description: 'Tailored advice to match your level, goals, and pace.',
  },
  {
    icon: 'icons/4.svg',
    title: 'Expert Mentors',
    description: 'Learn from experienced instructors passionate about your success.',
  },
  {
    icon: 'icons/5.svg',
    title: 'Career Boost',
    description: 'Gain skills, a portfolio, and a certificate to open new opportunities.',
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-5 lg:p-6 flex gap-2.5 sm:gap-3 md:gap-4 items-start shadow-sm border border-[#DBE2E7] min-w-0">
    <div className="flex-shrink-0">
      <img
        src={`${process.env.PUBLIC_URL}/images/${icon}`}
        alt=""
        className="w-9 h-9 object-contain"
      />
    </div>
    <div className="flex flex-col gap-1.5 sm:gap-2 min-w-0 flex-1">
      <h3
        className="text-[15px] sm:text-base md:text-lg lg:text-xl font-semibold text-[#1B1D21] m-0"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '1.4' }}
      >
        {title}
      </h3>
      <p
        className="text-[13px] sm:text-sm md:text-base font-medium text-[#6B7280] m-0"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '1.5' }}
      >
        {description}
      </p>
    </div>
  </div>
);

export default function BuildSkills() {
  return (
    <section className="px-4 sm:px-6 md:px-8 lg:px-[80px] py-8 sm:py-10 md:py-12 lg:py-16 bg-white">
      <div className="max-w-[1080px] mx-auto">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-4 sm:gap-5 md:gap-6">
        {/* Heading */}
        <h2
          className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-semibold text-[#162D66] text-center sm:text-left"
          style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '100%', margin: 0 }}
        >
          Grow Confidently in Your Sanctuary
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:grid lg:gap-4 xl:gap-6" style={{ gridTemplateColumns: 'repeat(3, minmax(0, 1fr))' }}>
        {/* Column 1 */}
        <div className="flex flex-col gap-4 xl:gap-6 min-w-0">
          {/* Heading */}
          <div className="pr-4 xl:pr-6 pt-6 xl:pt-10">
            <h2
              className="text-[40px] xl:text-[48px] font-semibold text-[#162D66] m-0 leading-[100%]"
              style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
            >
              Grow Confidently in Your Sanctuary
            </h2>
          </div>
          {/* Feature Card */}
          <div className="pt-4 xl:pt-6">
            <FeatureCard {...features[2]} />
          </div>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col gap-4 xl:gap-6 min-w-0 pt-[62px] xl:pt-[70px]">
          <FeatureCard {...features[0]} />
          <FeatureCard {...features[3]} />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col gap-4 xl:gap-6 min-w-0 pt-[62px] xl:pt-[70px]">
          <FeatureCard {...features[1]} />
          <FeatureCard {...features[4]} />
        </div>
      </div>
      </div>
    </section>
  );
}
