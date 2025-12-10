import React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { FaHeartbeat } from "react-icons/fa";

const AppointmentSection = () => {
  return (
    <section className="bg-white py-16 font-['Poppins']">
      <div className="container mx-auto px-4 md:px-[150px]">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side - Form */}
          <div className="text-center">
            {/* Heading */}
            <h2 className="text-[32px] font-bold text-[#003b46] leading-tight mb-6">
              We Are Always Ready To<br />
              Help You. Book An<br />
              Appointment
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-[#3498db]"></div>
              <FaHeartbeat className="text-[#3498db] text-xl" />
              <div className="h-[2px] w-12 bg-[#3498db]"></div>
            </div>

            {/* Description */}
            <p className="text-[15px] text-[#444] leading-relaxed mb-8 font-medium">
              Our experienced medical team is here to provide you with personalized care. Schedule your consultation today and receive the best treatment tailored to your needs.
            </p>

            {/* Form */}
            <form className="space-y-4">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#be127e] transition-colors text-[15px]"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#be127e] transition-colors text-[15px]"
                />
              </div>

              {/* Row 2: Phone and Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#be127e] transition-colors text-[15px]"
                />
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#be127e] transition-colors text-[15px] text-gray-600">
                  <option>Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Radiology</option>
                  <option>Laboratory</option>
                </select>
              </div>

              {/* Row 3: Doctor and Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#be127e] transition-colors text-[15px] text-gray-600">
                  <option>Doctor</option>
                  <option>Dr. Rajesh Sharma</option>
                  <option>Dr. Priya Patel</option>
                  <option>Dr. Amit Kumar</option>
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#be127e] transition-colors text-[15px] text-gray-600"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#be127e] transition-colors text-[15px] resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="relative bg-black text-white px-8 py-3 rounded-md font-semibold text-[15px] uppercase tracking-wider shadow-lg overflow-hidden group mt-4"
              >
                <span className="absolute inset-0 w-full h-full flex">
                  <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                  <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                </span>
                <span className="relative z-10">Book Appointment</span>
              </button>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block">
            <img
              src="https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/contact-img.jpg"
              alt="Medical Appointment"
              className="w-full h-auto rounded-lg shadow-xl"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
