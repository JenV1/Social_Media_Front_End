import React from 'react';
import { useState, useEffect } from 'react';
import './SettingsPage.css';
import UpdateDetails from './UpdateDetails';
import UpdateForm from './UpdateForm';
import CurrentDetails from './CurrentDetails';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const SettingsPage = () => {
  const modelUser = {
    name: "",
    company: "",
    date_of_birth: "",
    is_bussiness_account: false,
    password: "",
    role: ""
  }

  const [user, setUser] = useState(modelUser)
    
    useEffect(() => {
        var apiUsers = [];
        fetch("http://localhost:8080/list_all_users")
        .then(response => response.json())
        .then(response => {
            apiUsers = response;
            const loggedInUser = apiUsers.filter(
                user => user.userLoggedIn
            )
            setUser(loggedInUser[0])
        })
        .catch(error => console.log(error))
        
    })

    const [showUserInformation, setShowUserInformation ] = useState(true);
    const [showUpdateDetailsButton, setShowUpdateDetailsButton] = useState(true);
    const [showUpdateFields, setShowUpdateFields] = useState(false);
    
    const handleClick = () => {
        setShowUpdateFields(true);
        setShowUserInformation(false);
        setShowUpdateDetailsButton(false);
    }

    const handleFormSubmit = (event) => {

        event.preventDefault();

        setShowUpdateFields(false);
        setShowUserInformation(true);
        setShowUpdateDetailsButton(true);

    }

    const updateFields = (
       <UpdateForm user={user} handleFormSubmit={handleFormSubmit}/>
    )

  return(
  <div className="SettingsPage">
    <div><Header /></div>
    <h1>Settings</h1>
    {showUserInformation ? <CurrentDetails user={user} /> : null}
    {showUpdateDetailsButton ? <UpdateDetails handleClick={handleClick} /> : null}
    {showUpdateFields ?  updateFields : null}
    <div><Footer /></div>
  </div>
)};

export default SettingsPage;
