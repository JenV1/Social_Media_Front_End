import React, { useState, useEffect } from 'react';
import './RegisterPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const RegisterPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [dob, setDOB] = useState("");
  const [isBusinessAccount, setIsBusinessAccount] = useState(false);

  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch("http://127.0.0.1:8080/list_all_users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])


  const handleFormSubmit = (event) => {

    fetch(`http://localhost:8080/addNewUser?name=${username}&password=${password}&date_of_birth=${dob}&company=${company}&role=${role}&isBusinessAccount=${isBusinessAccount}`, 
          {
            method: "POST"
          })
          .then(response => logUserIn())
            .catch(err => console.log(err));
          }
          
  const logUserIn = () => {
            
    fetch(`http://127.0.0.1:8080/logUserIn?username=${username}&password=${password}`, {method: "PUT"})
            .then(console.log("Added"))
            .catch(err => console.log(err))
  }


  return(
    <>
    <Header />

  <div className="RegisterPage">
    <h1>Register Page: </h1>
    <form onSubmit={handleFormSubmit} action="/" className="register_form">
      <label htmlFor="register_page--username-input">Username:</label>
      <input onChange={event => setUsername(event.target.value)} value={username} type="text" id="register_page--username-input"/>

      <label htmlFor="register_page--password-input">Password:</label>
      <input onChange={event => setPassword(event.target.value)} value={password} type="password" id="register_page--password-input"/>

      <label htmlFor="register_page--dob-input">DOB: </label>
      <input onChange={event => setDOB(event.target.value)} value={dob} type="text" id="register_page--dob-input"/>

      <label htmlFor="register_page--company-input">Company: </label>
      <input onChange={event => setCompany(event.target.value)} value={company} type="text" id="register_page--company-input"/>

      <label htmlFor="register_page--role-input">Role: </label>
      <input onChange={event => setRole(event.target.value)} value={role} type="text" id="register_page--role-input"/>

      <label htmlFor="register_page--business-checkbox">Is this a business account?</label>
      <input onChange={event => setIsBusinessAccount(event.target.value)} value={isBusinessAccount} type="checkbox" id="register_page--business-checkbox"/>

      <input type="submit" value="Register Account"/>


    </form>

    <a href="/login">Or log in to an existing account here</a>
  </div>

  <Footer />
    </>
  )
};



export default RegisterPage;
