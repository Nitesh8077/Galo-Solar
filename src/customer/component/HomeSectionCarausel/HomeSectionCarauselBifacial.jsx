import React from 'react';
import HomeSectionCardBifacial from '../HomeSectionCard/HomeSectionCardBifacial';
import AliceCarousel from 'react-alice-carousel';
import { bifacial } from '../../../Data/bifacial';

const HomeSectionCarauselBifacial = () => {
  const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
  };

  const items = bifacial.map((item) => (
    <div className="flex justify-center">
      <HomeSectionCardBifacial products={item} />
    </div>
  ));

  return (
    <div className="bg-yellow-400 flex flex-col items-center">
     <h1 className='font-bold text-3xl md:text-5xl mb-4 md:mb-8 text-center'>BIFACIAL SOLAR MODULE</h1>

      <AliceCarousel
        items={items}
        controlsStrategy="alternate"
        responsive={responsive}
      />
      <h1 className='font-bold text-5xl text-center mb-8'>SHOW MORE</h1>
      <img className='mb-8' src='./images/arrow.svg' alt='Arrow' />
    </div>
  );
};

export default HomeSectionCarauselBifacial;
