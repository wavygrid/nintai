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

          {/* Core Services */}
          <div className="core-services-section">
            <div className="content-wrapper">
              <h3>Core Services</h3>

              <div className="services-table">
                <div className="services-table-header">
                  <span className="header-service">Service</span>
                  <span className="header-description">What We Deliver</span>
                </div>

                <div className="services-table-row">
                  <div className="row-service">Market Entry & Expansion Strategy</div>
                  <div className="row-description">
                    Deep market assessments covering regulatory requirements, competitive dynamics, and distribution infrastructure.
                    Our analysis identifies viable entry paths, quantifies market opportunity, and maps partner ecosystems. Deliverables
                    include regulatory compliance roadmaps, competitive positioning frameworks, and go-to-market sequencing recommendations
                    with risk mitigation strategies.
                  </div>
                </div>

                <div className="services-table-row">
                  <div className="row-service">Partnership & Channel Development</div>
                  <div className="row-description">
                    From distributor identification to contract negotiation, we manage the full partner lifecycle. Our work includes
                    partner vetting with due diligence, agreement structuring, onboarding coordination, and performance management.
                    We bring existing networks across EU, UK, Nordic, and Asian markets while building new relationships specific
                    to your sector and growth objectives.
                  </div>
                </div>

                <div className="services-table-row">
                  <div className="row-service">Brand & Market Positioning</div>
                  <div className="row-description">
                    Cultural adaptation goes beyond translation. We develop market-specific messaging frameworks, value proposition
                    refinement, and positioning strategies that resonate locally. This includes competitive differentiation analysis,
                    pricing strategy localization, and brand architecture decisions for international portfolios.
                  </div>
                </div>

                <div className="services-table-row">
                  <div className="row-service">Regulatory & Compliance Navigation</div>
                  <div className="row-description">
                    Complex regulatory environments require local expertise. We guide entity structuring decisions, manage licensing
                    and certification processes, and ensure compliance with data protection, tax, and industry-specific regulations.
                    Our support includes ongoing monitoring of regulatory changes affecting your market operations.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Who Benefits Most */}
          <div className="benefits-section">
            <div className="content-wrapper">
              <div className="benefits-layout">
                <div className="benefits-intro">
                  <h3>Who Benefits Most</h3>
                  <p>
                    Our clients are typically mid-market to enterprise organizations with proven domestic success,
                    seeking disciplined international expansion. Common characteristics include revenue between $10M-$500M,
                    established product-market fit, and senior leadership commitment to multi-year market development.
                  </p>
                </div>

                <div className="benefits-scenarios">
                  <div className="scenario-card">
                    <div className="scenario-tag">B2B SaaS</div>
                    <h4>European Expansion for US Software Company</h4>
                    <p>Navigating GDPR compliance, VAT structures, and local cloud infrastructure requirements while building reseller networks across UK, DACH, and Nordic regions.</p>
                  </div>

                  <div className="scenario-card">
                    <div className="scenario-tag">Manufacturing</div>
                    <h4>Asian Market Entry for Industrial Equipment</h4>
                    <p>Establishing distributor relationships, managing certification requirements across multiple countries, and adapting sales models for relationship-driven markets.</p>
                  </div>

                  <div className="scenario-card">
                    <div className="scenario-tag">Consulting</div>
                    <h4>Global Credentials for Advisory Firm</h4>
                    <p>Building thought leadership presence, establishing local partnerships with accounting and legal firms, and positioning for multinational RFPs requiring global delivery capability.</p>
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