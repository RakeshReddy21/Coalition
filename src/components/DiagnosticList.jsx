import React from 'react'
import './DiagnosticList.css'

function DiagnosticList({ patientData }) {
  // Use diagnostic_list from details.json
  const diagnostics = patientData.diagnostic_list || []

  return (
    <div className="diagnostic-list">
      <h2 className="section-title">Diagnostic List</h2>
      <div className="diagnostic-table-container">
        <table className="diagnostic-table">
          <thead>
            <tr>
              <th>Problem/Diagnosis</th>
              <th>Description</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {diagnostics.map((diagnostic, index) => {
              // Normalize status for CSS class
              const statusClass = diagnostic.status
                .toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^a-z0-9-]/g, '')
              
              return (
                <tr key={index}>
                  <td className="diagnostic-name">{diagnostic.name}</td>
                  <td className="diagnostic-description">{diagnostic.description}</td>
                  <td>
                    <span className={`diagnostic-status ${statusClass}`}>
                      {diagnostic.status}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default DiagnosticList

