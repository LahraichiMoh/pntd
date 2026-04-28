import { Mail, Phone, MapPin, Globe, Heart } from "lucide-react";

const LOGO_URL = "/manus-storage/pntd-logo_9f2d93ad.png";

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden border-t border-[oklch(0.38_0.14_152/0.2)]">
      <div className="absolute inset-0 bg-[oklch(0.05_0.02_240)]" />
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="oklch(0.75 0.15 75)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container py-16">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src={LOGO_URL} alt="PNTD" className="w-12 h-12 rounded-full border border-[oklch(0.38_0.14_152/0.4)]" />
              <div>
                <div className="text-xl font-black gradient-text-moroccan">PNTD</div>
                <div className="text-xs text-[oklch(0.60_0.03_240)] tracking-wider">Programme National de Transformation Digitale</div>
              </div>
            </div>
            <p className="text-[oklch(0.60_0.03_240)] text-sm leading-relaxed mb-4 max-w-xs">
              Enrichi par l'Intelligence Artificielle, le PNTD propulse le Maroc vers un avenir numérique prometteur aligné avec la Vision 2030.
            </p>
            <div
              className="text-lg font-bold text-arabic"
              style={{ fontFamily: "'Noto Sans Arabic', 'Cairo', sans-serif", direction: "rtl", color: "oklch(0.75 0.15 75)" }}
            >
              نحو مستقبل رقمي واعد
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-bold text-[oklch(0.85_0.02_240)] mb-4 uppercase tracking-widest">Navigation</h4>
            <ul className="space-y-2">
              {[
                { label: "Accueil", id: "hero" },
                { label: "À propos", id: "about" },
                { label: "Régions", id: "regions" },
                { label: "Avantages", id: "advantages" },
                { label: "Partenaires", id: "partners" },
                { label: "Rejoindre", id: "join" },
              ].map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(item.id)}
                    className="text-sm text-[oklch(0.60_0.03_240)] hover:text-[oklch(0.75_0.15_75)] transition-colors duration-200"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-bold text-[oklch(0.85_0.02_240)] mb-4 uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-[oklch(0.60_0.03_240)]">
                <Mail size={14} className="text-[oklch(0.38_0.14_152)] flex-shrink-0" />
                contact@pntd.ma
              </li>
              <li className="flex items-center gap-2 text-sm text-[oklch(0.60_0.03_240)]">
                <Phone size={14} className="text-[oklch(0.38_0.14_152)] flex-shrink-0" />
                +212 5XX XXX XXX
              </li>
              <li className="flex items-center gap-2 text-sm text-[oklch(0.60_0.03_240)]">
                <MapPin size={14} className="text-[oklch(0.38_0.14_152)] flex-shrink-0" />
                Rabat, Maroc
              </li>
              <li className="flex items-center gap-2 text-sm text-[oklch(0.60_0.03_240)]">
                <Globe size={14} className="text-[oklch(0.38_0.14_152)] flex-shrink-0" />
                www.pntd.ma
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-[oklch(0.38_0.14_152/0.15)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[oklch(0.45_0.03_240)]">
            © 2024 PNTD — Programme National de Transformation Digitale. Tous droits réservés.
          </p>
          <div className="flex items-center gap-1 text-xs text-[oklch(0.45_0.03_240)]">
            Fait avec <Heart size={12} className="text-[oklch(0.45_0.22_25)] mx-1" /> pour le Maroc Digital
          </div>
        </div>
      </div>
    </footer>
  );
}
