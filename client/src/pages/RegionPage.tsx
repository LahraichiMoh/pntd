import { useParams, useLocation } from "wouter";
import { ArrowLeft, Mail, Phone, MapPin, User, Users, Loader2, AlertCircle } from "lucide-react";

const LOGO_URL = "/manus-storage/pntd-logo_9f2d93ad.png";

function AvatarPlaceholder({ name }: { name: string }) {
  const initials = name.split(" ").map((n) => n[0]).slice(0, 2).join("").toUpperCase();
  const colors = [
    "oklch(0.38 0.14 152)",
    "oklch(0.45 0.22 25)",
    "oklch(0.75 0.15 75 / 0.8)",
    "oklch(0.45 0.10 195)",
  ];
  const color = colors[name.charCodeAt(0) % colors.length];
  return (
    <div
      className="w-20 h-20 rounded-2xl flex items-center justify-center text-white text-2xl font-black flex-shrink-0"
      style={{ background: `linear-gradient(135deg, ${color}, oklch(0.10 0.03 240))`, border: `1px solid ${color}40` }}
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
    description?: string;
    capital: string;
  };
  representatives: Representative[];
}

// Mock data for regions
const MOCK_REGIONS: Record<string, RegionData> = {
  "tanger-tetouan-al-hoceima": {
    region: { nameFr: "Tanger-Tétouan-Al Hoceïma", nameAr: "طنجة-تطوان-الحسيمة", slug: "tanger-tetouan-al-hoceima", capital: "Tanger" },
    representatives: [
      { id: 1, name: "Dr. Ahmed Mansouri", role: "Coordonnateur Régional", email: "a.mansouri@pntd.ma", phone: "+212 539 123 456" }
    ]
  },
  "rabat-sale-kenitra": {
    region: { nameFr: "Rabat-Salé-Kénitra", nameAr: "الرباط-سلا-القنيطرة", slug: "rabat-sale-kenitra", capital: "Rabat" },
    representatives: [
      { id: 2, name: "Mme. Samira El Fassi", role: "Directrice Régionale", email: "s.elfassi@pntd.ma", phone: "+212 537 789 012" }
    ]
  },
  "casablanca-settat": {
    region: { nameFr: "Casablanca-Settat", nameAr: "الدار البيضاء-سطات", slug: "casablanca-settat", capital: "Casablanca" },
    representatives: [
      { id: 3, name: "M. Khalid Bennani", role: "Responsable Régional", email: "k.bennani@pntd.ma", phone: "+212 522 345 678" }
    ]
  }
};

