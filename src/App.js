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
import CEOmsg from './pages/CEOmsg';
import UIUX from './pages/UIUX';
import Python from './pages/Python';
import Website from './pages/Website';
import SEO from './pages/SEO';
import VideoEditing from './pages/VideoEditing';
import EnglishLevelOne from './pages/Englishlevelone';
import EnglishLevelTwo from './pages/Englishleveltwo';
import QualityAssurance from './pages/Qualityassurance';
import MetaMarketing from './pages/Metamarketing';
import PromptEngineering from './pages/PromptEngineering';
import Amazon from './pages/Amazon';
import AllOnlineCourses from './component/Dashboard/AllOnlineCourses';
import Notifications from './component/Dashboard/Notifications';
import MyLearnings from './component/Dashboard/MyLearnings';
import StudentCourseDetails from './component/Dashboard/StudentCourseDetails';
import MyCertificates from './component/Dashboard/MyCertificates';
import Settings from './component/Dashboard/Settings';
import InstDashboard from './component/InstDashboard/Dashboard';
import InstCourses from './component/InstDashboard/Courses';
import InstCourseDetails from './component/InstDashboard/CourseDetails';
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
import AdminCourses from './component/Admin/AdminCourses';

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
        <Route path="/our-mission" element={<CEOmsg />} />
        <Route path="/uiux" element={<UIUX />} />
        <Route path="/python" element={<Python />} />
        <Route path="/website" element={<Website />} />
        <Route path="/seo" element={<SEO />} />
        <Route path="/video-editing" element={<VideoEditing />} />
        <Route path="/english-level-one" element={<EnglishLevelOne />} />
        <Route path="/english-level-two" element={<EnglishLevelTwo />} />
        <Route path="/quality-assurance" element={<QualityAssurance />} />
        <Route path="/meta-marketing" element={<MetaMarketing />} />
        <Route path="/prompt-engineering" element={<PromptEngineering />} />
        <Route path="/amazon-selling" element={<Amazon />} />
        <Route path="/signup" element={<RoleSelection />} />
        <Route path="/signup/details" element={<SignupDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/get-started" element={<RoleSelection />} />

        {/* Dashboard */}
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/explore" element={<AllOnlineCourses />} />
        <Route path="/dashboard/explore/:courseId" element={<StudentCourseDetails />} />
        <Route path="/dashboard/notifications" element={<Notifications />} />
        <Route path="/dashboard/learnings" element={<MyLearnings />} />
        <Route path="/dashboard/learnings/:courseId" element={<StudentCourseDetails />} />
        <Route path="/dashboard/certificates" element={<MyCertificates />} />
        <Route path="/dashboard/settings" element={<Settings />} />

        {/* Instructor dashboard */}
        <Route path="/inst/dashboard" element={<InstDashboard />} />
        <Route path="/inst/instructors" element={<InstInstructors />} />
        <Route path="/inst/courses" element={<InstCourses />} />
        <Route path="/inst/courses/:courseId" element={<InstCourseDetails />} />
        <Route path="/inst/publish" element={<PublishNew />} />
        <Route path="/inst/notifications" element={<InstNotifications />} />
        <Route path="/inst/settings" element={<InstSettings />} />
        <Route path="/admin/courses" element={<AdminCourses />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
