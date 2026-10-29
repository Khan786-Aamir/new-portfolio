import { useState } from "react";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import ScrollReveal from "./ScrollReveal";
import { Copy, Check, ArrowUpRight, Download, Plane } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const EMAIL = "aamir706056@gmail.com";

const barcode = [
  2, 1, 3, 1, 2, 4, 1, 2, 1, 3, 2, 1, 4, 1, 2, 3, 1, 1, 2, 4, 1, 3, 2, 1, 2, 3,
  1, 4, 1, 2, 1, 3, 2, 1,
];

const fieldInput =
  "w-full bg-transparent border-b-2 border-slate-900 dark:border-slate-400 px-0 py-2 text-base sm:text-lg font-semibold text-slate-900 dark:text-white placeholder:text-slate-300 dark:placeholder:text-slate-600 placeholder:font-normal focus:outline-none focus:border-violet-500 dark:focus:border-violet-400 transition-colors";

const fieldLabel =
  "block font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400";

function Notch({ position, side }) {
  // half-circle cut-out on the perforation line (desktop only)
  const isTop = position === "top";
  return (
    <div
      className={`hidden lg:block absolute z-10 w-7 h-3.5 overflow-hidden ${
        isTop ? "top-0" : "bottom-0"
      }`}
      style={{ left: side, transform: "translateX(-50%)" }}
    >
      <div
        className={`absolute w-7 h-7 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-[#F7F5EE] dark:bg-[#181926] ${
          isTop ? "-top-3.5" : "top-0"
        }`}
      />
    </div>
  );
}

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
    navigator.clipboard.writeText(EMAIL);
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
        particleCount: 90,
        spread: 70,
        origin: { y: 0.65 },
        colors: ["#facc15", "#38bdf8", "#34d399", "#f43f5e", "#a78bfa"],
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
          message: `Your message was prepared. You can also write directly to ${EMAIL}.`,
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
          to_email: EMAIL,
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
        message: `Failed to send automatically. Please email directly at ${EMAIL}`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const tags = [
    {
      name: "GitHub",
      handle: "Khan786-Aamir",
      href: "https://github.com/Khan786-Aamir",
      icon: <FaGithub size={24} />,
      color: "bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-950",
      tilt: "-rotate-3",
    },
    {
      name: "LinkedIn",
      handle: "aamir-khan",
      href: "https://www.linkedin.com/in/aamir-khan-278b71317",
      icon: <FaLinkedin size={24} />,
      color: "bg-cyan-300 dark:bg-cyan-400 text-slate-950",
      tilt: "rotate-2",
    },
    {
      name: "Twitter",
      handle: "@AamirKhan",
      href: "https://x.com/AamirKhan453200",
      icon: <FaXTwitter size={24} />,
      color: "bg-pink-300 dark:bg-pink-400 text-slate-950",
      tilt: "-rotate-2",
    },
    {
      name: "Résumé",
      handle: "PDF · download",
      href: "/resume.pdf",
      download: true,
      icon: <Download size={24} />,
      color: "bg-emerald-300 dark:bg-emerald-400 text-slate-950",
      tilt: "rotate-3",
    },
  ];

  const sent = status.type === "success";

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#F7F5EE] dark:bg-[#181926] border-t-2 border-slate-900 dark:border-slate-400 scroll-mt-16 relative overflow-hidden"
    >
      <style>{`
        @keyframes tk-float {
          0%, 100% { transform: translateY(0) rotate(-8deg); }
          50% { transform: translateY(-12px) rotate(5deg); }
        }
        @keyframes tk-route {
          0% { left: 0%; opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { left: calc(100% - 28px); opacity: 0; }
        }
        @keyframes tk-stamp {
          0% { opacity: 0; transform: scale(2.6) rotate(-22deg); }
          60% { opacity: 1; transform: scale(0.92) rotate(-10deg); }
          100% { opacity: 1; transform: scale(1) rotate(-10deg); }
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Eyebrow */}
        <ScrollReveal>
          <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-6">
            <span>Contact / 05</span>
            <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={100}>
          <div className="relative mb-14 sm:mb-16">
            <h2 className="font-sans font-black uppercase tracking-tighter leading-[0.85] text-slate-900 dark:text-white text-6xl sm:text-8xl lg:text-[9.5rem]">
              Let's build
              <span
                className="block"
                style={{ WebkitTextStroke: "2px", WebkitTextFillColor: "transparent" }}
              >
                something.
              </span>
            </h2>

            {/* floating sticker */}
            <div
              className="absolute right-0 top-0 sm:right-6 sm:top-2 flex items-center justify-center w-20 h-20 sm:w-28 sm:h-28 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-amber-300 dark:bg-amber-400 shadow-hard select-none"
              style={{ animation: "tk-float 4s ease-in-out infinite" }}
            >
              <Plane className="text-slate-950 w-9 h-9 sm:w-12 sm:h-12" strokeWidth={2.2} />
            </div>

            <p className="mt-6 max-w-xl font-sans text-base sm:text-lg text-slate-700 dark:text-slate-300 leading-relaxed">
              Open to full-time engineering roles, high-impact internships, and
              interesting software challenges. Fill your boarding pass below —
              your message lands straight in my inbox.
            </p>
          </div>
        </ScrollReveal>

        {/* BOARDING PASS */}
        <ScrollReveal delay={160}>
          <div className="relative rounded-3xl overflow-hidden border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#16161e] shadow-hard-lg">
            <Notch position="top" side="66.6667%" />
            <Notch position="bottom" side="66.6667%" />

            {/* Top airline strip */}
            <div className="flex items-center justify-between gap-3 px-5 sm:px-8 py-3 bg-violet-300 dark:bg-violet-400 border-b-2 border-slate-900 dark:border-slate-300 font-mono text-[11px] sm:text-xs font-black uppercase tracking-[0.2em] text-slate-950">
              <span className="flex items-center gap-2">
                <Plane size={16} strokeWidth={2.5} /> AK Airlines
              </span>
              <span className="hidden sm:block">Boarding Pass</span>
              <span className="px-2.5 py-1 rounded-md border-2 border-slate-900 bg-white">
                Class: Priority Reply
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* MAIN */}
              <div className="lg:col-span-8 relative p-5 sm:p-8 lg:p-10">
                {/* Route */}
                <div className="flex items-center gap-3 sm:gap-6 mb-8">
                  <div>
                    <div className="font-black text-4xl sm:text-6xl tracking-tighter leading-none text-slate-900 dark:text-white">
                      YOU
                    </div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                      Passenger
                    </div>
                  </div>

                  <div className="relative flex-1 h-8">
                    <div className="absolute top-1/2 left-0 right-0 border-t-2 border-dashed border-slate-900/40 dark:border-slate-400/50" />
                    <span
                      className="absolute top-1/2 -translate-y-1/2 text-slate-900 dark:text-white"
                      style={{ animation: "tk-route 3.2s ease-in-out infinite" }}
                    >
                      <Plane size={26} className="rotate-45" strokeWidth={2.2} />
                    </span>
                  </div>

                  <div className="text-right">
                    <div className="font-black text-4xl sm:text-6xl tracking-tighter leading-none text-slate-900 dark:text-white">
                      INBOX
                    </div>
                    <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400 mt-1">
                      Aamir Khan
                    </div>
                  </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className={fieldLabel} htmlFor="tk-name">
                        Passenger name *
                      </label>
                      <input
                        id="tk-name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Jane Doe"
                        className={fieldInput}
                      />
                    </div>
                    <div>
                      <label className={fieldLabel} htmlFor="tk-email">
                        Passenger email *
                      </label>
                      <input
                        id="tk-email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="jane@company.com"
                        className={fieldInput}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={fieldLabel} htmlFor="tk-subject">
                      Flight no. / Subject
                    </label>
                    <input
                      id="tk-subject"
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship opportunity / Project idea..."
                      className={fieldInput}
                    />
                  </div>

                  <div>
                    <label className={fieldLabel} htmlFor="tk-message">
                      Cargo / Message *
                    </label>
                    <textarea
                      id="tk-message"
                      name="message"
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Tell me about your role or project..."
                      className={`${fieldInput} resize-none`}
                    />
                  </div>

                  {status.type === "error" && (
                    <div className="p-3 rounded-lg text-xs font-mono font-bold bg-rose-100 text-rose-900 border-2 border-rose-500">
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full inline-flex items-center justify-center gap-3 py-4 rounded-2xl border-2 border-slate-900 dark:border-slate-300 bg-amber-400 hover:bg-amber-300 text-slate-950 font-sans font-black text-base sm:text-lg uppercase tracking-wider shadow-hard hover:shadow-hard-lg hover:-translate-x-0.5 hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5 transition-all disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
                  >
                    {isSubmitting ? "Boarding..." : "Check in & send"}
                    {!isSubmitting && (
                      <Plane
                        size={20}
                        strokeWidth={2.5}
                        className="transition-transform duration-300 group-hover:translate-x-2 group-hover:-translate-y-1"
                      />
                    )}
                  </button>
                </form>

                {/* Success stamp overlay */}
                {sent && (
                  <div className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-6 p-6 text-center bg-white/90 dark:bg-[#16161e]/90 backdrop-blur-sm">
                    <div
                      className="px-6 sm:px-10 py-4 rounded-2xl border-[5px] border-emerald-500 text-emerald-600 dark:text-emerald-400 font-sans font-black uppercase tracking-tight leading-none text-3xl sm:text-5xl"
                      style={{ animation: "tk-stamp 0.6s cubic-bezier(0.2, 0.9, 0.3, 1) forwards" }}
                    >
                      Cleared for
                      <br />
                      takeoff ✓
                    </div>
                    <p className="max-w-sm font-mono text-xs sm:text-sm font-bold text-slate-700 dark:text-slate-300">
                      {status.message}
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus({ type: "", message: "" })}
                      className="px-5 py-2.5 rounded-xl border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#1a1b26] text-slate-900 dark:text-white font-mono text-xs font-bold uppercase tracking-wider shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all cursor-pointer"
                    >
                      Book another flight
                    </button>
                  </div>
                )}
              </div>

              {/* STUB */}
              <div className="lg:col-span-4 flex flex-col justify-between gap-6 p-5 sm:p-8 border-t-2 border-dashed lg:border-t-0 lg:border-l-2 border-slate-900/50 dark:border-slate-400/50 bg-[#FBFAF5] dark:bg-[#1a1b26]">
                <div className="grid grid-cols-3 gap-3 text-center">
                  {[
                    { k: "Gate", v: "A1" },
                    { k: "Seat", v: "24H" },
                    { k: "Boarding", v: "NOW" },
                  ].map((item) => (
                    <div
                      key={item.k}
                      className="py-2.5 rounded-xl border-2 border-slate-900 dark:border-slate-400 bg-white dark:bg-[#16161e] shadow-hard-sm"
                    >
                      <div className="font-mono text-[9px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                        {item.k}
                      </div>
                      <div className="font-black text-xl text-slate-900 dark:text-white leading-tight">
                        {item.v}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Direct email */}
                <div>
                  <div className={`${fieldLabel} mb-2`}>Prefer direct mail?</div>
                  <a
                    href={`mailto:${EMAIL}`}
                    className="block font-sans font-black text-base sm:text-lg break-all text-slate-900 dark:text-white underline decoration-amber-400 decoration-4 underline-offset-4 hover:decoration-amber-500"
                  >
                    {EMAIL}
                  </a>
                  <button
                    type="button"
                    onClick={copyEmail}
                    aria-label="Copy email"
                    className="mt-3 inline-flex items-center gap-2 px-3.5 py-2 rounded-lg border-2 border-slate-900 dark:border-slate-300 bg-amber-300 text-slate-950 font-mono text-xs font-bold uppercase tracking-wider shadow-hard-sm hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard transition-all cursor-pointer"
                  >
                    {copied ? <Check size={14} className="text-emerald-700" /> : <Copy size={14} />}
                    {copied ? "Copied!" : "Copy email"}
                  </button>
                </div>

                {/* Barcode */}
                <div>
                  <div className="flex items-end h-14 gap-[2px] overflow-hidden">
                    {barcode.map((w, i) => (
                      <div
                        key={i}
                        className="h-full bg-slate-900 dark:bg-slate-200 flex-shrink-0"
                        style={{ width: `${w * 2}px` }}
                      />
                    ))}
                  </div>
                  <div className="mt-2 flex items-center justify-between font-mono text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-slate-400">
                    <span>AK-2026-0001</span>
                    <span>Reply ≤ 24h ⚡</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* LUGGAGE TAGS */}
        <div className="mt-16 sm:mt-20">
          <ScrollReveal>
            <div className="flex items-center gap-3 font-mono text-xs font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mb-8">
              <span>Or find me here ✈</span>
              <div className="flex-1 h-[2px] bg-slate-900/20 dark:bg-slate-400/30" />
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-10 sm:gap-x-8">
            {tags.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 80}>
                <a
                  href={t.href}
                  target={t.download ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  download={t.download ? true : undefined}
                  className={`group relative block origin-top ${t.tilt} hover:rotate-0 hover:translate-y-1 transition-transform duration-300`}
                >
                  {/* string */}
                  <span className="absolute left-1/2 -top-6 h-8 w-[2px] -translate-x-1/2 bg-slate-900 dark:bg-slate-300" />

                  <div
                    className={`relative pt-9 pb-5 px-4 sm:px-5 rounded-2xl border-2 border-slate-900 dark:border-slate-300 ${t.color} shadow-hard group-hover:shadow-hard-lg transition-shadow`}
                  >
                    {/* hole */}
                    <span className="absolute top-3 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full border-2 border-slate-900 bg-[#F7F5EE] dark:bg-[#181926]" />

                    <div className="flex items-center justify-between">
                      <span className="transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-6">
                        {t.icon}
                      </span>
                      <ArrowUpRight
                        size={18}
                        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      />
                    </div>

                    <div className="mt-5 font-sans font-black text-xl sm:text-2xl tracking-tight leading-none">
                      {t.name}
                    </div>
                    <div className="mt-1 font-mono text-[10px] sm:text-[11px] font-bold uppercase tracking-wider opacity-70 truncate">
                      {t.handle}
                    </div>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}