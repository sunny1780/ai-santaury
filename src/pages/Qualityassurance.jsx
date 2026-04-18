import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import QualityAssuranceHero from '../component/QualityAssuranceHero';
import QualityAssuranceDetails from '../component/QualityAssuranceDetails';
import OurInstructors from '../component/OurInstructors';

export default function QualityAssurance() {
  return (
    <div>
      <Navbar />
      <QualityAssuranceHero />
      <QualityAssuranceDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
