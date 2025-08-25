import React, { useState, useEffect } from 'react';
import './About.css';   

import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import CardMedia from '@mui/material/CardMedia';
import CardActionArea from '@mui/material/CardActionArea';
import Card from '@mui/material/Card';
import IconButton from '@mui/material/IconButton';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
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
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(4);
  const [cardWidth, setCardWidth] = useState(350);
  const cardMargin = 20;

  // Handle responsive layout
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsToShow(1);
        setCardWidth(300);
      } else if (window.innerWidth < 1024) {
        setCardsToShow(2);
        setCardWidth(320);
      } else if (window.innerWidth < 1280) {
        setCardsToShow(3);
        setCardWidth(330);
      } else {
        setCardsToShow(4);
        setCardWidth(350);
      }
    };

    // Initial call
    handleResize();

    // Add event listener
    window.addEventListener('resize', handleResize);

    // Clean up
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, ethiopianRealEstateListings.length - cardsToShow);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      if (maxIndex > 0) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [currentIndex, maxIndex]);

  return (
    <div className='about-container fade-in slide-up' id="partner"> 
      <h1 className='about-heading'>SOME OF OUR PARTNERS</h1>
      <p className='about-description'>
        Discover our trusted partners who help us deliver exceptional real estate solutions across Ethiopia. 
        From luxury residences to innovative urban developments, we collaborate with industry leaders to bring you the best properties and investment opportunities.
      </p>
      
      <div className="carousel-wrapper">
        <div className="carousel-control carousel-control-prev">
          <IconButton onClick={handlePrev} aria-label="Previous">
            <ArrowBackIosNewIcon />
          </IconButton>
        </div>
        
        <div className="carousel-container">
          <div 
            className="carousel-inner"
            style={{
              transform: `translateX(-${currentIndex * (cardWidth + cardMargin)}px)`
            }}
          >
            {ethiopianRealEstateListings.map((item, idx) => (
              <div 
                key={idx} 
                className="carousel-card-wrapper"
                style={{ 
                  width: `${cardWidth}px`,
                  marginRight: `${cardMargin}px`
                }}
              >
                <Card className="carousel-card">
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.image}
                      alt={item.name}
                      className="carousel-image"
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h6" component="div" className="card-title">
                        {item.name}
                      </Typography>
                      <Typography variant="body2" className="card-description">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button size="small" color="primary">
                      Continue reading
                    </Button>
                  </CardActions>
                </Card>
              </div>
            ))}
          </div>
        </div>
        
        <div className="carousel-control carousel-control-next">
          <IconButton onClick={handleNext} aria-label="Next">
            <ArrowForwardIosIcon />
          </IconButton>
        </div>
      </div>

      {/* Indicators for mobile */}
  
    </div>
  );
}

export default About;