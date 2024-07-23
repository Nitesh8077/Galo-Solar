import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "tailwindcss/tailwind.css"; // Import Tailwind CSS
import SolarCalculatorForm from "./SolarCalculatorForm"; // Import the form component

function SolarCal() {
  const [showForm, setShowForm] = useState(false);
  const [showNavigation, setShowNavigation] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleSolarCalculatorClick = () => {
    setShowForm(true);
  };

  const handleBackToHome = () => {
    setShowForm(false);
    setShowNavigation(true);
  };

  if (showNavigation) {
    return <Navigation />;
  }

  return (
    <div className="bg-black h-auto py-8 flex flex-col items-center justify-center">
      <div
        className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8 lg:space-x-12" // Increased spacing for large screens
        data-aos="fade-up"
      >
        <button className="flex items-center bg-yellow-400 text-black text-xl md:text-2xl lg:text-4xl font-bold py-2 px-4 rounded-3xl hover:bg-yellow-600">
          <img
            src="/images/en.svg"
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
            alt="EN"
          />
          <p className="ml-2 md:ml-4">
            ENQUIRE <br /> NOW!
          </p>
        </button>
        <button
          onClick={handleSolarCalculatorClick}
          className="flex items-center bg-yellow-400 text-black text-xl md:text-2xl lg:text-4xl font-bold py-2 px-4 rounded-3xl hover:bg-yellow-600"
        >
          <img
            src="/images/sc.svg"
            className="w-8 h-8 md:w-12 md:h-12 lg:w-16 lg:h-16"
            alt="SC"
          />
          <p className="ml-2 md:ml-4">
            SOLAR
            <br /> CALCULATOR
          </p>
        </button>
      </div>
      {showForm && <SolarCalculatorForm onBackToHome={handleBackToHome} />}
    </div>
  );
}

export default SolarCal;
