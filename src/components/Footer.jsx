import React, { useState } from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-[#be127e] text-white font-['Poppins']">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-[150px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Us */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4 pb-2 border-b-2 border-white inline-block">
              About Us
            </h3>
            <p className="text-[16px] leading-relaxed mb-6 mt-6 font-['Poppins']">
              We are a trusted diagnostic center located in Tikathali, Lalitpur, dedicated to providing reliable pathology, radiology, and health check-up services using the latest technology.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#be127e] transition-all duration-300"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#be127e] transition-all duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center hover:bg-white hover:text-[#be127e] transition-all duration-300"
              >
                <FaTiktok className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4 pb-2 border-b-2 border-white inline-block">
              Quick Links
            </h3>
            <div className="grid grid-cols-2 gap-x-8 mt-6">
              <ul className="space-y-2.5 font-['Poppins']">
                <li>
                  <a href="#home" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> Services
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> Consulting
                  </a>
                </li>
                <li>
                  <a href="#finance" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> Finance
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> Testimonials
                  </a>
                </li>
              </ul>
              <ul className="space-y-2.5 font-['Poppins']">
                <li>
                  <a href="#cases" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> Our Cases
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> FAQ
                  </a>
                </li>
                <li>
                  <a href="#other" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> Other Links
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[16px] hover:text-gray-200 transition-colors flex items-center gap-2">
                    <span className="text-white">▸</span> Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Open Hours */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4 pb-2 border-b-2 border-white inline-block">
              Open Hours
            </h3>
            <div className="space-y-3 mt-6 font-['Poppins']">
              <div className="flex items-start gap-2">
                <span className="text-[14px]">📅</span>
                <div>
                  <p className="text-[16px] font-medium">Sunday to Saturday ( 6.00AM - 9.00PM )</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[14px]">✅</span>
                <div>
                  <p className="text-[16px] font-medium">Always Open – 7 Days a Week</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-[14px]">🚫</span>
                <div>
                  <p className="text-[16px] font-medium">No Holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[20px] font-semibold mb-4 pb-2 border-b-2 border-white inline-block">
              Newsletter
            </h3>
            <p className="text-[16px] leading-relaxed mb-4 mt-6 font-['Poppins']">
              subscribe to our newsletter to get allour news in your inbox. Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-md text-gray-800 border-2 border-white focus:outline-none focus:ring-2 focus:ring-white text-[16px] font-['Poppins']"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#be127e] hover:bg-[#9d0f68] text-white p-2 rounded-md transition-colors duration-300"
              >
                <FiSend className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#a0106a] py-4">
        <div className="container mx-auto px-4 md:px-[150px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] font-['Poppins']">
            <p>© 2025 Bhagawati Diagnostic Center Pvt. Ltd., All Rights Reserved.</p>
            <p>
              Developed by <span className="font-semibold">Smart Web Canter Center Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/9779851234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-[#25D366] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:bg-[#20ba5a] transition-all duration-300 hover:scale-110 z-50"
      >
        <FaWhatsapp className="text-3xl" />
      </a>
    </footer>
  );
};

export default Footer;
