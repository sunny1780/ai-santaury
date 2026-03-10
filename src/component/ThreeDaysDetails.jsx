import Heading2 from './Headings';
import Description from './Descriptions';

const bulletPoints = [
  'Discover how fast‑paced challenges build resilience and practical expertise.',
  'See integrated tech skills (Python logic + UI/UX design + React Native development) in action.',
  'Explore strategies that support quick learning and long‑term career growth.',
  'The gathering brought together aspiring developers, designers, and coders where ideas met execution, breakthroughs happened, and meaningful progress was made in a supportive community environment.',
];

export default function ThreeDaysDetails() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 max-w-[1080px] mx-auto items-start">
        {/* Left: Heading + intro + image */}
        <div className="flex-1 flex flex-col gap-6 max-w-[520px]">
          <div className="flex flex-col gap-3">
            <Heading2 className="!text-left !max-w-none">
              3-Day Skill Challenge 2026
            </Heading2>
            <Description className="!text-left !max-w-[488px] !text-[20px] !leading-[28px]">
              An exciting 3-day competition that pushed participants to excel in Python, UI/UX, and React
              Native under time pressure.
            </Description>
          </div>

          <div className="rounded-xl overflow-hidden bg-[#D3DBE0]">
            <img
              src={`${process.env.PUBLIC_URL}/images/faizan.png`}
              alt="Participants at Ai Sanctuary 3-Day Skill Challenge"
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Right: Details text + bullets */}
        <div className="flex-1 flex flex-col gap-4">
          <div className="w-full max-w-[488px] flex flex-col gap-3">
            <p
              className="text-[18px] leading-[28px] font-normal"
              style={{
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '0.005em',
                color: '#5A666E',
              }}
            >
              We&apos;re excited to recap the 3-Day Skill Challenge held at Ai Sanctuary &mdash; a high-energy
              event where young talents competed in real-world tech tasks.
            </p>

            <p
              className="text-[18px] leading-[28px] font-normal"
              style={{
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '0.005em',
                color: '#5A666E',
              }}
            >
              This year&apos;s theme challenged participants to work under tight deadlines while solving complex
              problems, showcasing their problem‑solving skills, creativity, and innovation. Winners were celebrated
              for accuracy, efficiency, and overall impact.
            </p>
          </div>

          <Heading2 className="!text-left !text-[22px] sm:!text-[24px] lg:!text-[26px] !leading-[120%]">
            Why This Challenge Mattered
          </Heading2>

          <div className="w-full max-w-[488px]">
            <ul className="list-disc pl-6 flex flex-col gap-2 m-0">
              {bulletPoints.map((point, index) => (
                <li key={index}>
                  <span
                    className="text-[18px] leading-[28px] font-normal"
                    style={{
                      fontFamily: 'Manrope, sans-serif',
                      letterSpacing: '0.005em',
                      color: '#5A666E',
                    }}
                  >
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <p
              className="mt-4 text-[18px] leading-[28px] font-normal"
              style={{
                fontFamily: 'Manrope, sans-serif',
                letterSpacing: '0.005em',
                color: '#5A666E',
              }}
            >
              We look forward to the next challenge &mdash; stay tuned for upcoming events at Ai Sanctuary!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

