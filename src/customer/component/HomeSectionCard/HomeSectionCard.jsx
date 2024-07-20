import React from "react";

const HomeSectionCard = ({ products }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center mb-10 mt-5 bg-yellow-400 rounded-3xl shadow-lg overflow-hidden w-[18rem] h-[20rem] mx-3 transition-transform transform hover:scale-105 p-4">
      <div className="h-[20rem] w-[15rem] rounded-3xl">
        <img
          className="rounded-[2rem]"
          src={products.imageUrl}
          alt={products.title}
        />
      </div>
      <div className="text-center -mt-16 font-bold ">{products.title}</div>
    </div>
  );
};

export default HomeSectionCard;
