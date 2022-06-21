import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const Header = () => {
  //flase means close the side nav, and true means want open the side nav

  const [wantOpen, setWantOpen] = useState(false)

  const spanStyle = {
    fontSize: "30px", 
    cursor :  "pointer"
  }

  const sideNavCloseStyle = {
    width: "0",
    marginLeft : "0"}


  const sideNavOpenStyle = {
      width: "250px",
      marginLeft : "250px",

    }

  const openNav = () =>{
      setWantOpen(true)
  }
  const closeNav = () =>{
      setWantOpen(false)
  }

return (
  <header >
    <Navbar expand="lg" className="Header">
      <Container className='nav-position'>
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
            
            <div id='mySidenav' className = "sidenav" style =  {wantOpen ?  sideNavOpenStyle :sideNavCloseStyle} >
              <a href="javascript:void(0)" className="closebtn" onClick= {closeNav} >&times;</a>
              <a href="http://localhost:3000/login">Log In Again</a>
              <a href="http://localhost:3000/login">Log Out</a>
              <a href="http://localhost:3000/login">Setting</a>
              <a href="http://localhost:3000/login">Posts</a>
            </div> 

            <div>
              <span style = {spanStyle} onClick = {openNav} >&#9776; open</span>
            </div>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)};





Header.propTypes = {};

Header.defaultProps = {};


export default Header;

