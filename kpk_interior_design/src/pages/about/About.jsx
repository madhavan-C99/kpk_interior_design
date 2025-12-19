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
import AboutCta from "./about_cta/AboutCta";
import AboutFaq from "./about_faq/AboutFaq";


export default function About(){
    // -------------------------------------
    
    
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
    

    

    return(
        <>
            <section>
                    <AboutHero/>
                    {/* --------------- */}
                    <section className="about-experts">
                        {/* right side */}
                        <div className="about-experts-left">
                            <img src={Heroimg} className="about-experts-left-img"/>
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
                   <AboutCta/>
                   <AboutFaq/>
                    {/* ----------------------------Happy Client-------------------------------- */}
                    
                    {/* ----------------------FAQ---------------------------------------------- */}
                    
            </section>
        </>
    )
}