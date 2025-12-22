//css
import '../../services/faq/Faq.css'

//icons
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

//state
import { useState } from 'react';


export default function WardoorFaq() {
 const categories = ["Designs", "Services", "Support"];
 //selected  categories are stored in setactiveTap
const [activeTab, setActiveTab] = useState("Designs");
//present data are shown setopen
const [open, setOpen] = useState(null);




const faqs = {
    Designs: [
                {
                q:"What makes KPK Enterprises the best wardrobe designers in Pondicherry?",
                a:" KPK Enterprises is recognized among the best wardrobe designers in Pondicherry for delivering innovative, durable, and stylish wardrobe solutions. Our custom wardrobe designs in Pondicherry blend functionality and luxury, ensuring every home enjoys a personalized storage experience tailored to modern lifestyles."
                },
                {
                q:"How do custom wardrobe designers in Pondicherry enhance home interiors?",
                a:" Our custom wardrobe designers in Pondicherry craft wardrobes that maximize space efficiency while elevating home aesthetics. By combining modular solutions with premium materials, KPK Enterprises provides functional, elegant, and affordable wardrobe interiors in Pondicherry that seamlessly complement your home décor."
                },
                {
                q:"Are modular wardrobe designers in Pondicherry suitable for small spaces?",
                a:" Yes, modular wardrobe designers in Pondicherry specialize in creating space-smart solutions. KPK Enterprises offers sliding door wardrobes and walk-in wardrobe designs that utilize every inch efficiently, blending style, accessibility, and practicality for apartments and compact homes in Pondicherry."
                },
                {
                q:"What defines luxury wardrobe interiors in Pondicherry?",
                a:" Luxury wardrobe interiors in Pondicherry from KPK Enterprises are distinguished by premium finishes, custom layouts, and elegant design features. Our expert wardrobe designers in Pondicherry ensure that each wardrobe combines high-end style, advanced functionality, and personalized touches tailored to your lifestyle."
                },
                {
                q:"Which sliding door wardrobe designers in Pondicherry offer the best innovation?",
                a:" KPK Enterprises, as sliding door wardrobe designers in Pondicherry, focuses on seamless design and smooth functionality. We integrate durable hardware, aesthetic panels, and customized modular wardrobe interiors to deliver wardrobes that enhance convenience, style, and space optimization for every home."
                },
                {
                q:"How can walk-in wardrobe designers in Pondicherry transform a bedroom?",
                a:" Our walk-in wardrobe designers in Pondicherry create spacious, organized, and elegant dressing areas. KPK Enterprises combines modern modular layouts with ambient lighting and customized shelving, offering personalized wardrobe solutions in Pondicherry that elevate luxury and usability for every bedroom."
                },
                {
                q:"What makes the best wardrobe designers in Cuddalore unique?",
                a:" The best wardrobe designers in Cuddalore offer tailored solutions that merge style and practicality. KPK Enterprises delivers modular wardrobe interiors in Cuddalore, integrating custom finishes, sliding doors, and optimized storage layouts, making every wardrobe elegant, functional, and highly personalized."
                },
                {
                q:"Why hire luxury wardrobe interiors in Cuddalore?",
                a:" Luxury wardrobe interiors in Cuddalore by KPK Enterprises are crafted for elegance and efficiency. Our team of expert wardrobe designers in Cuddalore ensures high-quality materials, exquisite finishes, and modular solutions that transform bedrooms into sophisticated, personalized, and organized spaces."
                },
                {
                q:"Which sliding door wardrobe designers in Cuddalore offer durable solutions?",
                a:" KPK Enterprises, as sliding door wardrobe designers in Cuddalore, provides smooth, long-lasting, and stylish wardrobes. Our custom modular designs in Cuddalore combine innovative sliding mechanisms with premium materials, ensuring each wardrobe is durable, practical, and visually appealing for every home."
                },
                {
                q:"How do walk-in wardrobe designers in Cuddalore enhance luxury?",
                a:" Walk-in wardrobe designers in Cuddalore from KPK Enterprises create premium, spacious dressing areas. Using advanced modular layouts, luxury wardrobe interiors in Cuddalore, and tailored storage solutions, we provide homeowners with organized, functional, and aesthetically pleasing wardrobes that elevate every bedroom."
                },
                {
                q:"How do KPK Enterprises wardrobes stand out in Pondicherry?",
                a:" KPK Enterprises wardrobes stand out as best wardrobe designers in Pondicherry due to innovative modular layouts, sliding door wardrobes, and walk-in designs. Each project reflects careful planning, premium material use, and affordable yet luxury-inspired wardrobe interiors, making homes more organized and elegant."
                },
                {
                q:"What sets modular wardrobe designers in Pondicherry apart?",
                a:" Modular wardrobe designers in Pondicherry at KPK Enterprises deliver highly functional, stylish, and customized wardrobe solutions. With innovative designs, sliding and walk-in wardrobes, and premium finishes, we create practical storage solutions tailored to each homeowner’s preferences and lifestyle."
                },
                {
                q:"Why choose luxury wardrobe interiors in Pondicherry for your home?",
                a:" Luxury wardrobe interiors in Pondicherry from KPK Enterprises combine elegance, functionality, and premium craftsmanship. Our expert wardrobe designers in Pondicherry provide personalized modular solutions, sliding doors, and walk-in layouts that enhance bedroom aesthetics and offer unmatched convenience for modern homes."
                },
                
             ],



        Services: [
                    {
                    q:"Why choose affordable wardrobe interior designers in Pondicherry?",
                    a:" KPK Enterprises ranks among affordable wardrobe interior designers in Pondicherry, delivering cost-effective solutions without compromising quality. Our expert team provides personalized wardrobe solutions in Pondicherry, balancing modern aesthetics and practical storage options for budget-conscious homeowners seeking luxury-inspired interiors."
                    },
                    {
                    q:"Are expert wardrobe designers in Pondicherry suitable for new homes?",
                    a:" Absolutely. Expert wardrobe designers in Pondicherry at KPK Enterprises provide complete design consultations, planning, and installation. Whether for apartments or villas, our custom wardrobe designers in Pondicherry ensure each wardrobe complements your interiors while offering long-lasting functionality."
                    },
                    {
                    q:"How do custom wardrobe designers in Cuddalore improve home organization?",
                    a:" Custom wardrobe designers in Cuddalore create solutions that maximize storage efficiency. KPK Enterprises uses innovative modular designs and high-quality materials, ensuring your walk-in wardrobes and sliding wardrobes in Cuddalore provide organized, clutter-free, and visually appealing storage for modern homes."
                    },
                    {
                    q:"Are modular wardrobe designers in Cuddalore cost-effective?",
                    a:" Yes, modular wardrobe designers in Cuddalore deliver flexible, affordable solutions without sacrificing style. KPK Enterprises combines affordable wardrobe interiors in Cuddalore with modular adaptability, allowing homeowners to enjoy practical, modern, and customizable storage that suits any budget."
                    },
                    {
                    q:"Can expert wardrobe designers in Cuddalore handle complex designs?",
                    a:" Yes, expert wardrobe designers in Cuddalore at KPK Enterprises specialize in complex and custom designs. From sliding wardrobes to walk-in wardrobes, we craft modular solutions that reflect personal style, optimize storage, and enhance both functionality and visual appeal in modern Cuddalore homes."
                    },
                    {
                    q:"What are the benefits of personalized wardrobe solutions in Pondicherry?",
                    a:" Personalized wardrobe solutions in Pondicherry by KPK Enterprises offer tailored storage, unique finishes, and modular designs. Our custom wardrobe designers in Pondicherry ensure each wardrobe aligns with your lifestyle, space requirements, and interior aesthetics, creating highly functional and stylish storage options."
                    },
                    {
                    q:"Are affordable wardrobe interior designers in Cuddalore reliable?",
                    a:" Yes, KPK Enterprises is among the most trusted affordable wardrobe interior designers in Cuddalore, offering custom modular wardrobes that balance cost, style, and durability. Our expert team ensures seamless design, execution, and post-installation support for every home project."
                    }               
             ],









        Support: [
                    {
                    q:"Are affordable wardrobe interior designers in Cuddalore reliable?",
                    a:" Yes, KPK Enterprises is among the most trusted affordable wardrobe interior designers in Cuddalore, offering custom modular wardrobes that balance cost, style, and durability. Our expert team ensures seamless design, execution, and post-installation support for every home project."
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