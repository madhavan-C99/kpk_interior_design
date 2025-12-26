

import wardrobe_video from '../../../assets/services/videos/wardrobe_video.mp4'
import '../../services/hero/HeroSection.css'

export default function WardoorHero({openForm}){
    return(
        <>
                <section className="herosection3">
                    <div className="hero_inner3">
                        <div className="hero_content3">
                            <h1>Best Wardrobe Designer in Pondicherry - KPK Enterprises</h1>
                            <p>KPK Enterprises is the best wardrobe designer in Pondicherry offering custom wardrobes with premium materials, smart storage, and modern finishes. With expert planning and precise execution, we create stylish, functional, space-optimized wardrobe solutions.</p>
                            <button onClick={openForm}>Start My Interior Plan </button>
                        </div>
                        <div className="hero_img3">
                      <video autoPlay muted loop src={wardrobe_video} id="wardrobevid2"></video>

                        </div>
                    </div>     
                </section>
        </>
    )
}