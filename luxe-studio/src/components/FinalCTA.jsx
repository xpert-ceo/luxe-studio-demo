import { business } from "../config/business";
import BookButton from "./BookButton";
import Reveal from "./Reveal";
import Marquee from "./Marquee";

export default function FinalCTA() {
  return (
    <section className="pt-20 lg:pt-28 pb-20 lg:pb-28 overflow-hidden">
      <Marquee speed={50} className="mb-16">
        {[0, 1, 2].map((k) => (
          <span key={k} className="flex items-center">
            <span className="font-serif text-7xl sm:text-9xl px-6 whitespace-nowrap text-outline">{business.name}</span>
            <span className="h-3 w-3 rotate-45 bg-accent shrink-0" />
          </span>
        ))}
      </Marquee>
      <Reveal className="text-center px-5">
        <h2 className="text-4xl sm:text-6xl max-w-2xl mx-auto leading-[1.1]">Ready for your next look?</h2>
        <p className="mt-5 text-muted">Send us a message and we will find a time that suits you.</p>
        <div className="mt-9"><BookButton className="w-full sm:w-auto">{business.ctaText}</BookButton></div>
      </Reveal>
    </section>
  );
}
