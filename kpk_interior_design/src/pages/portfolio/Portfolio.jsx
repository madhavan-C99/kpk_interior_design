import { useEffect, useRef, useState } from "react";
import portfoliodata from "./PortfolioData";
import PortfolioHero from "./portfolio_hero/PortfolioHero";
import Form from "./form/Form";
import { FaTimes } from "react-icons/fa";
import '../../pages/portfolio/Portfolio.css'
import Faq from "./faq/faq";

export default function Gallery() {
  const trackRef = useRef(null);
  const [selectedFormItem, setSelectedFormItem] = useState(null); // object for Form modal
  const [relatedImages, setRelatedImages] = useState(null);       // array for related overlay

  useEffect(() => {
    const firstTrack = trackRef.current;
    if (firstTrack) {
      const fullWidth = firstTrack.scrollWidth / 2;
      // you used distance earlier — keep if needed
    }
  }, []);

  return (
    <>
      <PortfolioHero />

      <section className="portfolio-gallery-whole-box">
        <div className="portfolio-gallery-wrapper">
          {(portfoliodata || []).map((item) => (
            <div key={item.id} className="portfolio-single-gallery">
              <div className="portfolio-scroll-area">
                <div className="portfolio-scroll-track" ref={trackRef}>
                  {(item.images || []).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`thumb-${i}`}
                      className="portfolio-scroll-img"
                      // IMAGE CLICK -> show related images overlay (for that item)
                      onClick={() => {
                        // if item.related exists, show it; otherwise fallback to an array with clicked img
                        const rel = Array.isArray(item.related) && item.related.length
                          ? item.related
                          : [img];
                        setRelatedImages(rel);
                      }}
                    />
                  ))}
                </div>

                <div className="portfolio-image-circle">
                  <div><span className="portfolio-image-circle-1"></span></div>
                  <div><span className="portfolio-image-circle-2"></span></div>
                </div>
              </div>

              <div>
                <h2 className="portfolio-gallery-title">{item.title}</h2>
                <p className="portfolio-gallery-description">{item.description}</p>
                <div className="portfolio-gallery-line"></div>
              </div>

              {/* BUTTON CLICK -> open the Form modal with main image */}
              <button
                className="portfolio-gallery-button"
                onClick={() => setSelectedFormItem({
                  ...item,
                  selectedImage: item.Img1 || item.images?.[0] || null
                })}
              >
                {item.button}
              </button>
            </div>
          ))}

          {/* FORM modal (only once) */}
          {selectedFormItem && (
            <Form
              item={selectedFormItem}
              closePopup={() => setSelectedFormItem(null)}
            />
          )}

          {/* RELATED IMAGES overlay (only once) */}
          {relatedImages && (
            <div className="portfolio-overlay" onClick={() => setRelatedImages(null)}>
              <div
                className="portfolio-overlay-grid"
                onClick={(e) => e.stopPropagation()} // don't close when clicking inside grid
              >
                {relatedImages.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`related-${i}`}
                    className="portfolio-overlay-img"
                  />
                ))}
              </div>

              <button
                className="portfolio-close-btn-1"
                onClick={() => setRelatedImages(null)}
                aria-label="close related images"
              >
                <FaTimes />
              </button>
            </div>
          )}
        </div>
        
      </section>
      <section className="portfolio-journey-background">
          <h2>Get Your Interior Design Price Today</h2>
          <p>Access easy, transparent pricing for modular kitchen, wardrobe and home interiors. Get accurate cost guidance and customized options for Pondicherry & Cuddalore.</p>
          <button>Start My Interior Plan</button>
        </section>
      <Faq/>
    </>
  );
}
