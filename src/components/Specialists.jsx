import React from "react";

const Specialists = () => {
  const specialists = [
    {
      id: 1,
      name: "Dr. Ravi Kiran Gautam",
      image: "https://bhagawatidiagnostic.com/wp-content/uploads/2025/06/health-camp-300x225.jpg",
      specialty: "Medical Specialist",
    },
    {
      id: 2,
      name: "Dr. Sudarshan Koirala",
      image: "https://bhagawatidiagnostic.com/wp-content/uploads/2025/07/Dr-sudarsan-266x300.png",
      specialty: "Medical Specialist",
    },
    {
      id: 3,
      name: "Dr. Rajesh Shakya",
      image: "https://bhagawatidiagnostic.com/wp-content/uploads/2025/07/Dr.-Rajesh-Shakya.png",
      specialty: "Medical Specialist",
    },
    {
      id: 4,
      name: "Dr. Ram Hari Chapagain",
      image: "https://bhagawatidiagnostic.com/wp-content/uploads/2025/07/Dr.-Ram-Hari-Chapagain-271x300.webp",
      specialty: "Medical Specialist",
    },
  ];

  return (
    <div className="pt-[50px] pb-[50px] bg-gradient-to-b from-gray-50 to-white font-['Poppins']">
      <div className="container mx-auto px-4 md:px-[150px]">

        <h2 className="text-[32px] font-bold text-[#003b46] mb-16 tracking-tight">
          Our Specialists
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="bg-white border border-gray-100 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 relative group hover:-translate-y-2"
            >
              {/* Hover Line Animation */}
              <div className="absolute bottom-0 left-0 h-[3px] bg-gradient-to-r from-[#3498db] to-[#2980b9] w-0 group-hover:w-full transition-all duration-700 ease-out z-10"></div>

              {/* Image */}
              <div className="w-full h-[225px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-[18px] font-bold text-[#be127e] mb-3 group-hover:text-[#a0106a] transition-colors duration-300">
                  {specialist.name}
                </h3>

                <p className="text-[16px] text-gray-700 mb-2 font-medium">
                  {specialist.specialty}
                </p>

                <p className="text-[14px] text-gray-500 mb-5">
                  Follow Us On Social Media
                </p>

                {/* Buttons */}
                <div className="flex gap-3 justify-center">

                  {/* Button group added here */}
                  <button className="relative bg-gradient-to-r from-gray-900 to-black text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold shadow-lg hover:shadow-xl overflow-hidden group/btn transition-shadow duration-300">
                    <span className="absolute inset-0 w-full h-full flex">
                      <span className="w-1/2 h-full bg-gradient-to-r from-[#be127e] to-[#d0148a] transition-transform duration-500 ease-in-out group-hover/btn:-translate-x-full"></span>
                      <span className="w-1/2 h-full bg-gradient-to-r from-[#be127e] to-[#d0148a] transition-transform duration-500 ease-in-out group-hover/btn:translate-x-full"></span>
                    </span>
                    <span className="relative z-10">View Profile</span>
                  </button>

                  <button className="relative bg-gradient-to-r from-gray-900 to-black text-white px-5 py-2.5 rounded-lg text-[13px] font-semibold shadow-lg hover:shadow-xl overflow-hidden group/btn transition-shadow duration-300">
                    <span className="absolute inset-0 w-full h-full flex">
                      <span className="w-1/2 h-full bg-gradient-to-r from-[#be127e] to-[#d0148a] transition-transform duration-500 ease-in-out group-hover/btn:-translate-x-full"></span>
                      <span className="w-1/2 h-full bg-gradient-to-r from-[#be127e] to-[#d0148a] transition-transform duration-500 ease-in-out group-hover/btn:translate-x-full"></span>
                    </span>
                    <span className="relative z-10">Book Now</span>
                  </button>

                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Specialists;
