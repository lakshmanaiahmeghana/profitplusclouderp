import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 

function OurTechnologyContainer() {
  return (
    <div className="container" id="ourTechnology">
      <h1 className="ourTechnologyHeader text-center pt-5">OUR TECHNOLOGY: AUVIT BPA</h1>
      <h5 className="ourTechnologySubHeader text-center mt-3">The next generation development platform is the brainchild of over three decades of experience, research, and development. AUVIT BPA makes it all possible which was considered impossible by the software development community so far.</h5>
      <div className="row p-3 mt-5">
        <div className="col-12 col-lg-6 m-auto">
          <img class="technologyImg" src="/images/Image10.png" />
        </div>
        <div className="col-12 col-lg-6">
          <div className="row">
          <div className="col-12 col-lg-6 mt-2"><div class="ourTechnologyCarouselCard">
            <img class="" src="/images/Image11.png"/>
            <h3 className="pt-2">Time Saving</h3>
            <p>Create applications for any business enterprise of any size, in record time.</p>
          </div></div>
          <div className="col-12 col-lg-6 mt-2"><div class="ourTechnologyCarouselCard">
            <img class="" src="/images/Image12.png"/>
            <h3 className="pt-2">Cost Effeciency</h3>
            <p>Save more than 90% of the development time ensuring a great saving on manpower cost.</p>
          </div></div>
          <div className="col-12 col-lg-6 mt-2"><div class="ourTechnologyCarouselCard">
            <img class="" src="/images/Image13.png"/>
            <h3 className="pt-2">Flexiblity</h3>
            <p>Provides option to choose the OS, DB & AS for running the software.</p>
          </div></div>
          <div className="col-12 col-lg-6 mt-2"><div class="ourTechnologyCarouselCard">
            <img class="" src="/images/Image14.png"/>
            <h3 className="pt-2">Futuristic</h3>
            <p>Build applications which are fast, robust, and versatile to grow with your business needs.</p>
          </div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTechnologyContainer;
