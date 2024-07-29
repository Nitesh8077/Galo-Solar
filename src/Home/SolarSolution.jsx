// src/TrustSection.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "/images/blackbg3.png"; // Adjust the path if necessary

const SolarSolution = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="bg-white text-white p-8 md:p-16 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="text-black text-3xl md:text-8xl font-bold mb-4"
        data-aos="fade-up"
      >
        We provide
      </h2>
      <h3 className="text-2xl md:text-8xl font-bold mb-4" data-aos="fade-up">
        Solar Solutions for
      </h3>
      <div className="space-y-10 text-black">
        {[
          {
            image: "/images/home.png",
          },
          {
            image: "/images/industry.png",
          },
          {
            image: "/images/society.png",
          },
          {
            image: "/images/kusum.png",
          },
        ].map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-3  rounded-2xl md:rounded-full ${
              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img src={item.image} alt={item.title} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarSolution;
