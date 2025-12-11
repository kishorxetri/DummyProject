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
      <div className="container mx-auto px-4 md:px-[150px]">
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
                className="bg-gradient-to-r from-[#be127e] to-[#a0106a] hover:from-[#9d0f68] hover:to-[#8d0d5c] text-white px-8 py-3.5 rounded-lg font-semibold text-[15px] shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
