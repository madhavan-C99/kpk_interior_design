import React, { useEffect } from "react";
import { useState } from "react";
//css
import '../about/About.css'
//icon
import {  FaCheckCircle, FaChevronDown,FaChevronUp } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";
//images
import Heroviedo from '../../assets/about/hero-viedo.png';
import Heroimg from '../../assets/about/about-hero-img.png';
import Ctaimg from '../../assets/about/about-cta.png'

//
import CtaLeft from '../../assets/about/cta-right.png'
import CtaRight from '../../assets/about/cta-left.png'
import Trust from "./trust/Trust";
import TypeLetter from "./typeletter/TyperLetter";
import Journey from "./journey/Journey";
import AboutHero from "./hero/AboutHero";


export default function About(){
    // -------------------------------------
    
     const categories = ["Designs", "Services", "Support"];
     //selected  categories are stored in setactiveTap
    const [activeTab, setActiveTab] = useState("Designs");
    //present data are shown setopen
    const [open, setOpen] = useState(null);
     
    // //Count down number
    // const [num1,setnum1]=useState(0);
    // const [num2,setnum2]=useState(0);
    // const [num3,setnum3]=useState(0);
   
    //  useEffect(()=>{
    //     let count1=700, count2=0, count3=0
    //     const interval=setInterval(()=>{
    //         if(count1<1000) count1++,setnum1(count1);
    //         if(count2<6) count2++,setnum2(count2);
    //         if(count3<150) count3++,setnum3(count3);
    //         //stop when they completed
    //         if(count1==1000 && count2==6 && count3==150){
    //             clearInterval(interval)
    //         }
    //     },5);
    //     return()=>clearInterval(interval);
    // },[]);
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    useEffect(() => {
        let interval = setInterval(() => {

        setCount1(prev => {
            if (prev >= 1000) return 1000;
            return prev + 10;
        });

        setCount2(prev => {
            if (prev >= 6) return 6;
            return prev + 1;
        });

        setCount3(prev => {
            if (prev >= 150) return 150;
            return prev + 2;
        });

        }, 30);

        //  STOP INTERVAL WHEN ALL TARGETS REACH
        return () => clearInterval(interval);

    }, []);

    // Monitor and clear interval when all counts reach target
    useEffect(() => {
        if (count1 === 1000 && count2 === 6 && count3 === 150) {
        console.log("All animations completed!");
        }
    }, [count1, count2, count3]);
    
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

    

    return(
        <>
            <section>
                    <AboutHero/>
                    {/* --------------- */}
                    <section className="about-experts">
                        {/* right side */}
                        <div className="about-experts-left">
                            <img src={Heroimg}/>
                        </div>
                        {/* left side */}
                        <div className="about-experts-right">
                        
                            <div>
                                    <h3>About KPK Enterprise - Interior Experts</h3>
                                    <p>KPK Enterprise, leading interior experts in Pondicherry & Cuddalore, has designed 1000+ homes over 4+ years, delivering creative, stylish, and functional interiors. Our focus on precision and quality ensures lasting beauty.</p>
                                    <p>With a 4.9 Google rating and exceptional client satisfaction, our professional designers provide personalized solutions, using premium materials and seamless execution, making every home elegant, modern, and comfortable.</p>
                                    {/* Count down Numbers */}
                                    <div className="about-experts-right_num">
                                        <div>
                                            <h4>{count1}+</h4>
                                            <p>Homes Designed</p>
                                        </div>
                                        <div>
                                            <h4>{count2}+</h4>
                                            <p>Years Experience</p>
                                        </div>
                                        <div>
                                            <h4>{count3}+</h4>
                                            <p>Client Satisfaction</p>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </section>
                   <Trust/>
                    <TypeLetter/>
                   <Journey/>
                    {/* ----------------------------Happy Client-------------------------------- */}
                    {/* <section className="about-happyclient">
                                <div className="about-client-left">
                                    <img src={CtaRight}/>
                                </div>
                                <div className="about-client-rigth">
                                    <img src={CtaLeft}/>
                                    <h2>Trusted by  <span>1000+</span>Happy Clients – KPK Enterprise   Satisfied Clients</h2>
                                    <p>With over 1000 happy clients in Pondicherry, KPK Enterprise has earned a reputation for delivering stylish, functional, and client-focused interior solutions across homes and commercial spaces.</p>
                                    <button>Build My Dream Interior</button>
                                </div>
                    </section> */}
                    {/* ----------------------FAQ---------------------------------------------- */}
                    {/* --------------faq------- */}
                        <section className='about-faq'>
                            <div>
                                <p>FAQ</p>
                                <h2>Frequently Asked <br></br> Questions</h2>
                            </div>
                        </section>
                        {/* -------------------- */}

                        <div className='about-faq-categories'>

                            {/* TABS */}
                            <div>
                                {categories.map((c) => (
                                    <button
                                        key={c}
                                        onClick={() => {setActiveTab(c); setOpen(null);}}
                                        style={{ 
                                            background: activeTab === c ? "rgba(141, 155, 106, 1)" : "rgba(255, 255, 255, 1)", 
                                            color: activeTab === c ? "white" : "black",
                                        }}
                                        className='about-faq_active'
                                    >
                                        {c}
                                    </button>
                                ))}
                            </div>

                            {/* FAQ LIST */}
                            <div className='about-faq_list'>
                                {faqs[activeTab].map((item, index) => (
                                    <div key={index}>
                                        
                                        <div 
                                            onClick={() => setOpen(open === index ? null : index)} 
                                            className='about-faq-box'
                                        >
                                            <div className='about-faq-ques'>
                                                <div>{item.q}</div>

                                                <div>
                                                    <span className='about-faq_icon'>
                                                        {open === index ? <FaChevronDown/> : <FaChevronUp/>}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='about-faq-ans'>
                                                {open === index && (
                                                    <p>{item.a}</p>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

            </section>
        </>
    )
}