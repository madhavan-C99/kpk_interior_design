import { useState } from "react";
import "./ImageViewer.css"

export default function ImageViewer({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const visibleCount = 3;
  const canScroll = images.length > visibleCount;

  const handlePrev = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - 1);
    }
  };

  const handleNext = () => {
    if (startIndex + visibleCount < images.length) {
      setStartIndex(startIndex + 1);
    }
  };

  return (
    <div className="image-viewer">
      {/* MAIN IMAGE */}
      <div className="image-viewer-main">
        <img src={images[activeIndex]} alt={title} />
      </div>

      {/* THUMBNAIL STRIP */}
      {images.length > 1 && (
        <div className="image-viewer-strip">
          {canScroll && (
            <button
              className="thumb-arrow left"
              onClick={handlePrev}
              disabled={startIndex === 0}
            >
              ‹
            </button>
          )}

          <div className="image-viewer-window">
            <div
              className="image-viewer-track"
              style={{
                transform: `translateX(-${startIndex * 100 / visibleCount}%)`,
              }}
            >
              {images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={index === activeIndex ? "active" : ""}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>

          {canScroll && (
            <button
              className="thumb-arrow right"
              onClick={handleNext}
              disabled={startIndex + visibleCount >= images.length}
            >
              ›
            </button>
          )}
        </div>
      )}
    </div>
  );
}