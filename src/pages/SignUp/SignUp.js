import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AuthWrapper } from '../../components/Auth/AuthWrapper';
import { Button, Form, Col } from 'react-bootstrap';
import { setColor } from '../../styles';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  .auth-inner {
    width: 650px !important;
  }
  label {
    font-weight: 500;
  }

  .forgot-password,
  .forgot-password a {
    float: right;
    font-size: 13px;
    padding-top: 10px;
    color: ${setColor.primaryColor};
    margin: 0;
  }

  .forgot-password a {
    color: ${setColor.primaryColor};
  }

  .btn-outline-primary {
    background-color: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    border-color: ${setColor.primaryColor};

    &:hover {
      color: ${setColor.primaryColor};
      background-color: ${setColor.mainWhite};
      border-color: ${setColor.primaryColor};
    }
  }
`;

class SignUp extends Component {
  state = {
    isValidated: false,
  };

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.setState({ isValidated: true });
  };
  render() {
    return (
      <div>
        <AuthWrapper>
          <div className='auth-wrapper'>
            <div className='signUp-inner'>
              <Styles>
                <Form
                  noValidate
                  validated={this.state.isValidated}
                  onSubmit={this.handleSubmit}
                >
                  <h3>Sign Up</h3>
                  <Form.Row>
                    <Form.Group as={Col} md='6' controlId='validationCustom01'>
                      <Form.Label>First name</Form.Label>
                      <Form.Control
                        required
                        type='text'
                        placeholder='First name'
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='validationCustom02'>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type='text'
                        placeholder='Last name'
                      />
                      <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId='formGroupEmail'>
                    <Form.Label>Email address</Form.Label>

                    <Form.Control
                      required
                      type='email'
                      placeholder='Enter email'
                      className='form-control'
                    />
                  </Form.Group>
                  <Form.Group controlId='formGroupEmail'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type='password'
                      placeholder='Enter password'
                      className='form-control'
                    />
                  </Form.Group>
                  <Form.Group controlId='formGridAddress1'>
                    <Form.Label>Address</Form.Label>
                    <Form.Control placeholder='1234 Main St' />
                  </Form.Group>
                  <Form.Group controlId='formGridAddress2'>
                    <Form.Label>Address 2</Form.Label>
                    <Form.Control placeholder='Apartment, studio, or floor' />
                  </Form.Group>
                  <Form.Group controlId='formGridCity'>
                    <Form.Label>City</Form.Label>
                    <Form.Control as='select' value='Choose...'>
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='formGridState'>
                    <Form.Label>State</Form.Label>
                    <Form.Control as='select' value='Choose...'>
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Control>
                  </Form.Group>
                  <Form.Group controlId='formGridZip'>
                    <Form.Label>Zip</Form.Label>
                    <Form.Control />
                  </Form.Group>
                  <Form.Group>
                    <Form.Check
                      name='terms'
                      label='Remeber me'
                      id='validationFormik0'
                    />
                  </Form.Group>
                  <Button type='submit' variant='outline-primary' block>
                    Sign Up
                  </Button>{' '}
                  <Link className='forgot-password text-right' to='/'>
                    {' '}
                    Forgot Password?
                  </Link>
                </Form>
              </Styles>
            </div>
          </div>
        </AuthWrapper>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
