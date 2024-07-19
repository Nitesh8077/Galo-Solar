import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import ReviewCard from '../HomeSectionCard/ReviewCard';
import { review } from '../../../Data/reviews';

const ReviewCardCarausel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = review.map((item) => (
    <div className="flex justify-center">
      <ReviewCard products={item} />
    </div>
  ));

  return (
    <div className="bg-black py-8">
      <h1 className='font-bold text-3xl md:text-5xl mb-4 md:mb-8 text-center text-yellow-400' >INSTALLATION STORIES</h1>
      <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        responsive={responsive}
        disableButtonsControls
        autoPlay
        autoPlayInterval={1000}
        infinite
      />
    </div>
  );
};

export default ReviewCardCarausel;
