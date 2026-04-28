import { useEffect, useRef } from "react";
import { ArrowDown, Cpu, Globe, Zap, Star, Shield, Network } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const LOGO_URL = "/manus-storage/pntd-logo_9f2d93ad.png";

// Moroccan zellige pattern SVG
function ZelligePattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-5"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="zellige" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
          <polygon points="30,0 60,15 60,45 30,60 0,45 0,15" fill="none" stroke="oklch(0.75 0.15 75)" strokeWidth="0.5" />
          <polygon points="30,10 50,20 50,40 30,50 10,40 10,20" fill="none" stroke="oklch(0.38 0.14 152)" strokeWidth="0.5" />
          <rect x="25" y="25" width="10" height="10" transform="rotate(45,30,30)" fill="none" stroke="oklch(0.75 0.15 75)" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#zellige)" />
    </svg>
  );
}

// Circuit board pattern
function CircuitPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-8"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="circuit" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
          <line x1="0" y1="60" x2="40" y2="60" stroke="oklch(0.38 0.14 152)" strokeWidth="0.8" opacity="0.4" />
          <line x1="40" y1="60" x2="40" y2="20" stroke="oklch(0.38 0.14 152)" strokeWidth="0.8" opacity="0.4" />
          <line x1="40" y1="20" x2="80" y2="20" stroke="oklch(0.38 0.14 152)" strokeWidth="0.8" opacity="0.4" />
          <line x1="80" y1="20" x2="80" y2="60" stroke="oklch(0.38 0.14 152)" strokeWidth="0.8" opacity="0.4" />
          <line x1="80" y1="60" x2="120" y2="60" stroke="oklch(0.38 0.14 152)" strokeWidth="0.8" opacity="0.4" />
          <line x1="60" y1="60" x2="60" y2="120" stroke="oklch(0.75 0.15 75)" strokeWidth="0.8" opacity="0.3" />
          <circle cx="40" cy="60" r="3" fill="oklch(0.38 0.14 152)" opacity="0.6" />
          <circle cx="80" cy="60" r="3" fill="oklch(0.38 0.14 152)" opacity="0.6" />
          <circle cx="60" cy="20" r="2" fill="oklch(0.75 0.15 75)" opacity="0.5" />
          <circle cx="40" cy="20" r="2" fill="oklch(0.75 0.15 75)" opacity="0.5" />
          <circle cx="80" cy="20" r="2" fill="oklch(0.75 0.15 75)" opacity="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

// Floating 3D icon
function FloatingIcon({ icon: Icon, delay, color, size = 40, top, left, right, bottom }: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  delay: number;
  color: string;
  size?: number;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
}) {
  const style: React.CSSProperties = {
    animationDelay: `${delay}s`,
    top, left, right, bottom,
  };
  return (
    <div
      className="absolute animate-float pointer-events-none"
      style={style}
    >
      <div
        className="p-3 rounded-2xl glass-gold"
        style={{
          boxShadow: `0 0 20px ${color}40, 0 0 40px ${color}20`,
          border: `1px solid ${color}50`,
        }}
      >
        <Icon size={size} className="opacity-80" />
      </div>
    </div>
  );
}

