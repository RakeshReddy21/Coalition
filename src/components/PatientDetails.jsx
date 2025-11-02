import React from 'react'
import './PatientDetails.css'

function PatientDetails({ patientData }) {
  const formatDate = (dateString) => {
    // Handle both formats: "1996-08-23" and "08/23/1996"
    let date
    if (dateString.includes('/')) {
      // Format: "08/23/1996"
      const [month, day, year] = dateString.split('/')
      date = new Date(parseInt(year), parseInt(month) - 1, parseInt(day))
    } else {
      // Format: "1996-08-23"
      date = new Date(dateString)
    }
    
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                   'July', 'August', 'September', 'October', 'November', 'December']
    return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
  }

  // Format date for display: "August 23, 1996"
  const displayDate = formatDate(patientData.date_of_birth)

  return (
    <div className="patient-details">
      <div className="patient-profile-section">
        <div className="patient-photo-container">
          <img 
            src={patientData.profile_picture} 
            alt={patientData.name}
            className="patient-photo"
          />
        </div>
        <h2 className="patient-name-large">{patientData.name}</h2>
      </div>

      <div className="patient-info-section">
        <div className="info-item">
          <div className="info-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 2C5.58 2 2 5.58 2 10s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-9h2v2H9V7zm0 4h2v4H9v-4z" fill="#666"/>
            </svg>
          </div>
          <div className="info-content">
            <div className="info-label">Date Of Birth</div>
            <div className="info-value">{displayDate}</div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 9c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm0 2c2.67 0 8 1.34 8 4v2H2v-2c0-2.66 5.33-4 8-4z" fill="#666"/>
            </svg>
          </div>
          <div className="info-content">
            <div className="info-label">Gender</div>
            <div className="info-value">{patientData.gender}</div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M17.05 14.56l-3.23-3.23a3 3 0 00-4.24 0L6.38 14.56a1 1 0 101.41 1.41l3.2-3.2a1 1 0 011.42 0l3.2 3.2a1 1 0 001.42-1.41zM10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" fill="#666"/>
            </svg>
          </div>
          <div className="info-content">
            <div className="info-label">Contact Info</div>
            <div className="info-value">{patientData.phone_number}</div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z" fill="#666"/>
              <path d="M10 12l-4-4h3V6h2v2h3l-4 4z" fill="white"/>
            </svg>
          </div>
          <div className="info-content">
            <div className="info-label">Emergency Contacts</div>
            <div className="info-value">{patientData.emergency_contact}</div>
          </div>
        </div>

        <div className="info-item">
          <div className="info-icon">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-8-5z" fill="#666"/>
              <path d="M10 10l6-6v12l-6-6z" fill="white" opacity="0.8"/>
            </svg>
          </div>
          <div className="info-content">
            <div className="info-label">Insurance Provider</div>
            <div className="info-value">{patientData.insurance_type}</div>
          </div>
        </div>
      </div>

      <button className="show-all-button">
        Show All Information
      </button>
    </div>
  )
}

export default PatientDetails

