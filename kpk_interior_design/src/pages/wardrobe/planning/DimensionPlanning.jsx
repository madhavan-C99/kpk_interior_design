import React from "react";
import dimn_img from '../../../assets/services/images/Frame 1000012894.png'
import '../../services/forms/ContactForm.css'

function DimensionPlanning(){
    return (
        <>
            <div className="contact_overall_container2">
                <div className="detail_text_block2"> 
                    <h2 className="section_title2">Perfect Wardrobe Dimensions & Planning</h2> 
                    <p className="detail_description2"> 
                       Upgrade your home with space-savvy wardrobe designs offering style, order and effortless 
                       use. Created with factory-finish precision, KPK Enterprises specialises in personalised 
                       wardrobe design in Pondicherry.
                    </p>
                </div>
                <div className="layout_content_wrapper2">  
                    <div className="kitchen_layout_image2"> 
                        <img src={dimn_img} alt="Component37" /> 
                    </div>
                    <div className="detail_form_container2"> 
                        <form action="#" className="connect_form2"> 
                            <h3 className="form_title2">Let’s Connect Our Wardrobe Experts.</h3> 
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

export default DimensionPlanning;