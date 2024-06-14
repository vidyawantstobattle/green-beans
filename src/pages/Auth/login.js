import React, { useState } from 'react';
import axios from 'axios';
import './auth.css';

const Login = ({ darkMode }) => {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://54.226.167.211:8001/users/login', {
        username: formData.username,
        password: formData.password
      });

      // Assuming response.data contains the server response
      console.log('Login successful:', response.data);

      // Handle success state or redirect to dashboard
    } catch (error) {
      console.error('Login error:', error);
      // Handle error state or display error message
    }
  };

  return (
    <div className={`auth-container ${darkMode ? 'dark' : ''}`}>
      <form className={`auth-form login ${darkMode ? 'dark' : ''}`} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-container">
          <input
            type="text"  // Use "text" type for username input
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
          <p className="input-explanation">Enter your username.</p>
        </div>
        <div className="input-container">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <p className="input-explanation">Enter your password.</p>
        </div>
        <button type="submit">Login</button>
        <div className="third-party-login">
          <button type="button" className="third-party-button">Login with Google</button>
          <button type="button" className="third-party-button">Login with Facebook</button>
          <button type="button" className="third-party-button">Login with GitHub</button>
        </div>
      </form>
    </div>
  );
};

export default Login;