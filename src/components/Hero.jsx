import { useState, useEffect } from "react";
import ScrollReveal from "./ScrollReveal";
import HangingIdCard from "./HangingIdCard";
import { ArrowRight, Download, Sparkles, MapPin } from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiTypescript, SiTailwindcss, SiMongodb } from "react-icons/si";

export default function Hero() {
  const words = [
    "high-performance web apps.",
    "scalable distributed APIs.",
    "real-time full-stack systems.",
    "interactive Next.js architectures."
  ];
  const [wordIndex, setWordIndex] = useState(0);
  const [currentWordText, setCurrentWordText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer;
    const currentFullWord = words[wordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentWordText((prev) => prev.substring(0, prev.length - 1));
      }, 30);
    } else {
      timer = setTimeout(() => {
        setCurrentWordText(currentFullWord.substring(0, currentWordText.length + 1));
      }, 60);
    }

    if (!isDeleting && currentWordText === currentFullWord) {
      timer = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && currentWordText === "") {
      setIsDeleting(false);
      setWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentWordText, isDeleting, wordIndex]);

  const scrollToSection = (e, id) => {
    e.preventDefault();
    const target = document.querySelector(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden site-grid-bg">
      {/* Background Subtle Gradient Blobs */}
      <div className="absolute top-1/4 left-1/12 w-80 h-80 rounded-full bg-amber-400/10 dark:bg-amber-400/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/12 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-[130px] pointer-events-none" />

      <div className="max-w-6xl w-full mx-auto px-5 sm:px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Column: Hero Typography & Actions */}
        <div className="lg:col-span-7 text-left order-2 lg:order-1">
          {/* Eyebrow Location Tag */}
          <ScrollReveal delay={50}>
            <div className="flex items-center gap-2 mb-4 text-xs font-mono font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse border border-slate-900 dark:border-slate-300" />
              <span>Uttar Pradesh, India</span>
              <span className="text-slate-400 dark:text-slate-600">•</span>
              <span className="text-emerald-600 dark:text-emerald-400">Available for hire</span>
            </div>
          </ScrollReveal>

          {/* Huge Neo-Brutalist Display Name */}
          <ScrollReveal delay={120}>
            <h1 className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white uppercase leading-[0.88] mb-6">
              <span className="block">Aamir</span>
              <span className="block text-slate-900 dark:text-slate-100">Khan</span>
            </h1>
          </ScrollReveal>

          {/* Morphing Dynamic Headline */}
          <ScrollReveal delay={200}>
            <p className="font-sans text-xl sm:text-2xl lg:text-3xl font-medium text-slate-800 dark:text-slate-200 leading-snug mb-5 max-w-xl">
              Full-stack software engineer building{" "}
              <b className="font-extrabold text-slate-950 dark:text-white underline decoration-amber-400 decoration-4 underline-offset-4">
                {currentWordText}
              </b>
              <span className="animate-pulse text-amber-500">|</span>
            </p>
          </ScrollReveal>

          {/* Conversational Bio Blurb matching reference style */}
          <ScrollReveal delay={280}>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300/90 leading-relaxed mb-8 max-w-lg">
              Specializing in end-to-end architectures with <span className="font-bold text-slate-900 dark:text-white">React, Next.js, Node.js, and MongoDB</span>. Obsessed with pixel-level micro-interactions and scalable distributed backends.
            </p>
          </ScrollReveal>

          {/* CTA Buttons with Neo-Brutalist Hard Shadows */}
          <ScrollReveal delay={360}>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                onClick={(e) => scrollToSection(e, "#projects")}
                className="inline-flex items-center gap-3 px-6 sm:px-7 py-3 rounded-full text-sm font-bold bg-amber-300 hover:bg-amber-400 text-slate-950 border-2 border-slate-900 dark:border-slate-300 shadow-hard hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hard-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-hard-sm transition-all duration-150 cursor-pointer group"
              >
                <span>See the work</span>
                <span className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight size={13} />
                </span>
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 border-2 border-slate-900 dark:border-slate-300 shadow-hard hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-hard-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-hard-sm transition-all duration-150 group"
              >
                <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                <span>Résumé PDF ↓</span>
              </a>
            </div>
          </ScrollReveal>

          {/* Tool Stack Tags */}
          <ScrollReveal delay={440}>
            <div className="mt-10 pt-6 border-t-2 border-slate-200 dark:border-slate-800 flex flex-wrap items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-400">
              <span className="font-bold text-[11px] uppercase mr-2 text-slate-500">Toolbox:</span>
              <span className="px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a1b26] text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <FaReact className="text-cyan-500" /> React
              </span>
              <span className="px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a1b26] text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <SiNextdotjs /> Next.js
              </span>
              <span className="px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a1b26] text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <SiTypescript className="text-sky-500" /> TypeScript
              </span>
              <span className="px-2.5 py-1 rounded-md border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#1a1b26] text-slate-800 dark:text-slate-200 font-semibold flex items-center gap-1.5 shadow-2xs">
                <FaNodeJs className="text-emerald-500" /> Node.js
              </span>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Feeta Se Latakta Hua & Hilta Hua ID Card */}
        <div className="lg:col-span-5 flex justify-center lg:justify-end relative order-1 lg:order-2 pt-6 lg:pt-0">
          <ScrollReveal delay={150} className="w-full flex justify-center">
            <HangingIdCard />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
