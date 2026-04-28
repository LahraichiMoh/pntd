import { useEffect, useRef } from "react";
import { BookOpen, ShoppingCart, Users, Award, Cpu, Shield, CheckCircle2, Globe, Rocket, GraduationCap, Briefcase, Building2, TrendingUp, Handshake } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const sectorIcons = [Users, GraduationCap, Briefcase, ShoppingCart, Shield, Building2];
const sectorKeys = ["social", "edu", "entre", "ecom", "quality", "gov"];
const sectorColors = [
  "oklch(0.35 0.14 152)",
  "oklch(0.42 0.22 25)",
  "oklch(0.68 0.15 75)",
  "oklch(0.35 0.14 152)",
  "oklch(0.42 0.22 25)",
  "oklch(0.68 0.15 75)",
];

const advIcons = [Award, Globe, TrendingUp, Handshake];
const advKeys = ["cert", "infra", "market", "support"];
const advColors = [
  "oklch(0.35 0.14 152)",
  "oklch(0.42 0.22 25)",
  "oklch(0.68 0.15 75)",
  "oklch(0.35 0.14 152)",
];

export default function AboutSection() {
  const { t } = useLanguage();
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
    <div ref={ref}>
      {/* About Section */}
      <section id="about" className="py-20 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />

        {/* Subtle zellige background */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="about-zellige" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="none" stroke="oklch(0.35 0.14 152)" strokeWidth="1" />
                <circle cx="40" cy="40" r="12" fill="none" stroke="oklch(0.68 0.15 75)" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#about-zellige)" />
          </svg>
        </div>

        <div className="relative z-10 container">
          {/* Header */}
          <div className="text-center mb-14 reveal">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
              style={{ background: "oklch(0.35 0.14 152 / 0.1)", color: "oklch(0.35 0.14 152)", border: "1px solid oklch(0.35 0.14 152 / 0.25)" }}
            >
              <BookOpen size={14} />
              {t("about.subtitle")}
            </div>
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              <span className="gradient-text-moroccan">{t("about.title")}</span>
            </h2>
          </div>

          {/* Vision cards */}
          <div className="grid md:grid-cols-2 gap-6 mb-14">
            <div
              className="reveal group bg-white rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-2"
              style={{ borderColor: "oklch(0.88 0.02 240)", boxShadow: "0 4px 20px oklch(0.35 0.14 152 / 0.06)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "oklch(0.35 0.14 152 / 0.12)" }}
              >
                <Rocket size={22} style={{ color: "oklch(0.35 0.14 152)" }} />
              </div>
              <h3 className="text-lg font-black text-[oklch(0.15_0.04_240)] mb-3">
                {t("about.p1").split(".")[0]}
              </h3>
              <p className="text-[oklch(0.45_0.04_240)] leading-relaxed text-sm">
                {t("about.p1")}
              </p>
            </div>

            <div
              className="reveal group bg-white rounded-3xl p-7 border transition-all duration-300 hover:-translate-y-2"
              style={{ animationDelay: "0.15s", borderColor: "oklch(0.88 0.02 240)", boxShadow: "0 4px 20px oklch(0.68 0.15 75 / 0.06)" }}
            >
              <div
                className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
                style={{ background: "oklch(0.68 0.15 75 / 0.12)" }}
              >
                <Globe size={22} style={{ color: "oklch(0.68 0.15 75)" }} />
              </div>
              <h3 className="text-lg font-black text-[oklch(0.15_0.04_240)] mb-3">
                {t("about.p2").split(".")[0]}
              </h3>
              <p className="text-[oklch(0.45_0.04_240)] leading-relaxed text-sm">
                {t("about.p2")}
              </p>
            </div>
          </div>

          {/* Sectors */}
          <div className="reveal" style={{ animationDelay: "0.2s" }}>
            <h3 className="font-black text-[oklch(0.15_0.04_240)] text-xl mb-6 text-center">
              {t("about.sectors_title")}
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
              {sectorKeys.map((key, i) => {
                const Icon = sectorIcons[i];
                const color = sectorColors[i];
                return (
                  <div
                    key={key}
                    className="group flex flex-col items-center gap-2 p-4 rounded-2xl bg-white border transition-all duration-300 hover:-translate-y-1 text-center cursor-default"
                    style={{
                      borderColor: "oklch(0.88 0.02 240)",
                      boxShadow: "0 2px 8px oklch(0.15 0.04 240 / 0.05)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                      style={{ background: `${color}15` }}
                    >
                      <Icon size={18} style={{ color }} />
                    </div>
                    <span className="text-xs font-semibold text-[oklch(0.30_0.04_240)] leading-tight">
                      {t(`about.sector_${key}`)}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 bg-section-light relative overflow-hidden">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

        <div className="relative z-10 container">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl sm:text-4xl font-black mb-3">
              <span className="gradient-text-moroccan">{t("adv.title")}</span>
            </h2>
            <p className="text-[oklch(0.50_0.04_240)] max-w-xl mx-auto text-base">
              {t("adv.subtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {advKeys.map((key, i) => {
              const Icon = advIcons[i];
              const color = advColors[i];
              return (
                <div
                  key={key}
                  className="reveal group relative bg-white rounded-3xl p-6 border transition-all duration-400 hover:-translate-y-2 text-center overflow-hidden"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    borderColor: "oklch(0.88 0.02 240)",
                    boxShadow: "0 4px 20px oklch(0.15 0.04 240 / 0.06)",
                  }}
                >
                  {/* Top accent bar */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                    style={{ background: `linear-gradient(90deg, ${color}, ${color}80)` }}
                  />

                  {/* Background glow on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{ background: `radial-gradient(circle at 50% 0%, ${color}08 0%, transparent 70%)` }}
                  />

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110 relative z-10"
                    style={{ background: `${color}12` }}
                  >
                    <Icon size={24} style={{ color }} />
                  </div>

                  <h3 className="font-black text-[oklch(0.15_0.04_240)] text-base mb-2 relative z-10">
                    {t(`adv.${key}.title`)}
                  </h3>
                  <p className="text-[oklch(0.50_0.04_240)] text-sm leading-relaxed relative z-10">
                    {t(`adv.${key}.desc`)}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
