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
      {!isMobile ? (
        <div className="service-cards">
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
      ) : (
        /* Mobile Vertical List View */
        <div className="mobile-services-list">
          {services.map((service, index) => (
            <div key={index} className="mobile-service-card">
              <div className="mobile-service-image-container">
                <img src={service.image} alt={service.title} className='mobile-service-image'/>
                <div className='mobile-overlay'></div>
              </div>
              <div className="mobile-service-content">
                <Typography variant="h6" className="mobile-service-title">
                  {service.title}
                </Typography>
                <Typography variant="body1" className="mobile-service-description">
                  {service.description}
                </Typography>
                <Typography variant="body1" className="mobile-service-explore">
                  Explore Now
                  <EastIcon sx={{ ml: 1 }} />
                </Typography>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Service;