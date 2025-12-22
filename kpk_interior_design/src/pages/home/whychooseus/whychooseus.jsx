import React from "react";
import './whychooseus.css'

import homeicon from '../../../assets/home/images/whyimg1.png'
import srchicon from '../../../assets/home/images/whyimg2.png'
import badgeicon from '../../../assets/home/images/whyimg3.png'
import vanicon from '../../../assets/home/images/whyimg4.png'
import handicon from '../../../assets/home/images/whyimg5.png'

function WhyChooseUs (){
    const reasonsdata = [
    {
        id: 1,
        icon: homeicon, 
        title: 'Customized Design Intelligence',
        description: 'We deliver personalized, intelligent interior solutions crafted by trusted, leading interior designers in Pondicherry.'
    },
    {
        id: 2,
        icon: srchicon, 
        title: 'Clear, Guided Project Flow',
        description: 'We ensure a smooth, transparent interior journey with expert guidance from top Pondicherry designers.'
    },
    {
        id: 3,
        icon: badgeicon, 
        title: 'Quality-Assured Materials',
        description: 'We use premium, durable materials sourced to deliver long-lasting interiors trusted across Pondicherry homes.'
    },
    {
        id: 4,
        icon: vanicon, 
        title: 'Reliable Timelines & Smooth Execution',
        description: 'We deliver on-time, well-coordinated interior projects with seamless execution trusted by Pondicherry homeowners.'
    },
    {
        id: 5,
        icon: handicon, 
        title: 'Continued Support After Completion',
        description: 'We provide dedicated post-completion support, ensuring your Pondicherry home interiors stay flawless and long-lasting.'
    }]
    return(
        <>
            <div className="whychooseus_container2">
                <div className="wcutext_container2">
                    <p className="wcu_subtitle2">Why Choose Us</p>
                    <h2 className="wcu_maintitle2">Why We're the Preferred Interior Partner and Best Interior Designer in Pondicherry</h2>
                    <p className="wcu_descrition2">KPK Enterprises is a leading and trusted name delivering premium solutions as the 
                        best interior designer in Pondicherry.We offer professional, affordable, and luxury-ready interior designs 
                         crafted exclusively for modern Pondicherry homes.
                    </p>
                </div>
                <div className="wcu_reasons_grid2">
                    {reasonsdata.map(data=>(
                        <div className="wcu_reason_card2" key={data.id}>
                            <img src={data.icon} alt={data.title} className="wcu_reason_img2" />
                            <h3 className="wcu_reason_title2">{data.title}</h3>
                            <p className="wcu_reason_description2">{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default WhyChooseUs