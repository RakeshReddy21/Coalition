import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js'
import './DiagnosisHistory.css'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
)

function DiagnosisHistory({ patientData }) {
  // Get the last 6 months of data (Oct 2023 to Mar 2024)
  const monthOrder = ['October', 'November', 'December', 'January', 'February', 'March']
  const monthNames = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar']
  const yearMap = {
    'October': 2023,
    'November': 2023,
    'December': 2023,
    'January': 2024,
    'February': 2024,
    'March': 2024
  }
  
  // Get data for each of the 6 months (keeping order even if some are missing)
  const lastSixMonths = monthOrder.map((month, idx) => {
    const entry = patientData.diagnosis_history.find(entry => 
      entry.month === month && entry.year === yearMap[month]
    )
    return entry || null // Keep null to maintain array length
  })
  
  const latestData = patientData.diagnosis_history[0]
  
  // Create labels and values for the chart (always 6 months)
  const months = monthOrder.map((month, idx) => {
    return `${monthNames[idx]}. ${yearMap[month]}`
  })
  
  const systolicValues = lastSixMonths.map(entry => 
    entry ? entry.blood_pressure.systolic.value : null
  )
  const diastolicValues = lastSixMonths.map(entry => 
    entry ? entry.blood_pressure.diastolic.value : null
  )

  const chartData = {
    labels: months,
    datasets: [
      {
        label: 'Systolic',
        data: systolicValues,
        borderColor: '#EC4899',
        backgroundColor: 'rgba(236, 72, 153, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      },
      {
        label: 'Diastolic',
        data: diastolicValues,
        borderColor: '#9333EA',
        backgroundColor: 'rgba(147, 51, 234, 0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointHoverRadius: 6,
      }
    ]
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        enabled: true,
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        titleFont: {
          size: 14
        },
        bodyFont: {
          size: 12
        }
      }
    },
    scales: {
      y: {
        beginAtZero: false,
        min: 50,
        max: 180,
        grid: {
          color: '#f0f0f0',
          borderDash: [5, 5]
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#666',
          stepSize: 20
        }
      },
      x: {
        grid: {
          display: false
        },
        ticks: {
          font: {
            size: 12
          },
          color: '#666'
        }
      }
    },
    elements: {
      point: {
        borderWidth: 2,
        hoverBorderWidth: 3
      },
      line: {
        borderWidth: 2
      }
    }
  }

  return (
    <div className="diagnosis-history">
      <h2 className="section-title">Diagnosis History</h2>
      
      <div className="blood-pressure-section">
        <div className="graph-header">
          <h3>Blood Pressure</h3>
          <span className="time-period">Last 6 months</span>
        </div>
        <div className="chart-container">
          <Line data={chartData} options={chartOptions} />
        </div>
        <div className="chart-legends">
          <div className="legend-item">
            <div className="legend-color systolic"></div>
            <span className="legend-label">Systolic</span>
            <span className="legend-value">{latestData.blood_pressure.systolic.value}</span>
            <span className="legend-status">{latestData.blood_pressure.systolic.levels}</span>
          </div>
          <div className="legend-item">
            <div className="legend-color diastolic"></div>
            <span className="legend-label">Diastolic</span>
            <span className="legend-value">{latestData.blood_pressure.diastolic.value}</span>
            <span className="legend-status">{latestData.blood_pressure.diastolic.levels}</span>
          </div>
        </div>
      </div>

      <div className="vital-cards">
        <div className="vital-card">
          <div className="vital-icon respiratory">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" fill="currentColor"/>
              <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="none" stroke="currentColor" strokeWidth="0"/>
            </svg>
          </div>
          <div className="vital-info">
            <div className="vital-label">Respiratory Rate</div>
            <div className="vital-value">{latestData.respiratory_rate.value} bpm</div>
            <div className={`vital-status ${latestData.respiratory_rate.levels === 'Normal' ? 'normal' : ''}`}>
              {latestData.respiratory_rate.levels}
            </div>
          </div>
        </div>

        <div className="vital-card">
          <div className="vital-icon temperature">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M15 13V5c0-1.66-1.34-3-3-3S9 3.34 9 5v8c-1.21.91-2 2.37-2 4 0 2.76 2.24 5 5 5s5-2.24 5-5c0-1.63-.79-3.09-2-4zm-4-8c0-.55.45-1 1-1s1 .45 1 1h-1v1h-1V5zm0 7V7h2v5c-.42.35-.9.59-1.41.79-.51-.2-.99-.44-1.41-.79z" fill="currentColor"/>
            </svg>
          </div>
          <div className="vital-info">
            <div className="vital-label">Temperature</div>
            <div className="vital-value">{latestData.temperature.value}°F</div>
            <div className={`vital-status ${latestData.temperature.levels === 'Normal' ? 'normal' : ''}`}>
              {latestData.temperature.levels}
            </div>
          </div>
        </div>

        <div className="vital-card">
          <div className="vital-icon heart">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
            </svg>
          </div>
          <div className="vital-info">
            <div className="vital-label">Heart Rate</div>
            <div className="vital-value">{latestData.heart_rate.value} bpm</div>
            <div className={`vital-status ${latestData.heart_rate.levels === 'Normal' ? 'normal' : 'lower'}`}>
              {latestData.heart_rate.levels}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DiagnosisHistory

