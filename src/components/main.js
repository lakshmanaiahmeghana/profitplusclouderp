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
      <IntroductionContainer />
      <OurTechnologyContainer />
      <FunctionalModulesContainer />
      <WhyUsContainer />
      <ContactUsContainer />
      <AboutUsContainer />
    </main>
  );
}

export default MainContent;
