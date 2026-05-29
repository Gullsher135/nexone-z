import React from 'react'

// ---COMPONENTS---
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Services from '../Components/Services'
import Workflow from '../Components/Workflow.jsx'

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

    </div>
  )
}

export default index