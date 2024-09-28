import React, { useState } from "react";
import QRCode from "qrcode";
import { v4 as uuidv4 } from "uuid";

const QRForm = () => {
  const [dealername, setDealername] = useState("");
  const [dealerphone, setDealerphone] = useState("");
  const [errors, setErrors] = useState({ dealername: "", dealerphone: "" });

  const validateForm = () => {
    let valid = true;
    const newErrors = { dealername: "", dealerphone: "" };

    if (!/^[a-zA-Z\s]+$/.test(dealername)) {
      newErrors.dealername = "Name must contain only letters and spaces.";
      valid = false;
    }

    if (!/^\d{10}$/.test(dealerphone)) {
      newErrors.dealerphone = "Phone number must be exactly 10 digits.";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const id = uuidv4();
    const contactUsUrl = `${
      window.location.origin
    }/customer-us?id=${id}&dealername=${encodeURIComponent(
      dealername
    )}&dealerphone=${encodeURIComponent(dealerphone)}`;

    try {
      const qrCodeDataUrl = await QRCode.toDataURL(contactUsUrl, {
        width: 256,
        margin: 1,
      });

      const link = document.createElement("a");
      link.href = qrCodeDataUrl;
      link.download = "qrcode.png";
      link.click();
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;

    if (id === "dealername") {
      setDealername(value);
      if (!/^[a-zA-Z\s]*$/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          dealername: "Name must contain only letters and spaces.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, dealername: "" }));
      }
    }

    if (id === "dealerphone") {
      setDealerphone(value);
      if (/[^0-9]/.test(value)) {
        setErrors((prev) => ({
          ...prev,
          dealerphone: "Phone number must contain only digits.",
        }));
      } else if (value.length < 10) {
        setErrors((prev) => ({
          ...prev,
          dealerphone: "Phone number must be exactly 10 digits.",
        }));
      } else if (value.length > 10) {
        setErrors((prev) => ({
          ...prev,
          dealerphone: "Phone number must be exactly 10 digits.",
        }));
      } else {
        setErrors((prev) => ({ ...prev, dealerphone: "" }));
      }
    }
  };

  return (
    <div className="p-8 max-w-full h-screen mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Generate Dealer QR Code
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="dealername"
            className="block text-base font-semibold text-gray-700"
          >
            Channel Partner Name
          </label>
          <input
            type="text"
            id="dealername"
            value={dealername}
            onChange={handleChange}
            className={`mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-base p-3 ${
              errors.dealername ? "border-red-500" : "border"
            }`}
            placeholder="Enter dealer name"
            required
          />
          {errors.dealername && (
            <p className="mt-2 text-red-500 text-sm">{errors.dealername}</p>
          )}
        </div>
        <div>
          <label
            htmlFor="dealerphone"
            className="block text-base font-semibold text-gray-700"
          >
            Channel Partner Phone Number
          </label>
          <input
            type="text"
            id="dealerphone"
            value={dealerphone}
            onChange={handleChange}
            className={`mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-base p-3 ${
              errors.dealerphone ? "border-red-500" : "border"
            }`}
            placeholder="Enter dealer phone number"
            required
          />
          {errors.dealerphone && (
            <p className="mt-2 text-red-500 text-sm">{errors.dealerphone}</p>
          )}
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition duration-300"
        >
          Generate QR Code
        </button>
      </form>
    </div>
  );
};

export default QRForm;
