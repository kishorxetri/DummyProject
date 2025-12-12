import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import WhoWeAre from './components/WhoWeAre.jsx';
import CTASection from './components/CTASection.jsx';
import ReadyToHelp from "./components/ReadyToHelp.jsx";
import Stats from "./components/Stats.jsx";
import Services from "./components/Services.jsx";
import HygieneSection from "./components/HygieneSection.jsx";
import FacilitiesGallery from "./components/FacilitiesGallery.jsx";
import KeyServices from "./components/KeyServices.jsx";
import Packages from "./components/Packages.jsx";
import Specialists from "./components/Specialists.jsx";
import Updates from "./components/Updates.jsx";
import BlogArticleGrid from "./components/BlogArticleGrid.jsx";
import ClientLogos from "./components/ClientLogos.jsx";
import AppointmentSection from "./components/AppointmentSection.jsx";
import MapLocation from "./components/MapLocation.jsx";
import Newsletter from "./components/Newsletter.jsx";
import Footer from "./components/Footer.jsx";
import ChairmanMessage from "./pages/ChairmanMessage.jsx";
import Blogs from "./pages/Blogs.jsx";
import ContactUs from "./pages/ContactUs.jsx";

// Home Page Component
const HomePage = () => (
  <>
    <Header />
    <Hero />
    <ReadyToHelp />
    <Stats />
    <Services />
    <WhoWeAre />
    <CTASection />
    <HygieneSection />
    <FacilitiesGallery />
    <KeyServices />
    <Packages />
    <Specialists />
    <Updates />
    <BlogArticleGrid />
    <ClientLogos />
    <AppointmentSection />
    <MapLocation />
    <Newsletter />
    <Footer />
  </>
);

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chairman-message" element={<ChairmanMessage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<ContactUs />} />
    </Routes>
  )
}

export default App


