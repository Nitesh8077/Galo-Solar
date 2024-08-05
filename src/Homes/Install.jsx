import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import backgroundImg from "/images/homerec.png";

function Install() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white p-4 md:p-8"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="max-w-7xl mx-auto px-4">
        <p className="mb-4 text-lg md:text-xl text-white" data-aos="fade-up">
          Transform your home into a hub of clean, sustainable energy with Galo
          Solar's advanced solar solutions. Under the PM Surya Ghar Scheme, we
          offer substantial subsidies to homeowners and residential societies,
          making the transition to solar energy not only eco-friendly but also
          economically beneficial. It's important to note that these subsidies
          can vary from state to state, ensuring tailored support for your
          unique location.
        </p>

        <h2
          className="text-2xl md:text-4xl font-bold mb-4 text-yellow-400"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          Steps to Install Galo Solar System at Your Home:
        </h2>

        <div className="space-y-6">
          <div data-aos="fade-up" data-aos-delay="200">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full md:w-1/2 md:pr-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
                  1. Site Visit by Trained Solar Consultants:
                </h3>
                <p className="mt-2 text-lg md:text-xl text-white">
                  Our process begins with a comprehensive site visit by our
                  experienced solar consultants.
                </p>

                <p className="mt-2 font-semibold text-lg md:text-xl text-yellow-400">
                  During this visit, we:
                </p>
                <ul className="list-disc list-inside text-lg md:text-xl text-white ml-4 mt-2 space-y-1">
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
                  <li>
                    Determine your eligibility for state-specific subsidies.
                  </li>
                </ul>
              </div>
              <img
                src="/images/sp1.png"
                alt="Solar Installation 1"
                className="w-full md:w-1/2 rounded-md shadow-lg mt-4 md:mt-0"
                data-aos="fade-up"
                data-aos-delay="500"
              />
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
            <div className="flex flex-col md:flex-row items-center md:items-start">
              <div className="w-full md:w-1/2 md:pl-4">
                <h3 className="text-2xl md:text-3xl font-semibold text-yellow-400">
                  2. End-to-End Support:
                </h3>
                <p className="mt-2 text-lg md:text-xl text-white">
                  At Galo Solar, we pride ourselves on providing a seamless and
                  comprehensive service, guiding you through every step of the
                  installation process.
                </p>
                <p className="mt-2 font-semibold text-lg md:text-xl text-yellow-400">
                  This includes:
                </p>
                <ul className="list-disc list-inside text-lg md:text-xl text-white ml-4 mt-2 space-y-1">
                  <li>
                    Coordinating with your DISCOM (Distribution Company) or
                    State Electricity Board (SEB).
                  </li>
                  <li>
                    Assisting in the application process for rooftop solar
                    subsidies.
                  </li>
                  <li>
                    Designing and engineering a solar system tailored to your
                    needs.
                  </li>
                  <li>
                    Facilitating financing options and loan arrangements for
                    your solar system.
                  </li>
                  <li>
                    Delivering and installing the solar system, followed by
                    commissioning.
                  </li>
                  <li>
                    Managing net metering coordination with your DISCOM to
                    ensure efficient energy management.
                  </li>
                  <li>
                    Uploading necessary subsidy documentation on the portal and
                    coordinating with DISCOM for inspection and approval.
                  </li>
                </ul>
              </div>
              <img
                src="/images/sp2.png"
                alt="Solar Installation 2"
                className="w-full md:w-1/2 rounded-md shadow-lg mt-4 md:mt-0"
                data-aos="fade-up"
                data-aos-delay="600"
              />
            </div>
          </div>
        </div>

        <p
          className="mt-8 text-lg md:text-xl text-white"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          Once these steps are completed, your rooftop solar system is ready to
          generate significant savings. The government will directly transfer
          the subsidy amount to your account, making the transition to solar
          energy not only seamless but also financially rewarding. Embrace the
          future of energy with Galo Solar and enjoy a greener, more sustainable
          lifestyle while reducing your electricity bills. Contact us today to
          start your journey towards clean energy and make the most of the PM
          Surya Ghar Scheme subsidies.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8"></div>
      </div>
    </div>
  );
}

export default Install;
