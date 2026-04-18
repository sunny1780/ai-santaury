const focusItems = [
  {
    name: 'Prompt Design',
    description: 'Learn how to structure clear, effective instructions that get precise and useful AI responses',
  },
  {
    name: 'Advanced Techniques',
    description: 'Master chain-of-thought, role prompting, and iterative refinement for complex tasks',
  },
  {
    name: 'Practical Workflows',
    description: 'Build reusable prompt systems for real use cases in writing, research, and business tasks',
  },
];

const skillsItems = [
  'Understand how large language models process and respond to instructions',
  'Write clear, structured prompts that produce accurate and relevant outputs every time',
  'Use role-based prompting to give AI a specific perspective, tone, or area of expertise',
  'Apply chain-of-thought techniques to guide AI through complex, multi-step reasoning tasks',
  'Refine and iterate on prompts to improve response quality without starting from scratch',
  'Create prompt templates for content writing, research, summarization, and data analysis',
  'Avoid common prompting mistakes that lead to vague, off-topic, or low-quality outputs',
  'Build reusable prompt libraries that save time and deliver consistent results across projects',
  'Apply prompt engineering across different AI tools and adapt your approach for each one',
];

const courseForItems = [
  'Beginners who are curious about AI and want to learn how to use it more effectively',
  'Content creators, marketers, and writers who use AI tools and want better, faster results',
  'Business professionals who want to integrate AI into their daily workflows with confidence',
  'Developers and product managers who want to design better AI-powered features and products',
  'Anyone who feels like they are not getting the most out of AI tools and wants to change that',
];

const getStartedItems = [
  'No technical or programming background is required — this course is built for everyone',
  'Access to any AI language model to practice and test your prompts throughout the course',
  'A curious mindset and willingness to experiment — prompt engineering is learned by doing',
  'A notebook or document to build and save your personal prompt library as you progress',
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

export default function PromptEngineeringDetails() {
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
              Artificial intelligence is only as powerful as the instructions you give it. Prompt Engineering is the skill of communicating with AI models in a way that gets you exactly the output you need — whether that is written content, code, analysis, creative ideas, or complex problem solving. In a world where AI tools are being adopted across every industry, the people who know how to direct these tools effectively have a serious advantage over everyone else.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course teaches you the art and science of writing prompts that work. You will learn how AI language models think, what makes a prompt effective, and how small changes in the way you phrase a request can completely transform the quality of the response. From basic prompt structure to advanced techniques like chain-of-thought prompting, role-based instructions, and iterative refinement, you will develop a reliable system for getting consistent, high-quality results from any AI tool.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              No coding or technical background is required. If you use AI tools in your work or want to start using them more effectively, this course will change the way you interact with technology forever. By the end, you will be able to build prompt workflows that save time, improve output quality, and give you a genuine edge in whatever field you work in.
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
            Skills You Will Master
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
