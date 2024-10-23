import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate
import Footer from "../Home/Footer";

const Form = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [states, setStates] = useState("");
  const [city, setCity] = useState("");
  const [pincode, setPincode] = useState("");
  const [solarfor, setSolarfor] = useState("");
  const [remark, setRemark] = useState("");
  const [errors, setErrors] = useState({});
  const [urlResult, setUrlResult] = useState(null);
  const [loading, setLoading] = useState(false); // Loading state

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const result = queryParams.get("result");
    if (result) {
      setUrlResult(result);
    } else {
      setUrlResult("No Result found");
    }
  }, [location]);

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

  const handleSubmit = () => {
    const newErrors = validate(name, phone, city, pincode);
    if (Object.keys(newErrors).length === 0) {
      const data = {
        result: urlResult,
        name,
        phone,
        states,
        city,
        pincode,
        solarfor,
        remark,
      };

      setLoading(true); // Set loading to true

      fetch("https://script.google.com/macros/s/AKfycbzdiFAttjcW6iWZmi1lqfiaWJkkAoQPWrD2bWj0Hh-aqQP_une5-QCTtrEV0EzjC1TvKw/exec", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          console.log("Success:", response);
          navigate("/thanks");
        })
        .catch((error) => {
          console.error("Error:", error);
        })
        .finally(() => {
          setLoading(false); // Reset loading state regardless of success or error
        });
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <>
      <div className="flex flex-col md:flex-row bg-yellow-400 p-4 bg-cover bg-center">
        <div className="w-full md:w-1/2 p-4">
          <div className="flex justify-center items-center"></div>
          <p className="text-3xl md:text-5xl font-bold mt-5">
            Illuminate Your Future with Solar Energy – Start with a Free Check-Up!
          </p>
          <p className="text-lg md:text-3xl mt-4">
            Ready to brighten your home with solar energy? Begin with a free consultation from our expert team.
          </p>
          <p className="text-lg md:text-3xl mt-2">
            Connect with us today to explore how solar can transform your energy use and savings!
          </p>
        </div>
        <div className="p-4 md:p-8 w-full md:w-1/2 mx-auto bg-white rounded-xl shadow-lg">
          <form className="space-y-4">
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
                  className={`block w-full border ${errors.name ? "border-red-500" : "border-gray-300"} rounded-md p-2`}
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
                  className={`block w-full border ${errors.phone ? "border-red-500" : "border-gray-300"} rounded-md p-2`}
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
                  <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                  <option value="Andhra Pradesh">Andhra Pradesh</option>
                  <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                  <option value="Assam">Assam</option>
                  <option value="Bihar">Bihar</option>
                  <option value="Chandigarh">Chandigarh</option>
                  <option value="Chhattisgarh">Chhattisgarh</option>
                  <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
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
                  className={`block w-full border ${errors.city ? "border-red-500" : "border-gray-300"} rounded-md p-2`}
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
                  className={`block w-full border ${errors.pincode ? "border-red-500" : "border-gray-300"} rounded-md p-2`}
                  required
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
                  Solar for
                </label>
                <input
                  type="text"
                  id="solarfor"
                  value={solarfor}
                  onChange={(e) => setSolarfor(e.target.value)}
                  className="block w-full border border-gray-300 rounded-md p-2"
                />
              </div>
            </div>
            <div>
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
              ></input>
            </div>
            <div className="flex justify-center">
              <button
                type="button"
                onClick={handleSubmit}
                className="w-full bg-black text-white font-bold py-2 rounded"
                disabled={loading} // Disable button while loading
              >
                {loading ? (
                  <span>Loading...</span> // Show loading text or spinner
                ) : (
                  "Submit"
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Form;
