import React, { useEffect, useState, useRef } from "react";
import "tailwindcss/tailwind.css";
const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
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
    <div ref={sectionRef} className="bg-black text-yellow-400 p-8 space-y-6">
      <div
        className={`transition-opacity duration-1000 ${
          isVisible ? "opacity-100 delay-100" : "opacity-0"
        }`}
      >
        <img src="./images/gt.svg" alt="Graphic" />
      </div>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div
          className={`transition-opacity duration-1000 delay-200 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center mt-10">
            <span className="text-2xl">
              <img
                className="h-12 w-12"
                src="./images/location.svg"
                alt="Location"
              />
            </span>
            <h2 className="font-bold mt-1">Office</h2>
            <p className="mt-2 text-sm text-white">
              D-121, Okhla Phase 1, New Delhi – 110020, INDIA
            </p>
          </div>
        </div>
        <div
          className={`transition-opacity duration-1000 delay-400 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center mt-10">
            <span className="text-2xl">
              <img src="./images/mail.svg" alt="Mail" />
            </span>
            <h2 className="font-bold">E-Mail Us</h2>
            <p className="mt-2 text-sm text-white">Info@galo.co.in</p>
          </div>
        </div>
        <div
          className={`transition-opacity duration-1000 delay-600 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col items-center mt-10">
            <span className="text-2xl">
              <img src="./images/phone.svg" alt="Phone" />
            </span>
            <h2 className="font-bold">CALL US</h2>
            <p className="mt-2 text-sm text-white">+91-93117 97244</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
