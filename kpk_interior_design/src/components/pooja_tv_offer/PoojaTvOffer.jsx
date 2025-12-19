import "./PoojaTvOffer.css";
import offerIcon from "../../assets/pooja_tv_offer_images/offer_icon.png";

export default function PoojaTvOffer({ description, title, items }) {
  return (
    <section className="pt-offer">
      
      {/* Description text */}
      <p className="pt-offer-description">{description}</p>

      {/* Divider line */}
      <div className="pt-offer-divider"></div>

      {/* Section title */}
      <h2 className="pt-offer-title">{title}</h2>

      {/* Offer cards */}
      <div className="pt-offer-cards">
        {items.map((item, index) => (
          <div className="pt-offer-card" key={index}>
            <img src={offerIcon} alt="offer" className="pt-offer-icon" />
            <p className="pt-offer-text">{item}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
