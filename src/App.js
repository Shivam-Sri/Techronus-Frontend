import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Registration from './pages/Registration';
import Login from './pages/Login';
import Notes from './pages/Notes';
import Unauthorized from './pages/Unauthorized';
import NotesImage from './assets/notes.png';
import useStyles from './styles';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const classes = useStyles();
  const handleLogout = async () => {
    await localStorage.clear();
    await window.location.reload();
  }
  return (
    <div className='App'>
      <div className={classes.appContainer}>
        <img src={NotesImage} className={classes.image} alt="My Image" />
        {email ?
          (<div className={classes.emailContainer}>
            <h4 className={classes.emailText}>{email}</h4>
            <h4 className={classes.logoutButton} onClick={handleLogout}>
              Logout
            </h4>
          </div>
          ) : null}
      </div>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/registration' element={<Registration />} />
          <Route
            path='/notes'
            element={isAuthenticated ? (
              <Notes />
            ) : (
              <Unauthorized />
            )
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
