// src/Form.js
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center bg-yellow-500 p-4">
      <div
        className="text-center md:text-left mb-6 md:mb-0 md:w-1/2"
        data-aos="fade-right"
      >
        <h1 className="text-black text-2xl md:text-5xl font-bold">
          Unlock the Benefits of Solar Energy with a No-Cost Consultation!
        </h1>
        <p className="text-black text-sm md:text-xl mt-4">
          Connect with our team for a comprehensive review of your solar
          options. Just valuable insights to help you make an informed decision.
          Reach out today!
        </p>
      </div>
      <div
        className="bg-white p-4 md:p-6 rounded-lg shadow-lg md:w-1/2"
        data-aos="fade-left"
      >
        <form className="space-y-2 md:space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name *
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number*
            </label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Want solar rooftop for? *
            </label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
              required
            >
              <option value="">Select an option</option>
              <option value="home">Home</option>
              <option value="business">Office</option>
              <option value="other">Other</option>
            </select>
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
              Remark
            </label>
            <input
              type="text"
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
