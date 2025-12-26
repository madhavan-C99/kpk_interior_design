import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import '../../services/kitchendesigns/KitchenDesigns.css'
import sleekslide1 from '../../../assets/services/images/warsl1.png'
import sleekslide11 from '../../../assets/services/images/warsl11.png'
import premiumwalk2 from '../../../assets/services/images/warsl3.png'
import premiumwalk22 from '../../../assets/services/images/warsl33.png'
import mattefinish3 from '../../../assets/services/images/warsl2.png'
import mattefinish33 from '../../../assets/services/images/warsl22.png'
import glassfront4 from '../../../assets/services/images/warsl6.png'
import glassfront44 from '../../../assets/services/images/warsl66.png'
import cornerfit5 from '../../../assets/services/images/warsl5.png'
import cornerfit55 from '../../../assets/services/images/warsl55.png'
import dualtone6 from '../../../assets/services/images/warsl4.png'
import dualtone66 from '../../../assets/services/images/warsl44.png'

function ModernInteriorDesign(){

    const navigate = useNavigate();

    const designdata = [
    { 
      id: "Wardrobe-001", 
      image: [sleekslide1,sleekslide11],
      title: 'Sleek Sliding Wardrobe', 
      description: 'Smooth sliding doors offering modern style and efficiency' 
    },
    { 
      id: "Wardrobe-002", 
      image: [premiumwalk2,premiumwalk22], 
      title: 'Premium Walk-In Closet ', 
      description: 'Spacious walk-in closet delivering luxury organization and comfort' 
    },
    { 
      id: "Wardrobe-003", 
      image: [mattefinish3,mattefinish33], 
      title: 'Matte Finish Wardrobe ', 
      description: 'Matte finish wardrobe offering calm elegance refined appeal' 
    },
    { 
      id: "Wardrobe-004", 
      image: [glassfront4,glassfront44], 
      title: 'Glass-Front Closet Style ', 
      description: 'Glass-front closet style showcasing modern elegance and visibility' 
    },
    { 
      id: "Wardrobe-005", 
      image: [cornerfit5,cornerfit55], 
      title: 'Neutral Tone Closet ', 
      description: 'Corner fit wardrobe maximizing unused space with storage' 
    },
    { 
      id: "Wardrobe-006", 
      image: [dualtone6,dualtone66], 
      title: 'Minimal Open Wardrobe ', 
      description: 'Dual tone closet design blending contrast style balance' 
    }]

    return(
        <>
            <div className="kitchen_design_section2">
                <div className="design_main_content2">
                    <h2 className="design_header2">
                        Spaces We’ve Transformed with Modern Interior Design
                    </h2>
                    <p className="design_content2">
                        From stylish, space-optimised rooms to fully upgraded 
                        modular interiors, our transformed spaces showcase smart 
                        layouts and factory-finish detailing, professionally crafted 
                        by KPK Enterprise, specialising in customised interior design solutions.
                    </p>
                </div>
                <div className="designs_grid2">
                    {designdata.map((data)=>(
                        <div className="design_card2" key={data.id}>
                            <div className="design_image_wrapper2">
                                <div className="slide_cont2">
                                   <img src={data.image[0]} alt="" className="slide_img2"/>
                                    <img src={data.image[1]} alt="" className="slide_img2" />
                                </div>
                            </div>
                            <div className="card_content2">
                                <h3 className="card_title2">{data.title}</h3>
                                <p className="card_description2">{data.description}</p>
                            </div>
                            <hr />

                            <button className="design_button2"
                            onClick={() =>
                                navigate(`/design/${data.id}`, {
                                    state: { source: "services", subcategory: "Wardrobe-unit"}})}>
                                        Design Preview
                                        </button>


                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ModernInteriorDesign;