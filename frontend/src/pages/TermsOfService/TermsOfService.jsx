import React from 'react';
import { useNavigate } from 'react-router-dom';
import './TermsOfService.css';

const TermsOfService = () => {
  const navigate = useNavigate();

  return (
    <div className="terms-container">
      
      <div className="terms-content">
        <h1>Terms and Conditions</h1>
        <p className="date-info">Effective Date: [15th April 2025]</p>
        
        <div className="terms-intro">
          <p>Welcome to Aitebaar – your trusted companion in financial literacy and smart money management. Please read these Terms and Conditions carefully before using our website, mobile application, or any of our services. By accessing or using Aitebaar, you agree to be bound by these terms.</p>
        </div>

        <div className="terms-section">
          <h2>1. Acceptance of Terms</h2>
          <p>By creating an account or using any of our services, you confirm that you are at least 18 years old and agree to comply with and be legally bound by these Terms and Conditions.</p>
        </div>

        <div className="terms-section">
          <h2>2. Services Offered</h2>
          <p>Aitebaar provides the following financial services and tools:</p>
          <ul>
            <li>Wallet Feature: Secure storage and basic transaction history tracking. This does not act as a bank or payment gateway.</li>
            <li>Credit Score System: An internal scoring model to help users assess loan eligibility.</li>
            <li>Forex Trading Access: Educational resources and simulated trading environments. We do not facilitate real trading or act as brokers.</li>
            <li>Financial Literacy Videos: Expert-led videos on personal finance, saving, investing, budgeting, and more.</li>
            <li>Expense & Budget Tracker: Tools to monitor your income, spending habits, and financial goals.</li>
            <li>Premium Package: Full access to all features, resources, and tools.</li>
            <li>Customized Package: Tailored tools and services based on individual financial goals and needs.</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>3. User Responsibilities</h2>
          <ul>
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You must ensure that all information provided is accurate and up-to-date.</li>
            <li>You may not use Aitebaar for unlawful purposes or to commit fraud.</li>
          </ul>
        </div>

        <div className="terms-section">
        <div className="terms-section">
          <h2>4. Disclaimer of Financial Advice</h2>
          <p>Aitebaar provides users with access to expert financial advice and investment guidance, helping them make informed decisions about where, how, and when to invest their money.</p>
          
          <div className="subsection">
            <h3>4.1. Nature of Financial Advice</h3>
            <ul>
              <li>Our platform offers personalized investment insights, tips, and recommendations based on your financial profile, goals, and risk appetite.</li>
              <li>Advice may cover areas such as mutual funds, stocks, savings instruments, real estate, forex, and other asset classes.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>4.2. Source of Expertise</h3>
            <ul>
              <li>All advice is curated or delivered by qualified financial experts and professionals with knowledge of local and international financial markets.</li>
              <li>In certain cases, AI-generated recommendations may supplement expert opinions, but final advice is always human-reviewed.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>4.3. No Guarantee of Returns</h3>
            <ul>
              <li>While we aim to provide reliable and strategic guidance, all investments carry risk.</li>
              <li>Aitebaar does not guarantee any profits, returns, or protection against losses resulting from following our advice.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>4.4. User Responsibility</h3>
            <ul>
              <li>You are solely responsible for your financial decisions and investment actions.</li>
              <li>We encourage users to seek independent advice before making high-risk investments or committing large sums of money.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>4.5. Not a Licensed Financial Institution</h3>
            <ul>
              <li>Aitebaar is a financial advisory platform, not a registered brokerage, bank, or investment company.</li>
              <li>We do not execute trades, hold user funds for investment, or provide any financial product ourselves.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>4.6. Risk Disclosure</h3>
            <ul>
              <li>All investment options come with varying degrees of risk. Market conditions, regulatory changes, and personal financial situations may affect performance.</li>
              <li>By using our services, you acknowledge and accept the risks associated with investment decisions.</li>
            </ul>
          </div>
        </div>
        <div className="terms-section">
          <h2>5. Third-Party Financial Advisors and Services</h2>
          <p>Aitebaar partners with licensed third-party financial advisors and consultants to provide specialized financial guidance and investment planning services to users who opt in.</p>

          <div className="subsection">
            <h3>5.1. Role of Third-Party Advisors</h3>
            <ul>
              <li>These advisors are independent professionals or firms who offer expert advice based on their own qualifications, licenses, and regulatory status.</li>
              <li>They may offer services including but not limited to wealth planning, tax advisory, portfolio diversification, retirement planning, and investment execution.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>5.2. Advisor Selection and User Consent</h3>
            <ul>
              <li>Users will be informed when a third-party advisor is involved and must explicitly consent before their data is shared or consultations begin.</li>
              <li>Users may select advisors from a list provided on the platform or be matched based on their financial profile and needs.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>5.3. Limited Liability of Aitebaar</h3>
            <ul>
              <li>Aitebaar acts only as a facilitator between users and third-party advisors.</li>
              <li>We are not responsible for the accuracy, suitability, or outcomes of the advice or services provided by third-party professionals.</li>
              <li>Any disputes, issues, or claims must be resolved directly between the user and the advisor.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>5.4. Regulatory Compliance</h3>
            <ul>
              <li>All third-party advisors operating through Aitebaar must provide proof of registration or licensing with relevant regulatory authorities (e.g., SECP, SBP, or international equivalents).</li>
              <li>We conduct reasonable due diligence before listing advisors but do not guarantee their performance or regulatory status on an ongoing basis.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>5.5. Fees and Payments</h3>
            <ul>
              <li>Some advisory services may involve additional costs which will be clearly communicated to the user before engagement.</li>
              <li>Payment terms (whether hourly, project-based, or performance-based) are determined by the advisor and the user and are outside Aitebaar's control unless specified otherwise.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>5.6. Data Sharing and Confidentiality</h3>
            <ul>
              <li>Your financial data will only be shared with an advisor after you provide informed consent.</li>
              <li>All third-party advisors are bound by confidentiality agreements and data protection regulations.</li>
            </ul>
          </div>
        </div>
        <div className="terms-section">
          <h2>6. Credit Score System</h2>
          <p>Aitebaar offers an AI-powered credit scoring system that analyzes user-provided financial and behavioral data to generate a predictive credit score. This score may be shared—with your explicit consent—with partnering financial institutions and banks for the purpose of assessing your eligibility for loans or other financial products.</p>

          <div className="subsection">
            <h3>6.1. How It Works</h3>
            <ul>
              <li>The system uses machine learning algorithms to evaluate multiple data points such as income trends, spending habits, savings, repayment history (if any), and other financial behaviors.</li>
              <li>Your credit score is dynamic and will update as your financial data changes over time.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>6.2. Use of Score by Banks</h3>
            <ul>
              <li>With your permission, your AI-generated credit score can be submitted to partnered banks to support your loan applications.</li>
              <li>Aitebaar does not guarantee loan approvals or decisions. Final approval lies solely with the bank or lender.</li>
              <li>We are not a lender and do not issue loans directly.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>6.3. Accuracy and Limitations</h3>
            <ul>
              <li>While we strive to maintain a high level of accuracy, AI-based scores are predictive in nature and may not always reflect traditional credit bureau scores.</li>
              <li>Your score should be used alongside other documentation when applying for a loan.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>6.4. User Consent and Data Sharing</h3>
            <ul>
              <li>Your financial data will only be shared with financial institutions if you give explicit, written consent at the time of application.</li>
              <li>You may revoke this consent at any time through your account settings.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>6.5. Regulatory Compliance</h3>
            <ul>
              <li>Aitebaar complies with all relevant data protection and financial services regulations in Pakistan.</li>
              <li>We are committed to working with financial institutions that are licensed and regulated by the State Bank of Pakistan or other authorized bodies.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>6.6. Liability Disclaimer</h3>
            <ul>
              <li>Aitebaar shall not be held liable for any loan rejections, delays, or disputes arising between users and banks.</li>
              <li>We do not accept responsibility for how your score is interpreted or acted upon by third parties.</li>
            </ul>
          </div>

          <div className="subsection">
            <h3>6.7. Data Accuracy</h3>
            <ul>
              <li>You are responsible for the accuracy of the financial information you provide.</li>
              <li>Any false, incomplete, or misleading information may negatively affect your credit score or result in legal action.</li>
            </ul>
          </div>
        </div>

        <div className="terms-section">
          <h2>7. Wallet and Budget Features</h2>
          <ul>
            <li>These features are designed for tracking purposes only.</li>
            <li>Aitebaar does not hold or transfer funds. We are not a bank or licensed financial institution.</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>8. Forex Trading Disclaimer</h2>
          <ul>
            <li>Our forex trading tools are educational and/or simulated environments.</li>
            <li>Aitebaar does not allow or facilitate real currency trades, and is not responsible for losses resulting from third-party trading platforms.</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>9. Premium and Custom Packages</h2>
          <ul>
            <li>Premium services require a subscription fee, which will be clearly communicated during sign-up.</li>
            <li>Custom packages are billed based on selected features and may vary from user to user.</li>
            <li>All payments are non-refundable unless otherwise stated.</li>
          </ul>
        </div>

        <div className="terms-section">
          <h2>10. Privacy and Data Protection</h2>
          <p>We respect your privacy. All data collected is stored securely and used only in accordance with our Privacy Policy. We do not sell or share your personal data with third parties without your consent.</p>
        </div>

        <div className="terms-section">
          <h2>11. Account Termination</h2>
          <p>Aitebaar reserves the right to suspend or terminate accounts that violate our Terms, engage in fraudulent behavior, or misuse our platform.</p>
        </div>

        <div className="terms-section">
          <h2>12. Limitation of Liability</h2>
          <p>Aitebaar is not liable for any direct, indirect, incidental, or consequential damages arising out of your use of the platform, including but not limited to loss of data, financial loss, or emotional distress.</p>
        </div>

        <div className="terms-section">
          <h2>13. Modifications to Terms</h2>
          <p>We may update these Terms from time to time. Continued use of Aitebaar after changes have been made constitutes your acceptance of the updated Terms.</p>
        </div>

        <div className="terms-section">
          <h2>14. Contact Us</h2>
          <p>For any questions regarding these Terms and Conditions, please contact us at:</p>
          <p className="contact-email">📧 support@aitebaar.com</p>
        </div>
        {/* Continue with other sections... */}

          {/* Continue with other sections... */}
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;