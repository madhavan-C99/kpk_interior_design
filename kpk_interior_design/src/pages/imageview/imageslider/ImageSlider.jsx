import React, { useState, useEffect } from "react";
import "./ImageSlider.css";

import card1img from "../../../assets/home/images/Frame 1000012086.png";
import card2img from "../../../assets/home/images/Frame 1000012086-1.png";
import card3img from "../../../assets/home/images/Frame 1000012091.png";
import card4img from "../../../assets/home/images/Frame 1000012091-1.png";
import card5img from "../../../assets/home/images/Frame 1000012092.png";
import card6img from "../../../assets/home/images/Frame 1000012092-1.png";
import card7img from "../../../assets/home/images/Frame 1000012093.png";
import card8img from "../../../assets/home/images/Frame 1000012093-1.png";

const MOBILE_BREAKPOINT = 575;
const TABLET_BREAKPOINT = 991;
const MOBILE_CARD_LIMIT = 4;

const imageData = [
  { id: 1, name: "Sleek Soft-Touch Kitchen", img: card8img },
  { id: 2, name: "Bold Two-Texture Kitchen", img: card7img },
  { id: 3, name: "Hybrid Modular Workspace", img: card6img },
  { id: 4, name: "Minimal Navy And Grey Wall Colour", img: card5img },
  { id: 5, name: "Open-Shelf Modern Kitchen", img: card4img },
  { id: 6, name: "Underfit Counter Kitchen", img: card3img },
  { id: 7, name: "Multi-Functional Compact Layout", img: card2img },
  { id: 8, name: "Premium Stone-Top Modular Kitchen", img: card1img }
];

function ImageSlider() {
  // Tracks the starting index of the currently visible set of cards.
  const [activeIndex, setActiveIndex] = useState(0);
  // Tracks the current browser window width for responsive logic.
  const [width, setWidth] = useState(window.innerWidth);

  const isMobile = width <= MOBILE_BREAKPOINT;

  const getCardsPerPage = () => {
    if (width <= MOBILE_BREAKPOINT) return 1;
    if (width <= TABLET_BREAKPOINT) return 3;
    return 4;
  };

  const cardsPerPage = getCardsPerPage();
  // It updates the 'width' state and resets the 'activeIndex' to 0
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setActiveIndex(0);
    };

    // Removes the listener when the component unmounts.
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  let cardsToDisplay;

  if (isMobile) {
    cardsToDisplay = imageData.slice(0, MOBILE_CARD_LIMIT);
  } else {
    cardsToDisplay = imageData.slice(
      activeIndex,
      activeIndex + cardsPerPage
    );
  }

  const handleNext = () => {
    setActiveIndex((prev) =>
      prev + cardsPerPage >= imageData.length ? 0 : prev + cardsPerPage
    );
  };

  const handlePrev = () => {
    setActiveIndex((prev) =>
      prev - cardsPerPage < 0
        ? imageData.length - cardsPerPage
        : prev - cardsPerPage
    );
  };

  return (
    <div className="imageslider_container2">
      <div className="imageslider_textwrap2">
        <h2 className="imageslider_title2">Related Design</h2>
      </div>

      <div className="imageslider_carousel_wrapper2">
        {!isMobile && (
          <button className="nav_button2 prev2" onClick={handlePrev}>
            {"<"}
          </button>
        )}

        <div className="imageslider_grid2">
          {cardsToDisplay.map((data) => (
            <div className="imageslider_card2" key={data.id}>
              <img
                src={data.img}
                alt={data.name}
                className="imageslider_img2"
              />
              <p className="imageslider_cardtitle2">{data.name}</p>
            </div>
          ))}
        </div>

        {!isMobile && (
          <button className="nav_button2 next2" onClick={handleNext}>
            {">"}
          </button>
        )}
      </div>
    </div>
  );
}

export default ImageSlider;
