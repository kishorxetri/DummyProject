import React from "react";
import { FaAmbulance, FaStethoscope, FaHeartbeat, FaClinicMedical } from "react-icons/fa";

const ReadyToHelp = () => {
  return (
    <div className="py-12 md:py-16 bg-white font-['Poppins']">
      <div className="container mx-auto px-4 md:px-[150px]">

        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[32px] font-bold text-[#003b46] mb-4">
            We Are Always Ready To Help You & Your <br /> Family
          </h2>

          {/* Divider with Heartbeat */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[2px] w-8 bg-[#3498db]"></div>
            <FaHeartbeat className="text-[#3498db] text-xl" />
            <div className="h-[2px] w-8 bg-[#3498db]"></div>
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-[15px]">
            At Bhagawati Diagnostic Center Pvt. Ltd., we are committed to providing accurate, timely, and
            compassionate diagnostic services to you and your loved ones in Tikathali, Lalitpur.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

          {/* Connecting Line (Desktop Only) */}
          {/* Connecting Lines (Desktop Only) */}
          <div className="hidden md:block absolute top-[45px] left-[26%] w-[15%] h-[2px] border-t-2 border-dotted border-[#be127e] z-0"></div>
          <div className="hidden md:block absolute top-[45px] right-[26%] w-[15%] h-[2px] border-t-2 border-dotted border-[#be127e] z-0"></div>

          {/* Item 1: Emergency Help */}
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-[90px] h-[90px] bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-2 hover:bg-[#be127e] group/icon">
              <FaAmbulance className="text-3xl text-[#be127e] group-hover/icon:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-[#003b46] mb-3">Emergency Help</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              We offer prompt diagnostic services during medical emergencies to ensure immediate support and care.
            </p>
          </div>

          {/* Item 2: Modern Laboratory */}
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-[90px] h-[90px] bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-2 hover:bg-[#be127e] group/icon">
              <FaClinicMedical className="text-3xl text-[#be127e] group-hover/icon:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-[#003b46] mb-3">Modern Laboratory</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              Our enriched diagnostic center is equipped with advanced tools and technology for precise lab results.
            </p>
          </div>

          {/* Item 3: Accurate Reports */}
          <div className="flex flex-col items-center text-center relative z-10 group">
            <div className="w-[90px] h-[90px] bg-white border border-gray-100 shadow-md rounded-full flex items-center justify-center mb-6 transition-all duration-300 group-hover:-translate-y-2 hover:bg-[#be127e] group/icon">
              <FaStethoscope className="text-3xl text-[#be127e] group-hover/icon:text-white transition-colors duration-300" />
            </div>
            <h3 className="text-xl font-bold text-[#003b46] mb-3">Accurate Reports</h3>
            <p className="text-gray-500 text-sm leading-relaxed px-4">
              We ensure quality-controlled testing and timely reporting to support your treatment decisions.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ReadyToHelp;
