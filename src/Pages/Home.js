import React from 'react'
import Hero from '../components/hero/Hero'
import About from '../components/About/About'
import Map from '../components/Map/Map'
import Service from '../components/Service/Service'
import Company from '../components/Comany/Company'
import BookConsult from '../components/BookConsult/BookConsult'


function Home() {
  return (
    <div className='App'>
     <Hero />
      <About />
      <Service />
      <Company />
      <BookConsult /> 
         <Map/>
    </div>
  )
}

export default Home
