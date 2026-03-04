import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import AboutHero from '../component/AboutHero';
import OurCore from '../component/OurCore';
import OurLeadership from '../component/OurLeadership';

export default function About() {
  return (
    <div>
      <Navbar />
      <AboutHero />
      <OurCore />
      <OurLeadership />
      <Footer />
    </div>
  );
}
