import { useEffect, useState, useRef } from "react";

export default function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [visible, setVisible] = useState(false);

  const dotRef = useRef(null);
  const ringRef = useRef(null);

  // Positions for smooth lerping
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const animFrameId = useRef(null);

  useEffect(() => {
    // Check if device supports fine pointer (mouse) and not primary touch
    const hasPointer = window.matchMedia("(pointer: fine)").matches;
    if (!hasPointer) {
      setEnabled(false);
      return;
    }
    setEnabled(true);

    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!visible) setVisible(true);

      // Check if hovering over interactive elements
      const target = e.target;
      if (target) {
        const isInteractive = target.closest(
          'a, button, input, textarea, select, [role="button"], .interactive, [data-cursor="pointer"]'
        );
        setHovered(Boolean(isInteractive));
      }
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);
    const handleMouseLeave = () => setVisible(false);
    const handleMouseEnter = () => setVisible(true);

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    // Smooth animation loop using requestAnimationFrame (lerp)
    const animate = () => {
      // Lerp ring position towards mouse position
      const lerpFactor = 0.18;
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * lerpFactor;
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * lerpFactor;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mousePos.current.x}px, ${mousePos.current.y}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0) translate(-50%, -50%)`;
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, [visible]);

  if (!enabled) return null;

  return (
    <>
      {/* Center luminous cursor dot */}
      <div
        ref={dotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full bg-cyan-400 transition-all duration-150 ${
            hovered
              ? "w-2.5 h-2.5 bg-gradient-to-r from-cyan-300 to-violet-400 shadow-[0_0_15px_rgba(6,182,212,1)]"
              : clicked
              ? "w-2 h-2 bg-violet-400 shadow-[0_0_10px_rgba(168,85,247,1)]"
              : "w-2 h-2 shadow-[0_0_10px_rgba(6,182,212,0.9)]"
          }`}
        />
      </div>

      {/* Trailing smooth halo ring */}
      <div
        ref={ringRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-300 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ willChange: "transform" }}
      >
        <div
          className={`rounded-full transition-all duration-300 ease-out border ${
            hovered
              ? "w-12 h-12 -m-6 border-cyan-400/60 bg-cyan-400/[0.08] backdrop-blur-[0.5px] shadow-[0_0_25px_rgba(6,182,212,0.35)] scale-110"
              : clicked
              ? "w-8 h-8 -m-4 border-violet-400/70 bg-violet-500/[0.12] scale-90"
              : "w-9 h-9 -m-4.5 border-cyan-400/35 bg-cyan-500/[0.04] shadow-[0_0_15px_rgba(6,182,212,0.15)]"
          }`}
        />
      </div>
    </>
  );
}
