
import { ArrowUpRight } from "lucide-react";
import { business } from "../config/business";
import BookButton from "./BookButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="self-start lg:sticky lg:top-28 lg:col-span-4">
            <p className="mb-5 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.28em] text-accent sm:text-xs">
              <span className="h-px w-8 bg-accent" />
              Our Services
            </p>

            <SectionHeading
              eyebrow=""
              title="Your style. Your moment."
            />

            <p className="mt-5 max-w-sm text-sm leading-7 text-muted sm:text-base">
              From everyday care to a complete refresh, discover services
              designed to help you look and feel your best.
            </p>

            <div className="mt-7 hidden lg:block">
              <BookButton>{business.ctaText}</BookButton>
            </div>

            <p className="mt-8 hidden max-w-xs text-xs leading-6 text-muted lg:block">
              Demo menu and illustrative prices. Actual services and pricing
              are confirmed with each salon.
            </p>
          </Reveal>

          <div className="space-y-12 lg:col-span-8 lg:space-y-16">
            {business.services.map((category, index) => (
              <Reveal key={category.category}>
                <div className="mb-2 flex items-end justify-between border-b border-ink pb-5 sm:pb-6">
                  <div className="flex items-start gap-4 sm:gap-6">
                    <span className="pt-2 text-[10px] tracking-[0.2em] text-accent sm:text-xs">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <div>
                      <h3 className="font-serif text-3xl font-normal tracking-tight sm:text-4xl lg:text-5xl">
                        {category.category}
                      </h3>
                      <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-muted">
                        {String(category.items.length).padStart(2, "0")}{" "}
                        services
                      </p>
                    </div>
                  </div>

                  <span
                    aria-hidden="true"
                    className="mb-1 flex h-9 w-9 items-center justify-center rounded-full border border-line text-accent"
                  >
                    <ArrowUpRight size={17} strokeWidth={1.5} />
                  </span>
                </div>

                <ul>
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={item.name}
                      className="group flex min-h-[68px] items-center justify-between gap-4 border-b border-line/80 py-4 transition-colors duration-200 hover:border-accent/50 sm:min-h-[76px] sm:py-5"
                    >
                      <div className="flex min-w-0 items-center gap-3 sm:gap-5">
                        <span className="text-[9px] tabular-nums text-muted/70">
                          {String(itemIndex + 1).padStart(2, "0")}
                        </span>

                        <span className="text-sm leading-6 text-ink transition-colors group-hover:text-accent sm:text-base">
                          {item.name}
                        </span>
                      </div>

                      <div className="shrink-0 text-right">
                        {item.from && (
                          <span className="mb-1 block text-[9px] uppercase tracking-[0.15em] text-muted">
                            Starting at
                          </span>
                        )}

                        <span className="font-serif text-base text-ink sm:text-lg">
                          {business.currency}
                          {item.price}
                        </span>
                      </div>
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <div className="border border-line bg-ivory/70 p-6 sm:p-8">
              <p className="font-serif text-2xl sm:text-3xl">
                Not sure what to choose?
              </p>

              <p className="mt-3 max-w-lg text-sm leading-6 text-muted">
                Get in touch to discuss your preferred style, the service
                that suits you, and the expected price.
              </p>

              <div className="mt-6">
                <BookButton className="w-full justify-center sm:w-auto">
                  {business.ctaText}
                </BookButton>
              </div>

              <p className="mt-4 text-[10px] leading-5 text-muted">
                Demo prices are illustrative and should be confirmed before
                this website is used by a real business.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
