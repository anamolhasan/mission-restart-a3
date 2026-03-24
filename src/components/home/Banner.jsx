import React from 'react'
import hero from '../../assets/image/hero.png'

const Banner = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-[#f4f6f8] overflow-hidden">
      
      {/* Background texture */}
      {/* <div className="absolute inset-0">
        <img
          src="/bg.png" // 👉 your background image
          alt="bg"
          className="w-full h-full object-cover opacity-50"
        />
      </div> */}

      {/* Content */}
      <div className="relative z-10 text-center px-4">
        
        <div className="text-center mb-8">
      
      {/* Top text */}
      <h1 className="text-4xl md:text-6xl font-bold text-[#1f2d3d]">
        We Build
      </h1>

      {/* Gradient text */}
      <h1 className="text-4xl md:text-6xl font-bold">
        <span className="bg-gradient-to-r from-purple-500 to-indigo-500 bg-clip-text text-transparent">
          Productive
        </span>{" "}
        <span className="text-[#1f2d3d]">Apps</span>
      </h1>

      {/* Description */}
      <p className="text-gray-500 max-w-3xl mx-auto mt-4 text-sm md:text-base leading-relaxed">
        At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting.
        <br />
        Our goal is to turn your ideas into digital experiences that truly make an impact.
      </p>
    </div>

        {/* Store Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          
          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-md shadow-sm hover:shadow transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888857.png"
              className="w-8"
              alt=""
            />
            <span className="text-sm font-medium">Google Play</span>
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border rounded-md shadow-sm hover:shadow transition">
            <img
              src="https://cdn-icons-png.flaticon.com/512/888/888841.png"
              className="w-5"
              alt=""
            />
            <span className="text-sm font-medium">App Store</span>
          </button>

        </div>

        {/* 🔥 Single Image (Phone + Icons together) */}
        <div className="flex justify-center">
          <img
            src={hero} // 👉 your combined image
            alt="app preview"
            className="w-[280px] md:w-[340px] drop-shadow-2xl"
          />
        </div>

      </div>
    </div>
  );
}

export default Banner