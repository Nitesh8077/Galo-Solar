import React, { useState, useRef } from "react";
import QRCode from "qrcode";

const QRForm = () => {
  const [dealername, setDealername] = useState("");
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState("");
  const canvasRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const qrText = `Dealer: ${dealername}`; // Include dealer name in QR data
    try {
      // Generate QR code
      const generatedQrCodeDataUrl = await QRCode.toDataURL(qrText, {
        width: 256,
        margin: 1,
      });
      setQrCodeDataUrl(generatedQrCodeDataUrl);

      // Combine QR code and text in a canvas
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Create image object for QR code
      const qrImage = new Image();
      qrImage.src = generatedQrCodeDataUrl;
      qrImage.onload = () => {
        // Clear canvas
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw QR code
        ctx.drawImage(qrImage, 0, 0, 256, 256);

        // Add dealer name text under the QR code
        ctx.font = "bold 20px Arial";
        ctx.fillStyle = "white"; // Set text color to white
        ctx.textAlign = "center";
        ctx.fillText(dealername, canvas.width / 2, 280); // Adjust positioning
      };
    } catch (error) {
      console.error("Error generating QR code:", error);
    }
  };

  const handleChange = (e) => {
    setDealername(e.target.value);
  };

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const link = document.createElement("a");
    link.href = canvas.toDataURL("image/png");
    link.download = `${dealername}_qrcode_with_name.png`;
    link.click();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-xl">
        <h2 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">
          Generate Dealer QR Code with Name
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
              className="mt-2 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-400 focus:border-indigo-400 sm:text-base p-3 border"
              placeholder="Enter dealer name"
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

        <div className="mt-8 text-center">
          <canvas ref={canvasRef} width={256} height={300} style={{ display: qrCodeDataUrl ? "block" : "none", margin: "0 auto" }}></canvas>
          {qrCodeDataUrl && (
            <>
              <button
                onClick={handleDownload}
                className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md"
              >
                Download QR Code with Name
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default QRForm;
