export default function ImageBreadcrumbBar({
  title,
  category,
  fromLabel,
  onBack,
}) {
  const readableCategory = category.replace("-", " ");

  return (
    <div className="image-breadcrumb-bar">
      <span className="back-arrow" onClick={onBack}>←</span>
      <p>
        Home | {fromLabel || readableCategory} | <strong>{title}</strong>
      </p>
    </div>
  );
}
