import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
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
          Welcome to <span className="text-[#be127e]">BHAGAWATI</span> Diagnostic Center <span className="text-[#be127e]">Pvt. Ltd.</span>
        </>
      ),
      description: "Your trusted medical diagnostic partner located at Tikathali, Lalitpur. We are committed to delivering accurate and timely healthcare services.",
      image: "/images/slider2.jpg",
      alt: "Bhagawati Diagnostic Center"
    },
    {
      id: 2,
      title: (
        <>
          Serving <span className="text-[#be127e]">Lalitpur</span> with Diagnostic <span className="text-[#be127e]">Excellence</span>
        </>
      ),
      description: "Experience high-quality healthcare diagnostics from trained professionals, right here in Tikathali.",
      image: "/images/slider3.jpg",
      alt: "Doctor"
    },
    {
      id: 3,
      title: (
        <>
          Advanced <span className="text-[#be127e]">Diagnostic</span> With <span className="text-[#be127e]">Care</span>
        </>
      ),
      description: "State-of-the-art technology ensuring precise results for all your medical testing needs.",
      image: "/images/slider.jpg",
      alt: "Laboratory"
    }
  ];

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    setIsLoaded(true);
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [nextSlide]);


  return (
    <section className="relative w-full overflow-hidden font-['Poppins']">

      {/* Slider Section */}
      <div className="relative h-[530px] md:h-[630px] flex items-center">
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

              <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center relative z-20">
                <div className={`w-full md:w-[60%] lg:w-[50%] -mt-6 sm:-mt-8 md:-mt-12 lg:-mt-16 transition-all duration-700`}>

                  {/* Title */}
                  <h1 className={`text-[24px] sm:text-[28px] md:text-[38px] font-bold text-[#003b46] leading-tight transition-all duration-1000 ease-out delay-500 transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                    }`}>
                    {slide.title}
                  </h1>
                  {/* Description */}
                  <p className={`text-[#444] text-[14px] sm:text-[15px] md:text-[16px] font-medium leading-relaxed mt-4 transition-all duration-1000 ease-out delay-[700ms] transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    {slide.description}
                  </p>

                  {/* Buttons */}
                  <div className={`flex flex-wrap gap-4 mt-8 transition-all duration-1000 ease-out delay-[900ms] transform ${isActive ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
                    }`}>
                    <button className="relative bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-bold uppercase text-xs sm:text-sm tracking-wider shadow-lg overflow-hidden group">
                      <span className="absolute inset-0 w-full h-full flex">
                        <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                        <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                      </span>
                      <span className="relative z-10">Get Appointment</span>
                    </button>

                    {slide.id === 1 && (
                      <button className="relative bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-bold uppercase text-xs sm:text-sm tracking-wider shadow-lg overflow-hidden group">
                        <span className="absolute inset-0 w-full h-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="w-1/2 h-full bg-[#3498db] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                          <span className="w-1/2 h-full bg-[#3498db] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                        </span>
                        <span className="relative z-10">Learn More</span>
                      </button>
                    )}

                    {slide.id === 2 && (
                      <button className="relative bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-bold uppercase text-xs sm:text-sm tracking-wider shadow-lg overflow-hidden group">
                        <span className="absolute inset-0 w-full h-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="w-1/2 h-full bg-[#3498db] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                          <span className="w-1/2 h-full bg-[#3498db] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                        </span>
                        <span className="relative z-10">Contact Now</span>
                      </button>
                    )}

                    {slide.id === 3 && (
                      <Link
                        to="/about/chairman-message"
                        className="relative bg-black text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-md font-bold uppercase text-xs sm:text-sm tracking-wider shadow-lg overflow-hidden group inline-block"
                      >
                        <span className="absolute inset-0 w-full h-full flex opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <span className="w-1/2 h-full bg-[#3498db] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                          <span className="w-1/2 h-full bg-[#3498db] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                        </span>
                        <span className="relative z-10">About Us</span>
                      </Link>
                    )}
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
      <div className="fixed bottom-6 right-6 sm:bottom-10 sm:right-10 z-[999]">
        <a
          href="https://wa.me/9860953155"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 bg-[#25D366] rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:bg-[#128C7E] transition-all hover:scale-110 active:scale-90 text-white text-3xl sm:text-4xl"
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Cards Section */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 relative z-40">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-6 -mt-24 sm:-mt-28 md:-mt-36 lg:-mt-44">

          {/* Card 1 */}
          <div className="bg-[#8e0c60] text-white p-6 sm:p-8 lg:p-10 hover:bg-[#720a4d] hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between rounded-xl shadow-2xl min-h-[280px]">
            <div className="relative z-10">
              <div className="text-xs sm:text-sm font-semibold mb-3 opacity-80 uppercase tracking-[2px]">24/7 Support</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Emergency Cases</h3>
              <p className="text-sm sm:text-base opacity-90 leading-relaxed mb-6">
                If you need urgent medical diagnostics, we are just a call away. We provide emergency lab services at Tikathali, Lalitpur.
              </p>
            </div>
            <div className="relative z-10">
              <Link to="/contact" className="inline-flex items-center text-sm font-bold tracking-widest uppercase hover:gap-3 transition-all duration-300 underline-offset-8 hover:underline">
                Call Now <FaArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <FaPlus className="absolute -bottom-6 -right-8 text-[120px] sm:text-[160px] text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
          </div>

          {/* Card 2 */}
          <div className="bg-[#be127e] text-white p-6 sm:p-8 lg:p-10 hover:bg-[#a6106e] hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between rounded-xl shadow-2xl min-h-[280px]">
            <div className="relative z-10">
              <div className="text-xs sm:text-sm font-semibold mb-3 opacity-80 uppercase tracking-[2px]">Expert Team</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Doctors Timetable</h3>
              <p className="text-sm sm:text-base opacity-90 leading-relaxed mb-6">
                Check available time slots for our diagnostic specialists. Our team is always ready to assist you with accuracy and care.
              </p>
            </div>
            <div className="relative z-10">
              <Link to="/doctors" className="inline-flex items-center text-sm font-bold tracking-widest uppercase hover:gap-3 transition-all duration-300 underline-offset-8 hover:underline">
                View Schedule <FaArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <FaClipboardList className="absolute -bottom-6 -right-8 text-[120px] sm:text-[160px] text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
          </div>

          {/* Card 3 */}
          <div className="bg-[#8e0c60] text-white p-6 sm:p-8 lg:p-10 hover:bg-[#720a4d] hover:-translate-y-3 transition-all duration-300 relative overflow-hidden group flex flex-col justify-between rounded-xl shadow-2xl min-h-[280px] md:col-span-2 lg:col-span-1">
            <div className="relative z-10">
              <div className="text-xs sm:text-sm font-semibold mb-3 opacity-80 uppercase tracking-[2px]">Visit Us</div>
              <h3 className="text-xl sm:text-2xl font-bold mb-4">Opening Hours</h3>
              <div className="space-y-2 text-sm sm:text-base opacity-95">
                <div className="flex justify-between border-b border-white/10 pb-2">
                  <span>Sunday - Friday:</span>
                  <span className="font-semibold">6:00 AM - 9:00 PM</span>
                </div>
                <div className="flex justify-between pt-1">
                  <span>Saturday:</span>
                  <span className="font-semibold">6:00 AM - 5:00 PM</span>
                </div>
                <p className="mt-4 text-white/70 italic text-xs sm:text-sm">Emergency services available 24/7</p>
              </div>
            </div>
            <div className="relative z-10 mt-6 lg:mt-0">
              <Link to="/contact" className="inline-flex items-center text-sm font-bold tracking-widest uppercase hover:gap-3 transition-all duration-300 underline-offset-8 hover:underline">
                Get Directions <FaArrowRight size={14} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
            <FaClock className="absolute -bottom-6 -right-8 text-[120px] sm:text-[160px] text-white/10 rotate-12 group-hover:scale-110 transition-transform duration-500" />
          </div>

        </div>
      </div>

      {/* Bottom spacing */}
      <div className="pb-10 md:pb-14"></div>
    </section>
  );
};

export default Hero;
