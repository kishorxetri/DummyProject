import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const HygieneSection = () => {
  return (<div className="py-10 bg-white font-['Poppins']">
    <div className="container mx-auto px-4 md:px-[150px] text-center">

      {/* Heading */}
      <h2 className="text-[28px] font-bold text-[#003b46] mb-4">
        We Maintain The Highest Hygiene <br className="hidden md:block" /> And Cleanliness Standards
      </h2>

      {/* Divider with Heartbeat */}
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
