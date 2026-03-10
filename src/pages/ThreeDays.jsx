import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import ThreeDayHero from '../component/ThreeDayHero';
import ThreeDaysDetails from '../component/ThreeDaysDetails';
import ThreeDayGallery from '../component/ThreeDayGallery';

export default function ThreeDays() {
  return (
    <div>
      <Navbar />
      <ThreeDayHero />
      <ThreeDaysDetails />
      <ThreeDayGallery />
      <Footer />
    </div>
  );
}

