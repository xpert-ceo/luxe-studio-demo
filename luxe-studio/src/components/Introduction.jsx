import { business } from "../config/business";
import SafeImage from "./SafeImage";
import Reveal, { ImageReveal } from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Introduction() {
  const { intro, images } = business;
  return (
    <section className="py-20 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 items-center">
        <ImageReveal className="lg:col-span-5 relative">
          <SafeImage image={images.intro} parallax className="w-full aspect-[4/5]" />
        </ImageReveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <SectionHeading eyebrow={intro.eyebrow} title={intro.heading} />
          <div className="mt-8 space-y-5 text-muted leading-relaxed max-w-lg text-[1.05rem]">
            {intro.body.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
