import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import UIUXHero from '../component/UIUXHero';
import UIUXDetails from '../component/UIUXDetails';
import OurInstructors from '../component/OurInstructors';

export default function UIUX() {
  return (
    <div>
      <Navbar />
      <UIUXHero />
      <UIUXDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
