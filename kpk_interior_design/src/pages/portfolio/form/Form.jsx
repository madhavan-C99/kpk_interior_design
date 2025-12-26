import React from "react";
import Ribbon from '../../../assets/portfolio/ion_ribbon-outline.png';
import Calendar from '../../../assets/portfolio/uil_calender.png';
import Vector from'../../../assets/portfolio/Vector.png';
import Service from '../../../assets/portfolio/mdi_account-service-outline.png';
import '../../../pages/portfolio/form/Form.css';
import {useState} from 'react'

export default function Form({ item, closePopup }) {
  if (!item) return null;

  const imageToShow = item.selectedImage || item.Img1 || item.images?.[0] || "";

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [errors, setErrors] = useState({});

  /* VALIDATION FUNCTION */
  const validateForm = () => {
    let newErrors = {};

    // NAME VALIDATION
    if (!name.trim()) {
      newErrors.name = "Name is required";
    } else if (!/^[A-Za-z\s]+$/.test(name)) {
      newErrors.name = "Only letters & spaces allowed";
    } else if (name.trim().length < 3) {
      newErrors.name = "Minimum 3 characters required";
    }

    // MOBILE VALIDATION
    if (!mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^\d{10}$/.test(mobile)) {
      newErrors.mobile = "Enter valid 10 digit mobile number";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully ✅");
    }
  };

  return (
    <section className="portfolio-form-sect" onClick={closePopup}>
      <div className="portfolio-form-box" onClick={(e) => e.stopPropagation()}>

        {/* LEFT IMAGE */}
        <div className="portfolio-form-left">
          {imageToShow ? (
            <img src={imageToShow} alt="hero" className="portfolio-left-img" />
          ) : (
            <div className="portfolio-left-placeholder">No image</div>
          )}
          {/* <div className="image-dots">
            <span className="dot" />
            <span className="dot" />
          </div> */}
        </div>

        {/* RIGHT PANEL */}
        <aside className="portfolio-form-right">
          <div className="porfolio-form_grand">
            <h3>{item.title || "Project"}</h3>
            <button className="close-btn" onClick={closePopup}>×</button>
          </div>

          <div className="portfolio-form-icon">
            <div className="icon-item">
              <img src={Ribbon} />
              <p>Flat 6 Year Warranty</p>
            </div>
            <div className="icon-item">
              <img src={Calendar} />
              <p>45- Days Delivery</p>
            </div>
            <div className="icon-item">
              <img src={Vector} />
              <p>In-House Factory</p>
            </div>
            <div className="icon-item">
              <img src={Service} />
              <p>Post Installation Service</p>
            </div>
          </div>

          {/* FORM */}
          <form className="portfolio-form-fields" onSubmit={handleSubmit}>

            {/* NAME */}
            <input
                className="text-input"
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => {
                  const value = e.target.value;
                  if (/^[A-Za-z\s]*$/.test(value)) {
                    setName(value);
                  }
                }}
              />
              {errors.name && <small className="error-text">{errors.name}</small>}


            {/* MOBILE */}
            <div className="mobile-row">
              <div className="country-select">
                <span>🇮🇳</span>
                <span className="country-code">+91</span>
              </div>
              <input
                className="text-input"
                type="tel"
                placeholder="Mobile Number"
                value={mobile}
                maxLength={10}
                onChange={(e) =>
                  setMobile(e.target.value.replace(/[^0-9]/g, ""))
                }
              />
            </div>
            {errors.mobile && <small className="error-text">{errors.mobile}</small>}

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