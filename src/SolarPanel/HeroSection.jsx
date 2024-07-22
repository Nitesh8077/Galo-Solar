import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HeroSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900">
      <img
        src="/images/solarpanel.svg"
        alt="Solar Panels"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute text-center text-yellow-400" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Galo Energy</h1>
        <p className="text-2xl md:text-3xl">
          Pioneering Reliable and Efficient Solar Solutions
        </p>
        <p className="text-lg md:text-xl mt-4">
          Innovative, Sustainable, and Reliable Solar Energy for a Better
          Tomorrow
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
