import React from "react";
import './ServiceSteps.css'
import kitchendesk from '../../../assets/services/images/kitchendesk.png'
import jar from '../../../assets/services/images/jarimg.png'
import plate from '../../../assets/services/images/plateimg.png'
import coffeecup from '../../../assets/services/images/cupimg.png'
import cooker from '../../../assets/services/images/cookerimg.png'
import knife from '../../../assets/services/images/knifeimg.png'


function ServiceSteps() {
    const zones = [
        { name: 'Consumable', icon: jar},
        { name: 'Preparation', icon: knife },
        { name: 'Cleaning', icon: plate },
        { name: 'Non-Consumable', icon: coffeecup },
        { name: 'Cooking Area', icon: cooker }]

    return (
        <>
            <div className="utility_zone_section2">
                
                <div className="utility_text_block2">
                    <h2 className="utility_title2">Smart Kitchen Layouts with Well-Planned Utility Zones</h2>
                    <p className="utility_description2">
                        Design your dream kitchen with KPK Enterprises, offering smart kitchen 
                        layouts and well-planned utility zones in Pondicherry. Optimize space, 
                        workflow, and storage with our expert modular kitchen solutions.
                    </p>
                </div>
                
                <div className="utility_diagram_wrapper2">
                    <img src={kitchendesk} alt="L-Shape Kitchen diagram showing" className="utility_diagram_image2"/>
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

export default ServiceSteps;