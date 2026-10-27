import { ArrowUpRight, MapPin, Phone, Clock3 } from "lucide-react";
import { business } from "../config/business";

export default function Footer() {
  const socials = Object.entries(business.social || {}).filter(
    ([, url]) => url
  );

  const phoneDigits = String(business.phone || "").replace(/\D/g, "");
  const navLinks = business.nav || [];
  const hours = business.hours || [];

  return (
    <footer className="bg-[#241a16] text-[#f5eee5]/75">
      <div className="mx-auto max-w-7xl px-5 pb-10 pt-16 sm:px-8 sm:pt-20">
        <div className="grid gap-12 border-b border-white/10 pb-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-10">
          <div>
            <a
              href="#home"
              className="inline-block font-serif text-2xl tracking-[0.16em] text-[#f5eee5] transition-opacity hover:opacity-75"
            >
              {business.name}
            </a>

            <p className="mt-5 max-w-xs text-sm leading-7 text-white/55">
              {business.tagline}
            </p>

            <a
              href="#book"
              className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#d7b99a] transition-colors hover:text-white"
            >
              Make an appointment
              <ArrowUpRight size={14} />
            </a>
          </div>

          <nav aria-label="Footer navigation">
            <h3 className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/40">
              Explore
            </h3>

            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-[#d7b99a]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/40">
              Visit or contact
            </h3>

            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#d7b99a]" />
                <p className="leading-6">
                  {business.address}
                  <br />
                  {business.city}
                </p>
              </div>

              {business.phone && (
                <a
                  href={phoneDigits ? `tel:${phoneDigits}` : undefined}
                  className="flex items-center gap-3 transition-colors hover:text-[#d7b99a]"
                >
                  <Phone size={15} className="shrink-0 text-[#d7b99a]" />
                  {business.phone}
                </a>
              )}
            </div>

            {socials.length > 0 && (
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-3">
                {socials.map(([name, url]) => (
                  <a
                    key={name}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs capitalize text-white/50 transition-colors hover:text-[#d7b99a]"
                  >
                    {name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div>
            <h3 className="mb-5 flex items-center gap-2 text-[10px] uppercase tracking-[0.22em] text-white/40">
              <Clock3 size={13} />
              Opening hours
            </h3>

            <ul className="space-y-3">
              {hours.map((hour) => (
                <li
                  key={hour.day}
                  className="flex items-start justify-between gap-4 text-sm"
                >
                  <span className="text-white/55">{hour.day}</span>
                  <span className="text-right text-[#f5eee5]/85">
                    {hour.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 pt-7 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {business.name}. All rights reserved.
          </p>

          <a
            href="#home"
            className="inline-flex items-center gap-2 transition-colors hover:text-[#d7b99a]"
          >
            Back to top
            <ArrowUpRight size={13} />
          </a>
        </div>

        <p className="mt-5 text-center text-[10px] tracking-wide text-white/25">
          Demo website concept · Business details shown for demonstration
        </p>
      </div>
    </footer>
  );
}
