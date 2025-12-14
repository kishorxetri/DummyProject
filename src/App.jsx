import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home";
import ChairmanMessage from "./pages/ChairmanMessage.jsx";
import Blogs from "./pages/Blogs.jsx";
import ContactUs from "./pages/ContactUs.jsx";

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


