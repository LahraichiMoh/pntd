import { useState, useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { MapPin, ChevronRight, Users } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const MOROCCO_MAP_URL = "/manus-storage/morocco-map_14845110.jpg";

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

export default function MoroccoMap() {
  const [, navigate] = useLocation();
  const { t, lang } = useLanguage();
  const [hoveredRegion, setHoveredRegion] = useState<number | null>(null);
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

  const handleRegionClick = (slug: string) => {
    navigate(`/region/${slug}`);
  };

  const getRegionName = (region: typeof regions[0]) => {
    if (lang === "ar") return region.nameAr;
    return region.nameFr;
  };

  return (
    <section id="regions" className="py-20 relative overflow-hidden bg-section-light" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      <div className="relative z-10 container">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
            style={{ background: "oklch(0.35 0.14 152 / 0.1)", color: "oklch(0.35 0.14 152)", border: "1px solid oklch(0.35 0.14 152 / 0.25)" }}
          >
            <MapPin size={14} />
            {t("map.regions_list")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            <span className="gradient-text-moroccan">{t("map.title")}</span>
          </h2>
          <p className="text-[oklch(0.50_0.04_240)] max-w-xl mx-auto text-base">
            {t("map.subtitle")}
          </p>
        </div>

        {/* Two-column layout: Map left + Regions list right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">

          {/* LEFT: Morocco Map Image */}
          <div className="reveal flex justify-center lg:justify-end">
            <div className="relative group w-full max-w-lg">
              <div
                className="absolute inset-0 rounded-3xl blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-500"
                style={{ background: "radial-gradient(ellipse, oklch(0.42 0.22 25) 0%, oklch(0.35 0.14 152 / 0.5) 60%, transparent 100%)" }}
              />
              <div
                className="relative rounded-3xl overflow-hidden border-2 shadow-2xl bg-white"
                style={{
                  borderColor: "oklch(0.35 0.14 152 / 0.25)",
                  boxShadow: "0 30px 70px oklch(0.35 0.14 152 / 0.18)",
                }}
              >
                {/* Header bar */}
                <div
                  className="px-5 py-3 flex items-center gap-3"
                  style={{ background: "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.42 0.22 25))" }}
                >
                  <span className="text-2xl">🇲🇦</span>
                  <div>
                    <div className="text-white font-bold text-sm">Royaume du Maroc</div>
                    <div className="text-white/70 text-xs">المملكة المغربية</div>
                  </div>
                  <div className="ml-auto text-white/80 text-xs font-medium">12 Régions</div>
                </div>
                {/* Map image */}
                <div className="p-4 bg-[oklch(0.97_0.01_240)]">
                  <img
                    src={MOROCCO_MAP_URL}
                    alt="Carte du Maroc - 12 Régions"
                    className="w-full object-contain transition-transform duration-700 group-hover:scale-[1.03] rounded-xl"
                    style={{ maxHeight: "420px" }}
                  />
                </div>
                {/* Footer */}
                <div
                  className="px-5 py-3 flex items-center justify-between"
                  style={{ background: "oklch(0.97 0.01 240)", borderTop: "1px solid oklch(0.88 0.02 240)" }}
                >
                  <span className="text-xs text-[oklch(0.50_0.04_240)]">Programme National de Transformation Digitale</span>
                  <span
                    className="text-xs font-bold px-2 py-1 rounded-full"
                    style={{ background: "oklch(0.35 0.14 152 / 0.1)", color: "oklch(0.35 0.14 152)" }}
                  >PNTD</span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Regions List */}
          <div className="reveal" style={{ animationDelay: "0.15s" }}>
            <div className="mb-4 flex items-center gap-2">
              <Users size={16} style={{ color: "oklch(0.35 0.14 152)" }} />
              <h3 className="font-bold text-[oklch(0.15_0.04_240)] text-lg">{t("map.click_hint")}</h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {regions.map((region, i) => (
                <button
                  key={region.id}
                  onClick={() => handleRegionClick(region.slug)}
                  onMouseEnter={() => setHoveredRegion(region.id)}
                  onMouseLeave={() => setHoveredRegion(null)}
                  className="group flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all duration-300 border bg-white"
                  style={{
                    animationDelay: `${i * 0.04}s`,
                    borderColor: hoveredRegion === region.id ? "oklch(0.35 0.14 152 / 0.6)" : "oklch(0.88 0.02 240)",
                    background: hoveredRegion === region.id
                      ? "linear-gradient(135deg, oklch(0.35 0.14 152 / 0.07), oklch(0.42 0.22 25 / 0.04))"
                      : "white",
                    transform: hoveredRegion === region.id ? "translateX(4px)" : "translateX(0)",
                    boxShadow: hoveredRegion === region.id
                      ? "0 6px 20px oklch(0.35 0.14 152 / 0.15)"
                      : "0 1px 4px oklch(0.15 0.04 240 / 0.06)",
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black text-white flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
                    style={{ background: "linear-gradient(135deg, oklch(0.35 0.14 152), oklch(0.42 0.22 25))" }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div
                      className="font-bold text-sm truncate transition-colors duration-300"
                      style={{ color: hoveredRegion === region.id ? "oklch(0.35 0.14 152)" : "oklch(0.15 0.04 240)" }}
                    >
                      {getRegionName(region)}
                    </div>
                    <div className="text-xs text-[oklch(0.55_0.04_240)] flex items-center gap-1 mt-0.5">
                      <MapPin size={9} />
                      {region.capital}
                    </div>
                  </div>
                  <ChevronRight
                    size={15}
                    className="flex-shrink-0 transition-all duration-300"
                    style={{
                      color: hoveredRegion === region.id ? "oklch(0.35 0.14 152)" : "oklch(0.75 0.02 240)",
                      transform: hoveredRegion === region.id ? "translateX(3px)" : "translateX(0)",
                    }}
                  />
                </button>
              ))}
            </div>
            <p className="mt-5 text-xs text-[oklch(0.55_0.04_240)] flex items-center gap-1.5">
              <ChevronRight size={12} style={{ color: "oklch(0.35 0.14 152)" }} />
              {t("region.representatives")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
