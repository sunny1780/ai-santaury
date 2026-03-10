import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import WebsiteHero from '../component/WebsiteHero';
import WebsiteDetails from '../component/WebsiteDetails';
import OurInstructors from '../component/OurInstructors';

export default function Website() {
  return (
    <div>
      <Navbar />
      <WebsiteHero />
      <WebsiteDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
