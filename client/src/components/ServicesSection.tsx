import { useEffect, useRef } from "react";
import { ArrowRight, Smartphone, Globe, Zap, TrendingUp } from "lucide-react";
import { useLocation } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";

const services = [
  {
    key: "apps",
    icon: Smartphone,
    accentColor: "oklch(0.35 0.14 152)",
  },
  {
    key: "web",
    icon: Globe,
    accentColor: "oklch(0.42 0.22 25)",
  },
  {
    key: "solutions",
    icon: Zap,
    accentColor: "oklch(0.55 0.18 75)",
  },
  {
    key: "marketing",
    icon: TrendingUp,
    accentColor: "oklch(0.42 0.22 25)",
  },
];

export default function ServicesSection() {
  const { t } = useLanguage();
  const [, navigate] = useLocation();
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
    <section id="services" className="py-24 relative overflow-hidden bg-background text-foreground" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="services-grid" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="currentColor" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#services-grid)" className="text-primary" />
        </svg>
      </div>

      <div className="relative z-10 container">
        <div className="mb-16 reveal">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-5 text-xs font-black tracking-widest uppercase bg-primary/10 text-primary border border-primary/20">
                <Zap size={14} />
                {t("services.title")}
              </div>
              <h2 className="text-4xl sm:text-5xl font-black mb-5 text-primary">
                {t("services.title")}
              </h2>
              <p className="text-muted-foreground max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed">
                {t("services.subtitle")}
              </p>
              <div className="mt-8 flex flex-wrap gap-3 justify-center lg:justify-start">
                <div className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-semibold text-muted-foreground">
                  Apps
                </div>
                <div className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-semibold text-muted-foreground">
                  Web
                </div>
                <div className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-semibold text-muted-foreground">
                  IA
                </div>
                <div className="px-4 py-2 rounded-xl bg-card border border-border text-sm font-semibold text-muted-foreground">
                  Marketing
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="relative w-full max-w-xl rounded-[2.5rem] overflow-hidden bg-card border border-border shadow-2xl shadow-primary/5 p-10">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-transparent to-secondary/[0.08]" />
                <div className="relative">
                  <div className="text-xs font-black tracking-widest uppercase text-primary mb-3">
                    {t("services.title")}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl border border-border bg-background/60 p-4">
                      <div className="text-2xl font-black text-foreground">4</div>
                      <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Offres</div>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/60 p-4">
                      <div className="text-2xl font-black text-foreground">AI</div>
                      <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Ready</div>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/60 p-4">
                      <div className="text-2xl font-black text-foreground">UX</div>
                      <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Design</div>
                    </div>
                    <div className="rounded-2xl border border-border bg-background/60 p-4">
                      <div className="text-2xl font-black text-foreground">SEO</div>
                      <div className="text-xs font-bold tracking-widest uppercase text-muted-foreground">Growth</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <div
                key={service.key}
                className="reveal group rounded-3xl bg-card border border-border p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary/5"
                style={{
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center border border-border shadow-sm"
                    style={{ background: `${service.accentColor}12` }}
                  >
                    <Icon size={22} style={{ color: service.accentColor }} />
                  </div>
                </div>

                <div className="mt-6">
                  <h3 className="text-xl font-black text-foreground mb-3">
                    {t(`services.${service.key}.title`)}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {t(`services.${service.key}.desc`)}
                  </p>
                </div>

                <div className="mt-8">
                  <button
                    type="button"
                    onClick={() => navigate("/join")}
                    className="btn-moroccan-gradient w-full px-5 py-3 rounded-2xl font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2"
                  >
                    {t("services.discover")}
                    <ArrowRight size={16} />
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
