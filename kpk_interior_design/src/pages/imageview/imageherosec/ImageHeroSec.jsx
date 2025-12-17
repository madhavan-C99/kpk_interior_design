
import "./ImageHeroSec.css";

import mainImg from "../../../assets/imageview/image/Frame 1000012086.png";
import thumb1 from "../../../assets/imageview/image/Frame 1000012473.png";
import thumb2 from "../../../assets/imageview/image/Frame 1000012474.png";
import thumb3 from "../../../assets/imageview/image/Frame 1000012477.png";
import thumb4 from "../../../assets/imageview/image/Frame 1000012475.png"

import React, { useState, useMemo } from "react";



export default function ImageHeroSec({ selectedIdea }) {
  // fallback images if props not passed
  // const defaultImages = [
  //   { id: 1, img: mainImg },
  //   { id: 2, img: thumb1 },
  //   // { id: 3, img: thumb2 },
  //   // { id: 4, img: thumb4 },
  // ];

  // const imageData = images?.length ? images : defaultImages;
    const imageData = selectedIdea.image || [];
  const title = selectedIdea.title || "Design Details";

  // const [activeImage, setActiveImage] = useState(imageData[0].img);
    const [activeImage, setActiveImage] = useState(imageData[0]?.img || "");

  
  // React.useEffect(() => {
  //   if (imageData.length > 0) {
  //     setActiveImage(imageData[0].img);
  //   }
  // }, [images]);

    useEffect(() => {
    if (imageData.length > 0) {
      setActiveImage(imageData[0].img);
    }
  }, [selectedIdea]);

  // dynamic grid based on image count (2, 3, 4)
  const gridClass = useMemo(() => {
    if (imageData.length === 4) return "grid-4";
    if (imageData.length === 3) return "grid-3";
    if (imageData.length === 2) return "grid-2";
    return "grid-4";
  }, [imageData.length]);

  return (
    <section className="image-hero3">
      <p className="image_hero_head3">Home | interior design ideas idea's | Bold Terracotta And White Wall Colour Combination For Dining Room With Wooden Hutch And Woven Runner</p>
      <div className="image-hero__container3">
        {/* 70% Main Image */}
        <div className="image-hero__main3">
          <img src={activeImage} alt="Active Kitchen View" />
        </div>

        {/* 30% Grid Thumbnails */}
        <div className={`image-hero__grid3 ${gridClass}`}>
          {imageData.map((item) => (
            <button
              key={item.id}
              className={`image-hero__thumb3 ${
                activeImage === item.img ? "active" : ""
              }`}
              onClick={() => setActiveImage(item.img)}
            >
              <img src={item.img} alt={`Kitchen view ${item.id}`} />
            </button>
          ))}
        </div>
        
      </div>
      <button className="image_hero_btn3">Get This Design</button>
    </section>
  );
}







// export default function ImageHeroSec(){
//   const kitchenfour=[{id:1,img:mainImg},
//                   {id:2,img:thumb1},
//                   {id:3,img:thumb2},
//                   {id:4,img:thumb3},
//                   {id:5,img:thumb4}
//   ]
//   return
//   (
//     <>
//       <section>
//           <div>
//             <div>
//                 <img src={mainImg} alt="" />
//             </div>
//             <div>

//             </div>
//           </div>
//       </section>
//     </>
//   )
// }

