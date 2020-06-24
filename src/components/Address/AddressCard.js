import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { setColor } from '../../styles';
import { Link } from 'react-router-dom';

export class AddressCard extends Component {
  render() {
    return (
      <Styles>
        <Container className='mt-5'>
          <h3>Select a Delivery Address</h3>
          <Row>
            {[1, 2, 3, 4, 5, 6].map((item, index) => {
              return (
                <Col className='mt-3' md={4}>
                  <Card>
                    <Card.Body>
                      <Card.Title>Pradip Bade</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>

                      <Button
                        as={Link}
                        to='/checkout'
                        block
                        variant='outline-primary'
                      >
                        Delivery Here
                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AddressCard);

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

  .card {
    transition: box-shadow 0.3s;
    cursor: pointer;
    overflow: hidden;
    margin: 0 auto;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card:hover {
    box-shadow: -1px 9px 40px -12px rgba(0, 0, 0, 0.75);
  }
`;
