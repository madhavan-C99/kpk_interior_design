import { useEffect, useRef, useState } from "react";
import portfoliodata from "./PortfolioData";
import PortfolioHero from "./portfolio_hero/PortfolioHero";
import Form from "./form/Form";
import { FaTimes } from "react-icons/fa";
import "../../pages/portfolio/Portfolio.css";
import PortfolioCta from "./portfolio_cta/PortfolioCta";
// import Faq from "./faq/faq";

export default function Gallery() {
  const trackRef = useRef(null);

  const [selectedFormItem, setSelectedFormItem] = useState(null);
  const [relatedImages, setRelatedImages] = useState(null);
  const [search, setSearch] = useState(""); // SEARCH STATE

  useEffect(() => {
    const firstTrack = trackRef.current;
    if (firstTrack) {
      const fullWidth = firstTrack.scrollWidth / 2;
    }
  }, []);

  // FILTER LOGIC (TITLE BASED)
  const filteredData = portfoliodata.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PortfolioHero />

      <section className="portfolio-gallery-whole-box">
        {/* SEARCH BOX */}
        <div className="portfolio-search-box">
          <input
            type="text"
            placeholder="Search Design"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="portfolio-gallery-wrapper">
          {filteredData.length === 0 && (
            <p style={{ textAlign: "center", width: "100%" }}>
              No designs found
            </p>
          )}

          {filteredData.map((item) => (
            <div key={item.id} className="portfolio-single-gallery">
              {/* IMAGE SLIDER */}
              <div className="portfolio-scroll-area">
                <div className="portfolio-scroll-track" ref={trackRef}>
                  {(item.images || []).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      alt={`thumb-${i}`}
                      className="portfolio-scroll-img"
                      onClick={() => {
                        const rel =
                          Array.isArray(item.related) && item.related.length
                            ? item.related
                            : [img];
                        setRelatedImages(rel);
                      }}
                    />
                  ))}
                </div>
              </div>

              {/*  TWO CENTER CIRCLES (IMAGE REFERENCE) */}
              {/* <div className="portfolio-image-circle">
                <div>
                  <span className="portfolio-image-circle-1"></span>
                  <span className="portfolio-image-circle-2"></span>
                </div>
              </div> */}

              {/* TEXT */}
              <div>
                <h2 className="portfolio-gallery-title">{item.title}</h2>
                <p className="portfolio-gallery-description">
                  {item.description}
                </p>
                <div className="portfolio-gallery-line"></div>
              </div>

              {/* BUTTON */}
              <button
                className="portfolio-gallery-button"
                onClick={() =>
                  setSelectedFormItem({
                    ...item,
                    selectedImage: item.images?.[0] || null,
                  })
                }
              >
                {item.button}
              </button>
            </div>
          ))}
        </div>

        {/* FORM POPUP */}
        {selectedFormItem && (
          <Form
            item={selectedFormItem}
            closePopup={() => setSelectedFormItem(null)}
          />
        )}

        {/* RELATED IMAGES OVERLAY */}
        {relatedImages && (
          <div
            className="portfolio-overlay"
            onClick={() => setRelatedImages(null)}
          >
            <div className="portfolio-overlay-fixed">
              {/* <div style={{marginTop:"500px"}}></div> */}
                <button
                className="portfolio-close-btn-1"
                onClick={() => setRelatedImages(null)}
              >
                <FaTimes />
              </button>
            </div>
            <div
              className="portfolio-overlay-grid"
              onClick={(e) => e.stopPropagation()}
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
          </div>
        )}
      </section>
        <PortfolioCta/>
    </>
  );
}