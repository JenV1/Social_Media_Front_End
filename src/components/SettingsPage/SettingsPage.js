import React from 'react';
import { useState, useEffect } from 'react';
import './SettingsPage.css';
import UpdateDetails from './UpdateDetails';
import UpdateForm from './UpdateForm';
import CurrentDetails from './CurrentDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SettingsPage = () => {


  //initial useState so that props can be passed before API has loaded
  const modelUser = {
    name: "",
    company: "",
    date_of_birth: "",
    is_bussiness_account: false,
    password: "",
    role: ""
  }

  const [user, setUser] = useState(modelUser);
  const [hiddenPassword, setHiddenPassword] = useState("");
  
  //selects the first item from a list of logged in users - only one user long
  // or redirects to Landing Page if no user logged in
  //then sets hiddenPassword to be a string of * the same length as the password of the user
  useEffect(() => {
    var apiUsers = [];
    fetch("http://localhost:8080/list_all_users")
      .then(response => response.json())
      .then(response => {
        apiUsers = response;
        const loggedInUser = apiUsers.filter(
          user => user.userLoggedIn
        )
        if (loggedInUser.length == 0){
          window.location.replace("http://localhost:3000/")
        }
        setUser(loggedInUser[0])
        const passwordLength = user.password.length;
        setHiddenPassword(new Array(passwordLength + 1).join("*"))
      })
      .catch(error => console.log(error))   
  }, [user])

  const [showUserInformation, setShowUserInformation ] = useState(true);
  const [showUpdateDetailsButton, setShowUpdateDetailsButton] = useState(true);
  const [showUpdateFields, setShowUpdateFields] = useState(false);
  
  // switches components in view to show the update form to change user information
  const handleClickUpdateDetails = () => {
    setShowUpdateFields(true);
    setShowUserInformation(false);
    setShowUpdateDetailsButton(false);
  }

  // switches back to the initial view displaying profile information
  const handleClickReturnToSettings = (event) => {

    event.preventDefault();

    setShowUpdateFields(false);
    setShowUserInformation(true);
    setShowUpdateDetailsButton(true);
  }

  //what is actually rendered on the page - depends on the truth values of the display fields
  return(
  <div className="settings-page--content">
    <Header open="true" />
    <div className="SettingsPage">
      <h1>Settings</h1>
      {showUserInformation ? <CurrentDetails user={user} hiddenPassword={hiddenPassword}/> : null}
      
      {showUpdateFields ?  <UpdateForm user={user} /> : null}
      <div className="SettingsButtonContainer">
          {showUpdateFields ? <button onClick={handleClickReturnToSettings} >Return to Settings</button> : null}  
          {showUpdateDetailsButton ? <UpdateDetails handleClick={handleClickUpdateDetails} /> : null} 
          <a href='/feedPage'><button>Return to Feed</button></a>
      </div>
    </div>
    <Footer />
  </div>
)};

export default SettingsPage;
