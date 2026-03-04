import Heading2 from './Headings';
import Description from './Descriptions';

const courses = [
  {
    title: 'UI/UX Design',
    description: 'Learn to create user-centered interfaces using Figma, wire framing, prototyping, and design principles.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'a1.png',
  },
  {
    title: 'MERN Stack Development',
    description: 'Master MongoDB, Express, React, and Node.js to build full-stack web applications.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'a2.png',
  },
  {
    title: 'SEO & Digital Growth',
    description: 'Learn search engine optimization and digital marketing strategies to grow your online presence.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'a3.png',
  },
  {
    title: 'Python Programming',
    description: 'From basics to advanced: build automation, data science, and web development skills.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'a1.png',
  },
  {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'a2.png',
  },
  {
    title: 'Lorem Ipsum',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.',
    level: 'All levels',
    duration: '4 Weeks',
    students: '85+ students',
    image: 'a3.png',
  },
];

const CourseCard = ({ title, description, level, duration, students, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col">
    <div className="h-40 bg-[#D3DBE0] overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6 flex flex-col gap-3 flex-1">
      <div className="flex justify-between items-center text-xs text-[#6B7280]">
        <span style={{ fontFamily: 'Manrope, sans-serif' }}>{level}</span>
        <span style={{ fontFamily: 'Manrope, sans-serif' }}>{duration}</span>
        <span className="flex items-center gap-1" style={{ fontFamily: 'Manrope, sans-serif' }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
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
        className="text-sm font-normal text-[#6B7280] m-0 flex-1"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '1.5' }}
      >
        {description}
      </p>
      <button
          type="button"
          className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-full text-white text-base font-medium"
          style={{
            fontFamily: 'Manrope, sans-serif',
            background: '#326AFD',
          }}
        >
          Enroll Now →
        </button>
    </div>
  </div>
);

export default function OurCoursesall() {
  return (
    <section className="relative overflow-hidden px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      {/* Background Lines (bgline.svg) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <img
          src={`${process.env.PUBLIC_URL}/images/bgline.svg`}
          alt=""
          className="absolute w-[120%] left-[12%] -top-14 h-full object-contain opacity-60"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
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
