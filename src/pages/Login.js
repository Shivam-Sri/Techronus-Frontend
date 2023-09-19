import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
        password: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleLogin = async () => {
        try {
            const response = await axiosInstance.post('/api/auth/login', formData);

            const { token, email, username } = response.data;
            await localStorage.setItem('token', token);
            await localStorage.setItem('email', email);
            await localStorage.setItem('username', username);
            await localStorage.setItem('pageReloaded', 'false');
            await navigate(`/notes`);
        } catch (error) {
            console.error('Login failed', error);
        }
    };


    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'cyan', marginLeft: '35%', marginRight: '35%', borderRadius: '25%', height: '300px' }}>
            <h2 style={{ padding: '20px' }}>Already have account? </h2>
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleInputChange}
                style={{ margin: '2%' }}
            />
            <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleInputChange}
                style={{ margin: '2%' }}
            />
            <button onClick={() => handleLogin()}>Log In</button>
        </div>
    );
}

export default Login;
