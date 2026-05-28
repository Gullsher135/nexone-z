import React from "react";

// ---NAVBAR---
import Navbar from "../Components/Navbar";

// ---IMAGES---
import HeroImage from "../assets/hero-img.png";

// ---STYLE---
import "../style/hero.css";

const HeroSection = () => {
  return (
    <div>
      <div className="hero-section">
        {/* ---NAVBAR */}
        <div className="navbar-container">
          <Navbar />
        </div>

        <div className="hero-content">
          <div className="text-container">
            <h1>Software Design and Development Company</h1>
            <p>
              NexoneZ is a multidisciplinary design and development agency
              working with individual startups and enterprises worldwide.
            </p>
            <div className="buttons-container">
              <button className="filled-btn" style={{fontSize: "20px"}}>Get a Quote</button>
              <button className="outlined-btn" style={{fontSize: "20px"}}>Our Work</button>
            </div>
          </div>


          <div className="image-container">
            <img src={HeroImage} alt="Hero" />
          </div>

        </div>
      </div>
    </div>
  );
};

export default HeroSection;
