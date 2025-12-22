import React from "react";
import '../../services/sections/ServiceSteps.css'
import shelfimg from '../../../assets/services/images/Group5139990.png'
import hangingspace from '../../../assets/services/images/icon-park-solid_hanger-two.png'
import shelf from '../../../assets/services/images/shelfimg.png'
import pull_out from '../../../assets/services/images/fluent_drawer-20-filled.png'
import shoe_organizer from '../../../assets/services/images/fluent_drawer-20-filled1.png'
import multilevelshelf from '../../../assets/services/images/fluent_drawer-20-filled2.png'


function UtilitySpaces() {
    const zones = [
        { name: 'Hanging Space', icon: hangingspace},
        { name: 'Shelf Storage', icon: shelf },
        { name: 'Pull-Out Drawers', icon: pull_out },
        { name: 'Shoe Organizer', icon: shoe_organizer },
        { name: 'Multi-Level Shelf', icon: multilevelshelf }]

    return (
        <>
            <div className="utility_zone_section2">
                
                <div className="utility_text_block2">
                    <h2 className="utility_title2">Built-In Utility Spaces for Easy Organisation</h2>
                    <p className="utility_description2">
                       Our modern built-in utility spaces bring effortless organization through smart 
                       layouts, hidden storage and factory-finish detailing. Created by KPK Enterprises, 
                       we specialize in custom interiors design in Pondicherry and Cuddalore homes.
                    </p>
                </div>
                
                <div className="utility_diagram_wrapper2">
                    <img src={shelfimg} alt="L-Shape Kitchen diagram showing" className="utility_diagram_image2"/>
                </div>

                <div className="utility_legend_container2">
                    {zones.map((zone, index) => (
                        <div key={index} className="utility_zone_item2">
                            <img src={zone.icon} alt={zone.name} />
                            <p className="zone_name2">{zone.name}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        </>
    )
}

export default UtilitySpaces;