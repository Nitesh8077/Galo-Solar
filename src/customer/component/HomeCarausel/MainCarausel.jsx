import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const items = [
    <img src="/images/one.svg" alt="Image 1" className="item h-80 w-full object-cover" data-value="1" />,
    <img src="/images/two.jpg" alt="Image 2" className="item h-80 w-full object-cover" data-value="2" />,
    <img src="/images/three.svg" alt="Image 2" className="item h-80 w-full object-cover" data-value="2" />,
];

const MainCarausel = () => (
    <div className="bg-black">
        <AliceCarousel
            items={items}
            controlsStrategy="alternate"
            autoPlay
            autoPlayInterval={1000}
            infinite
            disableButtonsControls
        />
    </div>
);

export default MainCarausel;
