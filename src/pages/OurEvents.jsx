import Navbar from '../component/Navbar';
import Footer from '../component/Footer';
import EventsHero from '../component/EventsHero';
import PastEvents from '../component/PastEvents';
import OurGallery from '../component/OurGallery';

export default function OurEvents() {
  return (
    <div>
      <Navbar />
      <EventsHero />
      <PastEvents />
      <OurGallery />
      <Footer />
    </div>
  );
}
