import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { MapPin, ChevronRight, Users, Search } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const regions = [
  { id: 1, slug: "tanger-tetouan-al-hoceima", nameFr: "Tanger-Tétouan-Al Hoceïma", nameAr: "طنجة-تطوان-الحسيمة", capital: "Tanger" },
  { id: 2, slug: "oriental", nameFr: "Oriental", nameAr: "الشرق", capital: "Oujda" },
  { id: 3, slug: "fes-meknes", nameFr: "Fès-Meknès", nameAr: "فاس-مكناس", capital: "Fès" },
  { id: 4, slug: "rabat-sale-kenitra", nameFr: "Rabat-Salé-Kénitra", nameAr: "الرباط-سلا-القنيطرة", capital: "Rabat" },
  { id: 5, slug: "beni-mellal-khenifra", nameFr: "Béni Mellal-Khénifra", nameAr: "بني ملال-خنيفرة", capital: "Béni Mellal" },
  { id: 6, slug: "casablanca-settat", nameFr: "Casablanca-Settat", nameAr: "الدار البيضاء-سطات", capital: "Casablanca" },
  { id: 7, slug: "marrakech-safi", nameFr: "Marrakech-Safi", nameAr: "مراكش-آسفي", capital: "Marrakech" },
  { id: 8, slug: "draa-tafilalet", nameFr: "Drâa-Tafilalet", nameAr: "درعة-تافيلالت", capital: "Errachidia" },
  { id: 9, slug: "souss-massa", nameFr: "Souss-Massa", nameAr: "سوس-ماسة", capital: "Agadir" },
  { id: 10, slug: "guelmim-oued-noun", nameFr: "Guelmim-Oued Noun", nameAr: "كلميم-واد نون", capital: "Guelmim" },
  { id: 11, slug: "laayoune-sakia-el-hamra", nameFr: "Laâyoune-Sakia El Hamra", nameAr: "العيون-الساقية الحمراء", capital: "Laâyoune" },
  { id: 12, slug: "dakhla-oued-eddahab", nameFr: "Dakhla-Oued Ed-Dahab", nameAr: "الداخلة-وادي الذهب", capital: "Dakhla" },
];

export default function RegionsListPage() {
  const [, navigate] = useLocation();
  const { t, lang, dir } = useLanguage();
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredRegions = regions.filter((region) => {
    const name = lang === "ar" ? region.nameAr : region.nameFr;
    return (
      name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      region.capital.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      
      <main className="flex-1">
        {/* Premium Hero Section */}
        <section className="relative pt-32 pb-16 overflow-hidden">
          {/* Decorative background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/[0.03] to-transparent" />
            <svg className="absolute top-0 left-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="regions-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M20 15v10M15 20h10" stroke="currentColor" strokeWidth="1" fill="none" className="text-primary" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#regions-grid)" />
            </svg>
          </div>

          <div className="container relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-black tracking-widest uppercase bg-primary/10 text-primary border border-primary/20"
              >
                <MapPin size={14} />
                {t("map.regions_list")}
              </div>
              <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                <span className="gradient-text-moroccan">{t("map.title")}</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed font-medium">
                {t("map.subtitle")}
              </p>
            </div>

            {/* Premium Search Bar */}
            <div className="max-w-2xl mx-auto mt-12 relative group">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none">
                <Search size={22} className="text-muted-foreground group-focus-within:text-primary transition-colors" />
              </div>
              <input
                type="text"
                placeholder={t("region.search")}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-5 rounded-[2rem] border-2 bg-card focus:outline-none focus:ring-8 focus:ring-primary/5 transition-all text-lg font-medium shadow-xl shadow-primary/5"
                style={{ borderColor: "var(--border)" }}
              />
            </div>
          </div>
        </section>

        {/* Regions Grid Section */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRegions.map((region, i) => (
                <button
                  key={region.id}
                  onClick={() => navigate(`/region/${region.slug}`)}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="group relative bg-card rounded-[2.5rem] p-10 border border-border text-left transition-all duration-500 overflow-hidden hover:-translate-y-2 hover:shadow-2xl hover:shadow-primary/5"
                >
                  {/* Decorative Background Element */}
                  <div 
                    className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/[0.05] to-transparent rounded-bl-full transition-all duration-500 group-hover:scale-150"
                  />

                  <div className="relative z-10">
                    <div 
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 shadow-lg shadow-primary/10"
                      style={{ background: "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.68 0.15 75), oklch(0.42 0.22 25))" }}
                    >
                      <MapPin size={28} className="text-white" />
                    </div>

                    <h3 className="text-2xl font-black text-foreground mb-3 group-hover:text-primary transition-colors">
                      {lang === "ar" ? region.nameAr : region.nameFr}
                    </h3>
                    
                    <div className={`flex items-center gap-2 text-muted-foreground text-sm mb-8 ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                      <span className="font-black uppercase tracking-widest text-[10px] bg-muted px-2 py-1 rounded-md">{t("region.capital")}</span>
                      <span className="font-bold">{region.capital}</span>
                    </div>

                    <div className={`flex items-center justify-between pt-8 border-t border-border ${dir === 'rtl' ? 'flex-row-reverse' : ''}`}>
                      <span className="text-xs font-black text-primary uppercase tracking-widest flex items-center gap-2">
                        <Users size={16} />
                        {t("region.representatives")}
                      </span>
                      <div className={`w-10 h-10 rounded-full border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-primary group-hover:border-primary group-hover:text-white`}>
                        <ChevronRight 
                          size={20} 
                          className={`transition-transform duration-300 ${dir === 'rtl' ? 'rotate-180 group-hover:-translate-x-1' : 'group-hover:translate-x-1'}`}
                        />
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
            
            {filteredRegions.length === 0 && (
              <div className="text-center py-32">
                <div className="w-24 h-24 rounded-full bg-muted flex items-center justify-center mx-auto mb-6">
                  <Search size={40} className="text-muted-foreground/30" />
                </div>
                <h3 className="text-2xl font-black text-muted-foreground">
                  {lang === "ar" ? "لم يتم العثور على أي جهة" : "Aucune région trouvée"}
                </h3>
                <p className="text-muted-foreground/60 mt-2">Essayez d'ajuster vos critères de recherche.</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
