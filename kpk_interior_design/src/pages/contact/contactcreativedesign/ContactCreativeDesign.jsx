import React, { useState, useEffect } from "react";
import './ContactCreativeDesign.css';
import { useLocation } from "react-router-dom";

// kitchen images
import kitchen1img from '../../../assets/home/images/kitchen1.png';     
import kitchen2img from '../../../assets/home/images/kitchen2.png';  
import kitchen3img from '../../../assets/home/images/kitchen3.png'; 
import kitchen4img from '../../../assets/home/images/kitchen4.png'; 
import kitchen5img from '../../../assets/home/images/kitchen9.png'; 
import kitchen6img from '../../../assets/home/images/kitchen10.png'; 
import kitchen7img from '../../../assets/home/images/kitchen11.png';
import kitchen8img from '../../../assets/home/images/kitchen12.png'; 
import kitchen9img from '../../../assets/home/images/kitchen13.png'; 
import kitchen10img from '../../../assets/home/images/kitchen14.png';
import kitchen11img from '../../../assets/home/images/kitchen15.png'; 
import kitchen12img from '../../../assets/home/images/kitchen16.png';
import kitchen13img from '../../../assets/home/images/kitchen17.png';
import kitchen14img from '../../../assets/home/images/kitchen18.png'
import kitchen15img from '../../../assets/home/images/kitchen19.png'
import kitchen16img from '../../../assets/home/images/kitchen20.png'

// Wardrobe images
import wardrobe1img from '../../../assets/services/images/wardrobe1.png';
import wardrobe2img from '../../../assets/services/images/wardrobe2.png';
import wardrobe3img from '../../../assets/services/images/wardrobe3.png';
import wardrobe4img from '../../../assets/services/images/wardrobe4.png';
import wardrobe5img from '../../../assets/services/images/wardrobe5.png';
import wardrobe6img from '../../../assets/services/images/wardrobe6.png';
import wardrobe7img from '../../../assets/services/images/wardrobe7.png';
import wardrobe8img from '../../../assets/services/images/wardrobe8.png';
import wardrobe9img from '../../../assets/services/images/wardrobe9.png';
import wardrobe10img from '../../../assets/services/images/wardrobe10.png';
import wardrobe11img from '../../../assets/services/images/wardrobe11.png';
import wardrobe12img from '../../../assets/services/images/wardrobe12.png';

// pooja images
import pooja1img from '../../../assets/services/images/pooja1.png'
import pooja2img from '../../../assets/services/images/pooja2.png'
import pooja3img from '../../../assets/services/images/pooja3.png'
import pooja4img from '../../../assets/services/images/pooja4.png'
import pooja5img from '../../../assets/services/images/pooja5.png'
import pooja6img from '../../../assets/services/images/pooja6.png'
import pooja7img from '../../../assets/services/images/pooja7.png'
import pooja8img from '../../../assets/services/images/pooja8.png'

// tv images
import tv1img from '../../../assets/services/images/tv1.png'
import tv2img from '../../../assets/services/images/tv2.png'
import tv3img from '../../../assets/services/images/tv3.png'
import tv4img from '../../../assets/services/images/tv4.png'
import tv5img from '../../../assets/services/images/tv5.png'
import tv6img from '../../../assets/services/images/tv6.png'
import tv7img from '../../../assets/services/images/tv7.png'
import tv8img from '../../../assets/services/images/tv8.png'

// study table
import studytb1 from '../../../assets/services/images/studytb1.png'
import studytb2 from '../../../assets/services/images/studytb2.png'
import studytb3 from '../../../assets/services/images/studytb3.png'
import studytb4 from '../../../assets/services/images/studytb4.png'


