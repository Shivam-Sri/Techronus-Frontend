import React, { useState } from 'react';
import axiosInstance from '../axiosInstance';
import { useNavigate } from 'react-router-dom';

function Registration() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
    });

    const [registeredMessage, setRegisteredMessage] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegistration = async () => {
        try {
            const response = await axiosInstance.post('/api/auth/register', formData);
            console.log('Registration successful', response.data);
            setRegisteredMessage('Registration successful');
            setTimeout(() => navigate('/login'), 5000)
        } catch (error) {
            console.error('Registration failed', error);
            setRegisteredMessage('An error occurred');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'cyan', marginLeft: '35%', marginRight: '35%', borderRadius: '25%', height: '300px' }}>
            <h2 style={{ padding: '20px' }}>New User? </h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
                <input
                    type="text"
                    name="username"
                    placeholder="Username"
                    value={formData.username}
                    onChange={handleInputChange}
                    style={{ margin: '1%' }}
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    style={{ margin: '1%' }}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{ margin: '1%' }}
                />
                <button onClick={handleRegistration} style={{ margin: '1%' }}>Register</button>
                {registeredMessage ? <h3> {registeredMessage}</h3> : null}
            </div>
        </div>
    );
}

export default Registration;
