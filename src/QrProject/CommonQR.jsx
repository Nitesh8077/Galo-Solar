import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { toSvg } from "html-to-image";

const CommonQR = () => {
  const linkedInProfileUrl = "https://galo-solar-scanner.vercel.app/contact-us";
  const qrRef = useRef(null);

  const downloadQR = () => {
    if (qrRef.current === null) {
      return;
    }

    toSvg(qrRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = "gautam-solar-linkedin-qr.svg";
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to download QR code:", err);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}>
        Scan this QR code to open Galo Solar Contact Form
      </h2>
      <div ref={qrRef}>
        <div
        >
          <QRCode value={linkedInProfileUrl} size={256} level="H" />
        </div>
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={downloadQR}
         
        >
          Download QR Code
        </button>
      </div>
    </div>
  );
};

export default CommonQR;
