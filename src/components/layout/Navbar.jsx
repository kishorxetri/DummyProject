import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaPlus, FaMinus } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState(null);
  const location = useLocation();

  // Navigation Data
  const navItems = [
    { name: "Home", path: "/" },
    {
      name: "About Us",
      path: "#",
      dropdown: [
        { name: "Message from Our Chairman", path: "/about/chairman-message" },
      ],
    },
    {
      name: "Our Specialist",
      path: "#",
      dropdown: [
        { name: "Cardiologist", path: "/specialists/cardiologist" },
        { name: "Neurologist", path: "/specialists/neurologist" },
        { name: "General Physician", path: "/specialists/general-physician" },
      ],
    },
    {
      name: "Diagnostic Tests",
      path: "#",
      dropdown: [
        { name: "Blood Test", path: "/diagnostics/blood-test" },
        { name: "X-Ray Services", path: "/diagnostics/xray" },
        { name: "MRI Scan", path: "/diagnostics/mri" },
      ],
    },
    {
      name: "Check Up",
      path: "#",
      dropdown: [
        { name: "Whole Body Checkup", path: "/checkups/whole-body" },
        { name: "Heart Checkup", path: "/checkups/heart" },
        { name: "Diabetes Checkup", path: "/checkups/diabetes" },
      ],
    },
    { name: "Blogs", path: "/blogs" },
    { name: "Contact Us", path: "/contact" },
  ];

  // Close mobile menu when location changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveMobileDropdown(null);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Function to check if a nav item is active
  const isActive = (item) => {
    if (location.pathname === item.path) return true;
    if (item.dropdown) {
      return item.dropdown.some(subItem => location.pathname === subItem.path);
    }
    return false;
  };

  const toggleMobileDropdown = (index) => {
    if (activeMobileDropdown === index) {
      setActiveMobileDropdown(null);
    } else {
      setActiveMobileDropdown(index);
    }
  };

  const hoverUnderlineClass = "relative group";
  const underlineSpanClass =
    "absolute left-0 bottom-[-5px] w-0 h-[3px] bg-[#28a745] transition-all duration-300 group-hover:w-full";
  const activeUnderlineClass =
    "absolute left-0 bottom-[-5px] w-full h-[3px] bg-[#28a745]";
  const dropdownClass =
    "absolute top-full left-0 mt-2 w-56 bg-white shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50 overflow-hidden";
  const dropdownItemClass =
    "block px-4 py-3 text-gray-700 hover:bg-gradient-to-r hover:from-[#be127e]/5 hover:to-transparent hover:text-[#be127e] text-sm border-b border-gray-100 last:border-0 transition-all duration-300 hover:pl-6 hover:border-l-4 hover:border-l-[#be127e] font-medium";

  return (
    <>
      {/* Main Navbar */}
      <nav className="sticky top-0 z-[100] w-full bg-white shadow-md py-3 md:py-4 transition-all duration-300">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-[60px] md:h-[70px]">

          <Link
            to="/"
            className="flex-shrink-0"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            <img src="/images/bhagawati.png" alt="Logo" className="h-10 md:h-14 lg:h-16 w-auto transition-all" />
          </Link>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex items-center space-x-4 xl:space-x-8 text-[15px] xl:text-[16px] font-medium text-[#333]">
            {navItems.map((item, index) => {
              const active = isActive(item);
              return (
                <li key={index} className={`${hoverUnderlineClass} flex items-center gap-1 cursor-pointer`}>
                  <Link
                    to={item.path === "#" ? location.pathname : item.path}
                    className={`flex items-center gap-1 py-2 ${active ? 'text-[#be127e]' : 'hover:text-[#be127e]'} transition-colors whitespace-nowrap`}
                  >
                    {item.name}
                    {item.dropdown && <IoIosArrowDown className="text-sm shrink-0" />}
                  </Link>
                  <span className={active ? activeUnderlineClass : underlineSpanClass}></span>

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
              );
            })}
          </ul>

          <div className="flex items-center gap-3 xl:gap-4">
            <button className="hidden lg:block relative bg-black text-white px-4 py-2 xl:px-6 xl:py-2.5 rounded-md font-semibold shadow-md overflow-hidden group transition-all shrink-0">
              <span className="absolute inset-0 w-full h-full flex">
                <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
              </span>
              <span className="relative z-10 text-sm xl:text-base">Book Appointment</span>
            </button>

            {/* Mobile Toggle */}
            <button
              className="lg:hidden text-2xl text-[#003b46] focus:outline-none p-2 hover:bg-gray-100 rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>

        </div>

        {/* Mobile Menu Backdrop */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 lg:hidden ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
          onClick={() => setIsMobileMenuOpen(false)}
          style={{ top: '0', zIndex: -1 }}
        ></div>

        {/* Mobile Menu Content */}
        <div className={`lg:hidden bg-white shadow-2xl absolute top-full left-0 w-full transition-all duration-500 ease-in-out overflow-hidden ${isMobileMenuOpen ? "max-h-[85vh] opacity-100 visible" : "max-h-0 opacity-0 invisible"}`}>
          <div className="p-4 space-y-2 max-h-[75vh] overflow-y-auto">
            {navItems.map((item, index) => {
              const active = isActive(item);
              const hasDropdown = !!item.dropdown;
              const isDropdownOpen = activeMobileDropdown === index;

              return (
                <div key={index} className="border-b border-gray-50 last:border-0">
                  <div className="flex items-center justify-between py-3">
                    <Link
                      to={item.path === "#" ? "#" : item.path}
                      className={`font-medium text-lg flex-1 ${active ? 'text-[#be127e]' : 'text-[#333]'}`}
                      onClick={() => !hasDropdown && setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {hasDropdown && (
                      <button
                        onClick={() => toggleMobileDropdown(index)}
                        className={`p-2 rounded-lg ${isDropdownOpen ? 'bg-gray-100 text-[#be127e]' : 'text-gray-400'}`}
                      >
                        {isDropdownOpen ? <FaMinus size={14} /> : <FaPlus size={14} />}
                      </button>
                    )}
                  </div>

                  {hasDropdown && (
                    <div className={`pl-4 space-y-1 overflow-hidden transition-all duration-300 ${isDropdownOpen ? "max-h-96 pb-4 opacity-100" : "max-h-0 opacity-0"}`}>
                      {item.dropdown.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          to={subItem.path}
                          className={`block py-2.5 text-base ${location.pathname === subItem.path ? 'text-[#be127e] font-semibold' : 'text-gray-600'}`}
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="pt-4 pb-2">
              <button className="w-full bg-[#be127e] text-white py-4 rounded-xl font-bold uppercase text-sm tracking-wider shadow-lg shadow-[#be127e]/20 active:scale-[0.98] transition-transform">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

