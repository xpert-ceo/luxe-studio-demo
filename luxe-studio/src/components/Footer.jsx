import { business } from "../config/business";

export default function Footer() {
  const socials = Object.entries(business.social).filter(([, url]) => url);
  return (
    <footer className="bg-ink text-ivory/80 pt-16 pb-24 lg:pb-8">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-10 text-sm">
        <div>
          <p className="font-serif text-xl tracking-[0.22em] text-ivory font-semibold">{business.name}</p>
          <p className="mt-3 max-w-xs">{business.tagline}</p>
        </div>
        <nav aria-label="Footer">
          <p className="text-ivory mb-3 text-xs tracking-widest uppercase">Explore</p>
          <ul className="space-y-2">
            {business.nav.map((l) => <li key={l.href}><a href={l.href} className="hover:text-accent">{l.label}</a></li>)}
          </ul>
        </nav>
        <div>
          <p className="text-ivory mb-3 text-xs tracking-widest uppercase">Contact</p>
          <p>{business.address}</p><p>{business.city}</p><p className="mt-2">{business.phone}</p>
          {socials.length > 0 && (
            <ul className="mt-3 flex gap-4">
              {socials.map(([name, url]) => (
                <li key={name}><a href={url} target="_blank" rel="noopener noreferrer" className="capitalize hover:text-accent">{name}</a></li>
              ))}
            </ul>
          )}
        </div>
        <div>
          <p className="text-ivory mb-3 text-xs tracking-widest uppercase">Hours</p>
          {business.hours.map((h) => <p key={h.day}>{h.day}: {h.time}</p>)}
        </div>
      </div>
      <p className="mt-12 text-center text-xs text-ivory/50 px-5">
        © {new Date().getFullYear()} {business.name}. Demo website.
      </p>
    </footer>
  );
}
