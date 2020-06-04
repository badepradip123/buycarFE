import React, { useState } from 'react';
import { Card, Button, Col, Row, Accordion } from 'react-bootstrap';
import { PrimaryBtnOutline } from '../globals/Button';
import car from '../../assets/Images/car2.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MdAirlineSeatReclineNormal, MdLocalGasStation } from 'react-icons/md';
import { BsChevronDown } from 'react-icons/bs';
import Icon from '../globals/Icon';
import { setColor } from '../../styles';

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

const Products = () => {
  const [setRotate, setRotateState] = useState('arrowIcon');

  function handleClick(e) {
    setRotateState(
      setRotate === 'arrowIcon' ? 'arrowIcon rotate' : 'arrowIcon'
    );
  }

  return (
    <Styles className='mt-5'>
      <Card className='main-card'>
        <Card.Img width={200} height={200} src={car} />
        <Card.Body>
          <Card.Title>Maruti Suziki</Card.Title>
          <div className='price'>
            <h2>&#8377; 7.94 Lakh </h2>
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
                        &#8377; 7.94 Lakh{' '}
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
                        &#8377; 7.94 Lakh{' '}
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
    </Styles>
  );
};

export default Products;
