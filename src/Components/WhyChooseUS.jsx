import React from 'react'

// ---STYLES---
import '../style/WhyChooseUS.css'

// ---ICONS---
import ErrorIcon from '../assets/error.png'
import Support from '../assets/support.png'
import TechStack from '../assets/tech-stack.png'
import Growth from '../assets/business-growth.png'

// ---IMAGES---
import Company from '../assets/company.png'

const WhyChooseUS = () => {
  return (
    <div className='why-choose-us-section'>
        <div className="text-container">
            <button className="heading-btn"><img src={ErrorIcon} alt="Services" />Some Reasons</button>
            <h1>Why Choose Our NexoneZ Company?</h1>

            <div className="reasons-list">
                <div className="reason-item support">
                    <h3> <img src={Support} alt="Support" /> 24/7 Support</h3>
                    <p>Our team is always available to assist you with technical and business needs anytime.</p>
                </div>
                <div className="reason-item tech-stack">
                    <h3><img src={TechStack} alt="Tech Stack" /> Modern Tech Stack</h3>
                    <p>We utilize the latest technologies and tools to ensure that our solutions are efficient, scalable, and future proof.</p>
                </div>
                <div className="reason-item growth">
                    
                    <h3><img src={Growth} alt="Growth" /> Business Growth</h3>
                    <p>We help your business grow with smart digital strategies and innovative solutions.</p>
                </div>
            </div>
        </div>
        <div className="image-container">
            <img src={Company} alt="Company" />
        </div>
    </div>
  )
}

export default WhyChooseUS