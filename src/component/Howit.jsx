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

const numberStyle = {
  fontSize: 48,
  fontWeight: 700,
  fontFamily: 'Manrope, sans-serif',
  lineHeight: '100%',
  margin: 0,
  textAlign: 'right',
  color: '#2C5FE3',
};

const cardTitle = {
  maxWidth: 402,
  fontSize: 24,
  fontWeight: 600,
  lineHeight: '32px',
  color: '#1B1D21',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'Inter, sans-serif',
};

const cardDesc = {
  maxWidth: 402,
  fontSize: 18,
  lineHeight: '28px',
  fontWeight: 400,
  color: '#6B7280',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'Inter, sans-serif',
};

export default function Howit() {
  return (
    <section style={{ padding: '64px 80px', background: '#fff' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 48 }}>
        <Heading2>How It Works</Heading2>
        <Description className="text-center">
          Learning With Ai Sanctuary is Simple & Supportive
        </Description>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 32 }}>
        {steps.map((step, index) => (
          <div
            key={index}
            style={{
              background: '#fff',
              borderRadius: 12,
              padding: 32,
              minHeight: 200,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
            }}
          >
            <p style={numberStyle}>{step.number}</p>
            <h3 style={cardTitle}>{step.title}</h3>
            <p style={cardDesc}>{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
