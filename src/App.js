import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

import Registration from './pages/Registration';
import Login from './pages/Login';
import Notes from './pages/Notes';
import Unauthorized from './pages/Unauthorized';
import NotesImage from './assets/notes.png';

function App() {
  const isAuthenticated = !!localStorage.getItem('token');
  const [email, setEmail] = useState(localStorage.getItem('email'));
  const handleLogout = async () => {
    await localStorage.clear();
    await window.location.reload();
  }
  return (
    <div className='App'>
      <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginLeft: '200px', marginRight: '200px' }}>
        <img src={NotesImage} height={100} width={90} alt="My Image" />
        {email ?
          <div>
            <h4>{email}</h4>
            <h4 style={{ background: ' red', alignContent: 'center', color: 'white', borderRadius: '20px', paddingLeft: '20px', paddingBottom: '5px', cursor: 'pointer' }} onClick={handleLogout}>Logout</h4>
          </div> : null}
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
