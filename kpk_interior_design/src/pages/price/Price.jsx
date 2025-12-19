import React from 'react'
//css
import '../../pages/price/Price.css';
//image
import Pricehero from '../../assets/Price_img/price-hero-price.png'
import Heroimg from '../../assets/Price_img/price-hero.png'


// import Priceback from '../../pages/price/price-hero-price.png'
//icons
import {  FaCheckCircle, FaChevronDown,FaChevronUp } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
//state
import { useState } from 'react';
//Component
import PriceHero from './pricehero/PriceHero';
import Table from './table/Table';
import PriceToday from './pricetoday/PriceToday';
import PriceCta from './price_cta/PriceCta';

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
     {/* <section className='price-hero'> 
        <div>
            <h2 className='price-hero-title-1'>Interior Design Cost in Pondicherry - Complete Pricing Guide 2025</h2>
        </div>
        <div style={{width:"60%"}}>
            <img src={Heroimg} className='pricehero-img'/>
        </div>
    </section> */}
    <PriceHero/>
    <Table/>
    <PriceCta/>
    {/* <PriceToday/> */}
    {/* --------------- */}
        
        
        
   </>
  )
}
