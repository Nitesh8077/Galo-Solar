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

  const [formErrors, setFormErrors] = useState({});
  const [submissionStatus, setSubmissionStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setFormErrors({ ...formErrors, [name]: "" }); // Clear error on change
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    let errors = {};
    Object.keys(formData).forEach((key) => {
      if (formData[key].trim() === "" && key !== "city") {
        // Assume city is optional
        errors[key] = "This field is required.";
      }
    });

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setSubmissionStatus("Please wait...");

    emailjs
      .send(
        "service_yc9r8to", // Replace with your EmailJS service ID
        "template_g1m4nmr", // Replace with your EmailJS template ID
        formData,
        "0nQcDotTo-9_-pFPG" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          setSubmissionStatus("Message sent successfully");
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
          setIsSubmitting(false);
          setTimeout(() => {
            setSubmissionStatus("");
          }, 2000);
        },
        (error) => {
          setSubmissionStatus("There was an error submitting the form.");
          setIsSubmitting(false);
        }
      );
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
          <div className="relative">
            <input
              type="text"
              name="name"
              placeholder="Your Name*"
              className="form-input rounded-lg h-10 w-full pl-2"
              value={formData.name}
              onChange={handleChange}
            />
            {formErrors.name && (
              <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
                {formErrors.name}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              name="companyName"
              placeholder="Company Name*"
              className="form-input rounded-lg h-10 w-full pl-2"
              value={formData.companyName}
              onChange={handleChange}
            />
            {formErrors.companyName && (
              <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
                {formErrors.companyName}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              name="contactNo"
              placeholder="Contact No.*"
              className="form-input rounded-lg w-full h-10 pl-2"
              value={formData.contactNo}
              onChange={handleChange}
            />
            {formErrors.contactNo && (
              <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
                {formErrors.contactNo}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="email"
              name="email"
              placeholder="Email id *"
              className="form-input rounded-lg w-full h-10 pl-2"
              value={formData.email}
              onChange={handleChange}
            />
            {formErrors.email && (
              <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
                {formErrors.email}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              name="city"
              placeholder="City"
              className="form-input rounded-lg w-full h-10 pl-2"
              value={formData.city}
              onChange={handleChange}
            />
            {formErrors.city && (
              <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
                {formErrors.city}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              name="state"
              placeholder="State *"
              className="form-input rounded-lg w-full h-10 pl-2"
              value={formData.state}
              onChange={handleChange}
            />
            {formErrors.state && (
              <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
                {formErrors.state}
              </p>
            )}
          </div>
        </div>
        <div className="relative">
          <label className="block mb-2 font-bold">
            Interested to work as *
          </label>
          <select
            name="interestedAs"
            className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
            value={formData.interestedAs}
            onChange={handleChange}
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
          {formErrors.interestedAs && (
            <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
              {formErrors.interestedAs}
            </p>
          )}
        </div>
        <div className="relative">
          <label className="block mb-2 font-bold">
            Business Organization Type *
          </label>
          <select
            name="businessType"
            className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
            value={formData.businessType}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            {["Proprietorship", "Partnership", "Corporation"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {formErrors.businessType && (
            <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
              {formErrors.businessType}
            </p>
          )}
        </div>
        <div className="relative">
          <label className="block mb-2 font-bold">Interested in</label>
          <select
            name="interestedIn"
            className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
            value={formData.interestedIn}
            onChange={handleChange}
          >
            <option value="">Select an option</option>
            {["Products", "EPC Services", "Both"].map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
          {formErrors.interestedIn && (
            <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
              {formErrors.interestedIn}
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              type="text"
              name="gstNumber"
              placeholder="GST Number *"
              className="form-input rounded-lg w-full h-10 pl-2"
              value={formData.gstNumber}
              onChange={handleChange}
            />
            {formErrors.gstNumber && (
              <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
                {formErrors.gstNumber}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              type="text"
              name="panNumber"
              placeholder="Pan Number *"
              className="form-input rounded-lg w-full h-10 pl-2"
              value={formData.panNumber}
              onChange={handleChange}
            />
            {formErrors.panNumber && (
              <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
                {formErrors.panNumber}
              </p>
            )}
          </div>
        </div>
        <div className="relative">
          <label className="block mb-2 font-bold">
            Where did you hear about us?
          </label>
          <select
            name="hearAboutUs"
            className="form-select rounded-lg block w-full pl-3 pr-10 py-2 text-base leading-normal"
            value={formData.hearAboutUs}
            onChange={handleChange}
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
          {formErrors.hearAboutUs && (
            <p className="text-red-500 text-sm absolute left-0 top-full mt-1">
              {formErrors.hearAboutUs}
            </p>
          )}
        </div>

        <div className="text-center mt-6">
          <button
            type="submit"
            className="w-full p-4 bg-black text-yellow-400 font-bold rounded-md hover:bg-gray-800 transition duration-300"
            disabled={isSubmitting}
          >
            Send Message
          </button>
        </div>
        {submissionStatus && (
          <div className="mt-4 text-center text-xl font-bold">
            {submissionStatus}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
