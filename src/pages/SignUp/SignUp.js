import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AuthWrapper } from '../../components/Auth/AuthWrapper';
import { Button, Form, Col, InputGroup } from 'react-bootstrap';
import { setColor } from '../../styles';
import { Link, withRouter } from 'react-router-dom';
import { userSignUpRequest } from '../../store/actions/';
import { compose } from 'redux';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      mobile: '',
    };

    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
    }

    this.props.userSignUpRequest(this.state, this.props.history);
  }
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
                        value={this.state.firstName}
                        onChange={this.onChange}
                        disabled={this.props.loading}
                        name='firstName'
                        isInvalid={
                          this.props.error &&
                          ((this.props.error.first_name &&
                            this.props.error.first_name[0]) ||
                            (this.props.error.non_field_errors &&
                              this.props.error.non_field_errors[0]))
                        }
                      />
                      <Form.Control.Feedback type='invalid'>
                        {this.props.error &&
                          ((this.props.error.first_name &&
                            this.props.error.first_name[0]) ||
                            (this.props.error.non_field_errors &&
                              this.props.error.non_field_errors[0]))}
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col} md='6' controlId='validationCustom02'>
                      <Form.Label>Last name</Form.Label>
                      <Form.Control
                        required
                        type='text'
                        placeholder='Last name'
                        value={this.state.lastName}
                        onChange={this.onChange}
                        disabled={this.props.loading}
                        name='lastName'
                        isInvalid={
                          this.props.error &&
                          ((this.props.error.last_name &&
                            this.props.error.last_name[0]) ||
                            (this.props.error.non_field_errors &&
                              this.props.error.non_field_errors[0]))
                        }
                      />
                      <Form.Control.Feedback type='invalid'>
                        {this.props.error &&
                          ((this.props.error.last_name &&
                            this.props.error.last_name[0]) ||
                            (this.props.error.non_field_errors &&
                              this.props.error.non_field_errors[0]))}
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Form.Row>
                  <Form.Group controlId='formGroupEmail'>
                    <Form.Label>Email address</Form.Label>

                    <Form.Control
                      required
                      type='email'
                      placeholder='Enter email'
                      className='form-control'
                      value={this.state.email}
                      onChange={this.onChange}
                      isInvalid={
                        this.props.error &&
                        ((this.props.error.email &&
                          this.props.error.email[0]) ||
                          (this.props.error.non_field_errors &&
                            this.props.error.non_field_errors[0]))
                      }
                      name='email'
                    />
                    <Form.Control.Feedback type='invalid'>
                      {this.props.error &&
                        ((this.props.error.email &&
                          this.props.error.email[0]) ||
                          (this.props.error.non_field_errors &&
                            this.props.error.non_field_errors[0]))}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId='formGroupPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type='password'
                      placeholder='Enter password'
                      className='form-control'
                      value={this.state.password}
                      onChange={this.onChange}
                      name='password'
                      isInvalid={
                        this.props.error &&
                        ((this.props.error.password &&
                          this.props.error.password[0]) ||
                          (this.props.error.non_field_errors &&
                            this.props.error.non_field_errors[0]))
                      }
                    />
                    <Form.Control.Feedback type='invalid'>
                      {this.props.error &&
                        ((this.props.error.password &&
                          this.props.error.password[0]) ||
                          (this.props.error.non_field_errors &&
                            this.props.error.non_field_errors[0]))}
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group controlId='formGroupMobile'>
                    <Form.Label>Mobile</Form.Label>
                    <InputGroup className='mb-2'>
                      <InputGroup.Prepend>
                        <InputGroup.Text>+91</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        required
                        type='text'
                        placeholder='Mobile'
                        className='form-control'
                        value={this.state.mobile}
                        onChange={this.onChange}
                        name='mobile'
                        isInvalid={
                          this.props.error &&
                          ((this.props.error.mobile &&
                            this.props.error.mobile[0]) ||
                            (this.props.error.non_field_errors &&
                              this.props.error.non_field_errors[0]))
                        }
                      />
                      <Form.Control.Feedback type='invalid'>
                        {this.props.error &&
                          ((this.props.error.mobile &&
                            this.props.error.mobile[0]) ||
                            (this.props.error.non_field_errors &&
                              this.props.error.non_field_errors[0]))}
                      </Form.Control.Feedback>
                    </InputGroup>
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

const mapStateToProps = (state) => {
  // console.log('error', state.signup.error);
  return {
    loading: state.signup.loading,
    error: state.signup.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = {
  userSignUpRequest,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(SignUp);
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
