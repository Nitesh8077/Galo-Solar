// src/TrustSection.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "/images/circuitnew.png";

const TrustSection = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div
      className="bg-black text-white p-8 md:p-16 overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <h2
        className="text-yellow-400 text-3xl md:text-4xl font-bold mb-4"
        data-aos="fade-up"
      >
        Become a Galo Solar Dealer
      </h2>
      <h3 className="text-2xl md:text-3xl font-bold mb-4" data-aos="fade-up">
        Why Partner with Galo Solar?
      </h3>
      <p className="text-lg md:text-xl mb-8" data-aos="fade-up">
        At Galo Solar, we are committed to leading the transition to renewable
        energy. As a Galo Solar dealer, you'll be part of a growing network
        dedicated to providing top-quality solar solutions across India. Our
        products are designed to meet the highest standards, ensuring
        reliability, efficiency, and customer satisfaction. By partnering with
        us, you gain access to:
      </p>
      <div className="space-y-10 text-black">
        {[
          {
            id: 1,
            title: "Single Brand Manufacturer",
            description:
              "Access a full range of advanced solar panels, inverters, and batteries designed under one brand for performance and reliability.",
            image: "/images/dist1.jpg",
          },
          {
            id: 2,
            title: "Branding Support",
            description:
              "Receive complete branding materials, including signage, in-store displays, and promotional items, to create a professional and consistent Galo Solar presence at your office or shop.",
            image: "/images/dist2.jpg",
          },
          {
            id: 3,
            title: "Competitive Pricing",
            description:
              "Benefit from competitive pricing structures that offer attractive margins and ensure your business's profitability and growth.",
            image: "/images/dist3.jpg",
          },
          {
            id: 4,
            title: "Comprehensive Training",
            description:
              "Participate in training programs that equip you with the knowledge and skills to effectively sell and install Galo Solar products, ensuring customer satisfaction.",
            image: "/images/dist4.jpg",
          },
          {
            id: 5,
            title: "Dedicated Support",
            description:
              "Enjoy ongoing support from our team, guiding and supervising you from the initial setup to continuous business development.",
            image: "/images/dist5.jpg",
          },
        ].map((item, index) => (
          <div
            key={item.id}
            className={`flex flex-col md:flex-row items-center md:items-start w-full md:w-3/4 space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-4 bg-yellow-400 rounded-2xl md:rounded-full ${
              index % 2 === 0 ? "md:ml-auto" : "md:mr-auto"
            }`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            <img
              src={item.image}
              alt={item.title}
              className="h-12 w-12 md:h-16 md:w-16 rounded-full flex-shrink-0"
            />
            <div className="flex-1 text-center md:text-left md:pt-1">
              <h4 className="text-sm md:text-xl font-bold">{item.title}</h4>
              <p className="text-xs md:text-base">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustSection;
