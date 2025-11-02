import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import PatientsList from './components/PatientsList'
import DiagnosisHistory from './components/DiagnosisHistory'
import DiagnosticList from './components/DiagnosticList'
import PatientDetails from './components/PatientDetails'
import LabResults from './components/LabResults'
import './App.css'

function App() {
  const [patientData, setPatientData] = useState(null)

  useEffect(() => {
    // Load patient data from details.json
    fetch('/details.json')
      .then(response => response.json())
      .then(data => {
        // Find Jessica Taylor's data
        const jessica = data.find(patient => patient.name === 'Jessica Taylor')
        if (jessica) {
          setPatientData(jessica)
        }
      })
      .catch(error => {
        console.error('Error loading patient data:', error)
      })
  }, [])

  if (!patientData) {
    return <div className="loading">Loading...</div>
  }

  return (
    <div className="app">
      <Header />
      <div className="main-container">
        <PatientsList patientData={patientData} />
        <div className="content-area">
          <DiagnosisHistory patientData={patientData} />
          <DiagnosticList patientData={patientData} />
        </div>
        <div className="right-sidebar">
          <PatientDetails patientData={patientData} />
          <LabResults patientData={patientData} />
        </div>
      </div>
    </div>
  )
}

export default App

