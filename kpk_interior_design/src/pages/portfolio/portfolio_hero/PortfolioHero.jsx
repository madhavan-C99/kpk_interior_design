
import React, { useEffect, useRef, useState } from "react";
import "./PortfolioHero.css";

import Img1 from "../../../assets/portfolio/img1.png";
import Img2 from "../../../assets/portfolio/img2.png";
import Img3 from "../../../assets/portfolio/img3.png";


export default function PortfolioHero() {
  const titles = [
    "Modular Kitchen",
    "Lux Ward Pro",
    "Divine Pooja Hub",
  ];
 const para=[
  "Kitchen Upgrade",
  "Elite Ward Hub",
  "Elegant Pooja Pro",

 ]
  const images = [Img1, Img2, Img3];

  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [zoom, setZoom] = useState("zoom-in");
  const [enableTransition, setEnableTransition] = useState(true);

  const timeline = [
    { to: 15, duration: 8000, mode: "grow" },
    { to: 15, duration: 800, mode: "pause" },
    { to: 30, duration: 8000, mode: "grow" },
    { to: 30, duration: 800, mode: "pause" },
    { to: 40, duration: 7000, mode: "grow", change: 1 },
    { to: 40, duration: 1200, mode: "pause" },
    { to: 55, duration: 8000, mode: "grow", },
    { to: 55, duration: 1200, mode: "pause" },
    { to: 70, duration: 7000, mode: "grow", change: 2 },
    { to: 70, duration: 800, mode: "pause" },
    { to: 100, duration: 8000, mode: "grow" },
    { to: 100, duration: 1200, mode: "pause" },
  ];
  // const growDuration = 5000; // time it takes to grow each quarter 
  // const midwayPause = 800; // pause at mid-way (25%, 75%) 
  // const numberPause = 1200; // pause at the number (25%, 50%, 75%, 100) depending on timeline
  // const timeline = [ {to: 1, duration: growDuration, mode: "grow"}, { to: 25, duration: growDuration, mode: "grow" }, // grow to 25  
  // { to: 25, duration: midwayPause, mode: "pause-mid" }, // pause mid 
  // {to: 40, duration: numberPause, mode: "grow" , changeNumber: 1}, 
  // { to: 50, duration: growDuration, mode: "grow" }, // grow to 50 and change to 02 during 
  // { to: 50, duration: numberPause, mode: "pause-number" }, // pause on number 02 
  // { to: 75, duration: growDuration, mode: "grow" }, // grow to 75 
  // { to: 75, duration: midwayPause, mode: "pause-mid" , changeNumber: 2 }, // pause mid 
  // { to: 100, duration: growDuration, mode: "grow" }, // grow to 100 and change to 03 
  // { to: 100, duration: numberPause, mode: "pause-number" }, // pause at 03 (end) 
  // ];

  const stepIndex = useRef(0);
  const timeouts = useRef([]);

  useEffect(() => {
    startAnimation();
    return () => timeouts.current.forEach(clearTimeout);
  }, []);

  const startAnimation = () => {
    const step = timeline[stepIndex.current];
    if (!step) return;

    setZoom(step.mode === "grow" ? "zoom-out" : "zoom-in");
    setProgress(step.to);

    if (step.change !== undefined) {
      const t = setTimeout(() => {
        setActiveIndex(step.change);
      }, step.duration * 0.7);
      timeouts.current.push(t);
    }

    const t = setTimeout(() => {
      stepIndex.current++;

      // 🔥 animation finished → clean reset
      if (stepIndex.current >= timeline.length) {
        stepIndex.current = 0;

        setEnableTransition(false);
        setProgress(0);
        setActiveIndex(0);

        const restart = setTimeout(() => {
          setEnableTransition(true);
          startAnimation();
        }, 50);

        timeouts.current.push(restart);
        return;
      }

      startAnimation();
    }, step.duration);

    timeouts.current.push(t);
  };

  const currentStep = timeline[stepIndex.current] || {};
  const lineStyle = {
    width: `${progress}%`,
    transition: enableTransition
      ? `width ${currentStep.duration || 0}ms linear`
      : "none",
  };

  return (
    <section className="portfolio-hero-slider-container">
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
        {[0, 1, 2].map((i) => (
          <div className="portfolio-hero-item" key={i}>
            <span
              className={
                activeIndex === i
                  ? "portfolio-hero-active-num"
                  : "portfolio-hero-num"
              }
            >
              {`0${i + 1}`}
            </span>
            <div className="portfolio-hero-item_des">
              <h4>{titles[i]}</h4>
              {/* <p>EVERY TUESDAY | 6PM</p> */}
              <p>{para[i]}</p>
            </div>
          </div>
        ))}

        <div className="portfolio-hero-progress-line">
          <div
            className="portfolio-hero-line-fill"
            style={lineStyle}
          />
        </div>
      </div>
    </section>
  );
}
