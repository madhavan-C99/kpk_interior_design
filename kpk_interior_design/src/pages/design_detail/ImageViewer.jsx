import { useState } from "react";

export default function ImageViewer({ images, title }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="image-viewer">
      <div className="image-viewer-main">
        <img src={images[activeIndex]} alt={title} />
      </div>

      {images.length > 1 && (
        <div className="image-viewer-grid">
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
      )}
    </div>
  );
}
