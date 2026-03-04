import Heading2 from './Headings';
import Description from './Descriptions';

const galleryItems = [1, 2, 3, 4];

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
        {galleryItems.map((_, index) => (
          <div
            key={index}
            className="rounded-xl bg-[#D3DBE0] aspect-[3/4] min-h-[180px]"
          />
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
