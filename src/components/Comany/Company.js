import React from 'react';
import './Company.css';
import { Box, Typography, Paper, Grid, Divider } from '@mui/material';
import office from '../../assets/Images/office.png';
function Company() {
  return (
    <div className="company-container" sx={{ py: 6 }} id='company'>

    <h1 className='company-title'>
      Our Company
    </h1>
    <h3  className='company-description'>
      We are a leading company in our industry, committed to providing top-notch services to our clients.
    </h3>



  <div className="company-content">
 

<div className="company-image">

<img src={office} alt='Office'  className='company-image-preview' />

  </div>


 <div className="company-text">
  <h1 className='company-about-title'>About Us</h1>
  <h3 className='company-about-text'>
   At Horizon Realty Group, we believe that finding the perfect property is more than a transaction—it’s a journey. Founded in 2010, we’ve built a reputation for excellence in residential and commercial real estate across Addis Ababa and beyond.
Our team of seasoned professionals brings deep market insight, personalized service, and a commitment to integrity that sets us apart. Whether you're buying your first home, investing in commercial space, or seeking expert property management, we tailor our approach to meet your unique needs.
With a focus on innovation and client satisfaction, Horizon Realty Group is redefining the real estate experience—one property at a time.
</h3>


<div className='company-mission-vision'> 

  <div className='company-mission'>

  <h2 className='company-mission-text'> Mission</h2>
  <h4 className='company-mission-description'>To empower individuals and businesses in Ethiopia to make confident real estate decisions by providing expert guidance, transparent service, and innovative solutions tailored to their needs</h4>
  </div>


   <div className='company-vision'>
  <h2 className='company-vision-text'> Vision</h2>
  <h4 className='company-vision-description'>To be Ethiopia’s most trusted and forward-thinking real estate firm, transforming communities through sustainable development and exceptional service.</h4>
   
   </div>
</div>
  </div>



    </div>

    </div>
  );
}

export default Company;