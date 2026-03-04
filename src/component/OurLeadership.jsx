import Heading2 from './Headings';
import Description from './Descriptions';

const teamMembers = [
  {
    name: 'Faizan Rasool',
    role: 'Institute Manager',
    description: 'Leading the community with passion',
    image: '1.png',
  },
  {
    name: 'Muhammad Moeez',
    role: 'Institute Manager',
    description: 'Organizing memorable experiences',
    image: '2.png',
  },
  {
    name: 'Amir Abbasi',
    role: 'AI tools & automations',
    description: 'Leading the community with passion',
    image: '3.png',
  },
  {
    name: 'Steve',
    role: 'English Communication',
    description: 'Building bridges in the community',
    image: '4.png',
  },
  {
    name: 'Syed Farhan Ali',
    role: 'Full Stack Developer',
    description: 'Description for member 5',
    image: '5.png',
  },
  {
    name: 'Rida Fatima',
    role: 'UI/UX Design',
    description: 'Description for member 6',
    image: '6.png',
  },
  {
    name: 'Mudasir ',
    role: 'Full Stack Developer',
    description: 'Description for member 7',
    image: '7.png',
  },
  {
    name: 'Asma Ijaz',
    role: 'Full Stack Developer',
    description: 'Description for member 8',
    image: '8.png',
  },
  {
    name: 'Humna Munir',
    role: 'Content Writer @ SEO Expert',
    description: 'Description for member 9',
    image: '9.png',
  },
];

const TeamCard = ({ name, role, description, image }) => (
  <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
    {/* Image */}
    <div className="h-72 sm:h-52 lg:h-60 overflow-hidden">
      <img
        src={`${process.env.PUBLIC_URL}/images/team/${image}`}
        alt={name}
        className="w-full h-full object-cover"
      />
    </div>

    {/* Content */}
    <div className="p-4 sm:p-5 flex flex-col gap-2">
      <h3
        className="text-base sm:text-lg font-semibold text-[#1B1D21] m-0"
        style={{ fontFamily: 'Manrope, sans-serif', lineHeight: '24px' }}
      >
        {name}
      </h3>
      <p
        className="text-xs sm:text-sm font-medium text-[#6B7280] m-0"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: '20px' }}
      >
        {role}
      </p>
      <p
        className="text-xs sm:text-sm font-normal text-[#6B7280] m-0"
        style={{ fontFamily: 'Inter, sans-serif', lineHeight: '20px' }}
      >
        {description}
      </p>
    </div>
  </div>
);

export default function OurLeadership() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-[#F5F8FF]">
      {/* Header */}
      <div className="flex flex-col items-center gap-4 mb-8 lg:mb-12">
        <Heading2>Our Dedicated Team</Heading2>
        <Description className="text-center">
        Passionate experts and volunteers are building an inclusive community for digital learning and growth in Pakistan.
        </Description>
      </div>

      {/* Team Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
        {teamMembers.map((member, index) => (
          <TeamCard key={index} {...member} />
        ))}
      </div>
    </section>
  );
}
