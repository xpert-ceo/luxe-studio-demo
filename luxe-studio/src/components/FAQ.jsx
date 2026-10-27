import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { business } from "../config/business";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 sm:px-8 py-20 lg:py-28">
      <Reveal><SectionHeading eyebrow="FAQ" title="Good to know" /></Reveal>
      <div className="mt-10 border-t border-line">
        {business.faq.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q} className="border-b border-line">
              <h3 className="font-sans">
                <button type="button" aria-expanded={isOpen} aria-controls={`faq-${i}`} id={`faq-btn-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 py-5 text-left font-medium">
                  {f.q}
                  {isOpen ? <Minus size={18} aria-hidden="true" /> : <Plus size={18} aria-hidden="true" />}
                </button>
              </h3>
              <div id={`faq-${i}`} role="region" aria-labelledby={`faq-btn-${i}`} hidden={!isOpen}
                className="pb-5 pr-8 text-muted leading-relaxed">{f.a}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
