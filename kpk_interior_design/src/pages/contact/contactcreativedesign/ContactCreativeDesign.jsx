import React, { useState, useEffect } from "react";
import './ContactCreativeDesign.css';
import { useLocation } from "react-router-dom";

// kitchen images
import kitchen1img from '../../../assets/home/images/Frame 1000012086.png';     
import kitchen2img from '../../../assets/home/images/Frame 1000012091.png';  
import kitchen3img from '../../../assets/home/images/Frame 1000012092.png'; 
import kitchen4img from '../../../assets/home/images/Frame 1000012883.png'; 
import kitchen5img from '../../../assets/home/images/Frame 1000012884.png'; 
import kitchen6img from '../../../assets/home/images/Frame 1000012885.png'; 
import kitchen7img from '../../../assets/home/images/Frame 1000012093.png';
import kitchen8img from '../../../assets/home/images/Frame 1000012886.png'; 
import kitchen9img from '../../../assets/home/images/Frame 100001286.png'; 
import kitchen10img from '../../../assets/home/images/Frame 1000012887.png';
import kitchen11img from '../../../assets/home/images/Frame 1000012888.png'; 
import kitchen12img from '../../../assets/home/images/Frame 1000012889.png';
import kitchen13img from '../../../assets/home/images/Frame 1000012890.png';
import kitchen14img from '../../../assets/home/images/Frame 1000012891.png'
import kitchen15img from '../../../assets/explore_image/Frame 1000012092.png'
import kitchen16img from '../../../assets/home/images/Frame 1000012892.png'

// Wardrobe images
import wardrobe1img from '../../../assets/services/images/Frame 1000012402.png'; 
import wardrobe2img from '../../../assets/services/images/image 17125.png';
import wardrobe3img from '../../../assets/services/images/Frame 1000012404.png';
import wardrobe4img from '../../../assets/services/images/Frame 1000012403.png';
import wardrobe5img from '../../../assets/services/images/Frame 100001242.png';
import wardrobe6img from '../../../assets/services/images/Frame 100001240.png';
import wardrobe7img from '../../../assets/services/images/Frame 10000122.png';
import wardrobe8img from '../../../assets/services/images/Frame 10012402.png';
import wardrobe9img from '../../../assets/services/images/wardrobe9.png';
import wardrobe10img from '../../../assets/services/images/wardrobe10.png';
import wardrobe11img from '../../../assets/services/images/wardrobe13.png';
import wardrobe12img from '../../../assets/services/images/wardrobe11.png';
import wardrobe13img from '../../../assets/services/images/wardrobe12.png';

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
                // { id: 1, name: 'Tandem Drawers', img: wardrobe1img },
                // { id: 2, name: 'Cutlery Drawers', img: wardrobe2img },
                // { id: 3, name: 'Plain Drawers', img: wardrobe3img },
                // { id: 4, name: 'Thali Basket', img: wardrobe4img },
                // { id: 5, name: 'Oil Pullout', img: wardrobe5img },
                // { id: 6, name: 'Bottle Pullout', img: wardrobe6img },
                // { id: 7, name: 'Pantry Pullout', img: wardrobe7img },
                // { id: 8, name:  'Magic Corner', img: wardrobe8img },
                { id: 9, name: 'Tandem Drawers', img: wardrobe9img },
                { id: 10, name:  'Cutlery Drawers', img: wardrobe10img },
                { id: 11, name:'Plain Drawers', img: wardrobe11img },
                { id: 12, name:'Thali Basket', img: wardrobe12img },
                { id: 13, name: 'Oil Pullout', img: wardrobe13img },
                // { id: 14, name:'Bottle Pullout', img: wardrobe6img },
                // { id: 15, name: 'Pantry Pullout', img: wardrobe7img },
                // { id: 16, name: 'Magic Corner', img: wardrobe8img }
            ]
        },
        {
            id: 3,
            label: 'pooja unit',
            images: [
                { id: 1, name:'Traditional Carved Pooja Mandap', img: pooja8img },
                { id: 2, name:'Backlit Meditation Niche', img: pooja7img },
                { id: 3, name: 'Jaali Panel Pooja Space', img: pooja6img },
                { id: 4, name:  'Compact Corner Pooja Setup', img: pooja5img },
                { id: 5, name: 'Backlit Meditation Niche', img: pooja4img },
                { id: 6, name:  'Modern Wall-Mounted Pooja Unit', img: pooja3img },
                { id: 7, name:'Compact Corner Pooja Setup', img: pooja2img },
                { id: 8, name:'Traditional Carved Pooja Mandap', img: pooja1img },
                // { id: 9, name: 'Traditional Carved Pooja Mandap', img: pooja8img },
                // { id: 10, name:'Backlit Meditation Niche', img: pooja7img },
                // { id: 11, name: 'Jaali Panel Pooja Space', img: pooja6img },
                // { id: 12, name: 'Compact Corner Pooja Setup', img: pooja5img },
                // { id: 13, name:'Backlit Meditation Niche', img: pooja4img },
                // { id: 14, name: 'Modern Wall-Mounted Pooja Unit', img: pooja3img },
                // { id: 15, name: 'Compact Corner Pooja Setup', img: pooja2img },
                // { id: 16, name:'Traditional Carved Pooja Mandap', img: pooja1img }
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
                { id: 5, name:'Minimal Media Console', img: tv5img },
                { id: 6, name: 'Designer TV Statement Panel', img: tv6img },
                // { id: 7, name: 'Glossy Modern Entertainment Hub', img: tv1img },
                // { id: 8, name: 'Floating Panel Elegance', img: tv2img },
                // { id: 9, name: 'Dual-Tone Media Wall', img: tv3img },
                // { id: 10, name: 'Contemporary Storage Console', img: tv4img },
                // { id: 11, name:'Minimal Media Console', img: tv5img },
                // { id: 12, name: 'Designer TV Statement Panel', img: tv6img },
                // { id: 13, name: 'Glossy Modern Entertainment Hub', img: tv1img },
                // { id: 14, name: 'Floating Panel Elegance', img: tv2img },
                // { id: 15, name: 'Dual-Tone Media Wall', img: tv3img },
                // { id: 16, name: 'Contemporary Storage Console', img: tv4img },
            ]
        },
        {
            id: 5,
            label: 'Study Table',
            images: [
                { id: 1, name: 'Sleek Soft-Touch Kitchen', img: kitchen8img },
                { id: 2, name: 'Bold Two-Texture Kitchen', img: kitchen7img },
                { id: 3, name: 'Hybrid Modular Workspace', img: kitchen6img },
                { id: 4, name: 'Minimal Navy And Grey Wall Colour', img: kitchen5img },
                { id: 5, name: 'Open-Shelf Modern Kitchen', img: kitchen4img },
                { id: 6, name: 'Underlit Counter Kitchen', img: kitchen3img },
                { id: 7, name: 'Multi-Functional Compact Layout', img: kitchen2img },
                { id: 8, name: 'Premium Stone-Top Modular Kitchen', img: kitchen1img },
                { id: 9, name: 'Modern Modular Kitchen Setup', img: kitchen8img },
                { id: 10, name: 'Premium Island Kitchen', img: kitchen7img },
                { id: 11, name: 'Compact Urban Kitchen', img: kitchen6img },
                { id: 12, name: 'Parallel Kitchen Layout', img: kitchen5img },
                { id: 13, name: 'Matte Finish Modern Kitchen', img: kitchen4img },
                { id: 14, name: 'Woodgrain Modular Design', img: kitchen3img },
                { id: 15, name: 'Smart Storage Kitchen System', img: kitchen2img },
                { id: 16, name: 'Contemporary High-Gloss Kitchen', img: kitchen1img }
            ]
        }
    ];
