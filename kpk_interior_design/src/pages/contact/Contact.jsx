import React from 'react'
//css
import '../../pages/contact/Contact.css';
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
                            <i><FaPhone className='contact-form_det-set-icon'/></i>
                            <p>+91 87648 39262 </p>
                        </div>
                        <div>
                            <i><FaEnvelope className='contact-form_det-set-icon'/></i>
                            <p>kpkenterprisespdy@gmail.com</p>
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
                <form >
                    <div>
                        <label htmlFor="">First Name</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Mobile Number</label>
                        <input type="number" />
                    </div>
                    <div>
                        <label htmlFor="">Email id</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Purpose</label>
                        <input type="text" />
                    </div>
                    <div>
                        <label htmlFor="">Location</label>
                        <input type="text" />
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
