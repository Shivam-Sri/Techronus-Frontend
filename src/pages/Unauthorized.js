import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Notes() {
    const navigate = useNavigate();

    return (
        <div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h1> Welcome To Notes App</h1>

                <h2 onClick={() => { navigate('/login') }} style={{ padding: '30px', marginTop: '30px', backgroundColor: 'cyan', borderRadius: '20px', cursor: 'pointer' }}>Already have account? Login </h2>
                <h2 onClick={() => { navigate('/registration') }} style={{ padding: '30px', marginTop: '30px', backgroundColor: 'cyan', borderRadius: '20px', cursor: 'pointer' }}>New User? Register </h2>
            </div>
        </div>
    );
}

export default Notes;
