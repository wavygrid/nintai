import React from 'react';
import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import './Services.css';

const Services: React.FC = () => {
  return (
    <div className="services">
      <div className="services-content">
        <div className="container">
          <div className="hero-intro">
            <h2>Expert Solutions Tailored to Your Business</h2>
            <p>
              At Nintai & Partners, we offer a comprehensive suite of services designed to accelerate your global expansion
              and strengthen your market position. Our expertise spans across strategic consulting, brand development,
              and market access facilitation.
            </p>
            <div className="hero-stats">
              <div className="hero-stats-row">
                <div className="stat-item">
                  <span className="stat-label">Experience</span>
                  <span className="stat-value">18+ Years</span>
                </div>
                <div className="stat-item">
                  <span className="stat-label">Access Markets</span>
                  <span className="stat-value">55+ Countries</span>
                </div>
              </div>
              <div className="stat-item markets-stat">
                <div className="markets-grid">
                  {/* EU */}
                  <div className="market-region">
                    <div className="region-map">
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
                    <div className="region-label">EU</div>
                  </div>

                  {/* UK */}
                  <div className="market-region">
                    <div className="region-map">
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
                    <div className="region-label">UK</div>
                  </div>

                  {/* Nordic */}
                  <div className="market-region">
                    <div className="region-map">
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
                    <div className="region-label">Nordic</div>
                  </div>

                  {/* Asia */}
                  <div className="market-region">
                    <div className="region-map">
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
                    <div className="region-label">Asia</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="comprehensive-section">
            <div className="content-wrapper">
              {/* How We Work - Horizontal Flow */}
              <div className="methodology-block">
                <div className="section-header">
                  <h3>How We Work</h3>
                  <p className="header-description">
                    A structured approach delivering measurable results at every stage.
                  </p>
                </div>
                <div className="methodology-flow">
                  <div className="flow-step">
                    <span className="flow-number">01</span>
                    <div className="flow-content">
                      <h4>Discovery</h4>
                      <p>Deep dive into your business objectives and market opportunities.</p>
                    </div>
                  </div>
                  <div className="flow-arrow">
                    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="#8b7355" strokeWidth="1.5" opacity="0.3"/>
                    </svg>
                  </div>
                  <div className="flow-step">
                    <span className="flow-number">02</span>
                    <div className="flow-content">
                      <h4>Strategy</h4>
                      <p>Tailored roadmaps with clear milestones and risk mitigation.</p>
                    </div>
                  </div>
                  <div className="flow-arrow">
                    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="#8b7355" strokeWidth="1.5" opacity="0.3"/>
                    </svg>
                  </div>
                  <div className="flow-step">
                    <span className="flow-number">03</span>
                    <div className="flow-content">
                      <h4>Implementation</h4>
                      <p>Execute strategies managing partnerships and compliance.</p>
                    </div>
                  </div>
                  <div className="flow-arrow">
                    <svg width="60" height="24" viewBox="0 0 60 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0 12H58M58 12L48 2M58 12L48 22" stroke="#8b7355" strokeWidth="1.5" opacity="0.3"/>
                    </svg>
                  </div>
                  <div className="flow-step">
                    <span className="flow-number">04</span>
                    <div className="flow-content">
                      <h4>Growth</h4>
                      <p>Continuous refinement adapting to evolving markets.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Services & Who We Serve - Asymmetric Layout */}
              <div className="services-audience-block">
                <div className="primary-services">
                  <h3>Our Services</h3>
                  <div className="services-list">
                    <div className="service-row">
                      <div className="service-title">
                        <h4>Global Market Entry</h4>
                      </div>
                      <div className="service-description">
                        <p>Comprehensive market analysis, regulatory navigation, and strategic planning to ensure successful entry into new territories.</p>
                      </div>
                    </div>
                    <div className="service-row">
                      <div className="service-title">
                        <h4>Brand Strategy & Positioning</h4>
                      </div>
                      <div className="service-description">
                        <p>Cultural adaptation and brand development that resonates with local markets while maintaining your core identity.</p>
                      </div>
                    </div>
                    <div className="service-row">
                      <div className="service-title">
                        <h4>Partnership Development</h4>
                      </div>
                      <div className="service-description">
                        <p>Strategic partner identification, vetting, and relationship management to accelerate market penetration.</p>
                      </div>
                    </div>
                    <div className="service-row">
                      <div className="service-title">
                        <h4>Regulatory & Compliance</h4>
                      </div>
                      <div className="service-description">
                        <p>Expert guidance through complex international regulations ensuring full compliance and operational confidence.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="audience-sidebar">
                  <div className="audience-content">
                    <h3>Who We Serve</h3>
                    <div className="audience-list">
                      <div className="audience-item">
                        <h4>Technology & SaaS</h4>
                        <p>Software companies scaling across borders and building strategic partnerships.</p>
                      </div>
                      <div className="audience-item">
                        <h4>Manufacturing</h4>
                        <p>Established manufacturers pursuing international expansion and optimization.</p>
                      </div>
                      <div className="audience-item">
                        <h4>Professional Services</h4>
                        <p>Firms establishing credibility in cross-border markets.</p>
                      </div>
                      <div className="audience-item">
                        <h4>Growth-Stage Enterprises</h4>
                        <p>Companies with $10M+ revenue seeking sustainable international growth.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="packages-section">
            <div className="content-wrapper">
              <div className="section-intro centered">
                <h3>Service Packages</h3>
                <p className="section-description">
                  Flexible engagement models designed to meet you where you are.
                </p>
              </div>
              <div className="packages-grid">
                <div className="package-card">
                  <div className="package-header">
                    <h4>Market Assessment</h4>
                    <p className="package-timeline">4-6 weeks</p>
                  </div>
                  <p className="package-description">
                    Ideal for businesses exploring new markets and seeking validation before committing resources.
                  </p>
                  <div className="package-includes">
                    <span>Market opportunity analysis</span>
                    <span>Competitive landscape review</span>
                    <span>Regulatory requirements overview</span>
                    <span>Entry strategy recommendations</span>
                    <span>Executive presentation</span>
                  </div>
                </div>

                <div className="package-card featured">
                  <div className="package-badge">Most Popular</div>
                  <div className="package-header">
                    <h4>Full Market Entry</h4>
                    <p className="package-timeline">3-6 months</p>
                  </div>
                  <p className="package-description">
                    Comprehensive support from strategy through execution for businesses ready to launch.
                  </p>
                  <div className="package-includes">
                    <span>Complete market assessment</span>
                    <span>Go-to-market strategy</span>
                    <span>Partnership development</span>
                    <span>Regulatory compliance support</span>
                    <span>Brand localization</span>
                    <span>Launch execution</span>
                  </div>
                </div>

                <div className="package-card">
                  <div className="package-header">
                    <h4>Ongoing Advisory</h4>
                    <p className="package-timeline">Retainer-based</p>
                  </div>
                  <p className="package-description">
                    Continuous strategic guidance for established international operations seeking optimization.
                  </p>
                  <div className="package-includes">
                    <span>Monthly strategic sessions</span>
                    <span>Performance monitoring</span>
                    <span>Market intelligence updates</span>
                    <span>Growth opportunity identification</span>
                    <span>On-demand expert access</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Accelerate Your Global Success?</h2>
            <p>
              Our team of experts is ready to develop a customized strategy that meets your unique business needs
              and market objectives. Let's discuss how we can help you achieve sustainable growth.
            </p>
            <a href="/book-now" className="cta-button">Get Started Today</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;