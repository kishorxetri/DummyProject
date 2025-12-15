import React from "react";
import "@fontsource/poppins";

const MapLocation = () => {
  return (
    <section className="bg-white py-12 md:py-16 font-['Poppins']">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <div className="relative inline-block">
            <h2 className="text-[32px] font-bold text-[#003b46] mb-2">
              Find Us Here
            </h2>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#3498db] rounded-full"></div>
          </div>
          <p className="text-[16px] text-[#555] mt-4 max-w-2xl mx-auto">
            Visit us at our convenient location in Tikathali, Lalitpur. We're here to serve you with quality diagnostic services.
          </p>
        </div>

        {/* Map Container */}
        <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] rounded-xl overflow-hidden shadow-2xl hover:shadow-3xl transition-shadow duration-300 border-4 border-[#be127e]/10">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3533.6196988757506!2d85.35066977532223!3d27.66723557620557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb19f8ea6b3803%3A0x4b33868dc565fd36!2sBhagawati%20Diagnostic%20Center%20Pvt.%20Ltd!5e0!3m2!1sen!2snp!4v1765425013891!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Bhagawati Diagnostic Center Location"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default MapLocation;
