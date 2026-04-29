import { useParams, useLocation } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin, User, Users, Loader2, AlertCircle, Building2, Target, Lightbulb } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL = "/pntd.png";

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  const colors = [
    "oklch(0.35 0.14 152)", // Green
    "oklch(0.42 0.22 25)",  // Red/Gold
    "oklch(0.45 0.10 195)", // Blue
  ];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-black flex-shrink-0 shadow-lg shadow-black/5"
      style={{ background: `linear-gradient(135deg, ${color}, oklch(0.15 0.05 152))` }}
    >
      {initials}
    </div>
  );
}

interface Representative {
  id: number;
  name: string;
  role: string;
  email?: string;
  phone?: string;
  photoUrl?: string;
  bio?: string;
}

interface RegionData {
  region: {
    nameFr: string;
    nameAr: string;
    slug: string;
    descriptionFr: string;
    descriptionAr: string;
    capital: string;
    visionFr: string;
    visionAr: string;
  };
  representatives: Representative[];
}

// Mock data for regions with full content
const MOCK_REGIONS: Record<string, RegionData> = {
  "tanger-tetouan-al-hoceima": {
    region: { 
      nameFr: "Tanger-Tétouan-Al Hoceïma", 
      nameAr: "طنجة-تطوان-الحسيمة", 
      slug: "tanger-tetouan-al-hoceima", 
      capital: "Tanger",
      descriptionFr: "Une région stratégique servant de pont entre l'Afrique et l'Europe, moteur industriel et logistique du Royaume.",
      descriptionAr: "جهة استراتيجية تشكل جسراً بين أفريقيا وأوروبا، ومحركاً صناعياً ولوجستياً للمملكة.",
      visionFr: "Accélérer la transformation digitale des écosystèmes industriels et portuaires pour renforcer la compétitivité internationale.",
      visionAr: "تسريع التحول الرقمي للمنظومات الصناعية والمينائية لتعزيز التنافسية الدولية."
    },
    representatives: [
      { id: 1, name: "Dr. Ahmed Mansouri", role: "Coordonnateur Régional", email: "a.mansouri@pntd.ma", phone: "+212 539 123 456", bio: "Expert en transformation digitale avec 15 ans d'expérience dans le secteur public." }
    ]
  },
  "oriental": {
    region: { 
      nameFr: "Oriental", 
      nameAr: "الشرق", 
      slug: "oriental", 
      capital: "Oujda",
      descriptionFr: "Le pôle de croissance de l'Est marocain, riche de son capital humain et de ses projets énergétiques.",
      descriptionAr: "قطب النمو في شرق المغرب، الغني برأسماله البشري ومشاريع الطاقة.",
      visionFr: "Digitaliser l'agriculture et les services transfrontaliers pour désenclaver les zones rurales.",
      visionAr: "رقمنة الفلاحة والخدمات العابرة للحدود لفك العزلة عن المناطق القروية."
    },
    representatives: [
      { id: 4, name: "M. Youssef Amrani", role: "Responsable Régional", email: "y.amrani@pntd.ma", phone: "+212 536 123 456" }
    ]
  },
  "fes-meknes": {
    region: { 
      nameFr: "Fès-Meknès", 
      nameAr: "فاس-مكناس", 
      slug: "fes-meknes", 
      capital: "Fès",
      descriptionFr: "Le cœur historique et académique du Maroc, alliant tradition et innovation technologique.",
      descriptionAr: "القلب التاريخي والأكاديمي للمغرب، الذي يجمع بين الأصالة والابتكار التكنولوجي.",
      visionFr: "Promouvoir l'EdTech et l'AgriTech en s'appuyant sur le réseau universitaire dense de la région.",
      visionAr: "تعزيز تكنولوجيا التعليم والتكنولوجيا الفلاحية بالاعتماد على الشبكة الجامعية المكثفة بالجهة."
    },
    representatives: [
      { id: 5, name: "Mme. Fatima Zahra Bennani", role: "Coordonnatrice Régionale", email: "fz.bennani@pntd.ma", phone: "+212 535 123 456" }
    ]
  },
  "rabat-sale-kenitra": {
    region: { 
      nameFr: "Rabat-Salé-Kénitra", 
      nameAr: "الرباط-سلا-القنيطرة", 
      slug: "rabat-sale-kenitra", 
      capital: "Rabat",
      descriptionFr: "Le centre administratif et politique du Royaume, leader dans les services numériques gouvernementaux.",
      descriptionAr: "المركز الإداري والسياسي للمملكة، الرائد في الخدمات الرقمية الحكومية.",
      visionFr: "Devenir le hub national de la GovTech et de l'administration digitale simplifiée pour le citoyen.",
      visionAr: "تطوير مركز وطني لتكنولوجيا الحكومة والإدارة الرقمية المبسطة للمواطن."
    },
    representatives: [
      { id: 2, name: "Mme. Samira El Fassi", role: "Directrice Régionale", email: "s.elfassi@pntd.ma", phone: "+212 537 789 012" }
    ]
  },
  "casablanca-settat": {
    region: { 
      nameFr: "Casablanca-Settat", 
      nameAr: "الدار البيضاء-سطات", 
      slug: "casablanca-settat", 
      capital: "Casablanca",
      descriptionFr: "La locomotive économique du Maroc, concentrant les services financiers et les hubs technologiques.",
      descriptionAr: "القاطرة الاقتصادية للمغرب، التي تركز الخدمات المالية والأقطاب التكنولوجية.",
      visionFr: "Soutenir l'entrepreneuriat digital et faire de Casablanca la Smart City de référence en Afrique.",
      visionAr: "دعم ريادة الأعمال الرقمية وجعل الدار البيضاء المدينة الذكية المرجعية في أفريقيا."
    },
    representatives: [
      { id: 3, name: "M. Khalid Bennani", role: "Responsable Régional", email: "k.bennani@pntd.ma", phone: "+212 522 345 678" }
    ]
  },
  "marrakech-safi": {
    region: { 
      nameFr: "Marrakech-Safi", 
      nameAr: "مراكش-آسفي", 
      slug: "marrakech-safi", 
      capital: "Marrakech",
      descriptionFr: "La destination touristique mondiale et un pôle d'innovation durable et créatif.",
      descriptionAr: "الوجهة السياحية العالمية وقطب للابتكار المستدام والإبداعي.",
      visionFr: "Digitaliser l'expérience touristique et promouvoir les industries créatives numériques.",
      visionAr: "رقمنة التجربة السياحية وتعزيز الصناعات الإبداعية الرقمية."
    },
    representatives: [
      { id: 7, name: "Mme. Laila Tazi", role: "Coordonnatrice Régionale", email: "l.tazi@pntd.ma", phone: "+212 524 123 456" }
    ]
  },
  "draa-tafilalet": {
    region: { 
      nameFr: "Drâa-Tafilalet", 
      nameAr: "درعة-تافيلالت", 
      slug: "draa-tafilalet", 
      capital: "Errachidia",
      descriptionFr: "Terre de culture et d'énergie solaire, pilier du développement durable régional.",
      descriptionAr: "أرض الثقافة والطاقة الشمسية، ركيزة التنمية المستدامة الجهوية.",
      visionFr: "Développer le télétravail et l'accès numérique dans les zones oasiennes et montagneuses.",
      visionAr: "تطوير العمل عن بعد والولوج الرقمي في المناطق الواحاتية والجبلية."
    },
    representatives: [
      { id: 8, name: "M. Said Jabri", role: "Représentant Régional", email: "s.jabri@pntd.ma", phone: "+212 535 987 654" }
    ]
  },
  "souss-massa": {
    region: { 
      nameFr: "Souss-Massa", 
      nameAr: "سوس-ماسة", 
      slug: "souss-massa", 
      capital: "Agadir",
      descriptionFr: "Premier pôle agricole et halieutique du Royaume, tourné vers l'innovation bleue et verte.",
      descriptionAr: "القطب الفلاحي والسمكي الأول للمملكة، المتوجه نحو الابتكار الأزرق والأخضر.",
      visionFr: "Moderniser les filières d'exportation par le déploiement de l'IoT et du Big Data agricole.",
      visionAr: "تحديث سلاسل التصدير من خلال نشر إنترنت الأشياء والبيانات الضخمة الفلاحية."
    },
    representatives: [
      { id: 9, name: "M. Brahim Ait Ahmed", role: "Responsable Régional", email: "b.aitahmed@pntd.ma", phone: "+212 528 123 456" }
    ]
  },
  "guelmim-oued-noun": {
    region: { 
      nameFr: "Guelmim-Oued Noun", 
      nameAr: "كلميم-واد نون", 
      slug: "guelmim-oued-noun", 
      capital: "Guelmim",
      descriptionFr: "La porte du Sahara, carrefour commercial et futur hub de l'hydrogène vert.",
      descriptionAr: "بوابة الصحراء، مفترق طرق تجاري وقطب مستقبلي للهيدروجين الأخضر.",
      visionFr: "Digitaliser les échanges commerciaux Sud-Sud et les services de proximité.",
      visionAr: "رقمنة التبادلات التجارية جنوب-جنوب وخدمات القرب."
    },
    representatives: [
      { id: 10, name: "M. Hassan Sbai", role: "Coordonnateur Régional", email: "h.sbai@pntd.ma", phone: "+212 528 987 654" }
    ]
  },
  "laayoune-sakia-el-hamra": {
    region: { 
      nameFr: "Laâyoune-Sakia El Hamra", 
      nameAr: "العيون-الساقية الحمراء", 
      slug: "laayoune-sakia-el-hamra", 
      capital: "Laâyoune",
      descriptionFr: "Un hub de développement majeur dans les provinces du Sud, axé sur les infrastructures et la pêche.",
      descriptionAr: "مركز تنموي رئيسي في الأقاليم الجنوبية، يركز على البنية التحتية والصيد البحري.",
      visionFr: "Renforcer l'inclusion digitale des jeunes et le soutien aux startups locales.",
      visionAr: "تعزيز الإدماج الرقمي للشباب ودعم الشركات الناشئة المحلية."
    },
    representatives: [
      { id: 11, name: "M. Ali Ould Rachid", role: "Directeur Régional", email: "a.ouldrachid@pntd.ma", phone: "+212 528 111 222" }
    ]
  },
  "dakhla-oued-eddahab": {
    region: { 
      nameFr: "Dakhla-Oued Ed-Dahab", 
      nameAr: "الداخلة-وادي الذهب", 
      slug: "dakhla-oued-eddahab", 
      capital: "Dakhla",
      descriptionFr: "La perle du Sud, destination touristique et halieutique d'excellence mondiale.",
      descriptionAr: "لؤلؤة الجنوب، وجهة سياحية وسمكية بامتياز عالمي.",
      visionFr: "Faire de Dakhla un pont numérique vers l'Afrique subsaharienne.",
      visionAr: "جعل الداخلة جسراً رقمياً نحو أفريقيا جنوب الصحراء."
    },
    representatives: [
      { id: 12, name: "Mme. Amina Bouazza", role: "Responsable Régionale", email: "a.bouazza@pntd.ma", phone: "+212 528 333 444" }
    ]
  }
};

