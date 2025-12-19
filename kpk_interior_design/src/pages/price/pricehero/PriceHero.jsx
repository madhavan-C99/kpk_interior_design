import React from "react";
import Heroimg from '../../../assets/Price_img/price-hero.png'
import "../pricehero/PriceHero.css";
export default function PriceHero() {
  return (
    <div className="price-hero-container">
        <div className="price-hero-content">
            <h1 className="price-hero-title-1">Interior Design Cost in Pondicherry - Complete Pricing Guide 2025</h1>
        </div>
        <div className="price-hero-image">
            <img src={Heroimg} alt="Interior Design Hero" className="pricehero-img"/>
        </div>
    </div>
  );
}                                               