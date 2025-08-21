import React from 'react'
import realestate from '../../assets/Images/realestate.jpg'
import './Hero.css'

function Hero() {
  return (
    <div className="hero-container" id='home'>
      <div className='hero-overlay'></div>
      <img src={realestate} alt='Real Estate'  className='hero-image'/>
      <h1 className='hero-title'>Find Your Dream Home</h1>
      <p className='hero-description'>Explore the best properties in your area</p>
    </div>
  )
}

export default Hero;
