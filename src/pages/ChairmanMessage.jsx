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

              {/* Decorative Quote Mark */}
              <div className="relative mb-8">
                <div className="absolute -left-8 md:-left-12 -top-4 text-[80px] md:text-[100px] text-[#be127e] opacity-20 font-serif leading-none">"</div>
                <h2 className="relative text-[30px] md:text-[36px] font-bold text-[#003b46] leading-tight tracking-tight pl-2">
                  Bhagawati Diagnostic Center – Trusted, Accurate &amp; Affordable Diagnostic Services in Nepal
                </h2>
              </div>

              {/* Introduction with Enhanced Styling */}
              <div className="space-y-6 text-[15px] md:text-[17px] text-gray-700 leading-[1.8] mb-12">
                <p className="relative pl-6 border-l-4 border-[#be127e] bg-gradient-to-r from-purple-50/50 to-transparent py-3 pr-4 rounded-r-lg">
                  Welcome to <span className="font-bold text-[#be127e]">Bhagawati Diagnostic Center</span>, one of Nepal's most reliable and affordable diagnostic and pathology service providers located in Lalitpur. We are dedicated to offering <span className="font-semibold text-[#003b46]">accurate laboratory tests, advanced diagnostic facilities, and world-class patient care</span> under one roof.
                </p>

                <p className="leading-[1.8]">
                  At Bhagawati Diagnostic Center, we understand the importance of <span className="font-semibold text-[#003b46]">precise and timely medical diagnosis</span> for effective treatment and long-term patient care. That is why we use <span className="font-semibold text-[#003b46]">modern laboratory equipment, highly sensitive technologies, and internationally accepted testing standards</span> to ensure accurate results in every report.
                </p>
              </div>

              {/* Our Expert Diagnostic Team Section - Enhanced Card */}
              <div className="mb-12 bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#be127e] to-[#d4148a] rounded-full"></div>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-[#003b46] tracking-tight">
                    Our Expert Diagnostic Team
                  </h3>
                </div>

                <p className="text-[15px] md:text-[17px] text-gray-600 leading-relaxed mb-6">
                  Our strength lies in our highly qualified team of:
                </p>

                {/* Enhanced Team List with Icons */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#be127e] to-[#d4148a] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      P
                    </div>
                    <span className="font-semibold text-[#003b46] text-[16px]">Pathologists</span>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#be127e] to-[#d4148a] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      B
                    </div>
                    <span className="font-semibold text-[#003b46] text-[16px]">Biochemists</span>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-pink-50 to-purple-50 rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#be127e] to-[#d4148a] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      M
                    </div>
                    <span className="font-semibold text-[#003b46] text-[16px]">Microbiologists</span>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-gradient-to-br from-purple-50 to-blue-50 rounded-xl hover:shadow-md transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#be127e] to-[#d4148a] rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      L
                    </div>
                    <span className="font-semibold text-[#003b46] text-[16px]">Lab Technologists</span>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-[#be127e]/5 to-transparent p-4 rounded-lg border-l-4 border-[#be127e]">
                  <p className="text-[15px] md:text-[16px] text-gray-700 leading-relaxed italic">
                    Each member of our diagnostic team is committed to delivering <span className="font-bold text-[#be127e] not-italic">reliable, fast, and accurate test results</span> with complete confidentiality.
                  </p>
                </div>
              </div>

              {/* Why Choose Us Section - Consistent Design */}
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-1 h-8 bg-gradient-to-b from-[#be127e] to-[#d4148a] rounded-full"></div>
                  <h3 className="text-[24px] md:text-[28px] font-bold text-[#003b46] tracking-tight">
                    Why Choose Bhagawati Diagnostic Center?
                  </h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {[
                    { title: "Affordable Pricing", desc: "Quality diagnostics at budget-friendly rates", icon: "💰", gradient: "from-purple-50 to-pink-50" },
                    { title: "Advanced Technology", desc: "Latest diagnostic equipment for precise results", icon: "🔬", gradient: "from-blue-50 to-purple-50" },
                    { title: "Quick Turnaround Time", desc: "Fast and efficient report delivery", icon: "⚡", gradient: "from-pink-50 to-purple-50" },
                    { title: "Experienced Professionals", desc: "Highly trained medical experts", icon: "👨‍⚕️", gradient: "from-purple-50 to-blue-50" },
                    { title: "Patient-Centric Approach", desc: "Comfort and care at every step", icon: "❤️", gradient: "from-purple-50 to-pink-50" }
                  ].map((item, index) => (
                    <div key={index} className={`flex items-start gap-5 p-6 bg-gradient-to-br ${item.gradient} rounded-xl shadow-md hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-[#be127e]/30`}>
                      <div className="text-4xl group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-[#003b46] text-[17px] mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-[15px] leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Closing Message - Highlighted Quote Box */}
              <div className="relative bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 rounded-2xl p-8 md:p-10 shadow-xl border-2 border-[#be127e]/20 overflow-hidden">
                {/* Decorative Corner Element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#be127e]/10 to-transparent rounded-bl-full"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#be127e]/10 to-transparent rounded-tr-full"></div>

                <div className="relative z-10 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="text-5xl text-[#be127e] opacity-40 font-serif leading-none">"</div>
                    <p className="text-[16px] md:text-[18px] text-gray-700 leading-[1.8] pt-2">
                      Whether you need routine blood tests, advanced pathology services, or comprehensive health checkups, <span className="font-bold text-[#be127e]">Bhagawati Diagnostic Center</span> is here to serve you with excellence.
                    </p>
                  </div>

                  <div className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg border-l-4 border-[#be127e]">
                    <p className="font-bold text-[#003b46] text-[18px] md:text-[20px] tracking-tight text-center">
                      Your health is our priority. Trust us for accurate diagnostics and compassionate care.
                    </p>
                  </div>
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

export default ChairmanMessage;
