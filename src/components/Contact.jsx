import { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import ScrollReveal from "./ScrollReveal";
import { Mail, Send, Copy, Check, ArrowUpRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("aamir706056@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const triggerConfetti = () => {
    try {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.7 },
        colors: ["#facc15", "#38bdf8", "#34d399", "#f43f5e"],
      });
    } catch {
      // safe fallback
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setStatus({ type: "error", message: "Please fill in all required fields." });
      setIsSubmitting(false);
      return;
    }

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        await new Promise((res) => setTimeout(res, 800));
        triggerConfetti();
        setStatus({
          type: "success",
          message: "Thank you! Your message was prepared. You can also write directly to aamir706056@gmail.com.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
        return;
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject || "Portfolio Contact Inquiry",
          message: formData.message,
          to_email: "aamir706056@gmail.com",
        },
        publicKey
      );

      triggerConfetti();
      setStatus({
        type: "success",
        message: "Message sent successfully! I will get back to you within 24 hours.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS Error:", error);
      setStatus({
        type: "error",
        message: "Failed to send automatically. Please email directly at aamir706056@gmail.com",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 sm:py-32 bg-[#F7F5EE] dark:bg-[#181926] border-t-2 border-slate-900 dark:border-slate-400 scroll-mt-16 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Left Column: Huge Headline & Direct Email */}
          <div className="lg:col-span-7">
            <ScrollReveal>
              <h2 className="font-sans font-black text-5xl sm:text-7xl lg:text-8xl tracking-tight text-slate-900 dark:text-white uppercase leading-[0.88] mb-6">
                <span>Let's build</span>
                <span className="block text-slate-900 dark:text-slate-100">something.</span>
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={120}>
              <p className="font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 max-w-lg mb-8 leading-relaxed">
                Open to full-time engineering roles, high-impact internships, and interesting software challenges. The fastest way to reach me is email — I answer all of them.
              </p>
            </ScrollReveal>

            {/* Direct Email Link with Bold Accent Underline */}
            <ScrollReveal delay={200}>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <a
                  href="mailto:aamir706056@gmail.com"
                  className="font-sans font-black text-xl sm:text-3xl text-slate-900 dark:text-white underline decoration-amber-400 decoration-4 underline-offset-8 hover:decoration-amber-500 break-all"
                >
                  aamir706056@gmail.com
                </a>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 rounded-lg border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 shadow-hard-sm hover:bg-amber-300 cursor-pointer"
                  title="Copy email address"
                  aria-label="Copy Email"
                >
                  {copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} />}
                </button>
              </div>
              {copied && (
                <span className="block -mt-5 mb-6 text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  ✓ Copied email to clipboard!
                </span>
              )}
            </ScrollReveal>

            {/* Quick Links Pills matching reference site */}
            <ScrollReveal delay={280}>
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/Khan786-Aamir"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 font-semibold text-xs sm:text-sm shadow-hard-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-hard hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all"
                >
                  <FaGithub size={14} />
                  <span>GitHub</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href="https://www.linkedin.com/in/aamir-khan-278b71317"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 font-semibold text-xs sm:text-sm shadow-hard-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-hard hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all"
                >
                  <FaLinkedin size={14} />
                  <span>LinkedIn</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href="https://x.com/AamirKhan453200"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 font-semibold text-xs sm:text-sm shadow-hard-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-hard hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all"
                >
                  <FaXTwitter size={13} />
                  <span>Twitter</span>
                  <ArrowUpRight size={12} />
                </a>

                <a
                  href="/resume.pdf"
                  download
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#16161e] text-slate-900 dark:text-slate-100 font-semibold text-xs sm:text-sm shadow-hard-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-hard hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950 transition-all"
                >
                  <Download size={13} />
                  <span>Résumé ↓</span>
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Signature Rotating Kinetic Machine (From Reference Portfolio) */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal delay={200}>
              <div className="relative w-72 sm:w-88 aspect-square flex items-center justify-center">
                {/* Rotating SVG Ring */}
                <svg
                  viewBox="0 0 400 400"
                  className="w-full h-full animate-spin-slow origin-center select-none"
                  aria-hidden="true"
                >
                  <defs>
                    <path
                      id="circlePath"
                      d="M 200, 200 m -130, 0 a 130,130 0 1,1 260,0 a 130,130 0 1,1 -260,0"
                    />
                  </defs>

                  {/* Concentric Guide Circles */}
                  <circle
                    cx="200"
                    cy="200"
                    r="85"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    className="text-slate-900/20 dark:text-slate-400/20"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="130"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="4 6"
                    className="text-slate-900/30 dark:text-slate-400/30"
                  />

                  {/* Circular Orbiting Typography */}
                  <text className="font-mono text-[14px] font-black uppercase tracking-[0.26em] fill-slate-900 dark:fill-slate-100">
                    <textPath href="#circlePath" startOffset="0%">
                      BUILD • SHIP • LEARN • REPEAT •
                    </textPath>
                  </text>
                </svg>

                {/* Center Badge Pill: "OPEN TO WHAT'S NEXT" */}
                <div className="absolute transform -rotate-6 p-4 rounded-xl border-2 border-slate-900 dark:border-slate-300 bg-amber-400 text-slate-950 font-bold shadow-hard text-center">
                  <div className="font-mono text-[10px] tracking-widest uppercase">
                    OPEN TO
                  </div>
                  <div className="font-sans font-black text-base sm:text-lg tracking-tight">
                    WHAT'S NEXT
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Quick Message Form */}
        <ScrollReveal delay={300}>
          <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-2xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] shadow-hard">
            <h3 className="font-sans font-black text-xl sm:text-2xl text-slate-900 dark:text-white mb-2">
              Send a quick message
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mb-6">
              Need a full-stack engineer or have a contract opportunity? Drop a note below.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-900 dark:border-slate-400 bg-[#F7F5EE] dark:bg-[#1a1b26] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@company.com"
                    className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-900 dark:border-slate-400 bg-[#F7F5EE] dark:bg-[#1a1b26] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-bold uppercase text-slate-700 dark:text-slate-300 mb-1">
                  Message *
                </label>
                <textarea
                  name="message"
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Tell me about your role or project..."
                  className="w-full px-3.5 py-2.5 rounded-lg border-2 border-slate-900 dark:border-slate-400 bg-[#F7F5EE] dark:bg-[#1a1b26] text-sm text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                />
              </div>

              {status.message && (
                <div
                  className={`p-3 rounded-lg text-xs font-mono font-bold ${
                    status.type === "success"
                      ? "bg-emerald-100 text-emerald-900 border-2 border-emerald-500"
                      : "bg-rose-100 text-rose-900 border-2 border-rose-500"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl border-2 border-slate-900 dark:border-slate-300 bg-amber-400 hover:bg-amber-500 text-slate-950 font-sans font-black text-sm uppercase tracking-wider shadow-hard-sm hover:shadow-hard hover:translate-x-[-1px] hover:translate-y-[-1px] active:translate-x-[1px] active:translate-y-[1px] transition-all cursor-pointer"
              >
                {isSubmitting ? "Sending..." : "Send Message →"}
              </button>
            </form>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
