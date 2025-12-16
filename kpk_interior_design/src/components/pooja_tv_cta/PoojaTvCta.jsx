import "./PoojaTvCta.css";

export default function PoojaTvCta({ heading, description, buttonText, image }) {
  return (
    <section className="pt-cta-section">
      
      {/* Left Content */}
      <div className="pt-cta-content">
        <h2>{heading}</h2>
        <p>{description}</p>
        <button>{buttonText}</button>
      </div>

      {/* Right Image */}
      <div className="pt-cta-image">
        <img src={image} alt="Interior CTA" />
      </div>

    </section>
  );
}
