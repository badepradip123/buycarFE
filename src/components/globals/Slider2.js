import React, { useState } from 'react';
import { Card, Button, Col, Row } from 'react-bootstrap';
import SlickSlider from 'react-slick';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import styled from 'styled-components';
import Icon from './Icon';
import { setColor, setTransition } from '../../styles';

const Styles = styled.div`
  .arrowStyle {
    position: absolute;
    top: 50%;
    z-index: 1;
  }

  .right-0 {
    right: 0;
  }

  .left-0 {
    left: 0;
  }

  .card {
    transition: box-shadow 0.3s;
    cursor: pointer;
    overflow: hidden;
    margin: 0 auto;
    width: 80%;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card:hover {
    box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  }

  .card-img {
    height: 8rem;
    border-bottom-left-radius: 0;
    border-bottom-right-radius: 0;
  }

  .inner {
    overflow: hidden;
  }

  .inner img {
    transition: all 1.5s ease;
    /* ${setTransition('all', '1.5s', 'ease')} */
  }

  .inner:hover img {
    transform: scale(1.5);
  }

  .card-title {
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 0;
    color: ${setColor.primaryColor};
  }

  .col {
    padding-left: 0;
    padding-right: 0;
    margin-bottom: 2rem;
  }
`;

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className='arrowStyle right-0' onClick={onClick}>
      <Icon className='slideIcon' size={'2em'} color={setColor.primaryColor}>
        <FiChevronRight />
      </Icon>
    </div>
  );
}

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div className={'arrowStyle left-0'} onClick={onClick}>
      <Icon className='slideIcon' size={'2em'} color={setColor.primaryColor}>
        <FiChevronLeft />
      </Icon>
    </div>
  );
}

const Slider2 = (props) => {
  var settings = {
    className: 'slider variable-width',
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    speed: 500,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Styles className='mt-5'>
      <SlickSlider {...settings}>
        {props.data.map((item, index) => {
          return (
            <Col>
              <Card>
                <div className='inner'>
                  <Card.Img src={item.img} />
                </div>
                <Card.Title>Card Title</Card.Title>
              </Card>
            </Col>
          );
        })}
      </SlickSlider>
    </Styles>
  );
};

export default Slider2;
