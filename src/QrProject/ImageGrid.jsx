import React, { useState, useRef } from 'react';
import html2canvas from 'html2canvas';

const QRCodeGrid = () => {
  const [qrCodes, setQrCodes] = useState([]);
  const canvasRef = useRef(null);

  // Handle image uploads (up to 6 images)
  const handleQrUpload = (e) => {
    if (qrCodes.length >= 6) return;
    const files = Array.from(e.target.files);
    setQrCodes((prevQrCodes) => [...prevQrCodes, ...files.slice(0, 6 - prevQrCodes.length)]);
  };

  // Function to download the combined image as A4
  const handleDownload = () => {
    const canvas = canvasRef.current;
    html2canvas(canvas, {
      width: 794, // A4 width in pixels
      height: 1123, // A4 height in pixels
      scale: 2, // Increase the quality by scaling
    }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL();
      link.download = 'qr-codes-a4-format.png';
      link.click();
    });
  };

  return (
    <div className="flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-4">Upload QR Codes (A4 Layout)</h1>

      {/* File Upload Input */}
      <input
        type="file"
        multiple
        accept="image/*"
        className="mb-4"
        onChange={handleQrUpload}
        disabled={qrCodes.length >= 6}
      />

      {/* QR Code Grid - 3x2 */}
      <div
        ref={canvasRef}
        className="grid grid-cols-2 gap-2 bg-white w-[794px] h-[1123px] p-2 border"
        style={{ maxWidth: '100%', maxHeight: '100%' }}
      >
        {qrCodes.map((qr, idx) => (
          <div key={idx} className="w-full h-[360px] flex items-center justify-center">
            <img
              src={URL.createObjectURL(qr)}
              alt={`qr-code-${idx}`}
              className="object-cover w-[360px] h-[360px]"
            />
          </div>
        ))}
      </div>

      {/* Download Button */}
      {qrCodes.length === 6 && (
        <button
          onClick={handleDownload}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-700 transition"
        >
          Download A4 QR Code Layout
        </button>
      )}
    </div>
  );
};

export default QRCodeGrid;
