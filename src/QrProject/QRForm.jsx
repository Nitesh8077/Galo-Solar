import React, { useState, useRef } from "react";
import QRCode from "qrcode";
import html2canvas from "html2canvas";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const QRForm = () => {
  const [startingNumber, setStartingNumber] = useState("");
  const [endingNumber, setEndingNumber] = useState("");
  const qrCodeRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const startPrefix = startingNumber.slice(0, 4);
    const startNum = parseInt(startingNumber.slice(4));
    const endNum = parseInt(endingNumber.slice(4));

    if (isNaN(startNum) || isNaN(endNum) || startNum > endNum) {
      alert("Please enter valid serial numbers.");
      return;
    }

    const zip = new JSZip();

    for (let i = startNum; i <= endNum; i++) {
      const serialNum = `${startPrefix}${String(i).padStart(3, "0")}`;
      const contactUsUrl = `${window.location.origin}/customer?id=${serialNum}`;

      try {
        const qrCodeDataUrl = await QRCode.toDataURL(contactUsUrl, {
          width: 256,
          margin: 0, // Reduce margin around QR code
        });

        const qrCodeImg = document.getElementById("qrCodeImg");
        qrCodeImg.src = qrCodeDataUrl;

        const serialNumberDiv = document.getElementById("serialNumberDiv");
        serialNumberDiv.textContent = serialNum;

        await new Promise((resolve) => setTimeout(resolve, 500));

        // Capture the rendered QR code and serial number
        await html2canvas(qrCodeRef.current, {
          scale: 2, // Increase resolution for better quality
          useCORS: true, // Prevent issues with cross-origin images
        }).then((canvas) => {
          canvas.toBlob((blob) => {
            zip.file(`${serialNum}_qrcode.png`, blob);
          });
        });
      } catch (error) {
        console.error("Error generating QR code:", error);
      }
    }

    zip.generateAsync({ type: "blob" }).then((content) => {
      saveAs(content, "qrcodes_with_serial.zip");
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

      <div className="flex justify-center bg-white items-center mt-10 m-2">
        <div
          ref={qrCodeRef}
          className="text-center flex-col bg-white justify-between shadow-md inline-block p-2"
        >
          <img id="qrCodeImg" alt="QR Code" className="bg-white" />
          <div
            id="serialNumberDiv"
            className="text-xl font-bold bg-white"
          ></div>
        </div>
      </div>
    </div>
  );
};

export default QRForm;
