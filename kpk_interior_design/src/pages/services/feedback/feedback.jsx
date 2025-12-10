import React, { useState, useEffect, useCallback, useRef } from 'react';

// Assuming these imports are correct based on your file structure
import feedimg1 from '../../../assets/services/images/Frame 1000012306.png';
import feedimg2 from '../../../assets/services/images/Frame 1000012871.png';
import feedimg3 from '../../../assets/services/images/Frame 1000012872.png';

import './feedback.css';

export default function FeedBack() {
    
const CARD_DATA = [
  { 
    id: 1, 
    name: 'Mr. Vignesh ', 
    title: 'House Owner', 
    text: '“Their custom wardrobe with soft-close fittings and factory-finish shutters looks premium. They listened patiently to our needs and delivered more than expected. Easily one of the most professional interior designers in Pondicherry.”', 
    image:feedimg2

},
  { 
    id: 2, 
    name: 'Mr. Aravind ', 
    title: 'MD- Aysha Construction Solutions', 
    text:'“The custom TV unit completely transformed my living room. The factory-finish panels look elegant and durable. Their professionalism, design clarity, and clean installation make them one of the best interior designers in Pondicherry.”', 
    image:feedimg1
  },
  { 
    id: 3, 
    name: 'Mr. Surya ', 
    title: 'Home Owner', 
    text: '“They created a serene pooja unit and a stylish wardrobe for our bedroom. Excellent factory finish, neat execution, and kind communication. Truly the best home interior designers in Pondicherry for customized work.”', 
    image:feedimg3
  },
  { 
    id: 4, 
    name: 'Mrs. Priya ', 
    title: 'Home Owner', 
    text: '“Our new TV unit with storage feels like a luxury showroom piece. The factory-finish quality, colors, and detailing were outstanding. Definitely the most affordable interior designers in Pondicherry without compromising quality or commitment.”', 
    image:feedimg1
  },
];
    const originalFeedback = [
        { "feedimg": feedimg1, "desc": "“I had the pleasure of working with vibrant spaces. Their team of designers exceeded all expectations from our initial meetings to the final designs of my home.”", "name": "MR. NAMRA", "company": "MD- Aysha Construction Solutions" },
        { "feedimg": feedimg3, "desc": "“The quality of the execution was exceptional. KPK Enterprise is truly a master of interior design.”", "name": "MS. CHLOE", "company": "Global Solutions Ltd." },
        { "feedimg": feedimg2, "desc": "“Highly recommend their services for anyone looking for modern and functional home interiors in Pondicherry.”", "name": "MR. FRANK", "company": "Pondi Builders" },
        { "feedimg": feedimg1, "desc": "“Every space is crafted with care, style, and functionality. We are extremely satisfied.”", "name": "MS. EVE", "company": "Creative Spaces Inc." },
    ];
  const [activeIndex, setActiveIndex] = useState(0);
  const totalCards = CARD_DATA.length;
  const intervalRef = useRef(null);

  /**
   * Function to advance to the next card (rotates right).
   * Used by the auto-play loop.
   */
  const goToNext = useCallback(() => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % totalCards);
  }, [totalCards]);

  /**
   * Core logic for auto-play and pause on hover.
   */
  const startAutoPlay = useCallback(() => {
    // Clear any existing interval before starting a new one
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    // Set a new interval to rotate every 3000ms (3 seconds)
    intervalRef.current = setInterval(goToNext, 3000);
  }, [goToNext]);

  const pauseAutoPlay = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
  };

  // Start autoplay when the component mounts
  useEffect(() => {
    startAutoPlay();
    // Cleanup function: clears the interval when the component unmounts
    return () => pauseAutoPlay();
  }, [startAutoPlay]); // Dependency on startAutoPlay (which depends on goToNext)

  /**
   * Determines the positioning class based on the distance from the activeIndex.
   */
  const getCardClassName = useCallback((index) => {
    // Calculate difference, normalized to be between 0 and totalCards - 1
    let diff = index - activeIndex;
    
    // Normalize diff for circularity (e.g., -1 when active is 0, index is 3)
    if (diff < -totalCards / 2) {
      diff += totalCards;
    } else if (diff > totalCards / 2) {
      diff -= totalCards;
    }
    
    if (diff === 0) return 'center__card3';
    if (diff === -1) return 'left__card3';
    if (diff === 1) return 'right__card3';

    // All other cards are hidden
    return 'hidden__card3';
  }, [activeIndex, totalCards]);


    return (
        <section>
            <div className="feedback_sec3">
                <div className="feedback_sec_head3">
                    <h4>Feedback</h4>
                    <h1>What Our Clients Say About KPK Enterprise</h1>
                    <p>Our clients in Pondicherry love, how KPK Enterprise brings their interiors to life. From modular kitchens and wardrobes to TV units, pooja units, and study tables, every space is crafted with care, style, and functionality.</p>
                </div>
                
                <div className="main__container3">      
                    <div 
                        className="carousel__container3"
                        // Pause rotation on mouse hover
                        onMouseEnter={pauseAutoPlay}
                        // Resume rotation when mouse leaves
                        onMouseLeave={startAutoPlay}
                    >
                        <div className="carousel__track3">
                        {CARD_DATA.map((card, index) => {
                            const className = getCardClassName(index);

                            return (
                            <div
                                key={card.id}
                                className={`carousel__card3 ${className}`}
                                // Click on any visible card to bring it to the center
                                onClick={() => {
                                    // Only allow click action if the card is a side card
                                    if (className !== 'center__card3' && className !== 'hidden__card3') {
                                        // Pause the auto-play loop immediately upon user interaction
                                        pauseAutoPlay(); 
                                        setActiveIndex(index);
                                        // Resume auto-play after a short delay (optional, but good practice)
                                        setTimeout(startAutoPlay, 1000); 
                                    }
                                }}
                            >
                                {/* Image Section */}
                                <div className="card__image3">
                                <img src={card.image} alt={`Design by ${card.name}`}
                                            onError={(e) => { 
                                            e.target.onerror = null; 
                                            e.target.src = "https://placehold.co/800x600/525252/ffffff?text=Design+Image"; 
                                        }}
                                 />
                                </div>
                                
                                {/* Content Section */}
                                <div className="card__text3">
                                        <p className="feedback__text3">
                                        &quot;{card.text}&quot;
                                        </p>
                                    <div className="author__info3">
                                        <p className="client__name3">{card.name}</p>
                                        <p className="client__title3">{card.title}</p>
                                    </div>
                                </div>
                            </div>
                            );
                        })}
                        </div>
                        
                        {/* Navigation Dots (outside carousel-track for z-index control) */}
                        <div className="carousel-nav-dots">
                        {CARD_DATA.map((_, index) => (
                            <span 
                            key={index}
                            className={`dot ${index === activeIndex ? 'active' : ''}`}
                            onClick={() => {
                                pauseAutoPlay();
                                setActiveIndex(index);
                                setTimeout(startAutoPlay, 1000); 
                            }}
                            ></span>
                        ))}
                        </div>
                        
                    </div>
                    
                    {/* Navigation Arrows (REMOVED as requested) */}
                    </div>

                
            </div >
        </section >
    );
}




