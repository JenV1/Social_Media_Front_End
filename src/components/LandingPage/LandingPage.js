import React from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Link } from "react-router-dom";

const LandingPage = () => {
  const adjustLanding = {
    marginBottom: "0px"
  }
return (
  <div >
    <div><Header /></div>
    <div id='LandingPage'>
      <h1 style={adjustLanding}>Welcome</h1>
    </div>
    <div id='landing-button'><button id='btn' type='button'>Log In / Register</button></div>
    <div><Footer /></div>
  </div>)
};

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
