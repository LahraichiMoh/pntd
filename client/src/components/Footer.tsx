import { Mail, Phone, Smartphone, MapPin, Globe, Heart, Facebook, Instagram } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

const LOGO_URL = "/logo-w.png";

// Grid pattern with plus signs (same as Hero)
function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.05]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="footer-grid-plus" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 15v10M15 20h10" stroke="currentColor" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#footer-grid-plus)" className="text-[#c5a059]" />
    </svg>
  );
}

// Royal Emblem SVG (Crescent and Star)
function RoyalEmblem() {
  return (
    <div className="relative w-16 h-16 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-[#c5a059] opacity-20 animate-pulse" />
      <div className="absolute inset-1 rounded-full border border-[#c5a059] opacity-30" />
      <svg viewBox="0 0 100 100" className="w-8 h-8 fill-[#c5a059]">
        <path d="M50 20 C33.4 20 20 33.4 20 50 C20 66.6 33.4 80 50 80 C40 80 32 72 32 50 C32 28 40 20 50 20 Z" />
        <path d="M60 45 L64 54 L73 54 L66 60 L68 69 L60 63 L52 69 L54 60 L47 54 L56 54 Z" />
      </svg>
    </div>
  );
}

export default function Footer() {
  const { t, dir } = useLanguage();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/pntd.maroc" },
    // { icon: Twitter, href: "#" },
    { icon: Instagram, href: "https://www.instagram.com/pntd2026/" },
    // { icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="relative bg-[#062016] text-white overflow-hidden border-t border-[#c5a059]/20">
      <GridPattern />
      
      {/* Decorative gradient */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#c5a059]/50 to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand Section */}
          <div className={`flex flex-col gap-6 ${dir === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}>
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="absolute inset-0  blur-md group-hover:blur-lg transition-all" />
                <img 
                  src={LOGO_URL} 
                  alt="PNTD" 
                  className="relative w-40 h-20  object-contain p-1" 
                />
              </div>
              
            </div>
            
            <p className="text-white/50 text-sm leading-relaxed max-w-xs font-serif italic">
              {t("footer.desc")}
            </p>

            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-[#c5a059] hover:border-[#c5a059]/40 transition-all hover:-translate-y-1"
                  target="_blank"
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation Section */}
          <div className={`flex flex-col gap-8 ${dir === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}>
            <h4 className="text-[#c5a059] text-xs tracking-[0.3em] font-bold uppercase">
              {t("footer.nav_title")}
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { label: t("nav.home"), id: "hero" },
                { label: t("nav.about"), id: "about" },
                { label: t("nav.regions"), id: "regions" },
                { label: t("nav.vision"), id: "vision" },
                { label: t("nav.join"), id: "join" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-white/40 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className={`w-1 h-1 rounded-full bg-[#c5a059] opacity-0 group-hover:opacity-100 transition-opacity ${dir === 'rtl' ? 'order-last' : ''}`} />
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className={`flex flex-col gap-8 ${dir === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}>
            <h4 className="text-[#c5a059] text-xs tracking-[0.3em] font-bold uppercase">
              {t("footer.contact_title")}
            </h4>
            <ul className="flex flex-col gap-6">
              {[
                { icon: Mail, text: "contact@digimaroc.org", href: "mailto:contact@digimaroc.org" },
                { icon: Smartphone, text: "+212 674 31 30 15", href: "tel:+212674313015" },
                { icon: Phone, text: "+212 521 24 84 31", href: "tel:+212521248431" },
                { icon: MapPin, text: "Casablanca, Maroc" },
                { icon: Globe, text: "www.digimaroc.org", href: "https://www.digimaroc.org" },
              ].map((item, i) => (
                <li key={i} className={`flex items-center gap-4 text-sm text-white/40 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center text-[#c5a059]">
                    <item.icon size={16} />
                  </div>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="hover:text-white transition-colors"
                      target={item.href.startsWith("http") ? "_blank" : undefined}
                      rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {item.text}
                    </a>
                  ) : (
                    item.text
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter/Royal Section */}
          <div className={`flex flex-col gap-8 ${dir === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}>
            <h4 className="text-[#c5a059] text-xs tracking-[0.3em] font-bold uppercase">
              {t("hero.badge")}
            </h4>
            <div className="p-8 bg-[#0a2f1f] border border-[#c5a059]/30 rounded-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#c5a059]/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-[#c5a059]/10 transition-colors" />
              
              <div className="flex flex-col items-center gap-6 text-center">
                {/* <RoyalEmblem /> */}
                <p className="text-sm text-white/80 leading-relaxed relative z-10 italic font-serif">
                  {t("hero.quote")}
                </p>
                <div className="pt-4 border-t border-[#c5a059]/20 w-full relative z-10">
                  <span className="text-[10px] text-[#c5a059] font-bold tracking-[0.2em] uppercase">
                    {t("hero.quote_author")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-[10px] tracking-[0.1em] text-white/30 uppercase font-medium text-center md:text-left">
            © 2026 PNTD — {t("footer.program")}. {t("footer.rights")}.
          </p>
          <div className="flex items-center gap-2 text-[10px] tracking-[0.1em] text-white/30 uppercase font-bold">
            {t("footer.made_with")} 
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart size={12} className="text-[#c5a059] fill-[#c5a059]" />
            </motion.div>
            {t("footer.for_morocco")}
          </div>
        </div>
      </div>
    </footer>
  );
}
