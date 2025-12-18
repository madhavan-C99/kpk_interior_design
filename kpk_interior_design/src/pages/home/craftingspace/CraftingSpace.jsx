import React from "react";
import './CraftingSpace.css'
import craftingvideo from '../../../assets/home/videos/weldingvideo.mp4'

function CraftingSpace(){
    return(
        <>
            <div className="crafting_container2">
                <div className="crafting_text2">
                    <h2 className="crafting-title2">
                    Walk into our Crafting Space,
                    where top interior designers in
                    Pondicherry craft premium
                    interiors with perfection.
                    </h2>
                </div>
                <div className="crafting_video2">
                    <video autoPlay muted loop src={craftingvideo} id="craftingvid2"></video>
                </div>
            </div>
        </>
    )
}

export default CraftingSpace