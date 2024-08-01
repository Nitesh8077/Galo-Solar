import React from "react";

const Header = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <img
        src="/images/ABT.png"
        className="absolute top-0 left-0 w-full h-1/2 object-cover"
        alt="Header"
      />
    </div>
  );
};

export default Header;
