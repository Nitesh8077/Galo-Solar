import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const items = [
  <img
    src="/images/newb2.svg"
    alt="Image 1"
    className="item w-full h-auto object-contain"
    data-value="1"
  />,
];

const MainCarausel = () => (
  <div className="bg-black w-full">
    <AliceCarousel
      items={items}
      controlsStrategy="alternate"
      disableButtonsControls
      disableDotsControls
    />
  </div>
);

export default MainCarausel;
