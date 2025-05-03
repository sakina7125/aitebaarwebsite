import React from 'react';
import './Education.css';
import { useNavigate } from 'react-router-dom';

const Education = () => {
  const navigate = useNavigate();

  return (
    <div className="education-page">
      <div className="education-hero">
        <h1>Financial Education for Pakistan</h1>
        <p>Empowering Pakistanis with comprehensive financial knowledge</p>
      </div>

      <div className="learning-tracks">
        <h2>Learning Tracks</h2>
        <div className="track-container">
          <div className="track-card beginner">
            <div className="track-icon">🌱</div>
            <h3>Foundations</h3>
            <ul>
              <li>Basic Financial Concepts</li>
              <li>Budgeting in Pakistani Context</li>
              <li>Savings Strategies</li>
              <li>Understanding Banking</li>
            </ul>
            <button className="track-btn">Start Learning</button>
          </div>

          <div className="track-card intermediate">
            <div className="track-icon">📈</div>
            <h3>Growth</h3>
            <ul>
              <li>Investment Basics</li>
              <li>Pakistan Stock Exchange</li>
              <li>Islamic Banking</li>
              <li>Risk Management</li>
            </ul>
            <button className="track-btn">Explore Track</button>
          </div>

          <div className="track-card advanced">
            <div className="track-icon">🎯</div>
            <h3>Mastery</h3>
            <ul>
              <li>Advanced Trading</li>
              <li>Portfolio Management</li>
              <li>Market Analysis</li>
              <li>Wealth Building</li>
            </ul>
            <button className="track-btn">Get Started</button>
          </div>
        </div>
      </div>

      <div className="education-features">
        <div className="feature-box">
          <h3>Interactive Learning</h3>
          <p>Engage with real-world scenarios and case studies from Pakistan's financial markets</p>
        </div>
        <div className="feature-box">
          <h3>Expert Guidance</h3>
          <p>Learn from Pakistan's top financial experts and industry professionals</p>
        </div>
        <div className="feature-box">
          <h3>Practical Tools</h3>
          <p>Access custom calculators and tools designed for Pakistani investors</p>
        </div>
      </div>

      <div className="subscription-section">
        <div className="subscription-content">
          <h2>Ready to Start Your Financial Journey?</h2>
          <p>Get unlimited access to all our educational resources</p>
          <div className="subscription-features">
            <div className="sub-feature">✓ Comprehensive Learning Modules</div>
            <div className="sub-feature">✓ Live Webinars with Experts</div>
            <div className="sub-feature">✓ Practice Exercises</div>
            <div className="sub-feature">✓ Progress Tracking</div>
          </div>
          <button className="subscribe-btn" onClick={() => navigate('/subscribe')}>
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;