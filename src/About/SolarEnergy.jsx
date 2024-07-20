import React, { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";
import "./SolarAnimations.css"; // Ensure this file contains the necessary animation definitions

const SolarEnergy = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Optionally, reset the visibility when not intersecting
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div ref={sectionRef} className="bg-yellow-300 p-10">
      <h2
        className={`text-4xl font-bold mb-4 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 animate-fade-in" : "opacity-0"
        }`}
      >
        Generate Solar Energy from your Rooftop
      </h2>
      <p
        className={`text-lg mb-4 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 animate-slide-in" : "opacity-0"
        }`}
      >
        At Galo Energy, our vision is to lead the way to a sustainable future
        with innovative energy solutions. As a certified manufacturer, not a
        dealer, we proudly produce our own range of products and services. With
        certifications from <strong>IIT Varanasi</strong> and{" "}
        <strong>BIS</strong>, we ensure the highest quality standards.
      </p>
      <p
        className={`text-lg mb-4 transition-opacity duration-1000 ${
          isVisible ? "opacity-100 animate-slide-in" : "opacity-0"
        }`}
      >
        Our mission is clear: to empower you by reducing your electricity costs
        by 100% while promoting environmental stewardship. With an extensive
        service network, we are committed to providing reliable and efficient
        solutions across India.
      </p>
      <p
        className={`text-lg font-bold transition-opacity duration-1000 ${
          isVisible ? "opacity-100 animate-slide-in" : "opacity-0"
        }`}
      >
        Join us in crafting a legacy of sustainability and efficiency.
      </p>
    </div>
  );
};

export default SolarEnergy;
