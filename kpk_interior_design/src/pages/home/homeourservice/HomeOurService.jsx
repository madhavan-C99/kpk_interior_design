import './HomeOurService.css'
import kitchenback from '../../../assets/home/images/MODULAR KITCHEN FILL.png'
import kitchenfront from '../../../assets/home/images/MODULAR KITCHEN STROKE.png'
import poojaifront from '../../../assets/home/images/STUDY UNIT FILL-1.png'
import poojaiback from '../../../assets/home/images/STUDY UNIT FILL-4.png'
import tvfront from '../../../assets/home/images/STUDY UNIT FILL-2.png'
import tvback from '../../../assets/home/images/STUDY UNIT FILL-5.png'
import warfront from '../../../assets/home/images/WARDROBE STROKE.png'
import warback from '../../../assets/home/images/WARDROBE FILL.png'
import studyfront from '../../../assets/home/images/STUDY UNIT FILL.png'
import studyback from '../../../assets/home/images/STUDY UNIT FILL-3.png'


export default function HomeOurService(){
    const data =[{id:1,frontimg:kitchenfront,backimg:kitchenback,caption:'Modular Kitchen'},
                {id:2,frontimg:warfront,backimg:warback,caption:'Wardrobe'},
                {id:3,frontimg:poojaifront,backimg:poojaiback,caption:'Pooja Unit'},
                {id:4,frontimg:tvfront,backimg:tvback,caption:'TV Unit'},
                {id:5,frontimg:studyfront,backimg:studyback,caption:'Study Tables'}
    ]
    return(
        <>
        <section>
            <div className="home_our__con3">
                <div className="home_our_head3">
                    <h4 className="home_our_title3">Our Services</h4>
                    <h1 className="home_our_title_head3">Trusted Interior Designers & Services in Pondicherry</h1>
                    <p className="home_our_caption3">KPK Enterprise, a leading, trusted interior brand in Pondicherry, delivers premium, client-focused solutions. We specialize in modular kitchens, wardrobes, pooja units, TV units, and study tables, creating functional, stylish, and lasting interiors for every home.</p>
                </div>
                <div className="home_our_body3">
                    {data.map((value,index)=>(
                    <div key={index} className='home_our_img__con3'>
                        <div className="home_our_img__card3">
                            <img src={value.frontimg} alt="" className='our_front3'/>
                            <img src={value.backimg} alt="" className='our_back3'/>
                        </div>
                        <p className='home_our_img_caption3'>{value.caption}</p>
                    </div>
                    ))}
                </div>
                <div className='home_our_foot3'>
                   <button className='home_our_button3'>Bulid My Dream Interior</button>
                </div>

            </div>
        </section>
        </>
    )
}