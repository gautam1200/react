
import React from "react";
import Slider from "react-slick";
import So1 from './So-1.jpg';
import So2 from './So-2.jpg';
import So3 from './So-3.jpg';
import So4 from './So-4.jpg';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Fade() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true, // Optional: Show next/prev arrows
  };

  const images = [So1, So2, So3, So4];

  return (
    <div className="slider-container" style={{ padding: '20px' }}>
      <Slider {...settings}>
        {images.map((imgSrc, index) => (
          <div key={index}>
            <img 
              src={imgSrc} 
              alt={`Slide ${index + 1}`} 
              style={{ width: '100%', height: 'auto' }} 
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Fade;


