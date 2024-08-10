import React from "react";
import whatsappIcon from "/images/wp.png"; // Update this path

const DelhiFloatingButton = () => {
  const phoneNumber = "+918077875159";
  const message =
    "Hello, I came from your website :: https://www.galosolar.com/ How are you?";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <div className="fixed right-0 bottom-0 mb-4 mr-4 z-50">
      <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
        <img src={whatsappIcon} alt="Reach us Out" className="h-7 md:h-10" />
      </a>
    </div>
  );
};

export default DelhiFloatingButton;
