import React, { useState, useRef } from "react";
import { FaPlay, FaChevronRight } from "react-icons/fa";

const WhoWeAre = () => {
  // State to toggle between thumbnail and video player
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef(null);

  const features = [
    "Modern diagnostic equipment",
    "Skilled and experienced staff",
    "Quick and accurate reports",
    "Friendly and professional care",
    "Affordable service packages",
    "Convenient location in Tikathali"
  ];

  // Direct video URL
  const videoUrl = "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/videos/about%20bhagawati%20diagnostic.mp4";
  // Thumbnail image of Bhagawati Diagnostic Center
  const thumbnail = "/images/video-thumbnail.jpg";

  const handlePlayVideo = () => {
    setIsVideoPlaying(true);
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  return (
    <section className="py-12 md:py-16 bg-white overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row gap-12 items-center">

          {/* Left Column: Text Content */}
          <div className="w-full md:w-1/2">
            <div className="relative inline-block m-[0_0_24px] p-[10px_0_20px] group">
              <h2 className="text-[24px] font-bold text-[#003b46]">Who We Are</h2>
              {/* Animated underline - half width by default, full on hover */}
              <div className="absolute bottom-0 left-0 h-[2px] w-1/2 bg-[#3498db] transition-all duration-300 group-hover:w-full"></div>
            </div>

            <p className="text-[#555] text-[16px] leading-relaxed mb-6 font-['Poppins']">
              We are a trusted diagnostic center located in Tikathali, Lalitpur, dedicated to providing reliable pathology, radiology, and health check-up services using the latest technology.
            </p>

            <p className="text-[#555] text-[16px] leading-relaxed mb-8 font-['Poppins']">
              Our professional team ensures precise testing and timely reports to support your healthcare journey.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-0.5 gap-x-8">
              {features.map((feature, index) => (
                <FeatureItem key={index} text={feature} />
              ))}
            </div>
          </div>

          {/* Right Column: Video Section */}
          <div className="w-full md:w-1/2 relative group">
            <div className="relative rounded-lg overflow-hidden shadow-xl w-full h-[350px] md:h-[400px]">

              {!isVideoPlaying ? (
                /* --- 1. Thumbnail State (Default) --- */
                <>
                  <img
                    src={thumbnail}
                    alt="Bhagawati Diagnostic Center Video"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>

                  {/* Pulse Animation Play Button */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <button
                      onClick={handlePlayVideo}
                      className="relative flex items-center justify-center w-20 h-20 bg-[#8e0c60] rounded-full shadow-lg text-white z-20 hover:scale-110 transition-transform duration-300 cursor-pointer"
                      aria-label="Play Video"
                    >
                      <FaPlay className="text-2xl ml-1" />

                      {/* Pulse Circles */}
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-75 animate-[ping_2s_ease-in-out_infinite] z-10"></span>
                      <span className="absolute inline-flex h-full w-full rounded-full bg-white opacity-40 animate-[ping_3s_ease-in-out_infinite_0.5s] z-0"></span>
                    </button>
                  </div>
                </>
              ) : (
                /* --- 2. Video Player State (Active) --- */
                <video
                  ref={videoRef}
                  className="w-full h-full object-cover"
                  controls
                  src={videoUrl}
                  title="Bhagawati Diagnostic Center Video"
                >
                  Your browser does not support the video tag.
                </video>
              )}

            </div>

            {/* Decorative background element */}
            <div className="absolute -z-10 bottom-[-20px] right-[-20px] w-full h-full border-2 border-[#be127e]/10 rounded-lg hidden md:block"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Feature Item Helper
const FeatureItem = ({ text }) => (
  <div className="flex items-center gap-3 group mb-4">
    <div className="w-6 h-6 rounded-full bg-[#be127e] flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
      <FaChevronRight className="text-white text-xs" />
    </div>
    <span className="text-[#444] font-medium text-[15px]">{text}</span>
  </div>
);

export default WhoWeAre;
