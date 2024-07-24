import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import solarImage from "/images/p1.svg"; // Adjust the path if needed

const SolarDescription = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-yellow-400 p-6 md:p-10 flex flex-col md:flex-row items-center">
      <div
        data-aos="fade-right"
        className="w-full md:w-1/2 p-5 flex justify-center"
      >
        <img
          src={solarImage}
          alt="Solar Structure"
          className="rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
      <div data-aos="fade-left" className="w-full md:w-1/2 p-5">
        <h1 className="text-lg md:text-2xl mb-5">
          At Galo Solar, we offer a wide range of high-quality solar structures
          designed to support solar systems of various capacities, from small
          residential setups to large commercial installations. Our structures
          are engineered for durability, efficiency, and ease of installation,
          ensuring that your solar panels are securely mounted for optimal
          performance.
        </h1>
      </div>
    </div>
  );
};

export default SolarDescription;
