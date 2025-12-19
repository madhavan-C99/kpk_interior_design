import React from "react";
import Ribbon from '../../../assets/price_img/ion_ribbon-outline.png';
import Calendar from '../../../assets/price_img/uil_calender.png';
import Vector from'../../../assets/price_img/Vector.png';
import Service from '../../../assets/price_img/mdi_account-service-outline.png';
import Formimg from '../../../assets/price_img/num-rel-three(1).png'
import '../priceform/PriceForm.css';

export default function PriceForm({ closeForm }) {

  return (
    <section className="price-form-overlay" onClick={closeForm}>
      <div
        className="price-form-container"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT */}
        <div className="price-form-left">
          <img src={Formimg} alt="hero" className="price-form-img" />

          <div className="price-form-dots">
            <span className="price-form-dot" />
            <span className="price-form-dot" />
          </div>
        </div>

        {/* RIGHT */}
        <aside className="price-form-right">
          <div className="price-form-header">
            <h3>Start Your Interior Journey</h3>

            <button
              className="price-form-close"
              aria-label="close"
              onClick={closeForm}
            >
              ×
            </button>
          </div>

          <div className="price-form-icons">
            <div className="price-form-icon-item">
              <img src={Ribbon} />
              <p>Flat 6 Year Warranty</p>
            </div>
            <div className="price-form-icon-item">
              <img src={Calendar} />
              <p>45 Days Delivery</p>
            </div>
            <div className="price-form-icon-item">
              <img src={Vector} />
              <p>In-House Factory</p>
            </div>
            <div className="price-form-icon-item">
              <img src={Service} />
              <p>Post Installation Service</p>
            </div>
          </div>

          <form className="price-form-fields">
            <input className="price-form-input" placeholder="Name" />

            <div className="price-form-mobile">
              <div className="price-form-country">
                🇮🇳 <span>+91</span>
              </div>
              <input
                className="price-form-input"
                placeholder="Mobile Number"
              />
            </div>

            <input className="price-form-input" placeholder="Location" />
            <input className="price-form-input" placeholder="Purpose" />

            <button className="price-form-cta">
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
