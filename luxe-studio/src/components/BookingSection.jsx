import { business } from "../config/business";
import BookButton from "./BookButton";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";

export default function BookingSection() {
  return (
    <section id="book" className="px-5 sm:px-8">
      <div className="mx-auto max-w-7xl grid lg:grid-cols-2 bg-ink text-ivory overflow-hidden">
        <SafeImage image={business.images.booking} parallax className="w-full aspect-[16/10] lg:aspect-auto lg:min-h-[480px]" />
        <Reveal className="px-6 sm:px-12 py-14 lg:py-20 flex flex-col justify-center">
          <p className="text-[11px] tracking-[0.3em] uppercase text-accent mb-4">Appointments</p>
          <h2 className="text-4xl sm:text-5xl leading-[1.1]">Book your visit in a few taps.</h2>
          <p className="mt-5 text-ivory/75 leading-relaxed max-w-md">
            Message us on WhatsApp to check availability and confirm your time. Your message is already written for you.
          </p>
          <ol className="mt-7 space-y-2 text-sm text-ivory/80">
            <li><span className="text-accent mr-3">01</span>Tap the button</li>
            <li><span className="text-accent mr-3">02</span>Choose your service and preferred time</li>
            <li><span className="text-accent mr-3">03</span>We confirm on WhatsApp</li>
          </ol>
          <div className="mt-9"><BookButton variant="accent" className="w-full sm:w-auto">{business.ctaText}</BookButton></div>
        </Reveal>
      </div>
    </section>
  );
}
