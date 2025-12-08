import React, { useState, useEffect } from "react";
import { FaEye } from "react-icons/fa";

const FacilitiesGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const facilities = [
    {
      id: 1,
      image: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/pf1.jpg",
      label: "View Selection Plan"
    },
    {
      id: 2,
      image: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/pf2.jpg",
      label: "View Reception"
    },
    {
      id: 3,
      image: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/pf3.jpg",
      label: "View Radiology Unit"
    },
    {
      id: 4,
      image: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/pf4.jpg",
      label: "View Lab Facility"
    }
  ];

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % facilities.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [facilities.length]);

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
    <section className="py-16 bg-gray-50 font-['Poppins'] overflow-hidden">
      <div className="container mx-auto px-4 md:px-[150px]">

        {/* Carousel Container */}
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {getVisibleItems().map((facility, idx) => (
              <div
                key={`${facility.id}-${currentIndex}-${idx}`}
                className="relative w-full h-[220px] rounded-lg overflow-hidden group cursor-pointer shadow-lg animate-fadeIn"
              >
                {/* Image */}
                <img
                  src={facility.image}
                  alt={facility.label}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Pink Overlay on Hover */}
                <div className="absolute inset-0 bg-[#be127e] opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
                  <button className="bg-white text-[#be127e] px-6 py-3 rounded font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 shadow-lg hover:bg-gray-100">
                    <FaEye />
                    {facility.label}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
                @keyframes fadeIn {
                    from {
                        opacity: 0;
                        transform: translateX(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateX(0);
                    }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out;
                }
            `}</style>
    </section>
  );
};

export default FacilitiesGallery;
