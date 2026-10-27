
import { useEffect, useState } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
} from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { business } from "../config/business";
import BookButton from "./BookButton";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, [open]);

  const closeMenu = () => setOpen(false);

  return (
    <header
      className={`sticky top-0 z-50 isolate border-b bg-ivory/95 backdrop-blur-xl transition-all duration-300 ${
        scrolled
          ? "border-line shadow-[0_4px_24px_rgba(40,34,31,0.06)]"
          : "border-transparent"
      }`}
    >
      <motion.div
        aria-hidden="true"
        className="absolute bottom-0 left-0 right-0 z-10 h-[2px] origin-left bg-accent"
        style={{ scaleX }}
      />

      <nav
        aria-label="Main navigation"
        className={`relative z-20 mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 ${
          scrolled ? "h-14" : "h-[4.5rem]"
        }`}
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="relative z-30 font-serif text-xl font-semibold tracking-[0.18em] sm:text-2xl sm:tracking-[0.22em]"
          aria-label={`${business.name} home`}
        >
          {business.name}
        </a>

        <ul className="hidden items-center gap-8 text-sm lg:flex xl:gap-10">
          {business.nav.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="relative text-muted transition-colors duration-200 hover:text-ink after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-accent after:transition-all after:duration-300 hover:after:w-full"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <div className="hidden lg:block">
            <BookButton className="!px-5 !py-2.5">
              {business.ctaText}
            </BookButton>
          </div>

          <button
            type="button"
            className="relative z-30 inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white/70 transition-colors hover:bg-white lg:hidden"
            aria-label={open ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((current) => !current)}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
                animate={{ opacity: 1, rotate: 0, scale: 1 }}
                exit={{ opacity: 0, rotate: 45, scale: 0.8 }}
                transition={{ duration: 0.15 }}
                className="flex items-center justify-center"
              >
                {open ? (
                  <X size={21} strokeWidth={1.7} />
                ) : (
                  <Menu size={21} strokeWidth={1.7} />
                )}
              </motion.span>
            </AnimatePresence>
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close navigation menu"
              tabIndex={-1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.18 }}
              onClick={closeMenu}
              className="fixed inset-0 z-10 cursor-default bg-ink/25 lg:hidden"
            />

            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{
                duration: 0.22,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-0 right-0 top-full z-20 max-h-[calc(100dvh-4rem)] overflow-y-auto border-b border-line bg-ivory px-5 pb-7 pt-5 shadow-[0_24px_40px_rgba(40,34,31,0.12)] sm:px-8 lg:hidden"
            >
              <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.24em] text-muted">
                Explore {business.name}
              </p>

              <ul>
                {business.nav.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: index * 0.045,
                      duration: 0.2,
                    }}
                    className="border-b border-line/80 last:border-b-0"
                  >
                    <a
                      href={item.href}
                      onClick={closeMenu}
                      className="group flex min-h-[60px] items-center justify-between gap-4 py-3 font-serif text-2xl text-ink transition-colors hover:text-accent sm:text-3xl"
                    >
                      <span>{item.label}</span>
                      <ArrowUpRight
                        size={19}
                        strokeWidth={1.5}
                        className="shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </a>
                  </motion.li>
                ))}
              </ul>

              <div className="pt-6">
                <BookButton className="w-full justify-center">
                  {business.ctaText}
                </BookButton>
                <p className="mt-3 text-center text-xs leading-5 text-muted">
                  A little time for yourself goes a long way.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
