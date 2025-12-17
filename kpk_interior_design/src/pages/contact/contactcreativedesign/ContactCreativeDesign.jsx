import React, { useState, useEffect } from "react";
import './ContactCreativeDesign.css';
import card1img from '../../../assets/home/images/Frame 1000012086.png';
import card2img from '../../../assets/home/images/Frame 1000012086-1.png';
import card3img from '../../../assets/home/images/Frame 1000012091.png';
import card4img from '../../../assets/home/images/Frame 1000012091-1.png';
import card5img from '../../../assets/home/images/Frame 1000012092.png';
import card6img from '../../../assets/home/images/Frame 1000012092-1.png';
import card7img from '../../../assets/home/images/Frame 1000012093.png';
import card8img from '../../../assets/home/images/Frame 1000012093-1.png';

function ContactCreativeDesign() {
    const contactcategorydata = [
        {
            id: 1,
            label: 'modular Kitchen',
            images: [
                { id: 1, name: 'Sleek Soft-Touch Kitchen', img: card8img },
                { id: 2, name: 'Bold Two-Texture Kitchen', img: card7img },
                { id: 3, name: 'Hybrid Modular Workspace', img: card6img },
                { id: 4, name: 'Minimal Navy And Grey Wall Colour', img: card5img },
                { id: 5, name: 'Open-Shelf Modern Kitchen', img: card4img },
                { id: 6, name: 'Underlit Counter Kitchen', img: card3img },
                { id: 7, name: 'Multi-Functional Compact Layout', img: card2img },
                { id: 8, name: 'Premium Stone-Top Modular Kitchen', img: card1img },
                { id: 9, name: 'Modern Modular Kitchen Setup', img: card8img },
                { id: 10, name: 'Premium Island Kitchen', img: card7img },
                { id: 11, name: 'Compact Urban Kitchen', img: card6img },
                { id: 12, name: 'Parallel Kitchen Layout', img: card5img },
                { id: 13, name: 'Matte Finish Modern Kitchen', img: card4img },
                { id: 14, name: 'Woodgrain Modular Design', img: card3img },
                { id: 15, name: 'Smart Storage Kitchen System', img: card2img },
                { id: 16, name: 'Contemporary High-Gloss Kitchen', img: card1img }
            ]
        },
        {
            id: 2,
            label: 'wardrobe',
            images: [
                { id: 1, name: 'Sleek Soft-Touch Kitchen', img: card1img },
                { id: 2, name: 'Bold Two-Texture Kitchen', img: card2img },
                { id: 3, name: 'Hybrid Modular Workspace', img: card3img },
                { id: 4, name: 'Minimal Navy And Grey Wall Colour', img: card4img },
                { id: 5, name: 'Open-Shelf Modern Kitchen', img: card5img },
                { id: 6, name: 'Underlit Counter Kitchen', img: card6img },
                { id: 7, name: 'Multi-Functional Compact Layout', img: card7img },
                { id: 8, name: 'Premium Stone-Top Modular Kitchen', img: card8img },
                { id: 9, name: 'Modern Modular Kitchen Setup', img: card1img },
                { id: 10, name: 'Premium Island Kitchen', img: card2img },
                { id: 11, name: 'Compact Urban Kitchen', img: card3img },
                { id: 12, name: 'Parallel Kitchen Layout', img: card4img },
                { id: 13, name: 'Matte Finish Modern Kitchen', img: card5img },
                { id: 14, name: 'Woodgrain Modular Design', img: card6img },
                { id: 15, name: 'Smart Storage Kitchen System', img: card7img },
                { id: 16, name: 'Contemporary High-Gloss Kitchen', img: card8img }
            ]
        },
        {
            id: 3,
            label: 'pooja unit',
            images: [
                { id: 1, name: 'Sleek Soft-Touch Kitchen', img: card8img },
                { id: 2, name: 'Bold Two-Texture Kitchen', img: card7img },
                { id: 3, name: 'Hybrid Modular Workspace', img: card6img },
                { id: 4, name: 'Minimal Navy And Grey Wall Colour', img: card5img },
                { id: 5, name: 'Open-Shelf Modern Kitchen', img: card4img },
                { id: 6, name: 'Underlit Counter Kitchen', img: card3img },
                { id: 7, name: 'Multi-Functional Compact Layout', img: card2img },
                { id: 8, name: 'Premium Stone-Top Modular Kitchen', img: card1img },
                { id: 9, name: 'Modern Modular Kitchen Setup', img: card8img },
                { id: 10, name: 'Premium Island Kitchen', img: card7img },
                { id: 11, name: 'Compact Urban Kitchen', img: card6img },
                { id: 12, name: 'Parallel Kitchen Layout', img: card5img },
                { id: 13, name: 'Matte Finish Modern Kitchen', img: card4img },
                { id: 14, name: 'Woodgrain Modular Design', img: card3img },
                { id: 15, name: 'Smart Storage Kitchen System', img: card2img },
                { id: 16, name: 'Contemporary High-Gloss Kitchen', img: card1img }
            ]
        },
        {
            id: 4,
            label: 'TV unit',
            images: [
                { id: 1, name: 'Sleek Soft-Touch Kitchen', img: card1img },
                { id: 2, name: 'Bold Two-Texture Kitchen', img: card2img },
                { id: 3, name: 'Hybrid Modular Workspace', img: card3img },
                { id: 4, name: 'Minimal Navy And Grey Wall Colour', img: card4img },
                { id: 5, name: 'Open-Shelf Modern Kitchen', img: card5img },
                { id: 6, name: 'Underlit Counter Kitchen', img: card6img },
                { id: 7, name: 'Multi-Functional Compact Layout', img: card7img },
                { id: 8, name: 'Premium Stone-Top Modular Kitchen', img: card8img },
                { id: 9, name: 'Modern Modular Kitchen Setup', img: card1img },
                { id: 10, name: 'Premium Island Kitchen', img: card2img },
                { id: 11, name: 'Compact Urban Kitchen', img: card3img },
                { id: 12, name: 'Parallel Kitchen Layout', img: card4img },
                { id: 13, name: 'Matte Finish Modern Kitchen', img: card5img },
                { id: 14, name: 'Woodgrain Modular Design', img: card6img },
                { id: 15, name: 'Smart Storage Kitchen System', img: card7img },
                { id: 16, name: 'Contemporary High-Gloss Kitchen', img: card8img }
            ]
        },
        {
            id: 5,
            label: 'Study Table',
            images: [
                { id: 1, name: 'Sleek Soft-Touch Kitchen', img: card8img },
                { id: 2, name: 'Bold Two-Texture Kitchen', img: card7img },
                { id: 3, name: 'Hybrid Modular Workspace', img: card6img },
                { id: 4, name: 'Minimal Navy And Grey Wall Colour', img: card5img },
                { id: 5, name: 'Open-Shelf Modern Kitchen', img: card4img },
                { id: 6, name: 'Underlit Counter Kitchen', img: card3img },
                { id: 7, name: 'Multi-Functional Compact Layout', img: card2img },
                { id: 8, name: 'Premium Stone-Top Modular Kitchen', img: card1img },
                { id: 9, name: 'Modern Modular Kitchen Setup', img: card8img },
                { id: 10, name: 'Premium Island Kitchen', img: card7img },
                { id: 11, name: 'Compact Urban Kitchen', img: card6img },
                { id: 12, name: 'Parallel Kitchen Layout', img: card5img },
                { id: 13, name: 'Matte Finish Modern Kitchen', img: card4img },
                { id: 14, name: 'Woodgrain Modular Design', img: card3img },
                { id: 15, name: 'Smart Storage Kitchen System', img: card2img },
                { id: 16, name: 'Contemporary High-Gloss Kitchen', img: card1img }
            ]
        }
    ];
// const [selectedImages, setSelectedImages] = useState(DESIGN_IDEAS[0].images);
//   // 2. Function to update the state when a card is clicked
//   const handleCardClick = (imagesArray) => {
//     console.log("Card clicked. Updating selected images.");
//     setSelectedImages(imagesArray);
//   };


    // State for Active Category
    const [activeCategoryId, setActiveCategoryId] = useState(contactcategorydata[0].id);
    
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
                    KPK Enterprise: Creative Design Ideas 
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