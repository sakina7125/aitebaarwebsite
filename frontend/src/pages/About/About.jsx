import React from 'react';
import './About.css';
import { useNavigate } from 'react-router-dom';

const About = () => {
  const navigate = useNavigate();

  return (
    <div className="about-container">
      <header className="about-header">
        <img src="/AitebaarLogo.png" alt="Aitebaar Logo" className="about-logo" onClick={() => navigate('/')} />
        <h1>About Aitebaar</h1>
      </header>

      <section className="mission-vision">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>To revolutionize financial literacy and accessibility in Pakistan through innovative technology and education, ensuring every individual has the opportunity to achieve financial independence.</p>
        </div>
        <div className="vision">
          <h2>Our Vision</h2>
          <p>Creating a financially educated and empowered Pakistan where everyone has equal access to financial services and opportunities.</p>
        </div>
      </section>

      <section className="services-overview">
        <h2>Our Services</h2>
        <div className="services-grid">
          <div className="service-item">
            <h3>Financial Education</h3>
            <p>Comprehensive learning modules designed specifically for Pakistani context, covering everything from basic financial concepts to advanced investment strategies.</p>
          </div>
          <div className="service-item">
            <h3>AI Credit Scoring</h3>
            <p>Revolutionary credit assessment system using artificial intelligence to evaluate creditworthiness beyond traditional metrics, making loans accessible to the unbanked population.</p>
          </div>
          <div className="service-item">
            <h3>Budget Management</h3>
            <p>Smart tools for expense tracking and budget planning, helping users make informed financial decisions and build better money management habits.</p>
          </div>
          <div className="service-item">
            <h3>Investment Gateway</h3>
            <p>SECP-approved investment platform providing access to various investment opportunities with educational resources to make informed investment decisions.</p>
          </div>
        </div>
      </section>

      <section className="services-overview">
  <h2>Our Approach</h2>
  <div className="approach-stack">
    <div className="top-boxes">
      <div className="service-item">
        <h3>Technology-Driven Solutions</h3>
        <p>We leverage cutting-edge technology including AI and machine learning to provide innovative financial solutions.</p>
      </div>
      <div className="service-item">
        <h3>Education First</h3>
        <p>Our platform prioritizes financial education, ensuring users understand the fundamentals before making financial decisions.</p>
      </div>
    </div>
    <div className="service-item middle-box">
      <h3>Inclusive Finance</h3>
      <p>We're breaking down traditional barriers to financial services, making them accessible to all Pakistanis.</p>
    </div>
  </div>
</section>

<section className="team-section">
  <h2>Our Team</h2>
  <div className="team-grid">
    <div className="team-member">
      <div className="member-avatar">FA</div>
      <h3>Firas Ihsan</h3>
    </div>
    <div className="team-member">
      <div className="member-avatar">HF</div>
      <h3>Hamd Fatima Monis</h3>
    </div>
    <div className="team-member">
      <div className="member-avatar">SS</div>
      <h3>Syeda Sakina Siraj</h3>
    </div>
  </div>
  <div className="team-grid-bottom">
    <div className="team-member">
      <div className="member-avatar">TA</div>
      <h3>Tania Ahmed</h3>
    </div>
    <div className="team-member">
      <div className="member-avatar">AU</div>
      <h3>Amna Usman</h3>
    </div>
  </div>
</section>   
      
    </div>
  );
};

export default About;