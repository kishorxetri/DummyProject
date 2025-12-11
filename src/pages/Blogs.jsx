import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Updates from "../components/Updates";
import BlogArticleGrid from "../components/BlogArticleGrid";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const Blogs = () => {
  return (
    <>
      <Header />

      {/* Hero Banner Section */}
      <div className="relative w-full h-[300px] bg-gradient-to-r from-[#be127e] to-[#d4148a] flex items-center justify-center font-['Poppins']">
        {/* Background Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-[32px] md:text-[38px] font-bold mb-4 drop-shadow-lg">
            Our Latest Blogs
          </h1>

          {/* Breadcrumb */}
          <div className="flex items-center justify-center gap-2 text-[16px] font-medium">
            <a href="/" className="hover:underline transition-all duration-300">
              Home
            </a>
            <span className="text-white/70">›</span>
            <span className="text-white/90">Blogs</span>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="bg-white min-h-[60vh]">
        <Updates />
        <BlogArticleGrid />
      </div>

      <Footer />
    </>
  );
};

export default Blogs;
