// import React from 'react'
// //css
// import '../../pages/contact/Contact.css';
// //image
// import ContactImg from '../../assets/contact/contact-img.png';
// import ContactForm from '../../assets/contact/contact-form.png';
// import contactformBack from '../../assets/contact/contact-form-back.png';
// //icons
// import {  FaCheckCircle, FaChevronDown,FaChevronUp,FaTimesCircle  ,FaPhone, FaInstagram, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";


// //state
// // import { useState } from 'react';
// // import ContactFaq from './faq/contactfaq';

// export default function Contact() {
   
//   return (
//     <>
//     <section className='contact-hero_page'>
//         <div>
//             <h2>Contact Us</h2>
//         </div>
//         <div className='contact-img_set'>
//             <img src={ContactImg} className='contact-hero_img' alt="" />
//         </div>
//     </section>
//     {/* contact form */}
//     <section className='contact-form_sect'>
//         <div className='contact-form_details'>
//             {/* right side */}
//                 <div className='contact-form_det'>
//                     <h2>Contact Information</h2>
//                     <div className='contact-form_det-set'>
//                         <div>
//                             <i><FaPhone className='contact-form_det-set-icon'/></i>
//                             <p>+91 87648 39262 </p>
//                         </div>
//                         <div>
//                             <i><FaEnvelope className='contact-form_det-set-icon'/></i>
//                             <p>kpkenterprisespdy@gmail.com</p>
//                         </div>
//                         <div>
//                             <i><FaInstagram className='contact-form_det-set-icon'/></i>
//                             <p>_kpk_enterprises</p>
//                         </div>
//                         <div>
//                             <i><FaMapMarkerAlt className='contact-form_det-set-icon'/></i>
//                             <p style={{lineHeight:"40px"}}>VPR Garden, No.151/41, Bypass Road, Vanur, T.K, Auroville, Pondicherry, Tamil Nadu 605101</p>
//                         </div>
//                     </div>
//             </div>
//              {/* Left side */}
//             <div className='contact-form-des'>
//                 <form >
//                     <div>
//                         <label htmlFor="">First Name</label>
//                         <input type="text" />
//                     </div>
//                     <div>
//                         <label htmlFor="">Mobile Number</label>
//                         <input type="number" />
//                     </div>
//                     <div>
//                         <label htmlFor="">Email id</label>
//                         <input type="text" />
//                     </div>
//                     <div>
//                         <label htmlFor="">Purpose</label>
//                         <input type="text" />
//                     </div>
//                     <div>
//                         <label htmlFor="">Location</label>
//                         <input type="text" />
//                     </div>
                    
//                 </form>
//                 <div style={{textAlign:"right",marginTop:"40px"}}>
//                     <button>Send Message</button>
//                     <div className='contact-form-arrow-box'>
//                         <img src={ContactForm} className='contact-form_arrow'/>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//     {/* <ContactFaq/> */}
//     </>
//   )
// }

import React from 'react'
//css
import './Contact.css';
//image
import ContactImg from '../../assets/contact/contact-img.png';
import ContactForm from '../../assets/contact/contact-form.png';
import contactformBack from '../../assets/contact/contact-form-back.png';
//icons
import {  FaCheckCircle, FaChevronDown,FaChevronUp,FaTimesCircle  ,FaPhone, FaInstagram, FaEnvelope, FaMapMarkerAlt} from "react-icons/fa";


//state
import { useState } from 'react';
import ContactFaq from './faq/contactfaq';

