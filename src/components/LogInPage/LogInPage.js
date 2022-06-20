import React from 'react';
import './LogInPage.css';


const LogInPage = () => {

  return(
    <div className="LogInPage">
        <h1>Log In Page</h1>
        <form>
          <label htmlFor='username-input'>Username: </label>
          <input type="text" id="username-input" placeholder='Username/email....' name="username-input"/>
          <label htmlFor="password-input">Password: </label>
          <input type="password" id="password-input" name="password-input"/>
          <input type="submit" id="submit-input"/>
        </form>

      </div>

  )
  
  };


export default LogInPage;
