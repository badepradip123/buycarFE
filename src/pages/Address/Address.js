import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AddressCard } from '../../components/Address/AddressCard';
import { AddressForm } from '../../components/Address/AddressForm';

export class Address extends Component {
  render() {
    return (
      <div>
        <AddressCard />
        <AddressForm />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Address);
