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
    <div className="pt-[50px] pb-[50px] bg-white font-['Poppins']">
      <div className="container mx-auto px-4 md:px-[150px]">

        <h2 className="text-[32px] font-bold text-[#003b46] mb-12">
          Our Specialists
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialists.map((specialist) => (
            <div
              key={specialist.id}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 relative"
            >
              {/* Hover Line Animation */}
              <div className="absolute bottom-0 left-0 h-[2px] bg-[#3498db] w-0 hover:w-full transition-all duration-500 ease-in-out z-10"></div>

              {/* Image */}
              <div className="w-full h-[225px] overflow-hidden bg-gray-100">
                <img
                  src={specialist.image}
                  alt={specialist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-5 text-center">
                <h3 className="text-[18px] font-bold text-[#be127e] mb-2">
                  {specialist.name}
                </h3>

                <p className="text-[16px] text-gray-600 mb-2">
                  {specialist.specialty}
                </p>

                <p className="text-[14px] text-gray-500 mb-4">
                  Follow Us On Social Media
                </p>

                {/* Buttons */}
                <div className="flex gap-2 justify-center">
                  
                  {/* Button group added here */}
                  <button className="relative bg-black text-white px-4 py-2 rounded text-[13px] font-semibold shadow-md overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full flex">
                      <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                      <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
                    </span>
                    <span className="relative z-10">View Profile</span>
                  </button>

                  <button className="relative bg-black text-white px-4 py-2 rounded text-[13px] font-semibold shadow-md overflow-hidden group">
                    <span className="absolute inset-0 w-full h-full flex">
                      <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:-translate-x-full"></span>
                      <span className="w-1/2 h-full bg-[#be127e] transition-transform duration-500 ease-in-out group-hover:translate-x-full"></span>
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
