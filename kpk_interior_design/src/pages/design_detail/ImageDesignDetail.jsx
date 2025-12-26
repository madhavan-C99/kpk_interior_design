import { useParams, useLocation, useNavigate } from "react-router-dom";
import { ImagegalleryMasterData } from "../../data/ImagegalleryMasterData";

import ImageBreadcrumbBar from "./ImageBreadcrumbBar";
import ImageViewer from "./ImageViewer";
import ImageDesignActionSlot from "./ImageDesignActionSlot";
import ImageRelatedDesignsCarousel from "./ImageRelatedDesignsCarousel";

import "./ImageDesignDetail.css";



export default function ImageDesignDetail() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const design = ImagegalleryMasterData.find(item => item.id === id);

  if (!design) {
    return <p style={{ padding: "40px" }}>Design not found.</p>;
  }

  return (
    <section className="image-design-detail">
      <ImageBreadcrumbBar
        title={design.title}
        category={design.category}
        source={location.state?.source}
        subcategory={location.state?.subcategory}
        onBack={() => navigate(-1)}
      />

      <ImageViewer images={design.images} title={design.title} />

      <ImageDesignActionSlot designId={design.id} />

      <ImageRelatedDesignsCarousel
        currentId={design.id}
        currentCategory={design.category}
      />
    </section>
  );
}