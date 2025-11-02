import React from 'react'
import './PatientsList.css'

function PatientsList({ patientData }) {
  // Sample patient list data (as shown in the image)
  const patients = [
    { name: 'Jessica Taylor', gender: 'Female', age: 28, selected: true },
    { name: 'Emily Williams', gender: 'Female', age: 35 },
    { name: 'Ryan Johnson', gender: 'Male', age: 42 },
    { name: 'Brandon Mitchell', gender: 'Male', age: 29 },
    { name: 'Samantha Johnson', gender: 'Female', age: 31 },
    { name: 'Ashley Martinez', gender: 'Female', age: 27 },
    { name: 'Olivia Brown', gender: 'Female', age: 33 },
    { name: 'Tyler Davis', gender: 'Male', age: 38 },
    { name: 'Kevin Anderson', gender: 'Male', age: 45 },
    { name: 'Dylan Thompson', gender: 'Male', age: 26 },
    { name: 'Nathan Evans', gender: 'Male', age: 30 },
    { name: 'Mike Nolan', gender: 'Male', age: 41 },
  ]

  return (
    <div className="patients-list">
      <div className="patients-header">
        <h2>Patients</h2>
        <button className="search-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M9 2a7 7 0 015.95 10.196l3.184 3.185a1 1 0 11-1.414 1.414l-3.185-3.184A7 7 0 119 2zm0 2a5 5 0 100 10A5 5 0 009 4z" fill="#666"/>
          </svg>
        </button>
      </div>
      <div className="patients-scroll">
        {patients.map((patient, index) => (
          <div 
            key={index} 
            className={`patient-item ${patient.selected ? 'selected' : ''}`}
          >
            <div className="patient-avatar">
              {patient.name === 'Jessica Taylor' && patientData?.profile_picture ? (
                <img src={patientData.profile_picture} alt={patient.name} />
              ) : (
                <div className="avatar-placeholder">
                  {patient.name.charAt(0)}
                </div>
              )}
            </div>
            <div className="patient-info">
              <div className="patient-name">{patient.name}</div>
              <div className="patient-details">{patient.gender}, {patient.age}</div>
            </div>
            <button className="patient-menu">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <circle cx="10" cy="4" r="1.5" fill="#666"/>
                <circle cx="10" cy="10" r="1.5" fill="#666"/>
                <circle cx="10" cy="16" r="1.5" fill="#666"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PatientsList

