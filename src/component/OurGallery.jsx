import { useState, useEffect } from 'react';
import Heading2 from './Headings';
import Description from './Descriptions';

const galleryItems = ['g1.png', 'g2.png', 'g3.png', 'g4.png', 'g5.png', 'g6.png'];

export default function OurGallery() {
  const [current, setCurrent] = useState(0); // index of first visible image

  const visibleCount = 4;

  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < visibleCount; i += 1) {
      const idx = (current + i) % galleryItems.length;
      items.push({ src: galleryItems[idx], key: `${galleryItems[idx]}-${idx}` });
    }
    return items;
  };

  const handlePrev = () => {
    setCurrent((prev) =>
      prev === 0 ? (galleryItems.length - 1 + visibleCount) % galleryItems.length : (prev - 1 + galleryItems.length) % galleryItems.length,
    );
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % galleryItems.length);
  };

  // Auto-slide every 2.5 seconds
  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % galleryItems.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-4 sm:px-8 lg:px-[80px] py-12 lg:py-16 bg-white">
      <div className="max-w-[1080px] mx-auto">
        <div className="flex flex-col items-center gap-4 mb-10 lg:mb-12">
          <Heading2>Our Gallery</Heading2>
          <Description className="text-center">
            Take a look at our recent community gatherings
          </Description>
        </div>

        {/* Slider: 1 card on mobile, 4 cards per view on desktop */}
        <div className="mb-8">
          <div className="relative">
            {/* Mobile: single card */}
            <div className="sm:hidden">
              {(() => {
                const item = getVisibleItems()[0];
                return (
                  <div className="rounded-xl bg-[#D3DBE0] aspect-[3/4] min-h-[180px] overflow-hidden">
                    <img
                      src={`${process.env.PUBLIC_URL}/images/${item.src}`}
                      alt="Gallery"
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                );
              })()}
            </div>

            {/* Desktop / tablet: 4 cards */}
            <div className="hidden sm:grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
              {getVisibleItems().map((item, index) => (
                <div
                  key={item.key}
                  className="rounded-xl bg-[#D3DBE0] aspect-[3/4] min-h-[180px] overflow-hidden"
                >
                  <img
                    src={`${process.env.PUBLIC_URL}/images/${item.src}`}
                    alt={`Gallery ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>

            {/* Prev / Next buttons (desktop + tablet) */}
            <button
              type="button"
              onClick={handlePrev}
              className="hidden sm:flex absolute inset-y-1/2 left-0 -translate-y-1/2 items-center justify-center w-9 h-9 rounded-full bg-white/90 text-[#111827] shadow-sm hover:bg-white transition"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={handleNext}
              className="hidden sm:flex absolute inset-y-1/2 right-0 -translate-y-1/2 items-center justify-center w-9 h-9 rounded-full bg-white/90 text-[#111827] shadow-sm hover:bg-white transition"
            >
              ›
            </button>
          </div>

          {/* Dots + mobile arrows */}
          <div className="mt-4 flex items-center justify-center gap-3">
            <button
              type="button"
              onClick={handlePrev}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#E5E7EB] text-xs font-medium text-[#111827]"
            >
              Prev
            </button>

            <div className="flex gap-2">
              {galleryItems.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition ${
                    index === current ? 'bg-[#162D66]' : 'bg-[#E5E7EB]'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={handleNext}
              className="sm:hidden px-3 py-1.5 rounded-full bg-[#E5E7EB] text-xs font-medium text-[#111827]"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
