const focusItems = [
  {
    name: 'Accent & Pronunciation',
    description: 'Train your mouth and ear to produce clear, natural English sounds with a neutral, confident accent',
  },
  {
    name: 'Speaking Proficiency',
    description: 'Build the fluency and confidence to speak in full sentences without pausing, translating, or hesitating',
  },
  {
    name: 'Listening & Comprehension',
    description: 'Understand spoken English at a natural pace including different accents and everyday expressions',
  },
];

const skillsItems = [
  'Master the correct pronunciation of English vowel and consonant sounds that are difficult for non-native speakers',
  'Develop stress and intonation patterns that make your speech sound natural and easy to follow',
  'Reduce mother tongue influence on your English accent through targeted speaking drills and practice',
  'Speak in longer, more complex sentences with improved grammar and vocabulary used naturally',
  'Hold conversations on familiar topics such as work, travel, opinions, and daily experiences with confidence',
  'Listen to and understand spoken English from different contexts including conversations, instructions, and short talks',
  'Expand your active vocabulary and start using new words in real speaking situations immediately',
  'Respond quickly and appropriately in conversations without needing to mentally translate from your first language',
];

const courseForItems = [
  'Students who have completed English Level 1 and are ready to move forward',
  'Learners with basic English who struggle to speak fluently or are not confident in their accent',
  'Professionals who need clear, natural-sounding English for work calls, meetings, or client communication',
  'Anyone who understands English but freezes up or hesitates when it is time to speak',
  'Students preparing to move into professional or academic English environments in the near future',
];

const getStartedItems = [
  'Completion of English Level 1 or a basic understanding of simple English sentences and vocabulary',
  'A willingness to speak out loud, make mistakes, and practice your pronunciation every day',
  'A quiet space and a device with a microphone for speaking and listening exercises',
  'Consistency — even 30 minutes of daily practice will lead to noticeable improvement within weeks',
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

export default function EnglishLevelTwoDetails() {
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
              Knowing basic English is just the beginning. English Level 2 is where you move from understanding simple words and sentences to actually sounding like a confident, natural speaker. This level is designed for students who have completed Level 1 or already have a basic foundation in English and are now ready to take their communication skills to the next level.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              At this stage, the focus shifts strongly toward speaking proficiency and accent clarity. You will work on how you pronounce English sounds, how you stress words and sentences, and how to develop a cleaner, more neutral accent that makes you easier to understand in any setting. Alongside accent training, you will build the fluency and confidence to hold real conversations, express opinions, describe experiences, and communicate without hesitation.
            </p>
            <p className="text-[18px] leading-[28px] font-normal m-0" style={bodyStyle}>
              Every class is built around speaking practice, listening exercises, and real-life communication scenarios. By the end of Level 2, you will notice a clear difference in how naturally and confidently you express yourself in English — whether you are speaking at work, in a classroom, or in everyday life.
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
