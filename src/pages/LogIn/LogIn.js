import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { userLoginRequest } from '../../store/actions';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { AuthWrapper } from '../../components/Auth/AuthWrapper';
import { Button, Form, Spinner, Alert, InputGroup } from 'react-bootstrap';
import { setColor } from '../../styles';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { withRouter } from 'react-router';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      username: '',
      password: '',
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
    this.props.userLoginRequest(this.state, this.props.history);
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
                    <Form.Label>username</Form.Label>
                    <InputGroup className='mb-2'>
                      <InputGroup.Prepend>
                        <InputGroup.Text>+91</InputGroup.Text>
                      </InputGroup.Prepend>
                      <Form.Control
                        required
                        type='text'
                        placeholder='1234567890'
                        className='form-control'
                        value={this.state.username}
                        onChange={this.onChange}
                        disabled={this.props.loading}
                        name='username'
                        isInvalid={
                          this.props.error &&
                          ((this.props.error.username &&
                            this.props.error.username[0]) ||
                            (this.props.error.non_field_errors &&
                              this.props.error.non_field_errors[0]))
                        }
                      />
                    </InputGroup>
                    <Form.Control.Feedback type='invalid'>
                      {this.props.error &&
                        ((this.props.error.username &&
                          this.props.error.username[0]) ||
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
                      onChange={this.onChange}
                      value={this.state.password}
                      name='password'
                      disabled={this.props.loading}
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
                  <Form.Group>
                    <Form.Check
                      name='terms'
                      label='Remeber me'
                      id='validationFormik0'
                    />
                  </Form.Group>
                  <Button type='submit' variant='outline-primary' block>
                    {this.props.loading ? (
                      <Spinner
                        as='span'
                        animation='border'
                        size='sm'
                        role='status'
                        aria-hidden='true'
                      />
                    ) : (
                      'Log In'
                    )}
                  </Button>{' '}
                  <Link className='forgot-password text-right' to='/'>
                    {' '}
                    Forgot Password?
                  </Link>
                  <Link className='register-here text-right' to='/signup'>
                    {' '}
                    New to BuyCar ?REGISTER here
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
  console.log(state);
  return {
    loading: state.auth.loading,
    error: state.auth.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = {
  userLoginRequest,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(Login);

const Styles = styled.div`
  label {
    font-weight: 500;
  }

  .invalid-feedback {
    height: 1em !important;
    display: block;
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
