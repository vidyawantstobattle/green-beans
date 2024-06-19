import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './contribute.css'; 
import axios from 'axios';
import Login from '../Auth/login';

const Contribute = ({ darkMode, isLoggedIn, onLogin, setCurrentPage }) => {
  const [formData, setFormData] = useState({
    emission_quantity: '',
    emission_quantity_units: '',
    pollutant: '',
    datasource: '',
    geographicalscope: '',
    emissioncategory: '',
    co2_or_co2_equivalent: '',
    technical_reference: '',
    sector: '',
  });

  const data = {
    emissionCategories: [
      { id: 1, name: 'Food and beverage' },
      { id: 2, name: 'Fuel' },
      { id: 72, name: 'Waste pellets' },
      { id: 74, name: 'Municipal waste /mixed waste' }
    ],
    geographicalScopes: [
      { id: 1, name: 'United States of America' },
      { id: 2, name: 'Canada' },
      { id: 10, name: 'Finland' }
    ],
    dataSources: [
      { id: 1, name: 'IPCC' },
      { id: 2, name: 'SYKE Finnish Environment Institute' },
      { id: 3, name: 'Statistics Finland' }
    ],
    sector: [
      { id: 1, name: 'Food and beverage' },
      { id: 2, name: 'Energy' }
    ]
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    try {
      const response = await axios.post('https://ec2-54-226-167-211.compute-1.amazonaws.com/api/emissionfactor/', formData); // Change the URL to your POST API endpoint
      console.log('Form submitted:', response.data);
      // Handle successful submission, e.g., show a success message or clear the form
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error state, e.g., show an error message
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
                  <label htmlFor="emission_quantity">Emission Factor Value:</label>
                  <input
                    type="text"
                    id="emission_quantity"
                    name="emission_quantity"
                    value={formData.emission_quantity}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="emission_quantity_units">Emission Factor Unit:</label>
                  <input
                    type="text"
                    id="emission_quantity_units"
                    name="emission_quantity_units"
                    value={formData.emission_quantity_units}
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
                  <label htmlFor="sector">Sector:</label>
                  <select
                  id="sector"
                  name="sector"
                  value={formData.sector}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Sector</option>
                  {data.sector.map((source) => (
                    <option key={source.id} value={source.id}>{source.name}</option>
                  ))}
                </select>
                </div>
                <div className="form-group">
                  <label htmlFor="datasource">Data Source:</label>
                  <select
                  id="datasource"
                  name="datasource"
                  value={formData.datasource}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Data Source</option>
                  {data.dataSources.map((source) => (
                    <option key={source.id} value={source.id}>{source.name}</option>
                  ))}
                </select>
                </div>
                <div className="form-group">
                  <label htmlFor="geographicalscope">Geographical Scope:</label>
                  <select
                  id="geographicalscope"
                  name="geographicalscope"
                  value={formData.geographicalscope}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Geographical Scope</option>
                  {data.geographicalScopes.map((scope) => (
                    <option key={scope.id} value={scope.id}>{scope.name}</option>
                  ))}
                </select>
                </div>
                <div className="form-group">
                  <label htmlFor="emissioncategory">Emission Category:</label>
                  <select
                  id="emissioncategory"
                  name="emissioncategory"
                  value={formData.emissioncategory}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Emission Category</option>
                  {data.emissionCategories.map((category) => (
                    <option key={category.id} value={category.id}>{category.name}</option>
                  ))}
                </select>
                </div>
                <div className="form-group">
                  <label htmlFor="co2_or_co2_equivalent">CO2 or CO2 Equivalent:</label>
                  <input
                    type="text"
                    id="co2_or_co2_equivalent"
                    name="co2_or_co2_equivalent"
                    value={formData.co2_or_co2_equivalent}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="technical_reference">Technical Reference:</label>
                  <input
                    type="text"
                    id="technical_reference"
                    name="technical_reference"
                    value={formData.technical_reference}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-submit">
                  <button type="submit" className="submit-button">Submit</button>
                </div>
              </form>
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
