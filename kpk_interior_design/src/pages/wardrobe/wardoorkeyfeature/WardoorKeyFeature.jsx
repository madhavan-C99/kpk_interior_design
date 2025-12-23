import  group1 from '../../../assets/services/images/Frame1000012889.png'
import  group2 from '../../../assets/services/images/Frame1000012890.png'
import  group3 from '../../../assets/services/images/Frame1000012891.png'
import  group4 from '../../../assets/services/images/Frame1000012892.png'
import  group5 from '../../../assets/services/images/Frame1000012893.png'

import '../../services/keyfeatures/KeyFeatures.css'




export default function WardoorKeyFeatures(){
        var key_data=[{"img":group1,"name":'Sliding Wardrobe',"desc":'Smooth, space-saving doors that make your bedroom look clean and modern.'},
                      {"img":group2,"name":'Frame & Shutter Wardrobe',"desc":'Strong framed shutters that add structure, style, and long-lasting durability.'}, 
                      {"img":group3,"name":'Walk-In Wardrobe',"desc":'A spacious dressing zone designed for comfortable access and organized storage.'},
                      {"img":group4,"name":'Wardrobe With Study Unit',"desc":'A smart combo unit that brings storage and a neat study workspace together.'},
                      {"img":group5,"name":'Wardrobe With Dressing Unit',"desc":'A functional design that blends clothing storage with a convenient dressing area.'},
                    //   {"img":group4,"name":'Penisula Kitchen',"desc":'A connected extension layout offering added counter space without needing a full island.'}
                    ]
    console.log(key_data)
    return(
        <>
        <section>
            <div className='key_feature3'>
                <div className='key_feature_head3'>
                    <h1>Modern Wardrobe Planning & Layout Designs</h1>
                    <p>Our templates showcase stylish, space-efficient wardrobe planning and layout designs, crafted with modern detailing and factory-finish precision at KPK Enterprises, specialising in custom wardrobe designs in Pondicherry and Cuddalore</p>
                </div>
                <div className='key_feature_body3'>

                     {key_data.map((value ,index)=>(
                         <div key={index} className="key_feature_box3">
                            <div className="key_feature_img3">
                                <img src={value.img} alt="" />
                            </div>
                            <div className="key_feature_content3">
                                <h4>{value.name}</h4>
                                <p>{value.desc}</p>
                            </div>
                        </div>
                     ))}                                                                 
                </div>   
            </div>
            
        </section>
        </>
    )
}


