import React from "react";
import './CraftingSpace.css'
import craftimg from '../../../assets/home/images/Frame 1000012975.png'

function CraftingSpace(){
    return(
        <>
            <div className="crafting_container2">
                <div className="crafting_text2">
                    <h2 className="crafting-title">
                    Walk into our Crafting Space,
                    where top interior designers in
                    Pondicherry craft premium
                    interiors with perfection.
                    </h2>
                </div>
                <div className="crafting_image2">
                    <img src={craftimg} alt="" />
                </div>
            </div>
        </>
    )
}

export default CraftingSpace