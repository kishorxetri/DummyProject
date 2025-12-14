import React from "react";
import { FaHeartbeat, FaFlask, FaCheckCircle, FaTimes } from "react-icons/fa";

const Packages = () => {
  const packages = [
    {
      id: 1,
      name: "Basic Health Checkup",
      originalPrice: "1,500",
      discountedPrice: null,
      features: [
        { name: "Complete Blood Count (CBC)", included: true },
        { name: "Blood Sugar Fasting", included: true },
        { name: "Lipid Profile", included: true },
        { name: "Liver Function Test", included: true },
        { name: "Urine Routine", included: true },
        { name: "ECG", included: false },
        { name: "Ultrasound", included: false },
      ]
    },
    {
      id: 2,
      name: "Comprehensive Health Package",
      originalPrice: "5,500",
      discountedPrice: "3,500",
      features: [
        { name: "Complete Blood Count (CBC)", included: true },
        { name: "Kidney Function Test", included: true },
        { name: "Liver Function Test", included: true },
        { name: "Thyroid Profile", included: true },
        { name: "ECG", included: true },
        { name: "Chest X-Ray", included: true },
        { name: "Ultrasound Abdomen", included: true },
      ]
    },
    {
      id: 3,
      name: "Executive Health Checkup",
      originalPrice: "9,000",
      discountedPrice: "6,500",
      features: [
        { name: "Complete Blood Work", included: true },
        { name: "Cardiac Risk Markers", included: true },
        { name: "Cancer Screening", included: true },
        { name: "Bone Density Test", included: true },
        { name: "ECG & Echo", included: true },
        { name: "CT Scan (If Needed)", included: true },
        { name: "Specialist Consultation", included: true },
      ]
    }
  ];

  return (
    <div className="pt-[50px] pb-[50px] bg-white font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">

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
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-[15px] mb-12">
          We offer cost-effective, accurate, and timely diagnostic services to help maintain your health and well-being.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 text-left relative group"
            >
              {/* Flask Icon */}
              <div className="flex justify-center mb-4">
                <FaFlask className="text-5xl text-[#be127e] group-hover:scale-110 transition-transform duration-500" />
              </div>

              {/* Package Name */}
              <h3 className="text-[20px] font-bold text-[#003b46] text-center mb-3">
                {pkg.name}
              </h3>

              {/* Pricing */}
              <div className="text-center mb-4">
                {pkg.discountedPrice ? (
                  <>
                    <span className="text-[16px] line-through text-gray-400 mr-2">
                      ₹{pkg.originalPrice}
                    </span>
                    <span className="text-[18px] font-bold text-[#27ae60]">
                      ₹{pkg.discountedPrice}
                    </span>
                  </>
                ) : (
                  <span className="text-[18px] font-semibold text-[#003b46]">
                    ₹{pkg.originalPrice}
                  </span>
                )}
                <div className="text-[12px] text-gray-500 mt-1">/ Per Package</div>
              </div>

              {/* Features List */}
              <ul className="space-y-3 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    {feature.included ? (
                      <FaCheckCircle className="text-lg flex-shrink-0 text-[#be127e]" />
                    ) : (
                      <FaTimes className="text-lg flex-shrink-0 text-gray-400" />
                    )}
                    <span className="text-[16px] text-gray-700">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Book Now Button */}
              <button className="w-full relative bg-black text-white py-3 rounded font-semibold shadow-md overflow-hidden group/btn">
                <span className="absolute inset-0 w-full h-full flex">
                  <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover/btn:-translate-x-full"></span>
                  <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover/btn:translate-x-full"></span>
                </span>
                <span className="relative z-10">Book Now</span>
              </button>

              {/* Bottom Blue Line on Hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#3498db] to-[#2980b9] group-hover:w-full transition-all duration-700 ease-out rounded-b-lg"></div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Packages;
