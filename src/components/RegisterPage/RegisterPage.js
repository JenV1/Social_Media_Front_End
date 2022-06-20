import React from 'react';
import './RegisterPage.css';

const RegisterPage = () => {

  const handleFormSubmit = (event) => {
    const name = event.target[0].value;
    const password = event.target[1].value;
    const dob = event.target[2].value;
    const company = event.target[3].value;
    const role = event.target[4].value;
    const isBusinessAccount = event.target[5].checked;

    fetch(`http://localhost:8080/addNewUser?name=${name}&password=${password}&date_of_birth=${dob}&company=${company}&role=${role}&isBusinessAccount=${isBusinessAccount}`, 
          {
            method: "POST"
          })
          .then(console.log("added"))
          .catch(err => console.log(err))
  }


  return(
  <div className="RegisterPage">
    <h1>Register Page: </h1>
    <form onSubmit={handleFormSubmit} action="/" className="register_form">
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

    <a href="/login">Or log in to an existing account here</a>
  </div>
  )
};



export default RegisterPage;
