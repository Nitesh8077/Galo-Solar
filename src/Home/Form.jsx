import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import countrydata from "../Data/Countrydata.json";
import backgroundImg from "/images/CURCUIT3.png";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [locationType, setLocationType] = useState("india");
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [states, setStates] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState("");
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    SolarFor: "",
    Pincode: "",
    City: "",
    State: "",
    Remark: "",
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const getStates = () => {
      if (locationType === "outside" && selectedCountryId) {
        const country = countrydata.find(
          (country) => country.country_id === selectedCountryId
        );
        return country ? country.states : [];
      } else if (locationType === "india") {
        const india = countrydata.find(
          (country) => country.country_name === "India"
        );
        return india ? india.states : [];
      }
      return [];
    };

    setStates(getStates());
  }, [locationType, selectedCountryId]);

  const handleCountryChange = (e) => {
    setSelectedCountryId(e.target.value);
    setFormData((prev) => ({
      ...prev,
      Country: e.target.value,
      State: "",
      City: "",
    }));
    setSelectedStateId("");
  };

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setSelectedStateId(stateId);
    const state = states.find((state) => state.state_id === stateId);
    if (state) {
      setFormData((prev) => ({ ...prev, State: state.state_name }));
    }
  };

  const handleLocationTypeChange = (e) => {
    const newLocationType = e.target.value;
    setLocationType(newLocationType);
    setSelectedCountryId("");
    setSelectedStateId("");
    setStates([]);
    setFormData((prev) => ({ ...prev, State: "", City: "", Country: "" }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    let errorMessage = "";
    if (name === "Name" && !/^[a-zA-Z\s]*$/.test(value)) {
      errorMessage = "Name must contain only letters and spaces";
    } else if (name === "Phone") {
      if (!/^\d*$/.test(value)) {
        errorMessage = "Phone Number must contain only digits";
      } else if (locationType === "india") {
        if (value.length < 10) {
          errorMessage = "Phone number must be at least 10 digits long";
        } else if (value.length > 10) {
          errorMessage = "Phone Number must be up to 10 digits long";
        }
      } else if (locationType === "outside") {
        if (value.length < 5) {
          errorMessage = "Phone Number must be at least 5 digits long";
        } else if (value.length > 15) {
          errorMessage = "Phone Number must be up to 15 digits long";
        }
      }
    } else if (name === "Pincode") {
      if (!/^\d*$/.test(value)) {
        errorMessage = "Pincode must contain only numbers";
      } else if (locationType === "india" && value.length !== 6) {
        errorMessage = "Pincode Number must be exactly 6 digits long";
      } else if (locationType === "outside" && value.length > 10) {
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
    if (!formData.State.trim()) {
      newErrors.State = "State is required";
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
    } else if (locationType === "india") {
      if (formData.Phone.length < 10) {
        newErrors.Phone = "Phone number must be at least 10 digits long";
        isValid = false;
      } else if (formData.Phone.length > 10) {
        newErrors.Phone = "Phone Number must be up to 10 digits long";
        isValid = false;
      }
    } else if (locationType === "outside") {
      if (formData.Phone.length < 5) {
        newErrors.Phone = "Phone Number must be at least 5 digits long";
        isValid = false;
      } else if (formData.Phone.length > 15) {
        newErrors.Phone = "Phone Number must be up to 15 digits long";
        isValid = false;
      }
    }
    if (!formData.SolarFor.trim()) {
      newErrors.SolarFor = "Please select an option for Solar For";
      isValid = false;
    }
    if (formData.Pincode.trim() !== "") {
      // Only validate if Pincode is not empty
      if (!/^\d*$/.test(formData.Pincode)) {
        newErrors.Pincode = "Pincode must contain only numbers";
        isValid = false;
      } else if (locationType === "india" && formData.Pincode.length !== 6) {
        newErrors.Pincode = "Pincode Number must be exactly 6 digits long";
        isValid = false;
      } else if (locationType === "outside" && formData.Pincode.length > 10) {
        newErrors.Pincode = "Pincode must be up to 10 digits long";
        isValid = false;
      }
    }

    setErrors(newErrors);
    return isValid;
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
          body: new URLSearchParams(formData).toString(),
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
          State: "",
          Remark: "",
        });
        setSelectedCountryId("");
        setSelectedStateId("");
        setStates([]);
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center bg-yellow-400 p-4"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div
        className="text-center md:text-left mb-6 md:mb-0 md:w-1/2"
        data-aos="fade-right"
      >
        <h1 className="text-black text-2xl md:text-5xl font-bold">
          Illuminate Your Future with Solar Energy - Start with a Free Check-Up!
        </h1>
        <p className="text-black text-sm md:text-xl mt-4">
          Ready to brighten your home with solar energy? Begin with a
          complimentary consultation from our expert team.
          <br className="pb-10" /> Connect with us today to explore how solar
          can transform your energy use and savings!
        </p>
      </div>
      <div
        className="bg-white p-4 md:p-6 rounded-lg shadow-lg md:w-1/2"
        data-aos="fade-left"
      >
        <form className="space-y-2 md:space-y-3" onSubmit={handleSubmit}>
          {/* Location Type */}
          <div className="flex items-center mb-4">
            <label className="mr-4">
              <input
                type="radio"
                name="locationType"
                value="india"
                checked={locationType === "india"}
                onChange={handleLocationTypeChange}
                className="mr-2"
              />
              India
            </label>
            <label>
              <input
                type="radio"
                name="locationType"
                value="outside"
                checked={locationType === "outside"}
                onChange={handleLocationTypeChange}
                className="mr-2"
              />
              Outside India
            </label>
          </div>

          {/* Country Dropdown */}
          {locationType === "outside" && (
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country
              </label>
              <select
                id="country"
                name="country"
                value={selectedCountryId}
                onChange={handleCountryChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>
                  Select Country
                </option>
                {countrydata
                  .filter((country) => country.country_name !== "India")
                  .map((country) => (
                    <option key={country.country_id} value={country.country_id}>
                      {country.country_name}
                    </option>
                  ))}
              </select>
            </div>
          )}

          {/* State Dropdown */}
          {(locationType === "india" || selectedCountryId) && (
            <div className="mb-4">
              <label
                htmlFor="state"
                className="block text-sm font-medium text-gray-700"
              >
                State
              </label>
              <select
                id="state"
                name="state"
                value={selectedStateId}
                onChange={handleStateChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="" disabled>
                  Select State
                </option>
                {states.map((state) => (
                  <option key={state.state_id} value={state.state_id}>
                    {state.state_name}
                  </option>
                ))}
              </select>
            </div>
          )}

          {/* Form Fields */}
          <div className="mb-4">
            <label
              htmlFor="Name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="Name"
              name="Name"
              value={formData.Name}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.Name && (
              <p className="text-red-500 text-xs mt-1">{errors.Name}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="Phone"
              name="Phone"
              value={formData.Phone}
              onChange={handleChange}
              maxLength={locationType === "india" ? "10" : "15"} // Set max length based on location type
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.Phone && (
              <p className="text-red-500 text-xs mt-1">{errors.Phone}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="SolarFor"
              className="block text-sm font-medium text-gray-700"
            >
              Solar For
            </label>
            <select
              id="SolarFor"
              name="SolarFor"
              value={formData.SolarFor}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
              <option value="" disabled>
                Select
              </option>
              <option value="Home">Home</option>
              <option value="Business">Residential</option>
              <option value="Business">Business</option>
              <option value="Business">Others</option>
            </select>
            {errors.SolarFor && (
              <p className="text-red-500 text-xs mt-1">{errors.SolarFor}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Pincode"
              className="block text-sm font-medium text-gray-700"
            >
              Pincode
            </label>
            <input
              type="text"
              id="Pincode"
              name="Pincode"
              value={formData.Pincode}
              maxLength={locationType === "india" ? 6 : 10}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.Pincode && (
              <p className="text-red-500 text-xs mt-1">{errors.Pincode}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="City"
              className="block text-sm font-medium text-gray-700"
            >
              City
            </label>
            <input
              type="text"
              id="City"
              name="City"
              value={formData.City}
              onChange={handleChange}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
            {errors.City && (
              <p className="text-red-500 text-xs mt-1">{errors.City}</p>
            )}
          </div>

          <div className="mb-4">
            <label
              htmlFor="Remark"
              className="block text-sm font-medium text-gray-700"
            >
              Remark (Optional)
            </label>
            <textarea
              id="Remark"
              name="Remark"
              value={formData.Remark}
              onChange={handleChange}
              rows="3"
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-blue-500 text-white px-4 py-2 rounded-md shadow-sm hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
