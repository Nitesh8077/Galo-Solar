// src/TrustSection.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "/images/blackbg2.png"; // Adjust the path if necessary

const TrustSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="bg-black text-white p-8 md:p-16 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <h2
        className="text-yellow-400 text-3xl md:text-4xl font-bold mb-4"
        data-aos="fade-up"
      >
        Trust the Best:
      </h2>
      <h3 className="text-2xl md:text-3xl font-bold mb-4" data-aos="fade-up">
        5 Years Warranty / 25 Years Lifespan
      </h3>
      <p className="text-lg md:text-xl mb-8" data-aos="fade-up">
        25+ Years of Excellence in Solar Energy with a 1000 Cr+ Group Turnover
      </p>
      <div className="space-y-10 text-black">
        {[
          {
            id: 1,
            title: "Established Expertise",
            description:
              "Trusted solar company with over 25 years of experience in the industry.",
            image: "/images/1.svg",
          },
          {
            id: 2,
            title: "Superior Manufacturing",
            description:
              "In-house manufacturing ensuring top-quality control of all components.",
            image: "/images/2.svg",
          },
          {
            id: 3,
            title: "Comprehensive Warranty",
            description: "One-stop solution for all warranty-related issues.",
            image: "/images/3.svg",
          },
          {
            id: 4,
            title: "Local Service Support",
            description:
              "Dedicated service technicians available in your city.",
            image: "/images/4.svg",
          },
          {
            id: 5,
            title: "Financial Strength",
            description:
              "Robust financial backing, ensuring long-term support for all solar projects.",
            image: "/images/5.svg",
          },
        ].map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-3 bg-yellow-400 rounded-2xl md:rounded-full ${
              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
            />
            <div className="flex-1 text-center md:text-left md:pt-1">
              <h4 className="text-sm md:text-xl font-bold">{item.title}</h4>
              <p className="text-xs md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
