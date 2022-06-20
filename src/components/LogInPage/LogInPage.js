import React from 'react';
import './LogInPage.css';


const LogInPage = () => {

  const handleLogInSubmit = (event) => {
    const options = {
      method: "PUT",
    }
    const username = event.target[0].value
    const password = event.target[1].value
    fetch(`http://127.0.0.1:8080/logUserIn?username=${username}&password=${password}`, options)
      .catch(err => console.log(err))

    
  }

  return(
    <div className="LogInPage">
        <h1>Log In Page</h1>
        <form onSubmit={handleLogInSubmit} action="/">
          <label htmlFor='username-input'>Username: </label>
          <input type="text" id="username-input" placeholder='Username/email....' name="username-input"/>
          <label htmlFor="password-input">Password: </label>
          <input type="password" id="password-input" name="password-input"/>
          <input type="submit" id="submit-input"/>
        </form>
        <a href="#">Or Regsiter a new account here instead</a>

        <a href="/register">Or register a new account here</a>

      </div>

  )
  
  };


export default LogInPage;
