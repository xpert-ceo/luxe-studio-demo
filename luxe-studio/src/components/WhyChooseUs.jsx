import {
  ArrowUpRight,
  Eye,
  Heart,
  ShieldCheck,
  Sparkles,
  UserRound,
} from "lucide-react";
import { business } from "../config/business";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const icons = {
  user: UserRound,
  sparkles: Sparkles,
  heart: Heart,
  eye: Eye,
};

const fallbackBenefits = [
  {
    title: "Personal attention",
    text: "A thoughtful experience shaped around your preferences and individual style.",
    icon: "user",
  },
  {
    title: "Care in every detail",
    text: "A considered approach to every service, from the consultation to the finishing touches.",
    icon: "sparkles",
  },
  {
    title: "Your comfort matters",
    text: "A welcoming atmosphere where you can relax and enjoy a little time for yourself.",
    icon: "heart",
  },
  {
    title: "Honest guidance",
    text: "Clear conversations about your desired look and the options that suit you.",
    icon: "eye",
  },
];

export default function WhyChooseUs() {
  const benefits =
    business.why?.length > 0 ? business.why : fallbackBenefits;

  return (
    <section className="relative overflow-hidden bg-[#F3EEE7]">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
              The LUXE difference
            </p>

            <SectionHeading
              eyebrow="Why Choose Us"
              title="The little things make all the difference."
            />

            <p className="mt-6 max-w-md text-sm leading-7 text-muted">
              Great hair is only part of the experience. It is also about
              feeling heard, feeling comfortable and leaving with a look
              that feels like you.
            </p>

            <a
              href="#book"
              className="group mt-8 inline-flex items-center gap-3 border-b border-ink/30 pb-2 text-xs font-medium uppercase tracking-[0.16em] text-ink transition-colors hover:border-ink"
            >
              Plan your visit
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          </Reveal>

          <div className="grid gap-x-8 sm:grid-cols-2 lg:col-span-8 lg:gap-x-12">
            {benefits.map((benefit, index) => {
              const Icon = icons[benefit.icon] || Sparkles;

              return (
                <Reveal
                  key={benefit.title}
                  delay={index * 0.08}
                  className="border-t border-ink/15 py-7 sm:py-8"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="flex size-11 items-center justify-center rounded-full border border-ink/15 text-ink">
                      <Icon size={19} strokeWidth={1.4} aria-hidden="true" />
                    </span>

                    <span className="pt-1 font-serif text-sm text-muted/70">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="mt-6 font-serif text-2xl leading-snug text-ink sm:text-[1.7rem]">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 max-w-sm text-sm leading-7 text-muted">
                    {benefit.text}
                  </p>
                </Reveal>
              );
            })}
          </div>
        </div>

        <Reveal className="mt-10 flex items-center gap-3 border-t border-ink/10 pt-6">
          <ShieldCheck
            size={17}
            strokeWidth={1.4}
            className="shrink-0 text-muted"
            aria-hidden="true"
          />
          <p className="text-xs leading-6 text-muted">
            A considered experience, from the first conversation to the final
            look.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
