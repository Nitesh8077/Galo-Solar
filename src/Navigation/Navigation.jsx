import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";

import backgroundImg from "/images/CURCUIT3.png";

const Form = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    City: "",
    Pincode: "",
    SolarFor: "",
    Remark: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let errorMessage = "";
    if (name === "Name" && !/^[a-zA-Z\s]*$/.test(value)) {
      errorMessage = "Name must contain only letters and spaces";
    } else if (name === "Phone") {
      if (!/^\d*$/.test(value)) {
        errorMessage = "Phone Number must contain only digits";
      } else if (value.length < 10 || value.length > 10) {
        errorMessage = "Phone Number must be exactly 10 digits long";
      }
    } else if (name === "Pincode") {
      if (!/^\d*$/.test(value)) {
        errorMessage = "Pincode must contain only numbers";
      } else if (value.length !== 6) {
        errorMessage = "Pincode must be exactly 6 digits long";
      }
    }

    setErrors((prev) => ({ ...prev, [name]: errorMessage }));
  };

  const validateForm = () => {
    let isValid = true;
    const newErrors = {};

    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.Name)) {
      newErrors.Name = "Name must contain only letters and spaces";
      isValid = false;
    }
    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d*$/.test(formData.Phone)) {
      newErrors.Phone = "Phone Number must contain only digits";
      isValid = false;
    } else if (formData.Phone.length !== 10) {
      newErrors.Phone = "Phone Number must be exactly 10 digits long";
      isValid = false;
    }
    if (!formData.City.trim()) {
      newErrors.City = "City is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.City)) {
      newErrors.City = "City must contain only letters and spaces";
      isValid = false;
    }
    if (!formData.SolarFor.trim()) {
      newErrors.SolarFor = "SolarFor is required";
      isValid = false;
    }
    if (
      formData.Pincode.trim() !== "" &&
      (formData.Pincode.length !== 6 || !/^\d*$/.test(formData.Pincode))
    ) {
      newErrors.Pincode = "Pincode must be exactly 6 digits long";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwm5guFuuWKA7GLbl3DL3551CYLZuBr3GqaLFgt6JICgunynMy98hszv9uz2KhrEztFgQ/exec",
        {
          method: "POST",
          body: formDatab,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        Name: "",
        Phone: "",
        City: "",
        Pincode: "",
        SolarFor: "",
        Remark: "",
      });

      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting form:", error);
      setSuccessMessage("Form submission failed. Please try again later.");
      navigate("/thanks");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center bg-yellow-400 p-4 bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div className="w-full md:w-1/2 p-4">
        <p className="text-3xl md:text-5xl font-bold">
          Empower Your Business with Solar Energy – Start Your Dealership
          Journey!
        </p>
        <p className="text-lg md:text-xl mt-4">
          Ready to expand your business with a thriving solar energy
          partnership? Begin with a personalized consultation from our
          experienced team.
          <br className="mt-4" />
          Connect with us today to explore how a Galo Solar dealership can
          transform your business growth and profitability!
        </p>
      </div>
      <div
        className="p-4 md:p-8 w-full md:w-1/2 mx-auto bg-white rounded-xl shadow-lg"
        data-aos="fade-up"
      >
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Name<span className="text-red-600 ml-1">*</span>
              </label>
              <input
                type="text"
                name="Name"
                value={formData.Name}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.Name && (
                <p className="text-red-500 text-xs mt-1">{errors.Name}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Phone Number<span className="text-red-600 ml-1">*</span>
              </label>
              <input
                type="text"
                name="Phone"
                value={formData.Phone}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.Phone && (
                <p className="text-red-500 text-xs mt-1">{errors.Phone}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                City/District/Region<span className="text-red-600 ml-1">*</span>
              </label>
              <input
                type="text"
                name="City"
                value={formData.City}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.City && (
                <p className="text-red-500 text-xs mt-1">{errors.City}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Solar For<span className="text-red-600 ml-1">*</span>
              </label>
              <input
                type="text"
                name="SolarFor"
                value={formData.SolarFor}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.SolarFor && (
                <p className="text-red-500 text-xs mt-1">{errors.SolarFor}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col space-y-4">
            <label className="block text-sm font-medium text-black">
              Remark
            </label>
            <textarea
              name="Remark"
              value={formData.Remark}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
              rows="4"
            />
          </div>

          {successMessage && (
            <p className="text-green-500 text-center">{successMessage}</p>
          )}

          <div className="flex justify-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
