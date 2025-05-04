import React, { useState, useEffect } from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('user');
    setUser(null);
    navigate('/');
  };

  return (
    <div className="home-container">
      <div className="content-wrapper">
        <header className="header">
          <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li onClick={() => navigate('/education')}><a style={{cursor: 'pointer'}}>Education</a></li>
              
              <li onClick={() => navigate('/contact')}><a style={{cursor: 'pointer'}}>Contact</a></li>
              <li onClick={() => navigate('/about')}><a href="#">About Us</a></li>
              <li onClick={() => navigate('/wallet')}><a style={{cursor: 'pointer'}}>My Wallet</a></li>
            </ul>
          </nav>
          <div className="logo-center">
            <img src="/AitebaarLogo.png" alt="Aitebaar Logo" className="logo" />
          </div>
          <div className="header-right">
            {user ? (
              <div className="user-info">
                <span className="user-name">{user.name}</span>
                <button className="logout-btn" onClick={handleLogout}>Logout</button>
              </div>
            ) : (
              <button className="login-btn" onClick={() => navigate('/login')}>Login/Register</button>
            )}
          </div>
        </header>
      

{/* Hero Section */}
        <div className="welcome-container">
  <div className="welcome-content">
    <h1 className="welcome-text">
      <span className="welcome-highlight">Welcome to</span>
      <span className="brand-name">Aitebaar</span>
    </h1>
    <p className="tagline">Your trusted financial literacy platform!</p>
    <p className="welcome-description">
      Empowering Pakistanis with financial knowledge, smart credit solutions, and innovative investment opportunities.
    </p>
    <div className="cta-buttons">
    {user ? (
    <button className="primary-cta" onClick={() => navigate('/wallet')}>My Wallet</button>
  ) : (
    <>
      <button className="primary-cta" onClick={() => navigate('/login')}>Get Started</button>
      <button className="secondary-cta">Learn More</button>
    </>
  )}
    </div>
  </div>
  <div className="welcome-image">
    <img src="/financeHero.png" alt="Financial Growth" className="hero-img" />
  </div>
</div>

        {/* Services Section */}
        <section className="services-section">
          <div className="services-header">
            <h2 className="services-title">
              <span>Educate.</span>
              <span>Invest.</span>
              <span>Thrive.</span>
            </h2>
            <p className="services-subtitle">
              Achieve financial independence with personalized guidance, our investment gateway & innovative credit scoring system.
            </p>
            <button className="join-button">Join</button>
          </div>

          <div className="services-grid">
            <div className="service-card">
              <h3>Budget Management</h3>
              <p>Keep track of your finances with our expense tracker and budget maker</p>
            </div>
            <div className="service-card">
              <h3>Financial Management</h3>
              <p>Expert Financial Education along with our SECP approved investment gateway</p>
            </div>
            <div className="service-card">
              <h3>Credit Scoring</h3>
              <p>State of the Art AI Credit scoring system for the unbanked individuals</p>
            </div>
          </div>
        </section>
        {/* Add this after your services-section */}
<section className="mission-section">
  <h1 className="mission-title">Empowering Financial Independence for All</h1>
  
  <div className="mission-content">
    <div className="mission-column">
      <h2>Your Path to Freedom</h2>
      <p>At Aitebaar, we empower individuals to achieve financial independence through innovative AI technology and personalized financial education, ensuring everyone can thrive in their financial journeys.</p>
    </div>
    
    <div className="mission-column">
      <h2>Transforming Financial Futures</h2>
      <p>Join Aitebaar to access unique credit scoring, expert guidance, and a user-friendly investment platform designed to make financial growth accessible, helping you educate, invest, and thrive in your financial journey.</p>
    </div>
  </div>
  
  <div className="mission-image">
    <img src="/teacher_whiteboard.png" alt="Financial Education Session" loading="lazy"/>
  </div>
</section>
{/* Add after mission-section */}
<section className="features-section">
  <h1 className="features-title">Empower Your Finances</h1>
  <p className="features-subtitle">Join Aitebar to achieve financial independence with our personalised budget maker and expense tracker</p>

  <div className="features-container">
    <div className="features-image">
      <img src="/expenseTracker.png" alt="Expense Tracker Interface"/>
    </div>
    <div className="features-content">
      <div className="feature-item">
        <h3>User-Friendly Interface</h3>
        <p>Experience seamless access and comprehensive support for your financial growth journey.</p>
      </div>
      <div className="features-item">
        <h3>State-of-the-Art Expense Tracker</h3>
        <p>Upload your statements from your microfinance or banking services to get a comprehensive report on where and when you're spending your money</p>
      </div>
      <div className="features-item">
        <h3>Revolutionary Budget Maker</h3>
        <p>Manage your finances with Aitebar by getting a comprehensive budget with your expenses covered at the click of a button</p>
      </div>
    
    </div>
  </div>
</section>
<section className="credit-section">
  <h1 className="credit-title">AI Credit Scoring</h1>
  <p className="credit-description">
    You didn't come this far to stop. Millions of Pakistanis either have problems getting loans or are trapped by high interest rate loans, Aitebaar is here to change that.
  </p>
  <button className="coming-soon-btn">Coming soon</button>
  <div className="credit-meter">
    
  <svg className="speedometer" viewBox="0 0 200 150">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
      <stop offset="0%" style={{stopColor: "#FF4D4D"}} />
      <stop offset="25%" style={{stopColor: "#FFA500"}} />
      <stop offset="50%" style={{stopColor: "#FFFF00"}} />
      <stop offset="75%" style={{stopColor: "#90EE90"}} />
      <stop offset="100%" style={{stopColor: "#32CD32"}} />
    </linearGradient>
  </defs>
  <text x="100" y="40" className="score-text">690-750</text>
  <path className="speedometer-track" d="M20,100 A110,110 0 0,1 180,100" />
  <path className="speedometer-dial" d="M20,100 A110,110 0 0,1 180,100" />
  <text x="30" y="140" className="speedometer-text">POOR</text>
  <text x="140" y="140" className="speedometer-text">GOOD</text>
  <line className="speedometer-needle" x1="100" y1="100" x2="100" y2="30" />
</svg>
  </div>
</section>
{/* Add after credit-section */}
{/* Single trading section after credit-section */}
<section className="trading-section">
  <h1 className="trading-title">Predict the Future</h1>
  <p className="trading-description">
    Make informed investment decisions with our real-time market analysis and trading insights
  </p>
  <div className="trading-chart-container">
    <div className="chart-wrapper">
      <iframe
        title="Trading View Chart"
        src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_b3dd6&symbol=FX%3AEURUSD&interval=D&hidesidetoolbar=0&hidetrading=1&theme=dark&save_image=0&toolbarbg=f1f3f6&studies=[]&hideideas=1&widgetType=chart&referral_id=your-id"
        style={{
          width: "100%",
          height: "500px",
          border: "none"
        }}
      />
    </div>
  </div>
</section>
 {/* Add after trading-section */}
<section className="feedback-section">
  <h1 className="feedback-title">What Our Users Say</h1>
  <p className="feedback-subtitle">Join thousands of satisfied users who have transformed their financial future with Aitebaar</p>
  
  <div className="feedback-container">
    <div className="feedback-card">
      <div className="user-info">
      <div className="user-avatar avatar-sa">SA</div>
        <div className="user-details">
          <h3>Sarah Ahmed</h3>
          <p className="user-location">Lahore, Pakistan</p>
        </div>
      </div>
      <p className="feedback-text">"Aitebaar helped me understand my finances better. Their budget management tools are incredibly user-friendly!"</p>
      <div className="rating">★★★★★</div>
    </div>

    <div className="feedback-card">
      <div className="user-info">
      <div className="user-avatar avatar-mi">MI</div>
        <div className="user-details">
          <h3>Muhammad Imran</h3>
          <p className="user-location">Karachi, Pakistan</p>
        </div>
      </div>
      <p className="feedback-text">"The financial education resources are excellent. I've learned so much about managing my money effectively."</p>
      <div className="rating">★★★★★</div>
    </div>

    <div className="feedback-card">
      <div className="user-info">
      <div className="user-avatar avatar-fk">FK</div>
        <div className="user-details">
          <h3>Fatima Khan</h3>
          <p className="user-location">Islamabad, Pakistan</p>
        </div>
      </div>
      <p className="feedback-text">"Their credit scoring system is revolutionary! Finally, a platform that understands the needs of unbanked individuals."</p>
      <div className="rating">★★★★★</div>
    </div>
  </div>
</section>
{/* Add after feedback-section */}
<footer className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <img src="/AitebaarLogo.png" alt="Aitebaar Logo" className="footer-logo" />
      <p className="footer-description">
        Empowering financial independence through innovative technology and education.
      </p>
      <div className="social-links">
        <a href="#" className="social-link">Facebook</a>
        <a href="#" className="social-link">Twitter</a>
        <a href="#" className="social-link">LinkedIn</a>
        <a href="#" className="social-link">Instagram</a>
      </div>
    </div>

    <div className="footer-section">
      <h3>Quick Links</h3>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About Us</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Services</h3>
      <ul>
        <li><a href="#">Financial Education</a></li>
        <li><a href="#">Credit Scoring</a></li>
        <li><a href="#">Investment Gateway</a></li>
        <li><a href="#">Budget Management</a></li>
      </ul>
    </div>

    <div className="footer-section">
      <h3>Contact Us</h3>
      <ul className="contact-info">
        <li>Email: info@aitebaar.com</li>
        <li>Phone: +92 300 1234567</li>
        <li>Address: Islamabad, Pakistan</li>
      </ul>
    </div>
  </div>
  
  <div className="footer-bottom">
    <p>&copy; 2025 Aitebaar. All rights reserved.</p>
    <div className="legal-links">
    <a onClick={() => navigate('/privacy-policy')} style={{cursor: 'pointer'}}>Privacy Policy</a>
    <a onClick={() => navigate('/terms-of-service')} style={{cursor: 'pointer'}}>Terms of Service</a>
     
    </div>
  </div>
</footer>
</div>
    </div>
  );
};

export default Home;