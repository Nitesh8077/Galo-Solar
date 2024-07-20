import React from "react";
import "tailwindcss/tailwind.css";
import "./animations.css";

const Header = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(/images/about.svg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-6xl font-bold mb-4 animate-fade-in text-yellow-400">
          About Us
        </h1>
        <p className="text-2xl animate-slide-in">
          Empowering Your Future with Solar Energy
        </p>
      </div>
    </div>
  );
};

export default Header;
