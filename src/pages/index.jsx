import React from 'react'

// ---COMPONENTS---
import HeroSection from '../Components/HeroSection'
import About from '../Components/About'
import Services from '../Components/Services'

const index = () => {
  return (
    <div>
        {/* ---HERO SECTION--- */}
        <HeroSection />

        {/* ---ABOUT SECTION--- */}
        <About />

        {/* ---SERVICES SECTION--- */}
        <Services />

    </div>
  )
}

export default index