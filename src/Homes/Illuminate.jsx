import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

function Illuminate() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="min-h-screen bg-yellow-400 p-8 flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
        Illuminate Your Home with Galo Solar:
      </h1>
      <h2 className="text-2xl mb-8" data-aos="fade-up" data-aos-delay="200">
        Discover the Benefits of Solar Energy
      </h2>

      <div className="max-w-8xl mx-auto space-y-6 text-left">
        {[
          {
            title: "Experience and Reliability",
            text: "Galo Solar brings 25 years of experience in the solar industry, establishing a trusted reputation.",
          },
          {
            title: "Single Point Warranty Support",
            text: "Customers have a dedicated contact for all warranty issues, streamlining the resolution process and avoiding the need to deal with multiple departments.",
          },
          {
            title: "Financial Stability",
            text: "The company is financially strong, providing consistent support throughout the duration of the solar project.",
          },
          {
            title: "Dedicated Servicing Staff & Toll-Free Number",
            text: "A dedicated team and a toll-free number ensure that customer support is easily accessible and free of charge.",
          },
          {
            title: "Quality Assurance",
            text: "Products are either manufactured by Galo Solar or custom-designed to meet high standards, ensuring superior quality control.",
          },
          {
            title: "Family Safety",
            text: "Galo Solar’s systems are 100% safe for families, with a focus on secure and reliable installations.",
          },
          {
            title: "Durable Structure",
            text: "The systems feature hot-dipped galvanized structures with no rust, factory-fitted components, and double zinc coating for added durability.",
          },
          {
            title: "Certified for High Wind Speeds",
            text: "Structures are certified by IIT - BHU Varanasi to withstand high wind speeds, ensuring robust performance.",
          },
          {
            title: "Efficient Roof Utilization",
            text: "The design maximizes roof space without waste, optimizing installation efficiency.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded shadow-md"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <h3 className="font-bold text-xl">{item.title}</h3>
            <p className=" text-base">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Illuminate;
