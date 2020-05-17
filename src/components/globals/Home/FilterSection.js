import React from 'react';
import PrimaryDropDown from '../DropDown';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import { setColor, setRem } from '../../../styles';
import { MdSearch } from 'react-icons/md';
import Icon from '../Icon';

const Styles = styled.div`
  .mainContainer {
    background: ${setColor.mainWhite};
  }

  .dropDown {
    border-left: 1px solid #dee2e6 !important;
    padding: ${setRem(6)} 0;
  }

  .dropDown input {
    border-width: 0;
  }

  .row {
    align-items: center;
  }

  input {
    border-width: 0;
    margin-left: 0.5em;
    width: 80%;
  }

  @media only screen and (max-width: 768px) {
    .mainContainer.row {
      display: block !important;
    }
    .row:first-child {
      border-bottom: 1px solid #dee2e6 !important;
      margin-left: 0 !important;
    }

    .searchContainer {
      padding: ${setRem(10)} ${setRem(12)};
    }

    .col {
      padding-left: 0px !important;
    }
    .dropDown {
      border-bottom: 1px solid #dee2e6 !important;
    }
  }
`;

const FilterSection = () => {
  return (
    <Styles className='mt-5'>
      <Row className='mainContainer'>
        <Col>
          <Row className='searchContainer ml-4'>
            <Icon>
              <MdSearch />
            </Icon>
            <input placeholder='Search' />
          </Row>
        </Col>
        <Col className='dropDown'>
          <PrimaryDropDown title='Make ' />
        </Col>
        <Col className='dropDown'>
          <PrimaryDropDown title='Model ' />
        </Col>
        <Col className='dropDown'>
          <PrimaryDropDown title='Location ' />
        </Col>
        <Col className='dropDown'>
          <PrimaryDropDown title='Body Type ' />
        </Col>
        <Col className='dropDown'>
          <PrimaryDropDown title='Price Min - Max' />
        </Col>
      </Row>
    </Styles>
  );
};

export default FilterSection;
