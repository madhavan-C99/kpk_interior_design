import React from "react";
import './Footer.css'
import lowestprice from '../../assets/footer/images/Frame 1000012646.png'
import builtontrust from '../../assets/footer/images/Frame 1000012645.png'
import qualitystands from '../../assets/footer/images/Frame 1000012644.png'
import kpklogo from '../../assets/footer/images/3DPNG 1.png'
import phoneicon from '../../assets/footer/images/ic_round-call.png'
import instaicon from '../../assets/footer/images/mingcute_instagram-fill.png'
import messageicon from '../../assets/footer/images/material-symbols_mail.png'



function Footer(){
    const valueprops = [
    { 
      id: 1, 
      icon: lowestprice, 
      title: 'LOWEST PRICE GUARANTEED', 
      text: 'No false claims. You get what you see. Lowest Price Guaranteed on home interiors.' 
    },
    { 
      id: 2, 
      icon: builtontrust, 
      title: 'BUILT ON TRUST', 
      text: 'We handle your interiors with honesty, clarity, and a commitment you can feel.' 
    },
    { 
      id: 3, 
      icon: qualitystands, 
      title: 'QUALITY THAT STANDS STRONG', 
      text: 'No false claims. You get what you see. Lowest Price Guaranteed on home interiors.' 
    }
  ]
     const quicklinks = ['Home', 'About', 'Services', 'Portfolio', 'Pricing', 'Contact'];
     const services = ['Modular Kitchen', 'Wardrobe', 'TV Unit', 'Pooja Unit'];
    return(
        <>
            <footer className="main_footer2">
                <div className="footer_main_container2">
                    <div className="value_propcard_section2">
                        {valueprops.map((data)=>(
                            <div className="value_propcard2" key={data.id}>
                                <div className="prop_icon2">
                                    <img src={data.icon} alt={data.title} />
                                </div>
                                <div className="prop_content2">
                                    <h4 className="prop_title2">{data.title}</h4>
                                    <p className="prop_text2">{data.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="footer_main_content2">
                        <div className="footer_contact_info2">
                            <img src={kpklogo} alt="" />
                            <p className="footer_tagline2">Thoughtfully designed interiors that 
                                bring comfort, style, and trust into your home.</p>
                            <ul className="contact_details2">
                                <li><img src={phoneicon} alt="" /> +91 87648 39262</li>
                                <li><img src={messageicon} alt="" /> kpkenterprisespdy@gmail.com</li>
                                <li><img src={instaicon} alt="" /> kpkenterprises</li>
                            </ul>
                        </div>
                        <div className="footer_links2">
                            <h4 className="links_heading2">Quick Links</h4>
                            <ul className="footer_quicklinks2">
                                {quicklinks.map((data,index)=>(
                                    <li key={index}><a href="">{data}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer_services2">
                            <h4 className="services_heading2">Quick Links</h4>
                            <ul>
                                {services.map((data,index)=>(
                                    <li key={index}><a href="">{data}</a></li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer_address2">
                            <h4 className="address_heading2">Address</h4>
                            <div className="address_map2">
                                <iframe src="" frameborder="0"></iframe>
                            </div>
                            <p className="address_text2">
                                <i></i> VPR Garden, No.151/41, By-Pass Road, Vanur, T.K, Auroville,
                                Pondicherry, Tamil Nadu 605101
                            </p>
                        </div>
                    </div>
                </div>
                <div className="copyright_area2">
                    <p className="copyright_text2">Copyrights @ Kpk Enterprises</p>
                </div>
            </footer>
        </>
    )
}

export default Footer