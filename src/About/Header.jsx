import React, { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";
import "./animations.css"; // Ensure this file includes your custom animations
const Header = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const rect = headerRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if the element is in the viewport
        if (rect.top < windowHeight && rect.bottom >= 0) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check visibility on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={headerRef}
      className="relative bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(/images/about.svg)` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1
          className={`text-6xl font-bold mb-4 ${
            isVisible ? "animate-fade-in" : "opacity-0"
          } transition-opacity duration-1000 delay-100 text-yellow-400`}
        >
          About Us
        </h1>
        <p
          className={`text-2xl ${
            isVisible ? "animate-slide-in" : "opacity-0"
          } transition-opacity duration-1000 delay-300`}
        >
          Empowering Your Future with Solar Energy
        </p>
      </div>
    </div>
  );
};

export default Header;
