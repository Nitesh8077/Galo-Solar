import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "/images/CURCUIT3.png";
import axios from "axios";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    SolarFor: "",
    Pincode: "",
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
      }
    } else if (name === "Pincode") {
      if (!/^\d*$/.test(value)) {
        errorMessage = "Pincode must contain only numbers";
      } else if (value.length !== 6) {
        errorMessage = "Pincode Number must be exactly 6 digits long";
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
      newErrors.SolarFor = "SolarFor is required";
      isValid = false;
    }
    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone Number is required";
      isValid = false;
    } else if (!/^\d*$/.test(formData.Phone)) {
      newErrors.Phone = "Phone Number must contain only digits";
      isValid = false;
    } else if (formData.Phone.length < 10) {
      newErrors.Phone = "Phone number must be at least 10 digits long";
      isValid = false;
    } else if (formData.Phone.length > 10) {
      newErrors.Phone = "Phone Number must be up to 10 digits long";
      isValid = false;
    }
    if (formData.Pincode.trim() !== "") {
      if (!/^\d*$/.test(formData.Pincode)) {
        newErrors.Pincode = "Pincode must contain only numbers";
        isValid = false;
      } else if (formData.Pincode.length !== 6) {
        newErrors.Pincode = "Pincode Number must be exactly 6 digits long";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);
    setSuccessMessage("");

    try {
      const url =
        "https://sheet.best/api/sheets/46bd3bb7-6f72-4e61-9eaf-1bae2dd261d4"; // Ensure this is the correct URL
      console.log("Submitting data to:", url);
      console.log("Form data:", formData);

      const response = await axios.post(url, formData);
      console.log(response);
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        Name: "",
        Phone: "",
        SolarFor: "",
        Pincode: "",
        Remark: "",
      });
    } catch (error) {
      console.error(
        "Error submitting form:",
        error.response ? error.response.data : error.message
      );
      setSuccessMessage("An error occurred. Please try again.");
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
          Illuminate Your Future with Solar Energy – Start with a Free Check-Up!
        </p>
        <p className="text-lg md:text-xl mt-4">
          Ready to brighten your home with solar energy? Begin with a
          complimentary consultation from our expert team.{" "}
          <br className="mt-4" />
          Connect with us today to explore how solar can transform
          <br /> your energy use and savings!
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
                Whatsapp Number<span className="text-red-600 ml-1">*</span>
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
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Solar For<span className="text-red-600 ml-1">*</span>
              </label>
              <select
                name="SolarFor"
                value={formData.SolarFor}
                onChange={handleChange}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              >
                <option value="">Select...</option>
                <option value="Homes">Homes</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
              {errors.SolarFor && (
                <p className="text-red-500 text-xs mt-1">{errors.SolarFor}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Remark
              </label>
              <input
                name="Remark"
                value={formData.Remark}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-black text-yellow-400 w-full rounded-md"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          {successMessage && (
            <div className="mt-4 text-green-500 flex justify-center font-bold">
              {successMessage}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
