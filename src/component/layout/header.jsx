// header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import logo from '../assets/logo.png'

export default function Header() {
  const location = useLocation();

  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
        <div className="container-fluid">
           <Link className="navbar-brand d-flex align-items-center" to="/">
            <img
              src={logo}
              alt="HMS Logo"
              width="40"
              height="40"
              className="me-2"
              style={{ borderRadius: '8px' }}
            />
            <div>
      <span className="brand-logo fw-bold fs-3">HMS </span>
      <span className="brand-text fw-semibold fs-4">Textile Group</span>
    </div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarContent"
            aria-controls="navbarContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse justify-content-end" id="navbarContent">
            <ul className="navbar-nav">
              <li className="nav-item mx-3">
                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${location.pathname === '/product' ? 'active' : ''}`} to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
