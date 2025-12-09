import React from "react";
import { FaHeartbeat } from "react-icons/fa";

const Packages = () => {
  return (
    <div className="py-12 md:py-16 bg-white font-['Poppins']">
      <div className="container mx-auto px-4 md:px-[150px] text-center">

        {/* Heading */}
        <h2 className="text-[32px] font-bold text-[#003b46] mb-4">
          Affordable Diagnostic Packages At <br className="hidden md:block" />  Bhagawati Diagnostic Center
        </h2>

        {/* Divider with Heartbeat */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="h-[2px] w-8 bg-[#3498db]"></div>
          <FaHeartbeat className="text-[#3498db] text-xl" />
          <div className="h-[2px] w-8 bg-[#3498db]"></div>
        </div>

        {/* Description */}
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-[15px]">
          We offer cost-effective, accurate, and timely diagnostic services to help maintain your health and well-being.
        </p>

      </div>
    </div>
  );
};

export default Packages;
