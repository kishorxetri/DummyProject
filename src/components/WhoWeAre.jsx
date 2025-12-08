import React, { useState } from "react";
import { FaPlay, FaCheckCircle, FaChevronRight } from "react-icons/fa";

const WhoWeAre = () => {
  // This state could be used to toggle a video modal in the future
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-[150px]">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2">
            <div className="inline-block border-b-4 border-[#be127e] pb-1 mb-6">
              <h2 className="text-3xl md:text-3xl font-bold text-[#003b46]">Who We Are</h2>
            </div>

            <p className="text-[#555] text-base leading-relaxed mb-6 font-['Poppins']">
              We are a trusted diagnostic center located in Tikathali, Lalitpur, dedicated to providing reliable pathology, radiology, and health check-up services using the latest technology.
            </p>

            <p className="text-[#555] text-base leading-relaxed mb-8 font-['Poppins']">
              Our professional team ensures precise testing and timely reports to support your healthcare journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
              <FeatureItem text="Modern diagnostic equipment" />
              <FeatureItem text="Skilled and experienced staff" />
              <FeatureItem text="Quick and accurate reports" />
              <FeatureItem text="Friendly and professional care" />
              <FeatureItem text="Affordable service packages" />
              <FeatureItem text="Convenient location in Tikathali" />
            </div>
          </div>

          {/* Right Column: Video/Image Section */}
          <div className="w-full md:w-1/2 relative group">
            {/* Image Container */}
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <img
                src="https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/slider3.jpg" // Placeholder using one of their existing images for consistency
                alt="Bhagawati Diagnostic Center Building"
                className="w-full h-[350px] md:h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-300"></div>

              {/* Pulse Animation Play Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <button
                  onClick={() => console.log('Open Video')} // Placeholder action
                  className="relative flex items-center justify-center w-20 h-20 bg-[#8e0c60] rounded-full shadow-lg text-white z-20 hover:scale-110 transition-transform duration-300"
                >
                  <FaPlay className="text-2xl ml-1" /> {/* ml-1 to center the play triangle visually */}

                  {/* Pulse Circles */}
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#be127e] opacity-75 animate-[ping_2s_ease-in-out_infinite] z-10"></span>
                  <span className="absolute inline-flex h-full w-full rounded-full bg-[#8e0c60] opacity-40 animate-[ping_3s_ease-in-out_infinite_0.5s] z-0"></span>
                </button>
              </div>
            </div>

            {/* Decorative background element (optional, to match "design" feel) */}
            <div className="absolute -z-10 bottom-[-20px] right-[-20px] w-full h-full border-2 border-[#be127e]/10 rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Start Helper Component
const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-3 group">
    <div className="w-6 h-6 rounded-full bg-[#be127e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
      <FaChevronRight className="text-white text-xs" />
    </div>
    <span className="text-[#444] font-medium text-[15px]">{text}</span>
  </div>
);

export default WhoWeAre;
