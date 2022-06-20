import logo from './logo.svg';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import LogInPage from './components/LogInPage/LogInPage';
import SettingsPage from './components/SettingsPage/SettingsPage';

function App() {
  return (
   <>
    <Router>
      <Routes>
          <Route exact path="/" element={<LandingPage />} />
          <Route path="/login" element={<LogInPage />}/>
          <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </Router>
   </>
  );
}

export default App;
