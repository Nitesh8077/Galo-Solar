import React from 'react';

const ReviewCard = ({ products }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center mb-10 mt-5 bg-white rounded-3xl shadow-lg overflow-hidden w-[18rem] mx-3 transition-transform transform hover:scale-105 p-4'>
      <div className='h-[20rem] w-[15rem]'>
        <img src={products.imageUrl}  />
      </div>
      <div className="text-center -mt-16 font-bold ">{products.title}</div>
      <div className="text-center mt-4 italic">{products.review}</div>
      
    </div>
  );
}

export default ReviewCard;
