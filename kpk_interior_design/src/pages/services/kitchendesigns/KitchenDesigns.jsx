import React, { useEffect, useState } from "react";
import './KitchenDesigns.css'
import sleektouch1 from '../../../assets/services/images/kitsl1.png'
import sleektouch11 from '../../../assets/services/images/kitsl11.png'
import boldtwostructure2 from '../../../assets/services/images/kitsl2.png'
import boldtwostructure22 from '../../../assets/services/images/kitsl22.png'
import hybridmodular3 from '../../../assets/services/images/kitsl3.png'
import hybridmodular33 from '../../../assets/services/images/kitsl33.png'
import openshelf4 from '../../../assets/services/images/kitsl4.png'
import openshelf44 from '../../../assets/services/images/kitsl44.png'
import multifunction5 from '../../../assets/services/images/kitsl5.png'
import multifunction55 from '../../../assets/services/images/kitsl55.png'
import premiumstone6 from '../../../assets/services/images/kitsl6.png'
import premiumstone66 from '../../../assets/services/images/kitsl66.png'
import ImageHeroSec from "../../imageview/imageherosec/ImageHeroSec";
import ImageShow from "../../imageview/ImageShow";

function KitchenDesigns(){

    
    const designdata = [
    { 
      id: 1, 
      image: [sleektouch1,sleektouch11],
      title: 'Sleek Soft-Touch Kitchen', 
      description: 'Blends matte surfaces crafted for a calm cooking experience.' 
    },
    { 
      id: 2, 
      image: [boldtwostructure2,boldtwostructure22], 
      title: 'Bold Two-Texture Kitchen', 
      description: 'Striking blend of textures that define instant character.' 
    },
    { 
      id: 3, 
      image: [hybridmodular3,hybridmodular33], 
      title: 'Hybrid Modular Workspace', 
      description: 'Perfect blend of prep zones and smart storage flow.' 
    },
    { 
      id: 4, 
      image: [openshelf4,openshelf44], 
      title: 'Open-Shelf Modern Kitchen', 
      description: 'A light, airy design with easy-access open storage.' 
    },
    { 
      id: 5, 
      image: [multifunction5,multifunction55], 
      title: 'Multi-Functional Compact Layout', 
      description: 'Designed to do more in less space without losing style.' 
    },
    { 
      id: 6, 
      image: [premiumstone6,premiumstone66], 
      title: 'Premium Stone-Top Modular Kitchen', 
      description: 'A rich stone counter that blends luxury with durability.' 
    }]

      const [currentView, setCurrentView] = useState('list'); 

        const [selectedIdea, setSelectedIdea] = useState(designdata[0]);



  // 1. Switches to the Detail View and stores the selected data
  const handleCardClick = (idea) => {
    setSelectedIdea(idea); // Save the full idea object
    setCurrentView('detail'); // "Redirect" to the new page
  };

  // 2. Switches back to the List View
  const handleBackClick = () => {
    setCurrentView('list');
  };

   if (currentView === 'detail'){
    return (
        <>
        <div className="min-h-screen bg-gray-100 p-4 sm:p-8 font-inter">

        <ImageShow image={selectedIdea}/>
        </div>
        </>
    )
   }

    return(
        <>
            <div className="kitchen_design_section2">
                <div className="design_main_content2">
                    <h2 className="design_header2">
                        Top Modular Kitchen Design Ideas for Every Space
                    </h2>
                    <p className="design_content2">
                        If you're looking for luxury modular kitchen design in Pondicherry, KPK Enterprises stands out. 
                        Their designs include ergonomic layouts, premium materials, and smart storage solutions, 
                        making every kitchen functional, stylish, and personalized.
                    </p>
                </div>
                <div className="designs_grid2">
                    {designdata.map((data)=>(
                        <div className="design_card2" key={data.id}>
                            <div className="design_image_wrapper2">
                                <div className="slide_cont2"  onClick={() => handleCardClick(data)} >
                                   <img src={data.image[0]} alt="" className="slide_img2"/>
                                    <img src={data.image[1]} alt="" className="slide_img2" />
                                </div>
                            </div>
                            <div className="card_content2">
                                <h3 className="card_title2">{data.title}</h3>
                                <p className="card_description2">{data.description}</p>
                            </div>
                            <hr />
                            <button onClick={() => handleCardClick(data)} className="design_button2">Get This Design</button>
                        </div>
                    ))}
                </div>
            </div>

  
        </>
    )
}

export default KitchenDesigns