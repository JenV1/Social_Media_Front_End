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
  
  const [canLogIn, setCanLogIn] = useState(true);

  const [users, setUsers] = useState([]);

  

  useEffect(() => {
    console.log(canLogIn)
  }, [canLogIn])


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
      setCanLogIn(false);
      errorMessage.current.innerText="Username is taken, please try again..."
    }
    else{
      setCanLogIn(true);
      usernameBox.current.classList.remove("red-border")
      errorMessage.current.innerText=""

    }
  }


  const handleFormSubmit = (event) => {
    if(!canLogIn){
      event.preventDefault()
      alert("You must give a unique username, please try again")
      return;
    }
    event.preventDefault()
    const username = event.target[0].value
    const password = event.target[1].value
    const dob = event.target[2].value
    const company = event.target[3].value
    const role = event.target[4].value
    const isBusinessAccount = event.target[5].checked


    fetch(`http://localhost:8080/addNewUser?name=${username}&password=${password}&date_of_birth=${dob}&company=${company}&role=${role}&isBusinessAccount=${isBusinessAccount}`, 
          {
            method: "POST"
          })
          .then(() => logUserIn(username, password))
            .catch(err => console.log(err));
          }
          
  const logUserIn = (username, password) => {

    fetch(`http://127.0.0.1:8080/logUserIn?username=${username}&password=${password}`, {method: "PUT"})
            .then(console.log("Added"))
            .then(() => window.location.replace("http://localhost:3000/feedPage"))
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
    <div className='registerpage--content'>
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
      <input className="input-box" onChange={event => setDOB(event.target.value)} value={dob} type="text" id="register_page--dob-input"/>

      <label htmlFor="register_page--company-input">Company: </label>
      <input className="input-box" onChange={event => setCompany(event.target.value)} value={company} type="text" id="register_page--company-input"/>

      <label htmlFor="register_page--role-input">Role: </label>
      <input className="input-box" onChange={event => setRole(event.target.value)} value={role} type="text" id="register_page--role-input"/>

      <label htmlFor="register_page--business-checkbox" id="business-checkbox--label">Is this a business account?
      <input className="input-box" onChange={event => setIsBusinessAccount(event.target.value)} value={isBusinessAccount} type="checkbox" id="register_page--business-checkbox"/>
      </label>
      <input type="submit" className="submit-input" value="Register Account"/>


    <a href="/login">Or log in to an existing account here</a>
    </form>

  </div>

  <Footer />
    </div>
  )
};



export default RegisterPage;
