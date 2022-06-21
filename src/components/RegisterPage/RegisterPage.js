import React, { useState, useEffect, useRef } from 'react';
import './RegisterPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Input from '../FormComponents/Input';

const RegisterPage = () => {

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




  function checkUsername(username, usernameBox, errorMessage){
    const [...userNamesArray] = users.map(user => user.name)

    if(userNamesArray.includes(username)){
      usernameBox.current.classList.add("red-border")
      errorMessage.current.innerText="Username is taken, please try again..."
    }
    else{
      usernameBox.current.classList.remove("red-border")
      errorMessage.current.innerText=""
    }
  }


  const handleFormSubmit = (event) => {
    let username = "Jem"
    let password = "password"
    fetch(`http://localhost:8080/addNewUser?name=${username}&password=${password}&date_of_birth=${dob}&company=${company}&role=${role}&isBusinessAccount=${isBusinessAccount}`, 
          {
            method: "POST"
          })
          .then(response => logUserIn())
            .catch(err => console.log(err));
          }
          
  const logUserIn = () => {
    let username = "Jem"
    let password = "password"

    fetch(`http://127.0.0.1:8080/logUserIn?username=${username}&password=${password}`, {method: "PUT"})
            .then(console.log("Added"))
            .catch(err => console.log(err))
  }


  const checkPassword = (password) => {
    const passwordBar = document.querySelector("#register_page--password_bar")

    if(password.length < 6){
      passwordBar.classList.remove("yellow")
      passwordBar.classList.remove("green")
      passwordBar.classList.add("red")
    }
    else if (password.length < 10){
      passwordBar.classList.remove("red")
      passwordBar.classList.remove("green")
      passwordBar.classList.add("yellow")

    }
    else{
      passwordBar.classList.remove("red")
      passwordBar.classList.remove("yellow")
      passwordBar.classList.add("green")

    }
  }

  return(
    <>
    <Header />

  <div className="RegisterPage">
    <h1 id="registerPage--header">Register Page: </h1>
    <form onSubmit={handleFormSubmit} action="/feedPage" id="registerPage--form">
      <label htmlFor="register_page--username-input">Username:</label>
      <Input checkInput={checkUsername} type={"text"}/>
      <p id="username-error-message"></p>

      <label htmlFor="register_page--password-input">Password:</label>
      <Input checkInput={checkPassword} type={"password"} />
      <div id="register_page--password_bar_container"><div id="register_page--password_bar"></div></div>

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
