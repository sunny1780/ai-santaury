import { Heading1 } from './Headings';
import Button from './Buttons';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-[80px] py-12 lg:py-16 bg-white">
      <div className="flex flex-col gap-6 max-w-[529px]">
        <div>
          <Heading1>Free Digital Education</Heading1>
          <img
            src={`${process.env.PUBLIC_URL}/images/Line.png`}
            alt=""
            className="mt-2 max-h-4 w-auto object-left object-contain"
          />
        </div>

        <p
          className="w-full text-[16px] sm:text-[18px] lg:text-[20px] leading-[24px] sm:leading-[26px] lg:leading-[28px] font-normal text-black"
          style={{ letterSpacing: '0.005em' }}
        >
          Empowering youth and underserved communities through practical,
          future-ready tech skills at no cost, no limits.
        </p>

        <Button onClick={() => {}}>Explore Courses</Button>
      </div>

      <div className="w-full lg:w-auto lg:flex-1 flex justify-center lg:justify-end">
        <img
          src={`${process.env.PUBLIC_URL}/images/Hero.png`}
          alt="Digital education"
          className="w-full max-w-[500px] lg:max-w-none object-contain"
        />
      </div>
    </section>
  );
}
