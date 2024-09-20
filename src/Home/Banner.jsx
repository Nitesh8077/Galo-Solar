import React, { useState, useEffect, useRef } from "react";

const Banner = () => {
  const [displayText, setDisplayText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const bannerRef = useRef(null);
  const fullText = "Single Brand : Full Service Support";

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true); // Trigger the animation when the banner is visible
          }
        });
      },
      { threshold: 0.5 } // 50% of the banner should be visible to trigger
    );

    if (bannerRef.current) {
      observer.observe(bannerRef.current);
    }

    return () => {
      if (bannerRef.current) {
        observer.unobserve(bannerRef.current); // Cleanup observer on unmount
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let index = 0;
      const timer = setInterval(() => {
        if (index < fullText.length) {
          setDisplayText(fullText.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 50);
      return () => clearInterval(timer); // Cleanup the timer
    }
  }, [isVisible]); // Run animation when `isVisible` becomes true

  return (
    <div
      ref={bannerRef} // Attach the ref to the banner div
      className="flex justify-center items-center h-12 md:h-28 bg-black p-4 sm:p-6 md:p-8 lg:p-10"
    >
      <h1 className="text-yellow-500 text-xl md:text-4xl font-bold text-center">
        {displayText}
      </h1>
    </div>
  );
};

export default Banner;
