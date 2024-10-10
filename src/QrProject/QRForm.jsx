import React, { useState, useRef } from "react";
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const QRForm = () => {
  const [startingNumber, setStartingNumber] = useState("");
  const [endingNumber, setEndingNumber] = useState("");
  const qrCodeRef = useRef(null); // Ref for capturing QR code and serial number

  const handleSubmit = async (e) => {
    e.preventDefault();

    const startPrefix = startingNumber.slice(0, 4); // Extract "GALX"
    const startNum = parseInt(startingNumber.slice(4)); // Extract numeric part from "GALX001" -> 1
    const endNum = parseInt(endingNumber.slice(4)); // Extract numeric part from "GALX100"

    if (isNaN(startNum) || isNaN(endNum) || startNum > endNum) {
      alert("Please enter valid serial numbers.");
      return;
    }

    const zip = new JSZip();

    for (let i = startNum; i <= endNum; i++) {
      const serialNum = `${startPrefix}${String(i).padStart(3, "0")}`; // Format as "GALX001", "GALX002", etc.
      const contactUsUrl = `${window.location.origin}/customer?id=${serialNum}`;

      try {
        // Generate the QR code as Data URL
        const qrCodeDataUrl = await QRCode.toDataURL(contactUsUrl, {
          width: 256,
          margin: 1,
        });

        // Set the QR code as the src of an img tag
        const qrCodeImg = document.getElementById("qrCodeImg");
        qrCodeImg.src = qrCodeDataUrl;

        // Update the serial number for the current iteration
        const serialNumberDiv = document.getElementById("serialNumberDiv");
        serialNumberDiv.textContent = serialNum;

        // Wait for the QR code and serial number to render, then capture it
        await new Promise((resolve) => setTimeout(resolve, 500)); // Wait for rendering

        await html2canvas(qrCodeRef.current).then((canvas) => {
          canvas.toBlob((blob) => {
            zip.file(`${serialNum}_qrcode.png`, blob);
          });
        });
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }

    // Generate ZIP and trigger download
    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "qrcodes_with_serial.zip"); // Download the ZIP file
    });
  };

  return (
    <div className="p-8 max-w-full h-screen mx-auto bg-gradient-to-br from-blue-50 to-indigo-100 rounded-xl shadow-xl">
      <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
        Generate Multiple Dealer QR Codes with Serial Numbers
      </h2>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div>
          <label
            htmlFor="startingNumber"
            className="block text-base font-semibold text-gray-700"
          >
            Starting QR Serial Number
          </label>
          <input
            type="text"
            id="startingNumber"
            value={startingNumber}
            onChange={(e) => setStartingNumber(e.target.value)}
            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-base p-3 border"
            placeholder="Enter starting serial number (e.g., GALX001)"
            required
          />
        </div>
        <div>
          <label
            htmlFor="endingNumber"
            className="block text-base font-semibold text-gray-700"
          >
            Ending QR Serial Number
          </label>
          <input
            type="text"
            id="endingNumber"
            value={endingNumber}
            onChange={(e) => setEndingNumber(e.target.value)}
            className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-base p-3 border"
            placeholder="Enter ending serial number (e.g., GALX100)"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-400 transition duration-300"
        >
          Generate QR Codes with Serial Numbers
        </button>
      </form>

      {/* QR code and serial number section */}
      <div className="flex justify-center items-center mt-10">
  <div
    ref={qrCodeRef}
    className="text-center bg-yellow-500 flex-col p-2 justify-between shadow-md inline-block"
  >
    <img id="qrCodeImg" alt="QR Code" />
    {/* Serial number will update dynamically */}
    <div id="serialNumberDiv" className="text-xl font-bold"></div>
  </div>
</div>

    </div>
  );
};

export default QRForm;
