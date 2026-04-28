import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { ArrowLeft, Star, Target, Lightbulb, Globe, TrendingUp, Shield, Users, Cpu } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const pillars = [
  {
    icon: Cpu,
    titleFr: "Transformation Digitale",
    titleAr: "التحول الرقمي",
    descFr: "Numériser l'ensemble des services publics et privés pour améliorer l'efficacité et l'accessibilité.",
    descAr: "رقمنة جميع الخدمات العامة والخاصة لتحسين الكفاءة وإمكانية الوصول.",
    color: "oklch(0.35 0.14 152)",
  },
  {
    icon: Users,
    titleFr: "Capital Humain",
    titleAr: "الرأسمال البشري",
    descFr: "Former 1 million de jeunes marocains aux compétences numériques d'ici 2030.",
    descAr: "تكوين مليون شاب مغربي في المهارات الرقمية بحلول عام 2030.",
    color: "oklch(0.42 0.22 25)",
  },
  {
    icon: Globe,
    titleFr: "Connectivité Nationale",
    titleAr: "الاتصال الوطني",
    descFr: "Déployer la fibre optique et la 5G dans toutes les régions du Royaume.",
    descAr: "نشر الألياف الضوئية و5G في جميع مناطق المملكة.",
    color: "oklch(0.55 0.18 75)",
  },
  {
    icon: TrendingUp,
    titleFr: "Économie Numérique",
    titleAr: "الاقتصاد الرقمي",
    descFr: "Porter la contribution du numérique au PIB à 15% d'ici 2030.",
    descAr: "رفع مساهمة الرقمي في الناتج المحلي الإجمالي إلى 15% بحلول 2030.",
    color: "oklch(0.35 0.14 152)",
  },
  {
    icon: Shield,
    titleFr: "Cybersécurité",
    titleAr: "الأمن السيبراني",
    descFr: "Renforcer la souveraineté numérique et protéger les infrastructures critiques.",
    descAr: "تعزيز السيادة الرقمية وحماية البنى التحتية الحيوية.",
    color: "oklch(0.42 0.22 25)",
  },
  {
    icon: Lightbulb,
    titleFr: "Innovation & R&D",
    titleAr: "الابتكار والبحث والتطوير",
    descFr: "Créer 50 hubs d'innovation et 500 startups technologiques à l'horizon 2030.",
    descAr: "إنشاء 50 مركزاً للابتكار و500 شركة ناشئة تقنية بحلول عام 2030.",
    color: "oklch(0.55 0.18 75)",
  },
];

const milestones = [
  { year: "2023", titleFr: "Lancement PNTD", titleAr: "إطلاق البرنامج الوطني للتحول الرقمي", done: true },
  { year: "2024", titleFr: "Déploiement régional", titleAr: "النشر الجهوي", done: true },
  { year: "2025", titleFr: "100K bénéficiaires", titleAr: "100 ألف مستفيد", done: false },
  { year: "2026", titleFr: "Hubs d'innovation", titleAr: "مراكز الابتكار", done: false },
  { year: "2028", titleFr: "500K compétences digitales", titleAr: "500 ألف كفاءة رقمية", done: false },
  { year: "2030", titleFr: "Vision accomplie", titleAr: "تحقيق الرؤية", done: false },
];

