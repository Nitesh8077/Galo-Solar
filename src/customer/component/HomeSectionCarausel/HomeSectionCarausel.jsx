import React from 'react';
import HomeSectionCard from '../HomeSectionCard/HomeSectionCard';
import AliceCarousel from 'react-alice-carousel';
import { catagories } from '../../../Data/catagories';

const HomeSectionCarausel = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = catagories.map((item) => (
    <div className="flex justify-center">
      <HomeSectionCard products={item} />
    </div>
  ));

  return (
    <div className="bg-yellow-400 py-8">
      <h1 className='font-bold text-3xl md:text-5xl mb-4 md:mb-8 text-center'>POPULAR CATEGORIES</h1>
      <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        responsive={responsive}
      />
    </div>
  );
};

export default HomeSectionCarausel;
