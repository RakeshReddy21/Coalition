import React from 'react'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="logo">
          <div className="logo-icon">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="32" height="32" rx="8" fill="#4CAF50"/>
              <circle cx="16" cy="12" r="6" fill="#2196F3"/>
              <path d="M16 20c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6z" fill="#2196F3"/>
            </svg>
          </div>
          <span className="logo-text">Tech.Care</span>
        </div>
      </div>
      <nav className="nav-menu">
        <a href="#" className="nav-item">Overview</a>
        <a href="#" className="nav-item active">Patients</a>
        <a href="#" className="nav-item">Schedule</a>
        <a href="#" className="nav-item">Message</a>
        <a href="#" className="nav-item">Transactions</a>
      </nav>
      <div className="header-right">
        <div className="user-profile">
          <img 
            src="https://via.placeholder.com/40" 
            alt="Doctor" 
            className="profile-img"
          />
          <div className="profile-info">
            <div className="profile-name">Dr. Jose Simmons</div>
            <div className="profile-role">General Practitioner</div>
          </div>
        </div>
        <button className="icon-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1z" fill="#666"/>
            <path d="M10 18a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z" fill="#666"/>
            <path d="M3 10a1 1 0 011-1h1a1 1 0 110 2H4a1 1 0 01-1-1z" fill="#666"/>
            <path d="M16 10a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1z" fill="#666"/>
            <path d="M15.657 5.343a1 1 0 010 1.414l-.707.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0z" fill="#666"/>
            <path d="M5.343 14.657a1 1 0 010-1.414l.707-.707a1 1 0 111.414 1.414l-.707.707a1 1 0 01-1.414 0z" fill="#666"/>
            <path d="M4.636 4.636a1 1 0 011.414 0l.707.707a1 1 0 11-1.414 1.414l-.707-.707a1 1 0 010-1.414z" fill="#666"/>
            <path d="M14.657 15.343a1 1 0 01-1.414 0l-.707-.707a1 1 0 111.414-1.414l.707.707a1 1 0 010 1.414z" fill="#666"/>
            <path d="M10 5a5 5 0 100 10 5 5 0 000-10z" fill="#666"/>
          </svg>
        </button>
        <button className="icon-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2a6 6 0 016 6v4l1.707 1.707A1 1 0 0117 15H3a1 1 0 01-.707-1.707L4 12V8a6 6 0 016-6zM7 16h6a2 2 0 11-6 0z" fill="#666"/>
          </svg>
        </button>
        <button className="icon-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" fill="#666"/>
            <circle cx="10" cy="10" r="1.5" fill="#666"/>
            <path d="M10 5v2M10 13v2M5 10h2M13 10h2" stroke="#666" strokeWidth="1"/>
          </svg>
        </button>
        <button className="icon-button">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="10" cy="4" r="1.5" fill="#666"/>
            <circle cx="10" cy="10" r="1.5" fill="#666"/>
            <circle cx="10" cy="16" r="1.5" fill="#666"/>
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header

