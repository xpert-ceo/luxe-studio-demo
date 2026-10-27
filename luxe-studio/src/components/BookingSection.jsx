import { CalendarDays, Check, Clock3, MessageCircle } from "lucide-react";
import { business } from "../config/business";
import BookButton from "./BookButton";
import SafeImage from "./SafeImage";
import Reveal from "./Reveal";

const bookingSteps = [
  {
    number: "01",
    title: "Choose your service",
    description: "Find the treatment that feels right for you.",
  },
  {
    number: "02",
    title: "Tell us your preferred time",
    description: "Send your request directly through WhatsApp.",
  },
  {
    number: "03",
    title: "Get your confirmation",
    description: "Our team will confirm availability with you.",
  },
];

export default function BookingSection() {
  return (
    <section id="book" className="px-5 py-20 sm:px-8 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl overflow-hidden bg-ink text-ivory">
        <div className="grid lg:grid-cols-12">
          <div className="relative min-h-[320px] overflow-hidden sm:min-h-[440px] lg:col-span-5 lg:min-h-full">
            <SafeImage
              image={business.images.booking}
              parallax
              className="absolute inset-0 h-full w-full"
              imgClassName="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />

            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 lg:p-12">
              <p className="text-[10px] uppercase tracking-[0.3em] text-white/75">
                Your moment of care
              </p>
              <p className="mt-3 max-w-sm font-serif text-3xl leading-tight sm:text-4xl">
                Make a little time for yourself.
              </p>
            </div>
          </div>

          <Reveal className="flex flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:col-span-7 lg:px-14 lg:py-16 xl:px-20">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-white/15 text-accent">
                <CalendarDays size={17} aria-hidden="true" />
              </span>
              <p className="text-[10px] uppercase tracking-[0.28em] text-accent">
                Appointments
              </p>
            </div>

            <h2 className="mt-6 max-w-xl font-serif text-4xl leading-[1.08] sm:text-5xl lg:text-6xl">
              Your next look starts here.
            </h2>

            <p className="mt-5 max-w-lg text-sm leading-7 text-ivory/70 sm:text-base">
              A great salon experience begins with a simple conversation.
              Tell us what you have in mind and let’s find a time that works
              for you.
            </p>

            <div className="mt-9 border-y border-white/10">
              {bookingSteps.map((step) => (
                <div
                  key={step.number}
                  className="flex gap-4 border-b border-white/10 py-5 last:border-b-0 sm:gap-5"
                >
                  <span className="pt-1 text-xs tracking-widest text-accent">
                    {step.number}
                  </span>

                  <div>
                    <h3 className="text-sm font-medium text-ivory sm:text-base">
                      {step.title}
                    </h3>
                    <p className="mt-1 text-xs leading-6 text-ivory/55 sm:text-sm">
                      {step.description}
                    </p>
                  </div>

                  <Check
                    size={15}
                    className="ml-auto mt-1 shrink-0 text-accent/80"
                    aria-hidden="true"
                  />
                </div>
              ))}
            </div>

            <div className="mt-8">
              <BookButton
                variant="accent"
                className="w-full justify-center sm:w-auto"
              >
                <span className="inline-flex items-center justify-center gap-3">
                  <MessageCircle size={17} aria-hidden="true" />
                  {business.ctaText}
                </span>
              </BookButton>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-ivory/55">
              <span className="inline-flex items-center gap-2">
                <Clock3 size={14} aria-hidden="true" />
                Confirm your preferred time
              </span>
              <span className="inline-flex items-center gap-2">
                <MessageCircle size={14} aria-hidden="true" />
                Direct WhatsApp contact
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
