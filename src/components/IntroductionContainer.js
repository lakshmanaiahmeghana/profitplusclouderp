import React from "react";
import "font-awesome/css/font-awesome.min.css";

function IntroductionContainer() {
  return (
      <div>
          <div className="IntroductioncarouselPara">
            <p class="text-center">
              A cloud-based, fully integrated enterprise solution that delivers powerful functionality through seamless interaction between modules. It understands your business and works for your success. It helps you make the right decision at the right time with greater control over your business in a cost-effective way, regardless of wherever you are.
            </p>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-12 m-auto">
                <img
                  src="/images/Slide2.png"
                  alt="Slide 1 Image"
                  className="img-fluid IntroductioncarouselImg"
                />
              </div>
            </div>
        </div>
    </div>
  );
}

export default IntroductionContainer;
