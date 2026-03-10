import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import PythonHero from '../component/PythonHero';
import PythonDetail from '../component/PythonDetail';
import OurInstructors from '../component/OurInstructors';

export default function Python() {
  return (
    <div>
      <Navbar />
      <PythonHero />
      <PythonDetail />
      <OurInstructors />
      <Footer />
    </div>
  );
}
