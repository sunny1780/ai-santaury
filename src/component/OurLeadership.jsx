import Heading2 from './Headings';
import Description from './Descriptions';

const nameStyle = {
  fontSize: 18,
  fontWeight: 600,
  color: '#1B1D21',
  fontFamily: 'Manrope, sans-serif',
  lineHeight: '24px',
  margin: 0,
};

const roleStyle = {
  fontSize: 14,
  fontWeight: 500,
  color: '#6B7280',
  fontFamily: 'Inter, sans-serif',
  lineHeight: '20px',
  margin: 0,
};

const descStyle = {
  fontSize: 14,
  fontWeight: 400,
  color: '#6B7280',
  fontFamily: 'Inter, sans-serif',
  lineHeight: '20px',
  margin: 0,
};

const teamMembers = [
  {
    name: 'Faizan Rasool',
    role: 'Institute Manager',
    description: 'Leading the community with passion',
    image: '1.png',
  },
  {
    name: 'Muhammad Moeez',
    role: 'Institute Manager',
    description: 'Organizing memorable experiences',
    image: '2.png',
  },
  {
    name: 'Amir Abbasi',
    role: 'AI tools & automations',
    description: 'Leading the community with passion',
    image: '3.png',
  },
  {
    name: 'Steve',
    role: 'English Communication',
    description: 'Building bridges in the community',
    image: '4.png',
  },
  {
    name: 'Syed Farhan Ali',
    role: 'Full Stack Developer',
    description: 'Description for member 5',
    image: '5.png',
  },
  {
    name: 'Rida Fatima',
    role: 'UI/UX Design',
    description: 'Description for member 6',
    image: '6.png',
  },
  {
    name: 'Mudasir ',
    role: 'Full Stack Developer',
    description: 'Description for member 7',
    image: '7.png',
  },
  {
    name: 'Asma Ijaz',
    role: 'Full Stack Developer',
    description: 'Description for member 8',
    image: '8.png',
  },
  {
    name: 'Humna Munir',
    role: 'Content Writer @ SEO Expert',
    description: 'Description for member 9',
    image: '9.png',
  },
];

const TeamCard = ({ name, role, description, image }) => (
  <div
    style={{
      background: '#fff',
      borderRadius: 16,
      overflow: 'hidden',
      boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)',
    }}
  >
    {/* Image */}
    <div
      style={{
        height: 240,
        overflow: 'hidden',
      }}
    >
      <img
        src={`${process.env.PUBLIC_URL}/images/team/${image}`}
        alt={name}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
        }}
      />
    </div>

    {/* Content */}
    <div style={{ padding: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
      <h3 style={nameStyle}>{name}</h3>
      <p style={roleStyle}>{role}</p>
      <p style={descStyle}>{description}</p>
    </div>
  </div>
);

export default function OurLeadership() {
  return (
    <section style={{ padding: '64px 80px', background: '#F5F8FF' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16, marginBottom: 48 }}>
        <Heading2>Our Leadership</Heading2>
        <Description className="text-center">
          Dedicated volunteers working tirelessly to make Mrija Norway a welcoming home for our community
        </Description>
      </div>

      {/* Team Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
