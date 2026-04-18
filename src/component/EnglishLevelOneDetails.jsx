const focusItems = [
  {
    name: 'Speaking',
    description: 'Build confidence to talk in everyday situations using simple, clear sentences',
  },
  {
    name: 'Listening',
    description: 'Train your ear to understand spoken English at a natural beginner pace',
  },
  {
    name: 'Reading',
    description: 'Develop the ability to read and understand simple English texts and signs',
  },
];

const skillsItems = [
  'Introduce yourself and hold simple everyday conversations in English',
  'Listen to and understand basic spoken English, including instructions and short dialogues',
  'Read simple sentences, short paragraphs, and everyday written English',
  'Learn and use essential vocabulary for common topics like family, food, time, and places',
  'Understand basic sentence structure and use it naturally in speaking and writing',
  'Respond correctly in everyday situations such as greetings, shopping, and asking for directions',
  'Build the habit of reading short English content to grow vocabulary over time',
];

const courseForItems = [
  'Complete beginners who have little to no experience with English',
  'Students who know a few words but struggle to speak or understand English',
  'Adults who want to learn English for work, travel, or daily life',
  'Anyone who wants a structured, supportive environment to begin their English journey',
  'People who have tried learning before but found other methods too fast or too difficult',
];

const getStartedItems = [
  'No prior English knowledge is required — we start from the very beginning',
  'A willingness to speak, make mistakes, and practice every day',
  'A notebook to write down new words and phrases as you learn them',
  'Just 30 to 45 minutes of daily practice to see real progress each week',
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

export default function EnglishLevelOneDetails() {
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
              Language is connection. It opens doors, builds relationships, and gives you the confidence to express who you are. English Level 1 is the perfect starting point for anyone who wants to understand, speak, and read basic English with clarity and confidence.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              This course focuses on the three core skills that make real communication possible — Speaking, Listening, and Reading. You will not just memorize grammar rules or word lists. You will practice actual conversations, train your ear to understand natural English, and build reading habits that grow your vocabulary every single day.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              Everything is taught in simple steps designed for complete beginners. By the end of Level 1, you will be able to introduce yourself, understand basic instructions and conversations, and read simple English texts with ease. This is where your English journey begins.
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
            Skills You Will Build
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
