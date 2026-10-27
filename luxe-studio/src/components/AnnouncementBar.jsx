import { business } from "../config/business";

// To remove: set showAnnouncementBar to false in config
export default function AnnouncementBar() {
  if (!business.showAnnouncementBar) return null;
  return (
    <div className="bg-ink text-ivory text-center text-[11px] sm:text-xs tracking-[0.18em] uppercase py-2.5 px-4">
      {business.tagline}
    </div>
  );
}
