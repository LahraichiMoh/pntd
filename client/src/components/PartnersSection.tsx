import { useEffect, useRef } from "react";
import { Globe, ArrowRight, Handshake, TrendingUp, Award } from "lucide-react";

const partners = [
  {
    flag: "🇦🇪",
    country: "Émirats Arabes Unis",
    title: "Partenariat Stratégique UAE",
    description:
      "Un partenariat axé sur l'échange d'expertises en transformation digitale et IA, facilitant l'accès aux marchés du Golfe pour les produits et services numériques marocains, tout en bénéficiant de l'expérience émiratie en gouvernance digitale.",
    highlights: [
      "Accès aux marchés du Golfe",
      "Expertise en gouvernance digitale",
      "Échange de bonnes pratiques IA",
    ],
    color: "oklch(0.75 0.15 75)",
    bgColor: "oklch(0.75 0.15 75 / 0.08)",
    borderColor: "oklch(0.75 0.15 75 / 0.3)",
  },
  {
    flag: "🇨🇳",
    country: "République Populaire de Chine",
    title: "Partenariat Technologique Chine",
    description:
      "Un partenariat orienté vers le transfert de technologies avancées, le développement d'infrastructures digitales et la formation de haut niveau en programmation et IA, renforçant la compétitivité du Maroc sur les marchés asiatiques.",
    highlights: [
      "Transfert de technologies avancées",
      "Formation en programmation & IA",
      "Accès aux marchés asiatiques",
    ],
    color: "oklch(0.45 0.22 25)",
    bgColor: "oklch(0.45 0.22 25 / 0.08)",
    borderColor: "oklch(0.45 0.22 25 / 0.3)",
  },
];

const stats = [
  { value: "2", label: "Partenaires Stratégiques", icon: Handshake },
  { value: "3", label: "Marchés Internationaux", icon: Globe },
  { value: "∞", label: "Opportunités Mondiales", icon: TrendingUp },
  { value: "A+", label: "Certifications Reconnues", icon: Award },
];

export default function PartnersSection() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );
    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="partners" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[oklch(0.06_0.02_240)] via-[oklch(0.09_0.03_240)] to-[oklch(0.06_0.02_240)]" />
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />
      
      {/* Glow orbs */}
      <div className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[oklch(0.75_0.15_75/0.05)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-[oklch(0.45_0.22_25/0.05)] blur-3xl pointer-events-none" />

      <div className="relative z-10 container">
        {/* Header */}
        <div className="text-center mb-16 reveal">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-[oklch(0.38_0.14_152/0.3)] text-[oklch(0.75_0.15_75)] text-xs font-semibold tracking-widest uppercase mb-4">
            <Globe size={12} />
            Partenariats Internationaux
          </div>
          <h2 className="text-4xl sm:text-5xl font-black mb-4">
            <span className="text-[oklch(0.85_0.02_240)]">Nos </span>
            <span className="gradient-text-moroccan">Partenaires</span>
          </h2>
          <p className="text-[oklch(0.65_0.03_240)] max-w-xl mx-auto text-lg">
            Des alliances stratégiques pour ouvrir le Maroc aux marchés mondiaux
          </p>
        </div>

        {/* Partner cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {partners.map((partner, i) => (
            <div
              key={partner.country}
              className="reveal card-3d group rounded-3xl p-8 relative overflow-hidden"
              style={{
                background: partner.bgColor,
                border: `1px solid ${partner.borderColor}`,
                animationDelay: `${i * 0.2}s`,
              }}
            >
              {/* Background glow */}
              <div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-500"
                style={{ background: partner.color }}
              />

              <div className="relative z-10">
                {/* Flag & Country */}
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="text-5xl animate-float"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  >
                    {partner.flag}
                  </div>
                  <div>
                    <div className="text-xs font-semibold tracking-widest uppercase" style={{ color: partner.color }}>
                      Partenaire Stratégique
                    </div>
                    <div className="text-xl font-black text-[oklch(0.85_0.02_240)]">{partner.country}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-[oklch(0.85_0.02_240)] mb-3">{partner.title}</h3>

                {/* Description */}
                <p className="text-[oklch(0.65_0.03_240)] leading-relaxed mb-5 text-sm">{partner.description}</p>

                {/* Highlights */}
                <div className="space-y-2">
                  {partner.highlights.map((h) => (
                    <div key={h} className="flex items-center gap-2 text-sm">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: partner.color }}
                      />
                      <span className="text-[oklch(0.75_0.03_240)]">{h}</span>
                    </div>
                  ))}
                </div>

                {/* Bottom accent */}
                <div
                  className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-700 rounded-full"
                  style={{ background: `linear-gradient(90deg, ${partner.color}, transparent)` }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Stats row */}
        <div className="reveal grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="glass rounded-2xl p-5 text-center group hover:scale-105 transition-transform duration-300 card-3d"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-10 h-10 rounded-xl bg-[oklch(0.38_0.14_152/0.2)] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                <stat.icon size={20} className="text-[oklch(0.38_0.14_152)]" />
              </div>
              <div className="text-2xl font-black gradient-text-moroccan">{stat.value}</div>
              <div className="text-xs text-[oklch(0.60_0.03_240)] mt-1 leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
