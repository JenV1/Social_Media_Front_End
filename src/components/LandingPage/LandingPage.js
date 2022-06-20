import React from 'react';
import PropTypes from 'prop-types';
import './LandingPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Link } from "react-router-dom";

const LandingPage = () => (
  <div className="LandingPage">
    <Header />

    <h1>Landing Page</h1>
    <ul>
      <li>
        <Link to="/"></Link>
      </li>
      <li>
        <Link to="/login">Login</Link>
      </li>
    </ul>
    <Footer />
  </div>
);

LandingPage.propTypes = {};

LandingPage.defaultProps = {};

export default LandingPage;
