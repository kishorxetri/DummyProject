import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaShoppingCart } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-white text-[#003b46] py-2 md:py-3 font-['Poppins'] border-b border-gray-100">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-2 sm:gap-0">

        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 md:gap-3">
            <FaPhoneAlt className="text-[#be127e] text-[12px] md:text-[14px]" />
            <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">9860953155</span>
          </div>

          <div className="flex items-center gap-2 md:gap-3">
            <FaEnvelope className="text-[#be127e] text-[12px] md:text-[14px]" />
            <span className="text-[12px] md:text-[14px] font-medium whitespace-nowrap">bhagwoti999@gmail.com</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/about" className="text-[14px] font-medium hover:text-[#be127e] transition-colors duration-300">About</Link>
          <Link to="/doctors" className="text-[14px] font-medium hover:text-[#be127e] transition-colors duration-300">Doctors</Link>
          <Link to="/contact" className="text-[14px] font-medium hover:text-[#be127e] transition-colors duration-300">Contact</Link>
          <Link to="/faq" className="text-[14px] font-medium hover:text-[#be127e] transition-colors duration-300">FAQ</Link>

          <div className="relative ml-2">
            <FaShoppingCart className="text-black text-[16px] cursor-pointer hover:text-gray-600 transition-colors duration-300" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] rounded-full w-4 h-4 flex items-center justify-center font-semibold">
              0
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;

