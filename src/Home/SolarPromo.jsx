import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "/images/CIRCUIT5.png";

const SolarPromo = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-yellow-400 flex flex-col items-center p-4 md:p-8"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h1
        className="text-2xl md:text-5xl font-bold mb-4 text-center"
        data-aos="fade-down"
      >
        Learn More with Our YouTube Channel
      </h1>
      <p className="text-base md:text-2xl  mb-6 text-center" data-aos="fade-up">
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
            <img
              src="/images/ytup.svg"
              alt="YouTube"
              className="w-80 md:w-full mt-1 ml-2 inline-block"
            />
          </p>
        </div>
      </div>
    </div>
  );
};

export default SolarPromo;