export default function RegionPage() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const { lang, dir, t } = useLanguage();
  const slug = params.slug || "";

  const data = MOCK_REGIONS[slug];
  const isLoading = false;
  const error = !data;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <Loader2 size={48} className="animate-spin text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Chargement...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md p-8">
          <AlertCircle size={64} className="text-accent mx-auto mb-6 opacity-20" />
          <h2 className="text-2xl font-black text-foreground mb-4">Région introuvable</h2>
          <p className="text-muted-foreground mb-8">Cette région n'est pas encore enregistrée dans notre système.</p>
          <button
            onClick={() => navigate("/regions")}
            className="w-full px-8 py-4 rounded-2xl font-black text-white transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-primary/20"
            style={{ background: "linear-gradient(135deg, var(--moroccan-green), var(--moroccan-red))" }}
          >
            Retour à la liste
          </button>
        </div>
      </div>
    );
  }

  const { region, representatives } = data;

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Premium Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/[0.03] to-transparent" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/[0.02] -skew-x-12 translate-x-1/4" />
            <svg className="absolute top-0 left-0 w-full h-full opacity-[0.05]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid-plus" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 15v10M15 20h10" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-plus)" />
            </svg>
          </div>

          <div className="container relative z-10">
            <button
              onClick={() => navigate("/regions")}
              className={`flex items-center gap-2 text-sm font-bold text-primary mb-12 hover:opacity-70 transition-opacity group ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}
            >
              <ArrowLeft size={18} className={`transition-transform duration-300 ${dir === 'rtl' ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'}`} />
              {t("region.back") || "Retour à la liste"}
            </button>

            <div className={`flex flex-col md:flex-row gap-12 items-start ${dir === 'rtl' ? 'md:flex-row-reverse text-right' : 'text-left'}`}>
              <div className="flex-1">
                <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-black tracking-widest uppercase bg-primary/10 text-primary border border-primary/20 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                  <MapPin size={14} />
                  {t("nav.regions")}
                </div>
                <h1 className="text-5xl md:text-7xl font-black mb-4 leading-tight">
                  <span className="gradient-text-moroccan">
                    {lang === 'ar' ? region.nameAr : region.nameFr}
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl font-medium">
                  {lang === 'ar' ? region.descriptionAr : region.descriptionFr}
                </p>
                
                <div className={`flex flex-wrap gap-6 mt-10 ${dir === 'rtl' ? 'justify-end' : ''}`}>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                      <Building2 size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t("region.capital")}</div>
                      <div className="font-bold text-foreground">{region.capital}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center shadow-sm">
                      <Users size={20} className="text-secondary" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black uppercase tracking-widest text-muted-foreground">{t("region.representatives")}</div>
                      <div className="font-bold text-foreground">{representatives.length} Membres</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Card */}
              <div className="w-full md:w-80 flex-shrink-0">
                <div className="bg-card border border-border p-8 rounded-[2rem] shadow-2xl shadow-primary/5 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl group-hover:bg-primary/10 transition-colors" />
                  <div className="relative z-10">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                      <Target size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-black mb-4">{lang === 'ar' ? "الرؤية الجهوية" : "Vision Régionale"}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed italic">
                      "{lang === 'ar' ? region.visionAr : region.visionFr}"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className={`flex items-center gap-4 mb-12 ${dir === 'rtl' ? 'flex-row-reverse text-right' : ''}`}>
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center border border-primary/20">
                <Lightbulb size={24} className="text-primary" />
              </div>
              <div>
                <h2 className="text-3xl font-black">{t("region.representatives")}</h2>
                <p className="text-muted-foreground">{lang === 'ar' ? "فريقنا المتفاني في الجهة" : "Notre équipe dédiée sur le terrain"}</p>
              </div>
            </div>

            {representatives.length === 0 ? (
              <div className="bg-card rounded-[2rem] p-16 text-center border border-border shadow-sm">
                <User size={64} className="text-muted-foreground/20 mx-auto mb-6" />
                <h3 className="text-2xl font-black text-muted-foreground mb-4">{t("region.no_rep")}</h3>
                <p className="text-muted-foreground/60 max-w-md mx-auto">
                  Nous sommes en train de finaliser la nomination de nos représentants régionaux.
                </p>
              </div>
            ) : (
              <div className="grid lg:grid-cols-2 gap-8">
                {representatives.map((rep, i) => (
                  <div
                    key={rep.id}
                    className="bg-card rounded-[2rem] p-8 border border-border group relative overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5 flex flex-col sm:flex-row gap-8 items-center sm:items-start"
                  >
                    <div className="relative">
                      {rep.photoUrl ? (
                        <img
                          src={rep.photoUrl}
                          alt={rep.name}
                          className="w-32 h-32 rounded-[2rem] object-cover border-4 border-background shadow-xl"
                        />
                      ) : (
                        <AvatarPlaceholder name={rep.name} />
                      )}
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-xl bg-secondary flex items-center justify-center text-white shadow-lg">
                        <Users size={18} />
                      </div>
                    </div>

                    <div className={`flex-1 ${dir === 'rtl' ? 'text-right' : 'text-left'}`}>
                      <div className="mb-6">
                        <h3 className="text-2xl font-black mb-1 group-hover:text-primary transition-colors">{rep.name}</h3>
                        <div className="inline-block px-3 py-1 rounded-lg bg-primary/5 text-primary text-xs font-black uppercase tracking-wider">
                          {rep.role}
                        </div>
                      </div>

                      {rep.bio && (
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6 opacity-80 line-clamp-2">
                          {rep.bio}
                        </p>
                      )}

                      <div className={`flex flex-wrap gap-4 ${dir === 'rtl' ? 'justify-end' : ''}`}>
                        {rep.email && (
                          <a
                            href={`mailto:${rep.email}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 text-sm font-bold text-muted-foreground hover:bg-primary hover:text-white transition-all duration-300"
                          >
                            <Mail size={16} />
                            {rep.email}
                          </a>
                        )}
                        {rep.phone && (
                          <a
                            href={`tel:${rep.phone}`}
                            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-muted/50 text-sm font-bold text-muted-foreground hover:bg-secondary hover:text-white transition-all duration-300"
                          >
                            <Phone size={16} />
                            {rep.phone}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Premium CTA */}
            <div className="mt-20 relative overflow-hidden rounded-[3rem] bg-card border border-border p-12 text-center shadow-2xl">
              <div className="absolute top-0 left-0 w-full h-full opacity-[0.03] pointer-events-none">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <pattern id="cta-grid" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="1" cy="1" r="1" fill="currentColor" />
                  </pattern>
                  <rect width="100%" height="100%" fill="url(#cta-grid)" />
                </svg>
              </div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <div className="w-16 h-16 rounded-3xl bg-primary/10 flex items-center justify-center mx-auto mb-8 border border-primary/20">
                  <img src={LOGO_URL} alt="PNTD" className="w-10 h-10" />
                </div>
                <h3 className="text-3xl md:text-4xl font-black mb-6">
                  {lang === 'ar' ? "شارك في التحول الرقمي بجهتك" : "Contribuez au futur digital de votre région"}
                </h3>
                <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                  {lang === 'ar' ? "انضم إلى المبادرة الوطنية وساهم في بناء مغرب الغد." : "Rejoignez l'initiative nationale et devenez un acteur clé de la transformation numérique au Maroc."}
                </p>
                <button
                  onClick={() => navigate("/join")}
                  className="px-12 py-5 rounded-2xl font-black text-lg text-white transition-all duration-300 hover:scale-[1.05] shadow-2xl shadow-primary/30"
                  style={{ background: "linear-gradient(135deg, var(--moroccan-green), var(--moroccan-red))" }}
                >
                  {t("hero.cta_join")}
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

