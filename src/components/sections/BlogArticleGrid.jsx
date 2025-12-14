import React from "react";
import "@fontsource/poppins";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";

const BlogArticleGrid = () => {
  const articles = [
    {
      id: 1,
      date: "31 August, 2025",
      title: "Diagnostic Center for Accurate Results: How to Choose the Right Lab",
      excerpt:
        "Choosing The Right Diagnostic Center For Accurate Results Is Essential For Maintaining Your Health And Well-Being. Medical Testing Plays A Vital Role In Detecting Health...",
      image:
        "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
    },
    {
      id: 2,
      date: "31 August, 2025",
      title: "Early Detection Saves Lives: Learn Why Diagnostics",
      excerpt:
        "Early Detection Saves Lives Through Accurate Diagnostics And Preventive Health Screenings, Enabling Timely Treatment, Faster Recovery, And Peace Of Mind...",
      image:
        "https://bhagawatidiagnostic.com/wp-content/uploads/2025/08/OIP.webp",
    },
    {
      id: 3,
      date: "30 June, 2025",
      title: "Why Report Accuracy Matters in Diagnostics",
      excerpt:
        "Accurate Diagnostics Save Lives. They Help Doctors Find The Right Treatment, Make Recovery Faster, And Improve Health. A Test Result Is Not Just A Number—It...",
      image:
        "https://bhagawatidiagnostic.com/wp-content/uploads/2025/06/lab-accuracy-768x576.jpg",
    },
  ];

  return (
    <section className="bg-white py-16 font-['Poppins']">
      <div className="container mx-auto px-4 md:px-[150px]">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-lg hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,59,70,0.3)] transition-all duration-300 group relative"
            >
              {/* Image */}
              <div className="w-full h-[260px] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <span className="inline-block bg-[#be127e] text-white text-[14px] font-semibold px-4 py-2 rounded-md mb-4 uppercase tracking-wide">
                  {a.date}
                </span>

                <h3 className="text-[20px] font-bold text-[#003b46] group-hover:text-[#003b46]/80 leading-snug mb-4 font-['Poppins'] transition-colors duration-300">
                  {a.title}
                </h3>

                <p className="text-[16px] text-[#444] leading-relaxed font-medium font-['Poppins']">
                  {a.excerpt}
                </p>

              </div>

              {/* Bottom Blue Line on Hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-gradient-to-r from-[#3498db] to-[#2980b9] group-hover:w-full transition-all duration-700 ease-out"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArticleGrid;
