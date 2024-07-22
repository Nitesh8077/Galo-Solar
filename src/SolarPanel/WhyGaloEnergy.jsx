import React from "react";

const WhyGaloEnergy = () => {
  return (
    <div className="bg-yellow-500 py-12">
      <h2 className="text-4xl font-bold text-center mb-8">WHY GALO ENERGY?</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        <div
          className="p-6 bg-black text-white rounded-lg shadow-lg flex flex-col justify-center items-center"
          data-aos="fade-up"
        >
          <div className="h-12 w-12 mb-4 flex items-center justify-center">
            <img src="/images/pro.svg" alt="Pro Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Experience & Expertise</h3>
          <p>
            Years in the business, number of successful installations, and team
            qualifications.
          </p>
        </div>

        <div
          className="p-6 bg-yellow-400 text-black rounded-lg shadow-lg flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="h-12 w-12 mb-4 flex items-center justify-center rounded-full">
            <img src="/images/quality.svg" alt="Quality Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Quality Commitment</h3>
          <p>Dedication to using only high-quality materials and components.</p>
        </div>

        <div
          className="p-6 bg-black text-white rounded-lg shadow-lg flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="h-12 w-12 mb-4 flex items-center justify-center rounded-full">
            <img src="/images/csx.svg" alt="Customer Focus Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Customer Focus</h3>
          <p>
            Personalized service, from initial consultation to post-installation
            support.
          </p>
        </div>

        <div
          className="p-6 bg-yellow-400 text-black rounded-lg shadow-lg flex flex-col justify-center items-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <div className="h-12 w-12 mb-4 flex items-center justify-center rounded-full">
            <img src="/images/mission.svg" alt="Mission Icon" />
          </div>
          <h3 className="text-xl font-semibold mb-2">Sustainability Mission</h3>
          <p>
            A short statement on how Galo Energy contributes to a sustainable
            future through renewable energy solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyGaloEnergy;
