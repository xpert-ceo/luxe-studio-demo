import { useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { business } from "../config/business";
import BookButton from "./BookButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => { document.removeEventListener("keydown", onKey); document.body.style.overflow = ""; };
  }, [open]);

  return (
    <header className={`sticky top-0 z-40 bg-ivory/90 backdrop-blur-md border-b transition-all duration-300 ${scrolled ? "border-line shadow-[0_1px_20px_rgba(40,34,31,0.05)]" : "border-transparent"}`}>
      <motion.div style={{ scaleX }} className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent origin-left" aria-hidden="true" />
      <nav aria-label="Main" className={`mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-between transition-all duration-300 ${scrolled ? "h-14" : "h-[4.5rem]"}`}>
        <a href="#home" className="font-serif text-xl sm:text-2xl tracking-[0.22em] font-semibold">{business.name}</a>

        <ul className="hidden lg:flex items-center gap-10 text-sm">
          {business.nav.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="relative text-muted hover:text-ink transition-colors after:absolute after:left-0 after:-bottom-1 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full">{l.label}</a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block"><BookButton className="!py-2.5 !px-5">{business.ctaText}</BookButton></div>
          <button type="button" className="lg:hidden p-2 -mr-2" aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div id="mobile-menu" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.25 }}
            className="lg:hidden fixed inset-x-0 top-14 bottom-0 bg-ivory px-6 pb-8 pt-6 overflow-y-auto flex flex-col">
            <ul>
              {business.nav.map((l, i) => (
                <motion.li key={l.href} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.06 * i + 0.1 }} className="border-b border-line">
                  <a href={l.href} onClick={() => setOpen(false)} className="flex items-baseline gap-4 py-5 font-serif text-4xl">
                    <span className="text-xs font-sans text-accent">0{i + 1}</span>{l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mt-auto pt-8"><BookButton className="w-full">{business.ctaText}</BookButton></div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
