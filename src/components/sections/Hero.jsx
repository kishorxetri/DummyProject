import React, { useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight, FaWhatsapp, FaArrowRight, FaPlus, FaClipboardList, FaClock } from "react-icons/fa";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const slides = [
    {
      id: 1,
      title: (
        <>
          Welcome to <span className="text-[#be127e]">BHAGAWATI</span> <br />
          Diagnostic Center <span className="text-[#be127e]">Pvt. Ltd.</span>
        </>
      ),
      description: "Your trusted medical diagnostic partner located at Tikathali, Lalitpur. We are committed to delivering accurate and timely healthcare services.",
      image: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/slider2.jpg",
      alt: "Bhagawati Diagnostic Center"
    },
    {
      id: 2,
      title: (
        <>
          Serving <span className="text-[#be127e]">Lalitpur</span> with Diagnostic <br />
          <span className="text-[#be127e]">Excellence</span>
        </>
      ),
      description: "Experience high-quality healthcare diagnostics from trained professionals, right here in Tikathali.",
      image: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/slider3.jpg",
      alt: "Doctor"
    },
    {
      id: 3,
      title: (
        <>
          Advanced <span className="text-[#be127e]">Diagnostic Center</span> <br />
          for <span className="text-[#be127e]">Better Health</span>
        </>
      ),
      description: "State-of-the-art technology ensuring precise results for all your medical testing needs.",
      image: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/slider.jpg",
      alt: "Laboratory"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 6000); // Wait 6 seconds (enough time to read)
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden font-['Poppins'] ">

      {/* Slider Section */}
      <div className="relative h-[550px] md:h-[650px] flex items-center">
        {slides.map((slide, index) => {
          const isActive = index === currentSlide && isLoaded;
          return (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full bg-cover bg-center transition-opacity duration-1000 ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              style={{ backgroundImage: `url('${slide.image}')` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent"></div>

              {/* 
                  Container Updates:
                  - md:px-[150px]: Symmetrical padding (150px left AND right).
                  - px-4: Mobile padding retained.
              */}
              <div className="container mx-auto px-4 md:px-[150px] h-full flex items-center relative z-20">

                <div className={`w-full md:w-[45%] -mt-16`}>

                  {/* Title: Appears after background transition (1000ms) */}
                  <h1 className={`text-[28px] md:text-[38px] font-bold text-[#003b46] leading-tight transition-all duration-1000 ease-out delay-1000 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
                    }`}>
                    {slide.title}
                  </h1>

                  {/* Description: Appears slightly after title */}
                  <p className={`text-[#444] text-[16px] font-medium leading-relaxed mt-4 transition-all duration-1000 ease-out delay-[1200ms] transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>
                    {slide.description}
                  </p>

                  {/* Buttons: Appear last */}
                  <div className={`flex flex-wrap gap-4 mt-8 transition-all duration-1000 ease-out delay-[1400ms] transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>
                    <button className="relative bg-black text-white px-8 py-3 rounded-md font-bold uppercase text-sm tracking-wider shadow-lg overflow-hidden group">
                      <span className="absolute inset-0 w-full h-full flex">
                        <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                        <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                      </span>
                      <span className="relative z-10">Get Appointment</span>
                    </button>
                    <button className="bg-[#003b46] hover:bg-[#002830] text-white px-8 py-3 rounded-md font-bold uppercase text-sm tracking-wider transition shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>

              </div>
            </div>
          );
        })}

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-[#be127e] text-white rounded-full hover:bg-[#9d0f68] hidden md:block transition hover:scale-110 shadow-lg"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-6 top-1/2 transform -translate-y-1/2 z-30 p-4 bg-[#be127e] text-white rounded-full hover:bg-[#9d0f68] hidden md:block transition hover:scale-110 shadow-lg"
        >
          <FaChevronRight size={20} />
        </button>
      </div>
      {/* Floating Whatsapp Button */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href="#" className="flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition text-white text-4xl animate-bounce-slow">
          <FaWhatsapp />
        </a>
      </div>
      {/* Cards Section - Overlapping with slider */}
      <div className="container mx-auto px-4 md:px-[150px] relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 -mt-[170px] md:-mt-[170px]">

          {/* Card 1 */}
          <div className="bg-[#8e0c60] text-white p-6 md:p-[30px] w-full md:w-[330px] h-[308px] hover:bg-[#720a4d] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(190,18,126,0.5)] transition duration-300 relative overflow-hidden group flex flex-col justify-between rounded-lg shadow-xl">
            <div className="relative z-10">
              <div className="text-[16px] font-semibold mb-2 md:mb-3 opacity-90 uppercase tracking-wide">24/7 Support</div>
              <h3 className="text-[20px] font-bold mb-3 md:mb-5">Emergency Cases</h3>
              <p className="text-[16px] opacity-90 mb-4 md:mb-6 leading-relaxed">
                If you need urgent medical diagnostics, we are just a call away. We provide emergency lab services at Tikathali, Lalitpur.
              </p>
            </div>
            <div className="relative z-10">
              <a href="#" className="flex items-center text-xs md:text-sm font-bold tracking-wider uppercase hover:underline">
                Learn More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            {/* Background Icon */}
            <FaPlus className="absolute bottom-[-10px] right-[-30px] text-[8rem] md:text-[10rem] text-white opacity-10 transform group-hover:scale-110 transition duration-500 rotate-12" />
          </div>

          {/* Card 2 */}
          <div className="bg-[#be127e] text-white p-6 md:p-[30px] w-full md:w-[330px] h-[308px] hover:bg-[#9d0f68] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(190,18,126,0.5)] transition duration-300 relative overflow-hidden group flex flex-col justify-between rounded-lg shadow-xl">
            <div className="relative z-10">
              <div className="text-[16px] font-semibold mb-2 md:mb-3 opacity-90 uppercase tracking-wide">Expert Team</div>
              <h3 className="text-[20px] font-bold mb-3 md:mb-5">Doctors Timetable</h3>
              <p className="text-[16px] opacity-90 mb-4 md:mb-6 leading-relaxed">
                Check available time slots for our diagnostic specialists. Our team is always ready to assist you with accuracy and care.
              </p>
            </div>
            <div className="relative z-10">
              <a href="#" className="flex items-center text-xs md:text-sm font-bold tracking-wider uppercase hover:underline">
                Learn More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            {/* Background Icon */}
            <FaClipboardList className="absolute bottom-[-10px] right-[-30px] text-[8rem] md:text-[10rem] text-white opacity-10 transform group-hover:scale-110 transition duration-500 rotate-12" />
          </div>

          {/* Card 3 */}
          <div className="bg-[#8e0c60] text-white p-6 md:p-[30px] w-full md:w-[330px] h-[308px] hover:bg-[#720a4d] hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(190,18,126,0.5)] transition duration-300 relative overflow-hidden group flex flex-col justify-between rounded-lg shadow-xl">
            <div className="relative z-10">
              <div className="text-[16px] font-semibold mb-2 md:mb-3 opacity-90 uppercase tracking-wide">Visit Us</div>
              <h3 className="text-[20px] font-bold mb-3 md:mb-5">Opening Hours</h3>
              <p className="text-[16px] opacity-90 mb-4 md:mb-6 leading-relaxed">
                Sunday - Saturday 6:00 AM - 9:00 PM <br /><br />
                Always Open - 7 Days a Week, No Holidays
              </p>
            </div>
            <div className="relative z-10">
              <a href="#" className="flex items-center text-xs md:text-sm font-bold tracking-wider uppercase hover:underline">
                Learn More <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
            {/* Background Icon */}
            <FaClock className="absolute bottom-[-10px] right-[-30px] text-[8rem] md:text-[10rem] text-white opacity-10 transform group-hover:scale-110 transition duration-500 rotate-12" />
          </div>

        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-12 md:pb-16"></div>
    </div>
  );
};

export default Hero;
