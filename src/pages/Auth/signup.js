import React, { useState } from 'react';
import './auth.css';

const Signup = ({ darkMode }) => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add signup logic here
  };

  return (
    <div className={`auth-container ${darkMode ? 'dark' : ''}`}>
      <form className={`auth-form signup ${darkMode ? 'dark' : ''}`}>
        <h2>Sign Up</h2>
        <div className="input-container">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <p className="input-explanation">Enter your full name.</p>
        </div>
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
          <p className="input-explanation">Enter a strong password.</p>
        </div>
        <button type="submit">Sign Up</button>
        <div className="third-party-login">
          <button type="button" className="third-party-button">Sign Up with Google</button>
          <button type="button" className="third-party-button">Sign Up with Facebook</button>
          <button type="button" className="third-party-button">Sign Up with GitHub</button>
        </div>
      </form>
    </div>
  );
};

export default Signup;
