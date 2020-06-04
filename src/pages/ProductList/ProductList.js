import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from '../../components/ProductList/Products';
import { Container } from 'react-bootstrap';

export class ProductList extends Component {
  render() {
    return (
      <Container>
        <Products />
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
