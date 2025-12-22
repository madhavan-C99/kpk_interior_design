import React from 'react';
import '../../services/accessoriesgallery/AccessoriesGallery.css';

import tandemDrawerImage from '../../../assets/services/images/accessory1.png'; 
import cutleryDrawerImage from '../../../assets/services/images/accessory2.png';
import plainDrawerImage from '../../../assets/services/images/accessory3.png';
import thaliBasketImage from '../../../assets/services/images/accessory4.png';
import oilPulloutImage from '../../../assets/services/images/accessory5.png';
import bottlePulloutImage from '../../../assets/services/images/accessory6.png';
import pantryPulloutImage from '../../../assets/services/images/accessory7.png';
import magicCornerImage from '../../../assets/services/images/accessory8.png';

function WardrobeDesigns() {
    const accessoriesdata = [
        { id:1, name: 'Tandem Drawers', image: tandemDrawerImage },
        { id:2, name: 'Cutlery Drawers', image: cutleryDrawerImage },
        { id:3, name: 'Plain Drawers', image: plainDrawerImage },
        { id:4, name: 'Thali Basket', image: thaliBasketImage },
        { id:5, name: 'Oil Pullout', image: oilPulloutImage },
        { id:6, name: 'Bottle Pullout', image: bottlePulloutImage },
        { id:7, name: 'Pantry Pullout', image: pantryPulloutImage },
        { id:8, name: 'Magic Corner', image: magicCornerImage }
    ]

    return (
        <>
            <div className='accessories_section_container2'>
                <div className='accessories_content2'>
                    <h2 className="accessories_main_title2">
                        Smart Add-Ons for Better Wardrobe Designs
                    </h2>
                    <p className="accessories_subtitle2">
                       These modern, functional wardrobe add-ons create 
                       smarter organization and easier access for homes 
                       in Pondicherry and Cuddalore, crafted with factory-finish 
                       quality by KPK Enterprises, experts in customized wardrobe designs.
                    </p>
                </div>
                <div className='accessories_grid2'>
                    {accessoriesdata.map((accessory) => (
                        <div className='accessory_card2' key={accessory.id}>
                            <div className='accessory_image_wrapper2'>
                                <img src={accessory.image} alt={accessory.name} className='accessory_image2' />
                            </div>
                            <p className='accessory_name2'>{accessory.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WardrobeDesigns;