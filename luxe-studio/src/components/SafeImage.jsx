import { useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";

export default function SafeImage({
  image,
  className = "",
  imgClassName = "",
  eager = false,
  parallax = false,
}) {
  const [state, setState] = useState("loading");
  const reduceMotion = useReducedMotion();

  const imageData =
    typeof image === "string"
      ? { src: image, alt: "Salon style and beauty" }
      : image && typeof image === "object"
        ? image
        : {};

  const src =
    typeof imageData.src === "string" ? imageData.src.trim() : "";

  const alt =
    typeof imageData.alt === "string" && imageData.alt.trim()
      ? imageData.alt
      : "Salon style and beauty";

  const validSource = /^https?:\/\//i.test(src);
  const shouldParallax = parallax && !reduceMotion && validSource;

  const { scrollYProgress } = useScroll({
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);

  const showFallback = !validSource || state === "error";

  return (
    <div
      className={`relative isolate overflow-hidden bg-taupe ${
        state === "loading" && validSource ? "animate-pulse" : ""
      } ${className}`}
    >
      {showFallback ? (
        <div
          role="img"
          aria-label={`${alt} — image unavailable`}
          className="absolute inset-0 flex items-end bg-gradient-to-br from-taupe to-line p-3"
        >
          <span className="text-[10px] uppercase tracking-[0.16em] text-muted">
            Image unavailable
          </span>
        </div>
      ) : (
        <motion.img
          src={src}
          alt={alt}
          referrerPolicy="no-referrer"
          loading={eager ? "eager" : "lazy"}
          decoding="async"
          onLoad={() => setState("ok")}
          onError={() => setState("error")}
          style={
            shouldParallax
              ? { y, scale: 1.12 }
              : undefined
          }
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
            state === "ok" ? "opacity-100" : "opacity-0"
          } ${imgClassName}`}
        />
      )}
    </div>
  );
}
