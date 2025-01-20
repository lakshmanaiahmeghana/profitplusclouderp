import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

function WhyUsContainer() {
  const cards = [
    { title: "The Fit", description: "Built on AUVIT BPA, ensures NO Gap Implementation, a 100% fitting solution." },
    { title: "The Success Factor", description: "Improved the industry-average implementation success rate from 46% to 100%, ensuring the safety of your investment." },
    { title: "The Ownership", description: "Leasing our BPA platform to customize the software further, providing complete ownership and reducing dependency on the vendor." },
    { title: "The Cost", description: "This ERP brings down the implementation/customization cost drastically." },
    { title: "The Future", description: "Post go-live, any future requirement is taken care of, as this ERP grows with needs." },
    { title: "The Software to Drive an Enterprise", description: "Built to drive the entire business processes, this ERP is more than just entry screens & reports." },
    { title: "CLOUD Advantage", description: "It incorporates the latest security technologies to ensure secured CLOUD access and avoid capital expenditure into affordable monthly operating costs." },
    { title: "The Complete Control", description: "On CLOUD ERP allows access from anywhere, anytime, keeping business at fingertips." },
    { title: "The Compatibility", description: "Providing multiple options to choose from various OS, DB & Application servers." },
    { title: "The Up-to-Date ERP", description: "Incorporating all new technologies like Mobile apps, GPS, Geo tagging, 128-bit SSL security, Multi-tenant architecture." },
  ];

  // Divide cards into chunks of 3
  const chunkedCards = [];
  for (let i = 0; i < cards.length; i += 3) {
    chunkedCards.push(cards.slice(i, i + 3));
  }

  return (
    <div className="WhyUs p-0 p-lg-5" id="whyUs">
      <h2 className="WhyUsHeader text-center pt-5 pt-lg-0">Why PROFILTPLUS Cloud ERP?</h2>
      <div id="whyUsCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          {chunkedCards.map((chunk, index) => (
            <div className={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
              <div className="row">
                {chunk.map((card, i) => (
                  <div className="col-12 col-md-4" key={i}>
                    <div className="WhyUsCard">
                      <h3>{card.title}</h3>
                      <p class="pt-2">{card.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#whyUsCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#whyUsCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default WhyUsContainer;
