import { business } from "../config/business";
import Marquee from "./Marquee";

// Dark scrolling word band
export default function MarqueeBand() {
  return (
    <div className="bg-ink text-ivory py-5 sm:py-6">
      <Marquee speed={35}>
        {business.marquee.map((w, i) => (
          <span key={i} className="flex items-center">
            <span className="font-serif italic text-2xl sm:text-4xl px-6 sm:px-10 whitespace-nowrap">{w}</span>
            <span className="h-2 w-2 rotate-45 bg-accent shrink-0" />
          </span>
        ))}
      </Marquee>
    </div>
  );
}
