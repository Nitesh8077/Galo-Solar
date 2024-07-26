// src/Form.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center h-screen bg-yellow-500 p-4">
      <div
        className="text-center md:text-left mb-6 md:mb-0 md:w-1/2"
        data-aos="fade-right"
      >
        <h1 className="text-black text-4xl md:text-5xl font-bold">
          Schedule Your FREE Solar Consultation Today!
        </h1>
        <p className="text-black text-lg md:text-xl mt-4">
          Get expert advice from our solar professionals. No obligation, only
          book if you're satisfied!
        </p>
      </div>
      <div
        className="bg-white p-4 md:p-6 rounded-lg shadow-lg md:w-1/2"
        data-aos="fade-left"
      >
        <form className="space-y-2 md:space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Full Name *
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number/ Whatsapp Number *
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Monthly Electricity Bill *
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
              required
            />
          </div>
          <div className="flex gap-2 md:gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Pincode *
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
                required
              />
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                City *
              </label>
              <input
                type="text"
                className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email *
            </label>
            <input
              type="email"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-black text-yellow-400 py-2 rounded-md font-bold"
          >
            Go Solar!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
