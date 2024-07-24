import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="relative flex items-center justify-center h-screen bg-gray-900">
      <img
        src="/images/abt.svg"
        alt="Solar Panels"
        className="w-full h-full object-cover opacity-70"
      />
      <div className="absolute text-center text-yellow-400" data-aos="fade-up">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">About Us</h1>
        <p className="text-2xl md:text-3xl text-white">
          Empowering Your Future with Solar Energy
        </p>
      </div>
    </div>
  );
};

export default Header;