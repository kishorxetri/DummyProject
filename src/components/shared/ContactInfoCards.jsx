import React from "react";
import { FaPhoneAlt, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";

const ContactInfoCards = () => {
  const contactInfo = [
    {
      icon: FaPhoneAlt,
      title: "9860953155",
      subtitle: "bhagwoti999@gmail.com",
    },
    {
      icon: FaMapMarkerAlt,
      title: "Tikathali - 5,",
      subtitle: "Lalitpur, Nepal",
    },
    {
      icon: FaClock,
      title: "Sun - Fri: 6am - 9pm",
      subtitle: "7 Days a Week",
    },
  ];

  return (
    <section className="bg-white py-12 md:py-16 font-['Poppins']">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactInfo.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-[#be127e] to-[#d4148a] text-white rounded-xl p-8 flex items-start gap-5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#be127e]/50 hover:scale-[1.02] cursor-pointer"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <IconComponent className="text-[32px] md:text-[36px]" />
                </div>

                {/* Text Content */}
                <div className="flex flex-col">
                  <h3 className="text-[16px] md:text-[17px] font-semibold mb-1 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-white/90 leading-snug">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactInfoCards;
