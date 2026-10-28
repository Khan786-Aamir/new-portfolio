import { useState, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function HangingIdCard({ className = "" }) {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef(null);

  // Motion values for interactive drag and hover physics
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Smooth springs for realistic bounce-back physics
  const springX = useSpring(dragX, { stiffness: 180, damping: 14 });
  const springY = useSpring(dragY, { stiffness: 180, damping: 14 });

  // Subtle 3D tilt based on drag position
  const rotateZ = useTransform(springX, [-150, 0, 150], [-18, 0, 18]);
  const rotateY = useTransform(springX, [-150, 0, 150], [22, 0, -22]);

  return (
    <div
      ref={containerRef}
      className={`relative flex flex-col items-center select-none ${className}`}
      style={{ perspective: 1200 }}
    >
      {/* Top Ceiling Mounting Anchor */}
      <div className="relative z-30 flex flex-col items-center">
        {/* Metal ceiling mount plate */}
        <div className="w-14 h-3 rounded-full bg-slate-400 dark:bg-slate-700 border-2 border-slate-900 dark:border-slate-300 shadow-sm" />
        <div className="w-4 h-2 bg-slate-600 dark:bg-slate-400 border-x-2 border-slate-900 dark:border-slate-300" />
      </div>

      {/* Swaying Pendulum Rig - Suspended Lanyard Strap + ID Badge */}
      <motion.div
        drag
        dragConstraints={{ left: -60, right: 60, top: -20, bottom: 40 }}
        dragElastic={0.4}
        onDrag={(e, info) => {
          dragX.set(info.offset.x);
          dragY.set(info.offset.y);
        }}
        onDragEnd={() => {
          dragX.set(0);
          dragY.set(0);
        }}
        animate={
          isHovered
            ? {}
            : {
                rotateZ: [-3.2, 3.5, -2.8, 3.0, -3.2],
                transition: {
                  duration: 5.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }
        }
        style={{
          transformOrigin: "top center",
          x: springX,
          y: springY,
          rotateZ: rotateZ,
          rotateY: rotateY,
        }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        className="flex flex-col items-center cursor-grab active:cursor-grabbing relative z-20"
      >
        {/* Lanyard Strap ("Feeta") */}
        <div className="relative w-7 h-24 sm:h-32 flex flex-col items-center shadow-md">
          {/* Woven fabric texture pattern */}
          <div
            className="w-full h-full bg-[#18181b] dark:bg-[#111827] border-x-2 border-slate-900 dark:border-slate-400 relative overflow-hidden flex flex-col justify-around items-center"
            style={{
              backgroundImage:
                "repeating-linear-gradient(45deg, transparent, transparent 3px, rgba(250,204,21,0.2) 3px, rgba(250,204,21,0.2) 6px)",
            }}
          >
            {/* Subtle center stitching accent line */}
            <div className="absolute inset-y-0 w-0.5 bg-amber-400/50" />
          </div>

          {/* Quick-release Plastic Buckle / Joint */}
          <div className="w-8 h-4 rounded-xs bg-slate-800 dark:bg-slate-900 border-2 border-slate-900 dark:border-slate-300 flex items-center justify-center z-10 shadow-xs">
            <div className="w-4 h-1 bg-slate-500 rounded-full" />
          </div>

          {/* Metal Swivel Clasp / Hook */}
          <div className="relative flex flex-col items-center -mt-0.5">
            {/* Chrome metallic loop */}
            <div className="w-5 h-4 rounded-t-sm bg-gradient-to-r from-slate-300 via-slate-100 to-slate-400 border-2 border-slate-900 dark:border-slate-300 shadow-xs" />
            {/* Swivel trigger clasp hook */}
            <div className="w-3.5 h-6 -mt-0.5 bg-gradient-to-r from-slate-200 via-white to-slate-400 border-2 border-slate-900 dark:border-slate-300 rounded-b-md flex items-center justify-center shadow-sm">
              <div className="w-1.5 h-3 bg-slate-700 dark:bg-slate-400 rounded-full" />
            </div>
          </div>
        </div>

        {/* Realistic Metal Ring connecting hook to badge hole */}
        <div className="w-4 h-4 -mt-2 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-transparent relative z-10 shadow-xs" />

        {/* The ID Badge Card Container */}
        <div className="relative -mt-1 group">
          {/* Card Dynamic Soft Drop Shadow */}
          <div className="absolute -inset-1.5 rounded-2xl bg-black/20 dark:bg-black/60 blur-md pointer-events-none translate-y-3" />

          {/* Hard Offset Neo-Brutalist Border Shadow */}
          <div className="absolute inset-0 rounded-2xl bg-slate-900 dark:border-slate-400 dark:bg-slate-400 translate-x-1.5 translate-y-1.5 pointer-events-none" />

          {/* Clean ID Card Body: Only Photo and Software Engineer */}
          <div className="relative w-60 sm:w-64 rounded-2xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 overflow-hidden shadow-sm flex flex-col">
            {/* Top Lanyard Punch Slot Hole */}
            <div className="w-full flex justify-center pt-2.5 pb-2 bg-slate-50 dark:bg-[#1a1b26] border-b-2 border-slate-900 dark:border-slate-400">
              <div className="w-11 h-2 rounded-full bg-slate-300 dark:bg-slate-800 border-1.5 border-slate-900 dark:border-slate-400 shadow-inner" />
            </div>

            {/* Card Interior: ONLY Photo & ONLY Software Engineer */}
            <div className="p-4 sm:p-5 flex flex-col items-center">
              {/* Photo Frame */}
              <div className="relative w-44 h-52 sm:w-48 sm:h-56 rounded-xl border-2 border-slate-900 dark:border-slate-400 overflow-hidden bg-slate-100 dark:bg-slate-900 shadow-sm mb-4 group/photo">
                <img
                  src="/profile.jpg"
                  alt="Software Engineer"
                  className="w-full h-full object-cover object-top transition-transform duration-500 group-hover/photo:scale-105"
                  loading="eager"
                />
              </div>

              {/* ONLY "Software Engineer" Written Here */}
              <div className="w-full text-center">
                <div className="inline-flex items-center justify-center px-4 py-2 rounded-xl border-2 border-slate-900 dark:border-slate-400 bg-amber-300 dark:bg-amber-400 text-slate-950 shadow-hard-sm w-full">
                  <span className="font-sans font-black text-sm sm:text-base uppercase tracking-wider">
                    Software Engineer
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
