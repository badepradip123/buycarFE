import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { setColor } from '../../styles';
import { BtnOutline } from '../../components/globals/Button';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export class Payment extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cvc: '',
      expiry: '',
      focus: '',
      name: '',
      number: '',
    };
  }

  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;

    this.setState({ [name]: value });
  };

  handleSubmit(e) {
    e.preventDefault();
  }

  render() {
    return (
      <Styles>
        <Container className='mt-5'>
          <Row>
            <Col md={8}>
              {' '}
              <Card border='primary'>
                <Card.Header>Payment</Card.Header>
                <Card.Body>
                  <div id='PaymentForm'>
                    <Cards
                      cvc={this.state.cvc}
                      expiry={this.state.expiry}
                      focused={this.state.focus}
                      name={this.state.name}
                      number={this.state.number}
                    />
                  </div>
                  <Form
                    className='mt-5'
                    noValidate
                    validated={this.state.isValidated}
                    onSubmit={this.handleSubmit}
                  >
                    <Form.Row>
                      <Form.Group as={Col} controlId='formGridEmail'>
                        <Form.Label>Name on Card </Form.Label>
                        <Form.Control
                          type='text'
                          placeholder='Card Name'
                          name='name'
                          onChange={this.handleInputChange}
                          onFocus={this.handleInputFocus}
                          value={this.state.name}
                          required
                        />
                      </Form.Group>
                      <Form.Group as={Col} controlId='formGridEmail'>
                        <Form.Label>Card Number</Form.Label>
                        <Form.Control
                          type='text'
                          pattern='[0-9]{17}$'
                          name='number'
                          onChange={this.handleInputChange}
                          onFocus={this.handleInputFocus}
                          value={this.state.number}
                          placeholder='1111-2222-3333-4444'
                          required
                        />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group>
                        <Row>
                          <Col>
                            <Form.Label>Expiry date</Form.Label>
                            <Form.Group controlId='validationForm01'>
                              <Form.Control
                                type='text'
                                placeholder='MM/YY'
                                name='expiry'
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                value={this.state.expiry}
                                required
                              />
                            </Form.Group>
                          </Col>
                          <Col>
                            <Form.Label>CVC Code</Form.Label>
                            <Form.Group controlId='validationForm02'>
                              <Form.Control
                                type='password'
                                placeholder='CVV'
                                name='cvc'
                                onChange={this.handleInputChange}
                                onFocus={this.handleInputFocus}
                                pattern='[0-9]{4}'
                                value={this.state.cvc}
                                required
                              />
                            </Form.Group>
                          </Col>
                        </Row>
                      </Form.Group>
                    </Form.Row>

                    <BtnOutline>
                      <Button variant='outline-primary' type='submit'>
                        PAY (&#8377;12.22)
                      </Button>
                    </BtnOutline>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4}>
              <Card border='primary'>
                <Card.Header>Price Details</Card.Header>
                <Card.Body>
                  <Row>
                    <Col md={8}>
                      <Card.Text>Delivery Charges</Card.Text>
                    </Col>
                    <Col md={4}>
                      <Card.Text>&#8377;12.22</Card.Text>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Payment);

const Styles = styled.div`
  .border-primary {
    border-color: ${setColor.primaryColor} !important;
  }

  @media only screen and (max-width: 320px) {
    .card-body {
      padding: 0;
    }
  }
`;
