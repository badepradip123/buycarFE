import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Card, Button, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { setColor } from '../../styles';
import { Link, withRouter } from 'react-router-dom';
import { fetchAddressRequest, deleteAddressRequest } from '../../store/actions';
import Loader from '../globals/Loader';
import { compose } from 'redux';

class AddressCard extends Component {
  componentDidMount() {
    this.props.fetchAddressRequest();
  }

  componentDidUpdate() {
    if (this.props.delSuccess) {
      this.props.fetchAddressRequest();
    }
  }

  onDelete = (addrees_id) => {
    console.log('id', addrees_id);
    this.props.deleteAddressRequest(addrees_id);
  };

  onClick = () => {
    if (this.props.location.state) {
      if (
        this.props.location.state.carType &&
        this.props.location.state.carType === 'buycar'
      ) {
        this.props.history.push('/checkout');
      } else if (
        this.props.location.state.carType &&
        this.props.location.state.carType === 'testdrive'
      ) {
        this.props.history.push('/success');
      }
    }
  };

  render() {
    return (
      <Styles>
        <Container className='mt-5'>
          {this.props.loading ? (
            <Loader />
          ) : (
            <div>
              <h3>
                {this.props.userAddress && this.props.userAddress.length > 0
                  ? 'Select a Delivery Address'
                  : ''}
              </h3>
              <Row>
                {this.props.userAddress.map((item, index) => {
                  return (
                    <Col className='mt-3' md={4}>
                      <Card>
                        <Card.Body>
                          <Card.Title>Pradip Bade</Card.Title>
                          <Card.Text>
                            {item.street} {item.apartment}
                            {item.street || item.apartment ? <br /> : ''}
                            {item.city} {item.state} {item.pincode}
                            {item.street || item.apartment ? '' : <br />}
                            <br />
                          </Card.Text>

                          <Button
                            // as={Link}
                            // to='/checkout'
                            onClick={this.onClick}
                            block
                            variant='outline-primary'
                          >
                            Delivery Here
                          </Button>
                          <Button
                            onClick={() => this.onDelete(item.id)}
                            block
                            variant='danger'
                          >
                            Delete
                          </Button>
                        </Card.Body>
                      </Card>
                    </Col>
                  );
                })}
              </Row>
            </div>
          )}
        </Container>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('addres card', state.address);
  return {
    loading: state.address.loading,
    error: state.address.error,
    isAuthenticated: state.auth.token !== null,
    userAddress: state.address.userAddress,
    delSuccess: state.address.delSuccess,
  };
};

const mapDispatchToProps = { fetchAddressRequest, deleteAddressRequest };

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(AddressCard);

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
