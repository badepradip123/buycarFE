import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import styled from 'styled-components';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import { addAddressRequest } from '../../store/actions';
import { setColor } from '../../styles';

class AddressForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isValidated: false,
      street: '',
      apartment: '',
      city: 'Choose...',
      state: 'Choose...',
      pincode: '',
      country: '',
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
    this.props.addAddressRequest(this.state, this.props.history);
  }

  render() {
    return (
      <Styles>
        <Container className='mt-5'>
          <h3>Add a new address</h3>
          <Form
            noValidate
            validated={this.state.isValidated}
            onSubmit={this.handleSubmit}
          >
            <Form.Group controlId='formGridAddress1'>
              <Form.Label>Street</Form.Label>
              <Form.Control
                name='street'
                onChange={this.onChange}
                placeholder='1234 Main St'
                value={this.state.street}
              />
            </Form.Group>

            <Form.Group controlId='formGridAddress2'>
              <Form.Label>Apartment</Form.Label>
              <Form.Control
                name='apartment'
                onChange={this.onChange}
                placeholder='Apartment, studio, or floor'
                value={this.state.apartment}
              />
            </Form.Group>

            <Form.Group controlId='formGridCity'>
              <Form.Label>City</Form.Label>
              <Form.Control
                name='city'
                onChange={this.onChange}
                as='select'
                defaultValue='Choose...'
                value={this.state.city}
                required
                isInvalid={
                  this.props.error &&
                  ((this.props.error.city && this.props.error.city[0]) ||
                    (this.props.error.non_field_errors &&
                      this.props.error.non_field_errors[0]))
                }
              >
                <option>Choose...</option>
                <option>Pune</option>
                <option>Nagpur</option>
              </Form.Control>
              <Form.Control.Feedback type='invalid'>
                {this.props.error &&
                  ((this.props.error.city && this.props.error.city[0]) ||
                    (this.props.error.non_field_errors &&
                      this.props.error.non_field_errors[0]))}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Control
                name='state'
                onChange={this.onChange}
                as='select'
                defaultValue='Choose...'
                value={this.state.state}
              >
                <option>Choose...</option>
                <option>Maharashtra</option>
                <option>Delhi</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='formGridZip'>
              <Form.Label>Pincode</Form.Label>
              <Form.Control
                name='pincode'
                onChange={this.onChange}
                placeholder='eg 412023'
                value={this.state.pincode}
                required
                isInvalid={
                  this.props.error &&
                  ((this.props.error.pincode && this.props.error.pincode[0]) ||
                    (this.props.error.non_field_errors &&
                      this.props.error.non_field_errors[0]))
                }
              />
              <Form.Control.Feedback type='invalid'>
                {this.props.error &&
                  ((this.props.error.pincode && this.props.error.pincode[0]) ||
                    (this.props.error.non_field_errors &&
                      this.props.error.non_field_errors[0]))}
              </Form.Control.Feedback>
            </Form.Group>

            <Button size='lg' variant='outline-primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.address.loading,
    error: state.address.error,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = {
  addAddressRequest,
};

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AddressForm);

const Styles = styled.div`
  .btn-outline-primary {
    background-color: transparent;
    transition: all 300ms ease-in;
    border-color: ${setColor.primaryColor};
    color: ${setColor.primaryColor};
    &:hover {
      background-color: ${setColor.primaryColor};
      color: ${setColor.mainWhite};
    }
  }
`;
