import React from "react";
import { useState } from "react";
import Image from '../../../assets/portfolio/cta-img.png'
import '../../portfolio/portfolio_cta/PortfolioCta.css'
import Form from "../form/Form";
import PortfolioForm from '../portfolio_cta/portfolioform/PortfolioForm'
export default function PortfolioCta(){
  const [showForm, setShowForm] = useState(false);
    return(
        <>
            <section className="portfolio-cta-section">
      
      {/* Left Content */}
      <div className="portfolio-cta-content">
        <h2>start your design journey!</h2>
        <p>Contact us today for a personalized consultation and discover how KPK ENTERPRISES can transform your space into something extraordinary.</p>
        <button onClick={() => setShowForm(true)}>Start My Interior Plan</button>
      </div>

      {/* Right Image */}
      <div className="portfolio-cta-image">
        <img src={Image} alt="Interior CTA" />
      </div>

    </section>
         {/* INSERT HERE (AFTER section) */}
          {showForm && (
            <PortfolioForm closeForm={() => setShowForm(false)} />
          )}
        </>
    )
}