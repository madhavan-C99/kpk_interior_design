
// // import Main from '../../../assets/services/images/Main.png'
// import modular_video from '../../../assets/services/videos/modular_hero_video.mp4'
// import './HeroSection.css'
// export default function HeroSection({openForm}){

    
//     return(
//         <>
//         <section className="herosection3">
//             <div className="hero_inner3">
//                 <div className="hero_content3">
//                     <h1>KPK Enterprises - Trusted Best Modular Kitchen in Pondicherry</h1>
//                     <p>Transform Your Space with KPK Enterprises, the trusted best modular kitchen in Pondicherry. We deliver smart designs, premium materials, fair pricing, and on-time execution to create beautiful, functional kitchens for every home</p>
//                     <button onClick={openForm}>Start My Interior Plan </button>
//                 </div>
//                 <div className="hero_img3">
//                       <video autoPlay muted loop src={modular_video} id="modularvid2"></video>
                  
//                 </div>
//             </div>     
//         </section>
        
//         </>
//     )
// }

// second part

import React from 'react';
import modularVideo from '../../../assets/services/videos/modular_hero_video.mp4';
import './HeroSection.css';

export default function HeroSection({ openForm }) {
  return (
    <section className="herosection3">
      <div className="hero_inner3">
        <div className="hero_content3">
          <h1>
            KPK Enterprises - Trusted Best Modular Kitchen in Pondicherry
          </h1>
          <p>
            Transform Your Space with KPK Enterprises, the trusted best modular
            kitchen in Pondicherry. We deliver smart designs, premium materials,
            fair pricing, and on-time execution to create beautiful, functional
            kitchens for every home.
          </p>
          <button onClick={openForm}>Start My Interior Plan</button>
        </div>

        <div className="hero_img3">
          <video
            id="modularvid2"
            autoPlay
            loop
            muted
            playsInline
            controls
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              display: 'block',
            }}
          >
            <source src={modularVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
