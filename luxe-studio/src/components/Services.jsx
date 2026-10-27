import { business } from "../config/business";
import BookButton from "./BookButton";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 lg:py-32">
      <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
        <Reveal className="lg:col-span-4 lg:sticky lg:top-28 self-start">
          <SectionHeading eyebrow="Services" title="The service menu" />
          <p className="mt-5 text-muted leading-relaxed max-w-sm">Demo prices shown. Final pricing can vary by style, length and hair type.</p>
          <div className="mt-8 hidden lg:block"><BookButton>{business.ctaText}</BookButton></div>
        </Reveal>

        <div className="lg:col-span-8 space-y-14">
          {business.services.map((cat, i) => (
            <Reveal key={cat.category}>
              <div className="flex items-baseline gap-4 pb-4 border-b border-ink">
                <span className="text-xs tracking-widest text-accent">0{i + 1}</span>
                <h3 className="text-3xl sm:text-4xl">{cat.category}</h3>
              </div>
              <ul>
                {cat.items.map((it) => (
                  <li key={it.name} className="group flex items-baseline gap-3 py-4 sm:py-5 border-b border-line transition-all duration-300 hover:bg-taupe/40 hover:px-3">
                    <span className="text-base sm:text-lg">{it.name}</span>
                    <span className="flex-1 border-b border-dotted border-muted/40 translate-y-[-4px] min-w-4" aria-hidden="true" />
                    <span className="whitespace-nowrap text-sm text-muted">
                      {it.from && <span className="text-xs mr-1.5 uppercase tracking-wider">From</span>}
                      <span className="text-ink font-medium text-base">{business.currency}{it.price}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
          <div className="lg:hidden"><BookButton className="w-full">{business.ctaText}</BookButton></div>
        </div>
      </div>
    </section>
  );
}
