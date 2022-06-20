import React from 'react';


import PropTypes from 'prop-types';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const Header = () => (
  <div >
    <Navbar expand="lg" className="Header" fixed='top'>
      <Container>
        <Navbar.Brand href="#home">Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Insights</Nav.Link>
            <Nav.Link href="#link">Services</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <NavDropdown title="Careers" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">How to join us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Job Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                What you can do here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </div>
);





Header.propTypes = {};

Header.defaultProps = {};


export default Header;

