const focusItems = [
  {
    name: 'Manual Testing',
    description: 'Learn to design and execute test cases that catch real issues before they reach users',
  },
  {
    name: 'Test Automation',
    description: 'Write automated test scripts that run faster and cover more ground than manual testing alone',
  },
  {
    name: 'Bug Reporting',
    description: 'Document and communicate defects clearly so developers can fix issues quickly and efficiently',
  },
];

const skillsItems = [
  'Understand the software development lifecycle and where QA fits at every stage',
  'Design effective test cases and test plans that cover real user scenarios',
  'Perform manual testing on web and mobile applications with a structured approach',
  'Identify, document, and report bugs with clear steps to reproduce and priority levels',
  'Learn the fundamentals of automation and write scripts that test applications automatically',
  'Understand different types of testing including functional, regression, smoke, and exploratory testing',
  'Work with agile teams and participate in sprint cycles as a QA professional',
  'Build a strong QA portfolio with real test cases and automation scripts to show employers',
];

const courseForItems = [
  'Complete beginners who want to start a career in software quality assurance',
  'Developers who want to understand testing and write better, more reliable code',
  'Fresh graduates looking for an in-demand and well-paying entry point into the tech industry',
  'Manual testers who want to level up and move into automation testing',
  'Anyone who wants to understand how professional software teams ensure product quality',
];

const getStartedItems = [
  'No prior QA or programming experience is needed — we build everything from the ground up',
  'A laptop or desktop computer capable of running standard software applications',
  'Curiosity about how software works and a sharp eye for detail',
  'Consistency and a willingness to practice testing on real applications throughout the course',
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

export default function QualityAssuranceDetails() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="max-w-[1080px] mx-auto flex flex-col gap-10">
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Description
          </h3>
          <div className="flex flex-col gap-3">
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              Every great product starts with a commitment to quality. Quality Assurance is not just about finding bugs — it is about building systems, habits, and processes that ensure software works exactly the way it should, every single time. In a world where users have zero tolerance for broken experiences, QA professionals are the silent guardians of every digital product.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course takes you from the very basics of software testing all the way into the world of automation. You will learn how to think like a QA engineer — understanding what to test, why it matters, and how to do it systematically. The course covers manual testing fundamentals first, building the mindset you need, and then moves into automation so you can test faster, smarter, and at scale without relying on repetitive manual effort.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              No technical background is required to get started. Whether you are new to tech or a developer looking to add QA skills to your profile, this course gives you everything you need to land your first role as a QA engineer and contribute to real software teams with confidence.
            </p>
          </div>
        </div>

        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Core Focus Areas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {focusItems.map((item) => (
              <div
                key={item.name}
                className="rounded-xl border border-[#DBE2E7] p-5 flex flex-col gap-2 bg-[#FAFBFF]"
              >
                <span
                  className="text-base font-semibold text-[#162D66] m-0"
                  style={headingStyle}
                >
                  {item.name}
                </span>
                <p className="text-[16px] leading-[24px] font-normal m-0" style={bodyStyle}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            QA Skills You&apos;ll Master
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {skillsItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="text-[#326AFD] mt-1 flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
                  </svg>
                </span>
                <span className="text-[18px] leading-[28px] font-normal" style={bodyStyle}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Is This Course For You?
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {courseForItems.map((item, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-3 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#162D66] block" />
                <span className="text-[18px] leading-[28px] font-normal flex-1" style={bodyStyle}>
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            What You Need to Get Started
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {getStartedItems.map((item, index) => (
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
