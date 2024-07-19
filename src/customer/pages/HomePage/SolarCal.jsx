import React from "react";

const SolarCal = () => {
  return (
    <div className="bg-black flex flex-col md:flex-row justify-center items-center space-y-10 md:space-y-0 md:space-x-40 h-screen md:h-80 -mt-2">
      <button className="w-72 h-56 flex justify-center items-center">
        <div>
          <img
            src="./images/button2.svg"
            alt="Button 2"
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>
      </button>

      <button className="w-96 flex justify-center items-center">
        <div>
          <img
            src="./images/button1.svg"
            alt="Button 1"
            className="hover:scale-105 transition-transform duration-200"
          />
        </div>
      </button>
    </div>
  );
};

export default SolarCal;
