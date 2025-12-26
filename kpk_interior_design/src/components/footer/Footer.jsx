// import React from "react";
// import './Footer.css'
// import lowestprice from '../../assets/footer/images/Frame1000012646.png'
// import builtontrust from '../../assets/footer/images/Frame1000012645.png'
// import qualitystands from '../../assets/footer/images/Frame1000012644.png'
// import kpklogo from '../../assets/footer/images/3DPNG1.png'
// import phoneicon from '../../assets/footer/images/ic_round-call.png'
// import instaicon from '../../assets/footer/images/mingcute_instagram-fill.png'
// import messageicon from '../../assets/footer/images/material-symbols_mail.png'
// import locationicon from '../../assets/footer/images/mdi_location.png'
// import {Link} from  'react-router-dom'
// import handClick from '../navbar/Navbar'

// function Footer(){
//     const valueprops = [
//     { 
//       id: 1, 
//       icon:qualitystands , 
//       title: 'BEST INTERIOR VALUE', 
//       text: 'Get the best interiors with honest pricing, trusted quality, and guaranteed on-time delivery for your home.' 
//     },
//     { 
//       id: 2, 
//       icon: builtontrust, 
//       title: 'BEST PRICE PROMISE', 
//       text: 'Enjoy stylish interiors at the best price with smooth work, clear updates, and timely delivery always.' 
//     },
//     { 
//       id: 3, 
//       icon: lowestprice, 
//       title: 'ON-TIME INTERIORS', 
//       text: 'We create beautiful interiors with fair pricing, trusted service, and delivery exactly on the promised date.' 
//     }
//   ]
//      const quicklinks = ['Home', 'About', 'Portfolio', 'Pricing', 'Contact'];
//      const services = ['Modular Kitchen', 'Wardrobe', 'TV Unit', 'Pooja Unit'];
//     return(
//         <>
//             <footer className="main_footer2">
//                 <div className="footer_main_container2">
//                     <div className="value_propcard_section2">
//                         {valueprops.map((data)=>(
//                             <div className="value_propcard2" key={data.id}>
//                                 <div className="prop_icon2">
//                                     <img src={data.icon} alt={data.title} />
//                                 </div>
//                                 <div className="prop_content2">
//                                     <h4 className="prop_title2">{data.title}</h4>
//                                     <p className="prop_text2">{data.text}</p>
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                     <div className="footer_main_content2">
//                         <div className="footer_contact_info2">
//                             <img src={kpklogo} alt="KPK Interior Logo" />
//                             <ul className="contact_details2">
//                                 <li><img src={phoneicon} alt="" /> +91 87648 39262</li>
//                                 <li><img src={messageicon} alt="" /> kpkenterprisespdy@gmail.com</li>
//                                 <li><img src={instaicon} alt="" /> kpkenterprises</li>
//                             </ul>
//                         </div>
//                         <div className="footer_links2">
//                             <h4 className="links_heading2">Quick Links</h4>
//                             <ul className="footer_quicklinks2">
//                                 {quicklinks.map((data,index)=>(
//                                     <li key={index}><a href="">{data}</a></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="footer_services2">
//                             <h4 className="services_heading2">Services</h4>
//                             <ul className="footer_services_list2">
//                                 {services.map((data,index)=>(
//                                     <li key={index}><a href="">{data}</a></li>
//                                 ))}
//                             </ul>
//                         </div>
//                         <div className="footer_address2">
//                             <h4 className="address_heading2">Address</h4>
//                             <div className="address_map2">
//                                 <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17546.060509941402!2d79.72203098067156!3d12.022712010449382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765862022155!5m2!1sen!2sin"></iframe>
//                             </div>
//                             <div className="address_text2">
//                                <img src={locationicon} alt="Locaton_icon" /> 
//                                <p>VPR Garden, No.151/41, By-Pass Road, Vanur, T.K, Auroville,
//                                 Pondicherry, Tamil Nadu 605101</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="copyright_area2">
//                     <p className="copyright_text2">Copyrights @ Kpk Enterprises</p>
//                 </div>
//             </footer>
//         </>
//     )
// }

// export default Footer

// second part 
import React from "react";
import './Footer.css'
import lowestprice from '../../assets/footer/images/Frame1000012646.png'
import builtontrust from '../../assets/footer/images/Frame1000012645.png'
import qualitystands from '../../assets/footer/images/Frame1000012644.png'
import kpklogo from '../../assets/footer/images/3DPNG1.png'
import phoneicon from '../../assets/footer/images/ic_round-call.png'
import instaicon from '../../assets/footer/images/mingcute_instagram-fill.png'
import messageicon from '../../assets/footer/images/material-symbols_mail.png'
import locationicon from '../../assets/footer/images/mdi_location.png'
import {Link} from  'react-router-dom'
import handClick from '../navbar/Navbar'


function Footer(){
    //scroll to top
    const handleClick=()=>{
          window.scrollTo({
                top: 0,
                behavior: "smooth",
            });}

   const valueprops = [
    { 
      id: 1, 
      icon:qualitystands , 
      title: 'BEST INTERIOR VALUE', 
      text: 'Get the best interiors with honest pricing, trusted quality, and guaranteed on-time delivery for your home.' 
    },
    { 
      id: 2, 
      icon: builtontrust, 
      title: 'BEST PRICE PROMISE', 
      text: 'Enjoy stylish interiors at the best price with smooth work, clear updates, and timely delivery always.' 
    },
    { 
      id: 3, 
      icon: lowestprice, 
      title: 'ON-TIME INTERIORS', 
      text: 'We create beautiful interiors with fair pricing, trusted service, and delivery exactly on the promised date.' 
    }]


    //  const quicklinks = ['Home', 'About', 'Portfolio', 'Pricing', 'Contact'];
    const quicklinks = [
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Portfolio', path: '/portfolio' },
  { title: 'Pricing', path: '/pricing' },
  { title: 'Contact', path: '/contact' }
];
    const services = [
        { title: 'Modular Kitchen', path: '/services/modular/kitchen' },
  { title: 'Wardrobe', path: '/services/wardrobe' },
  { title: 'TV Unit', path: '/services/tv_unit' },
  { title: 'Pooja Unit', path: '/services/pooja_unit' },
//   { title: 'Contact', path: '/contact' }
];

    
    //  const services = ['Modular Kitchen', 'Wardrobe', 'TV Unit', 'Pooja Unit'];
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
                            <img src={kpklogo} alt="KPK Interior Logo" />
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
                                    <li key={index}><Link to={data.path} onClick={()=> {
                                            window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                            })
                                        }}>{data.title}</Link></li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer_services2">
                            <h4 className="services_heading2">Services</h4>
                            <ul className="footer_services_list2">
                                {services.map((data,index)=>(
                                    <li key={index}>
                                        {/* <a href={data.path}>{data.title}</a> */}
                                        <Link to={data.path} onClick={()=> {
                                            window.scrollTo({
                                            top: 0,
                                            behavior: "smooth",
                                            })
                                        }} >{data.title}</Link>
                                        </li>
                                ))}
                            </ul>
                        </div>
                        <div className="footer_address2">
                            <h4 className="address_heading2">Address</h4>
                            <div className="address_map2">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d17546.060509941402!2d79.72203098067156!3d12.022712010449382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1765862022155!5m2!1sen!2sin"></iframe>
                            </div>
                            <div className="address_text2">
                               <img src={locationicon} alt="Locaton_icon" /> 
                               <p>VPR Garden, No.151/41, By-Pass Road, Vanur, T.K, Auroville,
                                Pondicherry, Tamil Nadu 605101</p>
                            </div>
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