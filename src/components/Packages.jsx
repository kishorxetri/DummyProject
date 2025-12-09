import React from "react";
import { FaHeartbeat, FaFlask, FaCheckCircle } from "react-icons/fa";

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
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-sm md:text-[15px] mb-12">
          We offer cost-effective, accurate, and timely diagnostic services to help maintain your health and well-being.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300 text-left"
            >
              {/* Flask Icon */}
              <div className="flex justify-center mb-4">
                <FaFlask className="text-5xl text-[#be127e]" />
              </div>

              {/* Package Name */}
              <h3 className="text-[18px] font-bold text-[#003b46] text-center mb-3">
                {pkg.name}
              </h3>

              {/* Pricing */}
              <div className="text-center mb-4">
                {pkg.discountedPrice ? (
                  <>
                    <span className="text-[14px] line-through text-gray-400 mr-2">
                      ₹{pkg.originalPrice}
                    </span>
                    <span className="text-[20px] font-bold text-[#27ae60]">
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
              <ul className="space-y-2 mb-6">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheckCircle
                      className={`text-lg flex-shrink-0 ${feature.included ? 'text-[#be127e]' : 'text-gray-400'
                        }`}
                    />
                    <span className="text-[14px] text-gray-700">
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Book Now Button */}
              <button className="w-full bg-[#be127e] text-white font-semibold py-3 rounded hover:bg-[#9e0f68] transition-colors duration-300">
                Book Now
              </button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Packages;
