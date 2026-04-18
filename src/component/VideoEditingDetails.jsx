const skillsItems = [
  'Edit and assemble footage using CapCut for fast, mobile-friendly workflows',
  'Work in Adobe Premiere Pro with a professional timeline-based editing approach',
  'Cut, trim, and sequence clips with pacing and storytelling in mind',
  'Add transitions, effects, and motion graphics that enhance — not distract',
  'Apply color correction and color grading to set the mood of your video',
  'Mix and balance audio, add music, and design sound for better viewer experience',
  'Use AI video generation tools to create or enhance content intelligently',
  'Export your videos in the right formats for YouTube, Instagram, and other platforms',
];

const toolsItems = [
  {
    name: 'CapCut',
    description: 'Fast, beginner-friendly editing for mobile and desktop content',
  },
  {
    name: 'Adobe Premiere Pro',
    description: 'Industry-standard professional video editing software',
  },
  {
    name: 'AI Video Generation',
    description: 'AI-powered platforms for generating and enhancing video content automatically',
  },
];

const courseForItems = [
  'Complete beginners who want to start editing videos from scratch',
  'Content creators looking to level up their YouTube, Instagram, or TikTok production quality',
  'Freelancers who want to offer video editing as a service to clients',
  'Marketers and entrepreneurs who produce their own brand or product videos',
  'Anyone curious about AI tools and the future of video content creation',
];

const getStartedItems = [
  'No prior editing experience required — we begin with the very basics',
  'CapCut is completely free to download on both mobile and desktop',
  'Adobe Premiere Pro offers a free trial to get you started',
  'A laptop or desktop computer is recommended for Premiere Pro projects',
  'A willingness to experiment, make mistakes, and keep improving',
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

export default function VideoEditingDetails() {
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
              A great video is not just footage stitched together — it is a story told with rhythm, emotion, and purpose. Video Editing is the craft of transforming raw clips into compelling content that grabs attention and holds it. Whether you want to create YouTube videos, brand content, short films, or social media reels, editing is the skill that turns your footage into something people actually want to watch.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course gives you a complete, practical foundation in video editing using the tools professionals rely on every day. You will work with CapCut for quick, powerful edits on mobile and desktop, dive into Adobe Premiere Pro for industry-standard workflows, and explore AI-powered video generation tools to understand where the future of content creation is heading. From cutting and trimming to color grading, sound design, and motion graphics — you will learn it all through hands-on projects.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              No experience needed. If you have a story to tell and a screen to tell it on, this course is your starting point. By the end, you will have a solid portfolio of edited videos ready to share, publish, or pitch to clients.
            </p>
          </div>
        </div>

        <div>
          <h3
            className="text-xl font-semibold text-[#162D66] mb-4 m-0"
            style={headingStyle}
          >
            Editing Skills You&apos;ll Master
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
            Tools You Will Use
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {toolsItems.map((tool) => (
              <div
                key={tool.name}
                className="rounded-xl border border-[#DBE2E7] p-5 flex flex-col gap-2 bg-[#FAFBFF]"
              >
                <span
                  className="text-base font-semibold text-[#162D66] m-0"
                  style={headingStyle}
                >
                  {tool.name}
                </span>
                <p className="text-[16px] leading-[24px] font-normal m-0" style={bodyStyle}>
                  {tool.description}
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
