import Navbar from '../component/Navbar';
import Footer from '../component/Footer';

export default function CEOmsg() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <Navbar />

      <section className="relative overflow-hidden px-4 py-12 sm:px-8 lg:px-[80px]">
        <div className="mx-auto max-w-[1080px] rounded-[28px] bg-white px-6 py-10 shadow-[0_12px_45px_rgba(15,23,42,0.08)] sm:px-10 lg:px-14">
          <div className="absolute -left-6 top-8 h-36 w-36 rounded-full border border-[#D3EDF0]" />
          <div className="absolute -left-2 top-12 h-28 w-28 rounded-full border border-[#E6F5F6]" />
          <div className="absolute -right-20 -top-16 h-64 w-64 rounded-full bg-[#17A7B90F]" />
          <div className="absolute -right-10 -top-20 h-52 w-52 rounded-full bg-[#17A7B91F]" />

          <div className="relative">
            <div className="mb-10 flex items-start gap-4 pt-3">
              <div className="mt-1 h-10 w-1.5 rounded-full bg-[#162D66]" />
              <div>
                <h1 className="text-3xl font-bold tracking-[0.01em] text-[#162D66] sm:text-4xl">
                  Welcome Message From Our Founder
                </h1>
              </div>
            </div>

            <div className="grid items-center gap-10 md:grid-cols-[260px_1fr]">
              <div className="relative mx-auto w-fit">
                <div className="absolute -bottom-14 left-8 h-44 w-44 rounded-full bg-[#17A7B911]" />
                <img
                  src={`${process.env.PUBLIC_URL}/images/team/3.png`}
                  alt="CEO portrait"
                  className="relative h-[220px] w-[220px] rounded-full border-[8px] border-white object-cover shadow-[0_16px_35px_rgba(15,23,42,0.18)]"
                />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-[#162D66]">Amir Abbasi</h2>
                {/* <p className="mt-1 text-xl text-[#4B5563]">Foundation Founder</p> */}

                <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#4B5563]">
                At AI Sanctuary, we believe knowledge is the strongest bridge to opportunity. Founded by Amir Abbasi, an IT professional with 22 years of experience, based out of Los Angeles, California, USA, our mission is to make digital education universally accessible and ignite real-world digital awareness in communities often left behind by economic, geographic, or social barriers.
                </p>
                <p className="mt-6 max-w-2xl text-[17px] leading-8 text-[#4B5563]">
                We empower individuals to step confidently into the digital age through learning experiences led by practicing professionals—teachers who live what they teach. Through mentorship, hands-on education, and community-driven innovation, we transform curiosity into capability and talent into tomorrow’s workforce.
                </p>
                <p className="mt-5 max-w-2xl text-[17px] leading-8 text-[#4B5563]">
                Our purpose is simple yet powerful: to ensure no mind is disconnected from progress. Whether you’re learning, teaching, or contributing, join us in building a future where every community thrives through digital enlightenment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
