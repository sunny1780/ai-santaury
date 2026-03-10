import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import SEOHero from '../component/SEOHero';
import SEODetails from '../component/SEODetails';
import OurInstructors from '../component/OurInstructors';

export default function SEO() {
  return (
    <div>
      <Navbar />
      <SEOHero />
      <SEODetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
