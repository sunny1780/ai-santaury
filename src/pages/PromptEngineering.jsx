import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import PromptEngineeringHero from '../component/PromptEngineeringHero';
import PromptEngineeringDetails from '../component/PromptEngineeringDetails';
import OurInstructors from '../component/OurInstructors';

export default function PromptEngineering() {
  return (
    <div>
      <Navbar />
      <PromptEngineeringHero />
      <PromptEngineeringDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
