const learnItems = [
  'Create mobile app designs from scratch',
  'Create mockups using Figma',
  'Understand the differences between designing for iOS and Android',
  'Start a new career as a UI/UX designer',
  'Create wireframe designs for e-Commerce Project',
];

const whoItems = [
  'No pre-knowledge required - we\'ll teach you everything you need to know',
  'A PC or Mac is required',
  'No software is required in advance of the course (all software used in the course is free or has a demo version)',
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
              Nothing feels better than creating something and earning from it. I got into Web Design because of the lifestyle it offered. I hacked myself into it and learned to make complex topics simple, fun, and result in quick wins as a Freelance Web Designer.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course teaches Figma for design (not Photoshop — it&apos;s needlessly complicated). You&apos;ll design a complete website in a week.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              We teach Webflow for development (no heavy HTML & CSS coding). Build complex websites in two weeks. We also include a Freelancing course with a winning proposal template and a stunning portfolio website.
            </p>
          </div>
        </div>

        {/* What you'll learn */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            What you&apos;ll learn
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {learnItems.map((item, index) => (
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

        {/* Who this course is for */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Who this course is for:
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {whoItems.map((item, index) => (
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

        {/* Requirement */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Requirement
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {whoItems.map((item, index) => (
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
      </div>
    </section>
  );
}
