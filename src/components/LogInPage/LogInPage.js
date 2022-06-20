import React, { useEffect, useState } from 'react';
import './LogInPage.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';


const LogInPage = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [users, setUsers] = useState([]);
  useEffect( () => {
    fetch("http://127.0.0.1:8080/list_all_users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [])

  const checkLogInDetails = (event) => {
    const [...userNamesArray] = users.map(user => user.name)

    if(userNamesArray.includes(username)){
      if(users[userNamesArray.indexOf(username)].password === password){
        logUserIn(username, password);
      }
      else{
        wrongPassword(event);
      }
    }
    else{
      noSuchUsername(event);
    }
  }

  const logUserIn = (username, password) => {
    const options = {
      method: "PUT",
    }

    fetch(`http://127.0.0.1:8080/logUserIn?username=${username}&password=${password}`, options)
      .catch(err => console.log(err))
  }

  const wrongPassword = (event) => {
    event.preventDefault()
    const username_input = document.querySelector("#username-input")
    const password_input = document.querySelector("#password-input");
    const username_error_message = document.querySelector("#username-error-message");
    const password_error_message = document.querySelector("#password-error-message");
    username_error_message.innerText = ""
    password_error_message.innerText = "Password is incorrect"
    username_input.classList.remove("wrong")
    password_input.classList.add("wrong")
  }

  const noSuchUsername = (event) => {
    event.preventDefault();
    const username_input = document.querySelector("#username-input")
    const username_error_message = document.querySelector("#username-error-message");
    username_error_message.innerText = "Username does not exist"
    username_input.classList.add("wrong")
  }


  const handleLogInSubmit = (event) => {
    checkLogInDetails(event);

  }

  return(
    <>
    
    <Header />
    <div className="LogInPage">
        <h1>Log In Page</h1>
        <form onSubmit={handleLogInSubmit} action="/">
          <label id="username-input-label" htmlFor='username-input'>Username: </label>
          <input onChange={event => setUsername(event.target.value)} value={username} type="text" id="username-input" placeholder='Username/email....' name="username-input"/>
          <p id="username-error-message"></p>
          <label id="password-input-label" htmlFor="password-input">Password: </label>
          <input onChange={event => setPassword(event.target.value)} type="password" id="password-input" name="password-input" value={password}/>
          <p id="password-error-message"></p>
          <input type="submit" id="submit-input"/>
        </form>
        <a href="#">Or Regsiter a new account here instead</a>

        <a href="/register">Or register a new account here</a>

      </div>
      <Footer />
    </>

  )
  
  };


export default LogInPage;
