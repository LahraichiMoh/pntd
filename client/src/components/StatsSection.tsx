import { useEffect, useRef, useState } from "react";
import { Users, Globe, Award, TrendingUp, Cpu, Zap } from "lucide-react";

const stats = [
  { value: 12, suffix: "", label: "Régions couvertes", icon: Globe, color: "oklch(0.38 0.14 152)" },
  { value: 6, suffix: "+", label: "Secteurs ciblés", icon: TrendingUp, color: "oklch(0.75 0.15 75)" },
  { value: 2, suffix: "", label: "Partenaires internationaux", icon: Award, color: "oklch(0.45 0.22 25)" },
  { value: 2030, suffix: "", label: "Vision nationale", icon: Zap, color: "oklch(0.38 0.14 152)" },
  { value: 100, suffix: "%", label: "Couverture nationale", icon: Users, color: "oklch(0.75 0.15 75)" },
  { value: 3, suffix: " types", label: "De profils éligibles", icon: Cpu, color: "oklch(0.45 0.22 25)" },
];

function AnimatedNumber({ target, suffix }: { target: number; suffix: string }) {
  const [current, setCurrent] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let step = 0;
    const timer = setInterval(() => {
      step++;
      setCurrent(Math.min(Math.round(increment * step), target));
      if (step >= steps) clearInterval(timer);
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <span ref={ref}>
      {current.toLocaleString()}{suffix}
    </span>
  );
}

export default function StatsSection() {
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
    <section className="py-16 relative overflow-hidden" ref={ref}>
      {/* Dividers */}
      <div className="absolute top-0 left-0 right-0 h-px section-divider" />
      <div className="absolute bottom-0 left-0 right-0 h-px section-divider" />

      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, oklch(0.38 0.14 152 / 0.05) 0%, oklch(0.75 0.15 75 / 0.03) 50%, oklch(0.45 0.22 25 / 0.05) 100%)",
        }}
      />

      <div className="relative z-10 container">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="reveal glass rounded-2xl p-5 text-center group hover:scale-105 transition-all duration-300 card-3d"
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300"
                style={{ background: `${stat.color}20`, border: `1px solid ${stat.color}30` }}
              >
                <stat.icon size={18} style={{ color: stat.color }} />
              </div>
              <div
                className="text-2xl font-black mb-1"
                style={{ color: stat.color }}
              >
                <AnimatedNumber target={stat.value} suffix={stat.suffix} />
              </div>
              <div className="text-xs text-[oklch(0.55_0.03_240)] leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
