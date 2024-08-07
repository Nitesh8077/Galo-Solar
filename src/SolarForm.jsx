import React, { useState, useEffect } from "react";
import countryData from "./Data/Countrydata.json"; // Ensure your JSON file is correctly imported

const SolarForm = () => {
  const [region, setRegion] = useState("India");
  const [formData, setFormData] = useState({
    country: "",
    state: "",
    name: "",
    phoneNumber: "",
    city: "",
    pincode: "",
    solarFor: "",
    remark: "",
  });

  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (region === "India") {
      setCountries([]); // Define Indian states if needed
      setStates(
        countryData.find((country) => country.country_name === "India")
          ?.states || []
      );
    } else {
      setCountries(countryData.map((country) => country.country_name));
      setStates([]);
    }
  }, [region]);

  const handleRegionChange = (e) => {
    setRegion(e.target.value);
    setFormData({
      ...formData,
      country: "",
      state: "",
    });
  };

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    setFormData({
      ...formData,
      country: selectedCountry,
      state: "",
    });
    const country = countryData.find(
      (country) => country.country_name === selectedCountry
    );
    setStates(country ? country.states : []);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let formErrors = {};

    if (region === "India") {
      if (formData.phoneNumber && formData.phoneNumber.length !== 10) {
        formErrors.phoneNumber = "Phone number must be exactly 10 digits";
      }
      if (formData.pincode && formData.pincode.length !== 6) {
        formErrors.pincode = "Pincode must be exactly 6 digits";
      }
    } else {
      if (!formData.country) formErrors.country = "Country is required";
      if (!formData.state) formErrors.state = "State is required";
      if (!formData.name) formErrors.name = "Name is required";
      if (!formData.phoneNumber)
        formErrors.phoneNumber = "Phone Number is required";
      if (!formData.city) formErrors.city = "City is required";
      if (!formData.solarFor) formErrors.solarFor = "Solar For is required";

      if (
        formData.phoneNumber &&
        (formData.phoneNumber.length < 10 || formData.phoneNumber.length > 15)
      ) {
        formErrors.phoneNumber = "Phone number must be between 10 to 15 digits";
      }
      if (formData.pincode && formData.pincode.length > 10) {
        formErrors.pincode = "Pincode must be up to 10 digits";
      }
    }

    if (!formData.name) formErrors.name = "Name is required";
    if (!formData.phoneNumber)
      formErrors.phoneNumber = "Phone Number is required";
    if (!formData.city) formErrors.city = "City is required";
    if (!formData.solarFor) formErrors.solarFor = "Solar For is required";

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Export form data to JSON format
    const jsonData = JSON.stringify(formData, null, 2);
    console.log("Form Data:", jsonData);

    // Make API call to submit form data
    fetch(
      "https://script.google.com/macros/s/AKfycbw2x-tcBNWVQ-vU6Z2L-v7JpgY9mNCQiDrkbpN8v5jo5HEl8mFWDeiilEsum7JOxxmeJw/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((response) => response.text())
      .then((result) => {
        console.log(result);
        // Handle success
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error
      });
  };

  return (
    <form
      className="max-w-lg mx-auto p-4 border border-yellow-500 rounded-md shadow-md"
      onSubmit={handleSubmit}
    >
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Select Your Region *
        </label>
        <div className="mt-1">
          <label className="inline-flex items-center">
            <input
              type="radio"
              name="region"
              value="India"
              checked={region === "India"}
              onChange={handleRegionChange}
              className="form-radio"
            />
            <span className="ml-2">India</span>
          </label>
          <label className="inline-flex items-center ml-6">
            <input
              type="radio"
              name="region"
              value="Outside India"
              checked={region === "Outside India"}
              onChange={handleRegionChange}
              className="form-radio"
            />
            <span className="ml-2">Outside India</span>
          </label>
        </div>
      </div>

      {region === "Outside India" && (
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700">
            Country *
          </label>
          <select
            name="country"
            value={formData.country}
            onChange={handleCountryChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          >
            <option value="">Select Country</option>
            {countries.map((country) => (
              <option key={country} value={country}>
                {country}
              </option>
            ))}
          </select>
          {errors.country && (
            <p className="text-red-500 text-sm">{errors.country}</p>
          )}
        </div>
      )}

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          State *
        </label>
        <select
          name="state"
          value={formData.state}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        >
          <option value="">Select State</option>
          {states.map((state) => (
            <option key={state.state_id} value={state.state_name}>
              {state.state_name}
            </option>
          ))}
        </select>
        {errors.state && <p className="text-red-500 text-sm">{errors.state}</p>}
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Phone Number *
          </label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
          {errors.phoneNumber && (
            <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
          )}
        </div>
      </div>

      <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            City/District/Region *
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
          {errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Pincode
          </label>
          <input
            type="text"
            name="pincode"
            value={formData.pincode}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
          />
          {errors.pincode && (
            <p className="text-red-500 text-sm">{errors.pincode}</p>
          )}
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Solar For *
        </label>
        <select
          name="solarFor"
          value={formData.solarFor}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        >
          <option value="">Select</option>
          <option value="Home">Home</option>
          <option value="Business">Business</option>
        </select>
        {errors.solarFor && (
          <p className="text-red-500 text-sm">{errors.solarFor}</p>
        )}
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Remark
        </label>
        <input
          type="text"
          name="remark"
          value={formData.remark}
          onChange={handleChange}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"
        />
      </div>

      <button
        type="submit"
        className="w-full bg-yellow-500 text-black py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
      >
        Go Solar!
      </button>
    </form>
  );
};

export default SolarForm;
