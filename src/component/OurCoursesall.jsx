import { Link } from 'react-router-dom';
import Heading2 from './Headings';
import Description from './Descriptions';

const courses = [
  {
    title: 'UI/UX Design',
    href: '/uiux',
    description: 'Learn to create user-centered interfaces using Figma, wire framing, prototyping, and design principles.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'uiux.png',
  },
  {
    title: 'MERN Stack Development',
    href: '/website',
    description: 'Master MongoDB, Express, React, and Node.js to build full-stack web applications.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'Website.png',
  },
  {
    title: 'SEO & Digital Growth',
    href: '/seo',
    description: 'Learn search engine optimization and digital marketing strategies to grow your online presence.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'SEO.png',
  },
  {
    title: 'Python Programming',
    href: '/python',
    description: 'From basics to advanced: build automation, data science, and web development skills.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'python.png',
  },
];

const CourseCard = ({ title, description, level, duration, students, image, href }) => (
  <div className="bg-white rounded-xl overflow-hidden border border-[#DBE2E7] flex flex-col">
    <div className="h-40 bg-[#D3DBE0] overflow-hidden rounded-t-xl">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
      <div className="flex justify-between items-center gap-3 flex-wrap">
        <div className="flex gap-2 flex-wrap">
          <span
            className="px-3 py-1 rounded-md text-xs font-medium border border-[#B7D2FF] text-[#162D66] bg-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {level}
          </span>
          <span
            className="px-3 py-1 rounded-md text-xs font-medium border border-[#B7D2FF] text-[#162D66] bg-white"
            style={{ fontFamily: 'Manrope, sans-serif' }}
          >
            {duration}
          </span>
        </div>
        <span className="flex items-center gap-1.5 text-xs text-[#1f2937]" style={{ fontFamily: 'Manrope, sans-serif' }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="#9CA3AF">
            <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
          </svg>
          {students}
        </span>
      </div>
      <h3
        className="text-lg font-semibold text-[#162D66] m-0"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
      >
        {title}
      </h3>
      <p
        className="text-sm font-normal text-[#374151] m-0 flex-1"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '1.5' }}
      >
        {description}
      </p>
      {href ? (
        <Link
          to={href}
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white text-base font-medium no-underline transition-opacity hover:opacity-90"
          style={{
            fontFamily: 'Manrope, sans-serif',
            background: 'linear-gradient(90deg, #2563EB 0%, #3B82F6 100%)',
          }}
        >
          Enroll Now →
        </Link>
      ) : (
        <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white text-base font-medium"
          style={{
            fontFamily: 'Manrope, sans-serif',
            background: 'linear-gradient(90deg, #2563EB 0%, #3B82F6 100%)',
          }}
        >
          Enroll Now →
        </button>
      )}
    </div>
  </div>
);

export default function OurCoursesall() {
  return (
    <section
      className="relative overflow-hidden px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16"
      style={{
        background: 'linear-gradient(180deg, rgba(240, 244, 255, 0.9) 0%, rgba(255, 255, 255, 1) 50%, rgba(242, 247, 255, 0.95) 100%)',
      }}
    >
      {/* Background Lines (bgline.svg) - on top of gradient */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-[1]">
        <img
          src={`${process.env.PUBLIC_URL}/images/bgline.svg`}
          alt=""
          className="absolute w-[120%] left-[12%] -top-64 h-full object-contain opacity-80"
        />
      </div>

      {/* Content */}
      <div className="relative z-[2] max-w-[1080px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-12">
          <Heading2>Our Courses</Heading2>
          <Description className="text-center max-w-[500px]">
            Join our vibrant community events and connect with fellow Ukrainians in Norway.
          </Description>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <CourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
}
