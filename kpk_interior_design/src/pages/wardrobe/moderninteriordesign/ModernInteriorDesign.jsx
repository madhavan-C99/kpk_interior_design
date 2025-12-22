import React, { useEffect, useState } from "react";
import '../../services/kitchendesigns/KitchenDesigns.css'
import sleektouch1 from '../../../assets/services/images/warsl1.png'
import sleektouch11 from '../../../assets/services/images/warsl11.png'
import boldtwostructure2 from '../../../assets/services/images/warsl2.png'
import boldtwostructure22 from '../../../assets/services/images/warsl22.png'
import hybridmodular3 from '../../../assets/services/images/warsl3.png'
import hybridmodular33 from '../../../assets/services/images/warsl33.png'
import openshelf4 from '../../../assets/services/images/warsl4.png'
import openshelf44 from '../../../assets/services/images/warsl44.png'
import multifunction5 from '../../../assets/services/images/warsl5.png'
import multifunction55 from '../../../assets/services/images/warsl55.png'
import premiumstone6 from '../../../assets/services/images/warsl6.png'
import premiumstone66 from '../../../assets/services/images/warsl66.png'

function ModernInteriorDesign(){

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
                        by KPK Enterprises, specialising in customised interior design solutions.
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
                            <button className="design_button2">Get This Design</button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default ModernInteriorDesign;