import React, { useRef } from "react";
import QRCode from "react-qr-code";
import { toPng, toJpeg } from "html-to-image";

const QrChannelPartner = () => {
  const linkedInProfileUrl = "https://www.galosolar.com/channelpartner";
  const qrRef = useRef(null);

  const downloadQR = (format) => {
    if (qrRef.current === null) {
      return;
    }

    const downloadMethod = format === "jpeg" ? toJpeg : toPng;
    downloadMethod(qrRef.current)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.download = `galo-solar-dealer-qr.${format}`;
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error("Failed to download QR code:", err);
      });
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }} className="">
      <h2 style={{ fontFamily: "'Poppins', sans-serif", color: "#333" }}>
        Scan this QR code to open Galo Solar Dealer Form
      </h2>
      <div ref={qrRef} className="flex justify-center m-10">
        <QRCode value={linkedInProfileUrl} size={256} level="H" />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => downloadQR("png")}>Download PNG</button>
        <button onClick={() => downloadQR("jpeg")} style={{ marginLeft: "10px" }}>
          Download JPEG
        </button>
      </div>
    </div>
  );
};

export default QrChannelPartner;
