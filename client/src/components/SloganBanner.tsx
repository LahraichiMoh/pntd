export default function SloganBanner() {
  const items = [
    "نحو مستقبل رقمي واعد",
    "Vers un avenir numérique prometteur",
    "PNTD · Programme National de Transformation Digitale",
    "Intelligence Artificielle · Innovation · Excellence",
    "🇲🇦 Maroc Digital 2030",
    "نحو مستقبل رقمي واعد",
    "Vers un avenir numérique prometteur",
    "PNTD · Programme National de Transformation Digitale",
    "Intelligence Artificielle · Innovation · Excellence",
    "🇲🇦 Maroc Digital 2030",
  ];

  return (
    <div className="relative overflow-hidden py-4 border-y border-[oklch(0.38_0.14_152/0.2)]"
      style={{ background: "oklch(0.38 0.14 152 / 0.05)" }}
    >
      <div className="flex gap-12 animate-[marquee_10s_linear_infinite] whitespace-nowrap">
        {items.map((item, i) => (
          <span
            key={i}
            className="text-sm font-semibold flex-shrink-0"
            style={{
              color: i % 2 === 0 ? "oklch(0.75 0.15 75)" : "oklch(0.65 0.03 240)",
              fontFamily: item.includes("نحو") ? "'Noto Sans Arabic', sans-serif" : "inherit",
            }}
          >
            {item}
          </span>
        ))}
      </div>
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[oklch(0.27_0.05_161.09)] to-transparent pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[oklch(0.27_0.05_161.09)] to-transparent pointer-events-none" />

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  );
}
