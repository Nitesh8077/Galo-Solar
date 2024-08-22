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
    SolarFor: "",
    Pincode: "",
    City: "",
    State: "",
    Remark: "",
    DateTime: "",
    Country: "India",
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
      } else if (value.length < 10) {
        errorMessage = "Phone number must be at least 10 digits long";
      } else if (value.length > 10) {
        errorMessage = "Phone Number must be up to 10 digits long";
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
  const sendEmail = async (datab) => {
    console.log("Submitting form to Gautam Solar API...");

    try {
      const response = await fetch("https://gautamsolar.us/submit-delhi", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(datab),
      });

      console.log("Response:", response);

      if (response.ok) {
        console.log("Form submitted successfully to Gautam Solar API");
      } else {
        console.error("Failed to submit form to Gautam Solar API");
      }
    } catch (error) {
      console.error("Error submitting form to Gautam Solar API:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // Format the current date as dd/mm/yy
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, "0");
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const year = String(currentDate.getFullYear()).slice(-2);
    const formattedDate = `${day}/${month}/${year}`;

    const updatedFormData = { ...formData, DateTime: formattedDate };

    try {
      // Sending form data to the new API
      await sendEmail(updatedFormData);

      // Sending form data to the Google Sheets API
      const formEle = document.querySelector("form");
      const formDatab = new FormData(formEle);
      formDatab.append("DateTime", formattedDate);

      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx1DUEmL-F_kWd0QA2olUMJ89QguDL6-etvwEUUgk2SKZ43o4UVAdh4kwi2heaU64Lk/exec",
        {
          method: "POST",
          body: formDatab,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseText = await response.text();
      console.log("Response Text:", responseText);

      if (responseText.includes("successfully sent")) {
        setSuccessMessage("Form submitted successfully!");
        setFormData({
          Name: "",
          Phone: "",
          Pincode: "",
          City: "",
          State: "",
          SolarFor: "",
          Remark: "",
          DateTime: "", // Reset DateTime
        });
        navigate("/thanks");
      } else {
        throw new Error("Unexpected response");
      }
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
                State<span className="text-red-600 ml-1">*</span>
              </label>
              <select
                name="State"
                value={formData.State}
                onChange={handleChange}
                className="block w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select a state</option>

                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Dadra and Nagar Haveli">
                  Dadra and Nagar Haveli
                </option>
                <option value="Daman and Diu">Daman and Diu</option>
                <option value="Delhi">Delhi</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Lakshadweep">Lakshadweep</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Pondicherry">Pondicherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              {errors.State && (
                <p className="text-red-500 text-xs mt-1">{errors.State}</p>
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
                className="block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Homes">Homes</option>
                <option value="Residential">Residential</option>
                <option value="Commercial/Industrial">
                  Commercial/Industrial
                </option>
              </select>
              {errors.SolarFor && (
                <p className="text-red-500 text-xs mt-1">{errors.SolarFor}</p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="block text-sm font-medium text-black">
              Remark
            </label>
            <input
              name="Remark"
              value={formData.Remark}
              onChange={handleChange}
              className="block w-full border border-gray-300 rounded-md p-2"
              rows="4"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-black"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
          {successMessage && (
            <p
              className={`mt-4 ${
                successMessage.includes("failed")
                  ? "text-red-500"
                  : "text-green-500"
              }`}
            >
              {successMessage}
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
