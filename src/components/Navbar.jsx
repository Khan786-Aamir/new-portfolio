import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import { Sun, Moon, Menu, X, Download } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Work", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
        scrolled
          ? "bg-[#F7F5EE]/95 dark:bg-[#16161E]/95 backdrop-blur-md border-b-2 border-slate-900 dark:border-slate-400 shadow-xs"
          : "bg-[#F7F5EE]/80 dark:bg-[#16161E]/80 backdrop-blur-sm border-b-2 border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
        {/* Logo Mark: AK. in accent box */}
        <a
          href="#root"
          onClick={(e) => handleLinkClick(e, "#root")}
          className="flex items-center gap-3 group focus:outline-none"
        >
          <div className="w-10 h-10 border-2 border-slate-900 dark:border-slate-300 rounded-lg bg-amber-400 text-slate-950 font-black text-sm tracking-tight flex items-center justify-center shadow-hard-sm group-hover:translate-x-[-1px] group-hover:translate-y-[-1px] group-hover:shadow-hard transition-all">
            AK<span className="text-slate-900 font-serif italic">.</span>
          </div>
          <span className="font-bold text-sm text-slate-900 dark:text-white hidden sm:block tracking-tight">
            Aamir Khan
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3.5 py-1.5 text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-slate-950 dark:hover:text-white rounded-lg hover:bg-black/[0.05] dark:hover:bg-white/[0.06] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right Controls: Theme Toggle & Resume CTA */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          {/* Theme Switcher Button */}
          <button
            type="button"
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#1e1e2e] text-slate-900 dark:text-slate-100 flex items-center justify-center shadow-hard-sm hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-hard active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all cursor-pointer"
            aria-label="Switch theme"
            title={`Switch to ${theme === "dark" ? "Light" : "Dark"} Mode`}
          >
            {theme === "dark" ? (
              <Sun size={17} className="text-amber-400 hover:text-slate-950" />
            ) : (
              <Moon size={17} className="text-slate-900" />
            )}
          </button>

          {/* Resume PDF Download Button */}
          <a
            href="/resume.pdf"
            download
            className="inline-flex items-center gap-1.5 h-10 px-4 rounded-full border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#1e1e2e] text-slate-900 dark:text-slate-100 text-xs sm:text-sm font-semibold shadow-hard-sm hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-hard active:translate-x-[1px] active:translate-y-[1px] active:shadow-none transition-all"
          >
            <span>Résumé</span>
            <span className="hidden sm:inline font-mono text-[11px] text-slate-500 dark:text-slate-400">PDF ↓</span>
          </a>

          {/* Mobile Menu Hamburger */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-10 h-10 rounded-lg border-2 border-slate-900 dark:border-slate-300 bg-white dark:bg-[#1e1e2e] text-slate-900 dark:text-slate-100 md:hidden flex items-center justify-center shadow-hard-sm focus:outline-none"
            aria-label="Open menu"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b-2 border-slate-900 dark:border-slate-400 bg-[#F7F5EE] dark:bg-[#16161E] px-5 py-4 shadow-lg">
          <nav className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-4 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 font-semibold text-sm text-slate-800 dark:text-slate-200 hover:bg-amber-300 hover:text-slate-950 hover:border-slate-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
