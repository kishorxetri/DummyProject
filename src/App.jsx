import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import ChairmanMessage from "./pages/ChairmanMessage.jsx";
import Blogs from "./pages/Blogs.jsx";
import ContactUs from "./pages/ContactUs.jsx";
import About from "./pages/About.jsx";
import Doctors from "./pages/Doctors.jsx";
import FAQ from "./pages/FAQ.jsx";

// Specialists
import Cardiologist from "./pages/specialists/Cardiologist.jsx";
import Neurologist from "./pages/specialists/Neurologist.jsx";
import GeneralPhysician from "./pages/specialists/GeneralPhysician.jsx";

// Diagnostics
import BloodTest from "./pages/diagnostics/BloodTest.jsx";
import XRay from "./pages/diagnostics/XRay.jsx";
import MRI from "./pages/diagnostics/MRI.jsx";

// Checkups
import WholeBodyCheckup from "./pages/checkups/WholeBodyCheckup.jsx";
import HeartCheckup from "./pages/checkups/HeartCheckup.jsx";
import DiabetesCheckup from "./pages/checkups/DiabetesCheckup.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/doctors" element={<Doctors />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/about/chairman-message" element={<ChairmanMessage />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/contact" element={<ContactUs />} />

      {/* Specialists */}
      <Route path="/specialists/cardiologist" element={<Cardiologist />} />
      <Route path="/specialists/neurologist" element={<Neurologist />} />
      <Route path="/specialists/general-physician" element={<GeneralPhysician />} />

      {/* Diagnostics */}
      <Route path="/diagnostics/blood-test" element={<BloodTest />} />
      <Route path="/diagnostics/xray" element={<XRay />} />
      <Route path="/diagnostics/mri" element={<MRI />} />

      {/* Checkups */}
      <Route path="/checkups/whole-body" element={<WholeBodyCheckup />} />
      <Route path="/checkups/heart" element={<HeartCheckup />} />
      <Route path="/checkups/diabetes" element={<DiabetesCheckup />} />
    </Routes>
  )
}

export default App


