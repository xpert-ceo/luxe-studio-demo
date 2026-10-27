import { business } from "../config/business";
import Marquee from "./Marquee";
import SafeImage from "./SafeImage";

// Slow scrolling photo strip
export default function PhotoStrip() {
  return (
    <div className="py-10 sm:py-14 bg-taupe/50 overflow-hidden">
      <Marquee speed={60} reverse>
        {business.gallery.map((g, i) => (
          <SafeImage key={i} image={g} className="h-44 w-36 sm:h-72 sm:w-56 mx-2 sm:mx-3 shrink-0" />
        ))}
      </Marquee>
    </div>
  );
}
