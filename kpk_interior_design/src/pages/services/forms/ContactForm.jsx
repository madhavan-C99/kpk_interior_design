import React from "react";
import './ContactForm.css'
import Component37 from '../../../assets/services/images/Component37.png'

function ContactForm(){
    return (
        <>
            <div className="contact_overall_container2">
                <div className="detail_text_block2"> 
                    <h2 className="section_title2">Create the Perfect Modular Kitchen with Ideal Layouts</h2> 
                    <p className="detail_description2"> 
                        If you’re looking for a luxurious kitchen, KPK Enterprise stands out as the 
                        top choice for luxury modular kitchen design in Pondicherry. We craft 
                        stylish, ergonomic layouts, use premium materials, and deliver fully 
                        customized, functional kitchens for modern homes.
                    </p>
                </div>
                <div className="layout_content_wrapper2">  
                    <div className="kitchen_layout_image2"> 
                        <img src={Component37} alt="Component37" /> 
                    </div>
                    <div className="detail_form_container2"> 
                        <form className="connect_form2"> 
                            <h3 className="form_title2">Let’s Connect Our Modular 
                                Kitchen Experts.</h3> 
                            <input type="text" placeholder="Full Name" name="fullname" className="form_input2" /> 
                            <input type="tel" placeholder="Mobile Number" name="mobilenumber" className="form_input2" /> 
                            <input type="text" placeholder="Location" name="location" className="form_input2" /> 
                            <input type="text" placeholder="Purpose" name="purpose" className="form_input2" /> 
                            <button type="submit" className="connect_cta2">Connect With Design Expert</button> 
                        </form>
                    </div>  
                </div>
            </div>
        </>
    )
}

export default ContactForm