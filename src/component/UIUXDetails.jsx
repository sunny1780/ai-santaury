const skillsItems = [
  'Understand the core principles of user-centered design',
  'Conduct user research, create personas, and map user journeys',
  'Build wireframes and interactive prototypes in Figma',
  'Design polished, modern interfaces for mobile and web',
  'Apply typography, color theory, and layout principles with confidence',
  'Test your designs with real users and improve based on feedback',
];

const courseForItems = [
  'Beginners with no design experience who want to break into the field',
  'Developers who want to understand and apply real design thinking',
  'Entrepreneurs who want to design their own apps or digital products',
  'Creative people looking for a structured, career-ready skill',
  'Anyone transitioning into a digital design career',
];

const getStartedItems = [
  'No prior design experience is needed; we start from the basics',
  'Figma is completely free; no paid software is required',
  'A notebook for sketching early ideas is recommended, but not mandatory',
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

export default function UIUXDetails() {
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
              Great design is not just about making things look beautiful; it is about making them work beautifully. UI/UX Design is the art and science of creating digital experiences that feel intuitive, effortless, and meaningful to users. In today&apos;s competitive digital world, companies invest heavily in design because bad UX costs them customers, and great UX earns them loyalty.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course teaches you everything you need to become a confident UI/UX designer. You will learn how to research users, define problems, sketch ideas, build wireframes, create high-fidelity prototypes in Figma, and test your designs with real users. Most importantly, you will develop the thinking process behind every great design decision.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              You do not need any design background to join. If you have a laptop, an eye for detail, and curiosity about how apps and websites are made, you are already ready. By the end, you will have a professional portfolio that can land you your first design job or freelance client.
            </p>
          </div>
        </div>

        {/* Design Skills You'll Master */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Design Skills You&apos;ll Master
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

        {/* Is This Course For You? */}
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

        {/* What You Need to Get Started */}
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
