import React from "react";
import Ribbon from '../../../assets/portfolio/ion_ribbon-outline.png';
import Calendar from '../../../assets/portfolio/uil_calender.png';
import Vector from'../../../assets/portfolio/Vector.png';
import Service from '../../../assets/portfolio/mdi_account-service-outline.png';
import { useState } from "react";
import './Form.css';

export default function Form({ item, closePopup }) {
  if (!item) return null;

  const imageToShow = item.selectedImage || item.Img1 || item.images?.[0] || "";

    const [value, setValue] = useState("");
    const [form, setForm] = useState({
      name: "",
      mobile: "",
      location: "",
      purpose: "",
    });
  
    const [errors, setErrors] = useState({});
  
    /* ================= REAL-TIME VALIDATION ================= */
   const validateField = (name, value) => {
    let error = "";
  
    // NAME VALIDATION
    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      } else if (!/^[A-Za-z ]+$/.test(value)) {
        error = "Only letters and spaces allowed";
      } else if (value.trim().length < 3) {
        error = "Name must be at least 3 characters";
      }
    }
  
    // MOBILE VALIDATION
    if (name === "mobile") {
      if (!value.trim()) {
        error = "Mobile number is required";
      } else if (!/^[0-9]+$/.test(value)) {
        error = "Only numbers allowed";
      } else if (value.length !== 10) {
        error = "Mobile number must be 10 digits";
      }
    }
  
    setErrors((prev) => ({ ...prev, [name]: error }));
  };
  
  
    /* ================= HANDLE CHANGE ================= */
    const handleChange = (e) => {
    const { name, value } = e.target;
  
    // BLOCK non-numbers in mobile
    if (name === "mobile" && !/^[0-9]*$/.test(value)) return;
  
    // LIMIT mobile to 10 digits
    if (name === "mobile" && value.length > 10) return;
  
    setForm({ ...form, [name]: value });
    validateField(name, value);
  };
  

  return (
    <section className="portfolio-form-sect" onClick={closePopup}>
      <div className="portfolio-form-box"
       onClick={(e) => e.stopPropagation()}
       >

        {/* LEFT IMAGE */}
        <div className="portfolio-form-left">
          {imageToShow ? (
            <img src={imageToShow} alt="hero" className="portfolio-left-img" />
          ) : (
            <div className="portfolio-left-placeholder">No image</div>
          )}
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
          <form className="portfolio-form-fields" 
          // onSubmit={handleSubmit}
          >

            {/* NAME */}
            <input
                className="text-input"
                type="text"
                placeholder="Name"
                value={form.name}
                onChange={handleChange}
                name="name"
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
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                maxLength={10}
                onChange={handleChange}
              />
            </div>
            {errors.mobile && <small className="error-text">{errors.mobile}</small>}
            {/* LOCATION*/}
            <input 
              className="text-input" 
              type="text" 
              placeholder="Location"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              name="location"
              // value={form.location}
              />
              {/* PURPOSE */}
            <input 
              className="text-input" 
              type="text" 
              placeholder="Purpose"
              value={form.purpose}
              onChange={handleChange}
              name="purpose"
              />

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