import TvHeroBg from "../assets/pooja_tv_hero_images/TvHeroBg.png";

import PoojaTvCta_Image from "../assets/pooja_tv_cta_images/PoojaTvCta_Image.png";

// importing gallery images
import TvGallery_1 from "../assets/pooja_tv_gallery_images/TvGallery_1.png";
import TvGallery_2 from "../assets/pooja_tv_gallery_images/TvGallery_2.png";
import TvGallery_3 from "../assets/pooja_tv_gallery_images/TvGallery_3.png";
import TvGallery_4 from "../assets/pooja_tv_gallery_images/TvGallery_4.png";
import TvGallery_5 from "../assets/pooja_tv_gallery_images/TvGallery_5.png";
import TvGallery_6 from "../assets/pooja_tv_gallery_images/TvGallery_6.png";

// importing feedback images
import PoojaTvFeedback_1 from "../assets/pooja_tv_feedback_images/PoojaTvFeedback_1.png";
import PoojaTvFeedback_2 from "../assets/pooja_tv_feedback_images/PoojaTvFeedback_2.png";
import PoojaTvFeedback_3 from "../assets/pooja_tv_feedback_images/PoojaTvFeedback_3.png";


const TvUnitData = {

// meta tags 
  meta: {
    title: "TV Unit Interior Design",
    description: "Modern TV units with storage and lighting.",
    keywords: "tv unit design, wall mounted tv panel, interior"
  },


// hero section
  hero: {
    title: "Best TV Unit Designers in Pondicherry – KPK Enterprise",
    subtitle: "Modern, stylish, space-maximized TV setups",
    // Place image in public/images/tv/hero.jpg
    image: TvHeroBg,
  },



  // what we offer section
  offer: {
  description:
    "KPK Enterprise is recognized as the best TV unit designers in Pondicherry, creating stylish, functional, and modern TV units. Each design blends elegance, space efficiency, and premium craftsmanship for every home.",

  title: "What We Offer",

  items: [
    "Custom-designed TV panels",
    "Floating shelves & wall-mounted",
    "Concealed wire & device management",
    "Storage solutions for  set-top boxes, speakers & décor",
    "Modern, contemporary & minimalist styles"
  ]
},




// gallery section
gallery: {
  heading: "Your Home’s Spiritual Heart, Beautifully Designed",
  description:
    "If you’re seeking luxury pooja unit interiors in Pondicherry, KPK Enterprise stands out. Our designs feature premium finishes, modular layouts, and handcrafted details. With expert designers and 1000+ happy clients, we create elegant, functional spiritual spaces.",

  items: [
    {
      type: "image",
      title: "Modern Wall-Mounted Pooja Unit",
      description:
        "A sleek wall-mounted pooja unit designed with premium materials and space-saving elegance.",
      images: [TvGallery_1, TvGallery_2, TvGallery_3]
    },

    {
      type: "text",
      text: "A compact spiritual corner designed with serene simplicity."
    },

    {
      type: "image",
      title: "Compact Corner Pooja Setup",
      description:
        "Perfectly designed corner pooja units that blend spirituality with smart space utilization.",
      images: [TvGallery_4, TvGallery_5, TvGallery_6]
    },

    {
      type: "text",
      text: "Intricate woodwork brings divine charm into your home."
    },

    {
      type: "image",
      title: "Backlit Meditation Niche",
      description:
        "Soft backlighting enhances the sacred ambience, creating a peaceful meditation space.",
      images: [TvGallery_1, TvGallery_2, TvGallery_3]
    },

    {
      type: "image",
      title: "Traditional Carved Pooja Mandap",
      description:
        "Hand-carved pooja mandaps inspired by timeless traditional craftsmanship.",
      images: [TvGallery_4, TvGallery_5, TvGallery_6]
    },

    {
      type: "image",
      title: "Built-In Pooja Room",
      description:
        "Seamlessly integrated pooja rooms designed as part of your home’s architecture.",
      images: [TvGallery_1, TvGallery_2, TvGallery_3]
    },

    {
      type: "image",
      title: "Ornate Corner Pooja Setup",
      description:
        "Elegantly ornamented corner pooja designs that elevate spiritual aesthetics.",
      images: [TvGallery_4, TvGallery_5, TvGallery_6]
    },

    {
      type: "text",
      text: "Soft glow lighting for peaceful and calming moments."
    }
  ]
},



// feedback section
feedback: {
  tag: "Feedback",
  heading: "What Our Clients Say About KPK Enterprise",
  description:
    "Our clients in Pondicherry love how KPK Enterprise brings their interiors to life. From modular kitchens and wardrobes to TV units, pooja units, and study tables, every space is crafted with care, style, and functionality.",

  items: [
  { 
    id: 1, 
    name: 'Mr. Vignesh ', 
    title: 'House Owner', 
    text: '“Their custom wardrobe with soft-close fittings and factory-finish shutters looks premium. They listened patiently to our needs and delivered more than expected. Easily one of the most professional interior designers in Pondicherry.”', 
    image:PoojaTvFeedback_1
  },
  { 
    id: 2, 
    name: 'Mr. Aravind ', 
    title: 'MD- Aysha Construction Solutions', 
    text:'“The custom TV unit completely transformed my living room. The factory-finish panels look elegant and durable. Their professionalism, design clarity, and clean installation make them one of the best interior designers in Pondicherry.”', 
    image:PoojaTvFeedback_2
  },
  { 
    id: 3, 
    name: 'Mr. Surya ', 
    title: 'Home Owner', 
    text: '“They created a serene pooja unit and a stylish wardrobe for our bedroom. Excellent factory finish, neat execution, and kind communication. Truly the best home interior designers in Pondicherry for customized work.”', 
    image:PoojaTvFeedback_3
  },
  { 
    id: 4, 
    name: 'Mrs. Priya ', 
    title: 'Home Owner', 
    text: '“Our new TV unit with storage feels like a luxury showroom piece. The factory-finish quality, colors, and detailing were outstanding. Definitely the most affordable interior designers in Pondicherry without compromising quality or commitment.”', 
    image:PoojaTvFeedback_1
  },
  ]
},






// cta section
cta: {
  heading: "Design Your Dream TV Unit with Experts",
  description:
    "Start your TV unit design with KPK Enterprise in Pondicherry. Our expert designers create stylish, functional, and customized media spaces that enhance every living room.",
  buttonText: "Start My Interior Plan",
  image: PoojaTvCta_Image
},




// faq section
faq: {
  tabs: ["Designs", "Services", "Support"],
  data: {
    Designs: [
      {
        q: "What makes KPK Enterprise the best TV unit designers in Pondicherry?",
        a: "KPK Enterprise is recognized as one of the best TV unit designers in Pondicherry, delivering stylish, functional, and custom TV units. Our expert designers specialize in modular, luxury, and personalized interiors that elevate living spaces with premium materials and innovative layouts."
      },
      {
        q: "How do custom TV unit designers in Pondicherry personalize interiors?",
        a: "Custom TV unit designers in Pondicherry at KPK Enterprise craft TV units tailored to home layouts, aesthetics, and functionality. From ambient lighting to modular storage, every design blends elegance, practicality, and modern style for contemporary living rooms."
      },
      {
        q: "Why choose modular TV units in Pondicherry for your home?",
        a: "Modular TV units in Pondicherry by KPK Enterprise provide flexible, space-efficient solutions with sleek designs. Our professional designers integrate storage, display areas, and premium finishes, creating functional, visually appealing, and long-lasting media interiors for every modern home."
      },
      {
        q: "How do luxury TV unit interiors in Pondicherry enhance home aesthetics?",
        a: "Luxury TV unit interiors in Pondicherry by KPK Enterprise combine premium finishes, innovative layouts, and functional storage. Our designers create elegant, modern media spaces that elevate the style and ambiance of living rooms while maximizing usability and aesthetic appeal."
      },
      {
        q: "What sets modern TV unit designs in Pondicherry apart?",
        a: "Modern TV unit designs in Pondicherry focus on minimalism, sleek finishes, and smart layouts. KPK Enterprise integrates modular storage, ambient lighting, and custom craftsmanship, delivering contemporary, functional, and elegant media spaces that complement the overall home décor."
      },
      {
        q: "Are personalized TV units in Pondicherry suitable for small spaces?",
        a: "Absolutely. Personalized TV units in Pondicherry by KPK Enterprise optimize limited spaces through modular designs and tailored layouts. Our professional designers ensure compact yet elegant media solutions, maintaining aesthetic appeal, functionality, and seamless integration with modern interiors."
      },
      {
        q: "What makes the best TV unit designers in Cuddalore stand out?",
        a: "The best TV unit designers in Cuddalore combine creativity, functionality, and premium materials. KPK Enterprise delivers modular, personalized, and luxury TV unit interiors, ensuring every design enhances home aesthetics while offering efficient storage, durability, and contemporary appeal."
      },
      {
        q: "How do custom TV unit designers in Cuddalore personalize spaces?",
        a: "Custom TV unit designers in Cuddalore at KPK Enterprise tailor layouts to fit room dimensions, style preferences, and practical needs. Our designers integrate modular storage, ambient lighting, and premium finishes to create elegant, functional, and modern media interiors."
      },
      {
        q: "What are the advantages of modular TV units in Cuddalore?",
        a: "Modular TV units in Cuddalore maximize space, adaptability, and style. KPK Enterprise designs functional media interiors with smart storage, sleek layouts, and premium materials, ensuring elegant, durable, and practical solutions for modern living rooms across Cuddalore homes."
      },
      {
        q: "How do luxury TV unit interiors in Cuddalore elevate homes?",
        a: "Luxury TV unit interiors in Cuddalore by KPK Enterprise combine premium materials, bespoke modular layouts, and ambient lighting. Our expert designers create elegant, contemporary media spaces that enhance both functionality and aesthetic appeal in modern homes."
      },
      {
        q: "Why choose modern TV unit designs in Cuddalore?",
        a: "Modern TV unit designs in Cuddalore focus on minimalist aesthetics, space efficiency, and functional elegance. KPK Enterprise integrates modular storage, sleek finishes, and innovative layouts, providing homeowners with stylish, durable, and contemporary media spaces."
      },
      {
        q: "Are personalized TV units in Cuddalore suitable for large homes?",
        a: "Yes. Personalized TV units in Cuddalore by KPK Enterprise are designed to fit large living spaces, blending luxury, modularity, and functionality. Our expert designers create elegant, spacious, and practical media interiors that complement modern home interiors."
      },
      {
        q: "How do designers integrate elegance and functionality in TV units?",
        a: "KPK Enterprise TV unit designers in Pondicherry and Cuddalore combine aesthetics, functionality, and modular innovation. Each design integrates ambient lighting, storage solutions, and premium finishes, delivering modern, elegant, and practical media spaces tailored to homeowners’ lifestyles."
      },
      {
        q: "Why are professional TV unit designers important for modern homes?",
        a: "Professional TV unit designers in Pondicherry and Cuddalore ensure every media space is functional, stylish, and personalized. KPK Enterprise delivers modular, custom, luxury, and modern interiors, enhancing living rooms with practical layouts and premium craftsmanship."
      },

    ],
    Services: [
      {
        q: "Can affordable TV unit designers in Pondicherry deliver high-quality interiors?",
        a: "Yes. KPK Enterprise’s affordable TV unit designers in Pondicherry provide stylish, practical, and modular solutions within budget. Each design focuses on optimal functionality, modern aesthetics, and durable materials, ensuring homeowners receive high-value, elegant, and long-lasting TV unit interiors."
      },
      {
        q: "How long does it take to complete a TV unit project in Pondicherry?",
        a: "Project timelines for TV units in Pondicherry vary depending on design complexity. KPK Enterprise ensures efficient execution, from conceptual layouts to modular installation, delivering luxury, modern, and personalized TV unit interiors within agreed schedules without compromising quality."
      },
      {
        q: "Are TV unit designers in Cuddalore available for local home projects?",
        a: "Yes. KPK Enterprise provides expert TV unit designers in Cuddalore who specialize in modular, custom, and luxury TV unit interiors. Homeowners benefit from professional designs that balance functionality, style, and elegance, creating modern media spaces for every living room."
      },
      {
        q: "Can affordable TV unit designers in Cuddalore provide premium results?",
        a: "Yes. KPK Enterprise’s affordable TV unit designers in Cuddalore create stylish, functional, and modular interiors without exceeding budgets. Every design balances practicality, elegance, and durability, offering homeowners high-quality, customized TV unit interiors suitable for modern living spaces."
      },
      {
        q: "Can KPK Enterprise handle TV unit projects in both Pondicherry and Cuddalore?",
        a: "Absolutely. KPK Enterprise provides professional TV unit designers across Pondicherry and Cuddalore. From luxury and modern to custom and modular designs, our team ensures stylish, functional, and long-lasting media interiors for every home."
      },
    ],
    Support: [
      {
        q: "Do TV unit designers in Pondicherry offer post-installation support?",
        a: "Yes. KPK Enterprise offers continued support for TV unit interiors in Pondicherry. Our team provides maintenance guidance, adjustments, and quality checks, ensuring functional, durable, and stylish media spaces long after installation."
      },
    ]
  }
}

};

export default TvUnitData;
