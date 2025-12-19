import React from "react";
import { useState } from "react";
import Image from '../../../assets/Price_img/cta-img.png'
import '../price_cta/PriceCta.css'
import PriceForm from "../priceform/PriceForm";
export default function PriceCta(){
  const [showForm, setShowForm] = useState(false);
    return(
        <>
            <section className="price-cta-section">
      
      {/* Left Content */}
      <div className="price-cta-content">
        <h2>Get Your Interior Design Price Today</h2>
        <p>Access easy, transparent pricing for modular kitchen, wardrobe and home interiors. Get accurate cost guidance and customized options for Pondicherry & Cuddalore.</p>
        <button onClick={() => setShowForm(true)}>Start My Interior Plan</button>
      </div>

      {/* Right Image */}
      <div className="price-cta-image">
        <img src={Image} alt="Interior CTA" />
      </div>

    </section>
    {/* INSERT HERE (AFTER section) */}
          {showForm && (
            <PriceForm closeForm={() => setShowForm(false)} />
          )}
            
        </>
    )
}