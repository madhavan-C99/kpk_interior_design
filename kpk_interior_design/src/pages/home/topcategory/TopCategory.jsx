import React from "react";
import './TopCategory.css'
import homeimg from '../../../assets/home/images/topcatimg1.png'
import apartmentimg from '../../../assets/home/images/topcatimg2.png'
import shopimg from '../../../assets/home/images/topcatimg3.png'
import businessimg from '../../../assets/home/images/topcatimg4.png'
import factoryimg from '../../../assets/home/images/topcatimg5.png'

function TopCategory(){

    const categorydata=[
        {   id:1,
            img:homeimg,
            title:'Residential',
            description:'Personalized interiors for houses and villas.'
        },
        {   id:2,
            img:shopimg,
            title:'Apartments',
            description:'Space-efficient, stylish, and functional apartment designs.'
        },
        {   id:3,
            img:apartmentimg,
            title:'Commercial',
            description:'Offices, retail shops, and workspaces with modern interiors.'
        },
        {   id:4,
            img:businessimg,
            title:'Corporate',
            description:'Professional, elegant office solutions for businesses. '
        },
        {   id:5,
            img:factoryimg,
            title:'Factory',
            description:'Practical, durable, and well-planned industrial interiors.'
        },
    ]
    return(
        <>
            <div className="topcategory_container2">
                <div className="topcategory_textwrapper2">
                    <p className="topcategory_badge2">Our Top Category</p>
                    <h2 className="topcategory_title2">
                        Specialized Interior Solutions for Every Segment
                    </h2>
                    <p className="topcategory_desc2">
                        At KPK Enterprises, we deliver specialized interior 
                        solutions for every segment in Pondicherry. From 
                        residential homes and apartments to commercial offices, 
                        corporate spaces, and factories, we ensure stylish, functional, 
                        and high-quality interiors for every client.
                    </p>
                </div>
                <div className="topcategory_grid2">
                    {categorydata.map(data=>(
                        <div className="topcategory_card2" key={data.id}>
                            <img src={data.img} alt={data.title} className="topcategory_img2" />
                            <h4 className="topcategory_cardtitle2">{data.title}</h4>
                            <p className="topcategory_carddesc2">{data.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default TopCategory