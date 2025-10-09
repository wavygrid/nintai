import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { useScreenSize } from '../hooks/useScreenSize';

const Home: React.FC = () => {
  const { isMobile } = useScreenSize();

  // Preload background image
  React.useEffect(() => {
    const img = new Image();
    img.src = require('../assets/Landing_page_background.webp');

    // Add WebP support detection
    const webpTest = document.createElement('canvas');
    const hasWebP = webpTest.toDataURL('image/webp').indexOf('data:image/webp') === 0;
    if (!hasWebP) {
      document.documentElement.classList.add('no-webp');
    }
  }, []);

  const handleLearnMore = (e: React.MouseEvent) => {
    if (isMobile) {
      e.preventDefault();
      const servicesSection = document.getElementById('services');
      if (servicesSection) {
        servicesSection.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="home">
      <div className="hero-section">
        <div className="hero-background"></div>
        <div className="hero-content">
          <div className="container">
            <h1>Expert Branding and Market Access Solutions for Your Business</h1>
            <p>
              Unlock your business's full potential. We combine deep global expertise with relentless passion to help you navigate
              complex markets, strengthen your brand, and drive sustainable growth. We don't just consult - we partner with you every
              step of the way until success is bred and lasting.
            </p>
            {isMobile ? (
              <button onClick={handleLearnMore} className="cta-button">Learn More</button>
            ) : (
              <Link to="/services" className="cta-button">Learn More</Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;