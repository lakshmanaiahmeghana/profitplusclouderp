import React, { useState } from "react";
import "font-awesome/css/font-awesome.min.css";

function ContactUsContainer() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required.";
    }
    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company Name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }
    return newErrors;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    try {
      const response = await fetch("https://your-api-endpoint.com/contact-us", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormSubmitted(true);
        setFormData({
          fullName: "",
          companyName: "",
          email: "",
          phone: "",
        });
      } else {
        alert("An error occurred while submitting the form.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while submitting the form.");
    }
  };

  return (
    <div className="ContactUs py-4" id="contactUs">
      <div className="container">
        <h2 className="ContactUsHeader pt-3">Contact Us</h2>
        <h5 className="ContactUsSubHeader">Access our Solution & Experience the Difference</h5>
        <form className="mx-5 my-2 px-lg-4" onSubmit={handleSubmit}>
          {formSubmitted && (
            <div className="alert alert-success" role="alert">
              Your message has been sent successfully!
            </div>
          )}
          <div className="row px-lg-5">
            <div className="col-12 col-lg-6 form-group pt-4">
              <label htmlFor="fullName">
                Full Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                placeholder="Full name"
              />
              {errors.fullName && <div className="error-text">{errors.fullName}</div>}
            </div>
            <div className="col-12 col-lg-6 form-group pt-4">
              <label htmlFor="companyName">
                Company Name <span className="required">*</span>
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                value={formData.companyName}
                onChange={handleInputChange}
                placeholder="Company Name"
              />
              {errors.companyName && <div className="error-text">{errors.companyName}</div>}
            </div>
          </div>
          <div className="row px-lg-5">
            <div className="col-12 col-lg-6 form-group pt-4">
              <label htmlFor="email">
                Work Email <span className="required">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Work Email"
              />
              {errors.email && <div className="error-text">{errors.email}</div>}
            </div>
            <div className="col-12 col-lg-6 form-group pt-4">
              <label htmlFor="phone">Phone Number</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Phone"
              />
            </div>
          </div>
          <div className="text-lg-end text-center mt-4 px-5">
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
