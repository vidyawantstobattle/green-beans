import React, { useState } from 'react';
import './contact.css'; // Ensure to create this CSS file
import image from '../../assets/sami.jpg';
import emailjs from 'emailjs-com'; // Import the emailjs-com library

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.init('zhbpjQlUJ5WXR0aTV');
    console.log('Form submitted:', formData);
    // Add your form submission logic here
    emailjs.sendForm('service_attyjog', 'template_d5f33jc', e.target)
                    .then(() => {
                        console.log('SUCCESS!');
                    }, (error) => {
                        console.log('FAILED...', error);
                    });
        setShowSuccessMessage(true); // Show success message
        // Optionally, clear the form
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: ''
        });
  };

  return (
    <div className={`contact-container ${darkMode ? 'dark' : ''}`}>
      <div className="contact-content">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="organization">Organization:</label>
              <input
                type="text"
                id="organization"
                name="organization"
                value={formData.organization}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-submit">
              <button type="submit" className="submit-button">Send Message</button>
            </div>
          </form>
          {showSuccessMessage && (
            <p style={{ color: 'green', marginTop: '1rem' }}>Message sent successfully!</p>
          )}
        </div>

        <div className="contact-profile">
          <img
            src={image}
            alt="Sami"
            className="profile-picture"
          />
          <h3>Sami Tornikoski</h3>
          <p>Head of Sustainability</p>
          <p>+358 40 533 4399</p>
          <p>sami@askkauko.com</p>
        </div>
      </div>

      <div className="company-info">
        <h2>AskKauko Oy</h2>
        <p>HQ in Helsinki - Innovation Home</p>
        <p>Kansakoulukatu 3, 00100, Helsinki, Finland</p>
      </div>
    </div>
  );
};

export default Contact;
