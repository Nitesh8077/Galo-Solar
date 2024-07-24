import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import solarImage from "/images/ap.png"; // Adjust the path according to your project structure
import Product from "./Products/Product";

const WRSolar = () => {
  const [showProduct, setShowProduct] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const toggleProduct = () => {
    setShowProduct((prevShowProduct) => !prevShowProduct);
  };

  return (
    <div className="bg-yellow-400 p-8 text-center">
      <h2 className="text-7xl font-bold mb-4" data-aos="fade-up">
        Wide Range of Solar Systems
      </h2>
      <p className="text-3xl mt-8 mb-8" data-aos="fade-up" data-aos-delay="200">
        Find the Perfect Solar Solution for Your Needs
      </p>
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        <img
          src={solarImage}
          alt="Solar Systems"
          className="w-full max-w-8xl"
        />
      </div>
      <p className="text-2xl mt-10" data-aos="fade-up" data-aos-delay="600">
        At <span className="font-bold">Galo Solar</span>, we pride ourselves on
        offering a comprehensive selection of solar systems designed to meet the
        diverse energy needs of households and businesses. Whether you're
        looking for a compact 2kW system for your home or a robust 10kW setup
        for a larger establishment, we have the perfect solution for you. Our
        range includes state-of-the-art solar panels and systems that ensure{" "}
        <span className="font-bold">
          efficiency, reliability, and sustainability.
        </span>
      </p>
      <div
        data-aos="fade-up"
        data-aos-delay="800"
        className="flex flex-col items-center"
      >
        <a
          href="#more"
          className="text-black text-5xl font-bold mt-10"
          onClick={toggleProduct}
        >
          {showProduct ? "Hide section" : "Show more"}
        </a>
        <span className="mt-10 cursor-pointer" onClick={toggleProduct}>
          <img src="/images/arrow.svg" alt="Toggle Product Visibility" />
        </span>
      </div>
      {showProduct && <Product />}
    </div>
  );
};

export default WRSolar;
