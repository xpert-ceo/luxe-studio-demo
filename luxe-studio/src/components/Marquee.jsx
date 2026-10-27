// Pure CSS marquee. Pauses on hover, stops for reduced-motion users.
export default function Marquee({ children, speed = 40, reverse = false, className = "" }) {
  return (
    <div className={`marquee-wrap overflow-hidden ${className}`} aria-hidden="true">
      <div className="marquee flex w-max" style={{ animationDuration: `${speed}s`, animationDirection: reverse ? "reverse" : "normal" }}>
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
