import React from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import LogInPage from '../LogInPage/LogInPage';

import { Link } from "react-router-dom";

const LandingPage = () => {
  const adjustLanding = {
    marginBottom: "0px"
  }
  const handleLandingClick = () =>{
    return <LogInPage /> ;
  }

return (
  <div className='landing-page--content'>
    <div><Header /></div>
    <div id='LandingPage'>
      <h1 className="welcome" style={adjustLanding}>Welcome!</h1>
    </div>
    <div id='landing-button'>
    <a id="landing-link" href="http://localhost:3000/login">
    <button onClick={() => console.log("clicked")} id='btn' type='button' >Log In / Register</button>
    </a>
    
    </div>
    <div><Footer /></div>
  </div>)
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
