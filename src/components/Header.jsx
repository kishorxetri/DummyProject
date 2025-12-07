import React from "react";
import { FaPhoneAlt, FaEnvelope, FaShoppingCart } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/bhagawati.png";

const Header = () => {
  // Styles for the green animated underline
  const hoverUnderlineClass = "relative group";
  const underlineSpanClass = "absolute left-0 bottom-[-5px] w-0 h-[3px] bg-[#28a745] transition-all duration-300 group-hover:w-full";

  // Dropdown container styles
  const dropdownClass = "absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50";
  const dropdownItemClass = "block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#be127e] text-sm border-b border-gray-100 last:border-0 transition-colors";

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-[#003b46] text-white text-sm py-2 px-8 flex justify-between">

        {/* Left */}
        <div className="flex items-center space-x-6">
          <div className="flex items-center space-x-2">
            <FaPhoneAlt />
            <span>9860953155</span>
          </div>

          <div className="flex items-center space-x-2">
            <FaEnvelope />
            <span>bhagwoti999@gmail.com</span>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center space-x-6">
          <a href="#" className="hover:text-gray-300 transition">About</a>
          <a href="#" className="hover:text-gray-300 transition">Doctors</a>
          <a href="#" className="hover:text-gray-300 transition">Contact</a>
          <a href="#" className="hover:text-gray-300 transition">FAQ</a>

          {/* Cart */}
          <div className="relative">
            <FaShoppingCart className="text-lg" />
            <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs rounded-full px-1">
              0
            </span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="sticky top-0 z-[100] w-full bg-white shadow-md flex items-center justify-between px-8 py-4">

        {/* Logo */}
        <img src={logo} alt="Logo" className="h-16" />

        {/* Menu */}
        <ul className="flex items-center space-x-8 text-[17px] font-medium text-[#333]">

          {/* Home - Simple Link */}
          <li className={`${hoverUnderlineClass} cursor-pointer`}>
            Home
            <span className={underlineSpanClass}></span>
          </li>

          {/* About Us - Specific Dropdown */}
          <li className={`${hoverUnderlineClass} flex items-center gap-1 cursor-pointer`}>
            About Us <IoIosArrowDown className="text-sm" />
            <span className={underlineSpanClass}></span>

            {/* Dropdown Menu */}
            <div className={dropdownClass}>
              <a href="#" className={dropdownItemClass}>Message from our Chairman</a>
              <a href="#" className={dropdownItemClass}>Mission & Vision</a>
              <a href="#" className={dropdownItemClass}>Our History</a>
            </div>
          </li>

          {/* Our Specialist - Generic Dropdown */}
          <li className={`${hoverUnderlineClass} flex items-center gap-1 cursor-pointer`}>
            Our Specialist <IoIosArrowDown className="text-sm" />
            <span className={underlineSpanClass}></span>
            <div className={dropdownClass}>
              <a href="#" className={dropdownItemClass}>Cardiologist</a>
              <a href="#" className={dropdownItemClass}>Neurologist</a>
              <a href="#" className={dropdownItemClass}>General Physician</a>
            </div>
          </li>

          {/* Diagnostic Tests - Generic Dropdown */}
          <li className={`${hoverUnderlineClass} flex items-center gap-1 cursor-pointer`}>
            Diagnostic Tests <IoIosArrowDown className="text-sm" />
            <span className={underlineSpanClass}></span>
            <div className={dropdownClass}>
              <a href="#" className={dropdownItemClass}>Blood Test</a>
              <a href="#" className={dropdownItemClass}>X-Ray Services</a>
              <a href="#" className={dropdownItemClass}>MRI Scan</a>
            </div>
          </li>

          {/* Check Up - Generic Dropdown */}
          <li className={`${hoverUnderlineClass} flex items-center gap-1 cursor-pointer`}>
            Check Up <IoIosArrowDown className="text-sm" />
            <span className={underlineSpanClass}></span>
            <div className={dropdownClass}>
              <a href="#" className={dropdownItemClass}>Whole Body Checkup</a>
              <a href="#" className={dropdownItemClass}>Heart Checkup</a>
              <a href="#" className={dropdownItemClass}>Diabetes Checkup</a>
            </div>
          </li>

          {/* Simple Links */}
          <li className={`${hoverUnderlineClass} cursor-pointer`}>
            Blogs
            <span className={underlineSpanClass}></span>
          </li>
          <li className={`${hoverUnderlineClass} cursor-pointer`}>
            Contact Us
            <span className={underlineSpanClass}></span>
          </li>
        </ul>

        {/* Button */}
        <button className="relative bg-black text-white px-6 py-2.5 rounded-md font-semibold shadow-md overflow-hidden group">
          <span className="absolute inset-0 w-full h-full flex">
            <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
            <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
          </span>
          <span className="relative z-10">Book Appointment</span>
        </button>
      </div>
    </>
  );
};

export default Header;
