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
    <section className="bg-[#f5f5f5] py-12 font-['Poppins']">
      <div className="container mx-auto px-4 md:px-[150px]">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Side - Text */}
          <div className="text-left max-w-md">
            <h2 className="text-[28px] md:text-[32px] font-semibold text-[#003b46] mb-3">
              Sign up for newsletter
            </h2>
            <p className="text-[15px] text-[#666] leading-relaxed">
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
                className="flex-1 md:w-[350px] px-6 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#be127e] transition-colors text-[15px]"
                required
              />
              <button
                type="submit"
                className="bg-[#be127e] hover:bg-[#9d0f68] text-white px-8 py-3 rounded-md font-semibold text-[15px] transition-colors duration-300"
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
