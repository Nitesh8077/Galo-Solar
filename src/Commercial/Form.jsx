import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import countrydata from "../Data/Countrydata.json";
import backgroundImg from "/images/CIRCUIT.png";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const indiaCountryId = "101"; // Ensure this is the correct ID for India

  const [countryId, setCountryId] = useState(indiaCountryId);
  const [state, setState] = useState([]);
  const [stateId, setStateId] = useState("");

  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    CName: "",
    SolarFor: "",
    Pincode: "",
    City: "",
    State: "",
    Remark: "",
  });

  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Find the country based on the countryId
    const selectedCountry = countrydata.find(
      (country) => country.country_id === countryId
    );
    if (selectedCountry) {
      setState(selectedCountry.states);
    }
  }, [countryId]);

  useEffect(() => {
    // Reset state and city when country changes
    setStateId("");
    setFormData((prev) => ({
      ...prev,
      City: "", // Clear city selection
      State: "", // Clear state selection
    }));
  }, [countryId]);

  const handleCountryChange = (e) => {
    const selectedCountryId = e.target.value;
    setCountryId(selectedCountryId);
  };

  const handleStateChange = (e) => {
    setStateId(e.target.value);
    const selectedState = state.find(
      (state) => state.state_id === e.target.value
    );
    if (selectedState) {
      setFormData((prev) => ({ ...prev, State: selectedState.state_name }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validation logic
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
    } else if (name === "Pincode" && !/^\d*$/.test(value)) {
      setErrors({
        ...errors,
        [name]: "Pincode must contain only numbers",
      });
    } else {
      setErrors({
        ...errors,
        [name]: "",
      });
    }
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
    if (!formData.State.trim()) {
      newErrors.State = "State is required";
      valid = false;
    }
    if (!formData.City.trim()) {
      newErrors.City = "City is required";
      valid = false;
    } else if (!/^[a-zA-Z\s]*$/.test(formData.City)) {
      newErrors.City = "City must contain only letters and spaces";
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

    // Pincode validation is now optional
    if (formData.Pincode && !/^\d*$/.test(formData.Pincode)) {
      newErrors.Pincode = "Pincode must contain only numbers";
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
            State: formData.State,
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
          State: "",
          Remark: "",
        });
        setCountryId(indiaCountryId); // Reset country to India
        setStateId("");
      } else {
        alert("Form submission failed. Please try again.");
      }
    } catch (error) {
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div
      className="flex flex-col md:flex-row items-center bg-black p-4"
      style={{ backgroundImage: `url(${backgroundImg})` }}
    >
      <div
        className="text-center md:text-left mb-6 md:mb-0 md:w-1/2"
        data-aos="fade-right"
      >
        <h1 className="text-yellow-400 text-2xl md:text-5xl font-bold">
          Power Up Your Business with Solar Energy – Start with a Free
          Assessment!
        </h1>
        <p className="text-white text-sm md:text-xl mt-4">
          Ready to optimize your commercial or industrial operations with solar
          energy? Schedule a complimentary consultation with our experts today.
        </p>
      </div>
      <div
        className="bg-white p-4 md:p-6 rounded-lg shadow-lg md:w-1/2"
        data-aos="fade-left"
      >
        <form className="space-y-2 md:space-y-3" onSubmit={handleSubmit}>
          {/* Country */}
          <label className="block text-sm font-medium text-gray-700">
            Country<span className="text-red-500">*</span>
          </label>
          <select
            name="country"
            className="form-control"
            onChange={handleCountryChange}
            className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 "
            value={countryId}
          >
            <option value="">--Select Country--</option>
            {countrydata.map((country, index) => (
              <option value={country.country_id} key={index}>
                {country.country_name}
              </option>
            ))}
          </select>

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name<span className="text-red-500">*</span>
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

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number<span className="text-red-500">*</span>
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
              Company's Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="CName"
              value={formData.CName}
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

          {/* Solar For */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Want solar rooftop for?<span className="text-red-500">*</span>
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
              <option value="home">Factory</option>
              <option value="other">Warehouse</option>
              <option value="other">Hotels/Resorts</option>
              <option value="other">Educational Institutions</option>
              <option value="other">Hospitals</option>
            </select>
            {errors.SolarFor && (
              <p className="text-red-500 text-xs">{errors.SolarFor}</p>
            )}
          </div>

          <div className="flex gap-2 md:gap-4">
            {/* State */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                State<span className="text-red-500">*</span>
              </label>
              <select
                name="states"
                className="form-control"
                onChange={handleStateChange}
                className="mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 "
                value={stateId}
              >
                <option value="">--Select State--</option>
                {state.map((stateItem, index) => (
                  <option value={stateItem.state_id} key={index}>
                    {stateItem.state_name}
                  </option>
                ))}
              </select>{" "}
              {errors.State && (
                <p className="text-red-500 text-xs">{errors.State}</p>
              )}
            </div>

            {/* City/District */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                City/District<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="City"
                value={formData.City}
                onChange={handleChange}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                  errors.City ? "border-red-500" : ""
                }`}
              />
              {errors.City && (
                <p className="text-red-500 text-xs">{errors.City}</p>
              )}
            </div>

            {/* Pincode */}
            <div className="flex-1">
              <label className="block text-sm font-medium text-gray-700">
                Pincode
              </label>
              <input
                type="text"
                name="Pincode"
                value={formData.Pincode}
                onChange={handleChange}
                className={`mt-1 block w-full border border-gray-300 rounded-md p-1 md:p-2 ${
                  errors.Pincode ? "border-red-500" : ""
                }`}
              />
              {errors.Pincode && (
                <p className="text-red-500 text-xs">{errors.Pincode}</p>
              )}
            </div>
          </div>

          {/* Remark */}
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
