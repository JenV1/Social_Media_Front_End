import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const Header = (props) => {
  //flase means close the side nav, and true means want open the side nav

  const [wantOpen, setWantOpen] = useState(false);

  //check if show the earth

  const spanStyle = {
    fontSize: "30px", 
    cursor :  "pointer"
  }

  const sideNavCloseStyle = {
    width: "0",
    marginLeft : "0"}


  const sideNavOpenStyle = {
      width: "250px",
    }


  const openNav = () =>{
      setWantOpen(true)
  }
  const closeNav = () =>{
      setWantOpen(false)
  }

  const logOutBey = () =>{
    alert("Say you")
  }

  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch("http://127.0.0.1:8080/list_all_users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])

  const filterLogInUser = users.filter((each) => {
      return each.userLoggedIn === true;
    })


  const EarthOrNot = () =>{
    
    return  (
      <>
        <div id='mySidenav' className = "sidenav" style =  {wantOpen ?  sideNavOpenStyle :sideNavCloseStyle} >
          <a href= "#" className="closebtn" onClick= {closeNav} >&times;</a>
          <a href="http://localhost:3000/login">Log In Again</a>
          <a href="http://localhost:3000/" onClick={handleClickLogOut}>Log Out</a>
          <a href="http://localhost:3000/settings">Setting</a>
          <a href="http://localhost:3000/feedPage">Posts</a>
        </div> 

        <div id='earthButton'>
          <span style = {spanStyle} onClick = {openNav} >&#9776; &#127759;</span>
        </div>
      </> )}

  
  

  const handleClickLogOut = () =>{

    const requestOptions = {
      method: 'PUT'
    }
    const userName = filterLogInUser[0].name;
    const password = filterLogInUser[0].password
    fetch(`http://localhost:8080/logUserOut?username=${userName}&password=${password}`, requestOptions)
    .then(result => {
      console.log(`log out ${userName}`)
      alert(`ByeBye${userName}`)})
    .catch(error => console.log(error))

}




return (
  <header >
    <Navbar expand="lg" className="Header"  >
      <Container className='nav-position'>
        <Navbar.Brand href="http://localhost:3000">Connect</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
            <Nav.Link href="#home" className='nav-link'>Insights</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>Services</Nav.Link>
            <Nav.Link href="#link" className='nav-link'>About Us</Nav.Link>
            <NavDropdown title="Careers" id="basic-nav-dropdown" className='nav-link'>
              <NavDropdown.Item href="#action/3.1">How to join us</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Job Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                What you can do here
              </NavDropdown.Item>
            </NavDropdown>

            {props.open === "true" && <EarthOrNot/>}
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  </header>
)};





Header.propTypes = {};

Header.defaultProps = {};


export default Header;

