import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AuthWrapper } from '../../components/Auth/AuthWrapper';
import { Button, Form } from 'react-bootstrap';
import { setColor } from '../../styles';
import { Link } from 'react-router-dom';

const Styles = styled.div`
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

  .register-here {
    color: ${setColor.primaryColor};
    font-size: 15px;
    text-align: center;
    position: absolute;
    margin: 40px auto;
    left: 43%;
  }

  .btn-outline-primary {
    background-color: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
    border-color: ${setColor.primaryColor};
    position: relative;

    &:hover {
      color: ${setColor.primaryColor};
      background-color: ${setColor.mainWhite};
      border-color: ${setColor.primaryColor};
    }
  }
`;

class Login extends Component {
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
            <div className='auth-inner'>
              <Styles>
                <Form
                  noValidate
                  validated={this.state.isValidated}
                  onSubmit={this.handleSubmit}
                >
                  <h3>Sign In</h3>
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
                  <Form.Group>
                    <Form.Check
                      name='terms'
                      label='Remeber me'
                      id='validationFormik0'
                    />
                  </Form.Group>
                  <Button type='submit' variant='outline-primary' block>
                    Log In
                  </Button>{' '}
                  <Link className='forgot-password text-right' to='/'>
                    {' '}
                    Forgot Password?
                  </Link>
                  <Link className='register-here text-right' to='/signup'>
                    {' '}
                    New to CarDekho ?REGISTER here
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

export default connect(mapStateToProps, mapDispatchToProps)(Login);
