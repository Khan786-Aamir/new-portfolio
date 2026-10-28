import { useTheme } from "../context/ThemeContext";
import { Home, Code2, Laptop, Briefcase, Mail, FileText, Sun, Moon } from "lucide-react";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";

export default function FloatingSocial() {
  const { theme, toggleTheme } = useTheme();

  const scrollTo = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const elem = document.querySelector(id);
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const dockItems = [
    {
      label: "Home",
      onClick: () => scrollTo("top"),
      icon: <Home size={16} />,
      type: "button",
      color: "hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950",
    },
    {
      label: "About",
      onClick: () => scrollTo("#about"),
      icon: <span className="font-mono text-xs font-bold">01</span>,
      type: "button",
      color: "hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950",
    },
    {
      label: "Skills",
      onClick: () => scrollTo("#skills"),
      icon: <Code2 size={16} />,
      type: "button",
      color: "hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950",
    },
    {
      label: "Experience",
      onClick: () => scrollTo("#experience"),
      icon: <Briefcase size={16} />,
      type: "button",
      color: "hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950",
    },
    {
      label: "Work",
      onClick: () => scrollTo("#projects"),
      icon: <Laptop size={16} />,
      type: "button",
      color: "hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950",
    },
    {
      label: "Contact",
      onClick: () => scrollTo("#contact"),
      icon: <Mail size={16} />,
      type: "button",
      color: "hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950",
    },
    {
      type: "divider",
    },
    {
      label: "GitHub",
      href: "https://github.com/Khan786-Aamir",
      icon: <FaGithub size={16} />,
      type: "link",
      color: "hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/aamir-khan-278b71317",
      icon: <FaLinkedin size={16} />,
      type: "link",
      color: "hover:bg-sky-500 hover:text-white",
      hideOnMobile: true,
    },
    {
      label: "Twitter",
      href: "https://x.com/AamirKhan453200",
      icon: <FaXTwitter size={15} />,
      type: "link",
      color: "hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-slate-950",
      hideOnMobile: true,
    },
    {
      label: "CV",
      href: "/resume.pdf",
      icon: <FileText size={16} />,
      type: "link",
      color: "hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950",
    },
    {
      type: "divider",
    },
    {
      label: theme === "dark" ? "Light Mode" : "Dark Mode",
      onClick: toggleTheme,
      icon: theme === "dark" ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-slate-800" />,
      type: "button",
      color: "hover:bg-amber-300 dark:hover:bg-amber-400 dark:hover:text-slate-950",
    },
  ];

  return (
    <div className="fixed bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-50 max-w-[96vw] px-2">
      {/* Floating Dock Container */}
      <div className="relative px-3 sm:px-4 py-1.5 rounded-full flex items-center gap-1 sm:gap-2 bg-white/95 dark:bg-[#16161e]/95 text-slate-800 dark:text-slate-200 backdrop-blur-md border-2 border-slate-900 dark:border-slate-400 shadow-hard-lg transition-all duration-200">
        {dockItems.map((item, index) => {
          if (item.type === "divider") {
            return (
              <div
                key={index}
                className="w-px h-5 bg-slate-300 dark:bg-slate-700 mx-0.5 sm:mx-1 flex-shrink-0"
              />
            );
          }

          const baseClass = `relative group flex items-center justify-center p-2 rounded-lg font-bold transition-all duration-150 hover:translate-y-[-2px] active:translate-y-0 cursor-pointer ${
            item.hideOnMobile ? "hidden sm:flex" : ""
          } ${item.color || ""}`;

          const tooltip = (
            <span className="absolute -top-10 left-1/2 -translate-x-1/2 px-2.5 py-1 text-[10px] font-mono font-bold tracking-wider uppercase text-slate-950 bg-amber-300 border-2 border-slate-900 rounded-md shadow-hard-sm opacity-0 group-hover:opacity-100 transition-all duration-150 pointer-events-none scale-90 group-hover:scale-100 whitespace-nowrap z-50 hidden sm:block">
              {item.label}
            </span>
          );

          if (item.type === "button") {
            return (
              <button
                key={index}
                onClick={item.onClick}
                className={baseClass}
                aria-label={item.label}
              >
                {item.icon}
                {tooltip}
              </button>
            );
          }

          return (
            <a
              key={index}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={baseClass}
              aria-label={item.label}
            >
              {item.icon}
              {tooltip}
            </a>
          );
        })}
      </div>
    </div>
  );
}
