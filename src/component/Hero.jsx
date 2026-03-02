import { Heading1 } from './Headings';
import Button from './Buttons';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-4 sm:px-8 lg:px-[80px] py-8 sm:py-12 lg:py-16 bg-white">
      <div className="flex flex-col gap-4 sm:gap-6 max-w-[529px] text-center lg:text-left items-center lg:items-start">
        <div>
          <Heading1 className="text-center lg:text-left">Free Digital Education</Heading1>
          <img
            src={`${process.env.PUBLIC_URL}/images/Line.png`}
            alt=""
            className="mt-2 max-h-3 sm:max-h-4 w-auto object-contain mx-auto lg:mx-0"
          />
        </div>

        <p
          className="w-full text-[14px] sm:text-[16px] md:text-[18px] lg:text-[20px] leading-[22px] sm:leading-[24px] md:leading-[26px] lg:leading-[28px] font-normal text-black"
          style={{ letterSpacing: '0.005em' }}
        >
          Empowering youth and underserved communities through practical,
          future-ready tech skills at no cost, no limits.
        </p>

        <Button onClick={() => {}}>Explore Courses</Button>
      </div>

      <div className="w-full lg:w-auto lg:flex-1 flex justify-center lg:justify-end order-first lg:order-last">
        <img
          src={`${process.env.PUBLIC_URL}/images/Hhero.svg`}
          alt="Digital education"
          className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-none object-contain"
        />
      </div>
    </section>
  );
}
