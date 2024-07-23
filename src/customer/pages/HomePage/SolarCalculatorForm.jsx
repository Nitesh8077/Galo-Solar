import React from "react";

const SolarCalculatorForm = ({ onBackToHome }) => {
  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-black text-white z-50">
      <div className="w-full max-w-lg px-8 py-6">
        <h1 className="text-3xl font-bold mb-6 text-yellow-400">
          Solar Calculator
        </h1>
        <form className="space-y-4">
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full px-4 py-2 bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="text"
              placeholder="City, State, Pincode"
              className="w-full px-4 py-2 bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="Phone"
              className="w-full px-4 py-2 bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
            />
          </div>
          <input
            type="text"
            placeholder="Energy Usage (kWh)"
            className="w-full px-4 py-2 bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <textarea
            placeholder="Additional Information"
            className="w-full px-4 py-2 bg-white text-black rounded-md outline-none focus:ring-2 focus:ring-yellow-400"
            rows="4"
          ></textarea>
          <button
            type="submit"
            className="w-full py-2 mt-4 bg-yellow-400 text-black font-bold rounded-md hover:bg-yellow-500 transition duration-200"
          >
            Calculate
          </button>
        </form>
      </div>
    </div>
  );
};

export default SolarCalculatorForm;
