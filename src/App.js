import Navbar from './component/Navbar';
import Hero from './component/Hero';
import OurCourses from './component/OurCourses';
import Howit from './component/Howit';
import WhyLearn from './component/WhyLearn';
import BuildSkills from './component/BuildSkills';
import OurInstructors from './component/OurInstructors';
import OurLeadership from './component/OurLeadership';
import HomeFaqs from './component/HomeFaqs';
import Footer from './component/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <OurCourses />
      <Howit />
      <WhyLearn />
      <BuildSkills />
      <OurLeadership />
      <OurInstructors />
      <HomeFaqs />
      <Footer />
    </div>
  );
}

export default App;
