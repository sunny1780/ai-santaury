import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import EnglishLevelOneHero from '../component/EnglishLevelOneHero';
import EnglishLevelOneDetails from '../component/EnglishLevelOneDetails';
import OurInstructors from '../component/OurInstructors';

export default function EnglishLevelOne() {
  return (
    <div>
      <Navbar />
      <EnglishLevelOneHero />
      <EnglishLevelOneDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
