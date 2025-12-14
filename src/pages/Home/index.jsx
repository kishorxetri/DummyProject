import Header from '../../components/layout/Header.jsx';
import Hero from '../../components/sections/Hero.jsx';
import WhoWeAre from '../../components/sections/WhoWeAre.jsx';
import CTASection from '../../components/sections/CTASection.jsx';
import ReadyToHelp from "../../components/sections/ReadyToHelp.jsx";
import Stats from "../../components/sections/Stats.jsx";
import Services from "../../components/sections/Services.jsx";
import HygieneSection from "../../components/sections/HygieneSection.jsx";
import FacilitiesGallery from "../../components/sections/FacilitiesGallery.jsx";
import KeyServices from "../../components/sections/KeyServices.jsx";
import Packages from "../../components/sections/Packages.jsx";
import Specialists from "../../components/sections/Specialists.jsx";
import Updates from "../../components/sections/Updates.jsx";
import BlogArticleGrid from "../../components/sections/BlogArticleGrid.jsx";
import ClientLogos from "../../components/sections/ClientLogos.jsx";
import AppointmentSection from "../../components/sections/AppointmentSection.jsx";
import MapLocation from "../../components/sections/MapLocation.jsx";
import Newsletter from "../../components/sections/Newsletter.jsx";
import Footer from '../../components/layout/Footer.jsx';

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

export default HomePage;
