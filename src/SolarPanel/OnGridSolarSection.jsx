import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const OnGridSolarSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="bg-yellow-400 p-10" data-aos="fade-up">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h2 className="text-3xl font-bold mb-4">
            Why choose <div className="text-black text-6xl">On-Grid Solar?</div>
          </h2>
          <p className="text-lg text-gray-900">
            An on-grid solar power plant, or grid-tied system, seamlessly
            integrates with the public electricity grid to provide a mix of
            solar and traditional power. This approach eliminates the need for
            costly battery storage required by off-grid systems, allowing for a
            more affordable initial setup. Homeowners and businesses benefit
            from the grid’s backup during low solar output, ensuring
            uninterrupted power. Additionally, through net metering, surplus
            energy can be sold back to the grid, offering a return on
            investment. Opting for an on-grid system delivers a reliable,
            sustainable energy solution that reduces costs and supports
            environmental health, all without sacrificing convenience.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src="/images/grid.svg"
            alt="On-Grid Solar"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default OnGridSolarSection;
