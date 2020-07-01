import React, { useState } from 'react';
import styled from 'styled-components';
import { Container, Col, Row, Accordion, Card } from 'react-bootstrap';
import { BsChevronDown } from 'react-icons/bs';
import Icon from '../globals/Icon';

const Styles = styled.div`
  p {
    margin-bottom: 0;
  }

  .arrowIcon {
    float: right;
    transition: transform 0.6s;
  }

  .rotate {
    transform: rotate(-180deg);
  }

  .card-body {
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }
  @media only screen and (max-width: 768px) {
  }

  @media only screen and (max-width: 480px) {
  }

  @media only screen and (max-width: 320px) {
  }
`;

const DetailsSection = () => {
  const [setRotate, setRotateState] = useState('arrowIcon');

  function handleClick(e, c) {
    // console.log('click', e, c);
    setRotateState(
      setRotate === 'arrowIcon' ? 'arrowIcon rotate' : 'arrowIcon'
    );
  }

  console.log('list---');
  return (
    <Styles>
      <Container className='mainContainer mt-5'>
        <div>
          <h2 className='h2'>Vitara Brezza VDI (O) Specifications</h2>
        </div>
        <Accordion id='1' className='mt-3'>
          <Card>
            <Accordion.Toggle
              onClick={handleClick}
              as={Card.Header}
              eventKey='0'
            >
              <Row>
                <Col>Engine & Transmission</Col>
                <Col>
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
                    <p>Engine</p>
                  </Col>
                  <Col>
                    <p>1248cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC</p>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>
                <Row>
                  <Col>
                    <p>Engine</p>
                  </Col>
                  <Col>
                    <p>1248cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC</p>
                  </Col>
                </Row>
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
        <div>
          <div>
            <h2 className='h2'>Vitara Brezza VDI (O) Features</h2>
          </div>
          <Accordion className='mt-3'>
            <Card>
              <Accordion.Toggle
                onClick={handleClick}
                as={Card.Header}
                eventKey='1'
              >
                <Row>
                  <Col>Engine & Transmission</Col>
                  <Col>
                    <Icon className={`${setRotate}`}>
                      <BsChevronDown />
                    </Icon>
                  </Col>
                </Row>
              </Accordion.Toggle>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                  <Row>
                    <Col>
                      <p>Engine</p>
                    </Col>
                    <Col>
                      <p>1248cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
              <Accordion.Collapse eventKey='1'>
                <Card.Body>
                  <Row>
                    <Col>
                      <p>Engine</p>
                    </Col>
                    <Col>
                      <p>1248cc, 4 Cylinders Inline, 4 Valves/Cylinder, DOHC</p>
                    </Col>
                  </Row>
                </Card.Body>
              </Accordion.Collapse>
            </Card>
          </Accordion>
        </div>
      </Container>
    </Styles>
  );
};

export default DetailsSection;
