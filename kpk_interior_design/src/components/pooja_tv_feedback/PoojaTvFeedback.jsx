import { useState, useEffect, useCallback, useRef } from "react";
import "./PoojaTvFeedback.css";

export default function PoojaTvFeedback({ feedback }) {
  const { tag, heading, description, items } = feedback;

  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef(null);
  const totalCards = items.length;

  /* ================= AUTOPLAY ================= */
  const goNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % totalCards);
  }, [totalCards]);

  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(goNext, 3000);
  }, [goNext]);

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return stopAutoPlay;
  }, [startAutoPlay]);

  /* ============ POSITION LOGIC (REFERENCE MATCH) ============ */
  const getClass = useCallback(
    (index) => {
      let diff = index - activeIndex;

      if (diff < -totalCards / 2) diff += totalCards;
      if (diff > totalCards / 2) diff -= totalCards;

      if (diff === 0) return "pt_center__card";
      if (diff === -1) return "pt_left__card";
      if (diff === 1) return "pt_right__card";
      return "pt_hidden__card";
    },
    [activeIndex, totalCards]
  );

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
            {items.map((item, index) => {
              const cls = getClass(index);

              return (
                <div
                  key={item.id}
                  className={`pt_carousel__card ${cls}`}
                  onClick={() => {
                    if (cls !== "pt_center__card" && cls !== "pt_hidden__card") {
                      stopAutoPlay();
                      setActiveIndex(index);
                      setTimeout(startAutoPlay, 1000);
                    }
                  }}
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
              );
            })}
          </div>

          {/* Dots */}
          <div className="pt_carousel-nav-dots">
            {items.map((_, i) => (
              <span
                key={i}
                className={`pt_dot ${i === activeIndex ? "active" : ""}`}
                onClick={() => {
                  stopAutoPlay();
                  setActiveIndex(i);
                  setTimeout(startAutoPlay, 1000);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}