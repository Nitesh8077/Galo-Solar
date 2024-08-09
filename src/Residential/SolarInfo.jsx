import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "/images/homerec.png";

function SolarInfo() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="bg-gradient-to-b from-gray-900 to-black text-white py-12 px-6 lg:px-24"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold leading-tight text-yellow-400">
          Transform your society into a hub of clean, sustainable energy with
          Galo Solar's advanced solar solutions.
        </h1>
        <p className="mt-4 text-lg text-gray-300">
          Our expert team provides eco-friendly and economically beneficial
          solar options, customized to meet the unique needs of your location.
          With Galo Solar, you can seamlessly transition to renewable energy,
          reducing your electricity bills while contributing to a greener
          future.
        </p>
      </div>

      {/* Steps to Install */}
      <div className="space-y-12">
        {/* Step 1 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
            1. Site Visit by Trained Solar Consultants
          </h2>
          <p className="text-gray-300 mb-6">
            Our process begins with a comprehensive site visit by our
            experienced solar consultants.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Analyze your electricity bill to understand your energy
              consumption.
            </li>
            <li>
              Assess the suitability of your rooftop for solar panel
              installation.
            </li>
            <li>
              Discuss your specific requirements to ensure a personalized
              solution.
            </li>
            <li>Determine your eligibility for state-specific subsidies.</li>
          </ul>
          <div className="flex flex-wrap gap-6 mt-6" data-aos="fade-up">
            <img
              src="/images/rec1.png"
              alt="High Windspeed"
              className="rounded-xl shadow-md"
            />
            <img
              src="/images/rec2.png"
              alt="IIT Certified Structures"
              className="rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Step 2 */}
        <div className="bg-gray-800 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-yellow-300 mb-4">
            2. End-to-End Support
          </h2>
          <p className="text-gray-300 mb-6">
            At Galo Solar, we pride ourselves on providing seamless and
            comprehensive service, guiding you through every step of the
            installation process.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>
              Coordinating with your DISCOM (Distribution Company) or State
              Electricity Board (SEB).
            </li>
            <li>
              Assisting in the application process for rooftop solar subsidies.
            </li>
            <li>
              Designing and engineering a solar system tailored to your needs.
            </li>
            <li>
              Facilitating financing options and loan arrangements for your
              solar system.
            </li>
            <li>
              Delivering and installing the solar system, followed by
              commissioning.
            </li>
            <li>
              Managing net metering coordination with your DISCOM to ensure
              efficient energy management.
            </li>
            <li>
              Uploading necessary subsidy documentation on the portal and
              coordinating with DISCOM for inspection and approval.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer with Animation */}
      <div className="text-center mt-16" data-aos="fade-up">
        <p className="font-semibold text-yellow-400 border-2 border-yellow-400 text-xl inline-block py-3 w-full px-6 rounded-lg shadow-lg">
          Single Manufacturing Brand of Solar Panel + Inverter + Structure =
          <span className="text-white">No Service Issues</span>
        </p>
      </div>
    </div>
  );
}

export default SolarInfo;
