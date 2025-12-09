import React, { useState, useEffect, useRef } from 'react';
import './HomeRatingSec.css'

export default function HomeRatingSec(){

    const data=[    { id: 1, num: 1000, suffix: "+", desc: "Completed Projects" },
    { id: 2, num: 30, suffix: "+", desc: "Expert Team" },
    { id: 3, num: 6, suffix: "+", desc: "Pro Experience" },
    { id: 4, num: 4.9, suffix: "+", desc: "Top Rated", isDecimal: true }
    ]

    const Counter = ({ target, suffix, duration = 2000, isDecimal = false }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    animateCount();
                    // Stop observing after animation starts to prevent re-triggering
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.5 } // Trigger when 50% of the element is visible
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    const animateCount = () => {
        let start = 0;
        const totalSteps = 100; // Total steps for the animation
        let step = 0;
        
        // Calculate the increment value for each step
        const increment = (target - start) / totalSteps; 

        const timer = setInterval(() => {
            step++;
            start += increment;
            
            // Format the number based on whether it is a decimal
            let currentCount = isDecimal 
                ? parseFloat(start.toFixed(1)) 
                : Math.floor(start);

            if (step >= totalSteps) {
                // Ensure the final value is exactly the target
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(currentCount);
            }
        }, duration / totalSteps); // Interval time per step

        return () => clearInterval(timer);
    };

    const formattedCount = isDecimal ? count.toFixed(1) : count.toString();

    return (
        <span className="home_rating3_num" ref={ref}>
            {formattedCount}{suffix}
        </span>
    );
};
    return(
        <>
        <section>
            <div className="home_rate__con3">
                <div className="home_rate_head3">
                    <h1 className="home_rate_title3">PREMIUM INTERIOR TRANSFORMATION SERVICES IN PONDICHERRY</h1>
                </div>

                <div className="home_rate_body3">
{/* 
                 {
                    data.map((value,index)=>(
                    <div key={index} className="home_rating3">
                        <span className="home_rating3_num">{value.num}</span>
                        <p>{value.desc}</p>
                    </div>

                    ))
                 } */}

                    {data.map((value) => (
                        <div key={value.id} className="home_rating3">
                            <Counter 
                                target={value.num} 
                                suffix={value.suffix} 
                                isDecimal={value.isDecimal}
                            />
                            <p>{value.desc}</p>
                        </div>
                    ))}

                </div>
            </div>
        </section>
        </>
    )
}