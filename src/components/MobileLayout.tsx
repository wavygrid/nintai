import React, { useState, useEffect } from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import Home from '../pages/Home';
import Footer from './Footer';
import './MobileLayout.css';

const MobileLayout: React.FC = () => {
  const [openServiceIndex, setOpenServiceIndex] = useState<number | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentPackageIndex, setCurrentPackageIndex] = useState(1); // Start with "Most Popular" (index 1)

  const toggleService = (index: number) => {
    setOpenServiceIndex(openServiceIndex === index ? null : index);
  };

  const packages = [
    {
      title: "Market Assessment",
      timeline: "4-6 weeks",
      description: "Ideal for businesses exploring new markets and seeking validation before committing resources.",
      includes: [
        "Market opportunity analysis",
        "Competitive landscape review",
        "Regulatory requirements overview",
        "Entry strategy recommendations",
        "Executive presentation"
      ],
      featured: false
    },
    {
      title: "Full Market Entry",
      timeline: "3-6 months",
      description: "Comprehensive support from strategy through execution for businesses ready to launch.",
      includes: [
        "Complete market assessment",
        "Go-to-market strategy",
        "Partnership development",
        "Regulatory compliance support",
        "Brand localization",
        "Launch execution"
      ],
      featured: true
    },
    {
      title: "Ongoing Advisory",
      timeline: "Retainer-based",
      description: "Continuous strategic guidance for established international operations seeking optimization.",
      includes: [
        "Monthly strategic sessions",
        "Performance monitoring",
        "Market intelligence updates",
        "Growth opportunity identification",
        "On-demand expert access"
      ],
      featured: false
    }
  ];

  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe && currentPackageIndex < packages.length - 1) {
      setCurrentPackageIndex(currentPackageIndex + 1);
    }

    if (isRightSwipe && currentPackageIndex > 0) {
      setCurrentPackageIndex(currentPackageIndex - 1);
    }

    setTouchStart(0);
    setTouchEnd(0);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="mobile-layout">
      <div className="mobile-section" id="home">
        <Home />
      </div>
      <div className="mobile-section" id="about">
        <div className="mobile-about-content">
          <div className="container">

            {/* Hero Statement */}
            <div className="mobile-about-hero">
              <h2>Building Global Success</h2>
              <p className="mobile-about-tagline">Where patience meets performance</p>
            </div>

            {/* Global Presence */}
            <div className="mobile-global-presence">
              <div className="mobile-headquarters">
                <span className="mobile-location-label">Based in</span>
                <span className="mobile-location-city">London, United Kingdom</span>
              </div>
              <div className="mobile-offices">
                <span className="mobile-location-label">With global presence in</span>
                <div className="mobile-office-locations">
                  <span className="mobile-office-city">Berlin, Germany</span>
                  <span className="mobile-office-separator">•</span>
                  <span className="mobile-office-city">Colombo, Sri Lanka</span>
                </div>
              </div>
            </div>

            {/* Philosophy Quote */}
            <div className="mobile-philosophy-card">
              <p className="mobile-japanese-text">忍耐は苦いが、その実はより甘い</p>
              <p className="mobile-translation">"Patience is bitter, but its fruit is sweeter"</p>
              <div className="mobile-philosophy-divider"></div>
              <p className="mobile-philosophy-text">
                Nintai embodies the Japanese philosophy of endurance and perseverance. This principle guides our partnership approach—standing
                by our clients through every challenge while creating lasting competitive advantages in international markets. We bridge the gap
                between ambitious businesses and their global aspirations through expert branding and strategic market access.
              </p>
            </div>

            {/* Expertise Section */}
            <div className="mobile-expertise-section">
              <div className="mobile-expertise-header">
                <h3>Industry Leadership</h3>
                <div className="mobile-expertise-line"></div>
              </div>
              <p className="mobile-expertise-subtitle">
                Our partners bring extensive experience from leading global organizations, with deep expertise in
                navigating complex international markets across technology, healthcare, manufacturing, and consumer goods sectors.
              </p>
              <div className="mobile-logo-showcase">
                <img src="/logos/thomson-reuters.jpg" alt="Thomson Reuters" className="mobile-brand-logo" />
                <img src="/logos/wells-fargo.webp" alt="Wells Fargo" className="mobile-brand-logo" />
                <img src="/logos/fis.png" alt="FIS" className="mobile-brand-logo" />
              </div>
              <p className="mobile-expertise-description">
                Proven track record of consulting for Fortune 500 companies, delivering strategic insights
                and operational excellence that drive measurable results and lasting transformation.
              </p>
            </div>

            {/* Core Principles */}
            <div className="mobile-principles-section">
              <div className="mobile-principles-header">
                <h3>What Guides Us</h3>
                <div className="mobile-principles-line"></div>
              </div>
              <div className="mobile-principles-grid">
                <div className="mobile-principle-card">
                  <h4>Global Expertise</h4>
                  <p>Deep understanding of international markets, regulations, and cultural nuances. We bring local market knowledge
                  combined with global strategic thinking to every engagement.</p>
                </div>
                <div className="mobile-principle-card">
                  <h4>Partnership Approach</h4>
                  <p>We become an extension of your team, invested in your long-term success. Our collaborative model ensures
                  alignment with your vision throughout the journey.</p>
                </div>
                <div className="mobile-principle-card">
                  <h4>Cultural Intelligence</h4>
                  <p>Navigating the complexities of global business with sensitivity and insight. We bridge cultural divides
                  to create authentic connections in every market.</p>
                </div>
                <div className="mobile-principle-card">
                  <h4>Sustainable Growth</h4>
                  <p>Building strategies that create lasting value and competitive advantages. We focus on long-term success
                  rather than short-term wins, ensuring your growth endures.</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="mobile-section" id="services">
        <div className="mobile-services-content">
          <div className="container">

            {/* Services Header */}
            <div className="mobile-services-header">
              <h2>Expert Solutions Tailored to Your Business</h2>
              <div className="mobile-services-line"></div>
            </div>
            <p className="mobile-services-intro">
              At Nintai & Partners, we offer a comprehensive suite of services designed to accelerate your global expansion
              and strengthen your market position. Our expertise spans across strategic consulting, brand development,
              and market access facilitation.
            </p>

            {/* Stats */}
            <div className="mobile-stats">
              <div className="mobile-stat-item">
                <span className="mobile-stat-label">Experience</span>
                <span className="mobile-stat-value">18+ Years</span>
              </div>
              <div className="mobile-stat-item">
                <span className="mobile-stat-label">Access Markets</span>
                <span className="mobile-stat-value">55+ Countries</span>
              </div>
            </div>

            {/* Markets Grid */}
            <div className="mobile-markets-section">
              <h3>Our Markets</h3>
              <div className="mobile-markets-grid">
                {/* EU */}
                <div className="mobile-market-region">
                  <div className="mobile-region-map">
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{
                        scale: 350,
                        center: [10, 52]
                      }}
                      width={300}
                      height={300}
                    >
                      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                        {({ geographies }) =>
                          geographies.map((geo) => {
                            const isEU =
                              geo.properties.name === 'Germany' ||
                              geo.properties.name === 'France' ||
                              geo.properties.name === 'Italy' ||
                              geo.properties.name === 'Spain' ||
                              geo.properties.name === 'Netherlands' ||
                              geo.properties.name === 'Belgium' ||
                              geo.properties.name === 'Austria' ||
                              geo.properties.name === 'Portugal';

                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={isEU ? "#8b7355" : "#e8e8e8"}
                                stroke="#ffffff"
                                strokeWidth={0.3}
                                style={{
                                  default: { outline: 'none' },
                                  hover: { outline: 'none' },
                                  pressed: { outline: 'none' },
                                }}
                              />
                            );
                          })
                        }
                      </Geographies>
                    </ComposableMap>
                  </div>
                  <div className="mobile-region-label">EU</div>
                </div>

                {/* UK */}
                <div className="mobile-market-region">
                  <div className="mobile-region-map">
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{
                        scale: 1000,
                        center: [-2, 54]
                      }}
                      width={300}
                      height={300}
                    >
                      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                        {({ geographies }) =>
                          geographies.map((geo) => {
                            const isUK = geo.properties.name === 'United Kingdom';

                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={isUK ? "#8b7355" : "#e8e8e8"}
                                stroke="#ffffff"
                                strokeWidth={0.3}
                                style={{
                                  default: { outline: 'none' },
                                  hover: { outline: 'none' },
                                  pressed: { outline: 'none' },
                                }}
                              />
                            );
                          })
                        }
                      </Geographies>
                    </ComposableMap>
                  </div>
                  <div className="mobile-region-label">UK</div>
                </div>

                {/* Nordic */}
                <div className="mobile-market-region">
                  <div className="mobile-region-map">
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{
                        scale: 300,
                        center: [18, 64]
                      }}
                      width={300}
                      height={300}
                    >
                      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                        {({ geographies }) =>
                          geographies.map((geo) => {
                            const isNordic =
                              geo.properties.name === 'Sweden' ||
                              geo.properties.name === 'Norway' ||
                              geo.properties.name === 'Denmark' ||
                              geo.properties.name === 'Finland';

                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={isNordic ? "#8b7355" : "#e8e8e8"}
                                stroke="#ffffff"
                                strokeWidth={0.3}
                                style={{
                                  default: { outline: 'none' },
                                  hover: { outline: 'none' },
                                  pressed: { outline: 'none' },
                                }}
                              />
                            );
                          })
                        }
                      </Geographies>
                    </ComposableMap>
                  </div>
                  <div className="mobile-region-label">Nordic</div>
                </div>

                {/* Asia */}
                <div className="mobile-market-region">
                  <div className="mobile-region-map">
                    <ComposableMap
                      projection="geoMercator"
                      projectionConfig={{
                        scale: 250,
                        center: [105, 20]
                      }}
                      width={300}
                      height={300}
                    >
                      <Geographies geography="https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json">
                        {({ geographies }) =>
                          geographies.map((geo) => {
                            const isAsia =
                              geo.properties.name === 'India' ||
                              geo.properties.name === 'Singapore' ||
                              geo.properties.name === 'Japan' ||
                              geo.properties.name === 'Sri Lanka';

                            return (
                              <Geography
                                key={geo.rsmKey}
                                geography={geo}
                                fill={isAsia ? "#8b7355" : "#e8e8e8"}
                                stroke="#ffffff"
                                strokeWidth={0.3}
                                style={{
                                  default: { outline: 'none' },
                                  hover: { outline: 'none' },
                                  pressed: { outline: 'none' },
                                }}
                              />
                            );
                          })
                        }
                      </Geographies>
                    </ComposableMap>
                  </div>
                  <div className="mobile-region-label">Asia</div>
                </div>
              </div>
            </div>

            {/* Our Services */}
            <div className="mobile-services-list">
              <h3>Our Services</h3>
              <div className="mobile-service-item">
                <h4>Global Market Entry</h4>
                <p>Comprehensive market analysis, regulatory navigation, and strategic planning to ensure successful entry into new territories.</p>
              </div>
              <div className="mobile-service-item">
                <h4>Brand Strategy & Positioning</h4>
                <p>Cultural adaptation and brand development that resonates with local markets while maintaining your core identity.</p>
              </div>
              <div className="mobile-service-item">
                <h4>Partnership Development</h4>
                <p>Strategic partner identification, vetting, and relationship management to accelerate market penetration.</p>
              </div>
              <div className="mobile-service-item">
                <h4>Regulatory & Compliance</h4>
                <p>Expert guidance through complex international regulations ensuring full compliance and operational confidence.</p>
              </div>
            </div>

            {/* Service Packages Carousel */}
            <div className="mobile-packages">
              <h3>Service Packages</h3>
              <p className="mobile-packages-subtitle">
                Flexible engagement models designed to meet you where you are.
              </p>
              <div
                className="mobile-packages-carousel"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div
                  className="mobile-packages-wrapper"
                  style={{
                    transform: `translateX(-${currentPackageIndex * 100}%)`
                  }}
                >
                  {packages.map((pkg, index) => (
                    <div
                      key={index}
                      className={`mobile-package-card ${pkg.featured ? 'featured' : ''}`}
                    >
                      {pkg.featured && <div className="mobile-package-badge">Most Popular</div>}
                      <h4>{pkg.title}</h4>
                      <p className="mobile-package-timeline">{pkg.timeline}</p>
                      <p>{pkg.description}</p>
                      <div className="mobile-package-includes">
                        {pkg.includes.map((item, i) => (
                          <span key={i}>{item}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mobile-packages-indicators">
                {packages.map((_, index) => (
                  <button
                    key={index}
                    className={`package-indicator ${index === currentPackageIndex ? 'active' : ''}`}
                    onClick={() => setCurrentPackageIndex(index)}
                    aria-label={`Go to package ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mobile-cta">
              <h3>Ready to Accelerate Your Global Success?</h3>
              <p>Our team of experts is ready to develop a customized strategy that meets your unique business needs and market objectives.</p>
              <a href="/book-now" className="mobile-cta-button">Get Started Today</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />

      {/* Scroll to Top Button */}
      <button
        className={`scroll-to-top ${showScrollTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 19V5M12 5L5 12M12 5L19 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>
    </div>
  );
};

export default MobileLayout;