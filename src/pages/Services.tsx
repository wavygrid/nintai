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

          {/* Core Capabilities Section */}
          <div className="capabilities-section">
            <div className="content-wrapper">
              <div className="section-intro centered">
                <h3>Core Capabilities</h3>
                <div className="section-divider"></div>
                <p className="section-description">
                  Comprehensive solutions designed to navigate the complexities of global market expansion.
                </p>
              </div>
              <div className="capabilities-grid">
                <div className="capability-card">
                  <div className="capability-number">01</div>
                  <h4>Global Market Entry</h4>
                  <p>Strategic market analysis, regulatory navigation, and localized go-to-market strategies that ensure successful launches in new territories.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-number">02</div>
                  <h4>Brand Strategy & Positioning</h4>
                  <p>Cultural adaptation and brand development that resonates authentically with local markets while maintaining your core identity and values.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-number">03</div>
                  <h4>Partnership Development</h4>
                  <p>Strategic partner identification, due diligence, and relationship management to accelerate market penetration and operational excellence.</p>
                </div>
                <div className="capability-card">
                  <div className="capability-number">04</div>
                  <h4>Regulatory & Compliance</h4>
                  <p>Expert guidance through complex international regulations, ensuring full compliance and providing operational confidence in unfamiliar markets.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Our Methodology Section */}
          <div className="methodology-section">
            <div className="content-wrapper">
              <div className="section-intro centered">
                <h3>Our Methodology</h3>
                <div className="section-divider"></div>
                <p className="section-description">
                  A partnership-driven approach that evolves with your business at every stage.
                </p>
              </div>
              <div className="methodology-timeline">
                <div className="timeline-item left">
                  <div className="timeline-content">
                    <div className="timeline-phase">Phase 01</div>
                    <h4>Discovery & Analysis</h4>
                    <p>We begin by deeply understanding your business objectives, competitive position, and growth aspirations. Through comprehensive market research and stakeholder interviews, we identify opportunities and potential challenges in your target markets.</p>
                  </div>
                  <div className="timeline-marker"></div>
                </div>
                <div className="timeline-item right">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-phase">Phase 02</div>
                    <h4>Strategic Planning</h4>
                    <p>Leveraging insights from discovery, we craft tailored roadmaps with clear milestones, resource allocation, and risk mitigation strategies. Our plans balance ambition with pragmatism, ensuring sustainable growth trajectories.</p>
                  </div>
                </div>
                <div className="timeline-item left">
                  <div className="timeline-content">
                    <div className="timeline-phase">Phase 03</div>
                    <h4>Execution & Launch</h4>
                    <p>We partner with your team to execute strategies, manage partnerships, navigate regulatory requirements, and coordinate market entry activities. Our hands-on approach ensures nothing falls through the cracks during critical launch phases.</p>
                  </div>
                  <div className="timeline-marker"></div>
                </div>
                <div className="timeline-item right">
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <div className="timeline-phase">Phase 04</div>
                    <h4>Partnership & Optimization</h4>
                    <p>Success is ongoing. We remain invested in your growth, continuously monitoring performance, adapting strategies to evolving market conditions, and identifying new opportunities for expansion and optimization.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Client Results Section */}
          <div className="results-section">
            <div className="content-wrapper">
              <div className="section-intro centered">
                <h3>Client Results</h3>
                <div className="section-divider"></div>
                <p className="section-description">
                  Measurable outcomes that demonstrate our commitment to your success.
                </p>
              </div>
              <div className="results-grid">
                <div className="result-item">
                  <div className="result-value">127%</div>
                  <div className="result-label">Average Revenue Growth</div>
                  <p className="result-description">in new markets within first 18 months</p>
                </div>
                <div className="result-item">
                  <div className="result-value">92%</div>
                  <div className="result-label">Client Retention Rate</div>
                  <p className="result-description">long-term partnerships built on trust</p>
                </div>
                <div className="result-item">
                  <div className="result-value">18</div>
                  <div className="result-label">Average Partnership Duration</div>
                  <p className="result-description">months of continuous collaboration</p>
                </div>
                <div className="result-item">
                  <div className="result-value">$50M+</div>
                  <div className="result-label">Market Value Created</div>
                  <p className="result-description">for clients entering new territories</p>
                </div>
              </div>
            </div>
          </div>

          <div className="packages-section">
            <div className="content-wrapper">
              <div className="section-intro centered">
                <h3>Engagement Models</h3>
                <div className="section-divider"></div>
                <p className="section-description">
                  Flexible partnership structures designed to meet you where you are in your growth journey.
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