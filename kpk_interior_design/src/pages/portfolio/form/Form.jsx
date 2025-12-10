import React from "react";
import Ribbon from '../../../assets/portfolio/ion_ribbon-outline.png';
import Calendar from '../../../assets/portfolio/uil_calender.png';
import Vector from'../../../assets/portfolio/Vector.png';
import Service from '../../../assets/portfolio/mdi_account-service-outline.png';
import '../../../pages/portfolio/form/Form.css';

export default function Form({ item, closePopup }) {
  if (!item) return null;

  const imageToShow = item.selectedImage || item.Img1 || item.images?.[0] || "";

  return (
    <section className="portfolio-form-sect" onClick={closePopup}>
      <div className="portfolio-form-box" onClick={(e) => e.stopPropagation()}>
        {/* LEFT - image */}
        <div className="portfolio-form-left">
          {imageToShow ? (
            <img src={imageToShow} alt="hero" className="portfolio-left-img" />
          ) : (
            <div className="portfolio-left-placeholder">No image</div>
          )}
          <div className="image-dots">
            <span className="dot" />
            <span className="dot" />
          </div>
        </div>

        {/* RIGHT - panel */}
        <aside className="portfolio-form-right">
          <div className="porfolio-form_grand">
            <h3>{item.title || "Project"}</h3>
            <button className="close-btn" aria-label="close" onClick={closePopup}>×</button>
          </div>

          <div className="portfolio-form-icon">
            <div className="icon-item">
              <img src={Ribbon} alt="ribbon" />
              <p>Flat 6 Year Warranty</p>
            </div>
            <div className="icon-item">
              <img src={Calendar} alt="calendar" />
              <p>45- Days Delivery</p>
            </div>
            <div className="icon-item">
              <img src={Vector} alt="vector" />
              <p>In-House Factory</p>
            </div>
            <div className="icon-item">
              <img src={Service} alt="service" />
              <p>Post Installation Service</p>
            </div>
          </div>

          <form className="portfolio-form-fields" onSubmit={(e) => e.preventDefault()}>
            <input className="text-input" type="text" placeholder="Name" />
            <div className="mobile-row">
              <div className="country-select">
                <span>🇮🇳</span>
                <span className="country-code">+91</span>
              </div>
              <input className="text-input" type="tel" placeholder="Mobile Number" />
            </div>
            <input className="text-input" type="text" placeholder="Location" />
            <input className="text-input" type="text" placeholder="Purpose" />
            <button className="cta-btn">Start My Interior Plan</button>
            <p className="fine-print">
              By submitting this form, you agree to the <a href="#">privacy policy</a> &amp; <a href="#">terms and conditions</a>.
            </p>
          </form>
        </aside>
      </div>
    </section>
  );
}
