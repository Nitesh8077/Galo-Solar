import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import image1 from "/images/cust3.svg"; // Update the path accordingly
import image2 from "/images/cust4.svg"; // Update the path accordingly
import image3 from "/images/cust2.svg"; // Update the path accordingly

const HappyCustomersCarousel = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 1024 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 1024, min: 768 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 768, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const customers = [
    { name: "Shriram Kumar Mehta", image: image1 },
    { name: "Dr. Omkar Singh", image: image2 },
    { name: "Kailash Chandra Gupta", image: image3 },
  ];

  return (
    <div className="bg-black text-yellow-400 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">
        Our Happy Customers
      </h2>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        customLeftArrow={<div style={{ display: "none" }} />}
        customRightArrow={<div style={{ display: "none" }} />}
      >
        {customers.map((customer, index) => (
          <div key={index} className="flex flex-col items-center">
            <img
              src={customer.image}
              alt={customer.name}
              className="w-72 h-72 object-cover rounded-lg mb-4"
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default HappyCustomersCarousel;
