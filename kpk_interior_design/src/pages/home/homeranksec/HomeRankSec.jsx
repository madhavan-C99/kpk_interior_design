import './HomeRankSec.css'
import hand_icon from '../../../assets/home/images/Group 5140002.png'
import handshake from '../../../assets/home/images/ph_handshake-fill.png'
import support from '../../../assets/home/images/mdi_support.png'
import verified from '../../../assets/home/images/material-symbols_verified-outline.png'
import material from '../../../assets/home/images/material-symbols_delivery-truck-speed-outline.png'
import health from '../../../assets/home/images/healthicons_home-outline.png'
import premium from '../../../assets/home/images/fluent_premium-32-filled.png'
import design_idea from '../../../assets/home/images/fluent_design-ideas-28-filled.png'
import hourglass from '../../../assets/home/images/bxs_hourglass.png'
import streamline from '../../../assets/home/images/streamline-ultimate-color_ranking-stars-ribbon.png'

export default function HomeRankSec(){
    const rank_slide=[{id:1,icon:hand_icon,caption:"Trusted Interior Experts"},
                    {id:2,icon:verified,caption:"Verified Project Credibility"},
                    {id:3,icon:handshake,caption:"Verified Project Credibility"},
                    {id:4,icon:streamline,caption:"Top Ranked Designers"},
                    {id:5,icon:material,caption:"Efficient Project Delivery"},
                    {id:6,icon:design_idea,caption:"Creative Design Ideas"},
                    {id:7,icon:premium,caption:"Premium Material Assurance"},
                    {id:8,icon:health,caption:"Custom Home Solutions"},
                    {id:9,icon:hourglass,caption:"Strict Timeline Commitment"},
                    {id:10,icon:support,caption:"Dedicated After Support"}
    ]
    const carouselData = [...rank_slide, ...rank_slide, ...rank_slide];

    return(
        <>
        <section>
            <div className="home_rank__con3">
                <div className="home_rank_head3">
                    <h1 className="home_rank_tittle3">What Enables Every Beautiful Interior We Transform for You – KPK Enterprise</h1>
                    <p className="home_rank_caption3">KPK Enterprise, the top, recognised interior brand, creates beauty through precision planning, expert detailing, and durable finishes, strengthening our position as professional interior designers in Pondicherry delivering high-value home and commercial spaces.</p>
                </div>
                <div className="home_rank_body3">
                    {carouselData.map((value,index)=>(
                        <div key={index} className='home_rank__card3'>
                            <img src={value.icon} alt={value.caption} className='home_rank__icon3'/>
                            <h4>{value.caption}</h4>
                        </div>
                    ))}
                </div>
            </div>


        </section>
        </>
    )
}