// const [selectedImages, setSelectedImages] = useState(DESIGN_IDEAS[0].images);
//   // 2. Function to update the state when a card is clicked
//   const handleCardClick = (imagesArray) => {
//     console.log("Card clicked. Updating selected images.");
//     setSelectedImages(imagesArray);
//   };
    // const location=useLocation();

    // const initialCategory=location.state?.selectedCategory || "modular Kitchen";

    // const [activeCategoryId, setActiveCategoryId] = useState(initialCategory);


    const location = useLocation();
    const incomingId=location.state?.selectedCategory?.id || 1;
    // State for Active Category
    const [activeCategoryId, setActiveCategoryId] = useState(incomingId);

    useEffect(() => {
        if (location.state?.selectedCategory?.id) {
            setActiveCategoryId(location.state.selectedCategory.id);
        }
    }, [location.state]);
    
    // State for Mobile Detection (Breakpoint 575px)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 575);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 575);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const activeCategory = contactcategorydata.find(item => item.id === activeCategoryId);

    const handleCategoryClick = (id) => {
        setActiveCategoryId(id);
    };

    // Class toggle for buttons
    const getButtonClass = (id) => id === activeCategoryId ? 'category_button2 active' : 'contactcreative_catbtn2';

    // Logic: If mobile, show only 5 cards. Otherwise, show all.
    const displayImages = isMobile ? activeCategory.images.slice(0, 5) : activeCategory.images;


    
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
                    {/* <button className={getButtonClass(1)} onClick={() => setActiveCategoryId("modular Kitchen")}>Modular Kitchen</button>
                    <button className={getButtonClass(2)} onClick={() => setActiveCategoryId("wardrobe")}>Wardrobe</button>
                    <button className={getButtonClass(3)} onClick={() => handleCategoryClick(3)}>Pooja Unit</button>
                    <button className={getButtonClass(4)} onClick={() => handleCategoryClick(4)}>Tv Unit</button>
                    <button className={getButtonClass(5)} onClick={() => handleCategoryClick(5)}>Study Table</button> */}
                </div>
            </div>

            <div className="contactcreative_grid2">
                {displayImages.map(data => (
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