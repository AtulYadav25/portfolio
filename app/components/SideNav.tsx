"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import {
  PiHouseBold,
  PiBriefcaseBold,
  PiCodeBold,
  PiArticleBold,
  PiEnvelopeBold,
  PiUserBold,
  PiListBold,
  PiXBold,
} from "react-icons/pi";

const navItems = [
  { name: "Home", href: "/", icon: PiHouseBold, section: "hero" },
  { name: "About", href: "/#about", icon: PiUserBold, section: "about" },
  { name: "Work", href: "/#experience", icon: PiBriefcaseBold, section: "experience" },
  { name: "Projects", href: "/#projects", icon: PiCodeBold, section: "projects" },
  { name: "Blog", href: "/blog", icon: PiArticleBold, section: null },
  { name: "Contact", href: "/contact", icon: PiEnvelopeBold, section: null },
];

export function SideNav() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    if (pathname !== "/") return;

    const handleScroll = () => {
      const sections = ["hero", "about", "experience", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, section: string | null) => {
    if (section && pathname === "/") {
      e.preventDefault();
      const element = document.getElementById(section);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-6 right-6 z-50 lg:hidden glass rounded-full p-3 text-foreground hover:text-primary transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <PiXBold size={24} /> : <PiListBold size={24} />}
      </button>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/90 backdrop-blur-lg z-40 lg:hidden"
            onClick={() => setIsOpen(false)}
          >
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-64 bg-card border-l border-border p-8 pt-24"
              onClick={(e) => e.stopPropagation()}
            >
              <ul className="space-y-2">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = item.section
                    ? activeSection === item.section
                    : pathname === item.href || pathname.startsWith(item.href + "/");

                  return (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        onClick={(e) => handleNavClick(e, item.href, item.section)}
                        className={`flex items-center gap-4 px-4 py-3 rounded-lg transition-all ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                        }`}
                      >
                        <Icon size={20} />
                        <span className="font-medium">{item.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Side Navigation */}
      <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="glass rounded-2xl p-2">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = item.section
                ? activeSection === item.section
                : pathname === item.href || pathname.startsWith(item.href + "/");

              return (
                <li key={item.name} className="relative">
                  <Link
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href, item.section)}
                    onMouseEnter={() => setHoveredItem(item.name)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`relative flex items-center justify-center w-12 h-12 rounded-xl transition-all duration-300 ${
                      isActive
                        ? "bg-primary text-primary-foreground glow-cyan"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                    aria-label={item.name}
                  >
                    <Icon size={20} />
                  </Link>

                  {/* Tooltip */}
                  <AnimatePresence>
                    {hoveredItem === item.name && (
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.15 }}
                        className="absolute left-full ml-3 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-card border border-border rounded-lg whitespace-nowrap text-sm font-medium"
                      >
                        {item.name}
                        <div className="absolute right-full top-1/2 -translate-y-1/2 border-8 border-transparent border-r-card" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
}
