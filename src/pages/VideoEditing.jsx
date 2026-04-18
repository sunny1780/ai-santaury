import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import VideoEditingHero from '../component/VideoEditingHero';
import VideoEditingDetails from '../component/VideoEditingDetails';
import OurInstructors from '../component/OurInstructors';

export default function VideoEditing() {
  return (
    <div>
      <Navbar />
      <VideoEditingHero />
      <VideoEditingDetails />
      <OurInstructors />
      <Footer />
    </div>
  );
}
