import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Image,
} from 'react-bootstrap';
import styled from 'styled-components';
import { setColor } from '../../styles';
import { BtnOutline } from '../../components/globals/Button';
import correct from '../../assets/correct.gif';
import { withRouter } from 'react-router-dom';
import { compose } from 'redux';

class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.history.push('/');
    }, 3000);
  }

  render() {
    return (
      <Styles>
        <Container className='mt-5'>
          <h2>Thank you</h2>
          <div style={{ textAlign: 'center' }}>
            <Image src={correct} />
          </div>
          <h2>
            Your Test Drive Has Been Booked <br />
            Our Representative will Contact You Soon
          </h2>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Delivery);

const Styles = styled.div`
  h2 {
    text-align: center;
    line-height: 50px;
    color: ${setColor.primaryColor};
    margin-top: 2rem;
  }

  @media only screen and (max-width: 480px) {
    h2 {
      font-size: 22px;
    }
  }

  @media only screen and (max-width: 320px) {
    h2 {
      font-size: 18px;
    }
  }
`;
