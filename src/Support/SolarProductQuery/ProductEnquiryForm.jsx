// ProductEnquiryForm.js
import React, { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const ProductEnquiryForm = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div className="bg-yellow-500 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4" data-aos="fade-up">
        PRODUCT ENQUIRY FORM
      </h1>
      <p className="text-center mb-6" data-aos="fade-up" data-aos-delay="100">
        Welcome to Galo Energy. We are the fastest growing manufacturer of A1
        Quality Solar PV modules and we also engaged in offering EPC services.
        Our aim towards customer delight drives us to offer outstanding post
        sales service. Let’s join our hands and excel together in the most
        potential solar industry.
      </p>
      <p className="text-center mb-6" data-aos="fade-up" data-aos-delay="200">
        All fields marked with an asterisk (
        <span className="text-red-500">*</span>) are required
      </p>
      <form
        className="max-w-4xl mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2"
        data-aos="fade-up"
        data-aos-delay="300"
      >
        <input
          className="p-3 rounded-md border border-gray-300"
          type="text"
          placeholder="Your Name*"
        />
        <input
          className="p-3 rounded-md border border-gray-300"
          type="text"
          placeholder="Company Name*"
        />
        <input
          className="p-3 rounded-md border border-gray-300"
          type="text"
          placeholder="Contact No.*"
        />
        <input
          className="p-3 rounded-md border border-gray-300"
          type="email"
          placeholder="Email id*"
        />
        <textarea
          className="p-3 rounded-md border border-gray-300 sm:col-span-2"
          placeholder="Address"
        ></textarea>
        <input
          className="p-3 rounded-md border border-gray-300"
          type="text"
          placeholder="City"
        />
        <input
          className="p-3 rounded-md border border-gray-300"
          type="text"
          placeholder="State*"
        />
        <div className="sm:col-span-2" data-aos="fade-up" data-aos-delay="400">
          <p className="mb-2">
            Interested to work as <span className="text-red-500">*</span>
          </p>
          <select className="p-3 rounded-md border border-gray-300 w-full">
            <option value="" disabled selected>
              Select an option
            </option>
            <option value="Option1">Monocrystalline PV Modules</option>
            <option value="Option2">PERC Monocrystalline PV Modules</option>
            <option value="Option3">Solar Hybrid Inverters</option>
            <option value="Option4">Charge Controllers</option>
            <option value="Option5">Solar Combos</option>
          </select>
        </div>
        <div className="sm:col-span-2 flex justify-center mt-6">
          <button
            type="submit"
            className="w-full p-4 bg-black text-yellow-400 font-bold rounded-md hover:bg-gray-800 transition duration-300"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProductEnquiryForm;
