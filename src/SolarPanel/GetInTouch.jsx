import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const GetInTouch = () => {
  return (
    <div className="bg-yellow-500 text-black py-12" data-aos="fade-up">
      <div className="max-w-4xl ml-10">
        <img src="/images/git.svg" />
        <p className="text-lg mb-8 mt">
          Embark on your journey towards sustainable energy with our on-grid
          solar solutions. Whether you’re looking to reduce your carbon
          footprint, save on electricity bills, or invest in a greener future,
          we’re here to guide you every step of the way. From initial
          consultation to seamless installation and beyond, our team of experts
          will ensure a smooth transition to solar power, tailored to your
          specific needs. Start harnessing the limitless power of the sun today
          and transform how you power your life.
        </p>
        <button className="bg-black text-white py-2 px-6 rounded-lg hover:bg-gray-800">
          Contact us
        </button>
      </div>
    </div>
  );
};

export default GetInTouch;
