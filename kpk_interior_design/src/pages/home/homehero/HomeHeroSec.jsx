import React, { useState, useEffect, useCallback } from 'react';
import heroimg1 from '../../../assets/home/images/Frame 1000012972.png'
import heroimg2 from '../../../assets/home/images/Frame 1000012974.png'
import heroimg3 from '../../../assets/home/images/Frame 1000012972-1.png'
import heroimg4 from '../../../assets/home/images/Frame 1000012975.png'
import heroimg5 from '../../../assets/home/images/Frame 1000012973.png'
import grantielogo from '../../../assets/home/images/Frame 1000012606.png'


import './HomeHeroSec.css'


// --- 2. Slide Data (Using placeholder images instead of local files) ---
const slides = [
  { id: 1, caption: "Best Interior Design in Pondicherry – KPK Enterprise", imageUrl:heroimg1,logo:grantielogo},
  { id: 2, caption: "Best Interior Design in Pondicherry – KPK Enterprise", imageUrl:heroimg2,logo:grantielogo},
  { id: 3,caption: "Best Interior Design in Pondicherry – KPK Enterprise", imageUrl:heroimg3 ,logo:grantielogo},
  { id: 4, caption: "Best Interior Design in Pondicherry – KPK Enterprise", imageUrl:heroimg4,logo:grantielogo },
  { id: 4, caption: "Best Interior Design in Pondicherry – KPK Enterprise", imageUrl:heroimg5 ,logo:grantielogo}

];

// --- 3. React Component Logic (Now includes Auto-Play/Infinite Scroll) ---
export default function HomeHeroSec ({autoPlayInterval = 200000} ) {
  const [slideIndex, setSlideIndex] = useState(0); 
  const totalSlides = slides.length;

  const plusSlides = useCallback((n) => {
    setSlideIndex(prevIndex => {
        let newIndex = prevIndex + n;
        
        // Looping logic (n > slides.length or n < 1) for infinite scroll
        if (newIndex >= totalSlides) {
            return 0; 
        } 
        if (newIndex < 0) {
            return totalSlides - 1; 
        }
        return newIndex;
    });
  }, [totalSlides]);

  const currentSlideFunc = (n) => {
    // Convert 1-based index (n) to 0-based index (n - 1)
    setSlideIndex(n - 1);
  };

  // EFFECT ADDED for Infinity Scroll / Auto-Play
  useEffect(() => {
    // Calls plusSlides(1) every interval for continuous movement
    const interval = setInterval(() => plusSlides(1), autoPlayInterval);
    return () => clearInterval(interval); // Cleanup on unmount
  }, [plusSlides, autoPlayInterval]);


  return (
    <div className="home_slideshow__container3">

      {/* Slide Images (mySlides fade) */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className="home_mySlides3"
          // Opacity controls visibility and uses the CSS transition for fading
          style={{ opacity: index === slideIndex ? 1 : 0, zIndex: index === slideIndex ? 5 : 1 }}
        >
          <img src={slide.logo} alt="" className='home_grantie_logo3'/>
          <img src={slide.imageUrl} alt={slide.caption} className='home_slide_img3'/>
          
          {/* Caption text */}
          <div className="home_hero_title3">{slide.caption}</div>
          <button className='home_hero_button3'>Start My Interior Plan</button>
        </div>
      ))}

      {/* Navigation Arrows (prev, next) */}
      <a className="home_prev3" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="home_next3" onClick={() => plusSlides(1)}>&#10095;</a>

      {/* Dot Indicators Container - Placed inside the slideshow-container div for absolute positioning */}
      <div className="home_dot_container3">
        {slides.map((_, index) => (
          <span 
            key={index}
            className={`home_dot3 ${index === slideIndex ? 'active' : ''}`}
            onClick={() => currentSlideFunc(index + 1)}
          ></span>
        ))}
      </div>
    </div>
  );
};

// Main App Component
// const App = () => {
//     return (
//         <div style={{ fontFamily: 'Verdana, sans-serif' }}>
//              {/* Inject Custom CSS */}
//              <style>
//                 {CustomStyles}
//              </style>
//              <ImageSlider slides={slides} autoPlayInterval={4000} /> {/* Auto-play every 4 seconds */}
//         </div>
//     );
// };

// export default App;