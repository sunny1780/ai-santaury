import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
import OurEvents from './pages/OurEvents';
import About from './pages/About';
import Courses from './pages/Courses';
import ThreeDays from './pages/ThreeDays';
import Contactus from './pages/Contactus';
import UIUX from './pages/UIUX';
import Python from './pages/Python';
import Website from './pages/Website';
import SEO from './pages/SEO';

function HomePage() {
  return (
    <>
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
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/events" element={<OurEvents />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/three-days" element={<ThreeDays />} />
        <Route path="/contact" element={<Contactus />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/python" element={<Python />} />
        <Route path="/website" element={<Website />} />
        <Route path="/seo" element={<SEO />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
