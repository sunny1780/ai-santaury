const titleStyle = {
  maxWidth: 226,
  fontSize: 20,
  fontWeight: 600,
  lineHeight: '28px',
  color: '#1B1D21',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'Manrope, sans-serif',
};

const descStyle = {
  maxWidth: 226.67,
  fontSize: 16,
  fontWeight: 500,
  lineHeight: '24px',
  color: '#6B7280',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'Manrope, sans-serif',
};

const headingStyle = {
  fontSize: 48,
  fontWeight: 600,
  lineHeight: '100%',
  color: '#162D66',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'Manrope, sans-serif',
};

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
  <div
    style={{
      background: '#fff',
      borderRadius: 12,
      padding: 24,
      display: 'flex',
      gap: 16,
      alignItems: 'flex-start',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    }}
  >
    <div style={{ flexShrink: 0 }}>
      <img
        src={`${process.env.PUBLIC_URL}/images/${icon}`}
        alt=""
        style={{ width: 40, height: 40 }}
      />
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h3 style={titleStyle}>{title}</h3>
      <p style={descStyle}>{description}</p>
    </div>
  </div>
);

export default function BuildSkills() {
  return (
    <section style={{ padding: '64px 80px', background: '#fff' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
        {/* Column 1 */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {/* Heading */}
          <div style={{ paddingRight: 24, paddingTop: 40 }}>
            <h2 style={headingStyle}>
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
