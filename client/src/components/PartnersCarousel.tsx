import { useRef, useEffect } from "react";
import { Building2, Globe, Star } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

// International partners
const internationalPartners = [
  { name: "Émirats Arabes Unis", nameAr: "الإمارات العربية المتحدة", flag: "🇦🇪", type: "Partenaire Stratégique", color: "oklch(0.35 0.14 152)" },
  { name: "République Populaire de Chine", nameAr: "جمهورية الصين الشعبية", flag: "🇨🇳", type: "Partenaire Technologique", color: "oklch(0.42 0.22 25)" },
];

// Partner companies
const partnerCompanies = [
  { name: "OCP Group", sector: "Industrie & Engrais", logo: "/partners/mondialmedia.png", color: "#1a5c38" },
  { name: "Royal Air Maroc", sector: "Transport Aérien", logo: "/partners/2.jpeg", color: "#c41e3a" },
  { name: "Attijariwafa Bank", sector: "Secteur Bancaire", logo: "/partners/3.jpeg", color: "#b8860b" },
  { name: "Maroc Telecom", sector: "Télécommunications", logo: "/partners/bitap.png", color: "#1a5c38" },
  { name: "CDG Capital", sector: "Investissement", logo: "/partners/leaders.png", color: "#c41e3a" },
  { name: "BCP", sector: "Banque & Finance", logo: "/partners/6.jpeg", color: "#b8860b" },
  { name: "Inwi", sector: "Télécom & Digital", logo: "/partners/7.jpeg", color: "#1a5c38" },
  { name: "Bank of Africa", sector: "Services Financiers", logo: "/partners/bsc.png", color: "#c41e3a" },
  { name: "Managem", sector: "Mines & Industrie", logo: "/partners/9.jpeg", color: "#b8860b" },
];

// Duplicate for seamless loop
const allCompanies = [...partnerCompanies, ...partnerCompanies];

export default function PartnersCarousel() {
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="py-20 relative overflow-hidden" ref={ref}
      style={{ background: "linear-gradient(180deg, oklch(0.99 0.005 240) 0%, oklch(0.96 0.02 152) 50%, oklch(0.99 0.005 240) 100%)" }}
    >
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10">
        {/* Header */}
        <div className="container text-center mb-14 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
            style={{ background: "oklch(0.35 0.14 152 / 0.1)", color: "oklch(0.35 0.14 152)", border: "1px solid oklch(0.35 0.14 152 / 0.25)" }}
          >
            <Globe size={14} />
            {t("partners.title")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            <span className="gradient-text-moroccan">{t("partners.title")}</span>
          </h2>
          <p className="text-[oklch(0.50_0.04_240)] max-w-xl mx-auto text-base">
            {t("partners.subtitle")}
          </p>
        </div>

        {/* International Partners */}
        {/* <div className="container mb-14 reveal" style={{ animationDelay: "0.1s" }}>
          <div className="flex items-center gap-2 mb-6">
            <Star size={16} style={{ color: "oklch(0.68 0.15 75)" }} />
            <h3 className="font-bold text-[oklch(0.15_0.04_240)] text-lg">{t("partners.intl")}</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl">
            {internationalPartners.map((partner) => (
              <div
                key={partner.name}
                className="group relative flex items-center gap-5 p-6 rounded-3xl bg-white border-2 transition-all duration-400 card-3d"
                style={{
                  borderColor: `${partner.color}30`,
                  boxShadow: `0 4px 20px ${partner.color}15`,
                }}
              >
                <div
                  className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                  style={{ background: `radial-gradient(circle at 30% 50%, ${partner.color}08 0%, transparent 70%)` }}
                />

                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-4xl flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${partner.color}10`, border: `2px solid ${partner.color}25` }}
                >
                  {partner.flag}
                </div>

                <div className="relative z-10">
                  <div className="font-black text-[oklch(0.15_0.04_240)] text-base leading-tight mb-1">
                    {lang === "ar" ? partner.nameAr : partner.name}
                  </div>
                  <div
                    className="text-xs font-semibold px-2 py-0.5 rounded-full inline-block"
                    style={{ background: `${partner.color}15`, color: partner.color }}
                  >
                    {partner.type}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div> */}

        {/* Companies Carousel */}
        <div className="reveal" style={{ animationDelay: "0.2s" }}>
          {/* <div className="container mb-6 flex items-center gap-2">
            <Building2 size={16} style={{ color: "oklch(0.35 0.14 152)" }} />
            <h3 className="font-bold text-[oklch(0.15_0.04_240)] text-lg">{t("partners.companies")}</h3>
          </div> */}

          {/* Scrolling track */}
          <div className="relative overflow-hidden py-4">
            {/* Fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[oklch(0.96_0.02_152)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[oklch(0.96_0.02_152)] to-transparent z-10 pointer-events-none" />

            <div className="partners-track">
              {allCompanies.map((company, i) => (
                <div
                  key={`${company.name}-${i}`}
                  className="flex-shrink-0 group flex items-center justify-center p-6 rounded-2xl bg-white border transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    borderColor: `${company.color}20`,
                    boxShadow: "0 4px 12px oklch(0.15 0.04 240 / 0.04)",
                    width: "140px",
                    height: "100px",
                  }}
                >
                  <div
                    className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105"
                  >
                    <img src={company.logo} alt={company.name} className="w-full h-full object-contain filter group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Second row (reverse direction) */}
          <div className="relative overflow-hidden py-4 mt-2">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[oklch(0.96_0.02_152)] to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[oklch(0.96_0.02_152)] to-transparent z-10 pointer-events-none" />

            <div
              className="flex gap-8"
              style={{ animation: "scroll-left 20s linear infinite reverse", width: "max-content" }}
            >
              {[...allCompanies].reverse().map((company, i) => (
                <div
                  key={`rev-${company.name}-${i}`}
                  className="flex-shrink-0 group flex items-center justify-center p-6 rounded-2xl bg-white border transition-all duration-300 hover:scale-110 cursor-pointer"
                  style={{
                    borderColor: `${company.color}20`,
                    boxShadow: "0 4px 12px oklch(0.15 0.04 240 / 0.04)",
                    width: "140px",
                    height: "100px",
                  }}
                >
                  <div
                    className="w-full h-full rounded-xl flex items-center justify-center overflow-hidden transition-transform duration-500 group-hover:scale-105"
                  >
                    <img src={company.logo} alt={company.name} className="w-full h-full object-contain filter  group-hover:grayscale-0 transition-all duration-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
