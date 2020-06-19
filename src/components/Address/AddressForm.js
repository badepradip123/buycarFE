import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Form, Button } from 'react-bootstrap';
import { setColor } from '../../styles';
import styled from 'styled-components';

export class AddressForm extends Component {
  render() {
    return (
      <Styles>
        <Container className='mt-5'>
          <h3>Add a new address</h3>
          <Form>
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
              <Form.Control />
            </Form.Group>

            <Form.Group controlId='formGridState'>
              <Form.Label>State</Form.Label>
              <Form.Control as='select' defaultValue='Choose...'>
                <option>Choose...</option>
                <option>...</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId='formGridZip'>
              <Form.Label>Zip</Form.Label>
              <Form.Control />
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

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddressForm);

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
