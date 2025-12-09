
import Main from '../../../assets/services/images/Main.png'
import './HeroSection.css'
export default function HeroSection(){

    return(
        <>
        <section className="herosection3">
            <div className="hero_inner3">
                <div className="hero_content3">
                    <h1>KPK Enterprise - Trusted best modular kitchen in Pondicherry</h1>
                    <p>Transform Your Space with KPK Enterprise, the trusted best modular kitchen in Pondicherry. We deliver smart designs, premium materials, fair pricing, and on-time execution to create beautiful, functional kitchens for every home</p>
                    <button>Start My Interior Plan </button>
                </div>
                <div className="hero_img3">
                    <img src={Main} alt="" />
                </div>
            </div>     
        </section>
        
        </>
    )
}