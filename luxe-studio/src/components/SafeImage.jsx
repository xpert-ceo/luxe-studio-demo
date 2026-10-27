import { useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";

// Image with shimmer while loading, soft fade-in, optional parallax, and a tidy fallback on error.
export default function SafeImage({ image, className = "", imgClassName = "", eager = false, parallax = false }) {
  const [state, setState] = useState("loading");
  const ref = useRef(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-7%", "7%"]);
  const move = parallax && !reduce;

  return (
    <div ref={ref} className={`relative overflow-hidden bg-taupe ${state === "loading" ? "animate-pulse" : ""} ${className}`}>
      {state === "error" ? (
        <div role="img" aria-label={image.alt}
          className="absolute inset-0 bg-gradient-to-br from-taupe to-line flex items-end p-3 text-[10px] tracking-widest uppercase text-muted">
          Image unavailable
        </div>
      ) : (
        <motion.img src={image.src} alt={image.alt} referrerPolicy="no-referrer"
          onLoad={() => setState("ok")} onError={() => setState("error")}
          loading={eager ? "eager" : "lazy"} decoding="async"
          style={move ? { y, scale: 1.18 } : undefined}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${state === "ok" ? "opacity-100" : "opacity-0"} ${imgClassName}`} />
      )}
    </div>
  );
}
