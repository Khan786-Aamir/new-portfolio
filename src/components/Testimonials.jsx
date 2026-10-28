import { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { testimonials, achievements } from "../data/testimonials";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevSlide = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-6 py-24 scroll-mt-20 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[300px] rounded-full bg-gradient-to-r from-cyan-500/10 via-violet-600/10 to-transparent blur-[120px] pointer-events-none" />

      {/* Section Header */}
      <div className="text-center mb-16 relative z-10">
        <ScrollReveal>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-semibold tracking-wider text-cyan-400 bg-cyan-950/40 border border-cyan-500/20 rounded-full mb-3 uppercase">
            <FaStar size={11} className="text-amber-400" />
            <span>Social Proof & Impact</span>
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-4">
            What People Say
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Quotes and feedback from engineering peers, project mentors, and collaborators highlighting development speed, architectural integrity, and problem-solving focus.
          </p>
        </ScrollReveal>
      </div>

      {/* Achievements Metric Counters Banner */}
      <ScrollReveal delay={150}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16 relative z-10">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="glass-card-ultra p-5 rounded-2xl border border-white/[0.08] hover:border-cyan-500/30 bg-[#090e21]/70 backdrop-blur-xl text-center group transition-all duration-300 hover:-translate-y-1"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-gradient-cyan-violet mb-1">
                {item.metric}
              </div>
              <div className="text-xs sm:text-sm font-semibold text-white mb-0.5">
                {item.label}
              </div>
              <div className="text-[11px] text-slate-400">
                {item.detail}
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Featured Testimonial Card */}
      <ScrollReveal delay={250}>
        <div className="relative max-w-4xl mx-auto z-10">
          
          {/* Main Glass Quote Box */}
          <div className="glass-card-ultra p-8 sm:p-12 rounded-3xl border border-white/10 bg-[#0a0f26]/85 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
            
            {/* Top Rim Shimmer Line */}
            <div className="absolute inset-x-12 top-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent pointer-events-none" />

            {/* Glowing Quote Icon */}
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center text-xl mb-6 shadow-[0_0_20px_rgba(6,182,212,0.2)]">
              <FaQuoteLeft />
            </div>

            {/* 5-Star Rating */}
            <div className="flex items-center gap-1.5 mb-6 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} size={14} />
              ))}
              <span className="text-xs text-slate-400 font-mono ml-2">5.0 Endorsement</span>
            </div>

            {/* Quote Content */}
            <blockquote className="text-lg sm:text-2xl font-normal text-slate-100 leading-relaxed tracking-normal mb-8 italic">
              "{testimonials[activeIndex].quote}"
            </blockquote>

            {/* Author Information & Navigation */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-white/[0.08]">
              
              <div className="flex items-center gap-4">
                <img
                  src={testimonials[activeIndex].avatar}
                  alt={testimonials[activeIndex].author}
                  className="w-13 h-13 rounded-full object-cover border-2 border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                />
                <div>
                  <h4 className="font-bold text-white text-base">
                    {testimonials[activeIndex].author}
                  </h4>
                  <p className="text-xs text-cyan-300 font-medium">
                    {testimonials[activeIndex].role} • {testimonials[activeIndex].company}
                  </p>
                </div>
              </div>

              {/* Tag Badges & Slide Controls */}
              <div className="flex items-center gap-3">
                <div className="hidden sm:flex gap-1.5 mr-2">
                  {testimonials[activeIndex].tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-mono px-2.5 py-1 rounded-md bg-white/[0.04] text-slate-300 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={prevSlide}
                    className="w-9 h-9 rounded-full bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-300 hover:text-white flex items-center justify-center transition-all focus:outline-none"
                    aria-label="Previous Testimonial"
                  >
                    <FaChevronLeft size={12} />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-9 h-9 rounded-full bg-gradient-to-r from-cyan-500 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-white flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.3)] transition-all focus:outline-none"
                    aria-label="Next Testimonial"
                  >
                    <FaChevronRight size={12} />
                  </button>
                </div>
              </div>

            </div>

          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeIndex === idx ? "w-8 bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.6)]" : "w-2 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>
      </ScrollReveal>

    </section>
  );
}
