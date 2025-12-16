import "./PoojaTvHero.css";

export default function PoojaTvHero({ title, image }) {
  return (
    <section
      className="pooja-tv-hero"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="pooja-tv-hero-overlay">
        <h1 className="pooja-tv-hero-title">{title}</h1>

        <button className="pooja-tv-hero-btn">
          Start My Interior Plan
        </button>
      </div>
    </section>
  );
}
