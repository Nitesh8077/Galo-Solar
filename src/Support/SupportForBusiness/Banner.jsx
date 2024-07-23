import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      <img
        src="/images/support.svg"
        alt="Support for Business"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 md:p-8">
        <h1
          className="text-yellow-400 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-center"
          data-aos="fade-down"
        >
          Support for Business
        </h1>
      </div>
    </div>
  );
};

export default Banner;
