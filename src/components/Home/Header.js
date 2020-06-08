import React from 'react';
import {
  Navbar,
  Nav,
  Form,
  Button,
  Image,
  Tooltip,
  OverlayTrigger,
} from 'react-bootstrap';
import { RiMenu2Line } from 'react-icons/ri';
import logo from '../../assets/Images/logo.png';
import { PrimaryBtnOutline } from '../globals/Button';
import styled from 'styled-components';
import { setColor, setShadow } from '../../styles';
import { Link } from 'react-router-dom';
import Icon from '../globals/Icon';
import { FaUser } from 'react-icons/fa';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    return (
      <Styles>
        <Navbar expand='lg'>
          <Navbar.Brand className='ml-3' as={Link} to='/'>
            <Image className='logo' src={logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav'>
            <Icon>
              <RiMenu2Line />
            </Icon>
          </Navbar.Toggle>
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
              {this.props.isAuthenticated ? (
                <OverlayTrigger
                  placement='bottom'
                  overlay={<Tooltip id='button-tooltip'>User</Tooltip>}
                >
                  <div>
                    <Icon className='mr-3 user' size={'2em'}>
                      <FaUser />
                    </Icon>
                  </div>
                </OverlayTrigger>
              ) : (
                <PrimaryBtnOutline>
                  <Button as={Link} to='/login' variant='outline-primary'>
                    Sign In
                  </Button>
                </PrimaryBtnOutline>
              )}
            </Form>
          </Navbar.Collapse>
        </Navbar>
      </Styles>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.token !== null,
  };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

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
    margin-left: 2rem;
    font-size: 16px;
  }

  @media only screen and (max-width: 768px) {
    .navbar-nav .nav-link {
      border-bottom: 0;
    }
    .navbar-nav .nav-link:hover {
      border-bottom: none;
      color: ${setColor.primaryColor} !important;
    }

    .form-inline {
      margin-left: 3% !important;
    }
  }

  .navbar-toggler {
    border: 0;
  }
`;
