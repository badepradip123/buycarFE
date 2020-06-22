import React, { Component } from 'react';
import styled from 'styled-components';
import { Container, Image, Col, Row, Button } from 'react-bootstrap';
import { setColor } from '../../styles';
import Product from '../../assets/Images/brezza.jpg';
import { BtnOutline } from '../globals/Button';
import { Link } from 'react-router-dom';
import { MdAirlineSeatReclineNormal, MdLocalGasStation } from 'react-icons/md';
import Icon from '../globals/Icon';
import { connect } from 'react-redux';
import { onSchedule } from '../../store/actions';

const Styles = styled.div`
  .mainContainer {
    display: flex;
    position: relative;
  }
  .leftContainer {
    float: left;
    width: 40%;
  }

  .leftContainer img {
    width: 100%;
    height: 25rem;
  }

  .rightContainer {
    float: right;
    width: 60%;
    margin-left: 2rem;
  }

  .rightContainer .price {
    color: ${setColor.primaryColor};
  }

  .rightContainer p {
    color: ${setColor.primaryColor};
  }

  .rightContainer .btn-container {
    position: absolute;
    bottom: 0;
    width: 50%;
  }

  @media only screen and (max-width: 768px) {
    .rightContainer .btn-container {
      position: absolute;
      bottom: 0;
      width: 60%;
    }
  }

  @media only screen and (max-width: 480px) {
    .col-sm {
      margin-bottom: 5px;
    }

    h2 {
      font-size: 20px;
    }

    h3 {
      font-size: 18px;
    }

    .leftContainer {
      width: 40%;
    }
    .rightContainer {
      width: 60%;
      margin-left: 1rem;
    }
    .leftContainer img {
      height: 22rem;
    }
  }

  @media only screen and (max-width: 320px) {
    .leftContainer {
      width: 35%;
    }
    .rightContainer {
      width: 65%;
      margin-left: 1rem;
    }
    .rightContainer .btn-container {
      width: 65%;
    }
  }
`;

class DetailsHead extends Component {
  onBookDrive = () => {
    this.props.onSchedule(true);
  };

  render() {
    return (
      <Styles>
        <Container className='mainContainer mt-5'>
          <div className='leftContainer'>
            <Image alt='Product Image' src={Product} rounded />
          </div>
          <div className='rightContainer'>
            <h2>Maruti Suzuki Vitara Brezza VDI (O)</h2>
            <h3 className='text-muted'>Last Record Price</h3>
            <h3 className='price'>&#8377; 7.94 Lakh</h3>
            <Row class='detialsContainer'>
              <Icon className='ml-3 mr-1' color={setColor.lightBlack}>
                <MdAirlineSeatReclineNormal />
              </Icon>
              <p>5 seats</p>
              <Icon className='ml-3 mr-1' color={setColor.lightBlack}>
                <MdLocalGasStation />
              </Icon>
              <p>Petrol</p>
            </Row>
            <p className='text-muted'>*Ex-showroom Price in Pune</p>
            <Row className='btn-container'>
              <Col sm>
                <BtnOutline>
                  <Button
                    onClick={this.onBookDrive}
                    variant='outline-primary'
                    block
                  >
                    Book Test Drive
                  </Button>
                </BtnOutline>
              </Col>
              <Col sm>
                <BtnOutline>
                  <Button as={Link} to='/login' variant='primary' block>
                    Buy Now
                  </Button>
                </BtnOutline>
              </Col>
            </Row>
          </div>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
  onSchedule,
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailsHead);
