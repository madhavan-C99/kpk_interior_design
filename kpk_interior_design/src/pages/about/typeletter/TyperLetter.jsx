
import React from "react";
import { useState, useEffect } from "react";
import '../typeletter/TypeLetter.css'
 
export default function TypeLetter(){
    const Letters=["KPK ENTERPRISES"]
     const words = ["Modular Kitchen", "WARDROBE", "POOJA UNIT","TV UNIT","Modular Kitchen"]
     const typeSpeed = 300
     const eraseSpeed = 300
    const  pauseAfterWord = 500
    
      const [wordIndex, setWordIndex] = useState(0);   // which word
      const [charIndex, setCharIndex] = useState(0);   // how many letters visible
      const [isErasing, setIsErasing] = useState(false);
    
      useEffect(() => {
        const current = words[wordIndex] || "";
    
        // Typing: show next letter
        if (!isErasing && charIndex < current.length) {
          const t = setTimeout(() => setCharIndex(c => c + 1), typeSpeed);
          return () => clearTimeout(t);
        }
    
        // Done typing: wait then start erasing
        if (!isErasing && charIndex === current.length) {
          const t = setTimeout(() => setIsErasing(true), pauseAfterWord);
          return () => clearTimeout(t);
        }
    
        // Erasing: hide last letter
        if (isErasing && charIndex > 0) {
          const t = setTimeout(() => setCharIndex(c => c - 1), eraseSpeed);
          return () => clearTimeout(t);
        }
    
        // Erasing finished: move to next word
        if (isErasing && charIndex === 0) {
          setIsErasing(false);
          setWordIndex(i => (i + 1) % words.length);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [charIndex, isErasing, wordIndex]);
    
      const word = words[wordIndex] || "";
      const visible = word.slice(0, charIndex).split("");
    //   ------------newly added---------------------
    // const current = words[wordIndex];
    //   const letters = current.slice(0, charIndex).split("");
    return(
        <>
            {/* -----------------KPK Enterpraise text animation--------------------------------------- */}
                    <section className="about-kpk">
                        <div className="about-kpk-text">
                            {/* {Letters.map((Letter,idx) =>(
                                <div className="about-kpk-text_map" key={idx}>
                                    {word.split("").map((char,i)=>(
                                    <h1 key={i} className="about-kpk-text_ani">{char}</h1>        
                                    ))}
                            </div>
                            ))} */}
                            <div>
                                <h1 className="about-kpk-text_ani">KPK ENTERPRISES</h1>
                            </div>
                            {/* ---------------newly added-----------------------    */}
                                <div className="about-typewriter" aria-live="polite">
                                    <h1 className="about-typewriter__text">
                                        {visible.map((ch, i) => {
                                        const delaySeconds = isErasing
                                            ? ((visible.length - 1 - i) * (eraseSpeed / 1000)).toFixed(3)
                                            : (i * (typeSpeed / 1000)).toFixed(3);

                                        const className = isErasing
                                            ? "ta-letter ta-exit"
                                            : "ta-letter ta-enter";

                                        return (
                                            <span
                                            key={i}
                                            className={className}
                                            style={{ animationDelay: `${delaySeconds}s` }}
                                            aria-hidden="true"
                                            >
                                            {ch === " " ? "\u00A0" : ch}
                                            </span>
                                        );
                                        })}

                                        <span className="ta-cursor" aria-hidden>|</span>
                                    </h1>
                                </div>
                                {/* --------------------------------------------- */}
                        </div>
                    </section>
        </>
    )
}