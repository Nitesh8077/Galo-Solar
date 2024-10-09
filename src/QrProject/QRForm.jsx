import React, { useState, useRef } from "react";
import QRCode from "qrcode";
import { v4 as uuidv4 } from "uuid";
import html2canvas from "html2canvas";

const QRForm = () => {
  const [dealername, setDealername] = useState("");
  const qrCodeRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const id = uuidv4();
    const contactUsUrl = `${
      window.location.origin
    }/customer?id=${id}&dealername=${encodeURIComponent(dealername)}`;

    try {
      // Generate the QR Code
      const qrCodeDataUrl = await QRCode.toDataURL(contactUsUrl, {
        width: 256,
        margin: 1,
      });

      // Set the QR code as the src of an img tag
      const qrCodeImg = document.getElementById("qrCodeImg");
      qrCodeImg.src = qrCodeDataUrl;

      // Wait for the QR code to render, then capture it along with the serial number
      setTimeout(() => {
        html2canvas(qrCodeRef.current).then((canvas) => {
          const link = document.createElement("a");
          link.href = canvas.toDataURL("image/png");
          link.download = `${dealername}_qrcode.png`;
          link.click();
        });
      }, 500);
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleChange = (e) => {
    setDealername(e.target.value);
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
            QR Serial Number
          </label>
          <input
            type="text"
            id="dealername"
            value={dealername}
            onChange={handleChange}
            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-base p-3 border"
            placeholder="Enter serial number"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition duration-300"
        >
          Generate QR Code
        </button>
      </form>
      <div
        ref={qrCodeRef}
        className="mt-8 text-center bg-white p-4 rounded-lg shadow-md inline-block"
      >
        <img id="qrCodeImg" alt="QR Code" />
        {dealername && (
          <div className="text-xl font-bold">{dealername}</div>
        )}
      </div>
    </div>
  );
};

export default QRForm;
