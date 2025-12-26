import { useState } from "react";
import portfoliodata from "./PortfolioData";
import PortfolioHero from "./portfolio_hero/PortfolioHero";
import Form from "./form/Form";
import { FaTimes } from "react-icons/fa";
import "../../pages/portfolio/Portfolio.css";
import PortfolioCta from "./portfolio_cta/PortfolioCta";

export default function Gallery() {
  const [selectedFormItem, setSelectedFormItem] = useState(null);
  const [relatedImages, setRelatedImages] = useState(null);
  const [search, setSearch] = useState("");

  const filteredData = portfoliodata.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <PortfolioHero />

      <section className="portfolio-gallery-whole-box">

        {/* SEARCH */}
        <div className="portfolio-search-box">
          <input
            type="text"
            placeholder="Search Design"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="portfolio-gallery-wrapper">
          {filteredData.map((item) => (
            <div key={item.id} className="portfolio-single-gallery">

              {/* AUTO SLIDER */}
              <div className="portfolio-image-wrapper">
                <div className="portfolio-slide-track">
                  {item.images.slice(0, 2).map((img, i) => (
                    <img
                      key={i}
                      src={img}
                      className="portfolio-slide-img"
                      alt=""
                      onClick={() => setRelatedImages(item.images)}
                    />
                  ))}
                </div>
              </div>

              {/* CONTENT */}
              <h2 className="portfolio-gallery-title">{item.title}</h2>
              <p className="portfolio-gallery-description">
                {item.description}
              </p>
              <div className="portfolio-gallery-line"></div>

              {/* BUTTON */}
              <button
                className="portfolio-gallery-button"
                onClick={() =>
                  setSelectedFormItem({
                    ...item,
                    selectedImage: item.images[0],
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

        {/* IMAGE OVERLAY */}
        {relatedImages && (
          <div
            className="portfolio-overlay"
            onClick={() => setRelatedImages(null)}
          >
            <button className="portfolio-close-btn-1">
              <FaTimes />
            </button>

            <div
              className="portfolio-overlay-grid"
              onClick={(e) => e.stopPropagation()}
            >
              {relatedImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="portfolio-overlay-img"
                  alt=""
                />
              ))}
            </div>
          </div>
        )}
      </section>

      <PortfolioCta />
    </>
  );
}