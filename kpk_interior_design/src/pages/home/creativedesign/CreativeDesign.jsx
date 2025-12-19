import React from "react";
import { useState } from "react";
import './CreativeDesign.css'
import { useNavigate } from "react-router-dom";
// kitchen images
import kitchen1img from '../../../assets/home/images/Frame 1000012086.png'
import kitchen2img from '../../../assets/home/images/Frame 1000012086-1.png'
import kitchen3img from '../../../assets/home/images/Frame 1000012091.png'
import kitchen4img from '../../../assets/home/images/Frame 1000012091-1.png'
import kitchen5img from '../../../assets/home/images/Frame 1000012092.png'
import kitchen6img from '../../../assets/home/images/Frame 1000012092-1.png'
import kitchen7img from '../../../assets/home/images/Frame 1000012093.png'
import kitchen8img from '../../../assets/home/images/Frame 1000012093-1.png'

// Wardrobe images
import wardrobe1img from '../../../assets/services/images/Frame 1000012402.png'; 
import wardrobe2img from '../../../assets/services/images/image 17125.png';
import wardrobe3img from '../../../assets/services/images/Frame 1000012404.png';
import wardrobe4img from '../../../assets/services/images/Frame 1000012403.png';
import wardrobe5img from '../../../assets/services/images/Frame 100001242.png';
import wardrobe6img from '../../../assets/services/images/Frame 100001240.png';
import wardrobe7img from '../../../assets/services/images/Frame 10000122.png';
import wardrobe8img from '../../../assets/services/images/Frame 10012402.png';

// pooja images
import pooja1img from '../../../assets/services/images/Frame 1000012931.png'
import pooja2img from '../../../assets/services/images/Frame 1000012936.png'
import pooja3img from '../../../assets/services/images/Frame 1000012938.png'
import pooja4img from '../../../assets/services/images/Frame 1000012939.png'
import pooja5img from '../../../assets/services/images/Frame 1000012942.png'
import pooja6img from '../../../assets/services/images/Frame 1000012945.png'
import pooja7img from '../../../assets/services/images/Frame 1000012949.png'
import pooja8img from '../../../assets/services/images/Frame 1000012951.png'

// tv images
import tv1img from '../../../assets/services/images/tv1.png'
import tv2img from '../../../assets/services/images/tv2.png'
import tv3img from '../../../assets/services/images/tv3.png'
import tv4img from '../../../assets/services/images/tv4.png'
import tv5img from '../../../assets/services/images/tv5.png'
import tv6img from '../../../assets/services/images/tv6.png'

function CreativeDesign(){
    const navigate = useNavigate();
    const categorydata=[
        {
            id:1,
            label:'modular Kitchen',
            images:[ { name: 'Sleek Soft-Touch Kitchen', img: kitchen1img },
                    { name: 'Bold Two-Texture Kitchen', img: kitchen2img },
                    { name: 'Hybrid Modular Workspace', img: kitchen3img },
                    {name: 'Minimal Navy And Grey Wall Colour', img: kitchen4img },
                    ]
        },
        {
            id:2,
            label:'wardrobe',
            images:[ { name: 'Tandem Drawers', img: wardrobe1img},
                    { name: 'Cutlery Drawers', img: wardrobe2img },
                    { name: 'Plain Drawers', img: wardrobe3img },
                    {name: 'Thali Basket', img: wardrobe4img },
                    ]
        },
        {
            id:3,
            label:'pooja unit',
           images:[ { name: 'Traditional Carved Pooja Mandap', img: pooja1img },
                    { name: 'Compact Corner Pooja Setup', img: pooja2img },
                    { name: 'Modern Wall-Mounted Pooja Unit', img: pooja3img },
                    {name: 'Backlit Meditation Niche', img: pooja4img },
                ]
        },
        {
            id:4,
            label:'TV unit',
           images:[ { name: 'Glossy Modern Entertainment Hub', img: tv1img },
                    { name: 'Floating Panel Elegance', img: tv2img },
                    { name: 'Dual-Tone Media Wall', img: tv3img },
                    {name: 'Contemporary Storage Console', img: tv4img },

                ]
        },
        {
            id:5,
            label:'Study Table',
            images:[ { name: 'Sleek Soft-Touch Kitchen', img: kitchen1img },
                    { name: 'Bold Two-Texture Kitchen', img: kitchen2img },
                    { name: 'Hybrid Modular Workspace', img: kitchen3img },
                    {name: 'Minimal Navy And Grey Wall Colour', img: kitchen4img },
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

        // console.log("check");
        navigate("/image/expolre",{state:{selectedCategory:activeCategoryId}});
        // console.log("check2");

    }
    return(
        <>
            <div className="creativedesign_container2">
                <div className="creativedesign_textwrap2">
                    <h2 className="creativedesign_title2">
                        KPK Enterprise: Creative Design Ideas 
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
                            <img src={data.img} alt="" className="creativedesign_img2" />
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