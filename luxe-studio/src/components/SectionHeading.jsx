export default function SectionHeading({ eyebrow, title, className = "" }) {
  return (
    <div className={className}>
      {eyebrow && <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">{eyebrow}</p>}
      <h2 className="text-4xl sm:text-5xl leading-[1.1] font-medium">{title}</h2>
    </div>
  );
}
