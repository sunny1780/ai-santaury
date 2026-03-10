const learnItems = [
  'Create mobile app designs from scratch',
  'Create mockups using Figma',
  'Understand the differences between designing for IOS and Android',
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

export default function PythonDetail() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-10">
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
              It gives you a huge self-satisfaction when you look at your work and say, &quot;I made this!&quot;. I love that feeling after I&apos;m done working on something. When I lean back in my chair, look at the final result with a smile, and have this little &quot;spark joy&quot; moment. It&apos;s especially satisfying when I know I just made $5,000.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              I do! And that&apos;s why I got into this field. Not for the love of Web Design, which I do now. But for the LIFESTYLE! There are many ways one can achieve this lifestyle. This is my way. This is how I achieved a lifestyle I&apos;ve been fantasizing about for five years. And I&apos;m going to teach you the same. Often people think Web Design is complicated. That it needs some creative talent or knack for computers. Sure, a lot of people make it very complicated. People make the simplest things complicated. Like most subjects taught in the universities. But I don&apos;t like complicated. I like easy, like life hacks. I like to take the shortest and simplest route to my destination. I haven&apos;t gone to an art school or have a computer science degree. I&apos;m an outsider to this field who hacked himself into it, somehow ending up being a sought-after professional. That&apos;s how I&apos;m going to teach you Web Design. So you&apos;re not demotivated on your way with needless complexity. So you enjoy the process because it&apos;s simple and fun. So you can become a Freelance Web Designer in no time.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              For example, this is a Design course but I don&apos;t teach you Photoshop. Because Photoshop is needlessly complicated for Web Design. But people still teach it to web designers. I don&apos;t. I teach Figma – a simple tool that is taking over the design world. You will be designing a complete website within a week while others are learning how to create basic layouts in Photoshop.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              Second, this is a Development course. But I don&apos;t teach you how to code. Because for Web Design coding is needlessly complicated and takes too long to learn. Instead, I teach Webflow – a tool that is taking over the web design world. You will be building complex websites within two weeks while others are still learning the basics of HTML &amp; CSS. Third, this is a Freelancing course. But I don&apos;t just teach you how to write great proposals. I give you a winning proposal template. When you&apos;re done with the course, you will have a stunning portfolio website with portfolio pieces already in it. Buy this course now and take it whenever the time is right for you.
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
