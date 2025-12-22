import { useEffect, useState } from "react";
import "../pooja_tv_gallery/PoojaTvGallery.css";

export default function PoojaTvGallery({ gallery }) {
  return (
    <section className="pt-gallery">

      {/* Header */}
      <div className="pt-gallery-header">
        <h2>{gallery.heading}</h2>
        <p>{gallery.description}</p>
      </div>

      {/* Grid */}
      <div className="pt-gallery-grid">
        {gallery.items.map((item, index) => {
          if (item.type === "text") {
            return (
              <div className="pt-gallery-text-card" key={index}>
                <p>{item.text}</p>
              </div>
            );
          }

          return <ImageCard key={index} item={item} />;
        })}
      </div>
    </section>
  );
}

/* ---------------- IMAGE CARD ---------------- */

function ImageCard({ item }) {
  const [active, setActive] = useState(0);

  // auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % item.images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [item.images.length]);

  return (
    <div className="pt-gallery-card">

      {/* Image wrapper */}
      <div className="pt-gallery-image">
        <div
        className="pt-slide-track"
        style={{
        '--slides': item.images.length,
        width: `${item.images.length * 100}%`,
        transform: `translateX(-${active * (100 / item.images.length)}%)`
  }}
>


          {item.images.map((img, i) => (
            <img key={i} src={img} alt={item.title} />
          ))}
        </div>

        {/* Indicators INSIDE image */}
        <div className="pt-indicators">
          {item.images.map((_, i) => (
            <span
              key={i}
              className={active === i ? "active" : ""}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="pt-gallery-content">
        <h4>{item.title}</h4>
        <p>{item.description}</p>
      </div>

      <hr />

      <button className="pt-gallery-btn">Get This Design</button>
    </div>
  );
}