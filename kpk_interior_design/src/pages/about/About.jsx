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
import Support from '../../assets/about/support.png'
import Personal from '../../assets/about/personal.png'
import Creative from '../../assets/about/creative.png'
import Quality from '../../assets/about/quality.png'
import Expert from '../../assets/about/expert.png'
import Care from '../../assets/about/care.png'
//
import CtaLeft from '../../assets/about/cta-right.png'
import CtaRight from '../../assets/about/cta-left.png'
//
import ExpertDesigner from '../../assets/about/eco-conscious.png'
import Endurance from '../../assets/about/everyday-endurance.png'
import EcoSystem from '../../assets/about/eco-conscious.png'
import HouseCraftman from '../../assets/about/house-craftsmanship.png'
import NoCost from '../../assets/about/no-cost.png'
import Timeline from '../../assets/about/timeline.png'
import Transport from '../../assets/about/transport.png'

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
export default function About(){
    // -------------------------------------
    const Letters=["KPK ENTERPRISES"]
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
 const words = ["Modular Kitchen", "WARDROBE", "POOJA UNIT","TV UNIT","Modular Kitchen"]
 const typeSpeed = 300
 const eraseSpeed = 300
const  pauseAfterWord = 500

  const [wordIndex, setWordIndex] = useState(0);   // which word
  const [charIndex, setCharIndex] = useState(0);   // how many letters visible
  const [isErasing, setIsErasing] = useState(false);

  useEffect(() => {
    const current = words[wordIndex] || "";

    // Typing: show next letter
    if (!isErasing && charIndex < current.length) {
      const t = setTimeout(() => setCharIndex(c => c + 1), typeSpeed);
      return () => clearTimeout(t);
    }

    // Done typing: wait then start erasing
    if (!isErasing && charIndex === current.length) {
      const t = setTimeout(() => setIsErasing(true), pauseAfterWord);
      return () => clearTimeout(t);
    }

    // Erasing: hide last letter
    if (isErasing && charIndex > 0) {
      const t = setTimeout(() => setCharIndex(c => c - 1), eraseSpeed);
      return () => clearTimeout(t);
    }

    // Erasing finished: move to next word
    if (isErasing && charIndex === 0) {
      setIsErasing(false);
      setWordIndex(i => (i + 1) % words.length);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [charIndex, isErasing, wordIndex]);

  const word = words[wordIndex] || "";
  const visible = word.slice(0, charIndex).split("");
//   ------------newly added---------------------
// const current = words[wordIndex];
//   const letters = current.slice(0, charIndex).split("");
    

    return(
        <>
            <section>
                    <div className="about-hero_viedo">
                        <div>
                            <h2>KPK Enterprise – Best Interior Designers in Cuddalore & Pondicherry</h2>
                        </div>
                    </div>
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
                    {/* ----------- Trusted Interior---------- */}
                    <section className="about-trust">
                        <h2>Why We’re the Trusted Interior Design Choice in Pondicherry</h2>
                        <p>Discover elegant, trust-built interiors shaped with modern vision and thoughtful detailing, crafted with factory-finish precision by KPK Enterprise, specialising in innovative interior design in Pondicherry for meaningful, future-focused living.</p>
                        {/* about Trust box details */}
                        <div className="about-trust-box">
                            {/* ----here we fetch the data by using map Trust */}
                            {/* {Trust.map((Trust,idx) =>(
                                <div className="about-trust_support" id={idx}>
                                    <h3>{Trust.title}</h3>
                                    <p>{Trust.description}</p>
                                    <div className="about-trust_support-img">
                                    <img src={Trust.Image} />
                                </div>
                                </div>
                                ))
                            } */}
                            <div  className="about-trust-box_row-1">
                                <div className="about-trust_support">
                                    <h3>End-to-End Design Support</h3>
                                    <p>We handle every step, ensuring your project stays effortless and stress-free</p>
                                    <div className="about-trust_support-img">
                                        <img src={Support} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support" >
                                    {/* -----box-2---- */}
                                    <h3>Quality-Controlled In-House Craftsmanship</h3>
                                    <p>Every detail is produced internally, ensuring consistency and reliability.</p>
                                    <div className="about-trust_support-img">
                                        <img src={HouseCraftman} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-3---- */}
                                    <h3>No-Cost Design Visualization</h3>
                                    <p>Get a clear picture of your interiors with expert-curated design samples.</p>
                                    <div className="about-trust_support-img">
                                        <img src={NoCost} />
                                    </div>
                                </div>
                                
                            </div>
                            {/* ----------------------------------------------- */}
                            <div className="about-trust-box_row-2">
                                
                                <div className="about-trust_support">
                                    {/* -----box-4---- */}
                                    <h3>Committed Delivery Timeline</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Timeline} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-5---- */}
                                    <h3>Made for Everyday Endurance</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Endurance} />
                                    </div>
                                </div>
                            </div>
                            {/* ----------------------------------------------- */}
                           
                            <div className="about-trust-box_row-3">
                                <div className="about-trust_support">
                                 {/* -----box-6---- */}
                                <h3>Transparent Cost Breakdown</h3>
                                <p>You receive upfront pricing with no hidden charges—ever.</p>
                                <div className="about-trust_support-img">
                                    <img src={Transport} />
                                </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-7---- */}
                                    <h3>Expert Designers by Your Side</h3>
                                    <p>Our professionals guide every decision with experience and care.</p>
                                    <div className="about-trust_support-img">
                                        <img src={ExpertDesigner} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-8---- */}
                                    <h3>Eco-Conscious Interior Choices</h3>
                                    <p>We prioritize materials and methods that reduce impact and support greener living.</p>
                                    <div className="about-trust_support-img">
                                        <img src={EcoSystem} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* -----------------KPK Enterpraise text animation--------------------------------------- */}
                    <section className="about-kpk">
                        <div className="about-kpk-text">
                            {/* {Letters.map((Letter,idx) =>(
                                <div className="about-kpk-text_map" key={idx}>
                                    {word.split("").map((char,i)=>(
                                    <h1 key={i} className="about-kpk-text_ani">{char}</h1>        
                                    ))}
                            </div>
                            ))} */}
                            <div>
                                <h1 className="about-kpk-text_ani">KPK ENTERPRISES</h1>
                            </div>
                            {/* ---------------newly added-----------------------    */}
                                <div className="about-typewriter" aria-live="polite">
                                    <h1 className="about-typewriter__text">
                                        {visible.map((ch, i) => {
                                        const delaySeconds = isErasing
                                            ? ((visible.length - 1 - i) * (eraseSpeed / 1000)).toFixed(3)
                                            : (i * (typeSpeed / 1000)).toFixed(3);

                                        const className = isErasing
                                            ? "ta-letter ta-exit"
                                            : "ta-letter ta-enter";

                                        return (
                                            <span
                                            key={i}
                                            className={className}
                                            style={{ animationDelay: `${delaySeconds}s` }}
                                            aria-hidden="true"
                                            >
                                            {ch === " " ? "\u00A0" : ch}
                                            </span>
                                        );
                                        })}

                                        <span className="ta-cursor" aria-hidden>|</span>
                                    </h1>
                                </div>
                                {/* --------------------------------------------- */}
                        </div>
                    </section>
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
                                        <div className="about-design_cycle_img">
                                            <img src={cycle.img} alt=""/>
                                        </div>
                                        <h4>{cycle.title}</h4>
                                        <p>{cycle.description}</p>
                                    </div>
                                ))}
                        </div>
                    </div>
                    {/* ----------------------------Happy Client-------------------------------- */}
                    <section className="about-happyclient">
                                <div className="about-client-left">
                                    <img src={CtaRight}/>
                                </div>
                                <div className="about-client-rigth">
                                    <img src={CtaLeft}/>
                                    <h2>Trusted by  <span>1000+</span>Happy Clients – KPK Enterprise   Satisfied Clients</h2>
                                    <p>With over 1000 happy clients in Pondicherry, KPK Enterprise has earned a reputation for delivering stylish, functional, and client-focused interior solutions across homes and commercial spaces.</p>
                                    <button>Build My Dream Interior</button>
                                </div>
                    </section>
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