import { MapPin, Phone, Clock, MessageCircle } from "lucide-react";
import { business } from "../config/business";
import { buildWhatsAppUrl } from "../utils/whatsapp";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function LocationHours() {
  const wa = buildWhatsAppUrl();
  const tel = business.phone.replace(/[^\d+]/g, "");
  return (
    <section id="contact" className="bg-taupe/50 py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal><SectionHeading eyebrow="Contact" title="Visit us" /></Reveal>
        <div className="mt-12 grid md:grid-cols-2 gap-12">
          <Reveal className="space-y-7">
            <div className="flex gap-4">
              <MapPin size={20} className="text-accent mt-1 shrink-0" aria-hidden="true" />
              <div>
                <p>{business.address}</p><p className="text-muted">{business.city}</p>
                {business.mapsUrl && (
                  <a href={business.mapsUrl} target="_blank" rel="noopener noreferrer"
                    className="inline-block mt-3 text-sm font-medium border-b border-ink pb-0.5 hover:text-accent hover:border-accent">
                    Get directions
                  </a>
                )}
              </div>
            </div>
            <div className="flex gap-4">
              <Phone size={20} className="text-accent mt-1 shrink-0" aria-hidden="true" />
              <a href={`tel:${tel}`} className="hover:text-accent">{business.phone}</a>
            </div>
            <div className="flex gap-4">
              <MessageCircle size={20} className="text-accent mt-1 shrink-0" aria-hidden="true" />
              {wa
                ? <a href={wa} target="_blank" rel="noopener noreferrer" className="hover:text-accent">Chat on WhatsApp</a>
                : <span className="text-muted">WhatsApp number not configured (demo)</span>}
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex gap-4">
              <Clock size={20} className="text-accent mt-1 shrink-0" aria-hidden="true" />
              <dl className="w-full">
                {business.hours.map((h) => (
                  <div key={h.day} className="flex justify-between gap-4 py-3 border-b border-line first:pt-0">
                    <dt>{h.day}</dt><dd className="text-muted">{h.time}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
