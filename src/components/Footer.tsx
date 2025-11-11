import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-left">
          <p className="footer-brand">NINTAI & PARTNERS</p>
          <p className="footer-tagline">Building Global Success Through Partnership</p>
          <div className="footer-locations">
            <span className="footer-location-primary">London</span>
            <span className="footer-location-separator">•</span>
            <span>Berlin</span>
            <span className="footer-location-separator">•</span>
            <span>Tokyo</span>
          </div>
        </div>

        <div className="footer-center">
          <nav className="footer-nav">
            <Link to="/">Home</Link>
            <Link to="/about">About Us</Link>
            <Link to="/services">Services</Link>
            <Link to="/book-now">Book Now</Link>
          </nav>
        </div>

        <div className="footer-right">
          <p className="footer-copyright">© 2025 Nintai & Partners. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
