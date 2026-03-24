import React from 'react';

const StatsSection = () => {
  const stats = [
    {
      label: "Total Downloads",
      value: "29.6M",
      subtext: "21% More Than Last Month",
    },
    {
      label: "Total Reviews",
      value: "906K",
      subtext: "46% More Than Last Month",
    },
    {
      label: "Active Apps",
      value: "132+",
      subtext: "31 More Will Launch",
    },
  ];

  return (
   <section className=" bg-linear-to-br from-[#8b5cf6] via-[#7c3aed] to-[#6d28d9] py-10 px-6 text-white text-center font-sans">
      <div className="max-w-6xl mx-auto">
        {/* Main Heading */}
        <h2 className="text-2xl md:text-5xl font-bold mb-16 tracking-tight">
          Trusted By Millions, Built For You
        </h2>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <span className="text-sm md:text-base opacity-80 uppercase tracking-wide mb-4">
                {stat.label}
              </span>
              <span className="text-3xl md:text-5xl font-extrabold mb-4">
                {stat.value}
              </span>
              <span className="text-xs md:text-sm opacity-70 font-medium">
                {stat.subtext}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;