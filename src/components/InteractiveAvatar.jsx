import { useState, useEffect, useRef, useCallback } from "react";
import { FaCamera, FaRobot } from "react-icons/fa";
import { SiSpeedtest } from "react-icons/si";

export default function InteractiveAvatar({ className = "" }) {
  const containerRef = useRef(null);
  const [avatarMode, setAvatarMode] = useState("robotic"); // 'robotic' or 'real'
  const [isBlinking, setIsBlinking] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Smooth lerp coordinates for head tilt and eye tracking
  const targetCoord = useRef({ x: 0, y: 0 });
  const currentCoord = useRef({ x: 0, y: 0 });
  const idleTimer = useRef(null);
  const animFrameId = useRef(null);
  const blinkTimerId = useRef(null);

  // DOM refs for direct transform updates (zero React re-render overhead at 60fps)
  const headRef = useRef(null);
  const leftPupilRef = useRef(null);
  const rightPupilRef = useRef(null);
  const shadowRef = useRef(null);

  // Natural Blinking Cycle (every 3.2 - 5.5 seconds, with occasional double-blink)
  const scheduleNextBlink = useCallback(() => {
    const delay = Math.random() * 2500 + 3200; // between 3.2s and 5.7s
    blinkTimerId.current = setTimeout(() => {
      triggerBlink();
    }, delay);
  }, []);

  const triggerBlink = useCallback(() => {
    setIsBlinking(true);
    setTimeout(() => {
      setIsBlinking(false);

      // 25% chance of a natural double-blink
      if (Math.random() < 0.25) {
        setTimeout(() => {
          setIsBlinking(true);
          setTimeout(() => {
            setIsBlinking(false);
            scheduleNextBlink();
          }, 120);
        }, 110);
      } else {
        scheduleNextBlink();
      }
    }, 140);
  }, [scheduleNextBlink]);

  useEffect(() => {
    scheduleNextBlink();
    return () => {
      if (blinkTimerId.current) clearTimeout(blinkTimerId.current);
    };
  }, [scheduleNextBlink]);

  // Mouse Tracking and Smooth Return
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      // Distance from avatar center
      const rawDx = (e.clientX - centerX) / (window.innerWidth / 2);
      const rawDy = (e.clientY - centerY) / (window.innerHeight / 2);

      // Clamp target coordinates between -1 and 1
      targetCoord.current = {
        x: Math.max(-1, Math.min(1, rawDx)),
        y: Math.max(-1, Math.min(1, rawDy)),
      };

      // Reset idle timer: if user stops moving mouse for 1200ms, gently return to center
      if (idleTimer.current) clearTimeout(idleTimer.current);
      idleTimer.current = setTimeout(() => {
        targetCoord.current = { x: 0, y: 0 };
      }, 1200);
    };

    const handleMouseLeave = () => {
      targetCoord.current = { x: 0, y: 0 };
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);

    // High performance RAF loop
    const animate = () => {
      const lerp = 0.08; // smooth damping factor
      currentCoord.current.x += (targetCoord.current.x - currentCoord.current.x) * lerp;
      currentCoord.current.y += (targetCoord.current.y - currentCoord.current.y) * lerp;

      const { x, y } = currentCoord.current;

      // Head 3D rotation angles
      const rotY = x * 12; // yaw
      const rotX = -y * 10; // pitch
      const rotZ = x * 2.5; // slight head roll/tilt

      if (headRef.current) {
        headRef.current.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) rotateZ(${rotZ}deg)`;
      }

      // Parallax shadow / glow
      if (shadowRef.current) {
        shadowRef.current.style.transform = `translate3d(${-x * 12}px, ${-y * 8}px, 0)`;
      }

      // Eye pupil tracking
      const pupilX = x * 4;
      const pupilY = y * 3;

      if (leftPupilRef.current) {
        leftPupilRef.current.style.transform = `translate3d(${pupilX}px, ${pupilY}px, 0)`;
      }
      if (rightPupilRef.current) {
        rightPupilRef.current.style.transform = `translate3d(${pupilX}px, ${pupilY}px, 0)`;
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      if (idleTimer.current) clearTimeout(idleTimer.current);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative select-none ${className}`}
      style={{ perspective: "1000px" }}
    >
      {/* Cybernetic Ambient Backlight Glow */}
      <div
        ref={shadowRef}
        className="absolute inset-[-20px] rounded-full bg-gradient-to-tr from-cyan-500/30 via-violet-600/25 to-blue-500/20 blur-3xl opacity-80 pointer-events-none transition-transform duration-300"
      />

      {/* Cyber Luminous Particles */}
      <div className="absolute -top-3 -right-3 w-3 h-3 rounded-full bg-cyan-400/80 blur-[2px] animate-pulse pointer-events-none" />
      <div className="absolute top-1/2 -left-4 w-2.5 h-2.5 rounded-full bg-violet-400/80 blur-[2px] animate-pulse-slow pointer-events-none" />
      <div className="absolute -bottom-2 right-1/4 w-3 h-3 rounded-full bg-cyan-300/70 blur-[2px] animate-pulse pointer-events-none" />

      {/* 3D Tilting Card Container */}
      <div
        ref={headRef}
        className="relative rounded-3xl p-3 sm:p-4 bg-white/90 dark:bg-[#090e24]/85 border border-slate-300/80 dark:border-white/15 shadow-[0_20px_50px_rgba(0,0,0,0.08)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.7)] backdrop-blur-2xl transition-all duration-300 hover:shadow-[0_25px_70px_rgba(6,182,212,0.25)] hover:border-cyan-500/50"
        style={{
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
      >
        {/* Top Rim Shimmer Line */}
        <div className="absolute inset-x-8 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent pointer-events-none" />

        {/* Avatar Viewport */}
        <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden bg-[#070b1a] border border-slate-300/60 dark:border-white/10 shadow-inner group">
          {avatarMode === "robotic" ? (
            <div className="relative w-full h-full animate-cyber-float overflow-hidden">
              {/* High-Tech Futuristic Robotic / Cyborg Portrait */}
              <img
                src="/robotic_avatar.jpg"
                alt="Aamir Khan - Futuristic Robotic Cyborg Avatar"
                className="w-full h-full object-cover object-top filter brightness-[1.03] contrast-[1.04]"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = "/profile.jpg";
                }}
              />

              {/* Futuristic Cyber Scanline Animation */}
              <div className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_12px_rgba(6,182,212,0.9)] animate-scanline pointer-events-none" />

              {/* Holographic HUD Eye Reticle Overlay on left eye (viewer right) */}
              <div
                className="absolute pointer-events-none flex items-center justify-center"
                style={{
                  top: "33%",
                  left: "55%",
                  width: "22%",
                  height: "17%",
                }}
              >
                <div
                  ref={rightPupilRef}
                  className="w-full h-full relative flex items-center justify-center"
                  style={{ willChange: "transform" }}
                >
                  <div className="w-10 h-10 rounded-full border border-cyan-400/50 border-dashed animate-spin-slow flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full border border-cyan-300/70" />
                  </div>
                  <div className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_8px_#00f5ff] animate-ping" />
                </div>
              </div>

              {/* High-Tech Grid Overlay Texture */}
              <div
                className="absolute inset-0 pointer-events-none opacity-20"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(6, 182, 212, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(6, 182, 212, 0.2) 1px, transparent 1px)",
                  backgroundSize: "20px 20px",
                }}
              />

              {/* Subtle Gradient Shadow Vignette at bottom */}
              <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#060a18] via-[#060a18]/70 to-transparent pointer-events-none" />

              {/* Cyber AI Badge Indicator */}
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#060d20]/80 backdrop-blur-md text-cyan-300 border border-cyan-400/40 shadow-[0_0_12px_rgba(6,182,212,0.35)]">
                  <FaRobot className="text-cyan-400" size={11} />
                  <span>Cyborg AI</span>
                </span>
              </div>

              {/* Realtime Neural Core Status Chip */}
              <div className="absolute top-3 right-3 pointer-events-none">
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[9px] font-mono tracking-widest uppercase bg-[#060d20]/80 backdrop-blur-md text-emerald-400 border border-emerald-400/30 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Online</span>
                </span>
              </div>
            </div>
          ) : (
            <div className="relative w-full h-full">
              {/* Original Real Portrait Photo */}
              <img
                src="/profile.jpg"
                alt="Aamir Khan - Real Portrait"
                className="w-full h-full object-cover object-top transition-transform duration-500 ease-out hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#090e24] via-[#090e24]/70 to-transparent pointer-events-none" />
              <div className="absolute top-3 left-3 pointer-events-none">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-bold tracking-wide uppercase bg-black/60 backdrop-blur-md text-cyan-300 border border-cyan-400/30 shadow-lg">
                  <FaCamera size={9} />
                  <span>Real Photo</span>
                </span>
              </div>
            </div>
          )}

          {/* Identity Overlay Tag */}
          <div className="absolute bottom-3 inset-x-3 text-center pointer-events-none">
            <span className="inline-block px-3 py-1 rounded-full bg-[#060814]/90 border border-white/10 text-xs font-semibold text-white tracking-wide shadow-md backdrop-blur-md">
              Aamir Khan • Software Engineer
            </span>
          </div>
        </div>

        {/* Card Footer with Mode Switcher & Status */}
        <div className="mt-3.5 flex items-center justify-between px-1.5 text-xs text-slate-700 dark:text-slate-300">
          <span className="flex items-center gap-1.5 font-medium text-emerald-600 dark:text-emerald-400">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span>Available for hire</span>
          </span>

          {/* Interactive Mode Switcher Button */}
          <button
            onClick={() => setAvatarMode(avatarMode === "robotic" ? "real" : "robotic")}
            className="group/btn inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 dark:bg-white/[0.06] dark:hover:bg-white/[0.12] border border-slate-300/80 dark:border-white/10 hover:border-cyan-400/50 text-[11px] font-semibold text-slate-800 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-white transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
            title="Toggle between Robotic avatar and Real photo"
          >
            {avatarMode === "robotic" ? (
              <>
                <FaCamera className="text-cyan-600 dark:text-cyan-400 text-[10px]" />
                <span>Show Photo</span>
              </>
            ) : (
              <>
                <FaRobot className="text-cyan-600 dark:text-cyan-400 text-[10px]" />
                <span>Show Robotic</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
