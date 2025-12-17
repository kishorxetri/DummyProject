import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const Ourspecalist = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const specialist = location.state?.specialist;

  // Redirect to home if no specialist data
  if (!specialist) {
    navigate("/");
    return null;
  }

  return (
    <>
      <Header />

      {/* Hero Banner Section */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-[#be127e] to-[#d4148a] flex items-center justify-center font-['Poppins']">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-[32px] md:text-[38px] font-bold mb-4 drop-shadow-lg">
            Our Specialist
          </h1>

          <div className="flex items-center justify-center gap-2 text-[16px] font-medium">
            <a href="/" className="hover:underline transition-all duration-300">
              Home
            </a>
            <span className="text-white/70">›</span>
            <span className="text-white/90">Specialist Profile</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white min-h-[60vh] py-16 font-['Poppins']">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Left Side - Specialist Image */}
            <div className="lg:col-span-4">
              <div className="sticky top-8">
                <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-lg">
                  <div className="w-full h-[400px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                    <img
                      src={specialist.image}
                      alt={specialist.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6 text-center bg-gradient-to-br from-[#be127e] to-[#d4148a]">
                    <h3 className="text-[22px] font-bold text-white mb-2">
                      {specialist.name}
                    </h3>
                    <p className="text-[16px] text-white/90 font-medium">
                      {specialist.specialty}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side - Specialist Details */}
            <div className="lg:col-span-8">
              <div className="space-y-8">

                {/* About Section */}
                <div>
                  <h2 className="text-[28px] font-bold text-[#003b46] mb-4 pb-3 border-b-2 border-[#be127e]">
                    About {specialist.name}
                  </h2>
                  <p className="text-[16px] text-gray-700 leading-relaxed">
                    {specialist.name} is a highly experienced {specialist.specialty.toLowerCase()} dedicated to providing exceptional healthcare services. With years of expertise in the medical field, our specialist is committed to delivering personalized care and treatment to every patient.
                  </p>
                </div>

                {/* Qualifications Section */}
                <div>
                  <h3 className="text-[24px] font-bold text-[#003b46] mb-4">
                    Qualifications
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <span className="text-[#be127e] text-[20px] mt-1">✓</span>
                      <span className="text-[16px] text-gray-700">MBBS - Bachelor of Medicine, Bachelor of Surgery</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#be127e] text-[20px] mt-1">✓</span>
                      <span className="text-[16px] text-gray-700">MD - Doctor of Medicine</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#be127e] text-[20px] mt-1">✓</span>
                      <span className="text-[16px] text-gray-700">Specialized training in advanced medical procedures</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#be127e] text-[20px] mt-1">✓</span>
                      <span className="text-[16px] text-gray-700">Member of National Medical Association</span>
                    </li>
                  </ul>
                </div>

                {/* Expertise Section */}
                <div>
                  <h3 className="text-[24px] font-bold text-[#003b46] mb-4">
                    Areas of Expertise
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <p className="text-[16px] text-gray-700 font-medium">Diagnosis & Treatment</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <p className="text-[16px] text-gray-700 font-medium">Patient Care Management</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <p className="text-[16px] text-gray-700 font-medium">Preventive Medicine</p>
                    </div>
                    <div className="bg-gradient-to-br from-gray-50 to-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-300">
                      <p className="text-[16px] text-gray-700 font-medium">Medical Consultation</p>
                    </div>
                  </div>
                </div>

                {/* Contact/Appointment Section */}
                <div className="bg-gradient-to-br from-[#be127e] to-[#d4148a] rounded-xl p-8 text-white shadow-lg">
                  <h3 className="text-[24px] font-bold mb-4">
                    Book an Appointment
                  </h3>
                  <p className="text-[16px] mb-6 text-white/90">
                    Schedule a consultation with {specialist.name} today and receive expert medical care tailored to your needs.
                  </p>
                  <button className="relative bg-gradient-to-r from-[#be127e] to-[#d0148a] text-white px-8 py-3 rounded-md text-[16px] font-semibold shadow-md overflow-hidden group/btn hover:shadow-xl transition-shadow duration-300">
                    <span className="absolute inset-0 w-full h-full flex">
                      <span className="w-1/2 h-full bg-black transition-transform duration-500 ease-in-out -translate-x-full group-hover/btn:translate-x-0"></span>
                      <span className="w-1/2 h-full bg-black transition-transform duration-500 ease-in-out translate-x-full group-hover/btn:translate-x-0"></span>
                    </span>
                    <span className="relative z-10">Book Appointment</span>
                  </button>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Ourspecalist;
