import React from 'react';
import './Footer.css';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';

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
            <li><a href="#partner">Partners</a></li>
            <li><a href="#company">About Us</a></li>
            <li><a href="#meeting">Consultation</a></li>
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
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <LinkedInIcon />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <TwitterIcon />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <YouTubeIcon />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">a
        <p>© {new Date().getFullYear()} Eagle Properties. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;