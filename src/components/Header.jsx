import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import logo from "../assets/bhagawati.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Navigation Data
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "#",
      dropdown: [
        { name: "Message from our Chairman", path: "#" },
        { name: "Mission & Vision", path: "#" },
        { name: "Our History", path: "#" },
      ],
    },
    {
      name: "Our Specialist",
      path: "#",
      dropdown: [
        { name: "Cardiologist", path: "#" },
        { name: "Neurologist", path: "#" },
        { name: "General Physician", path: "#" },
      ],
    },
    {
      name: "Diagnostic Tests",
      path: "#",
      dropdown: [
        { name: "Blood Test", path: "#" },
        { name: "X-Ray Services", path: "#" },
        { name: "MRI Scan", path: "#" },
      ],
    },
    {
      name: "Check Up",
      path: "#",
      dropdown: [
        { name: "Whole Body Checkup", path: "#" },
        { name: "Heart Checkup", path: "#" },
        { name: "Diabetes Checkup", path: "#" },
      ],
    },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Styles
  const hoverUnderlineClass = "relative group";
  const underlineSpanClass = "absolute left-0 bottom-[-5px] w-0 h-[3px] bg-[#28a745] transition-all duration-300 group-hover:w-full";
  const dropdownClass = "absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50";
  const dropdownItemClass = "block px-4 py-3 text-gray-700 hover:bg-gray-50 hover:text-[#be127e] text-sm border-b border-gray-100 last:border-0 transition-colors";

  return (
    <>
      {/* Top Contact Bar */}
      <div className="w-full bg-[#003b46] text-white text-sm py-2 px-4 md:px-8 flex flex-col md:flex-row justify-between items-center gap-2 md:gap-0">

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
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/about" className="hover:text-gray-300 transition">About</Link>
          <Link to="/doctors" className="hover:text-gray-300 transition">Doctors</Link>
          <Link to="/contact" className="hover:text-gray-300 transition">Contact</Link>
          <Link to="/faq" className="hover:text-gray-300 transition">FAQ</Link>

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
      <div className="sticky top-0 z-[100] w-full bg-white shadow-md flex items-center justify-between px-4 md:px-8 py-4">

        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="Logo" className="h-12 md:h-16" />
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-[#003b46] focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center space-x-8 text-[17px] font-medium text-[#333]">
          {navItems.map((item, index) => (
            <li key={index} className={`${hoverUnderlineClass} flex items-center gap-1 cursor-pointer`}>
              <Link to={item.path} className="flex items-center gap-1">
                {item.name}
                {item.dropdown && <IoIosArrowDown className="text-sm" />}
              </Link>
              <span className={underlineSpanClass}></span>

              {/* Dropdown */}
              {item.dropdown && (
                <div className={dropdownClass}>
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link key={subIndex} to={subItem.path} className={dropdownItemClass}>
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Button */}
        <button className="hidden md:block relative bg-black text-white px-6 py-2.5 rounded-md font-semibold shadow-md overflow-hidden group">
          <span className="absolute inset-0 w-full h-full flex">
            <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
            <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
          </span>
          <span className="relative z-10">Book Appointment</span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t absolute top-[var(--header-height)] left-0 w-full z-50 flex flex-col p-4 space-y-4 max-h-[80vh] overflow-y-auto">

          {navItems.map((item, index) => (
            <div key={index} className="flex flex-col">
              <Link
                to={item.path}
                className="font-medium text-[#333] hover:text-[#be127e] py-1"
                onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>

              {/* Mobile Submenu (Simple Indentation) */}
              {item.dropdown && (
                <div className="flex flex-col pl-4 border-l-2 border-gray-100 ml-1 mt-1 space-y-2 mb-2">
                  {item.dropdown.map((subItem, subIndex) => (
                    <Link
                      key={subIndex}
                      to={subItem.path}
                      className="text-sm text-gray-600 hover:text-[#be127e]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {subItem.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}

          <button className="bg-[#be127e] text-white px-6 py-3 rounded-md font-bold uppercase text-sm tracking-wider w-full mt-4">
            Book Appointment
          </button>
        </div>
      )}
    </>
  );
};

export default Header;
