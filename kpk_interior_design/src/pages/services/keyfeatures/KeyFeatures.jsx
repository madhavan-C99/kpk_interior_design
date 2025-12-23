import  group1 from '../../../assets/services/images/Group5139922.png'
import  group2 from '../../../assets/services/images/Group5139923.png'
import  group3 from '../../../assets/services/images/Group5139924.png'
import  group4 from '../../../assets/services/images/Group51399231.png'
import './KeyFeatures.css'




export default function KeyFeatures(){
        var key_data=[{"img":group1,"name":'Straight Kitchen',"desc":'A compact linear setup that maximizes functionality while keeping everything within reach.'},
                      {"img":group2,"name":'L- Shaped Kitchen',"desc":'An open corner layout that offers smooth movement and flexible workspace zoning.'}, 
                      {"img":group3,"name":'Parallel Kitchen',"desc":'A dual-counter arrangement that boosts efficiency with clear separation of tasks workflow.'},
                      {"img":group4,"name":'U-Shaped Kitchen',"desc":'A three-sided layout perfect for multitasking, offering maximum storage and movement ease.'},
                      {"img":group4,"name":'Island Kitchen',"desc":'A spacious central island concept that enhances cooking, prep, and social interaction.'},
                      {"img":group4,"name":'Penisula Kitchen',"desc":'A connected extension layout offering added counter space without needing a full island.'}]
    console.log(key_data)
    return(
        <>
        <section>
            <div className='key_feature3'>
                <div className='key_feature_head3'>
                    <h1>Efficient Modular Kitchen Layouts – Ideas for You</h1>
                    <p>KPK Enterprises creates efficient modular kitchen layouts that maximize space and improve workflow. Our L-shape, U-shape, and parallel designs offer smart storage, smooth movement, and stylish functionality for modern Pondicherry homes.</p>
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