import './HomeAboutUs.css'

import dotimg from '../../../assets/home/images/Frame 1000012034.png'
import smallimg from '../../../assets/home/images/Frame 1000012022.png'
import largeimg from '../../../assets/home/images/Frame 1000012021.png'
import eyeicon from '../../../assets/home/images/Frame 1000012036-eye.png'
import priemiumicon from '../../../assets/home/images/Frame 1000012036.png'
import deliveryicon from '../../../assets/home/images/Frame 1000012036-truck.png'
import exporticon from '../../../assets/home/images/Frame 1000012036-export.png'


export default function HomeAboutUs(){
    const data=[{id:1,icon:eyeicon,caption:"Creative Vision",},
                {id:2,icon:priemiumicon,caption:"Premium Quality",},
                {id:3,icon:deliveryicon,caption:"On-Time Delivery",},
                {id:4,icon:exporticon,caption:"Expert Team",}
    ]
    return(
        <>
        <section>
            <div className="home_about__con3">
                <div className="home_about__head3">
                    <div className="home_about_us_head3">
                    <div className="home_about_dot_card3">
                        <img src={dotimg} alt="" className='home_about_dot3' />
                    </div>
                    <div className="home_about_small__card3">
                        <img src={smallimg}alt="" className='home_about_small_img3'/>
                    </div>
                    <div className="home_about_large_card3">
                        <img src={largeimg} alt="" className='home_about_large_img3'/>
                    </div>
                    </div>
                </div>

                <div className="home_about__body3">
                    <h4 className='home_about_body_title3'>About Us</h4>
                    <h1 className='home_about_title_head3'>KPK Enterprise: Leading Interior Designers in Pondicherry</h1>
                    <p className='home_about_title_caption3'>KPK Enterprise is a leading interior design company in Pondicherry, offering end-to-end home interiors. As top interior designers in Pondicherry, we deliver premium, affordable, and professional interior solutions.</p>
                    <div className='home_about_icon_con3'>
                    {data.map((value,index)=>(
                        <div key={index} className='home_about_icon__card3'>
                             <img src={value.icon} alt="" className='home_about_icon_img3'/>
                             <h3 className='home_about_icon_caption3'>{value.caption}</h3>
                        </div>

                    ))}
                    </div>
                    <p className='home_about_title_desc3'>KPK Enterprise is trusted by homeowners and businesses for our design accuracy, durable workmanship, and seamless execution.</p>
                    <button className='home_about_title_btn3'>Know More About US</button>
                </div>
            </div>
        </section>
        </>
    )
}