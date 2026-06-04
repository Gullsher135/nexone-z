import React, { useState } from "react";

// ---STYLES---
import "../style/Industries.css";

// ---ICONS---
import IndustryIcon from "../assets/industry.png";
import ForwardIcon from "../assets/forward.png";
import BackwardIcon from "../assets/backward.png";
import HealthcreIcon from "../assets/healthcare.png";
import RideHailingIcon from "../assets/ride-hailing.png";
import LogisticsIcon from "../assets/logistics.png";
import EducationIcon from "../assets/education.png";
import ECommerce from "../assets/e-commerce.png";
import Accounting from "../assets/accounting.png";
import Social from "../assets/social.png";
import Travel from "../assets/travel.png";
import Fintech from "../assets/fintech.png";
import SaaS from "../assets/SaaS.png";
import RealEstate from "../assets/real-estate.png";
import resturant from "../assets/resturant.png";

// ---IMAGES---
import Bottom from '../assets/industries-bottom.png';

const Industries = () => {
  const [pageIndex, setPageIndex] = useState(0);

  const industryPages = [
    {
      cards: [
        { title: "Healthcare", image: HealthcreIcon, alt: "Healthcare" },
        { title: "Ride Hailing", image: RideHailingIcon, alt: "Ride Hailing" },
        { title: "Logistics", image: LogisticsIcon, alt: "Logistics" },
        { title: "Education", image: EducationIcon, alt: "Education" },
      ],
    },
    {
      cards: [
        { title: "E-commerce", image: ECommerce, alt: "E-commerce" },
        { title: "Accounting", image: Accounting, alt: "Accounting" },
        { title: "Social", image: Social, alt: "Social" },
        { title: "Travel Hospitality", image: Travel, alt: "Travel" },
      ],
    },
    {
      cards: [
        { title: "Fintech", image: Fintech, alt: "Fintech" },
        { title: "SaaS", image: SaaS, alt: "SaaS" },
        { title: "Real Estate", image: RealEstate, alt: "Real Estate" },
        { title: "Restaurants", image: resturant, alt: "Restaurants" },
      ],
    },
  ];

  const handleForward = () => {
    setPageIndex((current) => Math.min(current + 1, industryPages.length - 1));
  };

  const handleBackward = () => {
    setPageIndex((current) => Math.max(current - 1, 0));
  };

  const currentCards = industryPages[pageIndex].cards;

  return (
    <>
      <div className="industries-section">
        <div className="industries-content">
          <div className="text-container">
            <div className="left-side">
              <button className="heading-btn">
                <img src={IndustryIcon} alt="Industry" />
                Working Industry
              </button>

              <h1>Scalable Solutions For Every Industry</h1>
            </div>
            <div className="right-side">
              <p>
                We define our processes and work approach depending on the industry
                your <br /> business operates in to match your exact requirements.
                We serve a wide range <br /> of industries; here are a few of our
                industrial projects assessment.
              </p>
            </div>
          </div>

          <div className="industries-cards">
            <div className="button">
              <button
                className="backward-btn btn"
                onClick={handleBackward}
                disabled={pageIndex === 0}
              >
                <img src={BackwardIcon} alt="Back" />
              </button>
            </div>

            <div className="cards">
              {currentCards.map((card, index) => (
                <div className="card" key={index}>
                  <div className="image-container">
                    <img src={card.image} alt={card.alt} />
                  </div>
                  <h3>{card.title}</h3>
                </div>
              ))}

              <div className="button">
                <button
                  className="forward-btn btn"
                  onClick={handleForward}
                  disabled={pageIndex === industryPages.length - 1}
                >
                  <img src={ForwardIcon} alt="Forward" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="bottom-container">
          <img src={Bottom} alt="Industries Bottom" />
        </div>
      </div>
    </>
  );
};

export default Industries;
