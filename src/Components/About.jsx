import React from "react";

// ---IMAGES---
import AboutImage from "../assets/about-image.png";
import Error from "../assets/error.png";

// ---STYLE---
import '../style/about.css'

const About = () => {
  return (
    <div className="about-section">
      <div className="about-text">
        <button className="heading-btn"><img src={Error} alt="Error" /> About Us</button>
        <h1>Where Vission Turns Into Digital Reality</h1>
        <p>
          At NexoneZ, we transform your bold ideas into powerful digital
          products. From concept to code, we build scalable, user-focused
          software that drives real results.
        </p>
        <p>
          With a global team of developers, designers, and strategists, we work
          remotely — but we’re always connected to your About. We turn your
          goals into digital products that matter.
        </p>
      </div>

      <div className="about-image">
        <img src={AboutImage} alt="About" />
      </div>
    </div>
  );
};

export default About;
