import { motion, useReducedMotion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1];

export default function Reveal({ children, delay = 0, className = "", y = 28 }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.8, delay, ease }}>
      {children}
    </motion.div>
  );
}

// Curtain-style image reveal
export function ImageReveal({ children, delay = 0, className = "" }) {
  const reduce = useReducedMotion();
  return (
    <motion.div className={className}
      initial={reduce ? false : { clipPath: "inset(0 0 100% 0)" }}
      whileInView={{ clipPath: "inset(0 0 0% 0)" }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 1.1, delay, ease }}>
      {children}
    </motion.div>
  );
}
