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
import AllOnlineCourses from './component/Dashboard/AllOnlineCourses';
import Notifications from './component/Dashboard/Notifications';
import MyLearnings from './component/Dashboard/MyLearnings';
import MyCertificates from './component/Dashboard/MyCertificates';
import Settings from './component/Dashboard/Settings';
import InstDashboard from './component/InstDashboard/Dashboard';
import InstCourses from './component/InstDashboard/Courses';
import PublishNew from './component/InstDashboard/PublishNew';
import Dashboard from './component/Dashboard/Dashboard';
import InstInstructors from './component/InstDashboard/Instructors';
import InstNotifications from './component/InstDashboard/InstNotifications';
import InstSettings from './component/InstDashboard/InstSettings';
import RoleSelection from './component/RoleSelection';
import SignupDetails from './component/SignupDetails';
import Login from './component/Login';
import ForgotPassword from './component/ForgotPassword';
import ResetPassword from './component/ResetPassword';

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
        <Route path="/signup" element={<RoleSelection />} />
        <Route path="/signup/details" element={<SignupDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/get-started" element={<RoleSelection />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/explore" element={<AllOnlineCourses />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/learnings" element={<MyLearnings />} />
        <Route path="/dashboard/certificates" element={<MyCertificates />} />
        <Route path="/dashboard/settings" element={<Settings />} />

        {/* Instructor dashboard */}
        <Route path="/inst/dashboard" element={<InstDashboard />} />
        <Route path="/inst/instructors" element={<InstInstructors />} />
        <Route path="/inst/courses" element={<InstCourses />} />
        <Route path="/inst/publish" element={<PublishNew />} />
        <Route path="/inst/notifications" element={<InstNotifications />} />
        <Route path="/inst/settings" element={<InstSettings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
