import React, { useEffect, useState } from "react";
import './KitchenDesigns.css'
import sleektouch from '../../../assets/services/images/Frame 1000012428.png'
import boldtwostructure from '../../../assets/services/images/Frame 1000028.png'
import hybridmodular from '../../../assets/services/images/Frame 1000012429.png'
import openshelf from '../../../assets/services/images/Frame 1000012430.png'
import multifunction from '../../../assets/services/images/Frame 10000128.png'
import premiumstone from '../../../assets/services/images/Frame 10012428.png'

function KitchenDesigns(){

    const designdata = [
    { 
      id: 1, 
      image: [sleektouch,boldtwostructure],
      title: 'Sleek Soft-Touch Kitchen', 
      description: 'Blends matte surfaces crafted for a calm cooking experience.' 
    },
    { 
      id: 2, 
      image: [boldtwostructure,hybridmodular], 
      title: 'Bold Two-Texture Kitchen', 
      description: 'Striking blend of textures that define instant character.' 
    },
    { 
      id: 3, 
      image: [hybridmodular,openshelf], 
      title: 'Hybrid Modular Workspace', 
      description: 'Perfect blend of prep zones and smart storage flow.' 
    },
    { 
      id: 4, 
      image: [openshelf,multifunction], 
      title: 'Open-Shelf Modern Kitchen', 
      description: 'A light, airy design with easy-access open storage.' 
    },
    { 
      id: 5, 
      image: [multifunction,premiumstone], 
      title: 'Multi-Functional Compact Layout', 
      description: 'Designed to do more in less space without losing style.' 
    },
    { 
      id: 6, 
      image: [premiumstone,multifunction], 
      title: 'Premium Stone-Top Modular Kitchen', 
      description: 'A rich stone counter that blends luxury with durability.' 
    }]

    return(
        <>
            <div className="kitchen_design_section2">
                <div className="design_main_content2">
                    <h2 className="design_header2">
                        Top Modular Kitchen Design Ideas for Every Space
                    </h2>
                    <p className="design_content2">
                        If you're looking for luxury modular kitchen design in Pondicherry, KPK Enterprise stands out. 
                        Their designs include ergonomic layouts, premium materials, and smart storage solutions, 
                        making every kitchen functional, stylish, and personalized.
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

export default KitchenDesigns