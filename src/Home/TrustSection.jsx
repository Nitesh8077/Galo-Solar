// src/TrustSection.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import background from "/images/blackbg2.png"; // Adjust the path if necessary

const TrustSection = () => {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <div className="bg-black text-white p-8 md:p-16 w-full">
      <h2
        className="text-yellow-500 text-3xl md:text-4xl font-bold mb-4"
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
        <div
          className="flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-3 bg-yellow-500 rounded-2xl md:rounded-full"
          data-aos="fade-left"
        >
          <img
            src="/images/1.svg"
            className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
          />
          <div className="flex-1 text-center md:text-left md:pt-1">
            <h4 className="text-sm md:text-xl font-bold">
              Established Expertise
            </h4>
            <p className="text-xs md:text-base">
              Trusted solar company with over 25 years of experience in the
              industry.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-3 bg-yellow-500 rounded-2xl md:rounded-full ml-0 md:ml-60"
          data-aos="fade-left"
        >
          <img
            src="/images/2.svg"
            className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
          />
          <div className="flex-1 text-center md:text-left md:pt-1">
            <h4 className="text-sm md:text-xl font-bold">
              Superior Manufacturing
            </h4>
            <p className="text-xs md:text-base">
              In-house manufacturing ensuring top-quality control of all
              components.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-3 bg-yellow-500 rounded-2xl md:rounded-full"
          data-aos="fade-left"
        >
          <img
            src="/images/3.svg"
            className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
          />
          <div className="flex-1 text-center md:text-left md:pt-1">
            <h4 className="text-sm md:text-xl font-bold">
              Comprehensive Warranty
            </h4>
            <p className="text-xs md:text-base">
              One-stop solution for all warranty-related issues.
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-3 bg-yellow-500 rounded-2xl md:rounded-full ml-0 md:ml-60"
          data-aos="fade-left"
        >
          <img
            src="/images/4.svg"
            className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
          />
          <div className="flex-1 text-center md:text-left md:pt-1">
            <h4 className="text-sm md:text-xl font-bold">
              Local Service Support
            </h4>
            <p className="text-xs md:text-base">
              Dedicated service technicians available in your city.{" "}
            </p>
          </div>
        </div>

        <div
          className="flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-3 bg-yellow-500 rounded-2xl md:rounded-full"
          data-aos="fade-left"
        >
          <img
            src="/images/5.svg"
            className="h-12 w-12 md:h-16 md:w-16 flex-shrink-0"
          />
          <div className="flex-1 text-center md:text-left md:pt-1">
            <h4 className="text-sm md:text-xl font-bold">
              Financial Strength{" "}
            </h4>
            <p className="text-xs md:text-base">
              Robust financial backing, ensuring long-term support for all solar
              projects.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustSection;
