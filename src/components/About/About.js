import React, { useState } from 'react'
import './About.css'   

import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import CardMedia from '@mui/material/CardMedia'
import CardActionArea from '@mui/material/CardActionArea'
import Card from '@mui/material/Card'
import IconButton from '@mui/material/IconButton'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

import OvidRealEstate from '../../assets/Images/ovid.jpg';
import KavodCommercial from '../../assets/Images/KAVOD.jpg';
import AmibaraRealEstate from '../../assets/Images/amibara.jpg';
import MetroRealEstate from '../../assets/Images/metro.jpg';
import TemerRealEstate from '../../assets/Images/temer.jpg';
import AyatRealEstate from '../../assets/Images/Ayat.jpg';
import GetAsRealEstate from '../../assets/Images/getas.jpg';
import RealityRealEstate from '../../assets/Images/reality.jpg';
import DMCRealEstate from '../../assets/Images/dmc.jpg';


  const ethiopianRealEstateListings = [
    { 
      image: OvidRealEstate, 
      name: "OVID Real Estate", 
      description: "Premium developer known for luxury residential complexes with modern amenities, security features, and strategic locations across Addis Ababa's most desirable neighborhoods."
    }, 
    {
      image: KavodCommercial,
      name: "KAVOD Commercial Building",
      description: "Specializes in high-end commercial properties offering premium office spaces, retail centers, and mixed-use developments with state-of-the-art infrastructure."
    },
    { 
      image: AmibaraRealEstate,
      name: "Amibara Real Estate",
      description: "Focused on affordable housing solutions and large-scale residential projects, making homeownership accessible to middle-income families across Ethiopia."
    },
    { 
      image: DMCRealEstate,
      name: "DMC Real Estate",
      description: "Innovative property developer creating sustainable communities with eco-friendly designs, green spaces, and modern architectural excellence."
    },
    {
      image: MetroRealEstate,
      name: "Metro Real Estate",
      description: "Urban development experts specializing in transit-oriented properties and commercial spaces near transportation hubs and city centers."
    },
    { 
      image: TemerRealEstate,
      name: "Temer Real Estate",
      description: "Boutique developer offering custom-built luxury homes and exclusive residential compounds with personalized design services."
    },
    {
      image: AyatRealEstate,
      name: "Ayat Real Estate",
      description: "One of Ethiopia's largest developers, known for comprehensive township projects, shopping malls, and high-rise residential towers."
    },
    { 
      image: GetAsRealEstate,
      name: "Get As Real Estate",
      description: "Property management and development firm specializing in rental apartments, commercial leasing, and investment property solutions."
    },
    {
      image: RealityRealEstate,
      name: "Reality Real Estate",
      description: "Full-service real estate agency offering property sales, valuation services, and investment consulting for both residential and commercial clients."
    }
  ];
function About() {


  const cardsToShow = 4;
  const cardWidth = 350;
  const cardMargin = 20;
  const [currentIndex, setCurrentIndex] = useState(0);

  const maxIndex = ethiopianRealEstateListings.length - cardsToShow;

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? maxIndex : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === maxIndex ? 0 : prev + 1
    );
  };

  return (
    <div className='about-container fade-in slide-up' id="partner"> 
      <h1 className='about-heading'>SOME OF OUR PARTNERS</h1>
      <p className='about-description'>
        Discover our trusted partners who help us deliver exceptional real estate solutions across Ethiopia. 
        From luxury residences to innovative urban developments, we collaborate with industry leaders to bring you the best properties and investment opportunities.
      </p>
      <div
        className="carousel-wrapper"
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100vw',
        }}
      >
        <div style={{
          width: '10vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <IconButton onClick={handlePrev}>
            <ArrowBackIosNewIcon />
          </IconButton>
        </div>
        <div
          className="cardcontainer"
          style={{
            width: '80vw',
            overflow: 'hidden',
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <div
            className="carousel-inner"
            style={{
              display: 'flex',
              transition: 'transform 0.5s ease',
              transform: `translateX(-${currentIndex * (cardWidth + cardMargin)}px)`,
            }}
          >
            {ethiopianRealEstateListings.map((item, idx) => (
              <Card key={idx} sx={{ width: cardWidth, marginRight: `${cardMargin}px`, flexShrink: 0 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={item?.image}
                    alt={item?.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                      {item?.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item?.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    continue reading
                  </Button>
                </CardActions>
              </Card>
            ))}
          </div>
        </div>
        <div style={{
          width: '10vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
          <IconButton onClick={handleNext}>
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default About