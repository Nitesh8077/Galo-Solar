import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "/images/CURCUIT3.png";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const navigate = useNavigate();
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    SolarFor: "",
    Pincode: "",
    City: "",
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
        errorMessage = "Phone Number must be of 10 digits long";
      }
    } else if (name === "Pincode") {
      if (!/^\d*$/.test(value)) {
        errorMessage = "Pincode must contain only numbers";
      } else if (value.length > 10) {
        errorMessage = "Pincode must be up to 10 digits long";
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
    if (!formData.SolarFor.trim()) {
      newErrors.SolarFor = "PM-KUSUM Options is required";
      isValid = false;
    }
    if (!formData.City.trim()) {
      newErrors.City = "City is required";
      isValid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.City)) {
      newErrors.City = "City must contain only letters and spaces";
      isValid = false;
    }
    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d*$/.test(formData.Phone)) {
      newErrors.Phone = "Phone Number must contain only digits";
      isValid = false;
    } else if (formData.Phone.length < 10 || formData.Phone.length > 15) {
      newErrors.Phone = "Phone Number must be between 10 to 15 digits long";
      isValid = false;
    }
    if (formData.Pincode.trim() !== "" && !/^\d*$/.test(formData.Pincode)) {
      newErrors.Pincode = "Pincode must contain only numbers";
      isValid = false;
    } else if (formData.Pincode.length > 10) {
      newErrors.Pincode = "Pincode must be up to 10 digits long";
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
        "https://script.google.com/macros/s/AKfycbzKL5-p5Qb8W5QP0S274mxKWa_UQwm4JWJPI_skqySEyQU3-K1atrkDPBLOckSkHz0U0g/exec",
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
        SolarFor: "",
        Pincode: "",
        City: "",
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
          Harness the Sun, Empower Your Farm– Get a Free Solar Consultation
          Today!
        </p>
        <p className="text-lg md:text-xl mt-4">
          Ready to revolutionize your agricultural energy use with solar power?
          Start with a complimentary expert consultation. Discover how the
          PM-KUSUM scheme can transform your farm’s energy efficiency and
          savings –
          <p className="mt-4 font-bold" />
          Connect with us today!
          <p />
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
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Pincode
              </label>
              <input
                type="text"
                name="Pincode"
                value={formData.Pincode}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
              {errors.Pincode && (
                <p className="text-red-500 text-xs mt-1">{errors.Pincode}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                PM-KUSUM Options<span className="text-red-600 ml-1">*</span>
              </label>
              <select
                name="SolarFor"
                value={formData.SolarFor}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select an option</option>
                <option value="I have been selected for the PM-KUSUM scheme. ">
                  I have been selected for the PM-KUSUM scheme.{" "}
                </option>
                <option value="I want to participate in future PM-KUSUM tenders.">
                  I want to participate in future PM-KUSUM tenders.
                </option>
              </select>
              {errors.SolarFor && (
                <p className="text-red-500 text-xs mt-1">{errors.SolarFor}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-medium text-black">
              Remarks
            </label>
            <input
              name="Remark"
              value={formData.Remark}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
              rows="3"
            />
          </div>
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              className={`px-4 py-2 text-white font-bold w-full rounded-md ${
                loading ? "bg-gray-400" : "bg-black"
              }`}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
          {successMessage && (
            <div className="text-green-500 text-center mt-4">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
