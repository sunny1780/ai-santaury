const features = [
  {
    icon: '11.svg',
    title: 'Transparent Course Pricing',
    description: 'No hidden fees — get clear, information about tuition',
  },
  {
    icon: '12.svg',
    title: 'Flexible Payment Options',
    description: 'Choose from multiple payment plans, scholarships',
  },
  {
    icon: '13.svg',
    title: 'Skill Assessment Tools',
    description: 'Identify your strengths and learning needs with our guided',
  },
  {
    icon: '14.svg',
    title: 'On-Demand Enrollment',
    description: 'Apply anytime with immediate access to course materials',
  },
  {
    icon: '15.svg',
    title: 'Personalized Learning',
    description: 'Customizable curriculums tailored to fit your goals and pace.',
  },
];

const FeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-4 sm:p-6 flex gap-3 sm:gap-4 items-start shadow-sm">
    <div className="flex-shrink-0">
      <img
        src={`${process.env.PUBLIC_URL}/images/${icon}`}
        alt=""
        className="w-8 h-8 sm:w-10 sm:h-10"
      />
    </div>
    <div className="flex flex-col gap-2">
      <h3
        className="text-base sm:text-lg lg:text-xl font-semibold text-[#1B1D21] m-0"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '1.4' }}
      >
        {title}
      </h3>
      <p
        className="text-sm sm:text-base font-medium text-[#6B7280] m-0"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '1.5' }}
      >
        {description}
      </p>
    </div>
  </div>
);

export default function BuildSkills() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col gap-6">
        {/* Heading */}
        <h2
          className="text-[32px] sm:text-[40px] font-semibold text-[#162D66] text-center sm:text-left"
          style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '100%', margin: 0 }}
        >
          Build Skills<br />That Matter
        </h2>
        
        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>

      {/* Desktop Layout - unchanged */}
      <div className="hidden lg:grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {/* Column 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Heading */}
          <div style={{ paddingRight: 24, paddingTop: 40 }}>
            <h2
              style={{
                fontSize: 48,
                fontWeight: 600,
                lineHeight: '100%',
                color: '#162D66',
                letterSpacing: '0.005em',
                margin: 0,
                fontFamily: 'Manrope, sans-serif',
              }}
            >
              Build Skills<br />That Matter
            </h2>
          </div>
          {/* Feature Card */}
          <div style={{ paddingTop: 24 }}>
            <FeatureCard {...features[2]} />
          </div>
        </div>

        {/* Column 2 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <FeatureCard {...features[0]} />
          <FeatureCard {...features[3]} />
        </div>

        {/* Column 3 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          <FeatureCard {...features[1]} />
          <FeatureCard {...features[4]} />
        </div>
      </div>
    </section>
  );
}
