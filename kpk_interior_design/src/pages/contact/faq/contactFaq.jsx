import React from "react";
//state
import { useState } from 'react';
import './ContactFaq.css'
//icons
import {  FaCheckCircle, FaChevronDown,FaChevronUp,FaTimesCircle  ,FaPhone, FaInstagram, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";



export default function ContactFaq(){
    const categories = ["Services", "Expertise", "Consultation"];
         //selected  categories are stored in setactiveTap
        const [activeTab, setActiveTab] = useState("Services");
        //present data are shown setopen
        const [open, setOpen] = useState(null);
        
        
        const faqs = {
            Services: [
                        {
                            q: "Can KPK Enterprise create customized modular kitchens in Pondicherry?",
                            a: "Yes, KPK Enterprise is among the top modular kitchen designers in Pondicherry, specializing in fully customized layouts. Its team ensures ergonomic designs, premium finishes, and practical storage solutions. Clients experience kitchens tailored to their lifestyle, offering smooth workflow, aesthetic appeal, and maximum space utilization, supported by expert guidance from professional interior designers",
                        },
                        {
                            q: "What services do they offer?",
                            a: "They offer kitchens, wardrobes, TV units and more.",
                        },
                        {
                            q: "Can KPK Enterprise create customized modular kitchens in Pondicherry?",
                            a: "Yes, KPK Enterprise is among the top modular kitchen designers in Pondicherry, specializing in fully customized layouts. Its team ensures ergonomic designs, premium finishes, and practical storage solutions. Clients experience kitchens tailored to their lifestyle, offering smooth workflow, aesthetic appeal, and maximum space utilization, supported by expert guidance from professional interior designers",
                        },
                        {
                            q: "Can KPK Enterprise create customized modular kitchens in Pondicherry?",
                            a: "Yes, KPK Enterprise is among the top modular kitchen designers in Pondicherry, specializing in fully customized layouts. Its team ensures ergonomic designs, premium finishes, and practical storage solutions. Clients experience kitchens tailored to their lifestyle, offering smooth workflow, aesthetic appeal, and maximum space utilization, supported by expert guidance from professional interior designers",
                        },
                        {
                            q: "Can KPK Enterprise create customized modular kitchens in Pondicherry?",
                            a: "Yes, KPK Enterprise is among the top modular kitchen designers in Pondicherry, specializing in fully customized layouts. Its team ensures ergonomic designs, premium finishes, and practical storage solutions. Clients experience kitchens tailored to their lifestyle, offering smooth workflow, aesthetic appeal, and maximum space utilization, supported by expert guidance from professional interior designers",
                        },
                     ],
                Expertise: [
                        {
                            q: "How customizable are interiors?",
                            a: "Highly customizable based on your need.",
                        },
                        {
                            q: "How customizable are interiors?",
                            a: "Highly customizable based on your need.",
                        },
                        {
                            q: "How customizable are interiors?",
                            a: "Highly customizable based on your need.",
                        },
                        {
                            q: "How customizable are interiors?",
                            a: "Highly customizable based on your need.",
                        },
                        {
                            q: "How customizable are interiors?",
                            a: "Highly customizable based on your need.",
                        },
                     ],
                Consultation: [
                        {
                            q: "Do they provide end‑to‑end service?",
                            a: "Yes, full consultation to execution.",
                        },
                        {
                            q: "Do they provide end‑to‑end service?",
                            a: "Yes, full consultation to execution.",
                        },
                        {
                            q: "Do they provide end‑to‑end service?",
                            a: "Yes, full consultation to execution.",
                        },
                        {
                            q: "Do they provide end‑to‑end service?",
                            a: "Yes, full consultation to execution.",
                        },{
                            q: "Do they provide end‑to‑end service?",
                            a: "Yes, full consultation to execution.",
                        },
                    ],
            };
    return(
        <>
        {/* --------------faq------- */}
        <section className='contact-faq'>
                <div>
                    <p>FAQ</p>
                    <h2>Frequently Asked Questions</h2>
                </div>
        </section>

        <div className='contact-faq-cateogries'>

                {/* TABS */}
                <div>
                    {categories.map((c) => (
                    <button
                        key={c}
                        onClick={() => {setActiveTab(c); setOpen(null);}}
                        style={{ background: activeTab === c ? "rgba(141, 155, 106, 1)" : "rgba(255, 255, 255, 1)", color: activeTab === c ? "white" : "black", }}
                        className='contact-faq_active'
                        >
                        {c}
                    </button>
                    ))}
                </div>

                {/* FAQ LIST */}
                <div className='contact-faq_list'>
                        {faqs[activeTab].map((item, index) => (
                            <div key={index}>
                                <div onClick={() => setOpen(open === index ? null : index)} className='contact-faq-box'>
                                    <div className='contact-faq-ques'>
                                        <div>{item.q}</div>
                                        <div>
                                            <span className='contact-faq_icon'>
                                                {open === index ? <FaChevronDown/> : <FaChevronUp/>}
                                            </span>
                                        </div>
                                    </div>

                                    <div className='contact-faq-ans'>
                                        {open === index && 
                                            (<p>{item.a}</p>)
                                        }
                                    </div>
                                </div>
                            </div>
                        ))}
                </div>
        </div>


        </>
    )
}