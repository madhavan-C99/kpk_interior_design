import React, { useState, useEffect } from "react";
import './Workflow.css'
import stroke1stimg from '../../../assets/home/images/Frame 1000012615.png'
import fill1stimg from '../../../assets/home/images/Frame 1000012619.png'
import stroke2ndimg from '../../../assets/home/images/Frame 1000012620.png'
import fill2ndimg from '../../../assets/home/images/Frame 1000012621.png'
import stroke3rdimg from '../../../assets/home/images/Frame 1000012622.png'
import fill3rdimg from '../../../assets/home/images/Frame 1000012623.png'
import stroke4thimg from '../../../assets/home/images/Frame 1000012624.png'
import fill4thimg from '../../../assets/home/images/Frame 1000012625.png'

const Workflow = () => {
  const steps = [
    { id:1, 
      number: '01', 
      title: 'Meet Us',
      strokeicon:stroke1stimg, 
      fillicon: fill1stimg,
      progressWidth: '20%',
      content:{
        heading:'Meet Us',
        body:"Let us know more about each other. We can meet over a cup of coffee or even online too. We'd like to know what you're looking for."
      } },
    { id:2, 
      number: '02', 
      title: 'Scope of work',
      strokeicon: stroke2ndimg, 
      fillicon: fill2ndimg,
      progressWidth: '50%',
      content:{
        heading:'Scope of work',
        body:"We define the project requirements, finalize the budget, discuss timelines, and create a formal agreement to ensure clarity."
      }},
    { id:3, 
      number: '03', 
      title: 'Execution',
      strokeicon: stroke3rdimg, 
      fillicon: fill3rdimg,
      progressWidth: '75%',
      content:{
        heading:'Execution',
        body:"Our team begins the design, procurement, and construction process, maintaining quality checks and keeping you updated every step of the way."
      }  },
    { id:4, 
      number: '04', 
      title: 'Approval',
      strokeicon: stroke4thimg, 
      fillicon: fill4thimg,
      progressWidth: '100%',
      content:{
        heading:'Approval',
        body:"The project is complete. We conduct a final walkthrough and hand over the keys to your beautifully finished, stress-free interior."
      } },
  ];

    const STEP_DURATION = 3000;

    const [activeId, setActiveId] = useState(0);
    const [isResetting, setIsResetting] = useState(false);

    // 1. NEW STATE: Track the current screen width
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);

    // 2. NEW EFFECT: Listen for screen size changes
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    // END NEW EFFECT

    useEffect(() => {
      const totalSteps = steps.length;

      const interval = setInterval(() => {
        setActiveId(prevId => {
          if (prevId >= totalSteps) {
            setIsResetting(true);
            setTimeout(() => {
                setActiveId(1);
                setIsResetting(false);
            }, 1000);
            return prevId;
          }
          return prevId+1;
        });
    }, STEP_DURATION);

      return () => clearInterval(interval);
    }, [steps.length]);  

  const activeStep = steps.find(step => step.id === activeId);
 let progressLineTargetWidth = '2%';

if (activeStep && !isResetting) {
    progressLineTargetWidth = activeStep.progressWidth;
}

if (isResetting) {
    progressLineTargetWidth = '2%'; 
}

  const isMobileView = screenWidth <= 575;
    
    const progressStyle = {
        [isMobileView ? 'height' : 'width']: progressLineTargetWidth,
        
        transitionDuration: isResetting ? '0s' : '1.5s',
        transformOrigin: isMobileView ? 'top' : 'center right'
    };

  return (
    <div className="workflow_container2">
      <div className="workflow_innerwrapper2">
        <h2 className="workflow_title2">
          Seamless Project Workflow for Stress-Free Interiors
        </h2>

        <div className="workflow_steps_list2">
          {steps.map((step) => {

            const isActive =!isResetting && step.id === activeId;
            return(
              <div key={step.number} className="step_item2">
                <p className="step_number_overlay2">{step.number}</p>
                
                <div className={`step_circle2 ${isActive? 'active' : ''}`}>
                    <img src={isActive? step.fillicon : step.strokeicon} alt={step.title} className="step_circle_img2" />
                </div>

                <p className="step_title2">
                  {step.title}
                </p>

                {isActive && isMobileView && step.content && (
                                    <div className="content_section2 mobile-inline-content" key={`content-${step.id}`}>
                                        <p className="content_body2">{step.content.body}</p>
                                    </div>
                )}

              </div>)}
          )}
        </div>

        <div className="progress_line_wrapper2">
            <div className="progress_base2">
              <div className="progress_filled2" style={progressStyle}></div>
            </div>
        </div>

        {activeStep && !isMobileView && activeStep.content && (
          <div className="content_section2" key={activeStep.id}>
              <h3 className="content_heading2">{activeStep.content.heading}</h3>
              <p className="content_body2">{activeStep.content.body}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Workflow;