import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 

function AboutUsContainer() {
  return (
    <div className="container p-3 p-lg-5" id="aboutUs">
        <h2 className="AboutUsHeader text-center pt-3 pt-lg-0">About Us</h2>
        <p className="AboutUsSubHeader text-center">PROFITPLUS — a solution designed by <a href="https://www.bluechipsolutions.in/" id="bluechipUrl">Bluechip Solutions.</a></p>
        <div class="row">
            <div class="col-12 col-lg-6 p-0 p-lg-5">
                <div class="row">
                    <div class="col-12 col-lg-6"><div class="AboutUsCard">
                    <img class="AboutUsImg" src="/images/Image15.png" /><p class="AboutUsImgHeader">
                        26+ Years</p></div></div>
                    <div class="col-12 col-lg-6"><div class="AboutUsCard">
                    <img class="AboutUsImg" src="/images/Image16.png" /><p class="AboutUsImgHeader">
                        200+ Corporate</p></div></div>
                </div>
                <div class="row">
                    <div class="col-12 col-lg-6"><div class="AboutUsCard">
                    <img class="AboutUsImg" src="/images/Image17.png" /><p class="AboutUsImgHeader">
                        10k+ SMES</p></div></div>
                    <div class="col-12 col-lg-6"><div class="AboutUsCard">
                    <img class="AboutUsImg" src="/images/Image18.png" /><p class="AboutUsImgHeader">
                        50+ Partner</p></div></div>
                </div>

                <div class="py-5">
                <div id="globalCarousel" className="carousel slide " data-bs-ride="carousel">
                    <p class="globalCarouselHeader text-center">Our Customer Around The World</p>
                    <div className="carousel-inner">
                        {/* Slide 1 */}
                        <div className="carousel-item active">
                            <div className="row">
                                <div className="col-4">
                                    <img src="/images/klrf.png" className="d-block w-100" alt="Bangalore, India" />
                                </div>
                                <div className="col-4">
                                    <img src="/images/knl.png" className="d-block w-100" alt="Dubai, UAE" />
                                </div>
                                <div className="col-4">
                                    <img src="/images/reva.png" className="d-block w-100" alt="Africa" />
                                </div>
                            </div>
                        </div>

                        {/* Slide 2 */}
                        <div className="carousel-item">
                            <div className="row">
                                <div className="col-4">
                                    <img src="/images/vruksha.png" className="d-block w-100" alt="New York, USA" />
                                </div>
                                <div className="col-4">
                                    <img src="/images/al.png" className="d-block w-100" alt="London, UK" />
                                </div>
                                <div className="col-4">
                                    <img src="/images/pass.png" className="d-block w-100" alt="Tokyo, Japan" />
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <a className="carousel-control-prev" href="#globalCarousel" role="button" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#globalCarousel" role="button" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </a> */}
                </div>                   
                </div>

            </div>
            <div class="col-12 col-lg-6 p-0 p-lg-5">
                <h2 className="WhatWeDoHeader pt-3">
                    What We Do?
                </h2>
                <p className="WhatWeDoContent">
                    At Bluechip Solutions, we specialize in delivering innovative solutions through our pioneering NO-CODE Platform, guided by three core pillars: Technology Innovation, where we enhance our technology to deliver cutting-edge, reliable solutions; Implementation Methodology, focusing on empowering customers with guidance and support; and Our Attitude, emphasizing a "customer-should-win" philosophy to prioritize customer success and satisfaction.
                </p>
                <h2 className="WhatWeDoHeader mt-4">
                    Why Choose <span class="blue">Bluechip Solutions</span> For Your Software Needs.
                </h2>
                <p className="WhatWeDoContent">
                    At Bluechip Solutions, we provide Scalable Solutions designed to grow with your business, offering long-term protection and adaptability as your needs evolve.<br></br> With our Industry Expertise, we understand the unique challenges of various domains and tailor solutions to meet specific requirements. Our Seamless User Experience ensures responsive design across all devices, delivering a smooth experience on desktops, tablets, and mobiles. We prioritize quality with Rigorous Testing, conducting thorough checks to guarantee optimal performance before launch. Additionally, we offer Comprehensive Support to maintain your software system at its best and ensure Unmatched Reliability, building fail-proof solutions that keep your business operations consistent and dependable.</p>
            </div>
        </div>

    </div>
  );
}

export default AboutUsContainer;
