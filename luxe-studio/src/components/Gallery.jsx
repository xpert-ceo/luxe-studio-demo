import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Expand, X } from "lucide-react";
import { business } from "../config/business";
import SafeImage from "./SafeImage";
import Reveal, { ImageReveal } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Gallery() {
  const items = business.gallery;
  const [active, setActive] = useState(null);
  const lastFocus = useRef(null);
  const closeRef = useRef(null);
  const touchX = useRef(null);

  const close = useCallback(() => { setActive(null); lastFocus.current?.focus(); }, []);
  const step = useCallback((d) => setActive((a) => (a + d + items.length) % items.length), [items.length]);

  useEffect(() => {
    if (active === null) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") step(1);
      if (e.key === "ArrowLeft") step(-1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [active, close, step]);

  const onTouchEnd = (e) => {
    if (touchX.current === null) return;
    const dx = e.changedTouches[0].clientX - touchX.current;
    if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1);
    touchX.current = null;
  };

  return (
    <section id="work" className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <SectionHeading eyebrow="Our Work" title="A look at the studio style" />
          <p className="text-sm text-muted">Tap an image to enlarge</p>
        </Reveal>

        <div className="mt-12 columns-2 lg:columns-3 gap-3 sm:gap-5">
          {items.map((img, i) => (
            <ImageReveal key={i} delay={(i % 3) * 0.08} className="mb-3 sm:mb-5 break-inside-avoid">
              <button type="button" aria-label={`Open image: ${img.alt}`}
                onClick={(e) => { lastFocus.current = e.currentTarget; setActive(i); }}
                className="group relative block w-full overflow-hidden">
                <SafeImage image={img} className={`w-full ${img.ratio}`} imgClassName="transition-transform duration-[900ms] group-hover:scale-105" />
                <span className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500 flex items-end justify-end p-4">
                  <Expand size={20} className="text-white opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500" aria-hidden="true" />
                </span>
              </button>
            </ImageReveal>
          ))}
        </div>
        <p className="mt-6 text-xs text-muted">{business.galleryNote}</p>
      </div>

      <AnimatePresence>
        {active !== null && (
          <motion.div role="dialog" aria-modal="true" aria-label="Image viewer"
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 bg-ink/95 flex items-center justify-center p-4" onClick={close}
            onTouchStart={(e) => (touchX.current = e.touches[0].clientX)} onTouchEnd={onTouchEnd}>
            <button ref={closeRef} type="button" aria-label="Close" onClick={close} className="absolute top-4 right-4 text-ivory p-2"><X size={28} /></button>
            <button type="button" aria-label="Previous image" onClick={(e) => { e.stopPropagation(); step(-1); }}
              className="hidden sm:block absolute left-6 text-ivory p-2"><ChevronLeft size={36} /></button>
            <motion.div key={active} initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.35 }}
              onClick={(e) => e.stopPropagation()} className="w-full max-w-md lg:max-w-lg">
              <SafeImage image={items[active]} eager className={`w-full ${items[active].ratio} max-h-[78vh]`} />
              <p className="mt-3 text-center text-xs tracking-widest text-ivory/70">{active + 1} / {items.length}</p>
            </motion.div>
            <button type="button" aria-label="Next image" onClick={(e) => { e.stopPropagation(); step(1); }}
              className="hidden sm:block absolute right-6 text-ivory p-2"><ChevronRight size={36} /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
