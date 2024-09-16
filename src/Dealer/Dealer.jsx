import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../Home/Footer";

const Dealer = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [businessName, setBusinessName] = useState("");
  const [yearsInBusiness, setYearsInBusiness] = useState("");
  const [gstNumber, setGstNumber] = useState("");
  const [bankAccountNumber, setBankAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [remark, setRemark] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate

  const validate = (name, phone, city, pincode) => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const cityRegex = /^[A-Za-z\s]+$/;
    const pincodeRegex = /^\d{6}$/;
    const phoneRegex = /^\d{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name && !nameRegex.test(name)) {
      errors.name = "Name must contain only alphabets and spaces.";
    }
    if (phone && !phoneRegex.test(phone)) {
      errors.phone = "Phone number must be exactly 10 digits.";
    }
    if (city && !cityRegex.test(city)) {
      errors.city = "City must contain only alphabets.";
    }
    if (pincode && !pincodeRegex.test(pincode)) {
      errors.pincode = "Pincode must be exactly 6 digits.";
    }
    if (email && !emailRegex.test(email)) {
      errors.email = "Invalid email format.";
    }

    return errors;
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newErrors = {};

    switch (id) {
      case "name":
        setName(value);
        newErrors = validate(value, phone, city, pincode);
        break;
      case "phone":
        setPhone(value);
        newErrors = validate(name, value, city, pincode);
        break;
      case "city":
        setCity(value);
        newErrors = validate(name, phone, value, pincode);
        break;
      case "pincode":
        setPincode(value);
        newErrors = validate(name, phone, city, value);
        break;
      case "email":
        setEmail(value);
        newErrors = validate(name, phone, city, pincode, value);
        break;
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(name, phone, city, pincode, email);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setLoading(true); // Set loading to true when submission starts

    // Capture current date and time
    const currentDateTime = new Date().toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "2-digit",
      year: "2-digit",
    });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbygNFqY8YYryUXQSXsyk3gDDEMD1vIx07maKOkoVBbz0leWoYmWpr-I9E7NEmntQ90e/exec",
        {
          method: "POST",
          contentType: "application/json",
          body: JSON.stringify({
            dealername: new URLSearchParams(window.location.search).get(
              "dealername"
            ),
            dealerphone: new URLSearchParams(window.location.search).get(
              "dealerphone"
            ),
            id: new URLSearchParams(window.location.search).get("id"),
            name: name,
            phone: phone,
            states: states,
            city: city,
            pincode: pincode,
            address: address,
            email: email,
            businessName: businessName,
            yearsInBusiness: yearsInBusiness,
            gstNumber: gstNumber,
            bankAccountNumber: bankAccountNumber,
            ifscCode: ifscCode,
            remark: remark,
            datetime: currentDateTime,
          }),
        }
      );

      const result = await response.text();
      setMessage(result);

      // Redirect to Thanks component
      navigate("/thanks");
    } catch (error) {
      console.error("Error submitting form:", error);
      setMessage("An error occurred while submitting the form.");
      navigate("/thanks");
    } finally {
      setLoading(false); // Set loading to false after submission is complete
    }
  };

  return (
    <div className="flex flex-col bg-yellow-400 bg-cover bg-center">
      <div className="w-full p-4">
        <p className="text-3xl md:text-5xl font-bold">
          Empower Your Business with Galo Solar – Kickstart Your Dealership
          Journey Today!
        </p>
        <p className="text-lg md:text-=3xl mt-4">
          Are you ready to take your business to the next level with a
          flourishing solar energy partnership? Start with a tailored
          consultation from our expert team.
        </p>
        <p className="text-lg md:text-3xl mt-2">
          Reach out now and discover how becoming a Galo Solar dealer can drive
          growth, enhance profitability, and future-proof your business!
        </p>
      </div>
      <div
        className="p-4 md:p-8 w-full mx-auto bg-white rounded-xl shadow-lg"
        data-aos=""
      >
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={handleChange}
                className={`block w-full border ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
                required
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name}</p>
              )}
            </div>
            <div className="flex-1">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <input
                type="text"
                id="phone"
                value={phone}
                onChange={handleChange}
                className={`block w-full border ${
                  errors.phone ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
                required
              />
              {errors.phone && (
                <p className="text-red-500 text-sm">{errors.phone}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="states"
                className="block text-sm font-medium text-gray-700"
              >
                Select State
              </label>
              <select
                id="states"
                value={states}
                onChange={(e) => setStates(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="">Select an option</option>
                <option value="Andaman and Nicobar Islands">
                  Andaman and Nicobar Islands
                </option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
              </select>
            </div>
            <div className="flex-1">
              <label
                htmlFor="city"
                className="block text-sm font-medium text-gray-700"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                value={city}
                onChange={handleChange}
                className={`block w-full border ${
                  errors.city ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
                required
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="pincode"
                className="block text-sm font-medium text-gray-700"
              >
                Pincode
              </label>
              <input
                type="text"
                id="pincode"
                value={pincode}
                onChange={handleChange}
                className={`block w-full border ${
                  errors.pincode ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm">{errors.pincode}</p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="address" className="block text-sm font-medium text-gray-700"
              >Address</label>
              <input
                type="text"
                id="address"
                value={address}
                className="block w-full border rounded-md p-2"
                onChange={(e) => setAddress(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label htmlFor="businessName" className="block text-sm font-medium text-gray-700">Business Name</label>
            <input
              type="text"
              id="businessName"
              value={businessName}
             className="block w-full border rounded-md p-2"
              onChange={(e) => setBusinessName(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                value={email}
                className="block w-full border rounded-md p-2"
                onChange={handleChange}
                required
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
            <label htmlFor="yearsInBusiness" className="block text-sm font-medium text-gray-700">Years in Business</label>
            <input
              type="number"
              id="yearsInBusiness"
              value={yearsInBusiness}
             className="block w-full border rounded-md p-2"
              onChange={(e) => setYearsInBusiness(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="gstNumber" className="block text-sm font-medium text-gray-700">GST Number</label>
            <input
              type="text"
              id="gstNumber"
              value={gstNumber}
               className="block w-full border rounded-md p-2"
              onChange={(e) => setGstNumber(e.target.value)}
              required
            />
          </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label htmlFor="bankAccountNumber" className="block text-sm font-medium text-gray-700">Bank Account Number</label>
            <input
              type="text"
              id="bankAccountNumber"
              value={bankAccountNumber}
              className="block w-full border rounded-md p-2"
              onChange={(e) => setBankAccountNumber(e.target.value)}
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="ifscCode" className="block text-sm font-medium text-gray-700">IFSC Code</label>
            <input
              type="text"
              id="ifscCode"
              value={ifscCode}
             className="block w-full border rounded-md p-2"
              onChange={(e) => setIfscCode(e.target.value)}
              required
            />
          </div>
          </div>
          <div className="flex-1">
            <label
              htmlFor="remark"
              className="block text-sm font-medium text-gray-700"
            >
              Remark
            </label>
            <input
              id="remark"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              rows="3"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black text-xl font-bold py-2 px-4 rounded-md focus:outline-none"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Submitting..." : "Submit"} {/* Conditional rendering */}
          </button>
        </form>
        {message && <p className="text-green-500 mt-4">{message}</p>}
      </div>
      <Footer/>
    </div>
  );
};

export default Dealer;
