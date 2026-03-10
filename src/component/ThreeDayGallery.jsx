import Heading2 from './Headings';
import Description from './Descriptions';

const columns = [
  ['ga1.png', 'ga4.png'],
  ['ga2.png', 'ga5.png'],
  ['ga3.png', 'ga6.png'],
];

export default function ThreeDayGallery() {
  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-8 sm:py-12 lg:py-16 bg-white">
      <div className="flex flex-col items-center gap-3 sm:gap-4 mb-8 sm:mb-10 lg:mb-12">
        <Heading2>Event Sneak peeks</Heading2>
        <Description className="text-center">
          Take a look at our recent community gatherings
        </Description>
      </div>

      {/* 3 divs: har div mein upar 1, neeche 1 image - mobile responsive */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 max-w-[1200px] mx-auto">
        {columns.map((imgs, colIndex) => (
          <div key={colIndex} className="flex flex-col gap-3 sm:gap-4">
            {imgs.map((src, i) => (
              <div key={src} className="rounded-xl overflow-hidden w-full">
                <img
                  src={`${process.env.PUBLIC_URL}/images/${src}`}
                  alt={`Event`}
                  className="w-full max-w-full h-auto block"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
