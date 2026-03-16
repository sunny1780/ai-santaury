const buildItems = [
  'Build dynamic, component-based frontends with React and React Hooks',
  'Create robust REST APIs using Node.js and Express.js',
  'Design and manage NoSQL databases with MongoDB and Mongoose',
  'Implement secure user authentication with JWT and bcrypt',
  'Connect the frontend and backend into a seamless full-stack application',
  'Deploy live MERN applications to cloud platforms like Vercel and Render',
];

const readyItems = [
  'Developers with a working knowledge of HTML, CSS, and JavaScript',
  'Frontend developers who want to expand confidently into backend work',
  'Graduates who want to become job-ready full-stack developers fast',
  'Freelancers who want to build and deliver complete web applications solo',
  'Entrepreneurs who want to develop and own their own web product',
];

const preparedItems = [
  'Basic knowledge of HTML, CSS, and JavaScript is required before starting',
  'Some familiarity with the command line is helpful, but not mandatory',
  'Commitment to complete all hands-on projects throughout the 12 weeks',
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

export default function WebsiteDetails() {
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
              The MERN Stack — MongoDB, Express.js, React, and Node.js — is one of the most powerful and widely-used technology combinations in modern web development. It lets you build complete, full-stack web applications entirely in JavaScript, making you a highly valuable developer who can work on both the frontend and backend of any product.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course is for those who already have basic web development knowledge and are ready to become a professional full-stack developer. You will build real-world projects, including a task management system, a social media platform backend, and a fully deployed e-commerce application complete with user authentication, database integration, and REST APIs.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              By the end, you will have the skills, the portfolio, and the confidence to apply for full-stack developer roles, land freelance projects, or build your own SaaS product entirely from scratch.
            </p>
          </div>
        </div>

        {/* What You'll Be Able to Build & Ship */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            What You&apos;ll Be Able to Build &amp; Ship
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {buildItems.map((item, index) => (
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

        {/* You're Ready for This Course If... - bullets only here */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            You&apos;re Ready for This Course If...
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {readyItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-3 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#162D66] block" />
                <span className="text-[18px] leading-[28px] font-normal flex-1" style={bodyStyle}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Come Prepared With - bullets */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Come Prepared With
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {preparedItems.map((item, index) => (
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
