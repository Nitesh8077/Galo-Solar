import React, { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";

// Sample images (replace with actual paths)
import lucknowImage from "/images/lucknow.svg";
import haryanaImage from "/images/haryana.svg";
import ghaziabadImage from "/images/gzb.svg";

const InstallationShowcase = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            // Optionally, reset the visibility if you want to re-hide when out of view
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
    <div ref={sectionRef} className="bg-yellow-400 text-black p-8 space-y-8">
      <div className="text-center">
        <h2
          className={`text-3xl font-bold transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          INSTALLATION SHOWCASE
        </h2>
        <p
          className={`mt-2 transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Explore our gallery of successful installations across various
          locations.
        </p>
        <p
          className={`transition-opacity duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Each project showcases Galo Energy’s commitment to quality and
          sustainability.
        </p>
        <p
          className={`transition-opacity duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          See how our innovative solutions are making a difference in
          communities nationwide.
        </p>
        <p
          className={`mt-4 font-bold transition-opacity duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          Join us in our journey towards a brighter, greener future.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 mt-8">
        <div
          className={`transition-opacity duration-1000 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
            <img
              src={lucknowImage}
              alt="Lucknow"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">Lucknow</h3>
            </div>
          </div>
        </div>
        <div
          className={`transition-opacity duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
            <img
              src={haryanaImage}
              alt="Haryana"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">Haryana</h3>
            </div>
          </div>
        </div>
        <div
          className={`transition-opacity duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-xs">
            <img
              src={ghaziabadImage}
              alt="Ghaziabad"
              className="w-full h-auto object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-center">Ghaziabad</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstallationShowcase;
