import React, { useState } from 'react';
import './NavBar.css';
import Eagle from '../../assets/Images/Eagle.png';
import DragHandleIcon from '@mui/icons-material/DragHandle';
import CloseIcon from '@mui/icons-material/Close';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='nav-bar-container'>
      <div className='nav-bar-upper-container'>
        <a href="#home" className='logo-container'>
          <img src={Eagle} className="EagleLogo" alt="Eagle Properties Logo" />
          <h1 className='logo-Text'>EAGLE PROPERTIES</h1>
        </a>
        
        <div className="company-information-container">
          <a href='#map' className='company-section-text'>Find The Location</a>
        </div>
        
        <div className='desktop-menu'>
          <div className='navlink-container'>  
            <div className='navlink-list'>
              <li className='navlink'><a href="#home" aria-label="Home" className={window.location.hash === '#home' ? 'active' : ''}>Home</a></li>
              <li className='navlink'><a href="#partner" aria-label="RealEstate" className={window.location.hash === '#partner' ? 'active' : ''}>RealEstate</a></li>
              <li className='navlink'><a href="#service" aria-label="Service" className={window.location.hash === '#service' ? 'active' : ''}>Service</a></li>
              <li className='navlink'><a href="#company" aria-label="About" className={window.location.hash === '#company' ? 'active' : ''}>Company Information</a></li>
              <li className='navlink'><a href="#meeting" aria-label="About" className={window.location.hash === '#meeting' ? 'active' : ''}>Meeting Registration</a></li>
            </div>
            <div>
              <li className='navlink'><a href="#footer" aria-label="About" className={window.location.hash === '#owner' ? 'active' : ''}>Contact a consult</a></li>
            </div>
          </div> 
        </div>
        
        <div className='mobile-menu-icon' onClick={toggleMenu}>
          {isMenuOpen ? <CloseIcon /> : <DragHandleIcon />}
        </div>
      </div> 
      
      <div className='subHeader'> 
        <div className='navlink-container'>  
          <div className='navlink-list'>
            <li className='navlink'><a href="#home" aria-label="Home" className={window.location.hash === '#home' ? 'active' : ''}>Home</a></li>
            <li className='navlink'><a href="#partner" aria-label="RealEstate" className={window.location.hash === '#partner' ? 'active' : ''}>RealEstate</a></li>
            <li className='navlink'><a href="#service" aria-label="Service" className={window.location.hash === '#service' ? 'active' : ''}>Service</a></li>
            <li className='navlink'><a href="#company" aria-label="About" className={window.location.hash === '#company' ? 'active' : ''}>Company Information</a></li>
            <li className='navlink'><a href="#meeting" aria-label="About" className={window.location.hash === '#meeting' ? 'active' : ''}>Meeting Registration</a></li>
          </div>
          <div>
            <li className='navlink'><a href="#footer" aria-label="About" className={window.location.hash === '#owner' ? 'active' : ''}>Contact a consult</a></li>
          </div>
        </div> 
      </div>
      
      {/* Mobile menu that slides down */}
      <div className={`mobile-menu ${isMenuOpen ? 'mobile-menu-open' : ''}`}>
        <div className='mobile-navlink-list'>
          <li className='mobile-navlink'><a href="#home" onClick={toggleMenu}>Home</a></li>
          <li className='mobile-navlink'><a href="#partner" onClick={toggleMenu}>RealEstate</a></li>
          <li className='mobile-navlink'><a href="#service" onClick={toggleMenu}>Service</a></li>
          <li className='mobile-navlink'><a href="#company" onClick={toggleMenu}>Company Information</a></li>
          <li className='mobile-navlink'><a href="#meeting" onClick={toggleMenu}>Meeting Registration</a></li>
          <li className='mobile-navlink'><a href="#footer" onClick={toggleMenu}>Contact a consult</a></li>
          <li className='mobile-navlink'><a href="#map" onClick={toggleMenu}>Find The Location</a></li>
        </div>
      </div>
    </div>
  );
}

export default NavBar;