export default function RegionPage() {
  const params = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const slug = params.slug || "";

  const data = MOCK_REGIONS[slug];
  const isLoading = false;
  const error = !data;

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.06_0.02_240)]">
        <div className="text-center">
          <Loader2 size={48} className="animate-spin text-[oklch(0.38_0.14_152)] mx-auto mb-4" />
          <p className="text-[oklch(0.65_0.03_240)]">Chargement de la région...</p>
        </div>
      </div>
    );
  }

  if (error || !data) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[oklch(0.06_0.02_240)]">
        <div className="text-center max-w-md">
          <AlertCircle size={48} className="text-[oklch(0.45_0.22_25)] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-[oklch(0.85_0.02_240)] mb-2">Région introuvable</h2>
          <p className="text-[oklch(0.65_0.03_240)] mb-6">Cette région n'existe pas dans notre base de données.</p>
          <button
            onClick={() => navigate("/")}
            className="px-6 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
            style={{ background: "linear-gradient(135deg, oklch(0.38 0.14 152), oklch(0.45 0.22 25))" }}
          >
            Retour à l'accueil
          </button>
        </div>
      </div>
    );
  }

  const { region, representatives } = data;

  return (
    <div className="min-h-screen bg-[oklch(0.06_0.02_240)]">
      {/* Background patterns */}
      <div className="fixed inset-0 opacity-3 pointer-events-none">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="rp-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="oklch(0.75 0.15 75)" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#rp-pattern)" />
        </svg>
      </div>

      {/* Header */}
      <div
        className="relative py-20 overflow-hidden"
        style={{
          background: "linear-gradient(135deg, oklch(0.38 0.14 152 / 0.15) 0%, oklch(0.45 0.22 25 / 0.10) 50%, oklch(0.06 0.02 240) 100%)",
          borderBottom: "1px solid oklch(0.38 0.14 152 / 0.2)",
        }}
      >
        {/* Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-[oklch(0.38_0.14_152/0.08)] blur-3xl pointer-events-none" />

        <div className="relative z-10 container">
          {/* Back button */}
          <button
            onClick={() => navigate("/")}
            className="flex items-center gap-2 text-sm text-[oklch(0.65_0.03_240)] hover:text-[oklch(0.75_0.15_75)] transition-colors duration-200 mb-8 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform duration-200" />
            Retour à la carte
          </button>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-16 h-16 rounded-2xl bg-[oklch(0.38_0.14_152/0.2)] flex items-center justify-center border border-[oklch(0.38_0.14_152/0.4)] animate-pulse-glow">
              <MapPin size={28} className="text-[oklch(0.38_0.14_152)]" />
            </div>
            <div>
              <div className="text-xs font-semibold tracking-widest uppercase text-[oklch(0.75_0.15_75)] mb-1">
                Région PNTD
              </div>
              <h1 className="text-3xl sm:text-4xl font-black text-[oklch(0.90_0.02_240)] mb-1">
                {region.nameFr}
              </h1>
              <div
                className="text-xl text-[oklch(0.75_0.15_75)]"
                style={{ fontFamily: "'Noto Sans Arabic', sans-serif", direction: "rtl" }}
              >
                {region.nameAr}
              </div>
            </div>
          </div>

          {region.description && (
            <p className="mt-6 text-[oklch(0.65_0.03_240)] max-w-2xl leading-relaxed">
              {region.description}
            </p>
          )}

          {/* Stats */}
          <div className="flex flex-wrap gap-4 mt-6">
            <div className="glass rounded-xl px-4 py-2 flex items-center gap-2 text-sm">
              <MapPin size={14} className="text-[oklch(0.38_0.14_152)]" />
              <span className="text-[oklch(0.75_0.03_240)]">Capitale: </span>
              <span className="font-semibold text-[oklch(0.90_0.02_240)]">{region.capital}</span>
            </div>
            <div className="glass rounded-xl px-4 py-2 flex items-center gap-2 text-sm">
              <Users size={14} className="text-[oklch(0.75_0.15_75)]" />
              <span className="text-[oklch(0.75_0.03_240)]">{representatives.length} représentant{representatives.length > 1 ? "s" : ""}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Representatives */}
      <div className="container py-16">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-10 h-10 rounded-xl bg-[oklch(0.38_0.14_152/0.2)] flex items-center justify-center">
            <Users size={20} className="text-[oklch(0.38_0.14_152)]" />
          </div>
          <div>
            <h2 className="text-2xl font-black text-[oklch(0.85_0.02_240)]">
              Représentants PNTD
            </h2>
            <p className="text-sm text-[oklch(0.60_0.03_240)]">
              Contacts responsables du programme dans cette région
            </p>
          </div>
        </div>

        {representatives.length === 0 ? (
          <div className="glass rounded-3xl p-12 text-center">
            <User size={48} className="text-[oklch(0.40_0.03_240)] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-[oklch(0.70_0.03_240)] mb-2">
              Représentants en cours de nomination
            </h3>
            <p className="text-[oklch(0.50_0.03_240)]">
              Les représentants pour cette région seront annoncés prochainement.
            </p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-6">
            {representatives.map((rep, i) => (
              <div
                key={rep.id}
                className="glass rounded-3xl p-6 card-3d group relative overflow-hidden"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Background glow */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-[oklch(0.38_0.14_152/0.05)] blur-2xl group-hover:bg-[oklch(0.38_0.14_152/0.10)] transition-all duration-500" />

                <div className="relative z-10 flex gap-5">
                  {rep.photoUrl ? (
                    <img
                      src={rep.photoUrl}
                      alt={rep.name}
                      className="w-20 h-20 rounded-2xl object-cover flex-shrink-0 border border-[oklch(0.38_0.14_152/0.3)]"
                    />
                  ) : (
                    <AvatarPlaceholder name={rep.name} />
                  )}

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-[oklch(0.90_0.02_240)] mb-0.5">{rep.name}</h3>
                    <div className="text-sm font-medium text-[oklch(0.75_0.15_75)] mb-3">{rep.role}</div>

                    {rep.bio && (
                      <p className="text-xs text-[oklch(0.60_0.03_240)] leading-relaxed mb-3">{rep.bio}</p>
                    )}

                    <div className="space-y-1.5">
                      {rep.email && (
                        <a
                          href={`mailto:${rep.email}`}
                          className="flex items-center gap-2 text-xs text-[oklch(0.60_0.03_240)] hover:text-[oklch(0.75_0.15_75)] transition-colors duration-200 group/link"
                        >
                          <Mail size={12} className="text-[oklch(0.38_0.14_152)] flex-shrink-0" />
                          <span className="truncate group-hover/link:underline">{rep.email}</span>
                        </a>
                      )}
                      {rep.phone && (
                        <a
                          href={`tel:${rep.phone}`}
                          className="flex items-center gap-2 text-xs text-[oklch(0.60_0.03_240)] hover:text-[oklch(0.75_0.15_75)] transition-colors duration-200"
                        >
                          <Phone size={12} className="text-[oklch(0.38_0.14_152)] flex-shrink-0" />
                          {rep.phone}
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Bottom accent */}
                <div className="mt-4 h-px w-0 group-hover:w-full transition-all duration-500 rounded-full bg-gradient-to-r from-[oklch(0.38_0.14_152)] to-transparent" />
              </div>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 glass rounded-3xl p-8 text-center">
          <div className="flex justify-center mb-4">
            <img src={LOGO_URL} alt="PNTD" className="w-12 h-12 rounded-full border border-[oklch(0.38_0.14_152/0.4)]" />
          </div>
          <h3 className="text-xl font-bold text-[oklch(0.85_0.02_240)] mb-2">
            Rejoindre le PNTD dans cette région ?
          </h3>
          <p className="text-[oklch(0.65_0.03_240)] mb-6 text-sm">
            Soumettez votre demande d'adhésion et nos représentants vous contacteront rapidement.
          </p>
          <button
            onClick={() => { navigate("/"); setTimeout(() => document.getElementById("join")?.scrollIntoView({ behavior: "smooth" }), 100); }}
            className="px-8 py-3 rounded-xl font-bold text-white transition-all duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(135deg, oklch(0.38 0.14 152), oklch(0.45 0.22 25))",
              boxShadow: "0 0 20px oklch(0.38 0.14 152 / 0.4)",
            }}
          >
            Soumettre une demande
          </button>
        </div>
      </div>
    </div>
  );
}
