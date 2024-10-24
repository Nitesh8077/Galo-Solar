import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../Home/Footer";

const AutoForm = () => {
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
  const [sales, setSales] = useState("");
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
        "https://script.google.com/macros/s/AKfycbznOg07reqVU3X9TJ6CYv-mpa-w35C92e1bV0pXHT3voN8N4-ewtSC-6M74fiFabS99VQ/exec",
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
            sales: sales,
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
        <p className="text-3xl md:text-7xl font-bold">
          Empower Your Business with Galo Solar – Kickstart Your Channel Partner
          Journey Today!
        </p>
        <p className="text-lg md:text-4xl mt-4">
          Are you ready to take your business to the next level with a
          flourishing solar energy partnership? Start with a tailored
          consultation from our expert team.
        </p>
        <p className="text-lg md:text-4xl mt-2">
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
              <label htmlFor="name" className="block text-xl font-bold">
                Name<span className="text-red-500 ml-1 font-extrabold">*</span>
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
              <label htmlFor="phone" className="block text-xl font-bold">
                Phone Number<span className="text-red-500 ml-1 font-extrabold">*</span>
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
              <label htmlFor="states" className="block text-xl font-bold">
                Select State<span className="text-red-500 ml-1 font-extrabold">*</span>
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
                <option value="Puducherry">Puducherry</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
            </div>
            <div className="flex-1">
              <label htmlFor="city" className="block text-xl font-bold">
                City<span className="text-red-500 ml-1 font-extrabold">*</span>
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
              <label htmlFor="pincode" className="block text-xl font-bold">
                Pincode<span className="text-red-500 ml-1 font-extrabold">*</span>
              </label>
              <input
                type="text"
                id="pincode"
                value={pincode}
                onChange={handleChange}
                className={`block w-full border ${
                  errors.pincode ? "border-red-500" : "border-gray-300"
                } rounded-md p-2`}
                required
              />
              {errors.pincode && (
                <p className="text-red-500 text-sm">{errors.pincode}</p>
              )}
            </div>
            <div className="flex-1">
              <label htmlFor="address" className="block text-xl font-bold">
                Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                className="block w-full border rounded-md p-2"
                onChange={(e) => setAddress(e.target.value)}
               
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label htmlFor="businessName" className="block text-xl font-bold">
                Auto Number<span className="text-red-500 ml-1 font-extrabold">*</span>
              </label>
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
              <label htmlFor="email" className="block text-xl font-bold">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                className="block w-full border rounded-md p-2"
                onChange={handleChange}
              
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            <div className="flex-1">
              <label
                htmlFor="bankAccountNumber"
                className="block text-xl font-bold"
              >
                Bank Account Number
              </label>
              <input
                type="text"
                id="bankAccountNumber"
                value={bankAccountNumber}
                className="block w-full border rounded-md p-2"
                onChange={(e) => setBankAccountNumber(e.target.value)}
               
              />
            </div>
            <div className="flex-1">
              <label htmlFor="ifscCode" className="block text-xl font-bold">
                IFSC Code
              </label>
              <input
                type="text"
                id="ifscCode"
                value={ifscCode}
                className="block w-full border rounded-md p-2"
                onChange={(e) => setIfscCode(e.target.value)}
               
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          <div className="flex-1">
            <label htmlFor="sales" className="block text-xl font-bold">
            Sales Executive Name<span className="text-red-500 ml-1 font-extrabold">*</span>
            </label>
            <input
              id="sales"
              value={sales}
              onChange={(e) => setSales(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              rows="3"
              required
            />
          </div>
          <div className="flex-1">
            <label htmlFor="remark" className="block text-xl font-bold">
              QR Serial Number<span className="text-red-500 ml-1 font-extrabold">*</span>
            </label>
            <input
              id="remark"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              rows="3"
              required
            />
          </div>
          
          </div>
          <button
            type="submit"
            className="w-full bg-yellow-400 text-black text-2xl font-bold py-2 px-4 rounded-md focus:outline-none"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Submitting..." : "Submit"} {/* Conditional rendering */}
          </button>
        </form>
        {message && <p className="text-green-500 mt-4">{message}</p>}
      </div>
      <Footer />
    </div>
  );
};

export default AutoForm;
