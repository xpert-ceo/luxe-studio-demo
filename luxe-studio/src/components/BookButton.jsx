import { useState } from "react";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { openWhatsApp, isWhatsAppConfigured } from "../utils/whatsapp";

// Reusable WhatsApp CTA. Shows a clear demo notice if no number is configured.
export default function BookButton({ children, variant = "dark", className = "", noticeAbove = false }) {
  const [notice, setNotice] = useState(false);
  const styles = {
    dark: "bg-ink text-ivory hover:bg-accent",
    light: "bg-ivory text-ink hover:bg-white",
    accent: "bg-accent text-white hover:bg-ink",
  }[variant];

  return (
    <div className={`inline-flex ${noticeAbove ? "flex-col-reverse" : "flex-col"} items-start ${className.includes("w-full") ? "w-full" : ""}`}>
      <button type="button" onClick={() => { if (!openWhatsApp()) setNotice(true); }}
        className={`group inline-flex w-full items-center justify-center gap-2.5 px-7 py-4 text-sm font-medium tracking-wide transition-all duration-300 active:scale-[0.98] ${styles} ${className}`}>
        <MessageCircle size={17} aria-hidden="true" />
        {children}
        <ArrowUpRight size={16} aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </button>
      {notice && !isWhatsAppConfigured() && (
        <p role="status" className="my-2 max-w-xs text-xs opacity-80">
          Demo mode: add the WhatsApp number in src/config/business.js to enable booking.
        </p>
      )}
    </div>
  );
}
