import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-container" id="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <h2>Eagle Properties</h2>
          <p>Your trusted partner in Ethiopian real estate marketing.</p>
        </div>
        <div className="footer-links">
          <h4>Navigation</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#service">Services</a></li>
            <li><a href="#about">Partners</a></li>
            <li><a href="#consult">Consultation</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="footer-contact">
          <h4>Contact Us</h4>
          <p>Email: info@eagleproperties.com</p>
          <p>Phone: +251 943 94 54 56</p>
          <p>Addis Ababa, Ethiopia</p>
        </div>
        <div className="footer-social">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a> |{' '}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a> |{' '}
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Eagle Properties. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
