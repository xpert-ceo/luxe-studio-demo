import { useReducedMotion } from "framer-motion";

export default function Marquee({
  children,
  speed = 40,
  reverse = false,
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`marquee-wrap overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div
        className="marquee flex w-max"
        style={{
          animationDuration: `${Math.max(1, Number(speed) || 40)}s`,
          animationDirection: reverse ? "reverse" : "normal",
          animationPlayState: reduceMotion ? "paused" : "running",
        }}
      >
        <div className="flex shrink-0 items-center">{children}</div>
        <div className="flex shrink-0 items-center">{children}</div>
      </div>
    </div>
  );
}
