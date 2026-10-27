import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { business } from "../config/business";
import BookButton from "./BookButton";

export default function StickyBook() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 500);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="fixed inset-x-0 bottom-0 z-40 border-t border-[#d8c9b9] bg-[#faf6f0]/95 px-4 pt-3 backdrop-blur-xl lg:hidden"
          style={{
            paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))",
          }}
        >
          <div className="mx-auto flex max-w-xl items-center gap-3">
            <div className="min-w-0 flex-1">
              <p className="truncate font-serif text-sm text-[#30231e]">
                {business.name}
              </p>
              <p className="mt-0.5 text-[10px] uppercase tracking-[0.13em] text-[#857466]">
                Your next look starts here
              </p>
            </div>

            <div className="shrink-0">
              <BookButton noticeAbove className="!min-h-11 !px-4 !py-3">
                <span className="inline-flex items-center gap-2">
                  {business.ctaText}
                  <ArrowUpRight size={14} />
                </span>
              </BookButton>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
