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
  { id: 1, icon: 1, title: 'SEO & Digital Growth', description: 'Optimize websites, analyze performance, and drive organic traffic.' },
  { id: 2, icon: 2, title: 'English Communication', description: 'Develop fluency, confidence, and effective speaking for career advancement.' },
  { id: 3, icon: 3, title: 'Python Programming', description: 'Craft visuals, branding, social content, and marketing materials.' },
  { id: 4, icon: 4, title: 'MERN Development', description: 'Create full-stack applications with MongoDB, Express, React, and Node.js.' },
  { id: 5, type: 'figma', title: 'UI/UX Design', description: 'Design modern interfaces using Figma, Adobe XD, and industry-standard tools.' },
  { id: 6, type: 'peoples', title: 'AI Automation', description: 'Harness generative AI, ChatGPT, and automation to boost productivity.' },
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
  color: '#162D66',
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
    <h3 className="text-sm font-bold text-[#162D66] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
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
      <div className="max-w-[1080px] mx-auto">
      {/* Mobile Layout */}
      <div className="lg:hidden px-4 sm:px-8 py-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-3 mb-8">
          <Heading2>Our Courses</Heading2>
          <Description className="text-center">Explore Our Programs</Description>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <MobileCard icon={1} title="SEO & Digital Growth" description="Optimize websites, analyze performance, and drive organic traffic." />
          <MobileCard icon={2} title="English Communication" description="Develop fluency, confidence, and effective speaking for career advancement." />
          <MobileCard icon={3} title="Python Programming" description="Craft visuals, branding, social content, and marketing materials." />
          <MobileCard icon={4} title="MERN Development" description="Create full-stack applications with MongoDB, Express, React, and Node.js." />
          
          {/* Figma Card */}
          <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] flex items-center justify-center flex-shrink-0">
              <FigmaIcon />
            </div>
            <h3 className="text-sm font-bold text-[#162D66] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
              UI/UX Design
            </h3>
            <p className="text-xs font-medium text-[#6B7280] m-0 leading-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Design modern interfaces using Figma, Adobe XD, and industry-standard tools.
            </p>
          </div>

          {/* AI & Automation Card */}
          <div className="bg-white rounded-xl p-5 flex flex-col gap-4 shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-[#F5F8FF] flex items-center justify-center flex-shrink-0">
              <img src={`${process.env.PUBLIC_URL}/images/6.svg`} alt="AI Automation" className="w-6 h-6" />
            </div>
            <h3 className="text-sm font-bold text-[#162D66] m-0" style={{ fontFamily: 'Manrope, sans-serif' }}>
              AI Automation
            </h3>
            <p className="text-xs font-medium text-[#6B7280] m-0 leading-4" style={{ fontFamily: 'Manrope, sans-serif' }}>
              Harness generative AI, ChatGPT, and automation to boost productivity.
            </p>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Unchanged */}
      <div className="hidden lg:block" style={{ padding: '64px 80px' }}>
        {/* Header */}
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 48 }}>
          <Heading2>Our Courses</Heading2>
          <Description className="text-center">Explore Our Programs</Description>
        </div>

        {/* Main Layout: Left Grid + Right E-commerce Card */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
          {/* Left Side Grid */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
            {/* First Row: 3 small cards */}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center' }}>
              {courses.filter(c => [1, 2, 3].includes(c.id)).map((course) => (
                <div key={course.id} style={{ ...baseCard, width: 256 }}>
                  <div style={iconBox}>
                    {icons[course.icon]}
                  </div>
                  <h3 style={cardTitle}>{course.title}</h3>
                  <p style={cardDesc}>{course.description}</p>
                </div>
              ))}
            </div>

            {/* Second Row: Figma wide card + Custom Development card */}
            <div style={{ display: 'flex', gap: 10, justifyContent: 'center', width: '100%', maxWidth: 808 }}>
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
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 24, paddingTop: 30, minWidth: 0 }}>
                  <div style={{ ...iconBox, background: '#F5F8FF' }}>
                    <FigmaIcon />
                  </div>
                  <h3 style={cardTitle}>UI/UX Design</h3>
                  <p style={{ ...cardDesc, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    Design modern interfaces using Figma, Adobe XD, and industry-standard tools.
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
              <div style={{ ...baseCard, width: 256, flexShrink: 0 }}>
                <div style={iconBox}>
                  <img 
                    src={`${process.env.PUBLIC_URL}/images/6.svg`} 
                    alt="Custom Development" 
                    style={{ width: 24, height: 24 }} 
                  />
                </div>
                <h3 style={cardTitle}>AI Automation</h3>
                <p style={cardDesc}>Harness generative AI, ChatGPT, and automation to boost productivity.</p>
              </div>
            </div>
          </div>

          {/* Right Side: E-commerce Tall Card */}
          <div
            style={{
              width: 256.7895,
              height: 494,
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
              <h3 style={cardTitle}>MERN Development</h3>
              <p style={cardDesc}>Create full-stack applications with MongoDB, Express, React, and Node.js.</p>
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
      </div>
    </section>
  );
}
