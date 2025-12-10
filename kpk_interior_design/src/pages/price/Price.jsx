import React from 'react'
//css
import '../../pages/price/Price.css';
//image
import Pricehero from '../../assets/Price_img/price-hero-price.png'
// import Priceback from '../../pages/price/price-hero-price.png'
//icons
import {  FaCheckCircle, FaChevronDown,FaChevronUp } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
//state
import { useState } from 'react';


export default function Price() {
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
    {/* Price Hero Section */}
     <section className='price-hero'> 
        <div>
            <h2 className='price-hero-title-1'>Interior Design Cost in Pondicherry - Complete Pricing Guide 2025</h2>
        </div>
        <div style={{width:"60%"}}>
            {/* <img src={Pricehero} className='pricehero-img'/> */}
        </div>
    </section>
    {/* Price Over view Table */}
    <section>
        <div className='price-table-title'>
            <h2>Affordable Interior Pricing Overview</h2>
            <p>.A simple breakdown of interior design costs with budget-friendly options for customers in Pondicherry and Cuddalore.</p>
        </div>
        <div>
        <section className="price-table">
                <div className="price-table-wrapper">
                    <table className="price-table__table" role="table" aria-label="Price table">
                        <thead>
                            <tr className="price-table__head-row" style={{padding:"15px"}}>
                                <th>Cabinet</th>
                                <th>Basic</th>
                                <th>Medium</th>
                                <th>Pro</th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                            <td className="price-table__td price-table__label">Price</td>
                            <td>1450/sq ft</td>
                            <td>1650/sq ft</td>
                            <td>1850/sq ft</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Water Proof</td>
                            <td className="price-table__icon">
                                <FaCheckCircle />
                            </td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Fire Retardent</td>
                            <td className="price-table__icon"><FaTimesCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Hardware Brand</td>
                            <td>EBCO</td>
                            <td>EBCO</td>
                            <td>HETTICH</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Shutter Laminate</td>
                            <td>VIRGO</td>
                            <td>MERINO</td>
                            <td>GREEN LAM</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Carcass Laminate</td>
                            <td>0.8 OFF WHITE</td>
                            <td>0.8 FABRIC</td>
                            <td>0.8 WOODEN GRAINS</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Material Warranty</td>
                            <td>10 YEARS</td>
                            <td>15 YEARS</td>
                            <td>25 YEARS</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Laminate Stain Resistant</td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Laminate Scratch Resistant</td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Laminate Impact Resistant</td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Anti Ageing</td>
                            <td className="price-table__icon"><FaTimesCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            <td className="price-table__icon"><FaCheckCircle /></td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Personalized design</td>
                            <td>OPTIONAL</td>
                            <td>FREE 3D DESIGN</td>
                            <td>FREE 3D DESIGN</td>
                            </tr>

                            <tr>
                            <td className="price-table__td price-table__label">Installation Method</td>
                            <td>Factory Finish</td>
                            <td>Factory Finish</td>
                            <td>Factory Finish</td>
                            </tr>

                            <tr className="price-table__footer-row">
                            <td className="price-table__td price-table__label">KPK Warranty</td>
                            <td>6 years</td>
                            <td>10 years</td>
                            <td>12 years</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

        
        </div>
    </section>
    {/* --------------- */}
        <section className='Price-background'>  
            <h2>Get Your Interior Design Price Today</h2>
            <p>Access easy, transparent pricing for modular kitchen, wardrobe and home interiors. Get accurate cost guidance and customized options for Pondicherry & Cuddalore.</p>
            <button>Start My Interior Plan</button>
        </section>
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
