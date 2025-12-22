import React from "react";
import { useState } from "react";
import Image from '../../../assets/about/cta-img.png'
import '../../about/about_cta/aboutCta.css'
//images
import CtaLeft from '../../../assets/about/cta-right.png'
import CtaRight from '../../../assets/about/cta-left.png'
// import Form from "../../portfolio/form/Form";
import AboutForm from '../aboutform/AboutForm'
export default function AboutCta(){
    const [showForm, setShowForm] = useState(false);
    return(
    <>
    {/* ----------------- */}
    <section className="about-happyclient">
                                <div className="about-client-left">
                                    <img src={CtaRight}/>
                                </div>
                                <div className="about-client-rigth">
                                    <img src={CtaLeft}/>
                                    <h2>Trusted by  <span>1000+</span>Happy Clients – KPK Enterprises   Satisfied Clients</h2>
                                    <p>With over 1000 happy clients in Pondicherry, KPK Enterprises has earned a reputation for delivering stylish, functional, and client-focused interior solutions across homes and commercial spaces.</p>
                                    {/* <button>Build My Dream Interior</button> */}
                                    {/* BUTTON */}
                                    <button onClick={() => setShowForm(true)}>
                                        Build My Dream Interior
                                    </button>
                                </div>
    </section>
     {/* INSERT HERE (AFTER section) */}
      {showForm && (
        <AboutForm closeForm={() => setShowForm(false)} />
      )}
        </>
    )
}