import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PrivacyPolicy.css';


const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <div className="policy-container">
      
      <div className="policy-content">
        <div className="policy-section privacy">
          <h1>📜 Privacy Policy</h1>
          <p className="date-info">
            Effective Date: [15th April 2025]<br />
            Last Updated: [1st May 2025 ]
          </p>
          <p className="intro">At Aitebaar, we are committed to protecting your privacy and ensuring transparency in how we collect, use, and store your personal information.</p>
          
          <div className="subsection">
            <h2>1. What We Collect</h2>
            <p>We may collect:</p>
            <ul>
              <li>Personal information (name, email, phone number, etc.)</li>
              <li>Financial data (income, expenses, wallet inputs)</li>
              <li>Behavioral and usage data (activity logs, clicks, watch history)</li>
              <li>Identity verification data (for credit score and loan application)</li>
            </ul>
          </div>

          <div className="subsection">
            <h2>2. How We Use Your Data</h2>
            <ul>
              <li>Provide personalized financial advice</li>
              <li>Generate AI-based credit scores</li>
              <li>Match you with suitable financial products and services</li>
              <li>Improve your user experience</li>
              <li>Share with financial institutions (only with your consent)</li>
            </ul>
          </div>

          <div className="subsection">
            <h2>3. Sharing of Data</h2>
            <p>We do not sell your personal data.</p>
            <p>Your data may only be shared with:</p>
            <ul>
              <li>Licensed third-party financial advisors (with consent)</li>
              <li>Partner banks or financial institutions (with consent)</li>
              <li>Service providers (e.g., cloud storage or analytics)</li>
            </ul>
          </div>

          <div className="subsection">
            <h2>4. Data Security</h2>
            <p>We use strong encryption, secure servers, and access controls to protect your data.</p>
          </div>

          <div className="subsection">
            <h2>5. Your Rights</h2>
            <p>You can:</p>
            <ul>
              <li>Access or update your information at any time</li>
              <li>Withdraw consent for data sharing</li>
              <li>Request deletion of your account and associated data</li>
            </ul>
          </div>

          <div className="contact-info">
            <p>📩 Questions? Email: privacy@aitebaar.com</p>
          </div>
        </div>

        <div className="policy-section return">
          <h1>🔁 Return Policy</h1>
          <p>Since Aitebaar is a digital platform offering financial tools and services, there are no physical products involved. Therefore, traditional returns do not apply.</p>
          <p>However, for custom packages or consulting services, users may request a review of service dissatisfaction within 7 days of service delivery. In such cases:</p>
          <ul>
            <li>We will assess the issue and offer a resolution.</li>
            <li>If applicable, a credit may be issued to your account for future use.</li>
          </ul>
        </div>

        <div className="policy-section shipping">
          <h1>🚚 Shipping/Service Policy</h1>
          <div className="subsection">
            <h2>1. Digital Services Delivery</h2>
            <p>All services offered by Aitebaar—such as the budget tracker, credit score system, investment advice, and videos—are delivered digitally through our platform and/or email.</p>
            <ul>
              <li>Wallet, credit score, and tracking tools are available immediately upon registration or purchase.</li>
              <li>Premium and Custom Packages are activated within 24 hours of payment.</li>
              <li>Financial advisor sessions are scheduled as per mutual availability.</li>
            </ul>
          </div>
          <div className="subsection">
            <h2>2. No Physical Shipping</h2>
            <p>We do not ship any physical products. All services are provided digitally. No shipping address is required unless it pertains to identity verification for financial compliance.</p>
          </div>
        </div>

        <div className="policy-section refund">
          <h1>💸 Refund Policy</h1>
          <p>We aim to provide full value with every Aitebaar service. However, due to the digital and customized nature of our services, we follow the policies below:</p>
          
          <div className="subsection">
            <h2>1. Non-Refundable Items</h2>
            <ul>
              <li>Subscription fees (monthly/yearly)</li>
              <li>Custom package fees once work has started</li>
              <li>Advisor session fees (if session was attended or missed without notice)</li>
              <li>AI credit score reports (once generated)</li>
            </ul>
          </div>

          <div className="subsection">
            <h2>2. Refundable Situations</h2>
            <ul>
              <li>Technical failure preventing service access within 48 hours</li>
              <li>Duplicate payments</li>
              <li>Inaccessibility of purchased content (e.g., broken video links, inactive tools)</li>
            </ul>
          </div>

          <div className="subsection">
            <h2>3. How to Request a Refund</h2>
            <p>To request a refund, email support@aitebaar.com with:</p>
            <ul>
              <li>Your full name and registered email</li>
              <li>Date and type of transaction</li>
              <li>Reason for refund request</li>
            </ul>
            <p>Refunds (if approved) are processed within 7 business days to the original payment method.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;