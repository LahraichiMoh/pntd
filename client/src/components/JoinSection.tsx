import { useState, useEffect, useRef } from "react";
import { toast } from "sonner";
import { Send, User, Mail, Phone, MapPin, Briefcase, Users, CheckCircle2, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const REGIONS_LIST = [
  "Tanger-Tétouan-Al Hoceïma",
  "Oriental",
  "Fès-Meknès",
  "Rabat-Salé-Kénitra",
  "Béni Mellal-Khénifra",
  "Casablanca-Settat",
  "Marrakech-Safi",
  "Drâa-Tafilalet",
  "Souss-Massa",
  "Guelmim-Oued Noun",
  "Laâyoune-Sakia El Hamra",
  "Dakhla-Oued Ed-Dahab",
];

const SECTORS = [
  "Économie Sociale & Coopératives",
  "Éducation & Formation",
  "Entrepreneuriat Digital",
  "E-Commerce",
  "Qualité & Sécurité",
  "Administration & Gouvernance",
  "Santé Digitale",
  "Agriculture & AgriTech",
  "Tourisme Digital",
  "Autre",
];

export default function JoinSection() {
  const { t } = useLanguage();
  const ref = useRef<HTMLDivElement>(null);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    region: "",
    sector: "",
    profileType: "",
    message: "",
  });

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

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.email || !form.profileType) {
      toast.error("Veuillez remplir tous les champs obligatoires.");
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      toast.success(t("join.success"));
    }, 1500);
  };

  const profileTypes = [
    { value: "association", label: t("join.profile_assoc"), icon: Users },
    { value: "teacher", label: t("join.profile_teacher"), icon: Briefcase },
    { value: "entrepreneur", label: t("join.profile_entre"), icon: Briefcase },
    { value: "other", label: t("join.profile_other"), icon: User },
  ];

  const inputClass = "w-full px-4 py-3 rounded-xl bg-white border text-[oklch(0.15_0.04_240)] placeholder-[oklch(0.65_0.03_240)] focus:outline-none focus:ring-2 transition-all duration-200 text-sm";
  const inputStyle = {
    borderColor: "oklch(0.88 0.02 240)",
  };
  const inputFocusStyle = "focus:border-[oklch(0.35_0.14_152)] focus:ring-[oklch(0.35_0.14_152/0.15)]";
  const labelClass = "block text-xs font-bold text-[oklch(0.35_0.04_240)] uppercase tracking-wider mb-1.5";

  if (submitted) {
    return (
      <section id="join" className="py-24 relative overflow-hidden bg-section-light">
        <div className="absolute top-0 left-0 right-0 h-px section-divider" />
        <div className="relative z-10 container">
          <div className="max-w-lg mx-auto text-center">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 animate-pulse-glow"
              style={{ background: "oklch(0.35 0.14 152 / 0.12)" }}
            >
              <CheckCircle2 size={48} style={{ color: "oklch(0.35 0.14 152)" }} />
            </div>
            <h2 className="text-3xl font-black gradient-text-moroccan mb-4">{t("join.success")}</h2>
            <p className="text-[oklch(0.45_0.04_240)] mb-6 leading-relaxed">
              {t("join.subtitle")}
            </p>
            <div
              className="rounded-2xl p-4 text-sm border"
              style={{ background: "oklch(0.35 0.14 152 / 0.05)", borderColor: "oklch(0.35 0.14 152 / 0.2)" }}
            >
              <div
                className="text-base mb-1 font-bold"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif", direction: "rtl", color: "oklch(0.35 0.14 152)" }}
              >
                نحو مستقبل رقمي واعد
              </div>
              <div className="text-[oklch(0.50_0.04_240)]">Vers un avenir numérique prometteur</div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="join" className="py-20 relative overflow-hidden bg-section-light" ref={ref}>
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Subtle background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg width="100%" height="100%">
          <defs>
            <pattern id="join-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="oklch(0.35 0.14 152)" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#join-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 container">
        <div className="text-center mb-12 reveal">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 text-sm font-semibold"
            style={{ background: "oklch(0.42 0.22 25 / 0.1)", color: "oklch(0.42 0.22 25)", border: "1px solid oklch(0.42 0.22 25 / 0.25)" }}
          >
            <Send size={14} />
            {t("join.title")}
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            <span className="gradient-text-moroccan">{t("join.title")}</span>
          </h2>
          <p className="text-[oklch(0.50_0.04_240)] max-w-xl mx-auto text-base">
            {t("join.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto reveal" style={{ animationDelay: "0.1s" }}>
          <div
            className="rounded-3xl p-8 sm:p-10 relative overflow-hidden bg-white"
            style={{
              border: "1px solid oklch(0.88 0.02 240)",
              boxShadow: "0 8px 40px oklch(0.35 0.14 152 / 0.08)",
            }}
          >
            {/* Top accent bar */}
            <div className="absolute top-0 left-0 right-0 h-1.5 rounded-t-3xl bg-gradient-to-r from-[oklch(0.35_0.14_152)] via-[oklch(0.68_0.15_75)] to-[oklch(0.42_0.22_25)]" />

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile type selector */}
              <div>
                <label className={labelClass}>{t("join.profile")} *</label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {profileTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <button
                        key={type.value}
                        type="button"
                        onClick={() => setForm({ ...form, profileType: type.value })}
                        className="p-3 rounded-xl border text-xs font-semibold transition-all duration-200 text-center flex flex-col items-center gap-1.5"
                        style={
                          form.profileType === type.value
                            ? { background: "oklch(0.35 0.14 152 / 0.1)", borderColor: "oklch(0.35 0.14 152)", color: "oklch(0.35 0.14 152)", transform: "scale(1.02)" }
                            : { background: "oklch(0.97 0.01 240)", borderColor: "oklch(0.88 0.02 240)", color: "oklch(0.45 0.04 240)" }
                        }
                      >
                        <Icon size={16} />
                        {type.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1"><User size={10} /> {t("join.name")} *</span>
                  </label>
                  <input
                    type="text"
                    className={`${inputClass} ${inputFocusStyle}`}
                    style={inputStyle}
                    placeholder="Mohammed Alami"
                    value={form.fullName}
                    onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1"><Mail size={10} /> {t("join.email")} *</span>
                  </label>
                  <input
                    type="email"
                    className={`${inputClass} ${inputFocusStyle}`}
                    style={inputStyle}
                    placeholder="exemple@email.com"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              {/* Phone & Region */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1"><Phone size={10} /> {t("join.phone")}</span>
                  </label>
                  <input
                    type="tel"
                    className={`${inputClass} ${inputFocusStyle}`}
                    style={inputStyle}
                    placeholder="+212 6XX XXX XXX"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div>
                  <label className={labelClass}>
                    <span className="flex items-center gap-1"><MapPin size={10} /> {t("join.region")}</span>
                  </label>
                  <select
                    className={`${inputClass} ${inputFocusStyle}`}
                    style={inputStyle}
                    value={form.region}
                    onChange={(e) => setForm({ ...form, region: e.target.value })}
                  >
                    <option value="">Sélectionner une région</option>
                    {REGIONS_LIST.map((r) => (
                      <option key={r} value={r}>{r}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Sector */}
              <div>
                <label className={labelClass}>
                  <span className="flex items-center gap-1"><Briefcase size={10} /> {t("join.sector")}</span>
                </label>
                <select
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  value={form.sector}
                  onChange={(e) => setForm({ ...form, sector: e.target.value })}
                >
                  <option value="">Sélectionner un secteur</option>
                  {SECTORS.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className={labelClass}>{t("join.message")}</label>
                <textarea
                  className={`${inputClass} ${inputFocusStyle} resize-none`}
                  style={inputStyle}
                  rows={4}
                  placeholder="Décrivez votre projet, vos objectifs et comment le PNTD peut vous aider..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-2xl font-bold text-white flex items-center justify-center gap-3 btn-moroccan-gradient disabled:opacity-70 disabled:cursor-not-allowed disabled:scale-100"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    {t("join.submit")}
                  </>
                )}
              </button>

              <p className="text-center text-xs text-[oklch(0.55_0.03_240)]">
                * Champs obligatoires. Vos données sont traitées conformément à la politique de confidentialité du PNTD.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
