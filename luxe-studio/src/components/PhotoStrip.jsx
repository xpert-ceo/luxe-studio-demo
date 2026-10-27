import { Sparkles } from "lucide-react";
import { business } from "../config/business";
import Marquee from "./Marquee";
import SafeImage from "./SafeImage";

export default function PhotoStrip() {
  const gallery = business.gallery || [];

  if (!gallery.length) return null;

  return (
    <section
      aria-label="A glimpse of our styles"
      className="overflow-hidden bg-[#f4eee6] py-12 sm:py-16"
    >
      <div className="mx-auto mb-7 flex max-w-7xl items-center justify-center gap-3 px-5 sm:mb-9">
        <span className="h-px w-8 bg-[#b99b7d]" />
        <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#786354]">
          <Sparkles size={12} />
          A glimpse of the experience
        </span>
        <span className="h-px w-8 bg-[#b99b7d]" />
      </div>

      <Marquee speed={45}>
        {[...gallery, ...gallery].map((image, index) => (
          <div
            key={`${index}-${typeof image === "string" ? image : "gallery-image"}`}
            className="mx-1.5 h-44 w-36 shrink-0 overflow-hidden sm:mx-2 sm:h-72 sm:w-56"
          >
            <SafeImage
              image={image}
              className="h-full w-full transition-transform duration-700 hover:scale-105"
            />
          </div>
        ))}
      </Marquee>

      <p className="mt-7 text-center font-serif text-lg italic text-[#786354] sm:mt-9 sm:text-xl">
        Every detail matters.
      </p>
    </section>
  );
}
