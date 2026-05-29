import React from 'react'

// ---STYLES---
import '../style/Workflow.css'

// ---ICONS---
import ErrorIcon from '../assets/error.png'

// ---IMAGES---
import WorkflowImg from '../assets/workflow.png'

const Workflow = () => {
  return (
    <div className='workflow-section'>
        <div className="heading">
            <button className="heading-btn"><img src={ErrorIcon} alt="Services" />How we work</button>
        </div>

        <div className="text-container">
            <h1>From idea to launch , we follow a simple and <br/> effective process to deliver modern digital solutions.</h1>
        </div>

        <div className="image-container">
            <img src={WorkflowImg} alt="Workflow" />
        </div>
    </div>
  )
}

export default Workflow