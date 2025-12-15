import React, { useState, useEffect } from "react";
import "@fontsource/poppins";

const ClientLogos = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const logos = [
    {
      id: 1,
      url: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/client3.png",
      alt: "Central Hospital",
    },
    {
      id: 2,
      url: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/client2.png",
      alt: "Panacea Clinic",
    },
    {
      id: 3,
      url: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/client1.png",
      alt: "Cardiac Science",
    },
    {
      id: 4,
      url: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/client5.png",
      alt: "Pharmacy",
    },
    {
      id: 5,
      url: "https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/client4.png",
      alt: "Healthcare",
    },
  ];

  // Auto-rotate logos every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % logos.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [logos.length]);

  // Get visible logos (all 5 in a row, rotating which one is first)
  const getVisibleLogos = () => {
    const items = [];
    for (let i = 0; i < logos.length; i++) {
      const index = (currentIndex + i) % logos.length;
      items.push(logos[index]);
    }
    return items;
  };

  return (
    <section className="bg-[#be127e] py-12 overflow-hidden font-['Poppins']">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

        {/* Logos Container */}
        <div className="flex items-center justify-center gap-8 md:gap-16">
          {getVisibleLogos().map((logo, idx) => (
            <div
              key={`${logo.id}-${currentIndex}-${idx}`}
              className="flex-shrink-0 animate-fadeIn"
            >
              <img
                src={logo.url}
                alt={logo.alt}
                className="h-12 md:h-16 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 0.9;
            transform: scale(1);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ClientLogos;

