import React from "react";
import { FaArrowRight } from "react-icons/fa";

const CTASection = () => {
  return (
    <section className="py-12 md:py-16 bg-[#be127e] font-['Poppins']">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 flex justify-center">

        {/* Content Container with responsive padding */}
        <div className="w-full max-w-[1220px] min-h-[280px] sm:min-h-[320px] p-6 sm:p-8 md:p-12 lg:p-[30px_256px_40px] text-center text-white flex flex-col items-center justify-center">

          {/* Heading */}
          <h2 className="text-[22px] sm:text-[26px] md:text-[32px] font-bold leading-tight">
            Need Quick Diagnostic Assistance? Call <br className="hidden md:block" />
            9860953155
          </h2>

          {/* Subtext */}
          <p className="text-[14px] sm:text-[15px] opacity-90 my-6 sm:my-8 md:m-[34px] max-w-3xl leading-relaxed">
            Our team is ready to provide accurate lab tests, imaging, and medical diagnostics with utmost care and speed in Tikathali, Lalitpur.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-[10px]">
            {/* Contact Now Button with split hover effect */}
            <button className="relative overflow-hidden px-6 sm:px-8 py-2.5 sm:py-3 rounded font-bold text-xs sm:text-sm tracking-wide text-[#be127e] bg-white shadow-md
                     before:absolute before:top-0 before:left-1/2 before:h-full before:w-0 
                     before:bg-blue-500 before:z-0 before:transition-all before:duration-500 before:ease-in-out
                     hover:before:left-0 hover:before:w-full
                     hover:text-white w-full sm:w-auto">
              <span className="relative z-10">Contact Now</span>
            </button>

            {/* Learn More Button */}
            <button className="flex items-center justify-center gap-2 border border-white text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded hover:bg-white hover:text-[#be127e] transition-colors font-bold text-xs sm:text-sm tracking-wide w-full sm:w-auto">
              Learn More <FaArrowRight />
            </button>

          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
