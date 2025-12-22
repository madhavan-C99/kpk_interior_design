// import react from 'react';
// import Pricetoday from '../../../assets/Price_img/price-today.png'
// import '../pricetoday/PriceToday.css';
// export default function PriceToday() {
//   return (
//     <>
//         <section className='Pice-today_sect' >  
//            <div className='Price-background'>
//                 <h2>Get Your Interior Design Price Today</h2>
//                 <p>Access easy, transparent pricing for modular kitchen, wardrobe and home interiors. Get accurate cost guidance and customized options for Pondicherry & Cuddalore.</p>
//                 <button>Start My Interior Plan</button>
//            </div>
//            <div className='Price-today-img'>
//                 <img src={Pricetoday} alt="" />
//            </div>
//         </section>
//     </>
//   )
// }
import React from "react";
import Pricetoday from "../../../assets/Price_img/price-today.png";
import "./PriceToday.css";

export default function PriceToday() {
  return (
    <section className="hero-wrap">

      {/* LEFT CONTENT */}
      <div className="hero-content">
        <h1>
          Begin Your Custom <br />
          Luxury Pooja Unit <br />
          Design Today
        </h1>

        <p>
          Start your Best luxury pooja unit design <br />
          with KPK Enterprises in Pondicherry. <br />
          Expert designers create elegant, <br />
          functional, and personalized spiritual <br />
          spaces.
        </p>

        <button>Start My Interior Plan</button>
      </div>

      {/* RIGHT IMAGE */}
      <div className="hero-image">
        <img src={Pricetoday} alt="Luxury Interior" />
      </div>

    </section>
  );
}
