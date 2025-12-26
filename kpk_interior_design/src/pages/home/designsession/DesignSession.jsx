import React from "react";
import './DesignSession.css'
import office from '../../../assets/home/images/designsess1.png'
import home from '../../../assets/home/images/designsess2.png'
import laptop from '../../../assets/home/images/designsess3.png'
import tablet from '../../../assets/home/images/designsess4.png'

function DesignSession({openForm}){
   const steps = [{
      id:1,
      img: office,
      title:"Step 1: Meet Our Designer",
    },
    {
        id:2,
      img: home,
      title: "Step 2: Walkthrough our Studio",
    },
    {
        id:3,
      img: laptop,
      title: "Step 3: Free Personalized 3D Designs",
    },
    {
        id:4,
      img: tablet,
      title: "Step 4: Get An Instant Quote",
    }]
    return(
        <>
            <div className="designsession_container2">
                <div className="designsession_text2">
                    <p className="design_badge2">Design Session</p>
                    <h2 className="designsession_title2">Personalized Interior 
                        Design Consultations by Professional Designers in Pondicherry 
                    </h2>
                    <p className="designsession_des2">
                        KPK Enterprises, a top interior design brand in Pondicherry, 
                        delivers tailored consultations. We help homeowners and businesses 
                        plan modular kitchens, wardrobes, TV units, pooja units, and study 
                        tables with precision, creativity, and lasting quality.
                    </p>
                </div>
                <div className="steps_sectiongrid2">
                    {steps.map(data=>(
                        <div className="steps_card2" key={data.id}>
                            <img src={data.img} alt="" className="sesscard_img2" />
                            <p className="sesscard_title2">{data.title}</p>
                        </div>
                    ))}
                </div>
                <div className="session_btnwrapper2">
                    <button className="session_btn2" onClick={openForm}>Connect With Design Experts</button>
                </div>
            </div>
        </>
    )
}

export default DesignSession