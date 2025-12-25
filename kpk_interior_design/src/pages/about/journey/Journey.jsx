import React from "react";
import '../journey/Journey.css'
//images
import Support from '../../../assets/about/support.png'
import Personal from '../../../assets/about/personal.png'
import Creative from '../../../assets/about/creative.png'
import Quality from '../../../assets/about/quality.png'
import Expert from '../../../assets/about/expert.png'
import Care from '../../../assets/about/care.png'

 export default function Journey(){
    const Cycle=[
        {
            img:Personal,
            title:"Personal Design Interaction",
            description:"A one-on-one conversation where we explore your vision, priorities, and expectations.",
        },
        {
            img:Creative,
            title:"Creative Blueprint & Strategy",
            description:"Our team shapes your space with thoughtful planning, smart layouts, and curated design concepts.",
        },
        {
            img:Quality,
            title:"Quality-Assured Components",
            description:"Every finish and material is chosen for strength, reliability, and long-term elegance.",
        },
        {
            img:Expert,
            title:"Expert Craft & Assembly",
            description:"Our team installs every component seamlessly, ensuring a flawless final outcome.",
        },
        {
            img:Care,
            title:"Continued Care & Guidance",
            description:"Even after completion, we’re here to ensure your space remains functional and beautiful.",
        }
    ]
    return(
        <>
         {/* ---------------------------------our Design Process---------------------------------------------------- */}
                    <div className="about-design">
                        <h2>Our Design Process</h2>
                        <p>How We Shape Your Interior Journey</p>
                        <div className="about-design_cycle_line"></div>
                        <div className="about-design_cycle">
                            
                                {/* <div>
                                    <div className="about-design_cycle_img">
                                        <img src={Personal} alt=""/>
                                    </div>
                                    <h4>Personal Design Interaction</h4>
                                    <p>A one-on-one conversation where we explore your vision, priorities, and expectations.</p>
                                </div> */}
                                {Cycle.map((cycle,idx)=>(
                                    <div key={idx}>
                                        <div className="about-design_cycle-right">
                                            <div className="about-design_cycle_img">
                                                <img src={cycle.img} alt=""/>
                                            </div>
                                        </div>
                                        <div className="about-design_cycle-res">
                                            <h4>{cycle.title}</h4>
                                            <p>{cycle.description}</p>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
        </>
    )
 }