const focusItems = [
  {
    name: 'Meta Ads Manager',
    description: 'Set up, launch, and manage ad campaigns professionally across Facebook and Instagram',
  },
  {
    name: 'Audience Targeting',
    description: 'Find and reach the exact people most likely to respond to your product or service',
  },
  {
    name: 'Campaign Optimization',
    description: 'Read your ad data, understand what is working, and improve results over time',
  },
];

const skillsItems = [
  'Navigate Meta Ads Manager confidently and understand every section of the platform',
  'Set up a Business Manager account and link pages, ad accounts, and payment methods correctly',
  'Plan and structure campaigns using the right campaign objectives for your specific goals',
  'Build custom audiences, lookalike audiences, and interest-based targeting to reach the right people',
  'Design and launch ads in multiple formats including image, video, carousel, and story ads',
  'Set budgets and bidding strategies that maximize your results without overspending',
  'Read and analyze ad performance reports to understand metrics like CPM, CPC, CTR, and ROAS',
  'Run A/B tests to compare creatives, audiences, and placements and scale what works',
  'Retarget website visitors and warm audiences to bring potential customers back to convert',
];

const courseForItems = [
  'Beginners with no prior marketing or advertising experience who want to learn from scratch',
  'Small business owners who want to run their own ads instead of outsourcing to an agency',
  'Freelancers who want to offer Meta advertising as a paid service to clients',
  'Marketing students or fresh graduates looking to add a high-demand digital skill to their profile',
  'Social media managers who want to move beyond organic content and into paid advertising',
];

const getStartedItems = [
  'No prior marketing experience is required — this course starts from absolute basics',
  'A Facebook account to set up Meta Business Manager and access Ads Manager',
  'A small practice budget for running live test campaigns during the course is helpful but not mandatory',
  'A laptop or desktop for navigating Meta Ads Manager comfortably during lessons',
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

export default function MetaMarketingDetails() {
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
              With billions of active users on Facebook and Instagram, Meta is the most powerful advertising platform in the world for reaching the right people at the right time. But running ads is not just about boosting a post and hoping for results — it is about strategy, targeting, creative, and data. The brands and businesses that win on Meta are the ones that understand how the platform works and use it with intention.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course teaches you everything you need to plan, launch, manage, and optimize paid ad campaigns on Meta. You will get hands-on experience inside Meta Ads Manager — the professional tool used by marketers and businesses worldwide to run campaigns across Facebook and Instagram. From setting up your first campaign to understanding audiences, budgets, ad formats, and performance data, every skill in this course is practical and immediately applicable.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              Whether you want to grow your own business, work as a freelance media buyer, or join a marketing team, this course gives you the real-world skills and confidence to run ads that deliver results. No marketing background is needed — just bring your ambition and a willingness to learn by doing.
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
            Marketing Skills You Will Master
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
