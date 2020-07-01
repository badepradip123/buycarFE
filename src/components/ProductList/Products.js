import React, { useState } from 'react';
import { Card, Col, Row, Accordion } from 'react-bootstrap';
import car from '../../assets/Images/car2.png';
import styled from 'styled-components';
import { MdAirlineSeatReclineNormal, MdLocalGasStation } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import Icon from '../globals/Icon';
import { setColor } from '../../styles';
import { useHistory } from 'react-router';

const projects = [
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/7083/1587199027573/front-left-side-47.jpg',
    title: 'Maruti Swift',
    price: '5.19 - 8.02 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg?tr=w-456',
    title: 'Maruti Baleno',
    price: '5.63 - 8.96 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ignis/7584/1583132645318/front-left-side-47.jpg',
    title: 'Maruti Ignis',
    price: '4.89 - 7.19 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7672/1584072033906/front-left-side-47.jpg',
    title: 'Hyundai Venue',
    price: '6.69 - 11.5 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Vitara-Brezza/7295/1585567830503/front-left-side-47.jpg',
    title: 'Maruti Vitara Brezza',
    price: '7.34 - 11.4 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Swift/7083/1587199027573/front-left-side-47.jpg',
    title: 'Maruti Swift',
    price: '5.19 - 8.02 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/630x420/Maruti/Maruti-Baleno/6780/1564491336282/front-left-side-47.jpg?tr=w-456',
    title: 'Maruti Baleno',
    price: '5.63 - 8.96 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Ignis/7584/1583132645318/front-left-side-47.jpg',
    title: 'Maruti Ignis',
    price: '4.89 - 7.19 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Hyundai/Venue/7672/1584072033906/front-left-side-47.jpg',
    title: 'Hyundai Venue',
    price: '6.69 - 11.5 Lakh*',
    id: 1,
  },
  {
    img:
      'https://stimg.cardekho.com/images/carexteriorimages/930x620/Maruti/Vitara-Brezza/7295/1585567830503/front-left-side-47.jpg',
    title: 'Maruti Vitara Brezza',
    price: '7.34 - 11.4 Lakh*',
    id: 1,
  },
];

const Products = () => {
  const history = useHistory();

  const [setRotate, setRotateState] = useState('arrowIcon');

  function handleClick(e) {
    setRotateState(
      setRotate === 'arrowIcon' ? 'arrowIcon rotate' : 'arrowIcon'
    );
  }

  return (
    <Styles>
      {projects.map((item, index) => {
        return (
          <Card
            onClick={() =>
              history.push({
                pathname: `/details/${item.id}`,
                state: {
                  id: item.id,
                  item: item,
                },
              })
            }
            className='main-card mt-5'
          >
            <Card.Img width={200} height={200} src={item.img} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <div className='price'>
                <h2>&#8377; {item.price}</h2>
                <p className='text-muted ml-2'>onwards,On-Road Price, Pune</p>
              </div>
              <Row>
                <Icon className='ml-3 mr-1' color={setColor.lightBlack}>
                  <MdAirlineSeatReclineNormal />
                </Icon>
                <p>5 seats</p>
                <Icon className='ml-3 mr-1' color={setColor.lightBlack}>
                  <MdLocalGasStation />
                </Icon>
                <p>Petrol</p>
              </Row>
              <Accordion className='mt-3'>
                <Card className='variantCard'>
                  <Accordion.Toggle
                    onClick={handleClick}
                    as={Card.Header}
                    eventKey='0'
                  >
                    <Row className='justify-content-md-center'>
                      <Col md='auto'>
                        <p>See Variants</p>
                      </Col>
                      <Col md='auto'>
                        <Icon className={`${setRotate}`}>
                          <BsChevronDown />
                        </Icon>
                      </Col>
                    </Row>
                  </Accordion.Toggle>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      <Row>
                        <Col>
                          <p>LXI</p>
                        </Col>
                        <Col>
                          <h4 style={{ color: setColor.primaryColor }}>
                            &#8377; {item.price}
                          </h4>
                        </Col>
                        <Col>
                          <p className='text-muted'>
                            1462 cc, Manual, Petrol, 17.03 kmpl
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                  <Accordion.Collapse eventKey='0'>
                    <Card.Body>
                      <Row>
                        <Col>
                          <p>LXI</p>
                        </Col>
                        <Col>
                          <h4 style={{ color: setColor.primaryColor }}>
                            &#8377; {item.price}
                          </h4>
                        </Col>
                        <Col>
                          <p className='text-muted'>
                            1462 cc, Manual, Petrol, 17.03 kmpl
                          </p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        );
      })}
    </Styles>
  );
};

export default Products;

const Styles = styled.div`
  .card-img {
    width: 30%;
  }

  .main-card.card {
    transition: box-shadow 0.3s;
    cursor: pointer;
    overflow: hidden;
    flex-direction: row !important;
  }

  .main-card.card:hover {
    box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  }

  .price {
    display: flex;
    flex-direction: row;
  }

  .row p {
    color: ${setColor.primaryColor};
    margin-bottom: 0 !important;
  }

  .arrowIcon {
    float: right;
    transition: transform 0.6s;
  }

  .rotate {
    transform: rotate(-180deg);
  }
`;
