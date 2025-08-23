import { Typography } from '@mui/material';
import { useState, useEffect } from 'react';
import './Service.css'; 
import image1 from '../../assets/Images/1.png';
import image2 from '../../assets/Images/2.png';
import image3 from '../../assets/Images/3.png';
import image4 from '../../assets/Images/4.png';
import image5 from '../../assets/Images/5.png';
import image6 from '../../assets/Images/6.png';
import EastIcon from '@mui/icons-material/East';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import IconButton from '@mui/material/IconButton';

function Service() {
  const services = [
    {
      title: 'Property Sales',
      description: 'Expert assistance in selling your property quickly and at the best price.',
      image: image1,
    },
    {
      title: 'Consultation',
      description: 'Personalized consultation to understand your real estate needs.',
      image: image2,
    },
    {
      title: 'Investment Guidance',
      description: 'Expert advice on property investment strategies.',
      image: image3,
    },
    {
      title: 'Market Research',
      description: 'In-depth analysis of market trends to inform your decisions.',
      image: image5,
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Check if device is mobile
  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? services.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === services.length - 1 ? 0 : prev + 1));
  };

  // Auto-rotate carousel for mobile
  useEffect(() => {
    if (!isMobile) return;
    
    const interval = setInterval(() => {
      handleNext();
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile, currentIndex]);

  return (
    <div className='service-container' id='service'>
      <Typography
        variant="h3"
        className="service-title"
        sx={{ mb: 2, color: '#000', fontWeight: 900, fontFamily: 'Roboto Flex' }}
      >
        Our Services
      </Typography>

      <Typography
        variant="body1"
        className="service-description"
        sx={{ mb: 6, color: '#444', fontWeight: 400, fontFamily: 'Roboto Serif' }}
      >
        We provide a full suite of real estate marketing services to help you sell, invest, and manage property with confidence.
      </Typography>

      {/* Desktop Grid View */}
      <div className="service-cards desktop-view">
        {services.map((service, index) => (
          <div key={index} className="service-card">
            <div className='overlay'></div>
            <img src={service.image} alt={service.title} className='service-card-image'/>
            <Typography variant="h4" className="service-card-title">
              {service.title}
            </Typography>
            <Typography variant="h6" className="service-card-description">
              {service.description}
            </Typography>
            <Typography variant="h6" className="service-explore">
              Explore Now
              <EastIcon sx={{ ml: 1 }} />
            </Typography>
          </div>
        ))}
      </div>

      {/* Mobile Carousel View */}
      <div className="mobile-carousel-container">
        <div className="carousel-wrapper">
          <div className="carousel-control carousel-control-prev">
            <IconButton onClick={handlePrev} aria-label="Previous service">
              <ArrowBackIosNewIcon />
            </IconButton>
          </div>
          
          <div className="carousel-inner">
            {services.map((service, index) => (
              <div 
                key={index} 
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="service-card mobile-card">
                  <div className='overlay'></div>
                  <img src={service.image} alt={service.title} className='service-card-image'/>
                  <Typography variant="h4" className="service-card-title">
                    {service.title}
                  </Typography>
                  <Typography variant="h6" className="service-card-description">
                    {service.description}
                  </Typography>
                  <Typography variant="h6" className="service-explore">
                    Explore Now
                    <EastIcon sx={{ ml: 1 }} />
                  </Typography>
                </div>
              </div>
            ))}
          </div>
          
          <div className="carousel-control carousel-control-next">
            <IconButton onClick={handleNext} aria-label="Next service">
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
        
        {/* Indicators for mobile */}
        <div className="carousel-indicators">
          {services.map((_, index) => (
            <button
              key={index}
              className={`indicator ${index === currentIndex ? 'active' : ''}`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Go to service ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Service;