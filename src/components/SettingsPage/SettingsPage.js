import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import './SettingsPage.css';
import UpdateDetails from './UpdateDetails';

const SettingsPage = () => {

  return(
  <div className="SettingsPage">
    <h1>Settings Page</h1>
    <UpdateDetails />
  </div>
  )
  };

SettingsPage.propTypes = {};

SettingsPage.defaultProps = {};

export default SettingsPage;
