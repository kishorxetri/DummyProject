import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaShoppingCart } from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="w-full bg-white text-[#003b46] py-3 font-['Poppins']">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-0">

        <div className="flex items-center gap-8">
          <div className="flex items-center gap-3">
            <FaPhoneAlt className="text-[#be127e] text-[14px]" />
            <span className="text-[14px] font-medium">9860953155</span>
          </div>

          <div className="flex items-center gap-3">
            <FaEnvelope className="text-[#be127e] text-[14px]" />
            <span className="text-[14px] font-medium">bhagwoti999@gmail.com</span>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-6">
          <Link to="/about" className="text-[14px] font-medium hover:text-[#be127e] transition-colors duration-300">About</Link>
          <Link to="/doctors" className="text-[14px] font-medium hover:text-[#be127e] transition-colors duration-300">Doctors</Link>
          <Link to="/contact" className="text-[14px] font-medium hover:text-[#be127e] transition-colors duration-300">Contact</Link>
          <Link to="/faq" className="text-[14px] font-medium hover:text-[#be127e] transition-colors duration-300">FAQ</Link>

          <div className="relative">
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