function ContactCreativeDesign() {
    const contactcategorydata = [
        {
            id: 1,
            label: 'modular Kitchen',
           images: [
                { id: 1, name: 'Sleek Soft-Touch Kitchen', img: kitchen1img },
                { id: 2, name: 'Bold Two-Texture Kitchen', img: kitchen2img },
                { id: 3, name: 'Hybrid Modular Workspace', img: kitchen3img },
                { id: 4, name: 'Minimal Navy And Grey Wall Colour', img: kitchen4img },
                { id: 5, name: 'Open-Shelf Modern Kitchen', img: kitchen5img },
                { id: 6, name: 'Underlit Counter Kitchen', img: kitchen6img },
                { id: 7, name: 'Multi-Functional Compact Layout', img: kitchen7img },
                { id: 8, name: 'Premium Stone-Top Modular Kitchen', img: kitchen8img },
                { id: 9, name: 'Modern Modular Kitchen Setup', img: kitchen9img },
                { id: 10, name: 'Premium Island Kitchen', img: kitchen10img },
                { id: 11, name: 'Compact Urban Kitchen', img: kitchen11img },
                { id: 12, name: 'Parallel Kitchen Layout', img: kitchen12img },
                { id: 13, name: 'Matte Finish Modern Kitchen', img: kitchen13img },
                { id: 14, name: 'Woodgrain Modular Design', img: kitchen14img },
                { id: 15, name: 'Smart Storage Kitchen System', img: kitchen15img },
                { id: 16, name: 'Contemporary High-Gloss Kitchen', img: kitchen16img }
            ]
        },
        {
            id: 2,
            label: 'wardrobe',
            images: [
                 { name: 'Sleek Sliding Wardrobe', img: wardrobe1img},
                { name: 'Premium Walk-In Closet', img: wardrobe2img },
                { name: 'Matte Finish Wardrobe', img: wardrobe3img },
                {name: 'Glass-Front Closet Style', img: wardrobe4img },
                { id: 5, name: 'Minimal Open Wardrobe', img: wardrobe5img },
                { id: 6, name: 'Neutral Tone Closet', img: wardrobe6img },
                { id: 7, name: 'Curved Panel Wardrobe', img: wardrobe7img },
                { id: 8, name:  'Patterned Door Wardrobe', img: wardrobe8img },
                { id: 9, name:  'Dual Panel Wardrobe', img: wardrobe9img },
                { id: 10, name:  'Matte Finish Closet', img: wardrobe10img },
                { id: 11, name:  'Chevron Style Wardrobe', img: wardrobe11img },
                { id: 12, name:  'Full Height Wardrobe', img: wardrobe12img },
            ]
        },
        {
            id: 3,
            label: 'pooja unit',
            images: [
                { id: 1, name:'Traditional Carved Pooja Mandap', img: pooja1img },
                { id: 2, name:'Backlit Meditation Niche', img: pooja2img },
                { id: 3, name: 'Jaali Panel Pooja Space', img: pooja3img },
                { id: 4, name:  'Compact Corner Pooja Setup', img: pooja4img },
                { id: 5, name: 'Backlit Meditation Niche', img: pooja5img },
                { id: 6, name:  'Modern Wall-Mounted Pooja Unit', img: pooja6img },
                { id: 7, name:'Compact Corner Pooja Setup', img: pooja7img },
                { id: 8, name:'Traditional Carved Pooja Mandap', img: pooja8img },
            ]
        },
        {
            id: 4,
            label: 'TV unit',
            images: [
                { id: 1, name: 'Glossy Modern Entertainment Hub', img: tv1img },
                { id: 2, name: 'Floating Panel Elegance', img: tv2img },
                { id: 3, name: 'Dual-Tone Media Wall', img: tv3img },
                { id: 4, name: 'Contemporary Storage Console', img: tv4img },
                { id: 5, name:'Modern Wooden TV Unit', img: tv5img },
                { id: 6, name: 'Designer TV Statement Panel', img: tv6img },
                { id: 7, name:'Minimal TV Storage Unit', img: tv7img },
                { id: 8, name: 'Compact TV Display Unit', img: tv8img },

            ]
        },
        {
            id: 5,
            label: 'Study Table',
            images: [
                { id: 1, name: 'Integrated Storage with Study', img: studytb1 },
                { id: 2, name: 'Compact Storage Study Unit', img: studytb2 },
                { id: 3, name: 'Modern Storage Workstation', img: studytb3 },
                { id: 4, name: 'Built-In Study Storage Design', img: studytb4 },
            ]
        }
    ];


    const location = useLocation();
    const incomingId=location.state?.selectedCategory?.id || 1;
    // State for Active Category
    const [activeCategoryId, setActiveCategoryId] = useState(incomingId);

    useEffect(() => {
        if (location.state?.selectedCategory?.id) {
            setActiveCategoryId(location.state.selectedCategory.id);
        }
    }, [location.state]);
    
    const activeCategory = contactcategorydata.find(item => item.id === activeCategoryId);

    const handleCategoryClick = (id) => {
        setActiveCategoryId(id);
    };

    // Class toggle for buttons
    const getButtonClass = (id) => id === activeCategoryId ? 'category_button2 active' : 'contactcreative_catbtn2';


    
    return (
        <div className="contactcreative_container2">
            <div className="contactcreative_textwrap2">
                <h2 className="contactcreative_title2">
                    KPK Enterprises: Creative Design Ideas 
                    for Every Corner of Your Home
                </h2>
                <p className="contactcreative_desc2">
                    We bring every corner of your home to 
                    life with thoughtful, practical, and 
                    stylish interior solutions. From modular 
                    kitchens and wardrobes to TV units, pooja 
                    units, and study tables, each space is designed to inspire.
                </p>
                <div className="contactcreative_btnswrapper2">
                    <button className={getButtonClass(1)} onClick={() => handleCategoryClick(1)}>Modular Kitchen</button>
                    <button className={getButtonClass(2)} onClick={() => handleCategoryClick(2)}>Wardrobe</button>
                    <button className={getButtonClass(3)} onClick={() => handleCategoryClick(3)}>Pooja Unit</button>
                    <button className={getButtonClass(4)} onClick={() => handleCategoryClick(4)}>Tv Unit</button>
                    <button className={getButtonClass(5)} onClick={() => handleCategoryClick(5)}>Study Table</button>
                </div>
            </div>

            <div className="contactcreative_grid2">
                {activeCategory.images.map(data => (
                    <div className="contactcreative_card2" key={data.id}>
                        <img src={data.img} alt={data.name} className="contactcreative_img2" />
                        <p className="contactcreative_cardtitle2">{data.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactCreativeDesign;