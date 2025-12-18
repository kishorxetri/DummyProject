import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";

const FacilitiesGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const facilities = [
    {
      id: 1,
      image: "/images/pf1.jpg",
      label: "View Selection Plan"
    },
    {
      id: 2,
      image: "/images/pf2.jpg",
      label: "View Reception"
    },
    {
      id: 3,
      image: "/images/pf3.jpg",
      label: "View Radiology Unit"
    },
    {
      id: 4,
      image: "/images/pf4.jpg",
      label: "View Lab Facility"
    }
  ];

  // Auto-rotate carousel - DISABLED
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
  //   }, 3000); // Change every 3 seconds

  //   return () => clearInterval(interval);
  // }, [facilities.length]);

  // Get visible items based on screen size
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < 4; i++) {
      const index = (currentIndex + i) % facilities.length;
      items.push(facilities[index]);
    }
    return items;
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50 font-['Poppins'] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {getVisibleItems().map((facility, idx) => (
              <div
                key={`${facility.id}-${currentIndex}-${idx}`}
                className="relative overflow-hidden group cursor-pointer shadow-lg animate-slideIn"
                style={{ height: '280px', borderRadius: '0px' }}
              >
                {/* Image */}
                <img
                  src={facility.image}
                  alt={facility.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Pink Overlay on Hover */}
                <div className="absolute inset-0 bg-[#be127e] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <button className="group/btn bg-white text-[#be127e] font-bold flex items-center justify-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-lg hover:bg-gray-100 px-6 py-3 rounded-sm min-w-[60px] hover:min-w-[220px]">
                    <FaEye className="text-xl flex-shrink-0" />
                    <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover/btn:max-w-xs transition-all duration-300 text-[16px]">
                      {facility.label}
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
                @keyframes slideIn {
                    from {
                        transform: translateX(-100%);
                    }
                    to {
                        transform: translateX(0);
                    }
                }
                .animate-slideIn {
                    animation: slideIn 0.6s ease-out;
                }
            `}</style>
    </section>
  );
};

export default FacilitiesGallery;
