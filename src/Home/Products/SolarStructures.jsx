import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SolarStructures = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  return (
    <div className="bg-yellow-400 text-black p-10">
      <h1 className="text-3xl font-bold mb-5">Range of Solar Structures:</h1>
      <div className="flex flex-wrap">
        <div data-aos="fade-up" className="w-full md:w-1/2 p-5">
          <h2 className="text-xl font-bold">2 kW to 10 kW Structures</h2>
          <p>
            Ideal for residential and small commercial applications. These
            structures are designed for compact installations, providing
            stability and protection for your solar panels while maximizing
            space efficiency.
          </p>
        </div>
        <div data-aos="fade-up" className="w-full md:w-1/2 p-5">
          <h2 className="text-xl font-bold">10 kW to 50 kW Structures</h2>
          <p>
            Perfect for medium to large residential buildings and medium-sized
            businesses. These structures offer robust support for larger solar
            arrays, ensuring reliable performance even in demanding conditions.
          </p>
        </div>
        <div data-aos="fade-up" className="w-full md:w-1/2 p-5">
          <h2 className="text-xl font-bold">50 kW to 100 kW Structures</h2>
          <p>
            Suitable for large commercial and industrial applications. Our
            structures in this range are built to withstand significant loads
            and harsh environmental conditions, providing long-term reliability
            and efficiency.
          </p>
        </div>
        <div data-aos="fade-up" className="w-full md:w-1/2 p-5">
          <h2 className="text-xl font-bold">100 kW to 150 kW Structures</h2>
          <p>
            Designed for extensive commercial and industrial installations,
            these structures offer the highest level of support and durability.
            They are engineered to accommodate large-scale solar projects,
            ensuring optimal performance and maximum energy production.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarStructures;
