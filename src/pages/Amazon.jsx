import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import AmazonHero from '../component/AmazonHero';
import AmazonDetails from '../component/AmazonDetails';
import OurInstructors from '../component/OurInstructors';

export default function Amazon() {
  return (
    <div>
      <Navbar />
      <AmazonHero />
      <AmazonDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
