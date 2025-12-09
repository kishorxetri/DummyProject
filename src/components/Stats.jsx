import React from "react";
import { FaHome, FaUserMd, FaSmile, FaCalendarAlt } from "react-icons/fa";

const Stats = () => {
  const statsData = [
    {
      id: 1,
      icon: <FaHome />,
      count: "5",
      label: "Diagnostic Rooms",
    },
    {
      id: 2,
      icon: <FaUserMd />,
      count: "12",
      label: "Qualified Staff",
    },
    {
      id: 3,
      icon: <FaSmile />,
      count: "3000+",
      label: "Satisfied Patients",
    },
    {
      id: 4,
      icon: <FaCalendarAlt />,
      count: "7",
      label: "Years of Service",
    },
  ];

  return (
    <div className="bg-[#be127e] py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-[150px]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex items-center gap-4 text-white group cursor-default">
              {/* Icon Circle */}
              <div className="w-16 h-16 rounded-full border-2 border-white/30 flex items-center justify-center text-2xl transition-all duration-300 group-hover:scale-110 bg-white/10 hover:bg-white hover:text-[#28a745] hover:border-white">
                {stat.icon}
              </div>

              {/* Text Info */}
              <div className="flex flex-col">
                <span className="text-3xl font-bold font-['Poppins'] leading-none mb-1">
                  {stat.count}
                </span>
                <span className="text-[15px] font-medium opacity-90 font-['Poppins']">
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
