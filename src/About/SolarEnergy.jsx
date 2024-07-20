import React from "react";
import "tailwindcss/tailwind.css";
import "./SolarAnimations.css";

const SolarEnergy = () => {
  return (
    <div className="bg-yellow-300 p-10">
      <h2 className="text-4xl font-bold mb-4 animate-fade-in">
        Generate Solar Energy from your Rooftop
      </h2>
      <p className="text-lg mb-4 animate-slide-in">
        At Galo Energy, our vision is to lead the way to a sustainable future
        with innovative energy solutions. As a certified manufacturer, not a
        dealer, we proudly produce our own range of products and services. With
        certifications from <strong>IIT Varanasi</strong> and{" "}
        <strong>BIS</strong>, we ensure the highest quality standards.
      </p>
      <p className="text-lg mb-4 animate-slide-in">
        Our mission is clear: to empower you by reducing your electricity costs
        by 100% while promoting environmental stewardship. With an extensive
        service network, we are committed to providing reliable and efficient
        solutions across India.
      </p>
      <p className="text-lg font-bold animate-slide-in">
        Join us in crafting a legacy of sustainability and efficiency.
      </p>
    </div>
  );
};

export default SolarEnergy;
