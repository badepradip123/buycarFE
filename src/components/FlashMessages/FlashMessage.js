import React from 'react';
import { Alert, Toast } from 'react-bootstrap';
import styled from 'styled-components';

class FlashMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: true,
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.deleteFlashMessage(this.props.message.id);
  }

  render() {
    const { id, type, text } = this.props.message;
    if (this.state.show) {
      return (
        <Styles>
          <Toast
            style={{
              position: 'absolute',
              top: '2%',
              right: 0,
            }}
            animation
            show={this.state.show}
            onClose={() => this.setState({ show: false })}
            delay={3000}
            autohide
          >
            <Alert
              variant={type}
              onClose={() => this.setState({ show: false })}
              dismissible
            >
              {text}
            </Alert>
          </Toast>
        </Styles>
      );
    }
    return null;
  }
}

export default FlashMessage;

const Styles = styled.div`
  .alert {
    margin-bottom: 0;
  }
`;
