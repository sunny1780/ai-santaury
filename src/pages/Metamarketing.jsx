import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import MetaMarketingHero from '../component/MetaMarketingHero';
import MetaMarketingDetails from '../component/MetaMarketingDetails';
import OurInstructors from '../component/OurInstructors';

export default function MetaMarketing() {
  return (
    <div>
      <Navbar />
      <MetaMarketingHero />
      <MetaMarketingDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
