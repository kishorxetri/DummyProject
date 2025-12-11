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

function App() {
  return (
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
    </>
  )
}

export default App
