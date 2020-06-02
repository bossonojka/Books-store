import React from 'react';
import Slider from 'react-slick';
import { imgUrls } from '../../mockedData/mockedImgData';

import './Slider.scss';

const SlickSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3500,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {imgUrls.map((img) => {
          return (
            <div key={img}>
              <h3 className="slider-img-container">
                <img className="slider-img" src={img} alt="img" />
              </h3>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export { SlickSlider };
