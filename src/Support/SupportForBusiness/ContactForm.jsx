import React, { useEffect, useState } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    companyName: "",
    contactNo: "",
    email: "",
    city: "",
    state: "",
    interestedAs: "",
    businessType: "",
    interestedIn: "",
    gstNumber: "",
    panNumber: "",
    hearAboutUs: "",
  });

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_yc9r8to", // Replace with your EmailJS service ID
        "template_g1m4nmr", // Replace with your EmailJS template ID
        formData,
        "0nQcDotTo-9_-pFPG" // Replace with your EmailJS user ID (optional if required)
      )
      .then((result) => {
        console.log("Email successfully sent!", result.text);
      })
      .catch((error) => {
        console.error("There was an error sending the email", error);
      });

    setFormData({
      name: "",
      companyName: "",
      contactNo: "",
      email: "",
      city: "",
      state: "",
      interestedAs: "",
      businessType: "",
      interestedIn: "",
      gstNumber: "",
      panNumber: "",
      hearAboutUs: "",
    });
  };

  return (
    <div className="bg-yellow-500 p-8">
      <h1 className="text-3xl font-bold text-center" data-aos="fade-down">
        GROW YOUR BUSINESS WITH GALO ENERGY
      </h1>
      <p className="text-center mt-4" data-aos="fade-up">
        Welcome to Galo Energy. We are the fastest growing manufacturer of A1
        Quality Solar PV modules and we also engaged in offering EPC services.
        Our aim towards customer delight drives us to offer outstanding post
        sales service. Let's join our hands and excel together in the most
        potential solar industry.
      </p>
      <p className="text-center mt-4 font-bold" data-aos="fade-up">
        All fields marked with an asterisk (*) are required
      </p>
      <form
        className="mt-8 space-y-6"
        data-aos="fade-up"
        onSubmit={handleSubmit}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            className="form-input rounded-lg h-10 pl-2"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="companyName"
            placeholder="Company Name*"
            className="form-input rounded-lg h-10 pl-2"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="contactNo"
            placeholder="Contact No.*"
            className="form-input rounded-lg h-10 pl-2"
            value={formData.contactNo}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email id *"
            className="form-input rounded-lg h-10 pl-2"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="city"
            placeholder="City"
            className="form-input rounded-lg h-10 pl-2"
            value={formData.city}
            onChange={handleChange}
          />
          <input
            type="text"
            name="state"
            placeholder="State *"
            className="form-input rounded-lg h-10 pl-2"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-bold">
            Interested to work as *
          </label>
          <div className="relative">
            <select
              name="interestedAs"
              className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
              value={formData.interestedAs}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {[
                "Distributor",
                "Retailer",
                "C&S",
                "System Integrator",
                "Supplier",
                "Channel Partner for Projects",
                "Partner for Exports",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-bold">
            Business Organization Type *
          </label>
          <div className="relative">
            <select
              name="interestedAs"
              className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
              value={formData.interestedAs}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {["Proprietorship", "Partnership", "Corporation"].map(
                (option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                )
              )}
            </select>
          </div>
        </div>
        <div>
          <label className="block mb-2 font-bold">Interested in</label>
          <div className="relative">
            <select
              name="interestedAs"
              className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
              value={formData.interestedAs}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              {["Products", "EPC Services", "Both"].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            name="gstNumber"
            placeholder="GST Number *"
            className="form-input rounded-lg h-10 pl-2"
            value={formData.gstNumber}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="panNumber"
            placeholder="Pan Number *"
            className="form-input rounded-lg h-10 pl-2"
            value={formData.panNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label className="block mb-2 font-bold">
            Where did you hear about us?
          </label>
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
                "Print Media",
                "Social Media",
                "Search Engine",
                "Employee Referral",
                "External Referral",
                "Trade Shows",
                "Web Advertisements",
                "Conference OR Meet",
                "Others",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="text-center mt-6">
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

export default ContactForm;
