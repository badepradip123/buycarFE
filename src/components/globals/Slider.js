import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import { setColor } from '../../styles';
import styled from 'styled-components';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import Icon from './Icon';
const Styles = styled.div`
  .carousel-indicators .active {
    background-color: ${setColor.primaryColor};
  }
  .carousel-indicators li {
    opacity: 1;
  }

  .slideIcon {
    background-color: ${setColor.mainWhite};
    padding: 10px 10px;
    border-radius: 50%;
    font-size: 1.5em;
    color: ${setColor.lightBlack} !important;
  }
  .carousel-control-next:hover .slideIcon,
  .carousel-control-prev:hover .slideIcon {
    background-color: ${setColor.primaryColor};
    color: ${setColor.mainWhite} !important;
  }
`;

const Slider = (props) => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <Styles>
      <Carousel
        className='mt-5'
        prevIcon={
          <Icon className='slideIcon' size={'2em'} color={setColor.mainWhite}>
            <FiChevronLeft />
          </Icon>
        }
        nextIcon={
          <Icon className='slideIcon' size={'2em'} color={setColor.mainWhite}>
            <FiChevronRight />
          </Icon>
        }
        activeIndex={index}
        onSelect={handleSelect}
      >
        {props.data.map((item, index) => {
          return (
            <Carousel.Item key={index}>
              <img className='d-block w-100' src={item.img} alt='First slide' />
              <Carousel.Caption>
                <h3>{item.title}</h3>
                <p>{item.subTitle}</p>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </Styles>
  );
};

export default Slider;
