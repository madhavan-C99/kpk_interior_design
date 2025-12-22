import React from "react";
import "./Trust.css";

// Images
import Support from "../../../assets/about/support.png";
import ExpertDesigner from "../../../assets/about/expert-designer.png";
import Endurance from "../../../assets/about/everyday-endurance.png";
import EcoSystem from "../../../assets/about/eco-conscious.png";
import HouseCraftman from "../../../assets/about/house-craftsmanship.png";
import NoCost from "../../../assets/about/no-cost.png";
import Timeline from "../../../assets/about/timeline.png";
import Transport from "../../../assets/about/transport.png";

const trustData = [
  {
    title: "End-to-End Design Support",
    desc: "We handle every step, ensuring your project stays effortless and stress-free.",
    img: Support,
  },
  {
    title: "Quality-Controlled In-House Craftsmanship",
    desc: "Every detail is produced internally, ensuring consistency and reliability.",
    img: HouseCraftman,
  },
  {
    title: "No-Cost Design Visualization",
    desc: "Get a clear picture of your interiors with expert-curated design samples.",
    img: NoCost,
  },
  {
    title: "Committed Delivery Timeline",
    desc: "High-quality construction ensures lasting beauty and reliable performance.",
    img: Timeline,
  },
  {
    title: "Made for Everyday Endurance",
    desc: "Built with premium materials to withstand daily use effortlessly.",
    img: Endurance,
  },
  {
    title: "Transparent Cost Breakdown",
    desc: "Upfront pricing with absolutely no hidden charges.",
    img: Transport,
  },
  {
    title: "Expert Designers by Your Side",
    desc: "Our professionals guide every decision with experience and care.",
    img: ExpertDesigner,
  },
  {
    title: "Eco-Conscious Interior Choices",
    desc: "Materials and methods that support greener living.",
    img: EcoSystem,
  },
];

export default function Trust() {
  return (
    <section className="about-trust">
      <h2>Why We’re the Trusted Interior Design Choice in Pondicherry</h2>
      <p style={{paddingBottom:"50px"}}>
        Discover elegant, trust-built interiors shaped with modern vision and thoughtful detailing, crafted with factory-finish precision by KPK Enterprises, specialising in innovative interior design in Pondicherry for meaningful, future-focused living.
      </p>

      {/* ROW 1 - 3 CARDS */}
      <div className="trust-row">
        {trustData.slice(0, 3).map((item, index) => (
          <TrustCard key={index} {...item} />
        ))}
      </div>

      {/* ROW 2 - 2 CARDS */}
      <div className="trust-row">
        {trustData.slice(3, 5).map((item, index) => (
          <TrustCard key={index} {...item} />
        ))}
      </div>

      {/* ROW 3 - 3 CARDS */}
      <div className="trust-row">
        {trustData.slice(5, 8).map((item, index) => (
          <TrustCard key={index} {...item} />
        ))}
      </div>
    </section>
  );
}

function TrustCard({ title, desc, img }) {
  return (
    <div className="about-trust_support">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="about-trust_support-img">
        <img src={img} alt={title} />
      </div>
    </div>
  );
}