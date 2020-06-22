import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Row, Form, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import { GoCalendar } from 'react-icons/go';
import 'react-calendar/dist/Calendar.css';
import { onSchedule } from '../../../store/actions';
import styled from 'styled-components';
import Icon from '../../globals/Icon';
import { setColor } from '../../../styles';

const dropdownTime = [
  '10 am',
  '11 am',
  '12 am',
  '1 pm',
  '2 pm',
  '3 pm',
  '4 pm',
  '5 pm',
];
class Schedule extends Component {
  state = {
    date: new Date(),
    showCalender: false,
    time: '10 am',
  };

  handleClose = () => {
    this.props.onSchedule(false);
  };

  handleSelect = (e, v) => {
    this.setState({ time: this.select.value });
  };

  onSubmit = () => {
    console.log(this.state.date, this.state.time);
  };

  onChange = (date) => this.setState({ date });
  render() {
    return (
      <Styles>
        <div>
          <Modal show={this.props.show} onHide={this.handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Ready for Test Drive</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Shchedule your test drive with suitable time
              <Row className='ml-1 mt-3'>
                <p>Choose Date : </p>
                <Icon className='ml-2' color={setColor.primaryColor}>
                  <GoCalendar
                    onClick={() =>
                      this.setState((prevState) => ({
                        showCalender: !prevState.showCalender,
                      }))
                    }
                  />
                </Icon>

                {this.state.showCalender && (
                  <div className='inner'>
                    <Calendar
                      onChange={this.onChange}
                      value={this.state.date}
                    />
                  </div>
                )}
              </Row>
              <Row className='ml-1 mt-3'>
                <p className='mt-1'>Choose Time : </p>
                <Col className=''>
                  <Form.Control
                    onChange={this.handleSelect}
                    size='sm'
                    ref={(select) => {
                      this.select = select;
                    }}
                    as='select'
                  >
                    {dropdownTime.map((time, index) => {
                      return <option>{time}</option>;
                    })}
                  </Form.Control>
                </Col>
              </Row>
            </Modal.Body>
            <Modal.Footer>
              <Button variant='secondary' onClick={this.handleClose}>
                Close
              </Button>
              <Button variant='primary' onClick={this.onSubmit}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  //   console.log('test', state);
  return {
    show: state.details.showSchedule,
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = {
  onSchedule,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);

const Styles = styled.div`
  .inner .react-calendar {
    transition: all 1.5s ease;
  }

  .inner:hover .react-calendar:hover {
    transform: scale(2);
  }

  .dropdown .btn-primary {
    background-color: ${setColor.mainWhite};
    border-color: ${setColor.mainWhite};
    color: ${setColor.lightBlack};

    &:focus,
    :active {
      box-shadow: 0px 0px transparent !important;
      background-color: ${setColor.mainWhite};
      border-color: ${setColor.mainWhite};
      color: ${setColor.lightBlack};
    }
  }
  .dropdown-item:active,
  .dropdown-item:hover {
    background-color: ${setColor.primaryColor};
    color: ${setColor.mainWhite};
  }
`;
