import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../Home/Footer";

const CustomerContactUs = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [solarfor, setSolarfor] = useState("");
  const [remark, setRemark] = useState("");
  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false); // New state for loading

  const navigate = useNavigate(); // Initialize useNavigate

  const validate = (name, phone, city, pincode) => {
    const errors = {};
    const nameRegex = /^[A-Za-z\s]+$/;
    const cityRegex = /^[A-Za-z\s]+$/;
    const pincodeRegex = /^\d{6}$/;
    const phoneRegex = /^\d{10}$/;

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
      default:
        break;
    }

    setErrors(newErrors);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(name, phone, city, pincode);
    if (Object.keys(errors).length > 0) {
      setErrors(errors);
      return;
    }

    setLoading(true); // Set loading to true when submission starts

    // Capture current date and time
    const currentDateTime = new Date().toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
  });

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzTA7GbguX9j18TBuwbLasd0nFXXYsPhO4p0cK4D_f9k3SdEPo5enCkbheRXe4_k4YmDw/exec",
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
            solarfor: solarfor,
            remark: remark,
            datetime: currentDateTime, // Send the current date and time
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
    <>
    <div className="flex flex-col md:flex-row bg-yellow-400 p-4 bg-cover bg-center">
      <div className="w-full md:w-1/2  p-4">
        <div className="flex justify-center items-center">
          <img src="galo.png" className="h-40" alt="Galo" />
        </div>
        <p className="text-3xl md:text-3xl font-bold mt-5">
          Illuminate Your Future with Solar Energy – Start with a Free Check-Up!
        </p>
        <p className="text-lg md:text-xl mt-4">
          Ready to brighten your home with solar energy? Begin with a free
          consultation from our expert team.
        </p>
        <p className="text-lg md:text-xl mt-2">
          Connect with us today to explore how solar can transform your energy
          use and savings!
        </p>
      </div>
      <div
        className="p-4 md:p-8 w-full md:w-1/2 mx-auto bg-white rounded-xl shadow-lg"
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
              <label
                htmlFor="solarfor"
                className="block text-sm font-medium text-gray-700"
              >
                Solar For
              </label>
              <select
                id="solarfor"
                value={solarfor}
                onChange={(e) => setSolarfor(e.target.value)}
                className="block w-full border border-gray-300 rounded-md p-2"
                required
              >
                <option value="" disabled>
                  Select an option
                </option>
                <option value="Homes">Homes</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial/Industrial</option>

                {/* Add more options as needed */}
              </select>
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
            className="w-full bg-black text-white py-2 px-4 rounded-md focus:outline-none"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Submitting..." : "Submit"} {/* Conditional rendering */}
          </button>
        </form>
        {message && <p className="text-green-500 mt-4">{message}</p>}
      </div>
    
    </div>
      <Footer/>
      </>
  );
};

export default CustomerContactUs;
