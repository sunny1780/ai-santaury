import Heading2 from './Headings';
import Description from './Descriptions';

const statNumber = {
  fontSize: 48,
  fontWeight: 700,
  color: '#2C5FE3',
  fontFamily: 'Manrope, sans-serif',
  lineHeight: '100%',
  margin: 0,
};

const statLabel = {
  fontSize: 16,
  fontWeight: 400,
  color: '#6B7280',
  fontFamily: 'Inter, sans-serif',
  lineHeight: '24px',
  margin: 0,
};

const stats = [
  { number: '100+', label: 'Enrolled\nLearners' },
  { number: '4+', label: 'Classes\nCompleted' },
  { number: '90+', label: 'Satisfaction\nRate' },
];

export default function WhyLearn() {
  return (
    <section style={{ padding: '64px 80px', background: '#F5F8FF' }}>
      <div style={{ display: 'flex', gap: 64, alignItems: 'center' }}>
        {/* Left: Image */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <img
            src={`${process.env.PUBLIC_URL}/images/comp.png`}
            alt="Learning with laptop"
            style={{ width: '100%', maxWidth: 400, borderRadius: 16, objectFit: 'cover' }}
          />
        </div>

        {/* Right: Text Content */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 24, alignItems: 'flex-start' }}>
          <h2
            className="text-[28px] sm:text-[36px] md:text-[42px] lg:text-[48px] leading-[100%] font-semibold text-[#162D66]"
            style={{
              fontFamily: 'Manrope, sans-serif',
              letterSpacing: '0.005em',
              fontWeight: 600,
              textAlign: 'left',
              margin: 0,
            }}
          >
            Why Learn With Us?
          </h2>
          <Description>
            You Can Learn Smarter, Grow Faster
          </Description>

          {/* Stats Row */}
          <div style={{ display: 'flex', gap: 80, marginTop: 24 }}>
            {stats.map((stat, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <p style={statNumber}>{stat.number}</p>
                <p style={{ ...statLabel, whiteSpace: 'pre-line' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
