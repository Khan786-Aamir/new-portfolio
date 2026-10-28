import { useRef, useEffect } from "react";
import { motion } from "framer-motion";

export default function ProfileImage({ className = "" }) {
  const cardRef = useRef(null);

  // Smooth subtle tilt effect on mouse movement
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      const rotX = -(y / rect.height) * 10;
      const rotY = (x / rect.width) * 10;
      card.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`;
    };

    const handleMouseLeave = () => {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)";
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className={`relative flex items-center justify-center select-none ${className}`}>
      {/* Ambient background glow matching light and dark themes */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-cyan-500/20 via-violet-500/20 to-blue-500/20 blur-3xl opacity-75 dark:opacity-90 pointer-events-none scale-110" />

      {/* Decorative gradient border glow ring */}
      <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-tr from-cyan-500/30 via-indigo-500/20 to-violet-500/30 blur-sm pointer-events-none opacity-60 dark:opacity-80" />

      {/* Main Clean Profile Frame (No corner text/badges) */}
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative w-64 h-72 sm:w-72 sm:h-80 md:w-80 md:h-96 rounded-3xl p-2.5 sm:p-3 bg-white/90 dark:bg-[#0c1229]/90 border border-slate-200/90 dark:border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_25px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-transform duration-200 ease-out"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Inner Image Container - Clean Original Photo Only */}
        <div className="relative w-full h-full rounded-2xl overflow-hidden bg-slate-100 dark:bg-[#060a17] border border-slate-200/70 dark:border-white/[0.08] shadow-inner group">
          <img
            src="/profile.jpg"
            alt="Aamir Khan"
            className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            loading="eager"
          />

          {/* Very subtle bottom vignette for depth, keeping face 100% clean */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
}
