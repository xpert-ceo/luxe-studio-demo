import { ArrowUpRight, Sparkles } from "lucide-react";
import { business } from "../config/business";
import BookButton from "./BookButton";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

export default function FinalCTA() {
  return (
    <section className="relative overflow-hidden bg-[#30231e] py-20 text-[#f8f2e9] sm:py-28 lg:py-32">
      <div className="pointer-events-none absolute -right-24 -top-24 h-80 w-80 rounded-full border border-white/10 sm:h-[28rem] sm:w-[28rem]" />
      <div className="pointer-events-none absolute -right-12 -top-12 h-56 w-56 rounded-full border border-white/10 sm:h-96 sm:w-96" />

      <div className="relative">
        <Reveal className="mx-auto max-w-3xl px-5 text-center sm:px-8">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.24em] text-[#d7b99a]">
            <Sparkles size={13} />
            Your next chapter starts here
          </div>

          <h2 className="font-serif text-4xl font-normal leading-[1.12] sm:text-6xl lg:text-7xl">
            A little time for you.
            <span className="mt-2 block italic text-[#d7b99a]">
              A look you’ll love.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-white/65 sm:text-base">
            Whether you’re ready for a fresh style or your next signature look,
            we’re here to make your visit feel special from the very first message.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <BookButton className="w-full sm:w-auto">
              {business.ctaText}
            </BookButton>

            <a
              href="#services"
              className="group inline-flex min-h-12 items-center justify-center gap-2 px-5 text-sm text-white/75 transition-colors hover:text-white"
            >
              Explore our services
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>
          </div>

          <p className="mt-7 text-[10px] uppercase tracking-[0.2em] text-white/40">
            Thoughtful service · Beautiful results · Your moment
          </p>
        </Reveal>

        <Marquee speed={45} className="mt-20 border-y border-white/10 py-5 sm:mt-28">
          {[0, 1, 2].map((item) => (
            <span key={item} className="flex items-center">
              <span className="whitespace-nowrap px-5 font-serif text-4xl italic text-white/15 sm:px-8 sm:text-6xl">
                {business.name}
              </span>
              <span className="h-2 w-2 shrink-0 rotate-45 bg-[#d7b99a]" />
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
