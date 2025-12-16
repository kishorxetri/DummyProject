import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const ChairmanMessage = () => {
  return (
    <>
      <Header />

      {/* Hero Banner Section */}
      <div className="relative w-full h-[300px] bg-gradient-to-br from-[#be127e] via-[#c8138a] to-[#d4148a] flex items-center justify-center font-['Poppins']">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-[32px] md:text-[40px] font-bold mb-4 drop-shadow-2xl tracking-tight">
            Message From The Chairman
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[16px] font-medium">
            <a href="/" className="hover:underline hover:text-white/90 transition-all duration-300">
              Home
            </a>
            <span className="text-white/70">›</span>
            <span className="text-white/95 font-semibold">Message From The Chairman</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20 font-['Poppins']">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          {/* Content Grid - Image Left, Text Right */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">

            {/* Left Side - Chairman Image */}
            <div className="lg:col-span-5">
              <div className="sticky top-[120px]">
                <div className="rounded-2xl overflow-hidden shadow-2xl hover:shadow-[0_25px_70px_rgba(190,18,126,0.2)] transition-all duration-500 ring-1 ring-gray-200">
                  <img
                    src="/images/Message-from-the-chairman.jpg"
                    alt="Chairman - Bhagawati Diagnostic Center"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="lg:col-span-7">

              {/* Main Heading */}
              <h2 className="text-[30px] md:text-[34px] font-bold text-[#003b46] leading-tight mb-8 tracking-tight">
                Bhagawati Diagnostic Center – Trusted, Accurate &amp; Affordable Diagnostic Services in Nepal
              </h2>

              {/* Introduction */}
              <div className="space-y-5 text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-10">
                <p>
                  Welcome to <span className="font-semibold text-[#003b46]">Bhagawati Diagnostic Center</span>, one of Nepal's most reliable and affordable diagnostic and pathology service providers. We are dedicated to offering <span className="font-semibold text-gray-700">accurate laboratory tests, advanced diagnostic facilities, and world-class patient care</span> under one roof.
                </p>

                <p>
                  At Bhagawati Diagnostic Center, we understand the importance of <span className="font-semibold text-gray-700">precise and timely medical diagnosis</span> for effective treatment and long-term patient care. That is why we use <span className="font-semibold text-gray-700">modern laboratory equipment, highly sensitive technologies, and internationally accepted testing standards</span> to ensure accurate results in every report.
                </p>
              </div>

              {/* Our Expert Diagnostic Team Section */}
              <div className="mb-10">
                <h3 className="text-[24px] md:text-[26px] font-bold text-[#003b46] mb-5 tracking-tight">
                  Our Expert Diagnostic Team
                </h3>

                <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed mb-5">
                  Our strength lies in our highly qualified team of:
                </p>

                <ul className="space-y-3 mb-5">
                  <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold mt-1 text-lg">•</span>
                    <span><span className="font-semibold text-gray-700">Pathologists</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold mt-1 text-lg">•</span>
                    <span><span className="font-semibold text-gray-700">Biochemists</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold mt-1 text-lg">•</span>
                    <span><span className="font-semibold text-gray-700">Microbiologists</span></span>
                  </li>
                  <li className="flex items-start gap-3 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold mt-1 text-lg">•</span>
                    <span><span className="font-semibold text-gray-700">Experienced laboratory technologists</span></span>
                  </li>
                </ul>

                <p className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed">
                  Each member of our diagnostic team is committed to delivering <span className="font-semibold text-gray-700">reliable, fast, and accurate test results</span> with complete confidentiality.
                </p>
              </div>

              {/* Why Choose Us Section */}
              <div className="bg-gradient-to-br from-gray-50 via-white to-gray-50 rounded-2xl p-7 md:p-9 shadow-xl hover:shadow-2xl border border-gray-200 mb-10 transition-all duration-500 hover:scale-[1.01]">
                <h3 className="text-[24px] md:text-[26px] font-bold text-[#003b46] mb-6 tracking-tight">
                  Why Choose Bhagawati Diagnostic Center?
                </h3>

                <ul className="space-y-4">
                  <li className="flex items-start gap-4 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold text-xl mt-0.5 min-w-[20px]">✓</span>
                    <span><span className="font-semibold text-gray-700">Affordable Pricing</span> – Quality diagnostics at budget-friendly rates</span>
                  </li>
                  <li className="flex items-start gap-4 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold text-xl mt-0.5 min-w-[20px]">✓</span>
                    <span><span className="font-semibold text-gray-700">Advanced Technology</span> – Latest diagnostic equipment for precise results</span>
                  </li>
                  <li className="flex items-start gap-4 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold text-xl mt-0.5 min-w-[20px]">✓</span>
                    <span><span className="font-semibold text-gray-700">Quick Turnaround Time</span> – Fast and efficient report delivery</span>
                  </li>
                  <li className="flex items-start gap-4 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold text-xl mt-0.5 min-w-[20px]">✓</span>
                    <span><span className="font-semibold text-gray-700">Experienced Professionals</span> – Highly trained medical experts</span>
                  </li>
                  <li className="flex items-start gap-4 text-[15px] md:text-[16px] text-gray-600 hover:text-gray-800 transition-colors duration-200">
                    <span className="text-[#be127e] font-bold text-xl mt-0.5 min-w-[20px]">✓</span>
                    <span><span className="font-semibold text-gray-700">Patient-Centric Approach</span> – Comfort and care at every step</span>
                  </li>
                </ul>
              </div>

              {/* Closing Message */}
              <div className="text-[15px] md:text-[16px] text-gray-600 leading-relaxed space-y-5 bg-gradient-to-r from-blue-50 to-purple-50 p-6 md:p-7 rounded-xl border-l-4 border-[#be127e]">
                <p>
                  Whether you need routine blood tests, advanced pathology services, or comprehensive health checkups, <span className="font-semibold text-[#003b46]">Bhagawati Diagnostic Center</span> is here to serve you with excellence.
                </p>

                <p className="font-bold text-[#003b46] text-[17px] md:text-[18px] tracking-tight">
                  Your health is our priority. Trust us for accurate diagnostics and compassionate care.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
};

export default ChairmanMessage;
