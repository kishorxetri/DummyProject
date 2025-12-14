import React, { useState } from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
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
    <footer className="bg-gradient-to-b from-[#be127e] to-[#a0106a] text-white font-['Poppins']">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 md:px-[150px] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About Us */}
          <div className="group">
            <h3 className="text-[20px] font-semibold mb-4 pb-2 relative inline-block">
              About Us
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
            </h3>
            <p className="text-[16px] leading-relaxed mb-6 mt-6 font-['Poppins'] text-white/90">
              We are a trusted diagnostic center located in Tikathali, Lalitpur, dedicated to providing reliable pathology, radiology, and health check-up services using the latest technology.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-white/80 flex items-center justify-center hover:bg-white hover:text-[#be127e] hover:border-white hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <FaFacebookF className="text-lg" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-white/80 flex items-center justify-center hover:bg-white hover:text-[#be127e] hover:border-white hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <FaInstagram className="text-lg" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 rounded-full border-2 border-white/80 flex items-center justify-center hover:bg-white hover:text-[#be127e] hover:border-white hover:shadow-lg hover:scale-110 transition-all duration-300"
              >
                <FaTiktok className="text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="group">
            <h3 className="text-[20px] font-semibold mb-4 pb-2 relative inline-block">
              Quick Links
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
            </h3>
            <div className="grid grid-cols-2 gap-x-8 mt-6">
              <ul className="space-y-3 font-['Poppins']">
                <li>
                  <a href="#home" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> About Us
                  </a>
                </li>
                <li>
                  <a href="#services" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> Services
                  </a>
                </li>
                <li>
                  <a href="#consulting" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> Consulting
                  </a>
                </li>
                <li>
                  <a href="#finance" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> Finance
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> Testimonials
                  </a>
                </li>
              </ul>
              <ul className="space-y-3 font-['Poppins']">
                <li>
                  <a href="#cases" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> Our Cases
                  </a>
                </li>
                <li>
                  <a href="#faq" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> FAQ
                  </a>
                </li>
                <li>
                  <a href="#other" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> Other Links
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-[16px] text-white/90 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2">
                    <span className="text-white">▸</span> Contact Us
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Open Hours */}
          <div className="group">
            <h3 className="text-[20px] font-semibold mb-4 pb-2 relative inline-block">
              Open Hours
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
            </h3>
            <div className="space-y-4 mt-6 font-['Poppins']">
              <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                <span className="text-[18px] mt-0.5">📅</span>
                <div>
                  <p className="text-[16px] font-medium text-white/90">Sunday to Saturday ( 6.00AM - 9.00PM )</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                <span className="text-[18px] mt-0.5">✅</span>
                <div>
                  <p className="text-[16px] font-medium text-white/90">Always Open – 7 Days a Week</p>
                </div>
              </div>
              <div className="flex items-start gap-3 p-2 rounded-lg hover:bg-white/10 transition-all duration-300">
                <span className="text-[18px] mt-0.5">🚫</span>
                <div>
                  <p className="text-[16px] font-medium text-white/90">No Holidays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="group">
            <h3 className="text-[20px] font-semibold mb-4 pb-2 relative inline-block">
              Newsletter
              <span className="absolute bottom-0 left-0 w-1/2 h-0.5 bg-white/80 transition-all duration-300 group-hover:w-full group-hover:bg-white"></span>
            </h3>
            <p className="text-[16px] leading-relaxed mb-5 mt-6 font-['Poppins'] text-white/90">
              Subscribe to our newsletter to get all our latest news delivered straight to your inbox. Stay informed with updates that matter.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="relative">
              <input
                type="email"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 pr-12 rounded-lg text-gray-800 border-2 border-white/80 bg-white focus:outline-none focus:border-white focus:ring-2 focus:ring-white/50 focus:shadow-lg text-[16px] font-['Poppins'] placeholder:text-gray-400 transition-all duration-300"
                required
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#be127e] hover:bg-[#9d0f68] hover:shadow-md text-white p-2.5 rounded-lg transition-all duration-300 hover:scale-105"
              >
                <FiSend className="text-lg" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-[#8d0d5c] py-5 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-[150px]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] font-['Poppins'] text-white/90">
            <p>© 2025 Bhagawati Diagnostic Center Pvt. Ltd., All Rights Reserved.</p>
            <p>
              Developed by <span className="font-semibold text-white">Smart Web Canter Center Pvt. Ltd.</span>
            </p>
          </div>
        </div>
      </div>


    </footer>
  );
};

export default Footer;
