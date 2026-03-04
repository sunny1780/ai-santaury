import Heading2 from './Headings';
import Description from './Descriptions';

const events = [
  {
    title: '3-Day Skill Challenge',
    date: 'August 24, 2025',
    description: 'Intense 3-day competition with timed tasks',
    image: 'comp.png',
  },
  {
    title: 'Cultural Evening',
    date: 'August 24, 2025',
    description: 'Join us for traditional Ukrainian music, food, and fellowship',
    image: 'peoples.png',
  },
];

const EventCard = ({ title, date, description, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row">
    {/* Left - Image */}
    <div className="w-full sm:w-1/2 min-h-[180px] sm:min-h-0 bg-[#CFD8DC]">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right - Event Details */}
    <div className="w-full sm:w-1/2 p-6 flex flex-col gap-2 justify-center">
      <div className="flex items-center gap-2 text-[#6B7280]">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span className="text-sm font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>{date}</span>
      </div>
      <h3
        className="text-[20px] sm:text-[24px] font-semibold text-[#162D66]"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
      >
        {title}
      </h3>
      <p
        className="text-[14px] sm:text-[16px] font-normal text-[#6B7280]"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '1.5' }}
      >
        {description}
      </p>
    </div>
  </div>
);

export default function PastEvents() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-[#F8FAFC]">
      <div className="flex flex-col items-center gap-4 mb-10 lg:mb-12">
        <Heading2>Past Events</Heading2>
        <Description className="text-center">
          Browse our previous community events and get inspired
        </Description>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[1100px] mx-auto">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
      </div>
    </section>
  );
}
