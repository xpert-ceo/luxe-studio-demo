import { ArrowRight } from "lucide-react";
import { business } from "../config/business";

// Set business.showAnnouncementBar to false to hide this bar.
export default function AnnouncementBar() {
  if (!business.showAnnouncementBar) return null;

  return (
    <div className="relative z-50 bg-[#30231e] px-4 py-2.5 text-[#f8f2e9]">
      <div className="mx-auto flex max-w-7xl items-center justify-center gap-2 text-center">
        <span className="hidden h-px w-5 bg-[#b99b7d]/70 sm:block" />

        <p className="text-[9px] font-medium uppercase leading-relaxed tracking-[0.16em] sm:text-[10px] sm:tracking-[0.22em]">
          {business.tagline}
        </p>

        <a
          href="#book"
          aria-label="Book an appointment"
          className="ml-1 inline-flex shrink-0 items-center justify-center text-[#d7b99a] transition-transform hover:translate-x-1"
        >
          <ArrowRight size={13} />
        </a>

        <span className="hidden h-px w-5 bg-[#b99b7d]/70 sm:block" />
      </div>
    </div>
  );
}
