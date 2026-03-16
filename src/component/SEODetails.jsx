const knowHowItems = [
  'Conduct keyword research using Google Keyword Planner, Ubersuggest, and Ahrefs',
  'Write SEO-optimized blog posts, articles, and website copy that ranks on Google',
  'Structure content with headings, meta descriptions, and smart internal linking',
  'Create social media content that drives real clicks, shares, and engagement',
  'Build a content calendar and develop a long-term content strategy',
  'Understand on-page SEO, technical SEO basics, and link-building principles',
];

const courseForItems = [
  'Beginners who want to start a career in digital marketing or writing',
  'Bloggers and content creators who want to grow their organic traffic',
  'Business owners who want to handle their own content and SEO in-house',
  'Marketing professionals who want to add content strategy to their skillset',
  'Freelancers who want to offer high-value writing services to clients',
];

const beforeDiveItems = [
  'No prior writing or SEO experience needed; we start from zero',
  'Basic English writing ability is helpful, but not a hard requirement',
  'All SEO tools used are free; no paid subscriptions required',
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

export default function SEODetails() {
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
              Words are the most powerful tool on the internet; they drive traffic, build trust, and convert visitors into customers. Content writing and SEO are among the most in-demand and well-paying digital skills today, and the best part is that anyone can learn them, regardless of their background.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course teaches you how to write content that people actually want to read, and that Google actually wants to rank. You will learn how to research keywords, structure blog posts and articles for maximum impact, write compelling copy for websites and social media, and build a content strategy that drives consistent organic traffic for any business or brand.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              Whether you want to build a freelance writing career, grow your own blog or business, or become a high-value marketing asset, this course gives you everything you need to succeed in the world of content and SEO.
            </p>
          </div>
        </div>

        {/* What You'll Know How to Do */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            What You&apos;ll Know How to Do
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {knowHowItems.map((item, index) => (
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

        {/* This Is Your Course If... - bullets */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            This Is Your Course If...
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

        {/* Before You Dive In - bullets */}
        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Before You Dive In
          </h3>
          <ul className="list-none pl-0 m-0 flex flex-col gap-2">
            {beforeDiveItems.map((item, index) => (
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
