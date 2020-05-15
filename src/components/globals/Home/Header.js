import React from 'react';
import { Navbar, Nav, Form, Button, Image } from 'react-bootstrap';
import logo from '../../../assets/Images/logo.png';
import { PrimaryBtnOutline } from '../Button';
import styled from 'styled-components';
import { setColor, setShadow } from '../../../styles';
import { Link } from 'react-router-dom';

const Styles = styled.div`
  .navbar {
    padding: 0 1rem;
    ${setShadow.light}
  }
  .logo {
    width: 50%;
  }

  .navbar-nav .nav-link {
    font-size: 0.9em;
    color: ${setColor.mainBlack} !important;
    text-transform: capitalize;
    border-bottom: 2px solid transparent;
    -webkit-transition: border-bottom 0.2s;
    transition: border-bottom 0.2s;

    &:hover {
      border-bottom: 2px solid ${setColor.primaryColor};
    }
  }

  .navbar-nav .nav-link {
    margin-left: 4rem;
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <Styles>
      <Navbar expand='lg'>
        <Navbar.Brand className='ml-3' as={Link} to='/'>
          <Image className='logo' src={logo} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/'>
              New Car
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              Buy Car
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              Test Drive
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              Reviews
            </Nav.Link>
            <Nav.Link as={Link} to='/'>
              How It Works
            </Nav.Link>
          </Nav>
          <Form inline>
            <PrimaryBtnOutline>
              <Button variant='outline-primary'>Search</Button>
            </PrimaryBtnOutline>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
};

export default Header;
