import Heading2 from './Headings';
import Description from './Descriptions';

const galleryItems = ['g1.png', 'g2.png', 'g3.png', 'g4.png'];

export default function OurGallery() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="flex flex-col items-center gap-4 mb-10 lg:mb-12">
        <Heading2>Our Gallery</Heading2>
        <Description className="text-center">
          Take a look at our recent community gatherings
        </Description>
      </div>

      {/* Gallery Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 max-w-[1200px] mx-auto mb-8">
        {galleryItems.map((img, index) => (
          <div
            key={img}
            className="rounded-xl bg-[#D3DBE0] aspect-[3/4] min-h-[180px] overflow-hidden"
          >
            <img
              src={`${process.env.PUBLIC_URL}/images/${img}`}
              alt={`Gallery ${index + 1}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* Pagination Indicator */}
      <div className="flex justify-center gap-2">
        <div className="w-8 h-1 rounded-full bg-[#162D66]" />
        <div className="w-8 h-1 rounded-full bg-[#E5E7EB]" />
        <div className="w-8 h-1 rounded-full bg-[#E5E7EB]" />
      </div>
    </section>
  );
}
