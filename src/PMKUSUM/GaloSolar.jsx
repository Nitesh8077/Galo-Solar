import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "/images/CIRCUIT5.png";

const GaloSolar = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className=" text-black p-8"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl font-bold mb-8" data-aos="fade-up">
          Why choose Galo Solar for PM KUSUM?
        </h1>
        <div className="space-y-6">
          <p className="text-lg" data-aos="fade-up">
            <strong>Experience and Reliability:</strong> Galo Solar brings 25
            years of experience in the solar industry, establishing a trusted
            reputation.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="100">
            <strong>Single Point Warranty Support:</strong> Customers have a
            dedicated contact for all warranty issues, streamlining the
            resolution process and avoiding the need to deal with multiple
            departments.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="200">
            <strong>Financial Stability:</strong> The company is financially
            strong, providing consistent support throughout the duration of the
            solar project.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="300">
            <strong>Dedicated Servicing Staff & Toll-Free Number:</strong> A
            dedicated team and a toll-free number ensure that customer support
            is easily accessible and free of charge.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="400">
            <strong>Quality Assurance:</strong> Products are either manufactured
            by Galo Solar or custom-designed to meet high standards, ensuring
            superior quality control.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="500">
            <strong>Single Brand Manufacturer:</strong> Galo Solar simplifies
            solar installation by offering all essential components—solar
            panels, inverters, and structures—under one trusted brand.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="600">
            <strong>Durable Structure:</strong> The systems feature hot-dipped
            galvanized structures with no rust, factory-fitted components, and
            double zinc coating for added durability.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="700">
            <strong>Certified for High Wind Speeds:</strong> Structures are
            certified by IIT - BHU Varanasi to withstand high wind speeds,
            ensuring robust performance.
          </p>
          <p className="text-lg" data-aos="fade-up" data-aos-delay="800">
            <strong>Efficient Roof Utilization:</strong> The design maximizes
            roof space without waste, optimizing installation efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GaloSolar;
