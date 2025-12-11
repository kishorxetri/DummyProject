import React from "react";
import "@fontsource/poppins";

const MapLocation = () => {
  return (
    <section className="bg-white py-0 font-['Poppins']">
      <div className="w-full h-[300px] md:h-[350px] lg:h-[400px]">
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
    </section>
  );
};

export default MapLocation;
