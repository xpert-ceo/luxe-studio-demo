
import { ArrowDownRight } from "lucide-react";
import { business } from "../config/business";
import SafeImage from "./SafeImage";
import Reveal, { ImageReveal } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Introduction() {
  const { intro, images } = business;

  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        {/* Editorial image composition */}
        <ImageReveal className="relative lg:col-span-5">
          <div className="absolute -left-3 -top-3 h-24 w-24 border-l border-t border-accent/50 sm:-left-5 sm:-top-5 sm:h-32 sm:w-32" />

          <SafeImage
            image={images.intro}
            parallax
            className="relative aspect-[4/5] w-full bg-taupe"
          />

          <div className="absolute -bottom-5 right-3 w-36 border-[5px] border-ivory bg-ivory shadow-lg sm:right-5 sm:w-44 sm:border-[7px]">
            <SafeImage
              image={images.heroDetail}
              className="aspect-[4/5] w-full"
            />
          </div>

          <p className="absolute bottom-0 left-0 -translate-x-1 translate-y-7 text-[9px] uppercase tracking-[0.22em] text-muted sm:translate-y-8">
            Beauty begins with care
          </p>
        </ImageReveal>

        {/* Brand story */}
        <Reveal
          delay={0.1}
          className="pt-3 lg:col-span-6 lg:col-start-7 lg:pt-0"
        >
          <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-accent sm:text-xs">
            <span className="h-px w-8 bg-accent" />
            {intro.eyebrow}
          </p>

          <SectionHeading eyebrow="" title={intro.heading} />

          <div className="mt-7 max-w-xl space-y-5 text-sm leading-7 text-muted sm:mt-8 sm:text-base sm:leading-8">
            {intro.body.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <a
            href="#about"
            className="group mt-8 inline-flex min-h-12 items-center gap-3 border-b border-ink pb-1 text-sm font-medium text-ink transition-colors hover:border-accent hover:text-accent"
          >
            Get to know us
            <ArrowDownRight
              size={17}
              strokeWidth={1.5}
              className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5"
            />
          </a>

          <div className="mt-10 grid max-w-lg grid-cols-2 border-t border-line pt-5 sm:mt-14 sm:pt-6">
            <div className="pr-4">
              <p className="font-serif text-xl sm:text-2xl">
                Personal
              </p>
              <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">
                Care shaped around your preferences.
              </p>
            </div>

            <div className="border-l border-line pl-5 sm:pl-7">
              <p className="font-serif text-xl sm:text-2xl">
                Thoughtful
              </p>
              <p className="mt-2 text-xs leading-5 text-muted sm:text-sm">
                Attention to the details that matter.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
