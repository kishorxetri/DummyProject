import React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import { FaHeartbeat } from "react-icons/fa";

const AppointmentSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 py-20 font-['Poppins']">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left Side - Form */}
          <div className="text-center">
            {/* Heading */}
            <h2 className="text-[32px] font-bold text-[#003b46] leading-tight mb-6 drop-shadow-sm">
              We Are Always Ready To<br />
              Help You. Book An<br />
              Appointment
            </h2>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="h-[2px] w-12 bg-gradient-to-r from-transparent to-[#3498db]"></div>
              <FaHeartbeat className="text-[#3498db] text-xl animate-pulse" />
              <div className="h-[2px] w-12 bg-gradient-to-l from-transparent to-[#3498db]"></div>
            </div>

            {/* Description */}
            <p className="text-[15px] text-[#555] leading-relaxed mb-10 font-medium max-w-xl mx-auto">
              Our experienced medical team is here to provide you with personalized care. Schedule your consultation today and receive the best treatment tailored to your needs.
            </p>

            {/* Form */}
            <form className="space-y-5">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#be127e] focus:ring-2 focus:ring-[#be127e]/20 transition-all duration-300 text-[15px] bg-white shadow-sm hover:shadow-md"
                />
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#be127e] focus:ring-2 focus:ring-[#be127e]/20 transition-all duration-300 text-[15px] bg-white shadow-sm hover:shadow-md"
                />
              </div>

              {/* Row 2: Phone and Department */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#be127e] focus:ring-2 focus:ring-[#be127e]/20 transition-all duration-300 text-[15px] bg-white shadow-sm hover:shadow-md"
                />
                <select className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#be127e] focus:ring-2 focus:ring-[#be127e]/20 transition-all duration-300 text-[15px] text-gray-600 bg-white shadow-sm hover:shadow-md cursor-pointer">
                  <option>Department</option>
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Radiology</option>
                  <option>Laboratory</option>
                </select>
              </div>

              {/* Row 3: Doctor and Date */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <select className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#be127e] focus:ring-2 focus:ring-[#be127e]/20 transition-all duration-300 text-[15px] text-gray-600 bg-white shadow-sm hover:shadow-md cursor-pointer">
                  <option>Doctor</option>
                  <option>Dr. Rajesh Sharma</option>
                  <option>Dr. Priya Patel</option>
                  <option>Dr. Amit Kumar</option>
                </select>
                <input
                  type="date"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#be127e] focus:ring-2 focus:ring-[#be127e]/20 transition-all duration-300 text-[15px] text-gray-600 bg-white shadow-sm hover:shadow-md cursor-pointer"
                />
              </div>

              {/* Message Field */}
              <div>
                <textarea
                  placeholder="Message"
                  rows="4"
                  className="w-full px-4 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#be127e] focus:ring-2 focus:ring-[#be127e]/20 transition-all duration-300 text-[15px] resize-none bg-white shadow-sm hover:shadow-md"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-start items-center gap-4 mt-6">
                <button
                  type="submit"
                  className="relative bg-gradient-to-r from-black to-gray-900 text-white px-10 py-3.5 rounded-lg font-semibold text-[15px] tracking-wider shadow-xl hover:shadow-2xl overflow-hidden group transform hover:scale-[1.02] transition-all duration-300"
                >
                  <span className="absolute inset-0 w-full h-full flex">
                    <span className="w-1/2 h-full bg-gradient-to-r from-[#be127e] to-[#d4148a] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                    <span className="w-1/2 h-full bg-gradient-to-l from-[#be127e] to-[#d4148a] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                  </span>
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Book Appointment
                  </span>
                </button>
                <p className="text-[14px] text-gray-600 italic">(We will receive your text message)</p>
              </div>
            </form>
          </div>

          {/* Right Side - Image */}
          <div className="hidden lg:block">
            <img
              src="https://bhagawatidiagnostic.com/wp-content/themes/bhagwati/img/contact-img.jpg"
              alt="Medical Appointment"
              className="w-full h-auto rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300 ring-1 ring-gray-200"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default AppointmentSection;
