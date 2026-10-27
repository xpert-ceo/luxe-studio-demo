import { ArrowUpRight, Sparkles } from "lucide-react";
import { business } from "../config/business";
import SafeImage from "./SafeImage";
import Reveal, { ImageReveal } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { about, images } = business;

  return (
    <section
      id="about"
      className="overflow-hidden bg-[#FAF8F4] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <Reveal>
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
              More than a salon visit
            </p>

            <SectionHeading
              eyebrow="Our Philosophy"
              title={about.heading}
            />

            <div className="mt-7 max-w-xl space-y-5 text-[15px] leading-8 text-muted">
              {(about.body || []).map((paragraph, index) => (
                <p key={`${index}-${paragraph.slice(0, 18)}`}>
                  {paragraph}
                </p>
              ))}
            </div>

            <a
              href="#book"
              className="group mt-8 inline-flex items-center gap-3 bg-ink px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-ivory transition-colors duration-300 hover:bg-[#574033]"
            >
              Experience LUXE
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>

          <Reveal className="mt-12 border-t border-ink/10 pt-6">
            <div className="flex items-start gap-4">
              <Sparkles
                size={18}
                strokeWidth={1.3}
                className="mt-1 shrink-0 text-accent"
                aria-hidden="true"
              />
              <div>
                <p className="font-serif text-xl text-ink">
                  Your style, your moment.
                </p>
                <p className="mt-2 max-w-sm text-xs leading-6 text-muted">
                  Thoughtful service, considered details and a look that feels
                  distinctly yours.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="order-1 lg:order-2 lg:col-span-5 lg:col-start-8">
          <ImageReveal className="relative">
            <div className="absolute -right-3 -top-3 h-full w-full border border-ink/10 sm:-right-5 sm:-top-5" />

            <SafeImage
              image={images.about}
              parallax
              className="relative z-10 aspect-[4/5] w-full overflow-hidden bg-[#E9E0D6]"
              imgClassName="h-full w-full object-cover"
            />

            <div className="absolute bottom-5 left-5 z-20 max-w-[80%] bg-[#FAF8F4]/95 px-5 py-4 sm:bottom-8 sm:left-8 sm:px-6">
              <p className="text-[9px] uppercase tracking-[0.25em] text-muted">
                The LUXE philosophy
              </p>
              <p className="mt-2 font-serif text-xl text-ink sm:text-2xl">
                Beauty, thoughtfully done.
              </p>
            </div>
          </ImageReveal>
        </div>
      </div>
    </section>
  );
}
