import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';

const Slider = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Carousel className='mt-5' activeIndex={index} onSelect={handleSelect}>
      {props.data.map((item, index) => {
        return (
          <Carousel.Item>
            <img className='d-block w-100' src={item.img} alt='First slide' />
            <Carousel.Caption>
              <h3>{item.title}</h3>
              <p>{item.subTitle}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default Slider;
