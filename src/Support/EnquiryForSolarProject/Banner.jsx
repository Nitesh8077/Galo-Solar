import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="relative h-screen">
      <img
        src="/images/support.svg"
        alt="Support for Business"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <h1 className="text-yellow-400 text-5xl font-bold" data-aos="fade-down">
          Enquiry For Solar Project
        </h1>
      </div>
    </div>
  );
};

export default Banner;