export default function Contact() {

 const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    purpose: "",
    location: ""
  });

  const [errors, setErrors] = useState({});

  /* ================= FIELD VALIDATION ================= */
  const validateField = (name, value) => {
    let error = "";

    if (name === "name") {
      if (!value.trim()) {
        error = "Name is required";
      } else if (!/^[A-Za-z\s]+$/.test(value)) {
        error = "Only letters and spaces allowed";
      } else if (value.trim().length < 3) {
        error = "Minimum 3 characters required";
      }
    }

    if (name === "mobile") {
      if (!value) {
        error = "Mobile number is required";
      } else if (!/^\d+$/.test(value)) {
        error = "Only numbers allowed";
      } else if (value.length !== 10) {
        error = "Enter valid 10 digit number";
      }
    }

    if (name === "email") {
      if (!value.trim()) {
        error = "Email is required";
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
        error = "Enter valid email address";
      }
    }

    if (name === "purpose" && !value.trim()) {
      error = "Purpose is required";
    }

    if (name === "location" && !value.trim()) {
      error = "Location is required";
    }

    setErrors(prev => ({ ...prev, [name]: error }));
  };

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (e) => {
    const { name, value } = e.target;

    // block numbers & symbols for name
    if (name === "name" && !/^[A-Za-z\s]*$/.test(value)) return;

    // block non-numbers for mobile
    if (name === "mobile" && !/^\d*$/.test(value)) return;

    // limit mobile length
    if (name === "mobile" && value.length > 10) return;

    setForm({ ...form, [name]: value });
    validateField(name, value);
  };

 
   
  return (
    <>
    <section className='contact-hero_page'>
        <div>
            <h2>Contact Us</h2>
        </div>
        <div className='contact-img_set'>
            <img src={ContactImg} className='contact-hero_img' alt="" />
        </div>
    </section>
    {/* contact form */}
    <section className='contact-form_sect'>
        <div className='contact-form_details'>
            {/* right side */}
                <div className='contact-form_det'>
                    <h2>Contact Information</h2>
                    <div className='contact-form_det-set'>
                        <div>
                            <i><FaPhone className='contact-form_det-set-icon' style={{transform: 'rotate(102deg)'}}/></i>
                            <p><a href="tel:+918764839262" style={{color:'white',textDecoration:"none"}}>+91 87648 39262</a></p>
                        </div>
                        <div>
                            <i><FaEnvelope className='contact-form_det-set-icon'/></i>
                            <p><a href="mailto:kpkenterprisespdy@gmail.com" style={{color:'white',textDecoration:"none"}}>kpkenterprisespdy@gmail.com</a></p>
                        </div>
                        <div>
                            <i><FaInstagram className='contact-form_det-set-icon'/></i>
                            <p>_kpk_enterprises</p>
                        </div>
                        <div>
                            <i><FaMapMarkerAlt className='contact-form_det-set-icon'/></i>
                            <p style={{lineHeight:"40px"}}>VPR Garden, No.151/41, Bypass Road, Vanur, T.K, Auroville, Pondicherry, Tamil Nadu 605101</p>
                        </div>
                    </div>
            </div>
             {/* Left side */}
            <div className='contact-form-des'>
                <form>
                    <div>
                        <label htmlFor=""  className={errors.name ? "error-label-name" : ""}>First Name</label>
                        {/* NAME */}
                            <input
                                name="name"
                                placeholder="First Name"
                                value={form.name}
                                onChange={handleChange}
                                 className={errors.name ? "error-input-name" : ""}
                            />
                            {errors.name && <small className="contact-error-text">{errors.name}</small>}
                    </div>
                        <div>
                                <label className={errors.mobile ? "error-label-mobile" : ""}>
                                              Mobile Number
                                            </label>

                                            <input
                                              name="mobile"
                                              value={form.mobile}
                                              onChange={handleChange}
                                              className={errors.mobile ? "error-input-mobile" : ""}
                                            />
                                {errors.mobile && <small className="contact-error-text">{errors.mobile}</small>}
                        </div>
                    <div>
                        <label htmlFor="" className={errors.email ? "error-label-email" : ""}>Email id</label>
                            <input
                                name="email"
                                placeholder="Email ID"
                                value={form.email}
                                onChange={handleChange}
                                className={errors.email ? "error-input-email" : ""}
                            />
                            {errors.email && <small className="contact-error-text">{errors.email}</small>}


                    </div>
                    <div>
                        <label htmlFor="" className={errors.purpose ? "error-label-purpose" : ""}>Purpose</label>
                            <input
                                name="purpose"
                                placeholder="Purpose"
                                value={form.purpose}
                                onChange={handleChange}
                                className={errors.purpose ? "error-input-purpose" : ""}
                            />
                            {errors.purpose && <small className="contact-error-text">{errors.purpose}</small>}
                    </div>
                    <div>
                        <label htmlFor=""className={errors.location ? "error-label-location" : ""}>Location</label>
                            <input
                                name="location"
                                placeholder="Location"
                                value={form.location}
                                onChange={handleChange}
                                className={errors.location ? "error-input-location" : ""}
                            />
                            {errors.location && <small className="contact-error-text">{errors.location}</small>}

                    </div>
                    
                </form>
                <div style={{textAlign:"right",marginTop:"40px"}}>
                    <button>Send Message</button>
                    <div className='contact-form-arrow-box'>
                        <img src={ContactForm} className='contact-form_arrow'/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <ContactFaq/> */}
    </>
  )
}
