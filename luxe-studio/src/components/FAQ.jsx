import { useId, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "../config/business";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  const id = useId();
  const questions = business.faq || [];

  return (
    <section
      id="faq"
      className="bg-[#FAF8F4] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-4">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
            A few helpful answers
          </p>

          <SectionHeading
            eyebrow="FAQ"
            title="Good to know before you go."
          />

          <p className="mt-5 max-w-sm text-sm leading-7 text-muted">
            Have a question before booking? Start here, or reach out to us
            directly and we’ll help you plan your visit.
          </p>

          {business.whatsapp && (
            <a
              href={`https://wa.me/${String(business.whatsapp).replace(/\D/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-7 inline-flex items-center gap-3 border-b border-ink/25 pb-2 text-xs font-medium uppercase tracking-[0.15em] text-ink transition-colors hover:border-ink"
            >
              Ask us directly
              <ArrowUpRight
                size={15}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
          )}
        </Reveal>

        <div className="lg:col-span-8">
          {questions.length > 0 ? (
            <div className="border-t border-ink/15">
              {questions.map((question, index) => {
                const isOpen = open === index;
                const triggerId = `${id}-trigger-${index}`;
                const panelId = `${id}-panel-${index}`;

                return (
                  <div
                    key={question.q}
                    className="border-b border-ink/15"
                  >
                    <h3>
                      <button
                        id={triggerId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() =>
                          setOpen(isOpen ? null : index)
                        }
                        className="group flex min-h-[76px] w-full items-center justify-between gap-5 py-5 text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ink sm:py-6"
                      >
                        <span className="flex items-start gap-4 sm:gap-6">
                          <span className="pt-1 font-serif text-sm text-muted/70">
                            {String(index + 1).padStart(2, "0")}
                          </span>

                          <span className="text-base font-medium leading-7 text-ink transition-colors group-hover:text-accent sm:text-lg">
                            {question.q}
                          </span>
                        </span>

                        <span
                          className={[
                            "flex size-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                            isOpen
                              ? "rotate-45 border-ink bg-ink text-ivory"
                              : "border-ink/15 text-ink group-hover:border-ink/50",
                          ].join(" ")}
                        >
                          <Plus size={17} aria-hidden="true" />
                        </span>
                      </button>
                    </h3>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          id={panelId}
                          role="region"
                          aria-labelledby={triggerId}
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            height: { duration: 0.28, ease: "easeInOut" },
                            opacity: { duration: 0.2 },
                          }}
                          className="overflow-hidden"
                        >
                          <p className="max-w-2xl pb-7 pl-9 pr-8 text-sm leading-7 text-muted sm:pb-8 sm:pl-[3.25rem]">
                            {question.a}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="border-t border-ink/15 py-8 text-sm text-muted">
              Have a question? Contact us and we’ll be happy to help.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
