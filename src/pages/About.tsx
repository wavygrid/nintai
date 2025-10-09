import React from 'react';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="container">
          <div className="hero-intro">
            <h2>Building Global Success</h2>
            <p>
              Founded on the principles of patience, persistence, and partnership, Nintai & Partners emerged from a deep understanding
              that successful global expansion requires more than just strategy—it demands cultural intelligence, market insight,
              and unwavering commitment to our clients' success.
            </p>
            <div className="global-presence">
              <div className="headquarters">
                <span className="location-label">Based in</span>
                <span className="location-city">London, United Kingdom</span>
              </div>
              <div className="offices">
                <span className="location-label">With global presence in</span>
                <div className="office-locations">
                  <span className="office-city">Berlin</span>
                  <span className="office-separator">•</span>
                  <span className="office-city">Colombo</span>
                  <span className="office-separator">•</span>
                  <span className="office-city">Toronto</span>
                </div>
              </div>
            </div>
            <button
              className="scroll-indicator"
              onClick={() => document.getElementById('philosophy-section')?.scrollIntoView({ behavior: 'smooth' })}
              aria-label="Scroll to next section"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19M12 19L5 12M12 19L19 12" stroke="#8b7355" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <div id="philosophy-section" className="philosophy-section">
            <div className="content-wrapper">
              <div className="section-intro centered">
                <h3>Our Philosophy</h3>
                <p className="section-description">
                  The name "Nintai" embodies the Japanese concept of endurance and perseverance.
                </p>
              </div>

              <div className="philosophy-quote-block">
                <div className="quote-content">
                  <p className="japanese-quote">忍耐は苦いが、その実はより甘い</p>
                  <p className="quote-translation">"Patience is bitter, but its fruit is sweeter"</p>
                </div>
              </div>

              <div className="philosophy-content">
                <p>
                  This philosophy guides everything we do, ensuring that we stand by our clients through every challenge
                  and celebrate every milestone achieved together.
                </p>
                <p>
                  We exist to bridge the gap between ambitious businesses and their global aspirations, providing expert branding
                  and market access solutions that not only open doors but create lasting competitive advantages in new markets worldwide.
                </p>
              </div>
            </div>
          </div>

          <div className="experience-section">
            <div className="content-wrapper">
              <div className="section-intro centered">
                <h3>Our Expertise</h3>
                <p className="section-description">
                  Extensive experience from leading global organizations.
                </p>
              </div>

              <div className="expertise-logos-bar">
                <img src="/logos/thomson-reuters.jpg" alt="Thomson Reuters" className="partner-logo" />
                <img src="/logos/wells-fargo.webp" alt="Wells Fargo" className="partner-logo" />
                <img src="/logos/fis.png" alt="FIS" className="partner-logo" />
              </div>

              <div className="expertise-content">
                <p>
                  Our partners bring deep expertise in navigating complex international markets and building sustainable
                  competitive advantages across diverse industries.
                </p>
                <p>
                  With a proven track record of consulting for Fortune 500 companies across technology, healthcare, manufacturing,
                  and consumer goods sectors, we bring strategic insights and operational excellence to every engagement, ensuring
                  measurable results and lasting transformation.
                </p>
              </div>
            </div>
          </div>

          <div className="principles-section">
            <div className="content-wrapper">
              <div className="section-intro centered">
                <h3>What Guides Us</h3>
                <p className="section-description">
                  Four core principles that define our approach to every partnership.
                </p>
              </div>
              <div className="principles-table">
                <div className="principles-table-header">
                  <span className="header-principle">Principle</span>
                  <span className="header-approach">Our Approach</span>
                </div>

                <div className="principles-table-row">
                  <div className="row-principle">Global Expertise</div>
                  <div className="row-approach">
                    Deep understanding of international markets, regulations, and cultural nuances across multiple industries.
                    We bring local market knowledge combined with global strategic thinking to every engagement.
                  </div>
                </div>

                <div className="principles-table-row">
                  <div className="row-principle">Partnership Approach</div>
                  <div className="row-approach">
                    We become an extension of your team, invested in your long-term success. Our collaborative model ensures
                    alignment with your vision throughout the journey.
                  </div>
                </div>

                <div className="principles-table-row">
                  <div className="row-principle">Cultural Intelligence</div>
                  <div className="row-approach">
                    Navigating the complexities of global business with sensitivity and insight. We bridge cultural divides
                    to create authentic connections in every market.
                  </div>
                </div>

                <div className="principles-table-row">
                  <div className="row-principle">Sustainable Growth</div>
                  <div className="row-approach">
                    Building strategies that create lasting value and competitive advantages. We focus on long-term success
                    rather than short-term wins, ensuring your growth endures.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="cta-section">
            <h2>Ready to Transform Your Global Vision?</h2>
            <p>
              Partner with us to unlock your business's full potential in international markets. Our team is committed to
              delivering strategic solutions that drive sustainable growth and lasting success.
            </p>
            <a href="/book-now" className="cta-button">Start Your Journey</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;