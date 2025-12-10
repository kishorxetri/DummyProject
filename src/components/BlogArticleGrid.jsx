import React from "react";

const BlogArticleGrid = () => {
  const articles = [
    {
      id: 1,
      date: "31 August, 2025",
      title: "Diagnostic Center for Accurate Results: How to Choose the Right Lab",
      excerpt:
        "Choosing The Right Diagnostic Center For Accurate Results Is Essential For Maintaining Your Health And Well-Being. Medical Testing Plays A Vital Role In Detecting Health...",
      image:
        "https://cdn.pixabay.com/photo/2018/05/28/19/46/microscope-3435823_1280.jpg", // FIXED IMAGE
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
    <section className="bg-white py-14 font-poppins">
      <div className="max-w-[1300px] mx-auto px-4 lg:px-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {articles.map((a) => (
            <article
              key={a.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Image */}
              <div className="w-full h-[260px] overflow-hidden">
                <img
                  src={a.image}
                  alt={a.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-7">

                <span className="inline-block bg-[#be127e] text-white text-sm font-medium px-4 py-1.5 rounded-md mb-4">
                  {a.date}
                </span>

                <h3 className="text-[20px] font-semibold text-gray-800 leading-snug mb-4">
                  {a.title}
                </h3>

                <p className="text-[15px] text-gray-600 leading-relaxed">
                  {a.excerpt}
                </p>

              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogArticleGrid;
