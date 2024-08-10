import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "/images/CIRCUIT2.png";

const Kusum = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className=" text-yellow-400 p-8"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="max-w-full mx-auto">
        <h1 className="text-4xl font-bold mb-4" data-aos="fade-up">
          What is PM KUSUM?
        </h1>
        <p className="text-lg mb-8" data-aos="fade-up" data-aos-delay="100">
          The Pradhan Mantri Kisan Urja Suraksha evam Utthan Mahabhiyan
          (PM-KUSUM) scheme, launched by the Ministry of New and Renewable
          Energy (MNRE) in 2019, promotes renewable energy adoption in
          agriculture. It ensures energy security for farmers and aims to
          increase India's share of electric power from non-fossil-fuel sources
          to 40% by 2030.
        </p>

        <h2 className="text-2xl font-bold mb-4" data-aos="fade-up">
          Key Components
        </h2>

        <div className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="200">
            <h3 className="text-xl font-semibold">
              Component A: Decentralized Grid-Connected Power Plants
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Set up solar or renewable energy plants from 500 kW to 2 MW.
              </li>
              <li>Allows farmers to generate and sell surplus power.</li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <h3 className="text-xl font-semibold">
              Component B: Standalone Solar Agriculture Pumps
            </h3>
            <ul className="list-disc list-inside">
              <li>Install solar pumps up to 7.5 HP.</li>
              <li>
                Replaces diesel pumps, reduces costs, and minimizes
                environmental impact.
              </li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="400">
            <h3 className="text-xl font-semibold">
              Component C: Solarization of Grid-Connected Pumps
            </h3>
            <ul className="list-disc list-inside">
              <li>
                Integrate solar energy into existing grid-connected pumps.
              </li>
              <li>
                Reduces electricity bills and ensures reliable energy for
                irrigation.
              </li>
            </ul>
          </div>
        </div>

        <h2 className="text-2xl font-bold mt-8 mb-4" data-aos="fade-up">
          Eligibility
        </h2>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="500">
          Eligible entities include individual farmers, SHGs, JLGs,
          cooperatives, Panchayats, FPOs, and WUAs.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" data-aos="fade-up">
          Financial Support
        </h2>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="600">
          <strong>Loan Details</strong>
          <br />
          Component A: 70% loan, 30% borrower contribution.
          <br />
          Components B and C: 30% loan, 10% borrower contribution, 60% subsidy.
          <br />
          Competitive interest rates and repayment terms of 7 to 15 years.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" data-aos="fade-up">
          Security and Insurance
        </h2>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="700">
          Secured through asset hypothecation, land mortgage, and Power Purchase
          Agreement.
          <br />
          Comprehensive insurance for financed assets.
        </p>

        <h2 className="text-2xl font-bold mt-8 mb-4" data-aos="fade-up">
          Implementation and Due Diligence
        </h2>
        <p className="text-lg" data-aos="fade-up" data-aos-delay="800">
          Projects undergo thorough due diligence, and implementation follows
          MNRE guidelines. The scheme falls under Priority Sector:
          Agriculture-Farm Credit, supporting sustainable agricultural
          development through renewable energy.
        </p>

        <div
          className="mt-8 bg-yellow-400 text-black w-full font-bold text-xl text-center py-4"
          data-aos="fade-up"
          data-aos-delay="900"
        >
          Single Manufacturing Brand of Solar Panel + Inverter + Structure = No
          Service Issues
        </div>
      </div>
    </div>
  );
};

export default Kusum;
