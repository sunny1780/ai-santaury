import React from 'react';
import Heading2 from './Headings';
import Description from './Descriptions';

const icons = {
  1: (
    <img 
      src={`${process.env.PUBLIC_URL}/images/1.svg`} 
      alt="Web Design" 
      style={{ width: 24, height: 24 }} 
    />
  ),
  2: (
    <img 
      src={`${process.env.PUBLIC_URL}/images/2.svg`} 
      alt="UI/UX Design" 
      style={{ width: 24, height: 24 }} 
    />
  ),
  3: (
    <img 
      src={`${process.env.PUBLIC_URL}/images/3.svg`} 
      alt="Responsive Design" 
      style={{ width: 24, height: 24 }} 
    />
  ),
  4: (
    <img 
      src={`${process.env.PUBLIC_URL}/images/4.svg`} 
      alt="E-commerce Solutions" 
      style={{ width: 24, height: 24 }} 
    />
  ),
};

const courses = [
  { id: 1, icon: 1, title: 'Web Design', description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 2, icon: 2, title: 'UI/UX Design', description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 3, icon: 3, title: 'Responsive Design', description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 4, icon: 4, title: 'E commerce Solution', description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 5, type: 'figma', title: 'UI/UX Design', description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 6, type: 'peoples', title: 'Custom Development', description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
];

const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#1ABCFE"/>
    <path d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 01-19 0z" fill="#0ACF83"/>
    <path d="M19 0v19h9.5a9.5 9.5 0 000-19H19z" fill="#FF7262"/>
    <path d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z" fill="#F24E1E"/>
    <path d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z" fill="#A259FF"/>
  </svg>
);

const PeoplePlaceholder = () => (
  <div style={{ width: '100%', height: '100%', background: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
      <circle cx="22" cy="18" r="10" fill="#9CA3AF"/>
      <path d="M2 50c0-11 9-20 20-20s20 9 20 20" fill="#9CA3AF"/>
      <circle cx="42" cy="18" r="8" fill="#6B7280"/>
      <path d="M30 50c0-9 6.7-16.3 15-19" stroke="#6B7280" strokeWidth="2"/>
    </svg>
  </div>
);

const ImageIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#9CA3AF" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
  </svg>
);

const baseCard = {
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  padding: '30px 24px',
  display: 'flex',
  flexDirection: 'column',
  gap: 16,
};

const iconBox = {
  width: 52,
  height: 52,
  borderRadius: 12,
  background: '#F5F8FF',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexShrink: 0,
};

const cardTitle = {
  width: 149,
  height: 24,
  fontSize: 14,
  fontWeight: 700,
  lineHeight: '24px',
  color: '#1B1D21',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'Manrope, sans-serif',
};

const cardDesc = {
  width: 194.53,
  height: 64,
  fontSize: 12,
  lineHeight: '16px',
  fontWeight: 500,
  color: '#6B7280',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'Manrope, sans-serif',
};

const MobileCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow-sm">
    <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] flex items-center justify-center flex-shrink-0">
      {icons[icon]}
    </div>
    <h3 className="text-sm font-bold text-[#1B1D21] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
      {title}
    </h3>
    <p className="text-xs font-medium text-[#6B7280] m-0 leading-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
      {description}
    </p>
  </div>
);

