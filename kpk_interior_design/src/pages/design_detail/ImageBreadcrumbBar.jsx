import "./ImageBreadcrumbBar.css"

export default function ImageBreadcrumbBar({
  title,
  category,
  source,
  subcategory,
  onBack,
}) {
  let breadcrumbText = "";

  if (source === "services") {
    breadcrumbText = `Services | ${subcategory || category} | `;
  } 
  else if (source === "home") {
    breadcrumbText = "Home | ";
  } 
  else if (source === "ideas") {
    breadcrumbText = "Home | Interior Design Ideas | ";
  } 
  else {
    // SEO / refresh fallback
    breadcrumbText = `Home | ${category.replace("-", " ")} | `;
  }

  return (
    <div className="image-breadcrumb-bar">
      <span className="back-arrow" onClick={onBack}>←</span>
      <p>
        {breadcrumbText}
        <strong>{title}</strong>
      </p>
    </div>
  );
}