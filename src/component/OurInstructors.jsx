import Heading2 from './Headings';
import Description from './Descriptions';

const instructors = [
  {
    name: 'Amelia Joseph',
    role: 'Chief Manager',
    image: '1.png',
    testimonial: 'My vision came alive effortlessly. Their blend of casual and professional approach made the process a breeze. Creativity flowed, and the results were beyond my expectations.',
    featured: true,
  },
  {
    name: 'Jacob Joshua',
    role: 'Chief Manager',
    image: '2.png',
    testimonial: 'I found the digital expertise I needed. Their creative-professional balance exceeded expectations. Friendly interactions, exceptional outcomes. For digital enchantment, it\'s got to be Embrace!',
    featured: false,
  },
  {
    name: 'Jacob Joshua',
    role: 'Chief Manager',
    image: '3.png',
    testimonial: 'Embrace really nails it! Creative brilliance, approachable style. They\'re the partners you want—artistry meets strategy. Thrilled with what they achieved!"',
    featured: false,
  },
];

const InstructorCard = ({ name, role, image, testimonial, featured }) => (
  <div
    className={`rounded-2xl p-6 flex flex-col gap-4 ${
      featured ? 'bg-[#285ADE] text-white' : 'bg-white'
    }`}
    style={{
      minWidth: 280,
      maxWidth: 320,
      boxShadow: featured ? 'none' : '0 2px 8px rgba(0, 0, 0, 0.06)',
    }}
  >
    {/* Profile */}
    <div className="flex items-center gap-3">
      <img
        src={`${process.env.PUBLIC_URL}/images/team/${image}`}
        alt={name}
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <h3
          className={`text-base font-semibold m-0 ${
            featured ? 'text-white' : 'text-[#1B1D21]'
          }`}
          style={{ fontFamily: 'Manrope, sans-serif' }}
        >
          {name}
        </h3>
        <p
          className={`text-sm font-normal m-0 ${
            featured ? 'text-white/80' : 'text-[#6B7280]'
          }`}
          style={{ fontFamily: 'Inter, sans-serif' }}
        >
          {role}
        </p>
      </div>
    </div>

    {/* Testimonial */}
    <p
      className={`text-sm font-normal leading-6 m-0 ${
        featured ? 'text-white/90' : 'text-[#6B7280]'
      }`}
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      {testimonial}
    </p>
  </div>
);

export default function OurInstructors() {
  return (
    <section className="px-[80px] py-16 bg-white">
      {/* Header */}
      <div className="flex justify-between items-start mb-12">
        <Heading2 className="!text-left !max-w-none">Our Instructors</Heading2>
        <Description className="text-right max-w-[400px]">
          Learn from experienced professionals shaping the next generation of tech and creative talent
        </Description>
      </div>

      {/* Cards */}
      <div className="flex gap-6 mb-8">
        {instructors.map((instructor, index) => (
          <InstructorCard key={index} {...instructor} />
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="flex justify-end gap-3">
        <button
          className="w-14 h-14 rounded-full bg-[#F5F5F5] flex items-center justify-center cursor-pointer hover:bg-[#E5E5E5] transition-colors border-none"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/left.svg`}
            alt="Previous"
            className="w-6 h-6 object-contain"
          />
        </button>
        <button
          className="w-14 h-14 rounded-full bg-[#285ADE] flex items-center justify-center cursor-pointer hover:bg-[#285ADE]/90 transition-colors border-none"
        >
          <img
            src={`${process.env.PUBLIC_URL}/images/right.svg`}
            alt="Next"
            className="w-6 h-6 object-contain"
          />
        </button>
      </div>
    </section>
  );
}
