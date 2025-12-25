import React from "react";
import {useState} from "react"
import dimn_img from '../../../assets/services/images/Frame1000012894.png'
import '../../services/forms/ContactForm.css'

function DimensionPlanning(){

    const [form, setForm] = useState({
        fullname: "",
        mobilenumber: "",
        location: "",
        purpose: "",
      });
    
      const [errors, setErrors] = useState({});
    
    // Update input values
      const handleChange = (e) => {
        const { name, value } = e.target;
    
        // NAME: allow only letters
        if (name === "fullname") {
          if (!/^[a-zA-Z\s]*$/.test(value)) {
            setErrors({ ...errors, fullname: "Only characters are allowed" });
            return;
          }
        }
    
        // MOBILE: allow only numbers
        if (name === "mobilenumber") {
          if (!/^[0-9]*$/.test(value)) {
            setErrors({ ...errors, mobilenumber: "Only numbers are allowed" });
            return;
          }
        }
    
        setForm({ ...form, [name]: value });
        setErrors({ ...errors, [name]: "" });
      };
    
    
      // Validate field when user leaves input
      const handleBlur = (e) => {
        const { name, value } = e.target;
        let error = "";
    
        if (name === "fullname" && value.trim().length < 3) {
          error = "Name must be at least 3 letters";
        }
    
        if (name === "mobilenumber" && value.length !== 10) {
          error = "Mobile number must be 10 digits";
        }
    
        if (name === "location" && value.trim() === "") {
          error = "Location is required";
        }
    
        if (name === "purpose" && value.trim() === "") {
          error = "Purpose is required";
        }
    
        setErrors({
          ...errors,
          [name]: error,
        });
      };
    
      // Submit form
      const handleSubmit = (e) => {
        e.preventDefault();
    
        if (
          !form.fullname ||
          !form.mobilenumber ||
          !form.location ||
          !form.purpose ||
          errors.fullname ||
          errors.mobilenumber ||
          errors.location ||
          errors.purpose
        ) {
          alert("Please fill all the fields");
          return;
        }
    
        alert("Form submitted successfully!");
      };


    return (
        <>
            <div className="contact_overall_container2">
                <div className="detail_text_block2"> 
                    <h2 className="section_title2">Perfect Wardrobe Dimensions & Planning</h2> 
                    <p className="detail_description2"> 
                       Upgrade your home with space-savvy wardrobe designs offering style, order and effortless 
                       use. Created with factory-finish precision, KPK Enterprise specialises in personalised 
                       wardrobe design in Pondicherry.
                    </p>
                </div>
                <div className="layout_content_wrapper2">  
                    <div className="kitchen_layout_image2"> 
                        <img src={dimn_img} alt="Component37" /> 
                    </div>
                    <div className="detail_form_container2"> 
                        <form action="#" onSubmit={handleSubmit} className="connect_form2"> 
                            <h3 className="form_title2">Let’s Connect Our Wardrobe Experts.</h3> 
                            <input type="text" placeholder="Full Name" name="fullname" className="form_input2" value={form.fullname} onChange={handleChange} onBlur={handleBlur} /> 
                            {errors.fullname && <span className="error_message2">{errors.fullname}</span>}

                            <input type="text" placeholder="Mobile Number" name="mobilenumber" className="form_input2" value={form.mobilenumber} onChange={handleChange} onBlur={handleBlur} /> 
                            {errors.mobilenumber && <span className="error_message2">{errors.mobilenumber}</span>}

                            <input type="text" placeholder="Location" name="location" className="form_input2" value={form.location} onChange={handleChange} onBlur={handleBlur} /> 
                            {errors.location && <span className="error_message2">{errors.location}</span>}

                            <input type="text" placeholder="Purpose" name="purpose" className="form_input2" value={form.purpose} onChange={handleChange} onBlur={handleBlur}/> 
                            {errors.purpose && <span className="error_message2">{errors.purpose}</span>}
                            
                            <button type="submit" className="connect_cta2">Connect With Design Expert</button> 
                        </form>
                    </div>  
                </div>
            </div>
        </>
    )

}

export default DimensionPlanning;