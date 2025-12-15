import React, { useState } from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <section className="bg-gradient-to-br from-[#f8f8f8] to-[#f0f0f0] py-16 font-['Poppins']">
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10 bg-white/60 backdrop-blur-sm rounded-2xl p-8 md:p-10 shadow-lg">
          {/* Left Side - Text */}
          <div className="text-left max-w-md">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-[#003b46] mb-4 leading-tight">
              Sign up for newsletter
            </h2>
            <p className="text-[15px] text-[#555] leading-relaxed">
              Stay updated with our latest news, offers, and helpful articles. Subscribe to our newsletter today.
            </p>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-auto">
            <form onSubmit={handleSubmit} className="flex gap-3">
              <input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 md:w-[350px] px-6 py-3.5 border-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:border-[#be127e] focus:ring-2 focus:ring-[#be127e]/20 focus:shadow-md transition-all duration-300 text-[15px] placeholder:text-gray-400"
                required
              />
              <button
                type="submit"
                className="relative bg-gradient-to-r from-black to-gray-900 text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] shadow-xl hover:shadow-2xl overflow-hidden group transform hover:scale-[1.02] transition-all duration-300"
              >
                <span className="absolute inset-0 w-full h-full flex">
                  <span className="w-1/2 h-full bg-gradient-to-r from-[#be127e] to-[#d4148a] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                  <span className="w-1/2 h-full bg-gradient-to-l from-[#be127e] to-[#d4148a] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                </span>
                <span className="relative z-10">Subscribe</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
