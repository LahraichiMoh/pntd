import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { useLanguage, Language } from "@/contexts/LanguageContext";

const LOGO_URL = "/pntd.png";

const LANGUAGES: { code: Language; label: string; flag: string }[] = [
  { code: "fr", label: "FR", flag: "🇫🇷" },
  { code: "ar", label: "AR", flag: "🇲🇦" },
  { code: "en", label: "EN", flag: "🇬🇧" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location, navigate] = useLocation();
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { key: "nav.home", href: "/" },
    { key: "nav.services", href: "/#services" },
    { key: "nav.regions", href: "/#regions" },
    { key: "nav.about", href: "/#about" },
    { key: "nav.vision", href: "/vision" },
    { key: "nav.partners", href: "/#partners" },
    { key: "nav.join", href: "/#join", highlight: true },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    if (href === "/vision") {
      navigate("/vision");
      return;
    }
    if (href === "/") {
      navigate("/");
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (href.startsWith("/#")) {
      if (location !== "/") {
        navigate("/");
        setTimeout(() => {
          const id = href.slice(2);
          const el = document.getElementById(id);
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }, 200);
      } else {
        const id = href.slice(2);
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-xl border-b shadow-sm"
          : "bg-white/80 backdrop-blur-md"
      }`}
      style={{
        borderColor: scrolled ? "oklch(0.88 0.02 240)" : "transparent",
        boxShadow: scrolled ? "0 2px 20px oklch(0.35 0.14 152 / 0.08)" : "none",
      }}
    >
      <div className="container">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <div
                className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-opacity duration-300"
                
              />
              <img
                src={LOGO_URL}
                alt="PNTD Logo"
                className="relative h-40 w-40 object-contain transition-transform"
              />
            </div>
            
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className={`relative px-4 py-2 text-sm font-semibold rounded-xl transition-all duration-300 group ${
                  link.highlight
                    ? "text-white shadow-md hover:shadow-lg hover:scale-105"
                    : "hover:bg-[oklch(0.35_0.14_152/0.08)]"
                }`}
                style={
                  link.highlight
                    ? { background: "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.42 0.22 25))" }
                    : { color: "oklch(0.30 0.04 240)" }
                }
              >
                {!link.highlight && (
                  <span
                    className="absolute bottom-0.5 left-1/2 -translate-x-1/2 w-0 h-0.5 group-hover:w-3/4 transition-all duration-300 rounded-full"
                    style={{ background: "oklch(0.35 0.14 152)" }}
                  />
                )}
                {t(link.key)}
              </button>
            ))}
          </div>

          {/* Language Switcher + Mobile menu */}
          <div className="flex items-center gap-2">
            {/* Language switcher */}
            <div className="flex items-center gap-0.5 rounded-xl border p-0.5" style={{ borderColor: "oklch(0.88 0.02 240)" }}>
              {LANGUAGES.map((l) => (
                <button
                  key={l.code}
                  onClick={() => setLang(l.code)}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-bold transition-all duration-200"
                  style={
                    lang === l.code
                      ? { background: "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.42 0.22 25))", color: "white" }
                      : { color: "oklch(0.45 0.04 240)" }
                  }
                >
                  {l.flag} {l.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-xl transition-colors"
              style={{ color: "oklch(0.30 0.04 240)" }}
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="border-t px-4 py-4 space-y-2 bg-white"
          style={{ borderColor: "oklch(0.88 0.02 240)" }}
        >
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200"
              style={
                link.highlight
                  ? { background: "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.42 0.22 25))", color: "white" }
                  : { color: "oklch(0.30 0.04 240)" }
              }
            >
              {t(link.key)}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
