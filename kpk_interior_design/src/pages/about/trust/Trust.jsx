import React from "react";
import '../trust/Trust.css'
//images
import Support from '../../../assets/about/support.png'
import ExpertDesigner from '../../../assets/about/eco-conscious.png'
import Endurance from '../../../assets/about/everyday-endurance.png'
import EcoSystem from '../../../assets/about/eco-conscious.png'
import HouseCraftman from '../../../assets/about/house-craftsmanship.png'
import NoCost from '../../../assets/about/no-cost.png'
import Timeline from '../../../assets/about/timeline.png'
import Transport from '../../../assets/about/transport.png'

export default function Trust(){
    return(
        <>
             {/* ----------- Trusted Interior---------- */}
             <section className="about-trust">
                        <h2>Why We’re the Trusted Interior Design Choice in Pondicherry</h2>
                        <p>Discover elegant, trust-built interiors shaped with modern vision and thoughtful detailing, crafted with factory-finish precision by KPK Enterprise, specialising in innovative interior design in Pondicherry for meaningful, future-focused living.</p>
                        {/* about Trust box details */}
                        <div className="about-trust-box">
                            {/* ----here we fetch the data by using map Trust */}
                            {/* {Trust.map((Trust,idx) =>(
                                <div className="about-trust_support" id={idx}>
                                    <h3>{Trust.title}</h3>
                                    <p>{Trust.description}</p>
                                    <div className="about-trust_support-img">
                                    <img src={Trust.Image} />
                                </div>
                                </div>
                                ))
                            } */}
                            <div  className="about-trust-box_row-1">
                                <div className="about-trust_support">
                                    <h3>End-to-End Design Support</h3>
                                    <p>We handle every step, ensuring your project stays effortless and stress-free</p>
                                    <div className="about-trust_support-img">
                                        <img src={Support} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support" >
                                    {/* -----box-2---- */}
                                    <h3>Quality-Controlled In-House Craftsmanship</h3>
                                    <p>Every detail is produced internally, ensuring consistency and reliability.</p>
                                    <div className="about-trust_support-img">
                                        <img src={HouseCraftman} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-3---- */}
                                    <h3>No-Cost Design Visualization</h3>
                                    <p>Get a clear picture of your interiors with expert-curated design samples.</p>
                                    <div className="about-trust_support-img">
                                        <img src={NoCost} />
                                    </div>
                                </div>
                                {/* additional box it appears in responsive screen */}
                                {/* <div className="about-trust_support about-trust_responsive">
                                    -----box-4----
                                    <h3>Committed Delivery Timeline</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Timeline} />
                                    </div>
                                </div> */}
                                
                            </div>
                            {/* ----------------------------------------------- */}
                            <div className="about-trust-box_row-2 about-trust_responsive-1">
                                
                                <div className="about-trust_support">
                                    {/* -----box-4---- */}
                                    <h3>Committed Delivery Timeline</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Timeline} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-5---- */}
                                    <h3>Made for Everyday Endurance</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Endurance} />
                                    </div>
                                </div>
                            </div>
                            {/* ----------------------------------------------- */}
                           
                            <div className="about-trust-box_row-3">
                            <div className="about-trust_support about-trust_responsive">
                                    {/* -----box-5---- */}
                                    <h3>Made for Everyday Endurance</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Endurance} />
                                    </div>
                                </div>
                                <div className="about-trust_support">
                                 {/* -----box-6---- */}
                                <h3>Transparent Cost Breakdown</h3>
                                <p>You receive upfront pricing with no hidden charges—ever.</p>
                                <div className="about-trust_support-img">
                                    <img src={Transport} />
                                </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-7---- */}
                                    <h3>Expert Designers by Your Side</h3>
                                    <p>Our professionals guide every decision with experience and care.</p>
                                    <div className="about-trust_support-img">
                                        <img src={ExpertDesigner} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-8---- */}
                                    <h3>Eco-Conscious Interior Choices</h3>
                                    <p>We prioritize materials and methods that reduce impact and support greener living.</p>
                                    <div className="about-trust_support-img">
                                        <img src={EcoSystem} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* --------------------------- */}
                        <div className="about-trust-responsive">
                            <div  className="about-trust-box_row-1">
                                <div className="about-trust_support">
                                    <h3>End-to-End Design Support</h3>
                                    <p>We handle every step, ensuring your project stays effortless and stress-free</p>
                                    <div className="about-trust_support-img">
                                        <img src={Support} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support" >
                                    {/* -----box-2---- */}
                                    <h3>Quality-Controlled In-House Craftsmanship</h3>
                                    <p>Every detail is produced internally, ensuring consistency and reliability.</p>
                                    <div className="about-trust_support-img">
                                        <img src={HouseCraftman} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-3---- */}
                                    <h3>No-Cost Design Visualization</h3>
                                    <p>Get a clear picture of your interiors with expert-curated design samples.</p>
                                    <div className="about-trust_support-img">
                                        <img src={NoCost} />
                                    </div>
                                </div>
                                {/* additional box it appears in responsive screen */}
                                {/* <div className="about-trust_support about-trust_responsive">
                                    -----box-4----
                                    <h3>Committed Delivery Timeline</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Timeline} />
                                    </div>
                                </div> */}
                                
                            
                                {/* ----------------------------------------------- */}
                                
                                <div className="about-trust_support">
                                    {/* -----box-4---- */}
                                    <h3>Committed Delivery Timeline</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Timeline} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-5---- */}
                                    <h3>Made for Everyday Endurance</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Endurance} />
                                    </div>
                                </div>
                                {/* ----------------------------------------------- */}
                           
                            
                                <div className="about-trust_support">
                                    {/* -----box-5---- */}
                                    <h3>Made for Everyday Endurance</h3>
                                    <p>High-quality construction ensures lasting beauty and reliable performance.</p>
                                    <div className="about-trust_support-img">
                                        <img src={Endurance} />
                                    </div>
                                </div>
                                <div className="about-trust_support">
                                 {/* -----box-6---- */}
                                <h3>Transparent Cost Breakdown</h3>
                                <p>You receive upfront pricing with no hidden charges—ever.</p>
                                <div className="about-trust_support-img">
                                    <img src={Transport} />
                                </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-7---- */}
                                    <h3>Expert Designers by Your Side</h3>
                                    <p>Our professionals guide every decision with experience and care.</p>
                                    <div className="about-trust_support-img">
                                        <img src={ExpertDesigner} />
                                    </div>
                                </div>
                                
                                <div className="about-trust_support">
                                    {/* -----box-8---- */}
                                    <h3>Eco-Conscious Interior Choices</h3>
                                    <p>We prioritize materials and methods that reduce impact and support greener living.</p>
                                    <div className="about-trust_support-img">
                                        <img src={EcoSystem} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
        </>
    )
}