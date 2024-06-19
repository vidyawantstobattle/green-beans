import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contribute.css'; 
import Login from '../Auth/login';

const Contribute = ({ darkMode, isLoggedIn, onLogin, setCurrentPage }) => {
  const [formData, setFormData] = useState({
    emissionFactorValue: '',
    emissionFactorUnit: '',
    pollutant: '',
    dataSource: '',
    geographicalScope: '',
    sector:'',
    emissionCategory: '',
    co2OrCo2Equivalent: '',
    technicalReference: '',
  });

  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // State for success message


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      emission_quantity: formData.emissionFactorValue,
      emission_quantity_units: formData.emissionFactorUnit,
      pollutant: formData.pollutant,
      datasource: formData.dataSource,
      geographicalscope: formData.geographicalScope,
      sector: formData.sector,
      emissioncategory: formData.emissionCategory,
      co2_or_co2_equivalent: formData.co2OrCo2Equivalent,
      technical_refrence: formData.technicalReference,
    };
    try {
      const response = await fetch('https://ec2-54-226-167-211.compute-1.amazonaws.com/api/emissionfactor/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Form submitted successfully:', data);
      setShowSuccessMessage(true); // Show success message
      // clear the form open success
      setFormData({
        emissionFactorValue: '',
        emissionFactorUnit: '',
        pollutant: '',
        dataSource: '',
        geographicalScope: '',
        sector:'',
        emissionCategory: '',
        co2OrCo2Equivalent: '',
        technicalReference: '',
      });
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }
  };

  const currentPage=window.location.pathname;


  return (
    <div>
      {!isLoggedIn ? (
         <div className={`contribute-container ${darkMode ? 'dark' : ''}`}>
       <div className="notification-container">
            <p>Please log in to contribute Emission Factor data</p>

            <Login  darkMode={darkMode} onLogin={onLogin} setCurrentPage={setCurrentPage} currentPage={currentPage} />
            </div>
            </div>

      ) : (
          <div className={`contribute-container ${darkMode ? 'dark' : ''}`}>
            <div className="form-wrapper">
              <h2 className="form-title">Submit New Emission Factor</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="emissionFactorValue">Emission Factor Value:</label>
                  <input
                    type="text"
                    id="emissionFactorValue"
                    name="emissionFactorValue"
                    value={formData.emissionFactorValue}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emissionFactorUnit">Emission Factor Unit:</label>
                  <input
                    type="text"
                    id="emissionFactorUnit"
                    name="emissionFactorUnit"
                    value={formData.emissionFactorUnit}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pollutant">Pollutant:</label>
                  <input
                    type="text"
                    id="pollutant"
                    name="pollutant"
                    value={formData.pollutant}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dataSource">Data Source:</label>
                  <input
                    type="text"
                    id="dataSource"
                    name="dataSource"
                    value={formData.dataSource}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="geographicalScope">Region:</label>
                  <input
                    type="text"
                    id="geographicalScope"
                    name="geographicalScope"
                    value={formData.geographicalScope}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="sector">Sector:</label>
                  <input
                    type="text"
                    id="sector"
                    name="sector"
                    value={formData.sector}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emissionCategory">Emission Category:</label>
                  <input
                    type="text"
                    id="emissionCategory"
                    name="emissionCategory"
                    value={formData.emissionCategory}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="co2OrCo2Equivalent">CO2 or CO2 Equivalent:</label>
                  <input
                    type="text"
                    id="co2OrCo2Equivalent"
                    name="co2OrCo2Equivalent"
                    value={formData.co2OrCo2Equivalent}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="technicalReference">Technical Reference:</label>
                  <input
                    type="text"
                    id="technicalReference"
                    name="technicalReference"
                    value={formData.technicalReference}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-submit">
                  <button type="submit" className="submit-button">Submit</button>
                </div>
              </form>
              {showSuccessMessage && (
            <p style={{ color: 'green', marginTop: '1rem' }}>Emission Factor submitted successfully!</p>
          )}
            </div>

            {/* Submission Status */}
            <div className="submission-status-wrapper">
              <h3 className="submission-status-title">Submission Status</h3>
              <div className="overflow-x-auto">
                <table className="submission-status-table">
                  <thead className="submission-status-table-header">
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/*  submission */}
                    <tr>
                      <td>1</td>
                      <td>Emission Factor Name</td>
                      <td>submitted</td>
                    </tr>
                    {/* Repeat the above block for each submission */}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Leaderboard */}
            <div className="leaderboard-wrapper">
              <h3 className="leaderboard-title">Leaderboard</h3>
              <ul className="leaderboard-list">
                <li className="leaderboard-item">
                  <div className="leaderboard-item-details">
                    <img className="leaderboard-item-avatar" src="https://placehold.co/100x100" alt="Contributor profile picture" />
                    <span>Contributor Name</span>
                  </div>
                  <div className="leaderboard-item-badges">
                    <span className="badge">10 Badges</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
  )};
  </div>
  );
};

export default Contribute;