// Particle
function Particles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: Math.random() * 5,
    duration: 4 + Math.random() * 6,
    size: 2 + Math.random() * 4,
    color: i % 3 === 0 ? "oklch(0.38 0.14 152)" : i % 3 === 1 ? "oklch(0.75 0.15 75)" : "oklch(0.45 0.22 25)",
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full"
          style={{
            left: p.left,
            bottom: "-10px",
            width: `${p.size}px`,
            height: `${p.size}px`,
            background: p.color,
            boxShadow: `0 0 ${p.size * 2}px ${p.color}`,
            animation: `particle-rise ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}
    </div>
  );
}

// Arabesque ornament SVG
function ArabesqueOrnament({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 200" className={className} xmlns="http://www.w3.org/2000/svg">
      <g opacity="0.15" fill="none" stroke="oklch(0.75 0.15 75)" strokeWidth="1">
        <circle cx="100" cy="100" r="90" />
        <circle cx="100" cy="100" r="70" />
        <circle cx="100" cy="100" r="50" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle) => (
          <line
            key={angle}
            x1="100"
            y1="100"
            x2={100 + 90 * Math.cos((angle * Math.PI) / 180)}
            y2={100 + 90 * Math.sin((angle * Math.PI) / 180)}
          />
        ))}
        {[0, 45, 90, 135].map((angle) => (
          <rect
            key={angle}
            x="70"
            y="70"
            width="60"
            height="60"
            transform={`rotate(${angle},100,100)`}
            strokeWidth="0.8"
          />
        ))}
      </g>
    </svg>
  );
}

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      heroRef.current.style.setProperty("--mouse-x", `${x * 20}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y * 20}px`);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToRegions = () => {
    document.getElementById("regions")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToJoin = () => {
    document.getElementById("join")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse at 20% 50%, oklch(0.38 0.14 152 / 0.15) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, oklch(0.45 0.22 25 / 0.10) 0%, transparent 60%), oklch(0.06 0.02 240)",
      }}
    >
      {/* Background patterns */}
      <ZelligePattern />
      <CircuitPattern />
      <Particles />

      {/* Arabesque ornaments */}
      <ArabesqueOrnament className="absolute -top-20 -left-20 w-80 h-80 animate-rotate-slow opacity-40" />
      <ArabesqueOrnament className="absolute -bottom-20 -right-20 w-80 h-80 animate-rotate-reverse opacity-40" />
      <ArabesqueOrnament className="absolute top-1/2 -translate-y-1/2 right-10 w-48 h-48 opacity-30 animate-rotate-slow" />
      <ArabesqueOrnament className="absolute top-1/2 -translate-y-1/2 left-10 w-48 h-48 opacity-30 animate-rotate-reverse" />

      {/* Floating icons */}
      <FloatingIcon icon={Cpu} delay={0} color="oklch(0.38 0.14 152)" top="15%" left="8%" />
      <FloatingIcon icon={Globe} delay={1.5} color="oklch(0.75 0.15 75)" top="20%" right="10%" />
      <FloatingIcon icon={Zap} delay={0.8} color="oklch(0.45 0.22 25)" bottom="30%" left="6%" />
      <FloatingIcon icon={Star} delay={2} color="oklch(0.75 0.15 75)" bottom="25%" right="8%" />
      <FloatingIcon icon={Shield} delay={1.2} color="oklch(0.38 0.14 152)" top="60%" left="12%" size={30} />
      <FloatingIcon icon={Network} delay={0.5} color="oklch(0.45 0.22 25)" top="65%" right="14%" size={30} />

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[oklch(0.38_0.14_152/0.08)] blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[oklch(0.45_0.22_25/0.08)] blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[oklch(0.75_0.15_75/0.03)] blur-3xl pointer-events-none" />

      {/* Main content */}
      <div className="relative z-10 container text-center">
        <div className="max-w-5xl mx-auto">
          {/* Logo with 3D effect */}
          <div className="flex justify-center mb-8 animate-fade-scale">
            <div className="relative group">
              <div className="absolute inset-0 rounded-full bg-[oklch(0.38_0.14_152/0.4)] blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse-glow scale-150" />
              <div className="absolute inset-0 rounded-full bg-[oklch(0.75_0.15_75/0.2)] blur-xl scale-125 animate-pulse" />
              <img
                src={LOGO_URL}
                alt="PNTD Logo"
                className="relative w-28 h-28 object-contain rounded-full border-2 border-[oklch(0.38_0.14_152/0.6)] group-hover:scale-110 transition-transform duration-500 shadow-2xl"
                style={{ boxShadow: "0 0 40px oklch(0.38 0.14 152 / 0.5), 0 0 80px oklch(0.75 0.15 75 / 0.2)" }}
              />
            </div>
          </div>

          {/* Program name */}
          <div className="mb-4 animate-slide-up delay-100">
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-widest uppercase glass border border-[oklch(0.75_0.15_75/0.4)] text-[oklch(0.75_0.15_75)]">
              {t("hero.badge")}
            </span>
          </div>

          {/* Main title */}
          <h1 className="mb-6 animate-slide-up delay-200">
            <div className="text-5xl sm:text-6xl lg:text-7xl font-black mb-3 leading-tight">
              <span className="gradient-text-moroccan">PNTD</span>
            </div>
            <div
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-arabic animate-text-glow"
              style={{ fontFamily: "'Noto Sans Arabic', 'Cairo', sans-serif", direction: "rtl" }}
            >
              {t("hero.slogan_ar")}
            </div>
          </h1>

          {/* Slogan translation */}
          <p className="text-lg sm:text-xl text-[oklch(0.75_0.15_75)] font-medium mb-3 animate-slide-up delay-300">
            {t("hero.slogan_fr")}
          </p>

          {/* Description */}
          <p className="text-base sm:text-lg text-[oklch(0.70_0.03_240)] max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up delay-400">
            {t("hero.desc")}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 max-w-xl mx-auto mb-10 animate-slide-up delay-500">
            {[
              { value: "12", label: t("hero.stat_regions") },
              { value: "6", label: t("hero.stat_sectors") },
              { value: "2030", label: t("hero.stat_vision") },
            ].map((stat) => (
              <div key={stat.label} className="glass rounded-2xl p-4 group hover:scale-105 transition-transform duration-300">
                <div className="text-2xl sm:text-3xl font-black gradient-text-moroccan">{stat.value}</div>
                <div className="text-xs text-[oklch(0.65_0.03_240)] mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-600">
            <button
              onClick={scrollToJoin}
              className="group relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(135deg, oklch(0.38 0.14 152), oklch(0.45 0.22 25))",
                boxShadow: "0 0 30px oklch(0.38 0.14 152 / 0.5)",
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                <Zap size={18} />
                {t("hero.cta_join")}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[oklch(0.45_0.22_25)] to-[oklch(0.38_0.14_152)] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <button
              onClick={scrollToRegions}
              className="group px-8 py-4 rounded-2xl font-bold glass border border-[oklch(0.38_0.14_152/0.5)] text-[oklch(0.85_0.02_240)] hover:border-[oklch(0.75_0.15_75)] hover:text-white transition-all duration-300 hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Globe size={18} />
                {t("hero.cta_explore")}
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToRegions}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[oklch(0.65_0.03_240)] hover:text-[oklch(0.75_0.15_75)] transition-colors duration-300 group"
      >
        <span className="text-xs tracking-widest uppercase">Découvrir</span>
        <ArrowDown size={20} className="animate-bounce" />
      </button>
    </section>
  );
}
