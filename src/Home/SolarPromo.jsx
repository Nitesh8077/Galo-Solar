import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SolarPromo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-yellow-400 min-h-screen flex flex-col items-center justify-center p-4 md:p-8">
      <h1
        className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-center"
        data-aos="fade-down"
      >
        Learn More with Our YouTube Channel
      </h1>
      <p
        className="text-base md:text-lg lg:text-xl mb-6 text-center"
        data-aos="fade-up"
      >
        Get All Your Solar Questions Answered
      </p>
      <div
        className="relative w-full max-w-xs md:max-w-lg lg:max-w-2xl"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <div
          className="relative"
          style={{ paddingBottom: "56.25%", height: 0 }}
        >
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/Nh_KJDPNWOk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div className="w-full p-4">
          <p className="text-black text-base md:text-lg lg:text-xl flex items-center justify-center space-x-2">
            <span className="font-bold flex items-center space-x-2">
              Subscribe to our
              <img
                src="/images/youtube.svg"
                alt="YouTube"
                className="w-12 h-12 mt-1 ml-2 md:w-16 md:h-16 lg:w-20 lg:h-20 inline-block"
              />
              <span>channel to explore more videos.</span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarPromo;
