import { motion, useReducedMotion } from "framer-motion";
import { business } from "../config/business";
import BookButton from "./BookButton";
import SafeImage from "./SafeImage";
import { ImageReveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const { hero, hours, city } = business;
  const words = hero.headline.split(" ");
  const badge = "BOOK YOUR APPOINTMENT • BOOK YOUR APPOINTMENT • ";

  return (
    <section id="home" className="mx-auto max-w-7xl px-5 sm:px-8 pt-8 pb-20 lg:pt-14 lg:pb-28">
      <div className="grid lg:grid-cols-12 gap-14 lg:gap-10 items-center">
        <div className="lg:col-span-6 xl:col-span-6">
          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1 }}
            className="text-[11px] tracking-[0.3em] uppercase text-accent mb-6 flex items-center gap-3">
            <span className="h-px w-8 bg-accent" />{hero.eyebrow}
          </motion.p>

          <h1 className="text-[2.9rem] leading-[1.02] sm:text-7xl xl:text-[5.5rem] font-medium">
            {words.map((w, i) => {
              const accent = w.toLowerCase().startsWith(hero.accentWord.toLowerCase());
              return (
                <span key={i} className="inline-block overflow-hidden align-bottom pb-1 mr-[0.22em]">
                  <motion.span className={`inline-block ${accent ? "italic text-accent" : ""}`}
                    initial={reduce ? false : { y: "110%" }} animate={{ y: 0 }}
                    transition={{ duration: 0.9, delay: 0.15 + i * 0.09, ease }}>{w}</motion.span>
                </span>
              );
            })}
          </h1>

          <motion.p initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.7, duration: 0.8 }}
            className="mt-7 text-base sm:text-lg text-muted max-w-md leading-relaxed">{business.description}</motion.p>

          <motion.div initial={reduce ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-9 flex flex-col sm:flex-row gap-5 sm:items-center">
            <BookButton className="w-full sm:w-auto">{business.heroCtaText}</BookButton>
            <a href="#services" className="text-sm font-medium border-b border-ink pb-0.5 self-center sm:self-auto hover:text-accent hover:border-accent transition-colors">
              Explore Our Services
            </a>
          </motion.div>

          <motion.p initial={reduce ? false : { opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.1 }}
            className="mt-10 pt-6 border-t border-line text-xs text-muted tracking-wide">
            {hours[0].day}, {hours[0].time} &nbsp;·&nbsp; {city}
          </motion.p>
        </div>

        <div className="lg:col-span-6 relative">
          <ImageReveal>
            <SafeImage image={business.images.hero} eager parallax className="w-full aspect-[4/5] sm:aspect-[16/11] lg:aspect-[4/5] lg:max-h-[760px]" />
          </ImageReveal>

          <motion.div initial={reduce ? false : { opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1, duration: 0.9, ease }}
            className="absolute -bottom-6 left-3 sm:-left-6 w-28 sm:w-40 border-[5px] border-ivory shadow-lg">
            <SafeImage image={business.images.heroDetail} eager className="w-full aspect-[3/4]" />
          </motion.div>

          <a href="#book" aria-label="Go to booking section"
            className="absolute top-3 right-3 sm:-top-6 sm:-right-4 h-24 w-24 sm:h-28 sm:w-28 rounded-full bg-ink text-ivory flex items-center justify-center hover:bg-accent transition-colors">
            <svg viewBox="0 0 100 100" className="spin-slow absolute inset-0" aria-hidden="true">
              <defs><path id="circ" d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0" /></defs>
              <text fontSize="9.2" letterSpacing="2.2" fill="currentColor"><textPath href="#circ">{badge}</textPath></text>
            </svg>
            <span className="font-serif text-2xl italic">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
