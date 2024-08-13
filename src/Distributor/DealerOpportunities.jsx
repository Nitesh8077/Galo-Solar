import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import backgroundImg from "/images/CURCUIT3.png";

const DealerOpportunities = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="p-8" style={{ backgroundImage: `url(${backgroundImg})` }}>
      <div data-aos="fade-up">
        <h2 className="text-black text-3xl font-bold">Dealer Opportunities</h2>
        <p className="text-black mt-4">
          We offer dealership opportunities across India for:
        </p>
        <ul className="text-black list-disc ml-8 mt-4">
          <li>
            <strong>Distributors:</strong> Distribute Galo Solar products in
            your region and manage sub-dealers.
          </li>
          <li>
            <strong>Retailers:</strong> Sell Galo Solar products directly to
            consumers.
          </li>
          <li>
            <strong>Installers:</strong> Provide installation services for Galo
            Solar products and systems.
          </li>
        </ul>
      </div>

      <div data-aos="fade-up" className="mt-8">
        <h2 className="text-black text-3xl font-bold">
          How to Become a Galo Solar Dealer
        </h2>
        <p className="text-black mt-4">
          Becoming a Galo Solar dealer is easy. Simply fill out our dealership
          lead form with your basic details, and one of our executives will
          contact you for further discussion. We will work closely with you to
          assess your needs, discuss investment options, and finalize your
          dealership agreement.
        </p>
      </div>

      <div data-aos="fade-up" className="mt-8">
        <h2 className="text-black text-3xl font-bold">
          Investment Requirements
        </h2>
        <p className="text-black mt-4">
          Your investment in a Galo Solar dealership will depend on the type of
          dealership and the scale of operations you wish to undertake. We offer
          flexible investment plans starting from ₹5 Lakhs. Our team will guide
          you through the process to ensure you make the right decision for your
          business.
        </p>
      </div>
    </div>
  );
};

export default DealerOpportunities;
