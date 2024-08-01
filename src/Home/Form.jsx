import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CitySelect,
  CountrySelect,
  StateSelect,
} from "react-country-state-city";
import "react-country-state-city/dist/react-country-state-city.css";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [countryId, setCountryId] = useState(0);
  const [stateId, setStateId] = useState(0);

  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    SolarFor: "",
    Pincode: "",
    City: "",
    Remark: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "Name" && !/^[a-zA-Z\s]*$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Name must contain only letters and spaces",
      });
    } else if (name === "Phone" && !/^[\d\s]*$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Phone Number must contain only digits",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    if (!formData.Name.trim()) {
      newErrors.Name = "Name is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.Name)) {
      newErrors.Name = "Name must contain only letters and spaces";
      valid = false;
    }

    if (!formData.Phone.trim()) {
      newErrors.Phone = "Phone Number is required";
      valid = false;
    } else if (!/^[\d\s]*$/.test(formData.Phone)) {
      newErrors.Phone = "Phone Number must contain only digits";
      valid = false;
    }

    if (!formData.SolarFor.trim()) {
      newErrors.SolarFor = "Please select an option for Solar For";
      valid = false;
    }

    if (!formData.Pincode.trim()) {
      newErrors.Pincode = "Pincode is required";
      valid = false;
    }

    if (!formData.City.trim()) {
      newErrors.City = "City is required";
      valid = false;
    }

    if (countryId === 0) {
      newErrors.Country = "Please select a country";
      valid = false;
    } else if (stateId === 0) {
      newErrors.State = "Please select a state after selecting a country";
      valid = false;
    } else if (stateId !== 0 && formData.City === "") {
      newErrors.City = "Please select a city after selecting a state";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbx7EVqE_Zr93xS0kAVMoMoPyFflg38NTAEgw-x6blFk9jK0nqceI9FF65Vf7sRNEOcN0g/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: new URLSearchParams({
            Name: formData.Name,
            Phone: formData.Phone,
            SolarFor: formData.SolarFor,
            Pincode: formData.Pincode,
            City: formData.City,
            Remark: formData.Remark,
          }).toString(),
        }
      );

      if (response.ok) {
        alert("Form submitted successfully!");
        setFormData({
          Name: "",
          Phone: "",
          SolarFor: "",
          Pincode: "",
          City: "",
          Remark: "",
        });
        setCountryId(0);
        setStateId(0);
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

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
        <form className="space-y-2 md:space-y-3" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Country
            </label>
            <CountrySelect
              onChange={(e) => {
                setCountryId(e.id);
                setStateId(0); // Reset state and city when country changes
                setFormData({
                  ...formData,
                  City: "", // Clear city selection
                });
              }}
              placeHolder="Select Country"
            />
            {errors.Country && (
              <p className="text-red-500 text-xs">{errors.Country}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                errors.Name ? "border-red-500" : ""
              }`}
              required
            />
            {errors.Name && (
              <p className="text-red-500 text-xs">{errors.Name}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                errors.Phone ? "border-red-500" : ""
              }`}
              required
            />
            {errors.Phone && (
              <p className="text-red-500 text-xs">{errors.Phone}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Want solar rooftop for?
            </label>
            <select
              name="SolarFor"
              value={formData.SolarFor}
              onChange={handleChange}
              className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                errors.SolarFor ? "border-red-500" : ""
              }`}
              required
            >
              <option value="">Select an option</option>
              <option value="home">Home</option>
              <option value="business">Office</option>
              <option value="other">Other</option>
            </select>
            {errors.SolarFor && (
              <p className="text-red-500 text-xs">{errors.SolarFor}</p>
            )}
          </div>

          <div className="flex gap-2 md:gap-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                State
              </label>
              <StateSelect
                countryid={countryId}
                onChange={(e) => {
                  setStateId(e.id);
                  setFormData({
                    ...formData,
                    City: "", // Clear city selection when state changes
                  });
                }}
                placeHolder="Select State"
              />
              {errors.State && (
                <p className="text-red-500 text-xs">{errors.State}</p>
              )}
            </div>
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                City
              </label>
              <CitySelect
                countryid={countryId}
                stateid={stateId}
                onChange={(e) => {
                  setFormData({
                    ...formData,
                    City: e.name,
                  });
                }}
                placeHolder="Select City"
              />
              {errors.City && (
                <p className="text-red-500 text-xs">{errors.City}</p>
              )}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Remark
            </label>
            <input
              type="text"
              name="Remark"
              value={formData.Remark}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2"
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
