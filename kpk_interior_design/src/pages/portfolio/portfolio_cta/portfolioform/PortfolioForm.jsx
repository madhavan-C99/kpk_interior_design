import React from "react";
import Ribbon from '../../../../assets/portfolio/ion_ribbon-outline.png';
import Calendar from '../../../../assets/portfolio/uil_calender.png';
import Vector from'../../../../assets/portfolio/Vector.png';
import Service from '../../../../assets/portfolio/mdi_account-service-outline.png';
import Formimg  from'../../../../assets/portfolio/num-ori-6(4).png'
import '../portfolioform/PortfolioForm.css';

export default function Form({ closeForm }) {

  return (
    <section className="portfolio-1-form-sect" onClick={closeForm}>
      <div
        className="portfolio-1-form-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT */}
        <div className="portfolio-1-form-left">
          <img src={Formimg} alt="hero" className="portfolio-1-left-img" />

          {/* <div className="portfolio-1-image-dots">
            <span className="portfolio-1-dot" />
            <span className="portfolio-1-dot" />
          </div> */}
        </div>

        {/* RIGHT */}
        <aside className="portfolio-1-form-right">
          <div className="portfolio-1-form-grand">
            <h3>Start Your Interior Journey</h3>

            <button
              className="portfolio-1-close-btn"
              aria-label="close"
              onClick={closeForm}
            >
              ×
            </button>
          </div>

          <div className="portfolio-1-form-icon">
            <div className="portfolio-1-icon-item">
              <img src={Ribbon} />
              <p>Flat 6 Year Warranty</p>
            </div>
            <div className="portfolio-1-icon-item">
              <img src={Calendar} />
              <p>45 Days Delivery</p>
            </div>
            <div className="portfolio-1-icon-item">
              <img src={Vector} />
              <p>In-House Factory</p>
            </div>
            <div className="portfolio-1-icon-item">
              <img src={Service} />
              <p>Post Installation Service</p>
            </div>
          </div>

          <form className="portfolio-1-form-fields">
            <input className="portfolio-1-text-input" placeholder="Name" />

            <div className="portfolio-1-mobile-row">
              <div className="portfolio-1-country-select">
                🇮🇳 <span>+91</span>
              </div>
              <input
                className="portfolio-1-text-input"
                placeholder="Mobile Number"
              />
            </div>

            <input className="portfolio-1-text-input" placeholder="Location" />
            <input className="portfolio-1-text-input" placeholder="Purpose" />

            <button className="portfolio-1-cta-btn">
              Start My Interior Plan
            </button>
            <p className="fine-print">
              By submitting this form, you agree to the <a href="#">privacy policy</a> &amp; <a href="#">terms and conditions</a>.
            </p>
          </form>
        </aside>
      </div>
    </section>
  );
}