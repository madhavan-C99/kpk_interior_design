import React, { useState } from "react";
import "../userform/UserForm.css";

import Ribbon from "../../assets/userform/warranty.png";
import Calendar from "../../assets/userform/delivery.png";
import Vector from "../../assets/userform/factory.png";
import Service from "../../assets/userform/service.png";
import India from "../../assets/userform/india.png";

import { FaChevronDown, FaTimes  } from "react-icons/fa";
import KitchenImg from "../../assets/userform/userform_img.png";

export default function UserForm({ onClose }) {
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

  /* ================= SUBMIT VALIDATION ================= */
//   const handleSubmit = (e) => {
//   e.preventDefault();

//   validateField("name", form.name);
//   validateField("mobile", form.mobile);

//   if (
//     !form.name ||
//     errors.name ||
//     !form.mobile ||
//     errors.mobile
//   ) {
//     return;
//   }

//   alert("Form submitted successfully ✅");
//   onClose && onClose();
// };
 

  return (
    <section className="userform-budget-modal">
      <div className="userform-budget-box">

        {/* LEFT */}
        <div className="userform-budget-left">
          <img src={KitchenImg} alt="Interior" />
        </div>

        {/* RIGHT */}
        <div className="userform-budget-right">
          <button className="userform-close-btn" onClick={onClose}><FaTimes className="userform-icon"/></button>

          <h2>Design For Every Budget</h2>

          <div className="userform-icon-row">
            <div><img src={Ribbon} /><p>6 Yr Warranty</p></div>
            <div><img src={Calendar} /><p>45 Days Delivery</p></div>
            <div><img src={Vector} /><p>In-house Factory</p></div>
            <div><img src={Service} /><p>Post Installation</p></div>
          </div>

          <form className="userform-userform-form" 
          // onSubmit={handleSubmit}
          >
            
            {/* NAME */}
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />
            {errors.name && <span className="userform-error">{errors.name}</span>}

            {/* MOBILE */}
            <div className="userform-mobile-field">
              <span>
                <img src={India} alt="India"  className="userform-mobile-india"/>
                <FaChevronDown className="userform-down-arrow-icon" />
              </span>
              <input
                type="tel"
                name="mobile"
                placeholder="Mobile Number"
                value={form.mobile}
                onChange={handleChange}
              />
            </div>
            {errors.mobile && <span className="userform-error">{errors.mobile}</span>}

            {/* LOCATION */}
            <input
              type="text"
              name="location"
              placeholder="Location"
              // value={form.location}
              // onChange={handleChange}
              value={value}
              onChange={(e) => setValue(e.target.value)}
              className={`input-box ${value ? "filled" : ""}`}
            />

            {/* PURPOSE */}
            <input
              type="text"
              name="purpose"
              placeholder="Purpose"
              value={form.purpose}
              onChange={handleChange}
            />

            {/* <button className="userform-submit-btn">
              Start My Interior Plan
            </button> */}
            <button
              className="userform-submit-btn"
              disabled={errors.name || errors.mobile || !form.name || !form.mobile}
            >
              Start My Interior Plan
            </button>


            <p className="userform-policy">
              By submitting this form, you agree to the{" "}
              <span>privacy policy</span> & <span>terms and conditions</span>.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}