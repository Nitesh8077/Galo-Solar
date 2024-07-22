import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const solutions = [
  {
    title: "OPEN ACCESS",
    description:
      "Suitable for Businesses with High Electricity Demand looking to meet ESG Goals and reduce their electricity costs. Solar Power Plant is deployed Off-site in same state where electricity is consumed but in a different location than the office/factory premises. Available in Captive & Group Captive mode.",
    image: "/images/sp1.svg",
  },
  {
    title: "GROUND MOUNTED",
    description:
      "Suitable for Businesses with Large Land Area within their campus looking to consume all power in captive mode. Get Lower electricity bills and take a positive step in Energy Transition.",
    image: "/images/sp2.svg",
  },
  {
    title: "ROOFTOP",
    description:
      "Grid-connected Rooftop Solar Plants for Commercial & Industrial Enterprises to transform your Rooftops into a Source of Clean Energy and lower your power bills.",
    image: "/images/sp3.svg", // replace with the actual image path
  },
];

const SolarSolutions = () => {
  return (
    <div className="bg-black text-yellow-500 py-12">
      <h2 className="text-6xl font-bold text-center mb-8">
        SOLAR SOLUTIONS WE PROVIDE
      </h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
        {solutions.map((solution, index) => (
          <div
            key={index}
            className="p-6 bg-yellow-500 text-black rounded-lg shadow-lg"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <img
              src={solution.image}
              alt={solution.title}
              className="rounded-lg mb-4 w-full"
            />
            <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
            <p>{solution.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolarSolutions;
