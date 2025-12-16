import React, { useState } from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import ContactInfoCards from "../components/shared/ContactInfoCards";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    subscribe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
    alert("Message sent successfully!");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      subscribe: false,
    });
  };

  return (
    <>
      <Header />

      {/* Hero Banner Section */}
      <div className="relative w-full h-[300px] bg-gradient-to-br from-[#be127e] via-[#c8138a] to-[#d4148a] flex items-center justify-center font-['Poppins']">
        {/* Background Image Overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url('https://bhagawatidiagnostic.com/wp-content/uploads/2025/11/Message-from-the-chairman.jpg')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        ></div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-[32px] md:text-[40px] font-bold mb-4 drop-shadow-2xl tracking-tight">
            Contact Us
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[16px] font-medium">
            <a href="/" className="hover:underline hover:text-white/90 transition-all duration-300">
              Home
            </a>
            <span className="text-white/70">›</span>
            <span className="text-white/95 font-semibold">Contact Us</span>
          </div>
        </div>
      </div>

      {/* Contact Info Cards */}


      {/* Main Contact Section */}
      <div className="bg-gradient-to-b from-white to-gray-50 py-20 font-['Poppins']">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

            {/* Left Side - Map */}
            <div className="w-full">
              <div className="w-full h-[500px] lg:h-[600px] rounded-xl overflow-hidden shadow-2xl hover:shadow-[0_20px_60px_rgba(190,18,126,0.15)] transition-all duration-500 ring-1 ring-gray-200">
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

            {/* Right Side - Contact Form */}
            <div className="w-full">

              {/* Heading */}
              <div className="group mb-8">
                <h2 className="text-[30px] md:text-[34px] font-bold text-[#003b46] mb-3 inline-block tracking-tight">
                  Contact With Us
                </h2>
                {/* Blue underline with hover effect */}
                <div className="w-20 h-1 bg-gradient-to-r from-[#3498db] to-[#2980b9] rounded-full transition-all duration-500 group-hover:w-full shadow-sm"></div>
              </div>

              {/* Subtitle */}
              <p className="text-[15px] md:text-[16px] text-gray-600 mb-10 leading-relaxed">
                If you have any questions please{" "}
                <span className="text-[#3498db] font-semibold">feel free</span> to contact with us.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-6">

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 text-[15px] md:text-[16px] font-['Poppins'] transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:scale-[1.01]"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 text-[15px] md:text-[16px] font-['Poppins'] transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:scale-[1.01]"
                    required
                  />
                </div>

                {/* Phone and Subject Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 text-[15px] md:text-[16px] font-['Poppins'] transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:scale-[1.01]"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 text-[15px] md:text-[16px] font-['Poppins'] transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:scale-[1.01]"
                    required
                  />
                </div>

                {/* Message Textarea */}
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="6"
                  className="w-full px-5 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#3498db] focus:ring-2 focus:ring-[#3498db]/20 text-[15px] md:text-[16px] font-['Poppins'] resize-none transition-all duration-300 hover:border-gray-400 hover:shadow-md focus:scale-[1.01]"
                  required
                ></textarea>

                {/* Newsletter Checkbox */}
                <div className="flex items-center gap-3 group cursor-pointer">
                  <input
                    type="checkbox"
                    name="subscribe"
                    id="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="w-5 h-5 text-[#be127e] border-gray-300 rounded focus:ring-2 focus:ring-[#be127e]/30 cursor-pointer transition-all duration-200"
                  />
                  <label
                    htmlFor="subscribe"
                    className="text-[14px] md:text-[15px] text-gray-600 font-['Poppins'] cursor-pointer group-hover:text-gray-800 transition-colors duration-200"
                  >
                    Do you want to subscribe our Newsletter?
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full bg-black text-white px-8 py-4 rounded-lg font-semibold text-[16px] shadow-xl hover:shadow-2xl overflow-hidden group transition-all duration-300 hover:scale-[1.02]"
                >
                  <span className="absolute inset-0 w-full h-full flex">
                    <span className="w-1/2 h-full bg-gradient-to-r from-[#be127e] to-[#d4148a] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                    <span className="w-1/2 h-full bg-gradient-to-l from-[#be127e] to-[#d4148a] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                  </span>
                  <span className="relative z-10 tracking-wide">Send Message</span>
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
      <ContactInfoCards />
      <Footer />
    </>
  );
};

export default ContactUs;
