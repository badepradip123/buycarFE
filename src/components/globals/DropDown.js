import React from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import styled from 'styled-components';
import { setColor } from '../../styles';

const Styles = styled.div`
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
const PrimaryDropDown = ({ title }) => {
  return (
    <Styles>
      <DropdownButton id='dropdown-basic-button' title={title}>
        <Dropdown.Item href='#/action-1'>Action</Dropdown.Item>
        <Dropdown.Item href='#/action-2'>Another action</Dropdown.Item>
        <Dropdown.Item href='#/action-3'>Something else</Dropdown.Item>
      </DropdownButton>
    </Styles>
  );
};

export default PrimaryDropDown;
