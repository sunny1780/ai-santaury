const skillsItems = [
  'Understand Python syntax, variables, data types, and control flow',
  'Write functions, work with modules, and build reusable code',
  'Work with files, APIs, and external data sources',
  'Build automation scripts that save hours of manual work',
  'Create data-driven programs using popular Python libraries',
  'Develop a complete final project to showcase your skills',
];

const perfectForItems = [
  'Complete beginners with zero programming experience',
  'Students who want to add a high-value technical skill to their profile',
  'Professionals who want to automate repetitive tasks at work',
  'Entrepreneurs who want to build their own tools and scripts',
  'Anyone curious about AI, data, or software development',
];

const beforeBeginItems = [
  'No programming experience required, we start from an absolute scratch',
  'No paid software needed, all tools used are completely free',
  'A commitment to practice and write code every day',
];

const bodyStyle = {
  fontFamily: 'Manrope, sans-serif',
  letterSpacing: '0.005em',
  color: '#5A666E',
};

const headingStyle = {
  fontFamily: 'Manrope, sans-serif',
  letterSpacing: '0.005em',
  color: '#162D66',
};

export default function PythonDetail() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-10">
        {/* Description */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Description
          </h3>
          <div className="flex flex-col gap-3">
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              Python is one of the most powerful, versatile, and in-demand programming languages in the world today. Whether you want to build web applications, automate boring tasks, analyze data, or dive into artificial intelligence, Python is your starting point. This course is designed to take you from absolute zero to writing real Python programs with confidence.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              We believe learning to code should be practical, not theoretical. That is why this course skips the unnecessary jargon and focuses on building real projects from Day 1. You will write code every single day, solve real-world problems, and build a portfolio that proves your skills to future employers or clients.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              By the end of this course, you will understand how Python works, why it is so widely used across industries, and how to apply it in your own career or business. Whether you are a student, a professional looking to upskill, or an entrepreneur who wants to automate processes, this course will change the way you think and work.
            </p>
          </div>
        </div>

        {/* Skills You'll Walk Away With */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Skills You&apos;ll Walk Away With
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {skillsItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#326AFD] mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
                  </svg>
                </span>
                <span className="text-[18px] leading-[28px] font-normal" style={bodyStyle}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Perfect For You If... - bullets */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Perfect For You If...
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {perfectForItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-3 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#162D66] block" />
                <span className="text-[18px] leading-[28px] font-normal flex-1" style={bodyStyle}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Before You Begin - bullets */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Before You Begin
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {beforeBeginItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-3 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#162D66] block" />
                <span className="text-[18px] leading-[28px] font-normal flex-1" style={bodyStyle}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
