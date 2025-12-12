import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ContactInfoCards from "../components/ContactInfoCards";
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

      {/* Contact Info Cards */}


      {/* Main Contact Section */}
      <div className="bg-white py-16 font-['Poppins']">
        <div className="container mx-auto px-4 md:px-[150px]">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left Side - Map */}
            <div className="w-full">
              <div className="w-full h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-lg">
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
              <div className="group mb-6">
                <h2 className="text-[32px] md:text-[36px] font-bold text-[#003b46] mb-3 inline-block">
                  Contact With Us
                </h2>
                {/* Blue underline with hover effect */}
                <div className="w-16 h-1 bg-[#3498db] transition-all duration-300 group-hover:w-full"></div>
              </div>

              {/* Subtitle */}
              <p className="text-[15px] md:text-[16px] text-gray-700 mb-8">
                If you have any questions please{" "}
                <span className="text-[#3498db] font-medium">feel free</span> to contact with us.
              </p>

              {/* Contact Form */}
              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#3498db] focus:ring-1 focus:ring-[#3498db] text-[15px] md:text-[16px] font-['Poppins'] transition-all duration-300"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#3498db] focus:ring-1 focus:ring-[#3498db] text-[15px] md:text-[16px] font-['Poppins'] transition-all duration-300"
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#3498db] focus:ring-1 focus:ring-[#3498db] text-[15px] md:text-[16px] font-['Poppins'] transition-all duration-300"
                    required
                  />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#3498db] focus:ring-1 focus:ring-[#3498db] text-[15px] md:text-[16px] font-['Poppins'] transition-all duration-300"
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-[#3498db] focus:ring-1 focus:ring-[#3498db] text-[15px] md:text-[16px] font-['Poppins'] resize-none transition-all duration-300"
                  required
                ></textarea>

                {/* Newsletter Checkbox */}
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="subscribe"
                    id="subscribe"
                    checked={formData.subscribe}
                    onChange={handleChange}
                    className="w-4 h-4 text-[#be127e] border-gray-300 rounded focus:ring-[#be127e] cursor-pointer"
                  />
                  <label
                    htmlFor="subscribe"
                    className="text-[14px] md:text-[15px] text-gray-700 font-['Poppins'] cursor-pointer"
                  >
                    Do you want to subscribe our Newsletter?
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="relative w-full bg-black text-white px-8 py-3.5 rounded-md font-semibold text-[16px] shadow-lg overflow-hidden group"
                >
                  <span className="absolute inset-0 w-full h-full flex">
                    <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                    <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                  </span>
                  <span className="relative z-10">Send</span>
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
