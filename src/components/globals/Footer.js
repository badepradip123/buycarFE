import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { setColor, setFont } from '../../styles';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Icon from './Icon';

const Styles = styled.div`
  .main-footer {
    background: #343a40;
    padding-top: 3rem;
    color: ${setColor.mainWhite};
    border-top: 1px solid rgba(0, 0, 0, 0.12);
  }

  .main-footer h4 {
    text-transform: uppercase;
  }

  ul li a {
    color: rgba(172, 172, 172);
    text-decoration: none;
    text-align: center;
  }

  ul li a:hover {
    color: ${setColor.mainWhite};
  }

  .footer-bottom {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }

  .footer-bottom p {
    text-align: center;
    margin: 0;
  }

  p {
    margin: 0;
  }

  .footer-icon {
    margin-left: 1rem;
  }

  a:hover {
    text-decoration: none;
  }
`;

const Footer = () => {
  return (
    <Styles>
      <div className='main-footer'>
        <Container>
          <Row>
            <Col md={3} sm={6}>
              <h4>Contact US</h4>
              <p>Pune</p>

              <p>Sumit Plaza At</p>

              <p>Phone : {`9874563210`}</p>
            </Col>
            <Col md={3} sm={6}>
              <h4>Overview</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link>Trustmarked used cars</Link>
                </li>
                <li>
                  <Link>Advertise with Us</Link>
                </li>
                <li>
                  <Link>Customer Care</Link>
                </li>
              </ul>
            </Col>
            <Col md={3} sm={6}>
              <h4>Services</h4>
              <ul className='list-unstyled'>
                <li>
                  <Link>Buy Car</Link>
                </li>
                <li>
                  <Link>Book Test Drive</Link>
                </li>
                <li>
                  <Link>New Car</Link>
                </li>
              </ul>
            </Col>

            <Col md={3} sm={6}>
              <h4>Follow Us</h4>
              <p>Let us be social</p>
              <div class='row'>
                <Icon className='footer-icon mt-3'>
                  <Link href='#'>
                    {' '}
                    <FaFacebook />
                  </Link>
                  <Link href='#'>
                    {' '}
                    <FaInstagram />
                  </Link>
                  <Link href='#'>
                    {' '}
                    <FaTwitter />
                  </Link>
                  <Link href='#'>
                    {' '}
                    <FaYoutube />
                  </Link>
                </Icon>
              </div>
            </Col>
          </Row>
          <div className='footer-bottom'>
            <p className='text-xs-center'>
              &copy;{new Date().getFullYear()} Car Delivery App - All Rights
              Reserved
            </p>
          </div>
        </Container>
      </div>
    </Styles>
  );
};

export default Footer;
