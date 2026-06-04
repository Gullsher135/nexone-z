import React from 'react'

// ---COMPONENTS---
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Services from '../Components/Services'
import Workflow from '../Components/Workflow.jsx'
import WhyChooseUS from '../Components/WhyChooseUS.jsx'
import Portfolio from '../Components/Portfolio.jsx'
import Industries from '../Components/Industries.jsx'

const index = () => {
  return (
    <div>
        {/* ---HERO SECTION--- */}
        <HeroSection />

        {/* ---ABOUT SECTION--- */}
        <About />

        {/* ---SERVICES SECTION--- */}
        <Services />

        {/* ---WORKFLOW SECTION--- */}
        <Workflow />

        {/* ---WHY CHOOSE US SECTION--- */}
        <WhyChooseUS />

        {/* ---PORTFOLIO SECTION--- */}
        <Portfolio />

        {/* ---INDUSTRIES SECTION--- */}
        <Industries />

    </div>
  )
}

export default index