export default function OurCourses() {
  return (
    <section className="bg-[#F5F8FF]">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 sm:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <Heading2>Our Courses</Heading2>
          <Description className="text-center">Learn, grow, and integrate into society</Description>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <MobileCard icon={1} title="Web Design" description="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." />
          <MobileCard icon={2} title="UI/UX Design" description="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." />
          <MobileCard icon={3} title="Responsive Design" description="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." />
          <MobileCard icon={4} title="E-commerce Solution" description="From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience." />
          
          {/* Figma Card */}
          <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] flex items-center justify-center flex-shrink-0">
              <FigmaIcon />
            </div>
            <h3 className="text-sm font-bold text-[#1B1D21] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
              UI/UX Design
            </h3>
            <p className="text-xs font-medium text-[#6B7280] m-0 leading-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>

          {/* Custom Development Card */}
          <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] flex items-center justify-center flex-shrink-0">
              <img src={`${process.env.PUBLIC_URL}/images/6.svg`} alt="Custom Development" className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#1B1D21] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Custom Development
            </h3>
            <p className="text-xs font-medium text-[#6B7280] m-0 leading-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:block" style={{ padding: '64px 80px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <Heading2>Our Courses</Heading2>
          <Description className="text-center">Learn, grow, and integrate into society</Description>
        </div>

        {/* Main Layout: Left Grid + Right E-commerce Card */}
        <div style={{ display: 'flex', gap: 24 }}>
          {/* Left Side Grid */}
          <div style={{ flex: 1 }}>
            {/* First Row: 3 small cards */}
            <div style={{ display: 'flex', gap: 20, marginBottom: 24 }}>
              {courses.filter(c => [1, 2, 3].includes(c.id)).map((course) => (
                <div key={course.id} style={{ ...baseCard, width: 280 }}>
                  <div style={iconBox}>
                    {icons[course.icon]}
                  </div>
                  <h3 style={cardTitle}>{course.title}</h3>
                  <p style={cardDesc}>{course.description}</p>
                </div>
              ))}
            </div>

            {/* Second Row: Figma wide card + Custom Development card */}
            <div style={{ display: 'flex', gap: 20 }}>
              {/* Figma Wide Card */}
              <div
                style={{
                  flex: 1,
                  background: '#fff',
                  borderRadius: 10,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  display: 'flex',
                  overflow: 'hidden',
                  border: '0.84px solid #e5e7eb',
                  minHeight: 252,
                }}
              >
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 24, minWidth: 0 }}>
                  <div style={{ ...iconBox, background: '#F5F8FF' }}>
                    <FigmaIcon />
                  </div>
                  <h3 style={cardTitle}>UI/UX Design</h3>
                  <p style={{ ...cardDesc, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.
                  </p>
                </div>
                <div style={{
                  width: '50%',
                  minWidth: 160,
                  padding: 16,
                  flexShrink: 0,
                }}>
                  <div style={{
                    width: '100%',
                    height: '100%',
                    background: '#2c2c2c',
                    borderRadius: 12,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <svg viewBox="0 0 38 57" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                      <path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#1ABCFE"/>
                      <path d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 01-19 0z" fill="#0ACF83"/>
                      <path d="M19 0v19h9.5a9.5 9.5 0 000-19H19z" fill="#FF7262"/>
                      <path d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z" fill="#F24E1E"/>
                      <path d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z" fill="#A259FF"/>
                    </svg>
                  </div>
                </div>
              </div>

              {/* Custom Development Card */}
              <div style={{ ...baseCard, width: 280, flexShrink: 0 }}>
                <div style={iconBox}>
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/6.svg`} 
                    alt="Custom Development" 
                    style={{ width: 24, height: 24 }} 
                  />
                </div>
                <h3 style={cardTitle}>Custom Development</h3>
                <p style={cardDesc}>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
              </div>
            </div>
          </div>

          {/* Right Side: E-commerce Tall Card */}
          <div
            style={{
              width: 280.7895,
              height: 506,
              background: '#fff',
              borderRadius: 8.42,
              border: '0.84px solid #e5e7eb',
              boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
              flexShrink: 0,
            }}
          >
            <div style={{ padding: 24, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div style={iconBox}>
                {icons[4]}
              </div>
              <h3 style={cardTitle}>E-commerce Solution</h3>
              <p style={cardDesc}>From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.</p>
            </div>
            <div style={{ flex: 1, overflow: 'hidden', padding: 16 }}>
              <img
                src={`${process.env.PUBLIC_URL}/images/peoples.png`}
                alt="peoples"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 12 }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
