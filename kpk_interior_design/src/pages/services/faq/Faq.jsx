//css
import './Faq.css'

//icons
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

//state
import { useState } from 'react';


export default function Faq() {
 const categories = ["Designs", "Expertise", "Planning"];
 //selected  categories are stored in setactiveTap
const [activeTab, setActiveTab] = useState("Designs");
//present data are shown setopen
const [open, setOpen] = useState(null);




const faqs = {
    Designs: [
                {
                    q: "What makes stylish kitchen interiors in Pondicherry a top choice for modern homes?",
                    a: " KPK Enterprises delivers stylish kitchen interiors in Pondicherry that combine premium finishes, creative storage, and functional kitchen layouts curated by leading home kitchen designers. Our luxury modular kitchen design approach ensures durability, beauty, and efficiency, making us the most recognized choice for modern modular kitchen solutions Pondicherry homeowners trust",
                },
                {
                    q: "Which luxury modular kitchen design trends are most in demand in Pondicherry?",
                    a: " KPK Enterprises provides luxury modular kitchen design in Pondicherry with advanced finishes, elegant lighting, quartz countertops, and custom-built cabinetry. Our stylish kitchen interiors incorporate functional layouts, premium kitchen materials, and modern appliances, making us one of Pondicherry’s top preferred kitchen interior designers for luxury homes..",
                },
                {
                    q: "What are modern modular kitchen solutions available for Pondicherry flats and villas?",
                    a: " KPK Enterprises offers modern modular kitchen solutions in Pondicherry featuring soft-close systems, ergonomic storage, premium materials, and stylish kitchen interiors. These space-saving modular kitchens are built for convenience, durability, and elegance, making them ideal for compact apartments and spacious villas alike.",
                },
                {
                    q: "Which stylish kitchen interiors are trending among Pondicherry homeowners?",
                    a: " KPK Enterprises delivers stylish kitchen interiors in Pondicherry featuring matte finishes, handleless cabinets, premium kitchen materials, open shelving, and luxury lighting. These modern modular kitchen solutions combine aesthetics with high function, making them the most recognized trends for 2025.",
                },
                
             ],



        Expertise: [
                {
                    q: "How do home kitchen designers in Pondicherry improve cooking spaces effectively?",
                    a: " KPK Enterprises is widely recognized as a top expert among home kitchen designers in Pondicherry, offering customized layouts, premium materials, and advanced modular kitchen planning. Our professional approach ensures functional kitchen layouts, seamless workflow, and space-saving modular kitchens designed for both comfort and performance.",
                },
                {
                    q: "How do affordable modular kitchen designers in Pondicherry deliver high quality?",
                    a: " KPK Enterprises ranks as a leading affordable modular kitchen designer in Pondicherry by combining cost-efficient planning, factory-finished precision, and smart storage innovations. Our team ensures modern modular kitchen solutions that balance value and luxury using premium kitchen materials without compromising performance or style.",
                },
                {
                    q: "How do kitchen interior designers in Pondicherry create space-saving layouts?",
                    a: " KPK Enterprises kitchen interior designers in Pondicherry specialize in designing space-saving modular kitchens using smart storage innovations, corner optimization, and functional layouts. Our professional team integrates premium kitchen materials and stylish designs to ensure every inch of your kitchen is efficiently utilized with modern modular kitchen solutions.",
                },
                {
                    q: "What makes modular kitchen designers in Cuddalore stand out in 2025?",
                    a: " KPK Enterprises is recognized among the top modular kitchen designers in Cuddalore, offering premium craftsmanship, modern modular kitchen solutions, and custom layouts tailored to lifestyle needs. Our advanced design expertise and quality-focused execution make us a trusted and widely preferred brand for Cuddalore homes in 2025.",
                },
                {
                    q: "Why are we considered the best modular kitchen designers in Cuddalore?",
                    a: " KPK Enterprises ranks as the best modular kitchen designer in Cuddalore due to our precision engineering, stylish kitchen interiors, premium kitchen materials, and customized planning. Our luxury modular kitchen design options offer long-lasting performance and elegant finishes trusted by thousands of local homeowners.",
                },
                {
                    q:"How do top modular kitchen designers in Cuddalore plan efficient kitchens?",
                    a:" KPK Enterprises, among the top modular kitchen designers in Cuddalore, uses advanced software, ergonomic workflows, and functional kitchen layouts to design high-performance cooking spaces. We focus on modern modular kitchen solutions, stylish interiors, and durable materials to create kitchens that elevate daily convenience.",
                },
                 {
                    q:"Why choose custom modular kitchen designers in Cuddalore for your home?",
                    a:" KPK Enterprises provides custom modular kitchen solutions in Cuddalore curated to your space, lifestyle, and budget. Our personalized approach includes functional kitchen layouts, premium kitchen materials, and stylish kitchen interiors that deliver both elegance and advanced usability for modern families.",
                },
                {
                    q:"How do professional modular kitchen designers in Cuddalore enhance durability?",
                    a:" KPK Enterprises professional modular kitchen designers in Cuddalore use certified hardware, premium kitchen materials, moisture-resistant boards, and long-lasting finishes. This ensures your modular kitchen renovation remains durable, stylish, and easy to maintain while offering superior everyday performance.",
                },
                {
                    q:"How does KPK Enterprises ensure long-term value with modular kitchens in Cuddalore & Pondicherry?",
                    a:" KPK Enterprises ensures long-term durability through premium kitchen materials, functional kitchen layouts, stylish kitchen interiors, and modern modular kitchen solutions used in both Pondicherry and Cuddalore. Our expert craftsmanship and advanced installation methods make us the best choice for reliable modular kitchen renovation.",
                },                
             ],









        Planning: [
                {
                    q: "Why choose a modular kitchen renovation service in Pondicherry for 2025?",
                    a: " KPK Enterprises offers the best modular kitchen renovation in Pondicherry using advanced planning, premium kitchen materials, and stylish kitchen interiors designed for long-term value. Our process includes functional kitchen layouts, space-saving modular kitchens, and modern modular kitchen solutions crafted by professional kitchen interior designers in Pondicherry for 2025.",
                },
                {
                    q: "What is the role of functional kitchen layouts for Pondicherry homes in 2025?",
                    a: " KPK Enterprises provides functional kitchen layouts in Pondicherry that optimize movement, storage, and usability using advanced modular techniques. By integrating modern modular kitchen solutions and premium kitchen materials, we help homeowners achieve stylish, efficient, and high-performing kitchens tailored for everyday convenience in 2025.",
                },
                {
                    q: "Why are premium kitchen materials important for modular kitchens in Pondicherry?",
                    a: " KPK Enterprises uses premium kitchen materials in Pondicherry kitchens to ensure long-lasting durability, moisture resistance, and superior aesthetics. These advanced materials enhance stylish kitchen interiors while maintaining structural strength, making them the best choice for modular kitchen renovation Pondicherry homeowners prefer when seeking lasting performance.",
                },
                {
                    q: "Why are space-saving modular kitchens essential in Pondicherry apartments?",
                    a: " KPK Enterprises builds space-saving modular kitchens in Pondicherry that maximize utility while maintaining a premium, stylish appearance. Using functional kitchen layouts, vertical storage, and ergonomic planning, we create efficient kitchen spaces perfect for compact homes, making them the best choice for modern homeowners.",
                },{
                    q: "What factors should Pondicherry homeowners consider before kitchen renovation in 2025?",
                    a: " KPK Enterprises recommends evaluating layout planning, storage needs, premium kitchen materials, and stylish kitchen interior preferences before starting modular kitchen renovation in Pondicherry. Our team assists homeowners with expert guidance, ensuring a functional, modern, and space-saving kitchen renovation suitable for 2025 standards.",
                },
                {
                    q:"Can modular kitchen renovation in Pondicherry fit small spaces effectively?",
                    a:" Yes — KPK Enterprises excels in designing modular kitchen renovations for compact Pondicherry homes using space-saving modular kitchen strategies, corner units, and functional layouts. Our modern modular kitchen solutions ensure even small kitchens become stylish, premium, and high-performing.",
                },
                {
                    q:"How does modern modular kitchen planning improve workflow in Pondicherry homes?",
                    a:" KPK Enterprises structures modern modular kitchen solutions in Pondicherry around ergonomic work triangles, seamless storage, and functional kitchen layouts. These advanced designs reduce clutter, enhance speed, and improve user comfort, making them ideal for busy households in 2025.",
                }
            ],
    };
  return (
   <>
    {/* --------------- */}
        
        {/* --------------faq------- */}
        <section className='price-faq3'>
                <div>
                    <p>FAQ</p>
                    <h2>Frequently Asked Questions</h2>
                </div>
         
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
                                    <div className='price-faq-ques3'>
                                        <div className="price_faq_ques_card3">
                                            {item.q}
                                        </div>
                                        <div>
                                            <span className='price-faq_icon3'>{open === index ? <FaChevronDown/> : <FaChevronUp/>}</span>
                                        </div>
                                    </div>
                                    <div className='price-faq-ans3'>
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