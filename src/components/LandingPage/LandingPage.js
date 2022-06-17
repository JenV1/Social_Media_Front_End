import React from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';

import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="LandingPage">
    <h1>Landing Page</h1>
    <ul>
      <li>
        <Link to="/"></Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
  </div>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
