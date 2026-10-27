import {
  ArrowUpRight,
  Clock3,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";
import { business } from "../config/business";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function LocationHours() {
  const wa = buildWhatsAppUrl();
  const tel = (business.phone || "").replace(/[^\d+]/g, "");
  const hasPhone = tel.length > 0;

  return (
    <section
      id="contact"
      className="bg-[#EDE5DB] py-20 sm:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.3em] text-muted">
            We would love to see you
          </p>

          <SectionHeading
            eyebrow="Find Us"
            title="Your next visit starts here."
          />

          <p className="mt-5 max-w-lg text-sm leading-7 text-muted">
            Find our location, check our opening hours or get in touch to
            plan your visit.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-5 lg:mt-14 lg:grid-cols-12 lg:gap-6">
          <Reveal className="flex flex-col bg-[#FAF8F4] p-6 sm:p-9 lg:col-span-7 lg:p-12">
            <div className="flex items-start gap-4 border-b border-ink/10 pb-7 sm:pb-9">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/10">
                <MapPin
                  size={18}
                  strokeWidth={1.4}
                  className="text-accent"
                  aria-hidden="true"
                />
              </span>

              <div className="min-w-0">
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                  Our location
                </p>

                <p className="mt-3 font-serif text-2xl leading-snug text-ink">
                  {business.address}
                </p>

                <p className="mt-1 text-sm leading-6 text-muted">
                  {business.city}
                </p>

                {business.mapsUrl && (
                  <a
                    href={business.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group mt-5 inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-xs font-medium uppercase tracking-[0.14em] text-ink transition-colors hover:border-ink"
                  >
                    Get directions
                    <ArrowUpRight
                      size={14}
                      className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                      aria-hidden="true"
                    />
                  </a>
                )}
              </div>
            </div>

            <div className="grid gap-6 pt-7 sm:grid-cols-2 sm:pt-9">
              <div className="flex items-start gap-3">
                <Phone
                  size={17}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-accent"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    Call us
                  </p>

                  {hasPhone ? (
                    <a
                      href={`tel:${tel}`}
                      className="mt-2 inline-block break-words text-sm text-ink transition-colors hover:text-accent"
                    >
                      {business.phone}
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-muted">
                      Phone details coming soon
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MessageCircle
                  size={17}
                  strokeWidth={1.4}
                  className="mt-1 shrink-0 text-accent"
                  aria-hidden="true"
                />

                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-muted">
                    WhatsApp
                  </p>

                  {wa ? (
                    <a
                      href={wa}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-block text-sm text-ink transition-colors hover:text-accent"
                    >
                      Start a conversation
                    </a>
                  ) : (
                    <p className="mt-2 text-sm text-muted">
                      Contact details coming soon
                    </p>
                  )}
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal
            delay={0.1}
            className="flex flex-col bg-[#FAF8F4] p-6 sm:p-9 lg:col-span-5 lg:p-10"
          >
            <div className="flex items-center gap-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-full border border-ink/10">
                <Clock3
                  size={18}
                  strokeWidth={1.4}
                  className="text-accent"
                  aria-hidden="true"
                />
              </span>

              <div>
                <p className="text-[10px] uppercase tracking-[0.22em] text-muted">
                  Plan your visit
                </p>
                <h3 className="mt-1 font-serif text-2xl text-ink">
                  Opening hours
                </h3>
              </div>
            </div>

            <dl className="mt-8">
              {(business.hours || []).map((hour) => (
                <div
                  key={hour.day}
                  className="flex items-start justify-between gap-4 border-b border-ink/10 py-4 first:pt-0 last:border-b-0"
                >
                  <dt className="text-sm text-ink">{hour.day}</dt>
                  <dd className="text-right text-sm text-muted">
                    {hour.time}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-auto border-t border-ink/10 pt-6">
              <p className="text-xs leading-6 text-muted">
                Have a preferred time in mind? Contact us to ask about
                availability before visiting.
              </p>

              {wa && (
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-5 inline-flex w-full items-center justify-center gap-3 bg-ink px-5 py-4 text-[10px] font-medium uppercase tracking-[0.18em] text-ivory transition-colors hover:bg-[#574033]"
                >
                  Ask about availability
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
