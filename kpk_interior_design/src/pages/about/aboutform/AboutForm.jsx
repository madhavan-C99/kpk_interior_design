import React from "react";
import Ribbon from '../../../assets/about/ion_ribbon-outline.png';
import Calendar from '../../../assets/about/uil_calender.png';
import Vector from'../../../assets/about/Vector.png';
import Service from '../../../assets/about/mdi_account-service-outline.png';
import Formimg from '../../../assets/about/num-rel-sev(3).png'
import '../../../pages/about/aboutform/AboutForm.css';

export default function AboutForm({ closeForm }) {

  return (
    <section className="about-form-overlay" onClick={closeForm}>
      <div
        className="about-form-box"
        onClick={(e) => e.stopPropagation()}
      >
        {/* LEFT */}
        <div className="about-form-left">
          <img src={Formimg} alt="form" className="about-form-img" />

          <div className="about-form-dots">
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>

        {/* RIGHT */}
        <aside className="about-form-right">
          <div className="about-form-header">
            <h3>Start Your Interior Journey</h3>

            <button
              className="about-form-close"
              aria-label="close"
              onClick={closeForm}
            >
              ×
            </button>
          </div>

          <div className="about-form-icons">
            <div className="about-icon-item">
              <img src={Ribbon} />
              <p>Flat 6 Year Warranty</p>
            </div>
            <div className="about-icon-item">
              <img src={Calendar} />
              <p>45 Days Delivery</p>
            </div>
            <div className="about-icon-item">
              <img src={Vector} />
              <p>In-House Factory</p>
            </div>
            <div className="about-icon-item">
              <img src={Service} />
              <p>Post Installation Service</p>
            </div>
          </div>

          <form className="about-form-fields">
            <input className="about-input" placeholder="Name" />

            <div className="about-mobile-row">
              <div className="about-country">
                🇮🇳 <span>+91</span>
              </div>
              <input className="about-input" placeholder="Mobile Number" />
            </div>

            <input className="about-input" placeholder="Location" />
            <input className="about-input" placeholder="Purpose" />

            <button className="about-form-btn">
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
