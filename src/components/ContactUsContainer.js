import React from "react";
import 'font-awesome/css/font-awesome.min.css'; 

function ContactUsContainer() {
  return (
      <div class="ContactUs py-4" id="contactUs">
      <div class="container">
      <h2 className="ContactUsHeader pt-3">
        Contact Us 
      </h2>
      <h5 className="ContactUsSubHeader">Access our Solution & Experience the Difference</h5>
      <form class="mx-5 my-2 px-4">
        <div className="row px-5">
          <div className="col-12 col-lg-6 form-group pt-4">
            <label htmlFor="fullName">
              Full Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              placeholder="Full name"
              required
            />
          </div>
          <div className="col-12 col-lg-6 form-group pt-4">
            <label htmlFor="companyName">
              Company Name <span className="required">*</span>
            </label>
            <input
              type="text"
              id="companyName"
              placeholder="Company Name"
              required
            />
          </div>
        </div>
        <div className="row px-5">
          <div className="col-12 col-lg-6 form-group pt-4">
            <label htmlFor="email">
              Work Email <span className="required">*</span>
            </label>
            <input
              type="email"
              id="email"
              placeholder="Work Email"
              required
            />
          </div>
          <div className="col-12 col-lg-6 form-group pt-4">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              placeholder="Phone"
            />
          </div>
        </div>
        <div className="text-end mt-4 px-5">
          <button type="submit" className="submit-btn">
            Submit
          </button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ContactUsContainer;
