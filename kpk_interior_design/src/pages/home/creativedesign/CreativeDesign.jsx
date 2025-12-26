import React from "react";

import { useState } from "react";
import './CreativeDesign.css'
import { useNavigate } from "react-router-dom";
// kitchen images
import kitchen1img from '../../../assets/home/images/kitchen1.png';     
import kitchen2img from '../../../assets/home/images/kitchen2.png';  
import kitchen3img from '../../../assets/home/images/kitchen3.png'; 
import kitchen4img from '../../../assets/home/images/kitchen4.png'; 

// Wardrobe images
import wardrobe1img from '../../../assets/services/images/wardrobe1.png';
import wardrobe2img from '../../../assets/services/images/wardrobe2.png';
import wardrobe3img from '../../../assets/services/images/wardrobe3.png';
import wardrobe4img from '../../../assets/services/images/wardrobe4.png';


// pooja images
import pooja1img from '../../../assets/services/images/pooja1.png'
import pooja2img from '../../../assets/services/images/pooja2.png'
import pooja3img from '../../../assets/services/images/pooja3.png'
import pooja4img from '../../../assets/services/images/pooja4.png'

// tv images
import tv1img from '../../../assets/services/images/tv1.png'
import tv2img from '../../../assets/services/images/tv2.png'
import tv3img from '../../../assets/services/images/tv3.png'
import tv4img from '../../../assets/services/images/tv4.png'

// study table
import studytb1 from '../../../assets/services/images/studytb1.png'
import studytb2 from '../../../assets/services/images/studytb2.png'
import studytb3 from '../../../assets/services/images/studytb3.png'
import studytb4 from '../../../assets/services/images/studytb4.png'

function CreativeDesign(){
    const navigate = useNavigate();
    const categorydata=[
        {
            id:1,
            label:'modular Kitchen',
            images:[{ id: "Home-Modular-Kitchen-001", name: 'Sleek Soft-Touch Kitchen', img: kitchen1img },
                    { id: "Home-Modular-Kitchen-002", name: 'Bold Two-Texture Kitchen', img: kitchen2img },
                    { id: "Home-Modular-Kitchen-003", name: 'Hybrid Modular Workspace', img: kitchen3img },
                    { id: "Home-Modular-Kitchen-004", name: 'Minimal Navy And Grey Wall Colour', img: kitchen4img },
                    ]
        },
        {
            id:2,
            label:'wardrobe',
            images:[{ id: "Home-Wardrobe-001", name: 'Sleek Sliding Wardrobe', img: wardrobe1img},
                    { id: "Home-Wardrobe-002", name: 'Premium Walk-In Closet', img: wardrobe2img },
                    { id: "Home-Wardrobe-003", name: 'Matte Finish Wardrobe', img: wardrobe3img },
                    { id: "Home-Wardrobe-004", name: 'Glass-Front Closet Style', img: wardrobe4img },
                    ]
        },
        {
            id:3,
            label:'pooja unit',
           images:[ { id: "Home-Pooja-001", name: 'Traditional Carved Pooja Mandap', img: pooja1img },
                    { id: "Home-Pooja-002", name: 'Compact Corner Pooja Setup', img: pooja2img },
                    { id: "Home-Pooja-003", name: 'Modern Wall-Mounted Pooja Unit', img: pooja3img },
                    { id: "Home-Pooja-004", name: 'Backlit Meditation Niche', img: pooja4img },
                ]
        },
        {
            id:4,
            label:'TV unit',
           images:[ { id: "Home-Tv-001", name: 'Glossy Modern Entertainment Hub', img: tv1img },
                    { id: "Home-Tv-002", name: 'Floating Panel Elegance', img: tv2img },
                    { id: "Home-Tv-003", name: 'Dual-Tone Media Wall', img: tv3img },
                    { id: "Home-Tv-004", name: 'Contemporary Storage Console', img: tv4img },

                ]
        },
        {
            id:5,
            label:'Study Table',
            images:[{ id: "Home-Study-Table-001", name: 'Integrated Storage with Study', img: studytb1 },
                    { id: "Home-Study-Table-002", name: 'Compact Storage Study Unit', img: studytb2 },
                    { id: "Home-Study-Table-003", name: 'Modern Storage Workstation', img: studytb3 },
                    { id: "Home-Study-Table-004", name: 'Built-In Study Storage Design', img: studytb4 },
                ]
        }
]

    // images section function
    const [activeCategoryId, setActiveCategoryId] = useState(categorydata[0].id);

    // get the activeIndex data from categorydata array
    const getCategorydata = (id) => categorydata.find(item => item.id === id);
    const activeCategory = getCategorydata(activeCategoryId);

    // change the state
    const handleCategoryClick = (id) => {
        setActiveCategoryId(id);
    };

    // get the active button id to change the color
    const getButtonClass = (id) => id === activeCategoryId ? 'category_button2 active' : 'creativedesign_catbtn2';


    // const navigate=useNavigate();
    const handleClick=()=>{
          window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        console.log("check");
        navigate("/image/expolre",{state: {selectedCategory:activeCategory}});
        console.log("check2");
        console.log(activeCategoryId)

    }
    return(
        <>
            <div className="creativedesign_container2">
                <div className="creativedesign_textwrap2">
                    <h2 className="creativedesign_title2">
                        KPK Enterprises: Creative Design Ideas 
                        for Every Corner of Your Home
                    </h2>
                    <p className="creativedesign_desc2">
                        We bring every corner of your home to 
                        life with thoughtful, practical, and 
                        stylish interior solutions. From modular 
                        kitchens and wardrobes to TV units, pooja 
                        units, and study tables, each space is designed to inspire.
                    </p>
                    <div className="creativedesign_btnswrapper2">
                        <button className={getButtonClass(1)} onClick={()=>handleCategoryClick(1)}>Modular Kitchen</button>
                        <button className={getButtonClass(2)} onClick={()=>handleCategoryClick(2)}>Wardrobe</button>
                        <button className={getButtonClass(3)} onClick={()=>handleCategoryClick(3)}>Pooja Unit</button>
                        <button className={getButtonClass(4)} onClick={()=>handleCategoryClick(4)}>Tv Unit</button>
                        <button className={getButtonClass(5)} onClick={()=>handleCategoryClick(5)}>Study Table</button>
                    </div>
                </div>
                <div className="creativedesign_grid2">
                    {activeCategory.images.map(data=>(
                        <div className="creativedesign_card2">

                            <img src={data.img} alt="" className="creativedesign_img2" 
                            onClick={() => navigate(`/design/${data.id}`, 
                                { state: {source: "home", subcategory: activeCategory.label }})} />

                            <p className="creativedesign_cardtitle2">{data.name}</p>
                        </div>
                    ))}
                </div>
                <div className="creativedesign_btnwrap2">
                    <button className="creativedesign_morebtn2" onClick={handleClick}>Explore More Design</button>
                </div>
            </div>
        </>
    )
}

export default CreativeDesign