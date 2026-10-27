import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { business } from "../config/business";
import BookButton from "./BookButton";

// Mobile-only booking bar that appears after the hero.
export default function StickyBook() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div initial={{ y: 80 }} animate={{ y: 0 }} exit={{ y: 80 }} transition={{ duration: 0.35 }}
          className="lg:hidden fixed inset-x-0 bottom-0 z-30 bg-ivory/95 backdrop-blur border-t border-line px-4 pt-3"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
          <BookButton noticeAbove className="w-full !py-3.5">{business.ctaText}</BookButton>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
