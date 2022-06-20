import React from 'react';
import './RegisterPage.css';




const RegisterPage = () => (
  <div className="RegisterPage">
    <h1>Register Page: </h1>
    <form action="" className="register_form">
      <label htmlFor="register_page--username-input">Username:</label>
      <input type="text" id="register_page--username-input"/>

      <label htmlFor="register_page--password-input">Password:</label>
      <input type="password" id="register_page--password-input"/>

      <label htmlFor="register_page--dob-input">DOB: </label>
      <input type="text" id="register_page--dob-input"/>

      <label htmlFor="register_page--company-input">Company: </label>
      <input type="text" id="register_page--company-input"/>

      <label htmlFor="register_page--role-input">Role: </label>
      <input type="text" id="register_page--role-input"/>

      <label htmlFor="register_page--business-checkbox">Is this a business account?</label>
      <input type="checkbox" id="register_page--business-checkbox"/>

      <input type="submit" value="Register Account"/>


    </form>
  </div>
);

RegisterPage.propTypes = {};

RegisterPage.defaultProps = {};

export default RegisterPage;
