```jsx
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDownRight, ArrowUpRight, Clock3, MapPin } from "lucide-react";
import { business } from "../config/business";
import BookButton from "./BookButton";
import SafeImage from "./SafeImage";
import { ImageReveal } from "./Reveal";

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const reduce = useReducedMotion();
  const { hero, hours, city, images, description } = business;

  const animation = (delay = 0) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section
      id="home"
      className="relative mx-auto max-w-7xl overflow-hidden px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:pb-28 lg:pt-16"
    >
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
        {/* Editorial introduction */}
        <div className="relative z-10 lg:col-span-6">
          <motion.div
            {...animation(0.05)}
            className="mb-7 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-accent" />
            <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-accent sm:text-xs">
              {hero.eyebrow}
            </p>
          </motion.div>

          <motion.h1
            {...animation(0.12)}
            className="max-w-2xl font-serif text-[clamp(3.1rem,9vw,6.8rem)] font-normal leading-[0.96] tracking-[-0.055em]"
          >
            {hero.headline.split(" ").map((word, index) => {
              const isAccent = word
                .toLowerCase()
                .startsWith(hero.accentWord.toLowerCase());

              return (
                <span
                  key={`${word}-${index}`}
                  className={`mr-[0.18em] inline-block ${
                    isAccent ? "italic text-accent" : ""
                  }`}
                >
                  {word}
                </span>
              );
            })}
          </motion.h1>

          <motion.p
            {...animation(0.24)}
            className="mt-7 max-w-md text-sm leading-7 text-muted sm:text-base sm:leading-8"
          >
            {description}
          </motion.p>

          <motion.div
            {...animation(0.34)}
            className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <BookButton className="w-full justify-center sm:w-auto">
              {business.heroCtaText}
            </BookButton>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center justify-center gap-2 text-sm font-medium transition-colors hover:text-accent sm:justify-start"
            >
              Explore our services
              <ArrowDownRight
                size={17}
                strokeWidth={1.5}
                className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
              />
            </a>
          </motion.div>

          <motion.div
            {...animation(0.44)}
            className="mt-10 grid max-w-md grid-cols-2 gap-5 border-t border-line pt-5"
          >
            <div className="flex items-start gap-3">
              <Clock3
                size={17}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-accent"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                  Opening hours
                </p>
                <p className="mt-1 text-xs leading-5 text-ink sm:text-sm">
                  {hours?.[0]?.time ?? "Contact us"}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <MapPin
                size={17}
                strokeWidth={1.5}
                className="mt-0.5 shrink-0 text-accent"
              />
              <div>
                <p className="text-[10px] uppercase tracking-[0.16em] text-muted">
                  Find us
                </p>
                <p className="mt-1 text-xs leading-5 text-ink sm:text-sm">
                  {city}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Photography composition */}
        <div className="relative pb-8 pl-2 sm:pl-8 lg:col-span-6 lg:pb-10 lg:pl-4">
          <div className="absolute -right-12 -top-10 h-40 w-40 rounded-full border border-accent/20 sm:-right-4 sm:-top-8 sm:h-56 sm:w-56" />

          <ImageReveal>
            <SafeImage
              image={images.hero}
              eager
              parallax
              className="relative aspect-[4/5] w-full bg-taupe sm:aspect-[5/4] lg:aspect-[4/5] lg:max-h-[700px]"
            />
          </ImageReveal>

          <motion.div
            {...animation(0.55)}
            className="absolute -bottom-1 left-0 w-[36%] border-[5px] border-ivory bg-ivory shadow-xl sm:-left-1 sm:w-[34%] sm:border-[7px]"
          >
            <SafeImage
              image={images.heroDetail}
              eager
              className="aspect-[3/4] w-full"
            />
          </motion.div>

          <motion.a
            {...animation(0.65)}
            href="#about"
            aria-label="Discover more about the studio"
            className="absolute right-0 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-ivory shadow-lg transition-transform hover:scale-105 hover:bg-accent sm:-right-2 sm:top-8 sm:h-14 sm:w-14"
          >
            <ArrowUpRight size={22} strokeWidth={1.5} />
          </motion.a>

          <p className="absolute bottom-0 right-1 text-[9px] uppercase tracking-[0.2em] text-muted sm:right-2 sm:text-[10px]">
            Beauty, in every detail
          </p>
        </div>
      </div>
    </section>
  );
}
```
