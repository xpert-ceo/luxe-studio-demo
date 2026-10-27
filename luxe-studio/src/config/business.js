// ============================================================
// EDIT THIS FILE PER CLIENT. Everything on the site reads from here.
// ============================================================

// Web images (Unsplash License: free for commercial use). To swap for a client, paste a new URL
// or a local path like "/images/hero.jpg" into any "src" below. Unsplash IDs are the code at the end of a photo page URL.
const unsplash = (id, w = 1400) => `https://unsplash.com/photos/${id}/download?w=${w}`;

export const business = {
  name: "LUXE STUDIO",
  tagline: "Beautiful hair. Thoughtful care. Exceptional results.",
  description:
    "Thoughtful hair and beauty services designed around you. Step into a space where great style meets exceptional care.",
  showAnnouncementBar: true,

  // WhatsApp number: international format, digits only (e.g. "2348012345678").
  // Leave "" until you have the real number. Booking buttons then show a demo notice.
  whatsappNumber: "",
  phone: "+234 800 000 0000", // DEMO PLACEHOLDER
  whatsappMessage:
    "Hello LUXE STUDIO, I would like to enquire about booking an appointment. Please share your available times.",

  address: "12 Example Street, Victoria Island", // DEMO PLACEHOLDER
  city: "Lagos, Nigeria",
  mapsUrl: "", // paste a Google Maps share link; if empty the directions button is hidden

  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  currency: "₦",
  ctaText: "Book an Appointment",
  heroCtaText: "Book Your Appointment",

  hero: { eyebrow: "Salon & Beauty Studio", headline: "Your beauty, beautifully expressed.", accentWord: "beautifully" },
  // Scrolling word band under the hero. Edit freely.
  marquee: ["Hair Styling", "Braids", "Wig Installation", "Barbering", "Manicure", "Facials", "Natural Hair"],

  theme: {
    bg: "#F8F5F0", text: "#28221F", muted: "#766B64", accent: "#A47D59",
    surface: "#FFFFFF", border: "#E8E0D8", taupe: "#EAE3DA",
  },

  // All web images are set here. Replace any `src` when a client buys.
  images: {
    hero: { src: unsplash("2DDqluGVwZA", 1600), alt: "Stylist blow drying a client's hair in a salon" },
    heroDetail: { src: unsplash("_MhfDP8INkU", 700), alt: "Close-up of long styled hair" },
    intro: { src: unsplash("ZY45fhFPYqM", 1200), alt: "Salon interior with chairs and a mirror" },
    about: { src: unsplash("WDmvpGs2060", 1200), alt: "Stylist washing a client's hair" },
    booking: { src: unsplash("XVWTeknFung", 1200), alt: "Stylist attending to a client at the salon" },
  },

  gallery: [
    { src: unsplash("P0llk_dL7DE", 900), alt: "Men's haircut at a barber chair (demo image)", ratio: "aspect-[3/4]" },
    { src: unsplash("nWY5HNbl6dU", 900), alt: "Stylist at work wearing gloves (demo image)", ratio: "aspect-square" },
    { src: unsplash("XVWTeknFung", 900), alt: "Stylist attending to a client (demo image)", ratio: "aspect-[4/5]" },
    { src: unsplash("_MhfDP8INkU", 900), alt: "Long styled hair (demo image)", ratio: "aspect-[4/5]" },
    { src: unsplash("WDmvpGs2060", 900), alt: "Hair wash at the basin (demo image)", ratio: "aspect-square" },
    { src: unsplash("ZY45fhFPYqM", 900), alt: "Salon chairs and mirror (demo image)", ratio: "aspect-[3/4]" },
  ],
  galleryNote: "Demo photography shown for illustration.",

  // Illustrative demo prices
  services: [
    { category: "Hair", items: [
      { name: "Wash and Styling", price: "8,000" },
      { name: "Natural Hair Styling", price: "12,000" },
      { name: "Wig Installation", price: "15,000" },
      { name: "Braids", price: "20,000", from: true },
    ]},
    { category: "Barbering", items: [
      { name: "Classic Haircut", price: "5,000" },
      { name: "Haircut and Beard Grooming", price: "8,000" },
    ]},
    { category: "Nails", items: [
      { name: "Classic Manicure", price: "7,000" },
      { name: "Gel Manicure", price: "12,000" },
    ]},
    { category: "Beauty", items: [
      { name: "Basic Facial", price: "15,000" },
    ]},
  ],

  intro: {
    eyebrow: "Welcome",
    heading: "More than a salon. Your moment.",
    body: [
      "LUXE STUDIO is a demo brand showing how a modern salon can present itself online. The idea is simple: listen first, style second.",
      "Every visit is built around what you want, from a quick trim to a full transformation, so you leave feeling confident and like yourself.",
    ],
  },

  why: [
    { icon: "user", title: "Personalised attention", text: "Your hair, your routine, your preferences. We start by listening." },
    { icon: "sparkles", title: "Thoughtful products", text: "Products chosen to suit different hair and skin needs." },
    { icon: "heart", title: "A welcoming space", text: "A calm, comfortable studio where everyone is treated with respect." },
    { icon: "eye", title: "Attention to detail", text: "Clean finishes and careful work, down to the last strand." },
  ],

  about: {
    heading: "Care in every detail",
    body: [
      "We believe good styling should feel effortless for the client. That means clear communication, honest advice, and unhurried appointments.",
      "Not sure what you want? Send us a photo on WhatsApp and we will talk it through before you visit.",
    ],
  },

  faq: [
    { q: "Do I need an appointment?", a: "Appointments are recommended so we can set aside the right amount of time for you. Send a WhatsApp message to ask about availability." },
    { q: "How do I check service prices?", a: "Our service menu above lists starting prices. Final pricing can vary by style, length and hair type, so message us for a precise quote." },
    { q: "Can I enquire about a specific hairstyle?", a: "Yes. Send us a reference photo on WhatsApp and we will advise on suitability, timing and price." },
    { q: "How do I reschedule?", a: "Message us on WhatsApp as early as you can with your name and original appointment time, and we will find a new slot." },
    { q: "Where are you located?", a: "See the Visit Us section for our address and opening hours." },
  ],

  // Leave "" to hide a link. Never point at unrelated accounts.
  social: { instagram: "", facebook: "", tiktok: "" },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
