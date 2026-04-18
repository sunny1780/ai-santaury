const focusItems = [
  {
    name: 'Product Research',
    description: 'Find high-demand, low-competition products that are profitable and practical to sell',
  },
  {
    name: 'Listing Optimization',
    description: 'Create keyword-rich titles, bullet points, and images that rank on Amazon and convert shoppers into buyers',
  },
  {
    name: 'Amazon Advertising',
    description: 'Run sponsored product campaigns to drive targeted traffic and grow your sales consistently',
  },
];

const skillsItems = [
  'Set up and manage a professional Amazon Seller Central account from scratch',
  'Research products using data-driven methods to find opportunities with strong demand and healthy margins',
  'Source products from suppliers and negotiate pricing that keeps your business profitable',
  'Create optimized product listings with the right keywords, compelling copy, and high-quality images',
  "Understand how Amazon's search algorithm works and use it to rank your products higher",
  'Run Amazon PPC advertising campaigns to drive traffic and increase visibility for your listings',
  'Manage inventory, track performance metrics, and make decisions based on your seller dashboard data',
  'Handle customer reviews, returns, and account health to maintain a strong seller reputation',
  'Scale your business by identifying new product opportunities and expanding your catalogue strategically',
];

const courseForItems = [
  'Complete beginners who want to start selling on Amazon with no prior experience',
  'Entrepreneurs looking to launch a product-based online business with low startup risk',
  'Freelancers and virtual assistants who want to offer Amazon account management as a service',
  'Small business owners who want to expand their reach by selling on the Amazon marketplace',
  'Anyone who wants to build a genuine source of online income through e-commerce',
];

const getStartedItems = [
  'No prior business, marketing, or e-commerce experience is required to join this course',
  'A laptop or desktop computer to access Amazon Seller Central and manage your account',
  'A willingness to invest time in research and learning before spending money on inventory',
  'Basic internet skills and the determination to build something real step by step',
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

export default function AmazonDetails() {
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
              Amazon is the world&apos;s largest online marketplace, and every single day millions of customers search for products to buy. The opportunity to build a real, profitable business on Amazon has never been greater — but the sellers who succeed are not the ones who simply list a product and hope for sales. They are the ones who understand the platform, research smartly, and execute with a clear strategy.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course gives you a complete, practical roadmap to start and grow a successful Amazon selling business. You will learn how to find profitable products, source them at the right cost, create listings that rank and convert, manage your seller account professionally, and run Amazon ads to drive consistent sales. Every lesson is built around real business decisions so you graduate with skills you can apply immediately — not just theory.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              Whether you want to build a side income or a full-time e-commerce business, this course gives you the foundation, tools, and confidence to make it happen. No prior business or e-commerce experience is needed. If you are ready to take your first step toward selling on Amazon, this is where you start.
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
            Selling Skills You Will Master
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
