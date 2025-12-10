import React from "react";
import '../../portfolio/portfolio_hero/PortfolioHero.css'
import { useState } from "react";
import { useRef,useEffect } from "react";
    //images
    // import Img1 from '../../assets/portfolio/img1.png'
    // import Img2 from '../../assets/portfolio/img2.png'
import Img1 from '../../../assets/portfolio/img1.png'
import Img2 from '../../../assets/portfolio/img2.png'
export default function PortfolioHero(){
     const titles = [
  "Exotic Jellyfish",
  "Deep Sea Dive",
  "In Plain Sight",
];

//   ----------------------
  const images = [Img1, Img2, Img1];

  const [activeIndex, setActiveIndex] = useState(0); // which image / number is active
  const [progress, setProgress] = useState(0); // 0..100
  const [zoom, setZoom] = useState("zoom-in"); // css class for zoom effect

  // timings (ms)
  const growDuration = 5000; // time it takes to grow each quarter
  const midwayPause = 800; // pause at mid-way (25%, 75%)
  const numberPause = 1200; // pause at the number (25%, 50%, 75%, 100) depending on timeline

  // timeline steps: 'to' is progress percent, 'duration' how long that step lasts,
  // 'mode' used to control zoom class, 'changeNumber' optionally changes the active slide mid-step
  const timeline = [
    {to: 1, duration: growDuration, mode: "grow"},
    { to: 25, duration: growDuration, mode: "grow" },              // grow to 25
    { to: 25, duration: midwayPause, mode: "pause-mid" },          // pause mid
    {to: 40, duration: numberPause, mode: "grow" , changeNumber: 1},
    { to: 50, duration: growDuration, mode: "grow" }, // grow to 50 and change to 02 during
    { to: 50, duration: numberPause, mode: "pause-number" },       // pause on number 02
    { to: 75, duration: growDuration, mode: "grow" },              // grow to 75
    { to: 75, duration: midwayPause, mode: "pause-mid" , changeNumber: 2 },          // pause mid
    { to: 100, duration: growDuration, mode: "grow" }, // grow to 100 and change to 03
    { to: 100, duration: numberPause, mode: "pause-number" },      // pause at 03 (end)
  ];

  const stepIndex = useRef(0);
  const timeouts = useRef([]); // store timeout ids to clean up

  useEffect(() => {
    runStep();

    // cleanup on unmount
    return () => {
      timeouts.current.forEach((id) => clearTimeout(id));
      timeouts.current = [];
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const clearAllTimeouts = () => {
    timeouts.current.forEach((id) => clearTimeout(id));
    timeouts.current = [];
  };

  const runStep = () => {
    const step = timeline[stepIndex.current];
    if (!step) return;

    const { to, duration, mode, changeNumber } = step;

    // set zoom css
    if (mode === "grow") setZoom("zoom-out"); // zoom-out while growing
    else setZoom("zoom-in"); // zoom-in during pauses

    // apply progress value AND set transition duration inline (so each step uses its own duration)
    setProgress((prev) => {
      // the actual visual animation uses CSS transition; we set progress value now,
      // and also keep a ref to the timeout to move to next step after duration.
      return to;
    });

    // If this step should change the slide number at a specific time while the progress animates,
    // schedule the change at around 70% of the step to mimic "arrive to number then pause".
    if (changeNumber !== undefined) {
      const changeAt = Math.max(100, Math.round(duration * 0.7)); // at 70% of duration
      const t1 = setTimeout(() => {
        setActiveIndex(changeNumber);
      }, changeAt);
      timeouts.current.push(t1);
    }

    // schedule next step after `duration`
    const t = setTimeout(() => {
      stepIndex.current++;
      if (stepIndex.current >= timeline.length) {
        // loop: reset everything
        stepIndex.current = 0;
        setProgress(0);
        setActiveIndex(0);
      }
      runStep();
    }, duration);

    timeouts.current.push(t);
  };

  /* --------------------------------------------------- */

  // helper to compute inline style for .line-fill transition duration
  const currentStep = timeline[stepIndex.current] || {};
  const currentDuration = currentStep.duration || 0;
  const lineStyle = {
    width: `${progress}%`,
    transition: `width ${currentDuration}ms linear`,
  };
return(
    <>
        <section>
          <div className="portfolio-hero-slider-container">
                <div
                    className={`portfolio-hero-slide-image ${zoom}`}
                    style={{ backgroundImage: `url(${images[activeIndex]})` }}
                />

                    <h1 className="portfolio-hero-title">
                        <span className="portfolio-hero-title-text">
                                {titles[activeIndex]}
                                </span>


                    </h1>

                    <div className="portfolio-hero-bottom-box">
                        <div className="portfolio-hero-item">
                        <span className={activeIndex === 0 ? "portfolio-hero-active-num" : "portfolio-hero-num"}>
                            01
                        </span>
                        <div className="portfolio-hero-item_des">
                            <h4>Exotic Jellyfish</h4>
                            <p>EVERY TUESDAY | 6PM</p>
                        </div>
                        </div>

                        <div className="portfolio-hero-item">
                        <span className={activeIndex === 1 ? "portfolio-hero-active-num" : "portfolio-hero-num"}>
                            02
                        </span>
                        <div className="portfolio-hero-item_des">
                            <h4>Exotic Jellyfish</h4>
                            <p>EVERY TUESDAY | 8PM</p>
                        </div>
                        </div>

                        <div className="portfolio-hero-item">
                        <span className={activeIndex === 2 ? "portfolio-hero-active-num" : "portfolio-hero-num"}>
                            03
                        </span>
                        <div className="portfolio-hero-item_des">
                            <h4>Exotic Jellyfish</h4>
                            <p>JULY 27 | 6PM</p>
                        </div>
                        </div>

                        <div className="portfolio-hero-progress-line" aria-hidden>
                        <div className="portfolio-hero-line-fill" style={lineStyle} />
                        </div>
                    </div>
                </div>

        </section>
    </>
)
}