import React, { useState } from 'react';
import './auth.css';

const Login = ({ darkMode }) => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add login logic here
  };

  return (
    <div className={`auth-container ${darkMode ? 'dark' : ''}`}>
      <form className={`auth-form login ${darkMode ? 'dark' : ''}`}>
        <h2>Login</h2>
        <div className="input-container">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <p className="input-explanation">Enter your email address.</p>
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
