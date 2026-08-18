export default function SectionHeading({ eyebrow, title, description, light = false, compact = false }) {
  return (
    <div className={`section-heading ${light ? "light" : ""} ${compact ? "compact" : ""}`}>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 dangerouslySetInnerHTML={{ __html: title }} />
      </div>
      {description && <p>{description}</p>}
    </div>
  );
}