import Heading2 from './Headings';
import Description from './Descriptions';
import { Link } from 'react-router-dom';

const events = [
  {
    title: '3-Day Skill Challenge',
    date: 'August 24, 2025',
    description: 'Intense 3-day competition with timed tasks',
    image: 'past.png',
    href: '/three-days',
  },
];

const EventCardInner = ({ title, date, description, image }) => (
  <div className="bg-white rounded-xl overflow-hidden shadow-sm flex flex-col sm:flex-row w-full sm:w-[502px] sm:h-[156px]">
    {/* Left - Image (50% width) */}
    <div className="w-full sm:w-1/2 sm:h-full min-h-[120px] sm:min-h-0 bg-[#CFD8DC] flex-shrink-0">
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        alt={title}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Right - Event Details (50% width) */}
    <div className="w-full sm:w-1/2 p-4 flex flex-col gap-1 justify-center min-w-0">
      <div className="flex items-center gap-1.5 text-[#6B7280]">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
          <line x1="16" y1="2" x2="16" y2="6"/>
          <line x1="8" y1="2" x2="8" y2="6"/>
          <line x1="3" y1="10" x2="21" y2="10"/>
        </svg>
        <span className="text-xs font-normal" style={{ fontFamily: 'Inter, sans-serif' }}>{date}</span>
      </div>
      <h3
        className="text-base font-semibold text-[#162D66] truncate"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em' }}
      >
        {title}
      </h3>
      <p
        className="text-xs font-normal text-[#6B7280] line-clamp-2"
        style={{ fontFamily: 'Manrope, sans-serif', letterSpacing: '0.005em', lineHeight: '1.4' }}
      >
        {description}
      </p>
    </div>
  </div>
);

const EventCard = ({ href, ...rest }) => {
  if (href) {
    return (
      <Link to={href} className="no-underline">
        <EventCardInner {...rest} />
      </Link>
    );
  }

  return <EventCardInner {...rest} />;
};

export default function PastEvents() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-[#F8FAFC]">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-10 lg:mb-12">
          <Heading2>Past Events</Heading2>
          <Description className="text-center">
            Browse our previous community events and get inspired
          </Description>
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
        {events.map((event, index) => (
          <EventCard key={index} {...event} />
        ))}
        </div>
      </div>
    </section>
  );
}
