//css
// import '../../services/faq/Faq.css'
import '../../../components/pooja_tv_faq/PoojaTvFaq.css'

//icons
import { FaChevronDown,FaChevronUp } from "react-icons/fa";

//state
import { useState } from 'react';


export default function HomeFaq() {
 const tabs = ["Services", "Expertise", "Consultation"];
 //selected  categories are stored in setactiveTap
const [activeTab, setActiveTab] = useState("Services");
//present data are shown setopen
const [openIndex, setOpenIndex] = useState(null);


const data = {
        Services:[
             {
 q:"What makes KPK Enterprise the best interior designer in Pondicherry for 2025?",
 a:"KPK Enterprise is the top recognized interior design company in Pondicherry for 2025 because of its premium materials, customized modular kitchen designs, and expert project execution. Led by professional designers, it provides modular kitchens, wardrobes, TV units, pooja units, and study tables. Homeowners achieve stylish, functional interiors supported by 3000+ satisfied clients.",
},
{
q:"How does KPK Enterprise deliver top interior designs in Pondicherry?",
 a:"KPK Enterprise is recognized as a top interior designer in Pondicherry, providing modular kitchens, space-saving wardrobes, luxury TV units, elegant pooja units, and functional study tables. Its design process integrates innovative planning, durable materials, and professional execution. Homeowners enjoy stylish, practical, and organized interiors backed by proven expertise.",
},
{
 q:"Are KPK Enterprise’s interiors affordable for homeowners in Pondicherry?",
 a:"KPK Enterprise is a leading affordable interior designer in Pondicherry, delivering high-quality modular kitchens, wardrobes, TV units, pooja units, and study tables at competitive pricing. Its solutions blend budget-conscious planning with durable finishes and elegant aesthetics. Clients benefit from cost-effective yet premium designs without compromising on quality or functionality.",
},
{
q:"Can KPK Enterprise create customized modular kitchens in Pondicherry?",
a:" Yes, KPK Enterprise is among the top modular kitchen designers in Pondicherry, specializing in fully customized layouts. Its team ensures ergonomic designs, premium finishes, and practical storage solutions. Clients experience kitchens tailored to their lifestyle, offering smooth workflow, aesthetic appeal, and maximum space utilization, supported by expert guidance from professional interior designers.",
},
{
q:"Which types of wardrobes can KPK Enterprise design in Pondicherry?",
 a:"KPK Enterprise is a professional wardrobe designer in Pondicherry, offering space-saving wardrobes, walk-in closets, and modular storage solutions. Its designs optimize room layouts while maintaining style and functionality. Clients gain personalized interiors supported by durable materials, precise installation, and practical configurations suitable for modern homes and apartments.",
},
{
q:"How can KPK Enterprise enhance living spaces with TV units in Pondicherry?",
a:" KPK Enterprise provides luxury TV units in Pondicherry, combining sleek design with functional storage. Its designers craft units tailored to living rooms, offering cable management, durable finishes, and premium aesthetics. Homeowners benefit from organized, stylish media spaces, ensuring seamless integration of entertainment solutions with the overall interior decor.",
},
{
q:"What makes KPK Enterprise’s pooja units unique in Pondicherry?",
a:" KPK Enterprise is recognized for elegant pooja units in Pondicherry, designed with traditional aesthetics and modern practicality. Each unit features durable finishes, precise layouts, and intricate craftsmanship. Clients enjoy serene, organized sacred spaces that blend seamlessly with home interiors, supported by expert installation and premium material assurance from professional designers.",
},
{
q:"Why are KPK Enterprise study tables ideal for Pondicherry homes?",
a:" KPK Enterprise provides functional study tables in Pondicherry, combining ergonomic design, storage efficiency, and stylish finishes. Its modular solutions suit children’s rooms, home offices, and apartments, promoting organized learning spaces. Clients experience durable, practical furniture crafted by professional interior designers, enhancing productivity and blending perfectly with modern interiors.",
},
{
q:"Why trust KPK Enterprise for commercial interiors in Pondicherry?",
a:" KPK Enterprise is a leading interior design company in Pondicherry delivering commercial interiors with precision, durability, and style. From office modular kitchens and storage wardrobes to elegant pooja units and functional study tables for workspaces, it ensures efficient, professional spaces. Businesses achieve productive, visually appealing environments supported by expert designers.",
},
{
q:"Which services does KPK Enterprise offer for apartments in Pondicherry?",
a:" KPK Enterprise specializes in space-efficient interiors for apartments in Pondicherry, including customized modular kitchens, wardrobes, TV units, pooja units, and study tables. Its professional team focuses on maximizing functionality, aesthetic appeal, and durability. Clients enjoy organized, stylish apartments designed by trusted interior designers in Pondicherry.",
},
{
q:"Can KPK Enterprise deliver end-to-end home interiors in Pondicherry?",
a:" Yes, KPK Enterprise is a full-service interior design company in Pondicherry, providing end-to-end solutions including modular kitchens, wardrobes, TV units, pooja units, and study tables. Its professional designers manage planning, installation, and finishing. Clients enjoy stylish, functional, and durable interiors tailored to their needs with continued support post-completion.",
},
        ],
        Expertise:[
            {
q:"Why should I choose KPK Enterprise among interior designers in Pondicherry?",
 a:"KPK Enterprise is one of the leading interior designers in Pondicherry, offering creative, functional, and luxury-ready solutions. With modular kitchen designers, wardrobe designers, and study table experts, its team ensures precise layouts and high-quality finishes. Clients receive personalized guidance, ensuring efficient space utilization and long-lasting interiors.",
 },
{
q:"How experienced is KPK Enterprise in handling home interiors in Pondicherry?",
a:" KPK Enterprise is a top home interior designer in Pondicherry with extensive experience in modular kitchens, wardrobes, TV units, pooja units, and study tables. Its team delivers client-focused solutions, ensuring high-quality finishes, precise execution, and stylish interiors. Over 3000+ satisfied clients validate its reputation for premium, reliable interior design services.",
},
{
q:"Can KPK Enterprise handle luxury interior projects in Pondicherry?",
a:" KPK Enterprise is among the leading luxury interior designers in Pondicherry, offering bespoke modular kitchens, wardrobes, TV units, pooja units, and study tables. Its expert team uses premium materials, precise craftsmanship, and innovative layouts. Clients achieve opulent yet functional interiors supported by professional guidance and long-lasting, stylish solutions.",
},
{
q:"How does KPK Enterprise maintain quality in modular kitchen projects in Pondicherry?",
 a:"KPK Enterprise, a professional modular kitchen designer in Pondicherry, ensures top-quality execution through premium materials, factory-finished components, and meticulous planning. Its expert team crafts customized kitchens tailored to client needs. Homeowners receive durable, practical, and visually appealing spaces with seamless installation and continued post-completion support.",
},
{
q:"How does KPK Enterprise ensure smooth project execution in Pondicherry?",
a:"KPK Enterprise is recognized as a top interior design company in Pondicherry, offering structured project management for modular kitchens, wardrobes, TV units, pooja units, and study tables. Its team maintains timelines, quality checks, and client communication, ensuring seamless interiors. Homeowners experience stress-free renovations supported by expert guidance and professional execution.",
},
{
q:"Are KPK Enterprise’s interiors aligned with modern trends in Pondicherry?",
a:" KPK Enterprise is a recognized interior designer in Pondicherry, offering modern, trend-aligned interiors. From contemporary modular kitchens and wardrobes to luxury TV units, elegant pooja units, and functional study tables, each space reflects current design standards. Clients benefit from stylish, functional, and innovative interiors supported by professional design expertise.",
},

{
q:"How customizable are KPK Enterprise interiors in Pondicherry?",
a:" KPK Enterprise provides highly customizable interiors in Pondicherry, including modular kitchens, wardrobes, TV units, pooja units, and study tables. Each project is tailored to client preferences, space requirements, and lifestyle. Homeowners receive unique, practical, and visually appealing interiors supported by expert designers and premium-quality materials.",
},
{
q:"What is the advantage of hiring KPK Enterprise for Pondicherry homes?",
a:" KPK Enterprise is one of the most trusted interior designers in Pondicherry, offering premium modular kitchens, wardrobes, TV units, pooja units, and study tables. Clients gain expert guidance, high-quality materials, precise execution, and stylish designs. Homeowners achieve elegant, functional, and durable interiors with full professional support.",
}
        ],
        Consultation:[
            {
q:"How do I book a consultation with KPK Enterprise in Pondicherry?",
a:" KPK Enterprise offers personalized interior consultations in Pondicherry for modular kitchens, wardrobes, TV units, pooja units, and study tables. Clients can book online or via direct contact. Each consultation ensures tailored solutions, design guidance, and practical recommendations, providing homeowners with premium, stylish, and fully functional interiors designed by professional interior designers.",
}

        ]
}

  return (
  <>
       {/* Header */}
       <section className="pt-faq-header">
         <p className="pt-faq-pill">FAQ</p>
         <h2 className="pt-faq-title">Frequently Asked Questions</h2>
       </section>
 
       {/* Tabs */}
       <div className="pt-faq-tabs">
         {tabs.map((tab) => (
           <button
             key={tab}
             className={`pt-faq-tab ${activeTab === tab ? "active" : ""}`}
             onClick={() => {
               setActiveTab(tab);
               setOpenIndex(0);
             }}
           >
             {tab}
           </button>
         ))}
       </div>
 
       {/* FAQ List */}
       <div className="pt-faq-list">
         {data[activeTab].map((item, index) => (
           <div
             key={index}
             className="pt-faq-box"
             onClick={() =>
               setOpenIndex(openIndex === index ? null : index)
             }
           >
             <div className="pt-faq-question">
               <span>{item.q}</span>
               {openIndex === index ? <FaChevronUp /> : <FaChevronDown  />}
             </div>
 
             {openIndex === index && (
               <div className="pt-faq-answer">
                 <p>{item.a}</p>
               </div>
             )}
           </div>
         ))}
       </div>
     </>
  )
}