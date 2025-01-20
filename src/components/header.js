import React from "react";
import '../App.css';  // Import your CSS file

function Header() {
  return (
    <header className="header">
      {/* Logo */}
      <div className="logoStyle">
        <img src="/images/logo.png" alt="Logo" className="logoImageStyle" />
      </div>

      {/* Navigation Links */}
      <nav className="navStyle">
        <a href="#sessionTwoCarousel" className="linkStyle">Product-DSM</a>
        <a href="#ourTechnology" className="linkStyle">Technology</a>
        <a href="#whyUs" className="linkStyle">Why Us?</a>
        <a href="#aboutUs" className="linkStyle">Company</a>
      </nav>

      {/* Talk to Us Button */}
      <div className="buttonContainer">
        <a href="#contactUs" className="buttonStyle">CONSULT US</a>
      </div>
    </header>
  );
}

export default Header;
