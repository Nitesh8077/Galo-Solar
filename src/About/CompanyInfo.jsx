import React, { useEffect, useRef, useState } from "react";
import "tailwindcss/tailwind.css";
const CompanyInfo = () => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="bg-black text-yellow-400 p-8 space-y-8">
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100 delay-100" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold flex items-center">
          <span className="mr-2">
            <img src="./images/legacyicon.svg" alt="Legacy Icon" />
          </span>
          A Legacy of Innovation and Sustainability
        </h2>
        <p className="mt-2">
          Founded on the principles of innovation, quality, and sustainability,
          Galo Energy stands as a testament to the power of homegrown solutions
          in revolutionizing the energy landscape.
        </p>
      </div>
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100 delay-300" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold flex items-center">
          <span className="mr-2">
            <img src="./images/legacyicon.svg" alt="Legacy Icon" />
          </span>
          Proudly Made in India
        </h2>
        <p className="mt-2">
          Technical Excellence at Our Core. In a world clamoring for sustainable
          solutions, Galo Energy takes pride in its roots. Our products are 100%
          manufactured in India, embodying the spirit of self-reliance and
          pioneering excellence.
        </p>
      </div>
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100 delay-500" : "opacity-0"
        }`}
      >
        <h2 className="text-2xl font-bold flex items-center">
          <span className="mr-2">
            <img src="./images/legacyicon.svg" alt="Legacy Icon" />
          </span>
          Our Vision for the Future
        </h2>
        <p className="mt-2">
          Our journey is guided by the ambition to be the product of choice for
          end customers seeking sustainable, efficient, and reliable energy
          solutions.
        </p>
      </div>
    </div>
  );
};

export default CompanyInfo;
