import React from "react";
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
    { id:1, number: '01', title: 'Meet Us', active: false, strokeicon:stroke1stimg, fillicon: fill1stimg },
    { id:2, number: '02', title: 'Scope of work', active: false, strokeicon: stroke2ndimg, fillicon: fill2ndimg },
    { id:3, number: '03', title: 'Execution', active: true, strokeicon: stroke3rdimg, fillicon: fill3rdimg  },
    { id:4, number: '04', title: 'Approval', active: false, strokeicon: stroke4thimg, fillicon: fill4thimg },
  ];

  return (
    <div className="workflow-container">
      <h2 className="workflow-title">
        Seamless Project Workflow for Stress-Free Interiors
      </h2>

      <div className="workflow-steps-list">
        {steps.map((step) => (
          <div key={step.number} className="step-item">
            <div className="step-number-overlay">
              {step.number}
            </div>

            <div className={`step-circle ${step.active ? 'active' : ''}`}>
              <span className="step-icon">
                {step.strokeicon}
              </span>
            </div>

            <p className="step-title">
              {step.title}
            </p>
          </div>
        ))}
      </div>

      <div className="progress-line-wrapper">
        <div className="progress-line">
          <div className="progress-base"></div>
          <div className="progress-filled"></div>
        </div>
      </div>

      <div className="active-stage-text">
      </div>
    </div>
  );
};

export default Workflow;