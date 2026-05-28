import React from 'react'

// ---STYLE---
import '../style/services.css'

// ---IMAGES---
import BG from '../assets/services-bg.png'
import ServicesIcon from '../assets/services.png'
import WebDevelopment from '../assets/web-development.png'
import FlutterDevelopment from '../assets/flutter-development.png'
import UIDesigning from '../assets/ui-ux-designing.png'
import ArtificialIntelligence from '../assets/ai.png'
import DigitalMarketing from '../assets/marketing.png'
import GraphicDesigning from '../assets/graphic-designing.png'

const Services = () => {
  return (
    <div className='services-section'>

        <div className="bg-image">
            <img src={BG} alt="" />
        </div>

        <div className="content">
            <button className="heading-btn"><img src={ServicesIcon} alt="Services" />Services</button>

            <div className="text-container">
                <h1>We Provide a Wide Range <br /> Of Services</h1>
            </div>

            <div className="cards">

                <div className="card web-development">
                    <img src={WebDevelopment} alt="Web Development" />
                    <h2>Web Development</h2>
                    <p>We build fast, responsive, and modern websites using the latest technologies to help your business grow online.</p>
                </div>

                <div className="card flutter-development">
                    <img src={FlutterDevelopment} alt="Flutter Development" />
                    <h2>Flutter Development</h2>
                    <p>Cross-platform mobile apps for Android and iOS with smooth performance and beautiful user experience..</p>
                </div>

                <div className="card ui-designing">
                    <img src={UIDesigning} alt="UI/UX Designing" />
                    <h2>UI/UX Designing</h2>
                    <p>Clean and user-friendly designs focused on better user experience, engagement, and modern aesthetics.</p>
                </div>

                <div className="card artificial-intelligence">
                    <img src={ArtificialIntelligence} alt="Artificial Intelligence" />
                    <h2>Artificial Intelligence</h2>
                    <p>Intelligent solutions powered by AI to automate processes, analyze data, and drive innovation for your business.</p>
                </div>

                <div className="card digital-marketing">
                    <img src={DigitalMarketing} alt="Digital Marketing" />
                    <h2>Digital Marketing</h2>
                    <p>Data-driven strategies to boost your online presence, engage your audience, and grow your business effectively.</p>
                </div>

                <div className="card graphic-designing">
                    <img src={GraphicDesigning} alt="Graphic Designing" />
                    <h2>Graphic Designing</h2>
                    <p>Eye-catching and brand-aligned visual designs for all your marketing materials and digital platforms.</p>
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default Services