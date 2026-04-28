import { useEffect, useRef, useState } from "react";
import { ArrowRight, Smartphone, Globe, Zap, TrendingUp } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    key: "apps",
    icon: Smartphone,
    emoji: "📱",
    gradient: "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.45 0.18 160))",
    bgImage: "/manus-storage/service-apps_4b974bb3.jpg",
    accentColor: "oklch(0.35 0.14 152)",
    tag: "Mobile & Web",
  },
  {
    key: "web",
    icon: Globe,
    emoji: "🌐",
    gradient: "linear-gradient(135deg, oklch(0.42 0.22 25), oklch(0.52 0.26 30))",
    bgImage: "/manus-storage/service-web_37885161.webp",
    accentColor: "oklch(0.42 0.22 25)",
    tag: "Design & UX",
  },
  {
    key: "solutions",
    icon: Zap,
    emoji: "⚡",
    gradient: "linear-gradient(135deg, oklch(0.55 0.18 75), oklch(0.65 0.22 80))",
    bgImage: "/manus-storage/service-solutions_9d8dadaa.png",
    accentColor: "oklch(0.55 0.18 75)",
    tag: "Tech & IA",
  },
  {
    key: "marketing",
    icon: TrendingUp,
    emoji: "📈",
    gradient: "linear-gradient(135deg, oklch(0.42 0.22 25), oklch(0.35 0.14 152))",
    bgImage: "/manus-storage/service-marketing_4c11ec9a.png",
    accentColor: "oklch(0.42 0.22 25)",
    tag: "Growth & SEO",
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
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
    <section id="services" className="py-20 relative overflow-hidden bg-white" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Subtle background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="oklch(0.35 0.14 152)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" />
        </svg>
      </div>

      <div className="relative z-10 container">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
            style={{ background: "oklch(0.35 0.14 152 / 0.1)", color: "oklch(0.35 0.14 152)", border: "1px solid oklch(0.35 0.14 152 / 0.25)" }}
          >
            <Zap size={14} />
            {t("services.title")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            <span className="gradient-text-moroccan">{t("services.title")}</span>
          </h2>
          <p className="text-[oklch(0.50_0.04_240)] max-w-xl mx-auto text-base">
            {t("services.subtitle")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isHovered = hoveredCard === service.key;

            return (
              <div
                key={service.key}
                className="reveal group relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500"
                style={{
                  animationDelay: `${i * 0.1}s`,
                  transform: isHovered ? "translateY(-8px) scale(1.02)" : "translateY(0) scale(1)",
                  boxShadow: isHovered
                    ? `0 24px 60px ${service.accentColor}35, 0 0 0 2px ${service.accentColor}40`
                    : "0 4px 20px oklch(0.15 0.04 240 / 0.08)",
                }}
                onMouseEnter={() => setHoveredCard(service.key)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={service.bgImage}
                    alt={t(`services.${service.key}.title`)}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div
                    className="absolute inset-0 transition-opacity duration-500"
                    style={{
                      background: isHovered
                        ? `linear-gradient(180deg, ${service.accentColor}90 0%, ${service.accentColor}f0 100%)`
                        : `linear-gradient(180deg, oklch(0.15 0.04 240 / 0.3) 0%, oklch(0.05 0.02 240 / 0.92) 100%)`,
                    }}
                  />
                </div>

                {/* Content */}
                <div className="relative z-10 p-6 flex flex-col h-full min-h-[280px]">
                  {/* Tag */}
                  <div
                    className="self-start px-2.5 py-1 rounded-full text-xs font-bold text-white mb-auto"
                    style={{ background: "rgba(255,255,255,0.2)", backdropFilter: "blur(8px)" }}
                  >
                    {service.tag}
                  </div>

                  {/* Icon */}
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{
                      background: "rgba(255,255,255,0.15)",
                      backdropFilter: "blur(12px)",
                      border: "1px solid rgba(255,255,255,0.3)",
                    }}
                  >
                    <Icon size={24} className="text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-white font-black text-lg leading-tight mb-2">
                    {t(`services.${service.key}.title`)}
                  </h3>

                  {/* Description */}
                  <p
                    className="text-white/80 text-sm leading-relaxed mb-4 transition-all duration-300"
                    style={{
                      maxHeight: isHovered ? "120px" : "60px",
                      overflow: "hidden",
                    }}
                  >
                    {t(`services.${service.key}.desc`)}
                  </p>

                  {/* CTA */}
                  <button
                    className="flex items-center gap-2 text-white text-sm font-semibold group/btn transition-all duration-300"
                    style={{ opacity: isHovered ? 1 : 0.7 }}
                  >
                    {t("services.discover")}
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover/btn:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
