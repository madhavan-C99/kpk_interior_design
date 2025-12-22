import design1 from '../../../assets/services/images/image 80.png'
import design2 from '../../../assets/services/images/Mask group.png'
import './DesignProcess.css'
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

 export default function DesignProcess(){
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
    return(
        <>
        <section>
            <div className='design_process3'>
                <div className='design_process_head3'>
                    <h1>Redesign, Revamp, and Refresh Your Home Spaces Today</h1>
                    <p>Transform your living spaces with KPK Enterprises, the best interior designers in Pondicherry. We deliver stylish, functional, and personalized interiors, revamping every corner with premium materials and expert design solutions.</p>
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
                        <form action="" className='design_form_body3' >
                                <input type="text" placeholder='Full Name' name='fullname' className='design_form_input3'/>
                                <input type="number"  name="number" placeholder='Mobile Number'  className='design_form_input3'/>
                                <input type="text"  name="text" placeholder='Location'  className='design_form_input3'/>
                                <input type="text"  name="text" placeholder='Purpose'  className='design_form_input3'/>
                                <button className='design_form_button3'>Let's Connect</button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
        </>
    )
}

 



// import React, { useState } from 'react';
// // import './ToggleSwitch.css'; // Import the CSS file

// const ToggleSwitch = ({ initialChecked = false, onChange, label }) => {
//   const [isChecked, setIsChecked] = useState(initialChecked);

//   const handleToggle = () => {
//     const newState = !isChecked;
//     setIsChecked(newState);
//     // Notify the parent component (DrawingApp) of the change
//     onChange(newState);
//   };

//   return (
//     <div className="toggle-container">
//       {label && <span className="toggle-label">{label}:</span>}
//       <label className="switch">
//         <input 
//           type="checkbox" 
//           checked={isChecked} 
//           onChange={handleToggle} 
//         />
//         <span className="slider round"></span>
//       </label>
//     </div>
//   );
// };

// export {ToggleSwitch};



// import React, { useState, useRef } from 'react';
// // import ToggleSwitch from './ToggleSwitch';
// // NOTE: Make sure to import or define the image source
// import demoImage from '../../../assets/services/images/Main.png'; 

// const DrawingApp = () => {
//   // State to control drawing ability (ON/OFF)
//   const [isDrawingEnabled, setIsDrawingEnabled] = useState(false);
  
//   // State to track if the mouse button is currently pressed down
//   const [isDrawing, setIsDrawing] = useState(false);
  
//   const canvasRef = useRef(null);
  
//   // 1. Handler passed to the ToggleSwitch
//   const handleToggleChange = (isEnabled) => {
//     setIsDrawingEnabled(isEnabled);
//     // console.log("Drawing is now":{ ${isEnabled ? 'ON' : 'OFF'}});
//   };

//   // 2. Start Drawing function (Mouse Down)
//   const startDrawing = (e) => {
//     // ONLY start drawing if the switch is ON
//     if (!isDrawingEnabled) return; 

//     setIsDrawing(true);
//     // Move the pen to the starting point
//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
    
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     ctx.beginPath();
//     ctx.moveTo(x, y);
//   };

//   // 3. Draw function (Mouse Move)
//   const draw = (e) => {
//     // ONLY draw if the switch is ON AND the mouse button is down
//     if (!isDrawingEnabled || !isDrawing) return; 

//     const canvas = canvasRef.current;
//     const ctx = canvas.getContext('2d');
    
//     const rect = canvas.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     ctx.lineTo(x, y);
//     ctx.stroke(); // Draw the line segment
//   };

//   // 4. Stop Drawing function (Mouse Up or Leave)
//   const stopDrawing = () => {
//     setIsDrawing(false);
//   };
  
//   return (
//     <div style={{ padding: '20px', textAlign: 'center' }}>
//       <h1>Image Drawing Toggle</h1>
      
//       <div style={{ marginBottom: '20px' }}>
//         <ToggleSwitch 
//           onChange={handleToggleChange} 
//           label="Enable Drawing" 
//         />
//         <p>Current Status: <strong>{isDrawingEnabled ? 'DRAWING ENABLED' : 'DISABLED'}</strong></p>
//       </div>

//       <div style={{ position: 'relative', display: 'inline-block' }}>
//         {/* The background image */}
//         <img 
//           src={demoImage} 
//           alt="Drawing Area"
//           style={{ width: '600px', height: 'auto', display: 'block' }}
//         />

//         {/* The overlay canvas */}
//         <canvas
//           ref={canvasRef}
//           width={600} 
//           height={400} // Set dimensions to match image area
//           style={{
//             position: 'absolute',
//             top: 0,
//             left: 0,
//             cursor: isDrawingEnabled ? 'crosshair' : 'default', // Change cursor based on state
//             border: '1px solid #ddd'
//           }}
//           // Event handlers
//           onMouseDown={startDrawing}
//           onMouseMove={draw}
//           onMouseUp={stopDrawing}
//           onMouseLeave={stopDrawing}
//         />
//       </div>
//     </div>
//   );
// };

// export { DrawingApp};