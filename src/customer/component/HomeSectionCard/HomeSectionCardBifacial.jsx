import React from 'react';

const HomeSectionCardBifacial = ({ products }) => {
  return (
    <div className='cursor-pointer flex flex-col items-center mb-10 bg-yellow-400 rounded-3xl shadow-lg overflow-hidden w-[18rem] h-[23rem] mx-3 transition-transform transform hover:scale-105 p-4'>
      <div className='h-[20rem] w-[15rem]'>
        <img src={products.imageUrl} className='rounded-3xl h-full w-full object-cover' />
      </div>
      <div className="text-center mt-2 font-bold">{products.title}</div>
      <div className="text-center font-bold">&#x20b9; {products.price}</div>
    </div>
  );
}

export default HomeSectionCardBifacial;
