import { business } from "../config/business";

// Remove spaces, +, dashes, brackets. Keep digits only.
export const cleanNumber = (raw = "") => String(raw).replace(/\D/g, "");

export const isWhatsAppConfigured = () => {
  const n = cleanNumber(business.whatsappNumber);
  return n.length >= 10 && n.length <= 15;
};

export const buildWhatsAppUrl = (message = business.whatsappMessage) => {
  if (!isWhatsAppConfigured()) return null;
  return `https://wa.me/${cleanNumber(business.whatsappNumber)}?text=${encodeURIComponent(message)}`;
};

// Returns true if opened, false if not configured (caller shows a fallback).
export const openWhatsApp = (message) => {
  const url = buildWhatsAppUrl(message);
  if (!url) return false;
  window.open(url, "_blank", "noopener,noreferrer");
  return true;
};
