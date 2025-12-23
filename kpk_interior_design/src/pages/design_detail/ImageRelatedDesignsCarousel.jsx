import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ImagegalleryMasterData } from "../../data/ImagegalleryMasterData";

export default function ImageRelatedDesignsCarousel({
  currentId,
  currentCategory,
}) {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);

  const sameCategory = ImagegalleryMasterData.filter(
    item => item.category === currentCategory && item.id !== currentId
  );

  const otherCategory = ImagegalleryMasterData.filter(
    item => item.category !== currentCategory && item.id !== currentId
  );

  const related = [...sameCategory, ...otherCategory].slice(0, 8);
  const visible = related.slice(startIndex, startIndex + 4);

  return (
    <div className="image-related-wrapper">
      <h3>Design Inspiration</h3>

      <div className="image-related-carousel">
        {startIndex > 0 && (
          <button
            className="arrow left"
            onClick={() => setStartIndex(0)}
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
                  state: {source: "Design Inspiration",},
                })
              }
            >
              <img src={item.images[0]} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
        </div>

        {startIndex + 4 < related.length && (
          <button
            className="arrow right"
            onClick={() => setStartIndex(4)}
          >
            →
          </button>
        )}
      </div>
    </div>
  );
}
