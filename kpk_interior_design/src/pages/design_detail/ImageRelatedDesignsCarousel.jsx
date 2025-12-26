import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ImagegalleryMasterData } from "../../data/ImagegalleryMasterData";

import "./ImageRelatedDesignsCarousel.css";

export default function ImageRelatedDesignsCarousel({
  currentId,
  currentCategory,
}) {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(4);

  // 🔹 responsive visible count
  useEffect(() => {
    const updateVisibleCount = () => {
      const width = window.innerWidth;
      if (width < 575) setVisibleCount(1);
      else if (width < 768) setVisibleCount(2);
      else if (width < 992) setVisibleCount(3);
      else setVisibleCount(4);
    };

    updateVisibleCount();
    window.addEventListener("resize", updateVisibleCount);
    return () => window.removeEventListener("resize", updateVisibleCount);
  }, []);

  const sameCategory = ImagegalleryMasterData.filter(
    item => item.category === currentCategory && item.id !== currentId
  );

  const otherCategory = ImagegalleryMasterData.filter(
    item => item.category !== currentCategory && item.id !== currentId
  );

  const related = [...sameCategory, ...otherCategory].slice(0, 8);

  const canPrev = startIndex > 0;
  const canNext = startIndex + visibleCount < related.length;

  const visible = related.slice(startIndex, startIndex + visibleCount);

  return (
    <div className="image-related-wrapper">
      <h3>Design Inspiration</h3>

      <div className="image-related-carousel">
        {canPrev && (
          <button
            className="arrow left"
            onClick={() => setStartIndex(prev => prev - 1)}
          >
            ←
          </button>
        )}

        <div className="image-related-cards">
          {visible.map(item => (
            <div
              key={item.id}
              className="image-related-card"
              onClick={() =>
                navigate(`/design/${item.id}`, {
                  state: { source: "Design Inspiration" },
                })
              }
            >
              <img src={item.images[0]} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {canNext && (
          <button
            className="arrow right"
            onClick={() => setStartIndex(prev => prev + 1)}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}