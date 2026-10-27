// ============================================================
// EDIT THIS FILE PER CLIENT.
// Everything on the website reads from this configuration.
// ============================================================

// Direct Unsplash image URLs — no downloads required.
// Images are remote; always verify them in the deployed website.
// Replace these URLs with the client's own image links when available.
const photo = (id, width = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${width}&q=85`;

export const business = {
  name: "LUXE STUDIO",
  tagline: "Beautiful hair. Thoughtful care. Exceptional results.",
  description:
    "Thoughtful hair and beauty services designed around you. Step into a space where great style meets exceptional care.",
  showAnnouncementBar: true,

  // Use the real client's details before launching their website.
  // Leave whatsappNumber empty until the real number is available.
  whatsappNumber: "",
  phone: "+234 800 000 0000",
  whatsappMessage:
    "Hello LUXE STUDIO, I would like to enquire about booking an appointment. Please share your available times.",

  address: "12 Example Street, Victoria Island",
  city: "Lagos, Nigeria",
  mapsUrl: "",

  hours: [
    { day: "Monday – Friday", time: "9:00 AM – 7:00 PM" },
    { day: "Saturday", time: "9:00 AM – 6:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],

  currency: "₦",
  ctaText: "Book an Appointment",
  heroCtaText: "Book Your Appointment",

  hero: {
    eyebrow: "Salon & Beauty Studio",
    headline: "Your beauty, beautifully expressed.",
    accentWord: "beautifully",
  },

  marquee: [
    "Hair Styling",
    "Braids",
    "Wig Installation",
    "Barbering",
    "Manicure",
    "Facials",
    "Natural Hair",
  ],

  theme: {
    bg: "#F8F5F0",
    text: "#28221F",
    muted: "#766B64",
    accent: "#A47D59",
    surface: "#FFFFFF",
    border: "#E8E0D8",
    taupe: "#EAE3DA",
  },

  // Direct image links used throughout the website.
  images: {
    hero: {
      src: photo("photo-1560066984-138dadb4c035", 1600),
      alt: "Elegant salon interior with styling stations",
    },
    heroDetail: {
      src: photo("photo-1522337360788-8b13dee7a37e", 700),
      alt: "Hair styling and beauty inspiration",
    },
    intro: {
      src: photo("photo-1521590832167-7bcbfaa6381f", 1200),
      alt: "Modern salon interior",
    },
    about: {
      src: photo("photo-1562322140-8baeececf3df", 1200),
      alt: "Professional hair styling",
    },
    booking: {
      src: photo("photo-1487412720507-e7ab37603c6f", 1200),
      alt: "Beauty and hair styling inspiration",
    },
  },

  gallery: [
    {
      src: photo("photo-1503951914875-452162b0f3f1", 900),
      alt: "Barber shop and grooming inspiration — demo image",
      ratio: "aspect-[3/4]",
    },
    {
      src: photo("photo-1522337360788-8b13dee7a37e", 900),
      alt: "Hair styling inspiration — demo image",
      ratio: "aspect-square",
    },
    {
      src: photo("photo-1562322140-8baeececf3df", 900),
      alt: "Professional hair styling — demo image",
      ratio: "aspect-[4/5]",
    },
    {
      src: photo("photo-1487412720507-e7ab37603c6f", 900),
      alt: "Beauty portrait — demo image",
      ratio: "aspect-[4/5]",
    },
    {
      src: photo("photo-1560066984-138dadb4c035", 900),
      alt: "Salon interior — demo image",
      ratio: "aspect-square",
    },
    {
      src: photo("photo-1521590832167-7bcbfaa6381f", 900),
      alt: "Salon styling space — demo image",
      ratio: "aspect-[3/4]",
    },
  ],

  galleryNote: "Demo photography shown for illustration.",

  // Illustrative demo prices. Confirm real prices with each client.
  services: [
    {
      category: "Hair",
      items: [
        { name: "Wash and Styling", price: "8,000" },
        { name: "Natural Hair Styling", price: "12,000" },
        { name: "Wig Installation", price: "15,000" },
        { name: "Braids", price: "20,000", from: true },
      ],
    },
    {
      category: "Barbering",
      items: [
        { name: "Classic Haircut", price: "5,000" },
        { name: "Haircut and Beard Grooming", price: "8,000" },
      ],
    },
    {
      category: "Nails",
      items: [
        { name: "Classic Manicure", price: "7,000" },
        { name: "Gel Manicure", price: "12,000" },
      ],
    },
    {
      category: "Beauty",
      items: [{ name: "Basic Facial", price: "15,000" }],
    },
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
    {
      icon: "user",
      title: "Personalised attention",
      text: "Your hair, your routine, your preferences. We start by listening.",
    },
    {
      icon: "sparkles",
      title: "Thoughtful products",
      text: "Products chosen to suit different hair and skin needs.",
    },
    {
      icon: "heart",
      title: "A welcoming space",
      text: "A calm, comfortable studio where everyone is treated with respect.",
    },
    {
      icon: "eye",
      title: "Attention to detail",
      text: "Clean finishes and careful work, down to the last strand.",
    },
  ],

  about: {
    heading: "Care in every detail",
    body: [
      "We believe good styling should feel effortless for the client. That means clear communication, honest advice, and unhurried appointments.",
      "Not sure what you want? Send us a photo on WhatsApp and we will talk it through before you visit.",
    ],
  },

  faq: [
    {
      q: "Do I need an appointment?",
      a: "Appointments are recommended so we can set aside the right amount of time for you. Send a WhatsApp message to ask about availability.",
    },
    {
      q: "How do I check service prices?",
      a: "Our service menu above lists starting prices. Final pricing can vary by style, length and hair type, so message us for a precise quote.",
    },
    {
      q: "Can I enquire about a specific hairstyle?",
      a: "Yes. Send us a reference photo on WhatsApp and we will advise on suitability, timing and price.",
    },
    {
      q: "How do I reschedule?",
      a: "Message us on WhatsApp as early as you can with your name and original appointment time, and we will find a new slot.",
    },
    {
      q: "Where are you located?",
      a: "See the Visit Us section for our address and opening hours.",
    },
  ],

  // Add only real client social media links.
  social: {
    instagram: "",
    facebook: "",
    tiktok: "",
  },

  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "Our Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ],
};
