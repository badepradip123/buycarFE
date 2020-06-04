import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AuthWrapper } from '../../components/Auth/AuthWrapper';
import { Button, Form } from 'react-bootstrap';
import { setColor } from '../../styles';
import { Link } from 'react-router-dom';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      email: '',
      password: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
    // console.log(this.state);
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
    }

    this.setState({ isValidated: true });
    this.props.userLoginRequest(this.state);
  }
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
                      value={this.state.email}
                      onChange={this.onChange}
                      name='email'
                    />
                  </Form.Group>
                  <Form.Group controlId='formGroupEmail'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type='password'
                      placeholder='Enter password'
                      className='form-control'
                      onChange={this.onChange}
                      value={this.state.password}
                      name='password'
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

const mapDispatchToProps = {
  // userLoginRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

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
