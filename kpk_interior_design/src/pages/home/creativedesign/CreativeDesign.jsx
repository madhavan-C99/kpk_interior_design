import React from "react";
import { useState } from "react";
import './CreativeDesign.css'
import card1img from '../../../assets/home/images/Frame 1000012086.png'
import card2img from '../../../assets/home/images/Frame 1000012086-1.png'
import card3img from '../../../assets/home/images/Frame 1000012091.png'
import card4img from '../../../assets/home/images/Frame 1000012091-1.png'
import card5img from '../../../assets/home/images/Frame 1000012092.png'
import card6img from '../../../assets/home/images/Frame 1000012092-1.png'
import card7img from '../../../assets/home/images/Frame 1000012093.png'
import card8img from '../../../assets/home/images/Frame 1000012093-1.png'

function CreativeDesign(){
    const categorydata=[
        {
            id:1,
            label:'modular Kitchen',
            images:[{name:'Sleek Soft-Touch Kitchen', img:card1img},
            {name:'Sleek Soft-Touch Kitchen', img:card2img},
            {name:'Sleek Soft-Touch Kitchen', img:card3img},
            {name:'Sleek Soft-Touch Kitchen', img:card4img},
            {name:'Sleek Soft-Touch Kitchen', img:card5img},
            {name:'Sleek Soft-Touch Kitchen', img:card6img},
            {name:'Sleek Soft-Touch Kitchen', img:card7img},
            {name:'Sleek Soft-Touch Kitchen', img:card8img},]
        },
        {
            id:2,
            label:'wardrobe',
            images:[{name:'Sleek Soft-Touch Kitchen', img:card7img},
            {name:'Sleek Soft-Touch Kitchen', img:card8img},
            {name:'Sleek Soft-Touch Kitchen', img:card1img},
            {name:'Sleek Soft-Touch Kitchen', img:card2img},
            {name:'Sleek Soft-Touch Kitchen', img:card3img},
            {name:'Sleek Soft-Touch Kitchen', img:card4img},
            {name:'Sleek Soft-Touch Kitchen', img:card5img},
            {name:'Sleek Soft-Touch Kitchen', img:card6img},]
        },
        {
            id:3,
            label:'pooja unit',
            images:[{name:'Sleek Soft-Touch Kitchen', img:card8img},
            {name:'Sleek Soft-Touch Kitchen', img:card7img},
            {name:'Sleek Soft-Touch Kitchen', img:card6img},
            {name:'Sleek Soft-Touch Kitchen', img:card5img},
            {name:'Sleek Soft-Touch Kitchen', img:card4img},
            {name:'Sleek Soft-Touch Kitchen', img:card3img},
            {name:'Sleek Soft-Touch Kitchen', img:card2img},
            {name:'Sleek Soft-Touch Kitchen', img:card1img},]
        },
        {
            id:4,
            label:'TV unit',
            images:[{name:'Sleek Soft-Touch Kitchen', img:card1img},
            {name:'Sleek Soft-Touch Kitchen', img:card2img},
            {name:'Sleek Soft-Touch Kitchen', img:card3img},
            {name:'Sleek Soft-Touch Kitchen', img:card4img},
            {name:'Sleek Soft-Touch Kitchen', img:card5img},
            {name:'Sleek Soft-Touch Kitchen', img:card6img},
            {name:'Sleek Soft-Touch Kitchen', img:card7img},
            {name:'Sleek Soft-Touch Kitchen', img:card8img},]
        },
        {
            id:5,
            label:'Study Table',
            images:[{name:'Sleek Soft-Touch Kitchen', img:card8img},
            {name:'Sleek Soft-Touch Kitchen', img:card7img},
            {name:'Sleek Soft-Touch Kitchen', img:card6img},
            {name:'Sleek Soft-Touch Kitchen', img:card5img},
            {name:'Sleek Soft-Touch Kitchen', img:card4img},
            {name:'Sleek Soft-Touch Kitchen', img:card3img},
            {name:'Sleek Soft-Touch Kitchen', img:card2img},
            {name:'Sleek Soft-Touch Kitchen', img:card1img},]
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
    const getButtonClass = (id) => id === activeCategoryId ? 'category-button active' : 'creativedesign_catbtn';

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
                            <p className="creativedesign_cardtitle">{data.name}</p>
                        </div>
                    ))}
                </div>
                <div className="creativedesign_btnwrap2">
                    <button className="creativedesign_morebtn2">Explore More Design</button>
                </div>
            </div>
        </>
    )
}

export default CreativeDesign