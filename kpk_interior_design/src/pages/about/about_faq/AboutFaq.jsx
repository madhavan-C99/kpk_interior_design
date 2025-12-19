import React from "react";
import { useEffect } from "react";
import { useState } from "react";
//css
import '../about_faq/AboutFaq.css'
//icon
import {  FaCheckCircle, FaChevronDown,FaChevronUp } from "react-icons/fa";
import { FaTimesCircle } from "react-icons/fa";

export default function AboutFaq(){
     const categories = ["About", "Services", "Process"];
     //selected  categories are stored in setactiveTap
    const [activeTab, setActiveTab] = useState("About");
    //present data are shown setopen
    const [open, setOpen] = useState(null);
     
         const faqs = {
             About: [
                         {
                             q: "Who is KPK Enterprise?",
                             a: "KPK Enterprise is a leading interior design company in Pondicherry, recognized for delivering stylish, functional, and premium home and commercial interiors. Their team of professional interior designers combines creativity, precision, and modern solutions to transform every space into a visually appealing and practical environment.",
                         },
                         {
                             q: "What is KPK Enterprise?",
                             a: "KPK Enterprise is a trusted interior design service in Pondicherry and Cuddalore, providing end-to-end home interiors. Known for innovative modular kitchens, wardrobes, TV units, and pooja units, they deliver customized, high-quality designs that perfectly blend functionality with elegance.",
                         },
                         {
                             q: "Why choose KPK Enterprise for Pondicherry interiors?",
                             a: "Choosing KPK Enterprise ensures access to top-rated, professional interior designers in Pondicherry. They combine premium materials, creative designs, and timely execution to deliver personalized, functional, and elegant interiors for homes, offices, and commercial spaces, enhancing both style and comfort.",
                         },
                         {
                             q: "When should I hire KPK Enterprise for interior projects?",
                             a: "Hiring KPK Enterprise early in your home or office project ensures seamless design execution. Engaging their Pondicherry interior designers at the planning stage allows for optimal layout, material selection, and customized solutions tailored to your lifestyle and functional needs.",
                         },
                         {
                             q: "Which areas does KPK Enterprise serve locally?",
                             a: "KPK Enterprise primarily serves Pondicherry and Cuddalore, providing specialized interior solutions for homes, apartments, offices, commercial spaces, and factories. Their local expertise ensures designs align with client expectations while adhering to regional aesthetic preferences and functional requirements.",
                         },
                         {
                             q: "How long has KPK Enterprise been in business?",
                             a: "With over 4 years of professional experience, KPK Enterprise has successfully completed more than 100 home and commercial interior projects in Pondicherry. Their consistent client satisfaction and 4.9 Google rating reflect their commitment to quality, creativity, and reliable service delivery.",
                         },
                         {
                             q:"What makes KPK Enterprise stand out among interior designers in Pondicherry?",
                             a:" KPK Enterprise stands out for its commitment to premium quality, creative design, and personalized solutions. Their team of top interior designers in Pondicherry ensures timely execution, functional layouts, and client-focused interiors that are both stylish and practical.",
                         },
                         {
                             q:"How many clients have KPK Enterprise served?",
                             a:"KPK Enterprise has successfully delivered interior solutions to over 3000 happy clients in Pondicherry and Cuddalore. Their expertise in modular kitchens, wardrobes, TV units, pooja units, and study tables has earned them trust as one of the top-rated interior designers locally.",
                         },
                         
                      ],
                 Services: [
                         {
                             q:"What services does KPK Enterprise provide?",
                             a:"KPK Enterprise offers comprehensive interior solutions, including modular kitchens, wardrobes, TV units, pooja units, study tables, and complete home interiors. Their Pondicherry-based team ensures every project is designed with meticulous planning, high-quality materials, and modern aesthetics tailored to client preferences.",
                         },
                         {
                             q:"How does KPK Enterprise design modular kitchens?",
                             a:" KPK Enterprise creates modern, space-efficient modular kitchens in Pondicherry that maximize storage and usability while reflecting contemporary aesthetics. Their designers consider workflow, ergonomics, and style, ensuring kitchens are not only functional but also visually appealing and easy to maintain.",
                         },
                         {
                             q:"Are KPK Enterprise interiors affordable?",
                             a:"Yes, KPK Enterprise offers interior solutions that balance luxury and affordability. Their Pondicherry and Cuddalore clients benefit from customized designs, premium materials, and expert execution at competitive pricing, making stylish and functional home interiors accessible without compromising quality.",
                         },
                         {
                             q:"Can KPK Enterprise design pooja units?",
                             a:"Yes, KPK Enterprise specializes in designing pooja units in Pondicherry that combine elegance, functionality, and spiritual aesthetics. Their professional interior designers create serene, organized prayer spaces that seamlessly integrate with the home’s overall style while respecting traditional and modern design elements.",
                         },
                         {
                             q:"How does KPK Enterprise ensure quality materials?",
                             a:"KPK Enterprise sources premium, durable materials for all interior projects in Pondicherry and Cuddalore. They emphasize material quality, longevity, and aesthetic appeal, ensuring that every wardrobe, modular kitchen, TV unit, and pooja unit meets high standards of durability and elegance.",
                         },
                         {
                             q:"Are KPK Enterprise interiors suitable for commercial spaces?",
                             a:"Yes, KPK Enterprise designs offices, retail shops, corporate interiors, and industrial spaces in Pondicherry and Cuddalore. Their functional, modern, and stylish commercial solutions enhance productivity, brand image, and aesthetic appeal while meeting practical requirements for businesses and employees.",
                         },
                         {
                             q: "How does KPK Enterprise customize interiors?",
                             a: "KPK Enterprise personalizes every project by understanding client preferences, lifestyle, and space constraints. Their Pondicherry interior designers create tailored layouts, color schemes, and furniture solutions for modular kitchens, wardrobes, pooja units, and TV units that reflect individuality and practical needs.",
                         },
                         {
                             q: "Does KPK Enterprise provide design consultations?",
                             a: "Yes, KPK Enterprise offers personalized interior design consultations in Pondicherry and Cuddalore. Their professional designers guide clients through modular kitchen layouts, wardrobe planning, pooja units, TV units, and study tables, ensuring every interior solution is functional, stylish, and tailored to specific requirements.",
                         },
                         {
                             q: "Are KPK Enterprise interiors modern or traditional?",
                             a: "KPK Enterprise caters to both modern and traditional interior preferences. Their Pondicherry-based interior designers blend contemporary aesthetics with classic design elements to create balanced, functional, and visually appealing interiors suitable for homes, offices, and commercial spaces.",
                         },
                         {
                             q: "Can KPK Enterprise handle large-scale interior projects?",
                             a: "Yes, KPK Enterprise manages both residential and large-scale commercial projects in Pondicherry and Cuddalore. From villas and apartments to corporate offices and factories, their professional interior designers deliver functional, stylish, and high-quality interiors, ensuring timely execution and client satisfaction.",
                         },
                         
                      ],
             Process: [
                         
                         {
                             q: "Does KPK Enterprise provide post-completion support?",
                             a: "Absolutely. KPK Enterprise ensures ongoing support after project completion in Pondicherry and Cuddalore. Their team addresses maintenance queries, ensures durability, and provides expert guidance for long-term care, giving clients peace of mind and sustained satisfaction with their interiors.",
                         },
                         {
                             q: "What is the project delivery process at KPK Enterprise? ",
                             a: "KPK Enterprise follows a structured project flow in Pondicherry, including initial consultation, design planning, material selection, execution, and post-completion support. Their transparent and guided process ensures clients experience seamless communication, timely delivery, and high-quality interior transformations.",
                         },
                     ],
             };
    return(
        <>
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
                                                <div className='about-faq-ques-size'>{item.q}</div>

                                                <div>
                                                    <span className='about-faq_icon'>
                                                        {open === index ? <FaChevronDown/> : <FaChevronUp/>}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className='about-faq-ans'>
                                                {open === index && (
                                                    <p className='about-faq-ans-size'>{item.a}</p>
                                                )}
                                            </div>
                                        </div>

                                    </div>
                                ))}
                            </div>
                        </div>

            
        </>
    )
}