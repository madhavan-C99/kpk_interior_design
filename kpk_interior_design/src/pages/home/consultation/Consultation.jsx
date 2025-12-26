import React from "react";
import './Consultation.css'
import consultationvideo from '../../../assets/home/videos/consultation_video.mp4'


function Consultation({openForm}){
    return(
        <>
            <div className="consultation_wrapper2">
                <video autoPlay muted loop src={consultationvideo} id="consult_video2" type="video/mp4"></video>
                <div className="consultation_content2">
                    <div className="consultation title2">
                        <h2 className="consult_titletext2">
                            BOOK YOUR PERSONALIZED INTERIOR CONSULTATION TODAY
                        </h2>
                    </div>
                    <div className="consultation_des2">
                        <p className="consult_destext2">
                            Our designers bring strategic planning and artistic thinking together
                        </p>
                    </div>
                    <div className="consultation_btnwrap2">
                        <button className="consult_btn2" onClick={openForm}>Build My Dream Interior</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Consultation