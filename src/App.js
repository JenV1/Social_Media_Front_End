import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import LogInPage from './components/LogInPage/LogInPage';
import { useState, useEffect } from 'react';
import RegisterPage from './components/RegisterPage/RegisterPage';
import SettingsPage from './components/SettingsPage/SettingsPage';
import FeedPage from './components/FeedPage/FeedPage';

function App() {

  const [users, setUsers] = useState([]);

  useEffect( () => {
    fetch("http://127.0.0.1:8080/list_all_users")
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(err => console.log(err))
  }, [users])


  const checkLoginStatus = () => {
    let loggedIn = false;
    for(let user of users){
        if(user.userLoggedIn){
          loggedIn = true;
        }
    }
    return true;
  }

  const pageRedirect = (targetURL) => {
      window.location.replace(targetURL)
  }

  return (
   <div className='content'>
    <Router>
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage checkLoginStatus={checkLoginStatus} pageRedirect={pageRedirect}/>}/>
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/feedPage" element={<FeedPage />} />
      </Routes>
    </Router>
   </div>
  );
}

export default App;
