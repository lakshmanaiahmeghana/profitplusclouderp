import React from "react";
import IntroductionContainer from "./IntroductionContainer";
import FunctionalModulesContainer from "./FunctionalModulesContainer";
import OurTechnologyContainer from "./OurTechnologyContainer";
import WhyUsContainer from "./WhyUsContainer";
import AboutUsContainer from "./AboutUsContainer";
import ContactUsContainer from "./ContactUsContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function MainContent() {
  return (
    <main className="mainStyle">
      <div className="container p-2 mt-5">
        <h1 className="IntroductionHeader">
          <span className="colorBlue">PROFITPLUS Cloud Enterprise Software – DSM</span>
        </h1>
      </div>
      <div className="container">
        <IntroductionContainer />
      </div>
      <div className="OurTechnologyContainer mt-3">
      <OurTechnologyContainer />
      </div>
      <div className="container">
        <div className="carousel-session-two mt-5">
            <a href="#contactUs" className="getStartedButton">GET STARTED WITH PROFITPLUS</a>
        </div>
        <FunctionalModulesContainer />
      </div>
      <div className="container">
      <WhyUsContainer />
      </div>
      <ContactUsContainer />
      <AboutUsContainer />
      
    </main>
  );
}

export default MainContent;
