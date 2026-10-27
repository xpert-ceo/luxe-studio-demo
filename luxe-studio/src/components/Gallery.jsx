import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Expand,
  X,
} from "lucide-react";
import { business } from "../config/business";
import SafeImage from "./SafeImage";
import Reveal, { ImageReveal } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const items = business.gallery ?? [];
  const [active, setActive] = useState(null);
  const lastFocus = useRef(null);
  const closeRef = useRef(null);
  const touchX = useRef(null);

  const close = useCallback(() => {
    setActive(null);
    lastFocus.current?.focus();
  }, []);

  const step = useCallback(
    (direction) => {
      setActive((current) => {
        if (current === null || items.length === 0) return current;
        return (current + direction + items.length) % items.length;
      });
    },
    [items.length]
  );

  useEffect(() => {
    if (active === null) return undefined;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowRight") step(1);
      if (event.key === "ArrowLeft") step(-1);
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [active, close, step]);

  const handleTouchEnd = (event) => {
    if (touchX.current === null) return;

    const distance = event.changedTouches[0].clientX - touchX.current;

    if (Math.abs(distance) > 50) {
      step(distance < 0 ? 1 : -1);
    }

    touchX.current = null;
  };

  const openImage = (event, index) => {
    lastFocus.current = event.currentTarget;
    setActive(index);
  };

  return (
    <section id="work" className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.32em] text-muted">
              A little inspiration
            </p>

            <SectionHeading
              eyebrow="Our Work"
              title="Beauty in every detail."
            />
          </div>

          <p className="max-w-xs text-sm leading-7 text-muted sm:text-right">
            Explore the looks, textures and little details that inspire our
            approach to beautiful hair.
          </p>
        </Reveal>

        {items.length > 0 ? (
          <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-5 lg:grid-cols-12 lg:gap-6">
            {items.map((img, index) => {
              const featured = index === 0 || index === 5;
              const tall = index === 1 || index === 4;

              return (
                <ImageReveal
                  key={`${img.alt ?? "gallery-image"}-${index}`}
                  delay={(index % 3) * 0.08}
                  className={[
                    "min-w-0",
                    featured ? "lg:col-span-6" : "lg:col-span-3",
                    tall ? "lg:row-span-2" : "",
                  ].join(" ")}
                >
                  <button
                    type="button"
                    aria-label={`Enlarge image: ${img.alt ?? "Salon portfolio"}`}
                    onClick={(event) => openImage(event, index)}
                    className="group relative block w-full overflow-hidden bg-ivory text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ink"
                  >
                    <SafeImage
                      image={img}
                      className={[
                        "w-full",
                        img.ratio || "aspect-[4/5]",
                        "transition-colors duration-500",
                      ].join(" ")}
                      imgClassName="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />

                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/55 via-transparent to-transparent opacity-70 transition-opacity duration-500 group-hover:opacity-100" />

                    <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-3 sm:p-5">
                      <span className="min-w-0">
                        <span className="block text-[9px] uppercase tracking-[0.24em] text-white/75 sm:text-[10px]">
                          Studio inspiration
                        </span>
                        <span className="mt-1 block text-xs leading-5 text-white sm:text-sm">
                          {img.alt || "A closer look"}
                        </span>
                      </span>

                      <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-white/50 text-white transition-all duration-300 group-hover:border-white group-hover:bg-white group-hover:text-ink">
                        <Expand size={15} aria-hidden="true" />
                      </span>
                    </span>
                  </button>
                </ImageReveal>
              );
            })}
          </div>
        ) : (
          <div className="mt-12 border border-ink/10 px-6 py-16 text-center">
            <p className="text-sm text-muted">
              Our portfolio is being prepared. Please check back soon.
            </p>
          </div>
        )}

        <Reveal className="mt-8 flex flex-col gap-5 border-t border-ink/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-xs leading-6 text-muted">
            {business.galleryNote ||
              "Every look is an inspiration. Your own style is what makes it yours."}
          </p>

          <a
            href="#booking"
            className="group inline-flex w-fit items-center gap-3 text-xs font-medium uppercase tracking-[0.18em] text-ink"
          >
            Create your look
            <ArrowUpRight
              size={15}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </a>
        </Reveal>
      </div>

      <AnimatePresence>
        {active !== null && items[active] && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Salon portfolio image viewer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-ink/95 p-4 sm:p-8"
            onClick={close}
            onTouchStart={(event) => {
              touchX.current = event.touches[0].clientX;
            }}
            onTouchEnd={handleTouchEnd}
          >
            <button
              ref={closeRef}
              type="button"
              aria-label="Close image viewer"
              onClick={close}
              className="absolute right-4 top-4 z-10 flex size-11 items-center justify-center text-ivory/80 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:right-7 sm:top-7"
            >
              <X size={25} />
            </button>

            <button
              type="button"
              aria-label="Previous image"
              onClick={(event) => {
                event.stopPropagation();
                step(-1);
              }}
              className="absolute left-2 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:flex lg:left-8"
            >
              <ChevronLeft size={30} />
            </button>

            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
              onClick={(event) => event.stopPropagation()}
              className="flex max-h-full w-full max-w-3xl flex-col items-center"
            >
              <SafeImage
                image={items[active]}
                eager
                className="max-h-[76vh] w-auto max-w-full overflow-hidden"
                imgClassName="max-h-[76vh] w-auto max-w-full object-contain"
              />

              <div className="mt-5 flex w-full max-w-xl items-center justify-between gap-4">
                <p className="min-w-0 truncate text-xs tracking-wide text-white/75">
                  {items[active].alt || "Salon inspiration"}
                </p>

                <p className="shrink-0 text-[10px] tracking-[0.2em] text-white/55">
                  {String(active + 1).padStart(2, "0")} /{" "}
                  {String(items.length).padStart(2, "0")}
                </p>
              </div>
            </motion.div>

            <button
              type="button"
              aria-label="Next image"
              onClick={(event) => {
                event.stopPropagation();
                step(1);
              }}
              className="absolute right-2 top-1/2 hidden size-12 -translate-y-1/2 items-center justify-center text-white/75 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white sm:flex lg:right-8"
            >
              <ChevronRight size={30} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
