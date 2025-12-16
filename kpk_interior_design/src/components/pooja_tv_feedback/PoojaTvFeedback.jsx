import { useState, useEffect, useCallback, useRef } from "react";
import "./PoojaTvFeedback.css";

export default function PoojaTvFeedback({ feedback }) {
  const { tag, heading, description, items } = feedback;

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const totalCards = items.length;

  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const startAutoPlay = useCallback(() => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, 3000);
  }, [goNext]);

  const stopAutoPlay = () => clearInterval(intervalRef.current);

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay]);

  const getClass = (index) => {
    const diff = index - activeIndex;
    if (diff === 0) return "pt_center__card";
    if (diff === -1 || diff === totalCards - 1) return "pt_left__card";
    if (diff === 1 || diff === -(totalCards - 1)) return "pt_right__card";
    return "pt_hidden__card";
  };

  return (
    <section className="pt_feedback_sec">

      {/* Header */}
      <div className="pt_feedback_sec_head">
        <h4>{tag}</h4>
        <h2>{heading}</h2>
        <p>{description}</p>
      </div>

      {/* Carousel */}
      <div className="pt_main__container">
        <div
          className="pt_carousel__container"
          onMouseEnter={stopAutoPlay}
          onMouseLeave={startAutoPlay}
        >
          <div className="pt_carousel__track">
            {items.map((item, index) => (
              <div
                key={item.id}
                className={`pt_carousel__card ${getClass(index)}`}
                onClick={() => setActiveIndex(index)}
              >
                <div className="pt_card__image">
                  <img src={item.image} alt={item.name} />
                </div>

                <div className="pt_card__text">
                  <p className="pt_feedback__text">“{item.text}”</p>
                  <p className="pt_client__name">{item.name}</p>
                  <p className="pt_client__title">{item.title}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="pt_carousel-nav-dots">
            {items.map((_, i) => (
              <span
                key={i}
                className={`pt_dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              />
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
