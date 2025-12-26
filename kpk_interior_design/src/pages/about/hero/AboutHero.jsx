import React from "react";
import '../hero/AboutHero.css'
//video import
import aboutHeroVideo from '../../../assets/about/about-hero.mp4'

export default function AboutHero(){
    return(
        <>
            <section>
                <div className="about-hero_viedo">
                        <div>
                            <h2>KPK Enterprises – Best Interior Designers in Cuddalore & Pondicherry</h2>
                        </div>
                    </div>
                    <video autoPlay loop muted className="about-hero-viedo">
                        <source src={aboutHeroVideo} type="video/mp4"/>
                    </video>
            </section>
        </>
    )
}