// import { useEffect, useCallback, useRef } from 'react';

// import feedimg1 from '../../../assets/services/images/Frame 1000012306.png'
// import feedimg2 from '../../../assets/services/images/Frame 1000012871.png'
// import feedimg3 from '../../../assets/services/images/Frame 1000012872.png'

// import './feedback.css'

// export default function FeedBack({ intervalTime = 100, transitionTime = 1000 }) {

//     const feedback = [{ "feedimg": feedimg1, "desc": "“I had the pleasure of working with vibrant spaces. Their team of designers exceeded all expectations from our initial meetings to the final designs of my home.”", "name": "MR. NAMRA", "company": "MD- Aysha Construction Solutions" },
//     { "feedimg": feedimg3, "desc": "“I had the pleasure of working with vibrant spaces. Their team of designers exceeded all expectations from our initial meetings to the final designs of my home.”", "name": "MR. NAMRA", "company": "MD- Aysha Construction Solutions" },
//     { "feedimg": feedimg2, "desc": "“I had the pleasure of working with vibrant spaces. Their team of designers exceeded all expectations from our initial meetings to the final designs of my home.”", "name": "MR. NAMRA", "company": "MD- Aysha Construction Solutions" },
//     { "feedimg": feedimg1, "desc": "“I had the pleasure of working with vibrant spaces. Their team of designers exceeded all expectations from our initial meetings to the final designs of my home.”", "name": "MR. NAMRA", "company": "MD- Aysha Construction Solutions" },
//     { "feedimg": feedimg3, "desc": "“I had the pleasure of working with vibrant spaces. Their team of designers exceeded all expectations from our initial meetings to the final designs of my home.”", "name": "MR. NAMRA", "company": "MD- Aysha Construction Solutions" },
//     { "feedimg": feedimg2, "desc": "“I had the pleasure of working with vibrant spaces. Their team of designers exceeded all expectations from our initial meetings to the final designs of my home.”", "name": "MR. NAMRA", "company": "MD- Aysha Construction Solutions" }

//     ]






//     return (
//         <>
//             <section>
//                 <div className="feedback_sec3">
//                     <div className="feedback_sec_head3">
//                         <h4>FeedBack</h4>
//                         <h1>What Our Clients Say About KPK Enterprise</h1>
//                         <p>Our clients in Pondicherry love, how KPK Enterprise brings their interiors to life. From modular kitchens and wardrobes to TV units, pooja units, and study tables, every space is crafted with care, style, and functionality.</p>
//                     </div>
//                     <div className="feedback_sec_body3">
//                         <div className="carousal_slide3">
        
//                         {feedback.map((value,index)=>(
//                             <div key={index} className="slider__item3">
//                                 <div className='slider__img'>
//                                     <img src={value.feedimg} alt="" />
                                    
//                                 </div>
//                                 <div className='slider__content3'>
//                                     <p>{value.desc}</p>
//                                     <h3>{value.name}</h3>
//                                     <h5>{value.company}</h5>
//                                 </div>
//                             </div>
//                         ))}
                       
//                          </div>



//                     </div>
//                 </div >
//             </section >
//         </>
//     )
// }



// import React, { useState } from 'react';
// import { testimonials } from '../data/testimonials';
// import './TestimonialCarousel.css'; // Import the CSS

// const TestimonialCarousel = () => {
//     // State to track the currently active (centered) testimonial card

//     return (
//         <div className="carousel-container">
//             <h2>What Our Clients Say</h2>


//         </div>
//     );
// };

// export default TestimonialCarousel;