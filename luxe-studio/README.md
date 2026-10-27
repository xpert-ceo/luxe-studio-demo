# LUXE STUDIO – Salon Website Template

React + Vite + Tailwind + Framer Motion + Lucide.

## Run
    npm install
    npm run dev        # http://localhost:5173
    npm run build      # production build in /dist

## Customise per client (all in `src/config/business.js`)
- Name, tagline, description, CTA text
- `whatsappNumber` (digits only, e.g. "2348012345678"), `phone`, `address`, `city`, `mapsUrl`
- `hours`, `services` (prices), `faq`, `intro`, `about`, `why`
- `theme` (brand colours), `social` (empty = hidden)
- Set `showAnnouncementBar: false` to remove the top bar

## WhatsApp
If `whatsappNumber` is empty, booking buttons show a demo notice and never open a wrong number.

## Images
All images are web URLs set in `src/config/business.js` (`images` and `gallery`).
To swap for a client: replace any `src` with a new URL, an `unsplash("PHOTO_ID")` call (ID = last code in an Unsplash photo URL), or a local file like "/images/hero.jpg" placed in `public/images/`.
If an image fails to load, a neutral placeholder shows. Only use images you are licensed to use.
Update `og:image` in `index.html` for the social share preview.

## Deploy to Vercel
Push to GitHub, import the repo in Vercel (framework: Vite, build `npm run build`, output `dist`). Or run `npx vercel`.
