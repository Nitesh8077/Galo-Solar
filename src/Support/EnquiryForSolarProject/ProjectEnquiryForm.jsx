// ProjectEnquiryForm.js
import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";

const ProjectEnquiryForm = () => {
  const [formData, setFormData] = useState({
    hearAboutUs: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-yellow-500 py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-4" data-aos="fade-up">
        PROJECT ENQUIRY FORM
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

        <div className="relative">
          <select className="p-3 rounded-md border border-gray-300 w-full">
            <option value="">Types of Solar Power System Required *</option>
            <option value="1">Off-grid or Stand Alone</option>
            <option value="2">Hybrid System</option>
          </select>
        </div>

        <div className="relative">
          <select className="p-3 rounded-md border border-gray-300 w-full">
            <option value="">Installation Type *</option>
            <option value="1">Rooftop</option>
            <option value="2">On Ground</option>
          </select>
        </div>

        <div className="relative">
          <select className="p-3 rounded-md border border-gray-300 w-full">
            <option value="">Type of Customers *</option>
            <option value="1">Residential</option>
            <option value="2">Commercial</option>
            <option value="3">Reselling</option>
          </select>
        </div>

        <input
          className="p-3 rounded-md border border-gray-300"
          type="text"
          placeholder="Project Size in (kW) *"
        />

        <div className="sm:col-span-2">
          <label className="block mb-2 font-bold">Motivation to go Solar</label>
          <div className="relative">
            <select
              name="hearAboutUs"
              className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
              value={formData.hearAboutUs}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {[
                "Corporate Social Responsibility",
                "Lower Dependence on Grid Power",
                "Lower Bill of Energy",
                "Strategic Branding of organization as Green",
                "Tax Benefits",
                "Pilot Project for Large scale project development",
                "Source of additional Income",
                "Others",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="sm:col-span-2">
          <label className="block mb-2 font-bold">Service Interested in</label>
          <div className="relative">
            <select
              name="hearAboutUs"
              className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
              value={formData.hearAboutUs}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {[
                "Complete EPC",
                "Supply Installation & Commisiioning (I&C)",
                "Operation & Maintenance (O&M)",
                "Others",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
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

export default ProjectEnquiryForm;
