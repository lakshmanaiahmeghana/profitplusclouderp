import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        
        {/* Footer Links */}
        <div className="footer-links row">
          <div className="col-md-4">
            <h5>Quick link</h5>
            <ul className="footer-list">
              <li>
                <a href="#sessionTwoCarousel" className="footer-link">Product-DSM</a>
              </li>
              <li>
                <a href="#ourTechnology" className="footer-link">Technology</a>
              </li>
              <li>
                <a href="#whyUs" className="footer-link">Why Us?</a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Products</h5>
            <ul className="footer-list">
              <li>
                <a href="https://www.bluechipsolutions.in/discretemanufacturing.html" className="footer-link">
                Discrete Manufacturing
                </a>
              </li>
              <li>
                <a href="https://www.bluechipsolutions.in/profiteazyaccounting.html" className="footer-link">
                ProfitEazy Accounting
                </a>
              </li>
              <li>
                <a href="https://www.bluechipsolutions.in/profiteazymf.html" className="footer-link">
                ProfitEazy Microfinance
                </a>
              </li>
              <li>
                <a href="https://www.bluechipsolutions.in/profiteazywsm.html" className="footer-link">
                ProfitEazy Workshop
                </a>
              </li>
              <li>
                <a href="https://www.bluechipsolutions.in/profiteazysp.html" className="footer-link">
                Supplier Portal
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Contact info</h5>
            <ul className="footer-list">
              <li>Bluechip Solutions PPlus Pvt. Ltd. Kumara Krupa, 844 , 2nd Floor, Nehru Road, BEML 3rd Stage, Rajarajeshwari Nagar, Bengaluru 560 098</li>
              <li>+91 80 2860 4624</li>
              <li>+91 80 2860 4452</li>
              <li>sales@bluechipsolutions.in</li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom d-flex justify-content-between align-items-center flex-column flex-md-row">
          <p className="footer-copyright">
          Copyright © 2024 Bluechip Solutions PPlus, All Rights Reserved.
          </p>
          <div className="footer-social">
            <a href="https://www.linkedin.com/company/bluechipsolutionsindia/" className="footer-social-link">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="https://www.facebook.com/bluechipsolutionsindia/" className="footer-social-link">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
          <p className="footer-legal">
            <a href="https://www.bluechipsolutions.in/termsconditions.html" className="footer-legal-link">
              Terms & Conditions
            </a>
            <a href="https://www.bluechipsolutions.in/privacypolicy.html" className="footer-legal-link">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
