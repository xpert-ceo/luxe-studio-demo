import { business } from "../config/business";
import SafeImage from "./SafeImage";
import Reveal, { ImageReveal } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { about, images } = business;
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 sm:px-8 py-20 lg:py-32 grid lg:grid-cols-12 gap-12 items-center">
      <Reveal className="lg:col-span-6 order-2 lg:order-1">
        <SectionHeading eyebrow="About the Studio" title={about.heading} />
        <div className="mt-8 space-y-5 text-muted leading-relaxed max-w-lg text-[1.05rem]">
          {about.body.map((p, i) => <p key={i}>{p}</p>)}
        </div>
      </Reveal>
      <ImageReveal className="lg:col-span-5 lg:col-start-8 order-1 lg:order-2">
        <SafeImage image={images.about} parallax className="w-full aspect-[4/5]" />
      </ImageReveal>
    </section>
  );
}
