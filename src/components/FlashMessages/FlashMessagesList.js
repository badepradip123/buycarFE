import React from 'react';
import FlashMessage from './FlashMessage';
import { connect } from 'react-redux';

class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map((message) => (
      <FlashMessage message={message} />
    ));
    return <div>{messages}</div>;
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    messages: state.flash,
  };
}

export default connect(mapStateToProps, null)(FlashMessagesList);
