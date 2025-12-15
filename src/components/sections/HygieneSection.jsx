import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const HygieneSection = () => {
  return (<div className="pt-[50px] pb-[50px] bg-white font-['Poppins']">
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8 text-center">

      <h2 className="text-[26px] md:text-[32px] font-bold text-[#003b46] mb-4">
        We Maintain The Highest Hygiene <br className="hidden md:block" /> And Cleanliness Standards
      </h2>

      <div className="flex items-center justify-center gap-2 mb-6">
        <div className="h-[2px] w-8 bg-[#3498db]"></div>
        <FaHeartbeat className="text-[#3498db] text-xl" />
        <div className="h-[2px] w-8 bg-[#3498db]"></div>
      </div>

      {/* Description */}
      <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-[15px]">
        At Bhagawati Diagnostic Center, patient safety and cleanliness are our top priorities. Our premises follow strict sanitization protocols to ensure a healthy environment for all.
      </p>

    </div>
  </div>

  );
};

export default HygieneSection;
