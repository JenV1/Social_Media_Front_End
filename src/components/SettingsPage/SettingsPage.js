import React from 'react';
import PropTypes from 'prop-types';
import './SettingsPage.css';
import UpdateDetails from './UpdateDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SettingsPage = () => (
  <div className="SettingsPage">
    <div><Header /></div>
    <h1>Settings</h1>
    <UpdateDetails />
    <div><Footer /></div>
  </div>
);

SettingsPage.propTypes = {};

SettingsPage.defaultProps = {};

export default SettingsPage;
