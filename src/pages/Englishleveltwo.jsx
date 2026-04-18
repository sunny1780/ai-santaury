import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import EnglishLevelTwoHero from '../component/EnglishLevelTwoHero';
import EnglishLevelTwoDetails from '../component/EnglishLevelTwoDetails';
import OurInstructors from '../component/OurInstructors';

export default function EnglishLevelTwo() {
  return (
    <div>
      <Navbar />
      <EnglishLevelTwoHero />
      <EnglishLevelTwoDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
