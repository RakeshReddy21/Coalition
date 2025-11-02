import React from 'react'
import './LabResults.css'

function LabResults({ patientData }) {
  // Use lab_results from details.json - show only the first 4 items to match the design
  const allLabResults = patientData.lab_results || []
  const labResults = allLabResults.slice(0, 4) // Show only: Blood Tests, CT Scans, Radiology Reports, X-Rays

  return (
    <div className="lab-results">
      <h2 className="section-title">Lab Results</h2>
      <div className="lab-results-list">
        {labResults.map((result, index) => (
          <div key={index} className="lab-result-item">
            <span className="lab-result-name">{result}</span>
            <button className="download-button">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 2a1 1 0 011 1v7.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 10.586V3a1 1 0 011-1z" fill="#666"/>
                <path d="M3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" fill="#666"/>
              </svg>
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LabResults

