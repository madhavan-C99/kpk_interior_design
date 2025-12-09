
//css
import './Faq.css'

//icons
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

//state
import { useState } from 'react';


export default function Faq() {
 const categories = ["Designs", "Services", "Support"];
 //selected  categories are stored in setactiveTap
const [activeTab, setActiveTab] = useState("Designs");
//present data are shown setopen
const [open, setOpen] = useState(null);


const faqs = {
    Designs: [
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
        Services: [
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
        Support: [
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
  return (
   <>
    {/* --------------- */}
        
        {/* --------------faq------- */}
        <section className='price-faq'>
                <div>
                    <p>FAQ</p>
                    <h2>Frequently Asked Questions</h2>
                </div>
                {/* <div>
                    <div>
                        <div>
                            
                        </div>
                    </div>
                </div> */}
        </section>
        {/* -------------------- */}
        <div className='price-faq-cateogries'>


            {/* TABS */}
            
            <div>
                {/* Here we select the current tab are Services, Expertise, Consultation */}
                    {categories.map((c) => (
                    <button
                        key={c}
                        //we store the slected tap in setActvieTap
                        onClick={() => {setActiveTab(c); setOpen(null);}}
                        style={{ background: activeTab === c ? "rgba(141, 155, 106, 1)" : "rgba(255, 255, 255, 1)", color: activeTab === c ? "white" : "black", }}
                        className='Price-faq_active'
                        >
                        {c}
                    </button>
                    ))}
            </div>


            {/* FAQ LIST */}
                <div className='price-faq_list'>
                    {/* Here we fetch the data from setActiveTab */}
                        {faqs[activeTab].map((item, index) => (
                            <div key={index}  >
                                {/* it show  the sub section  or dropdown when we click to show and hide the data */}
                                <div onClick={() => setOpen(open === index ? null : index)} className='price-faq-box' >
                                    <div className='price-faq-ques'>
                                        <div>
                                            {item.q}
                                        </div>
                                        <div>
                                            <span className='price-faq_icon'>{open === index ? <FaChevronDown/> : <FaChevronUp/>}</span>
                                        </div>
                                    </div>
                                    <div className='price-faq-ans'>
                                        {/* // if there is ans present means show and not shown yet means hide it */}
                                            {open === index && 
                                                (
                                                <p>{item.a}</p>
                                                )
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



