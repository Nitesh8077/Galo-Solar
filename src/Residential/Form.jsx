import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import countrydata from "../Data/Countrydata.json";
import backgroundImg from "/images/CURCUIT3.png";
import axios from "axios";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [locationType, setLocationType] = useState("india");
  const [selectedCountryId, setSelectedCountryId] = useState("");
  const [states, setStates] = useState([]);
  const [selectedStateId, setSelectedStateId] = useState("");
  const [selectedOption, setSelectedOption] = useState("");
  const [formData, setFormData] = useState({
    Country: "",
    Name: "",
    Phone: "",
    AGM: "",
    Designation: "",
    SolarFor: "Residential",
    Pincode: "",
    City: "",
    State: "",
    Remark: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  // Create a mapping of country_id to country_name
  const countryMapping = countrydata.reduce((acc, country) => {
    acc[country.country_id] = country.country_name;
    return acc;
  }, {});

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
    const countryId = e.target.value;
    setSelectedCountryId(countryId);
    setFormData((prev) => ({
      ...prev,
      Country: countryId,
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
    setFormData((prev) => ({
      ...prev,
      State: "",
      City: "",
      Country: newLocationType === "india" ? "India" : "",
    }));
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
    if (locationType === "outside" && !formData.Country.trim()) {
      newErrors.Country = "Country is required";
      isValid = false;
    }
    if (!formData.State.trim()) {
      newErrors.State = "State is required";
      isValid = false;
    }
    if (!formData.AGM.trim()) {
      newErrors.AGM = "AGM approval status is required";
      isValid = false;
    }
    if (!formData.Designation.trim()) {
      newErrors.Designation = "Designation is required";
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
    if (formData.Pincode.trim() !== "") {
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
    if (!validateForm()) return;

    setLoading(true); // Start loading

    // Map country_id to country_name
    const data = {
      ...formData,
      Country:
        locationType === "india"
          ? "India"
          : countryMapping[formData.Country] || formData.Country,
    };

    try {
      const response = await axios.post(
        "https://sheet.best/api/sheets/872878f6-121d-454d-a7c6-2c096dd817e4",
        data
      );
      console.log(response);
      setSuccessMessage("Form submitted successfully!"); // Set success message
      // Clear form data
      setFormData({
        Country: "",
        Name: "",
        Phone: "",
        AGM: "",
        Designation: "",
        SolarFor: "",
        Pincode: "",
        City: "",
        State: "",
        Remark: "",
      });
      setSelectedCountryId("");
      setSelectedStateId("");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false); // Stop loading
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
          <div>
            <label className="block text-sm font-medium text-black ">
              Location For<span className="text-red-600 ml-1">*</span>
            </label>
            <div className="flex space-x-1 md:space-x-4">
              <button
                type="button"
                onClick={() =>
                  handleLocationTypeChange({ target: { value: "india" } })
                }
                className={`px-4 py-2 w-1/2 border rounded-md ${
                  locationType === "india"
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                India
              </button>
              <button
                type="button"
                onClick={() =>
                  handleLocationTypeChange({ target: { value: "outside" } })
                }
                className={`px-4 py-2 w-1/2 border rounded-md ${
                  locationType === "outside"
                    ? "bg-yellow-400 text-black border-yellow-400"
                    : "bg-white text-black border-gray-300"
                }`}
              >
                Outside India
              </button>
            </div>
          </div>

          {locationType === "outside" && (
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Country<span className="text-red-600 ml-1">*</span>
              </label>
              <select
                name="Country"
                value={selectedCountryId}
                onChange={handleCountryChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select Country</option>
                {countrydata
                  .filter((country) => country.country_name !== "India")
                  .map((country) => (
                    <option key={country.country_id} value={country.country_id}>
                      {country.country_name}
                    </option>
                  ))}
              </select>
              {errors.Country && (
                <p className="text-red-500 text-xs mt-1">{errors.Country}</p>
              )}
            </div>
          )}

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
                State<span className="text-red-600 ml-1">*</span>
              </label>
              <select
                name="State"
                value={selectedStateId}
                onChange={handleStateChange}
                className="block w-full border border-gray-300 rounded-md p-2"
              >
                <option value="">Select State</option>
                {states.map((state) => (
                  <option key={state.state_id} value={state.state_id}>
                    {state.state_name}
                  </option>
                ))}
              </select>
              {errors.State && (
                <p className="text-red-500 text-xs mt-1">{errors.State}</p>
              )}
            </div>
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
                AGM approval status
                <span className="text-red-600 ml-1">*</span>
              </label>
              <select
                name="AGM"
                value={formData.AGM}
                onChange={handleChange}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              >
                <option value="">Select...</option>
                <option value="Residential">
                  We already have AGM approval
                </option>
                <option value="Commercial">
                  We don’t have AGM approval yet
                </option>
              </select>
              {errors.AGM && (
                <p className="text-red-500 text-xs mt-1">{errors.AGM}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label className="block text-sm font-medium text-black">
                Designation<span className="text-red-600 ml-1">*</span>
              </label>
              <select
                name="Designation"
                value={formData.Designation}
                onChange={handleChange}
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              >
                <option value="">Select...</option>
                <option value="Residential">Management committee member</option>
                <option value="Commercial">Resident</option>
                <option value="Industrial">Builder</option>
                <option value="Agricultural">Facility Manager</option>
              </select>
              {errors.Designation && (
                <p className="text-red-500 text-xs mt-1">
                  {errors.Designation}
                </p>
              )}
            </div>

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
          <div className="flex items-center space-x-2 mt-4">
            <input
              type="checkbox"
              id="terms"
              className="custom-checkbox accent-yellow-500 form-checkbox h-5 w-5"
              checked
              disabled
            />
            <label htmlFor="terms" className="text-lg text-gray-700">
              I agree to
              <a
                href="/terms-of-service"
                className="text-yellow-500 ml-1 underline"
              >
                Galo Solar’s terms of service
              </a>
              &nbsp;and&nbsp;
              <a href="/privacy-policy" className="text-yellow-500 underline">
                privacy policy
              </a>
            </label>
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