export default function VisionPage() {
  const [, navigate] = useLocation();
  const { t, lang } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
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
    <div className="min-h-screen bg-white" ref={ref}>
      <Navbar />

      {/* Hero */}
      <section
        className="relative pt-32 pb-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.35 0.14 152) 0%, oklch(0.28 0.12 152) 40%, oklch(0.42 0.22 25) 100%)",
        }}
      >
        {/* Zellige pattern overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <defs>
              <pattern id="zellige-vision" width="80" height="80" patternUnits="userSpaceOnUse">
                <polygon points="40,0 80,20 80,60 40,80 0,60 0,20" fill="none" stroke="white" strokeWidth="1" />
                <polygon points="40,10 70,25 70,55 40,70 10,55 10,25" fill="none" stroke="white" strokeWidth="0.5" />
                <circle cx="40" cy="40" r="8" fill="none" stroke="white" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#zellige-vision)" />
          </svg>
        </div>

        <div className="relative z-10 container text-center">
          <button
            onClick={() => navigate("/")}
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-8 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            {t("region.back")}
          </button>

          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-semibold text-white"
            style={{ background: "rgba(255,255,255,0.15)", border: "1px solid rgba(255,255,255,0.3)" }}
          >
            <Star size={14} />
            {t("vision.title")}
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white mb-4 leading-tight">
            {t("vision.title")}
          </h1>
          <p className="text-white/80 text-xl max-w-2xl mx-auto mb-8">
            {t("vision.subtitle")}
          </p>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {[
              { num: "2030", labelFr: "Horizon", labelAr: "الأفق" },
              { num: "12", labelFr: "Régions", labelAr: "جهة" },
              { num: "6", labelFr: "Secteurs", labelAr: "قطاع" },
              { num: "1M+", labelFr: "Bénéficiaires", labelAr: "مستفيد" },
            ].map((stat) => (
              <div key={stat.num} className="text-center">
                <div className="text-3xl font-black text-white">{stat.num}</div>
                <div className="text-white/70 text-sm">{lang === "ar" ? stat.labelAr : stat.labelFr}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Vision */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-4xl mx-auto reveal">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-black mb-6">
                  <span className="gradient-text-moroccan">
                    {lang === "ar" ? "رؤية المغرب 2030" : "La Vision Maroc 2030"}
                  </span>
                </h2>
                <p className="text-[oklch(0.40_0.04_240)] leading-relaxed mb-4">
                  {lang === "ar"
                    ? "تُجسّد رؤية المغرب 2030 طموح جلالة الملك محمد السادس لبناء مغرب رقمي، مبتكر وتنافسي على الصعيد الدولي. وتضع هذه الرؤية التحول الرقمي في صميم استراتيجية التنمية الوطنية."
                    : "La Vision Maroc 2030 incarne l'ambition de Sa Majesté le Roi Mohammed VI de construire un Maroc numérique, innovant et compétitif à l'échelle internationale. Cette vision place la transformation digitale au cœur de la stratégie de développement national."}
                </p>
                <p className="text-[oklch(0.40_0.04_240)] leading-relaxed mb-4">
                  {lang === "ar"
                    ? "يندرج البرنامج الوطني للتحول الرقمي (PNTD) ضمن هذا الإطار الاستراتيجي كأداة تنفيذية رئيسية، تهدف إلى تسريع التحول الرقمي في جميع الجهات والقطاعات."
                    : "Le Programme National de Transformation Digitale (PNTD) s'inscrit dans ce cadre stratégique comme outil d'exécution principal, visant à accélérer la transformation numérique dans toutes les régions et secteurs."}
                </p>
                <p className="text-[oklch(0.40_0.04_240)] leading-relaxed">
                  {lang === "ar"
                    ? "بفضل شراكاته الدولية مع الإمارات العربية المتحدة والصين، يستفيد البرنامج من أحدث التقنيات والخبرات العالمية في مجال الذكاء الاصطناعي والاقتصاد الرقمي."
                    : "Grâce à ses partenariats internationaux avec les Émirats Arabes Unis et la Chine, le programme bénéficie des dernières technologies et expertises mondiales en matière d'intelligence artificielle et d'économie numérique."}
                </p>
              </div>

              {/* Visual card */}
              <div className="relative">
                <div
                  className="rounded-3xl p-8 text-white relative overflow-hidden"
                  style={{ background: "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.42 0.22 25))" }}
                >
                  <div className="absolute inset-0 opacity-10">
                    <svg width="100%" height="100%">
                      <defs>
                        <pattern id="card-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                          <polygon points="20,0 40,10 40,30 20,40 0,30 0,10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#card-pattern)" />
                    </svg>
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl mb-4">🇲🇦</div>
                    <div className="text-2xl font-black mb-2">Vision 2030</div>
                    <div className="text-white/80 text-sm mb-6">
                      {lang === "ar" ? "المملكة المغربية" : "Royaume du Maroc"}
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { n: "15%", l: lang === "ar" ? "مساهمة رقمية في الناتج المحلي" : "PIB Numérique" },
                        { n: "1M+", l: lang === "ar" ? "كفاءات رقمية" : "Compétences Digitales" },
                        { n: "50", l: lang === "ar" ? "مركز ابتكار" : "Hubs Innovation" },
                        { n: "100%", l: lang === "ar" ? "تغطية رقمية" : "Couverture Digitale" },
                      ].map((item) => (
                        <div key={item.n} className="bg-white/10 rounded-xl p-3 text-center">
                          <div className="text-xl font-black">{item.n}</div>
                          <div className="text-white/70 text-xs mt-1">{item.l}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="py-20 bg-section-light">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl font-black mb-3">
              <span className="gradient-text-moroccan">
                {lang === "ar" ? "ركائز الرؤية" : "Les Piliers de la Vision"}
              </span>
            </h2>
            <p className="text-[oklch(0.50_0.04_240)] max-w-xl mx-auto">
              {lang === "ar"
                ? "ستة محاور استراتيجية لتحقيق المغرب الرقمي"
                : "Six axes stratégiques pour réaliser le Maroc numérique"}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={i}
                  className="reveal group bg-white rounded-3xl p-6 border transition-all duration-300 hover:-translate-y-2"
                  style={{
                    animationDelay: `${i * 0.1}s`,
                    borderColor: "oklch(0.88 0.02 240)",
                    boxShadow: "0 2px 12px oklch(0.15 0.04 240 / 0.06)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: `${pillar.color}15` }}
                  >
                    <Icon size={22} style={{ color: pillar.color }} />
                  </div>
                  <h3 className="font-black text-[oklch(0.15_0.04_240)] text-lg mb-2">
                    {lang === "ar" ? pillar.titleAr : pillar.titleFr}
                  </h3>
                  <p className="text-[oklch(0.50_0.04_240)] text-sm leading-relaxed">
                    {lang === "ar" ? pillar.descAr : pillar.descFr}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-14 reveal">
            <h2 className="text-3xl font-black mb-3">
              <span className="gradient-text-moroccan">
                {lang === "ar" ? "خارطة الطريق" : "Feuille de Route"}
              </span>
            </h2>
          </div>

          <div className="relative max-w-3xl mx-auto reveal">
            {/* Timeline line */}
            <div
              className="absolute left-1/2 top-0 bottom-0 w-0.5 -translate-x-1/2"
              style={{ background: "linear-gradient(to bottom, oklch(0.35 0.14 152), oklch(0.42 0.22 25))" }}
            />

            <div className="space-y-8">
              {milestones.map((milestone, i) => (
                <div
                  key={milestone.year}
                  className={`flex items-center gap-6 ${i % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
                >
                  <div className={`flex-1 ${i % 2 === 0 ? "text-right" : "text-left"}`}>
                    <div
                      className="inline-block bg-white rounded-2xl px-5 py-3 border shadow-sm"
                      style={{ borderColor: milestone.done ? "oklch(0.35 0.14 152 / 0.4)" : "oklch(0.88 0.02 240)" }}
                    >
                      <div className="font-black text-[oklch(0.15_0.04_240)]">
                        {lang === "ar" ? milestone.titleAr : milestone.titleFr}
                      </div>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0 z-10"
                    style={{
                      background: milestone.done
                        ? "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.42 0.22 25))"
                        : "oklch(0.88 0.02 240)",
                      color: milestone.done ? "white" : "oklch(0.50 0.04 240)",
                      boxShadow: milestone.done ? "0 4px 16px oklch(0.35 0.14 152 / 0.4)" : "none",
                    }}
                  >
                    {milestone.year.slice(2)}
                  </div>

                  <div className="flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
