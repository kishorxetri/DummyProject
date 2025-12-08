import React from "react";
import { FaFlask, FaXRay, FaHeartbeat, FaUserMd, FaClipboardList, FaTruck } from "react-icons/fa";

const KeyServices = () => {
  const services = [
    {
      id: 1,
      icon: FaFlask,
      title: "Pathology Lab",
      description: "Comprehensive blood, urine, stool, and other sample testing with timely and precise reports."
    },
    {
      id: 2,
      icon: FaXRay,
      title: "Digital X-Ray",
      description: "High-quality digital X-Ray services with expert radiologist reporting for accurate diagnosis."
    },
    {
      id: 3,
      icon: FaHeartbeat,
      title: "Ultrasound",
      description: "2D/3D Ultrasound scanning for pregnancy, abdominal, pelvic, thyroid, and more."
    },
    {
      id: 4,
      icon: FaUserMd,
      title: "Specialist Consultation",
      description: "Consult with experienced doctors in general medicine, gynecology, and other specialties."
    },
    {
      id: 5,
      icon: FaClipboardList,
      title: "Health Check Packages",
      description: "Customized full-body health checkups at affordable rates for all age groups."
    },
    {
      id: 6,
      icon: FaTruck,
      title: "Home Sample Collection",
      description: "Can't visit us? We collect samples from your home and deliver reports digitally."
    }
  ];

  return (
    <section className="py-12 bg-white font-['Poppins']">
      <div className="container mx-auto px-4 md:px-[150px]">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-[28px] font-bold text-[#003b46] mb-4">
            Our Key Diagnostic Services At Bhagawati <br className="hidden md:block" />
            Diagnostic Center
          </h2>

          {/* Divider with Heartbeat */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="h-[2px] w-8 bg-[#3498db]"></div>
            <FaHeartbeat className="text-[#3498db] text-xl" />
            <div className="h-[2px] w-8 bg-[#3498db]"></div>
          </div>

          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed text-[15px]">
            We provide accurate and affordable diagnostic services using modern medical technologies in Tikathali, Lalitpur.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className="flex gap-5 group"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-[#be127e]/10 rounded-lg flex items-center justify-center group-hover:bg-[#be127e] transition-colors duration-300">
                    <IconComponent className="text-2xl text-[#be127e] group-hover:text-white transition-colors duration-300" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <h3 className="text-[20px] font-bold text-[#003b46] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-[15px] leading-relaxed">
                    {service.description}
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

export default KeyServices;
