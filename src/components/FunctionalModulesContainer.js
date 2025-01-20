import React from "react";
import "font-awesome/css/font-awesome.min.css";

function FunctionalModulesContainer() {
  return (
    <div id="sessionTwoCarousel" className="carousel slide pt-3" data-bs-ride="carousel" >
      {/* Carousel Indicators */}
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="3"
          aria-label="Slide 4"
        ></button>
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="4"
          aria-label="Slide 5"
        ></button>
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="5"
          aria-label="Slide 6"
        ></button>
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="6"
          aria-label="Slide 7"
        ></button>
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="7"
          aria-label="Slide 8"
        ></button>
        <button
          type="button"
          data-bs-target="#sessionTwoCarousel"
          data-bs-slide-to="8"
          aria-label="Slide 9"
        ></button>
      </div>

      {/* Carousel Inner */}
      <div className="carousel-inner">
        {/* <h1 className="sessionTwoCarouselHeader">DSM: Functional Modules</h1> */}
        <div className="carousel-item active">
          <img
            src="/images/Image1.png"
            alt="Slide 1 Image"
            className="d-block functionalModulesImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Image2.png"
            alt="Slide 2 Image"
            className="d-block functionalModulesImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Image3.png"
            alt="Slide 3 Image"
            className="d-block functionalModulesImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Image4.png"
            alt="Slide 4 Image"
            className="d-block functionalModulesImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Image5.png"
            alt="Slide 5 Image"
            className="d-block functionalModulesImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Image6.png"
            alt="Slide 6 Image"
            className="d-block functionalModulesImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Image7.png"
            alt="Slide 7 Image"
            className="d-block functionalModulesImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Image8.png"
            alt="Slide 8 Image"
            className="d-block functionalModulesImg"
          />
        </div>
        <div className="carousel-item">
          <img
            src="/images/Image9.png"
            alt="Slide 9 Image"
            className="d-block functionalModulesImg"
          />
        </div>
      </div>

      {/* Carousel Controls */}
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#sessionTwoCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#sessionTwoCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default FunctionalModulesContainer;
