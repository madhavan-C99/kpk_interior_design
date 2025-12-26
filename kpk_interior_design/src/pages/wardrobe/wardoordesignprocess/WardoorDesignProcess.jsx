import design1 from '../../../assets/services/images/image80.png'
import design2 from '../../../assets/services/images/Maskgroup.png'
import '../../services/designprocess/DesignProcess.css'
import React, { useState, useEffect, useRef } from 'react';

const dynamicStyles = {
  // The crucial CSS mask logic that relies on the state/variable
  before: (pos) => ({
    mask: `linear-gradient(to right, #000 0, ${pos}%, #0000 0)`,
  }),
  after: (pos) => ({
    mask: `linear-gradient(to right, #0000 0, ${pos}%, #000 0)`,
  }),
  // Range input needs these inline styles to function as an overlay
  range: {
    appearance: 'none',
    WebkitAppearance: 'none',
    background: 'transparent',
    zIndex: 5,
    cursor: 'pointer',
    WebkitTapHighlightColor: 'transparent',
    border: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
  },
};

 export default function WardoorDesignProcess(){
//    range.addEventListener("input", () => {
// 	wrapper.style.setProperty("--_pos", range.value + "%");
// });

  const [sliderPos, setSliderPos] = useState(50);
  const wrapperRef = useRef(null);

  // Effect to update the custom CSS variable --_pos on the wrapper element
  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.setProperty('--_pos', `${sliderPos}%`);
    }
  }, [sliderPos]);

  const handleRangeChange = (event) => {
    setSliderPos(event.target.value);
  };

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
    
    return(
        <>
        <section>
            <div className='design_process3'>
                <div className='design_process_head3'>
                    <h1>Wardrobe Space Revamp & Interior Upgrades</h1>
                    <p>KPK Enterprise offers space-optimised, modern wardrobe revamps featuring smart storage upgrades and seamless interior detailing, specialising in factory-finish customised wardrobe designs for Pondicherry and Cuddalore homes.</p>
                </div>
                <div className='design_process_body3'>
                    <div className='design_draw3'>
                            <div 
                            className="wrapper3" 
                            ref={wrapperRef} 
                            // Set the initial custom property directly on the element
                            style={{ '--_pos': `${sliderPos}%` }} 
                            >
                            
                            {/* Before Image Section */} 
                            <section 
                                className="before3 content3"
                                style={dynamicStyles.before(sliderPos)} 
                            >
                                <div className="content__inner3">
                                <img 
                                    alt="hand holding a syringe PNG, SVG" 
                                    src={design2}
                                    // src="https://ouch-cdn2.icons8.com/wbX-9zk_7Sr9pIxXKhQENwXw40yfKUH4xpCLAWtmYvE/rs:fit:368:544/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMTI5/L2UzNzQwNDM0LWRh/ODgtNGRkNi1hNWQ2/LTcxNGRhMjU5Mjll/Yy5wbmc.png"
                                    className="image__style3"
                                />
                                </div>
                            </section>

                            {/* After Image Section */}
                            <section 
                                className="after3 content3"
                                style={dynamicStyles.after(sliderPos)} 
                            >
                                <div className="content__inner3">
                                <img 
                                    alt="hand holding the letter t PNG, SVG" 
                                    src={design1}
                                    // src="https://ouch-cdn2.icons8.com/MY2r10zyI8YIlh6h_WlxoJF097s3KUf9kpszP-KKq40/rs:fit:368:491/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvMjgw/LzU0NmQ5Yjc1LWI5/NWQtNGM4Ni1hMjZm/LTNkZDc2ZGY1M2Ex/Ny5wbmc.png"
                                    className="image__style3"
                                />
                                </div>
                            </section>
                              <div className="scrubber_handle_line3" style={{ left: `${sliderPos}%` }}>
                                <div className="scrubber_handle_icon3">
                                  <a href="" className="design_left_icon3">&#10094;</a>
                                  <a href="">|</a>
                                   <a href="" className="design_right_icon3">&#10095;</a> 
                                </div>
                            </div>
                            {/* Range Input Slider */}
                            <input 
                                type="range" 
                                min="0"
                                max="100"
                                value={sliderPos}
                                onChange={handleRangeChange}
                                style={dynamicStyles.range}
                                placeholder='<>'
                            />
                            </div>
                    </div>
                    <div className='design_form3'>
                        <div className='design_from_head3'>
                            <h1>Design for Every Budget</h1>
                        </div>
                        <form action="" onSubmit={handleSubmit} className='design_form_body3' >
                                <input type="text" placeholder='Full Name' name='fullname' className='design_form_input3' value={form.fullname} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.fullname && <span className="error_message3">{errors.fullname}</span>}

                                <input type="text"  name="mobilenumber" placeholder='Mobile Number'  className='design_form_input3' value={form.mobilenumber} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.mobilenumber && <span className="error_message3">{errors.mobilenumber}</span>}

                                <input type="text"  name="location" placeholder='Location'  className='design_form_input3' value={form.location} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.location && <span className="error_message3">{errors.location}</span>}

                                <input type="text"  name="purpose" placeholder='Purpose'  className='design_form_input3' value={form.purpose} onChange={handleChange} onBlur={handleBlur}/>
                                {errors.purpose && <span className="error_message3">{errors.purpose}</span>}

                                <button className='design_form_button3'>Let's Connect</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}