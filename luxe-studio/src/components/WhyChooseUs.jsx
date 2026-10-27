import { User, Sparkles, Heart, Eye } from "lucide-react";
import { business } from "../config/business";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = { user: User, sparkles: Sparkles, heart: Heart, eye: Eye };

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-5 sm:px-8 py-20 lg:py-28">
      <Reveal><SectionHeading eyebrow="Why Choose Us" title="How we work" /></Reveal>
      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
        {business.why.map((w, i) => {
          const Icon = icons[w.icon] || Sparkles;
          return (
            <Reveal key={w.title} delay={i * 0.08}>
              <Icon size={26} strokeWidth={1.4} className="text-accent" aria-hidden="true" />
              <h3 className="mt-5 text-2xl">{w.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{w.text}</p>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
