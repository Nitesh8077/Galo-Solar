import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import backgroundImg from "/images/CURCUIT3.png";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Pincode: "",
    SolarFor: "",
    Remark: "",
  });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate the specific field that was changed
    validateField(name, value);
  };

  const validateField = (name, value) => {
    const newErrors = { ...errors };

    switch (name) {
      case "Name":
        if (!value) {
          newErrors.Name = "Name is required.";
        } else if (!/^[a-zA-Z\s]+$/.test(value)) {
          newErrors.Name = "Name can only contain letters and spaces.";
        } else {
          delete newErrors.Name;
        }
        break;

      case "Phone":
        if (!value) {
          newErrors.Phone = "Whatsapp Number is required.";
        } else if (!/^\d{10}$/.test(value)) {
          newErrors.Phone =
            "Whatsapp Numbers can be only in numericals and must be exactly 10 digits.";
        } else {
          delete newErrors.Phone;
        }
        break;

      case "Pincode":
        if (value && !/^\d{6}$/.test(value)) {
          newErrors.Pincode = "Pincode can only Numbers and exactly 6 digits.";
        } else {
          delete newErrors.Pincode;
        }
        break;

      case "SolarFor":
        if (!value) {
          newErrors.SolarFor = "Solar For is required.";
        } else {
          delete newErrors.SolarFor;
        }
        break;

      default:
        break;
    }

    setErrors(newErrors);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.Name) {
      newErrors.Name = "Name is required.";
    } else if (!/^[a-zA-Z\s]+$/.test(formData.Name)) {
      newErrors.Name = "Name can only contain letters and spaces.";
    }

    if (!formData.Phone) {
      newErrors.Phone = "Whatsapp Number is required.";
    } else if (!/^\d{10}$/.test(formData.Phone)) {
      newErrors.Phone = "Whatsapp Number must be exactly 10 digits.";
    }

    if (formData.Pincode && !/^\d{6}$/.test(formData.Pincode)) {
      newErrors.Pincode = "Pincode must be exactly 6 digits.";
    }

    if (!formData.SolarFor) {
      newErrors.SolarFor = "Solar For is required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return; // Prevent form submission if validation fails

    setLoading(true);

    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzgRSQ3gebAJ2GJsyQjCX-S6-s4xOCAGlal2ZjOi5CVrDkQ5Wu0xpVUbN2jkINhboW71g/exec",
        {
          method: "POST",
          body: formDatab,
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      console.log(data);
      setSuccessMessage("Form submitted successfully!");
      setFormData({
        Name: "",
        Phone: "",
        Pincode: "",
        SolarFor: "",
        Remark: "",
      });

      // Navigate to the Thanks component
      navigate("/thanks"); // Adjust the route based on your setup
    } catch (error) {
      console.error("Error submitting form:", error);
      navigate("/thanks");
      setSuccessMessage("Form submitted successfully!");
      navigate("/thanks"); // Adjust the route based on your setup
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
                className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-opacity-50"
              >
                <option value="">Select...</option>
                <option value="Homes">Homes</option>
                <option value="Residential">Residential</option>
                <option value="Commercial">Commercial</option>
              </select>
              {errors.SolarFor && (
                <p className="text-red-500 text-xs mt-1">{errors.SolarFor}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
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
          <button
            type="submit"
            className="px-4 py-2 bg-black text-yellow-400 w-full rounded-md"
            disabled={loading}
          >
            {loading ? "Loading..." : "Submit"}
          </button>
          {successMessage && (
            <p className="text-green-500 text-xs mt-2">{successMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Form;
