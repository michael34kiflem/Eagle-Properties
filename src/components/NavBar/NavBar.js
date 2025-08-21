import React from 'react'
import './NavBar.css'
import Eagle from '../../assets/Images/Eagle.png'
import Button from '@mui/material/Button';

function NavBar() {
  return (
   <div className='nav-bar-container'>

 <div className='nav-bar-upper-container'>

    <a href="#home"  className='logo-container' >
      <img src={Eagle} className="EagleLogo" alt="Eagle Properties Logo" />
      <h1 className='logo-Text'>EAGLE PROPERTIES</h1>
    </a>
   
   
    <div className="company-information-container">
                <a href='/location' className='company-section-text'>Find The Location</a>
  

          </div>
    
  </div> 
    

  <div className='subHeader'> 

    <div className='navlink-container'>  

      <div className='navlink-list'>
         <li className='navlink'> <a href="/" aria-label="Home" className={window.location.hash === '#home' ? 'active' : ''}>Home</a></li>
              <li className='navlink'> <a href="#partner" aria-label="RealEstate" className={window.location.hash === '#partner' ? 'active' : ''}>RealEstate</a></li>
              <li className='navlink'> <a href="#service" aria-label="Service" className={window.location.hash === '#service' ? 'active' : ''}>Service</a></li>
              <li className='navlink'> <a href="#company" aria-label="About" className={window.location.hash === '#company' ? 'active' : ''}>Company Information</a></li>
                <li className='navlink'> <a href="#meeting" aria-label="About" className={window.location.hash === '#meeting' ? 'active' : ''}>Meeting Registration</a></li>
      </div>

      <div>
         <li className='navlink'> <a href="#footer" aria-label="About" className={window.location.hash === '#owner' ? 'active' : ''}>Contact a consult</a></li>
      </div>

  </div> 






    
   </div>
      </div>
  )
}

export default NavBar
