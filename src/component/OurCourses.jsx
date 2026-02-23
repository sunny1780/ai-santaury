import React from 'react';

// ── tiny inline helpers so the file is self-contained ──────────────────────
const Heading2 = ({ children }) => (
  <h2 style={{ fontSize: 42, fontWeight: 700, color: '#1B2B4B', margin: 0, fontFamily: 'Georgia, serif' }}>
    {children}
  </h2>
);

const Description = ({ children, className }) => (
  <p className={className} style={{ fontSize: 16, color: '#747474', margin: 0, fontFamily: 'sans-serif' }}>
    {children}
  </p>
);
// ───────────────────────────────────────────────────────────────────────────

// SVG icons matching the screenshot (outline style, light grey)
const icons = {
  1: (
    <svg width="24" height="24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="3"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
    </svg>
  ),
  2: (
    <svg width="24" height="24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"/>
    </svg>
  ),
  3: (
    <svg width="24" height="24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" viewBox="0 0 24 24">
      <rect x="2" y="4" width="20" height="14" rx="2"/><path d="M8 20h8M12 18v2"/>
    </svg>
  ),
  4: (
    <svg width="24" height="24" fill="none" stroke="#9CA3AF" strokeWidth="1.5" viewBox="0 0 24 24">
      <path d="M6 2h12a2 2 0 012 2v16a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z"/><path d="M9 7h6M9 12h6M9 17h4"/>
    </svg>
  ),
};

const courses = [
  { id: 1, icon: 1, title: 'Web Design',           description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 2, icon: 2, title: 'UI/UX Design',          description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 3, icon: 3, title: 'Responsive Design',     description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 4, icon: 4, title: 'E-commerce Solutions:', description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 5, type: 'figma',   title: 'UI/UX Design',         description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
  { id: 6, type: 'peoples', title: 'Custom Development',   description: 'From concept to launch, we create stunning, user-centric websites that elevate your brand and engage your audience.' },
];

// ── Figma icon SVG (colorful, matches screenshot) ──────────────────────────
const FigmaIcon = () => (
  <svg viewBox="0 0 38 57" width="28" height="28" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#1ABCFE"/>
    <path d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 01-19 0z" fill="#0ACF83"/>
    <path d="M19 0v19h9.5a9.5 9.5 0 000-19H19z" fill="#FF7262"/>
    <path d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z" fill="#F24E1E"/>
    <path d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z" fill="#A259FF"/>
  </svg>
);

// ── People placeholder (grey silhouette) ───────────────────────────────────
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

// ── Image icon placeholder (for cards 1-4) ─────────────────────────────────
const ImageIcon = () => (
  <svg width="20" height="20" fill="none" stroke="#9CA3AF" strokeWidth="1.5" viewBox="0 0 24 24">
    <rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/>
  </svg>
);

// ── Card styles ─────────────────────────────────────────────────────────────
const baseCard = {
  background: '#fff',
  borderRadius: 12,
  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
  padding: '32px',
  display: 'flex',
  flexDirection: 'column',
  gap: 20,
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
  fontSize: 15,
  fontWeight: 700,
  color: '#1B1D21',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'sans-serif',
};

const cardDesc = {
  fontSize: 13,
  lineHeight: '22px',
  color: '#6B7280',
  letterSpacing: '0.005em',
  margin: 0,
  fontFamily: 'sans-serif',
};

export default function OurCourses() {
  return (
    <section style={{ padding: '64px 80px', background: '#F5F8FF' }}>
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginBottom: 48 }}>
        <Heading2>Our Courses</Heading2>
        <Description className="text-center">Learn, grow, and integrate into society</Description>
      </div>

      {/* Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: 24,
      }}>
        {courses.map((course) => {
          // ── Wide Figma card (spans 2 cols) ──────────────────────────────
          if (course.type === 'figma') {
            return (
              <div
                key={course.id}
                style={{
                  gridColumn: 'span 2',
                  background: '#fff',
                  borderRadius: 10,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  display: 'flex',
                  overflow: 'hidden',
                  border: '0.84px solid #e5e7eb',
                  minHeight: 212,
                }}
              >
                {/* Left text side */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 24, minWidth: 0 }}>
                  <div style={{ ...iconBox, background: '#F5F8FF' }}>
                    <FigmaIcon />
                  </div>
                  <h3 style={cardTitle}>{course.title}</h3>
                  <p style={{ ...cardDesc, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {course.description}
                  </p>
                </div>

                {/* Right dark image side */}
                <div style={{
                  width: '40%',
                  minWidth: 140,
                  background: '#2c2c2c',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 16,
                  flexShrink: 0,
                }}>
                  {/* Figma logo large */}
                  <svg viewBox="0 0 38 57" width="80" height="80" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 28.5a9.5 9.5 0 1119 0 9.5 9.5 0 01-19 0z" fill="#1ABCFE"/>
                    <path d="M0 47.5A9.5 9.5 0 019.5 38H19v9.5a9.5 9.5 0 01-19 0z" fill="#0ACF83"/>
                    <path d="M19 0v19h9.5a9.5 9.5 0 000-19H19z" fill="#FF7262"/>
                    <path d="M0 9.5A9.5 9.5 0 009.5 19H19V0H9.5A9.5 9.5 0 000 9.5z" fill="#F24E1E"/>
                    <path d="M0 28.5A9.5 9.5 0 009.5 38H19V19H9.5A9.5 9.5 0 000 28.5z" fill="#A259FF"/>
                  </svg>
                </div>
              </div>
            );
          }

          // ── Wide Peoples card (spans 2 cols) ────────────────────────────
          if (course.type === 'peoples') {
            return (
              <div
                key={course.id}
                style={{
                  gridColumn: 'span 2',
                  background: '#fff',
                  borderRadius: 10,
                  boxShadow: '0 1px 4px rgba(0,0,0,0.08)',
                  display: 'flex',
                  overflow: 'hidden',
                  border: '0.84px solid #e5e7eb',
                  minHeight: 212,
                }}
              >
                {/* Left text side */}
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, padding: 24, minWidth: 0 }}>
                  <div style={{ ...iconBox, background: '#F5F8FF' }}>
                    <ImageIcon />
                  </div>
                  <h3 style={cardTitle}>{course.title}</h3>
                  <p style={{ ...cardDesc, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {course.description}
                  </p>
                </div>

                {/* Right image side with people photo */}
                <div style={{
                  width: '40%',
                  minWidth: 140,
                  flexShrink: 0,
                  overflow: 'hidden',
                }}>
                  <img
                    src={`${process.env.PUBLIC_URL}/images/peoples.png`}
                    alt="peoples"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>
              </div>
            );
          }

          // ── Regular small card ──────────────────────────────────────────
          return (
            <div key={course.id} style={baseCard}>
              <div style={iconBox}>
                {icons[course.icon]}
              </div>
              <h3 style={cardTitle}>{course.title}</h3>
              <p style={cardDesc}>{course.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}