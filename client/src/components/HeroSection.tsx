import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

// Grid pattern with plus signs
function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-[0.07]"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern id="grid-plus" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M20 15v10M15 20h10" stroke="currentColor" strokeWidth="1" fill="none" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid-plus)" className="text-white" />
    </svg>
  );
}

// Royal Emblem SVG (Crescent and Star)
function RoyalEmblem() {
  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <div className="absolute inset-0 rounded-full border border-[#c5a059] opacity-40 animate-pulse" />
      <div className="absolute inset-2 rounded-full border border-[#c5a059] opacity-60" />
      <svg viewBox="0 0 100 100" className="w-16 h-16 fill-[#c5a059]">
        {/* Crescent */}
        <path d="M50 20 C33.4 20 20 33.4 20 50 C20 66.6 33.4 80 50 80 C40 80 32 72 32 50 C32 28 40 20 50 20 Z" />
        {/* Star */}
        <path d="M60 45 L64 54 L73 54 L66 60 L68 69 L60 63 L52 69 L54 60 L47 54 L56 54 Z" />
      </svg>
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t, dir } = useLanguage();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center bg-[#062016] text-white overflow-hidden pt-20"
      style={{ direction: dir }}
    >
      {/* Background elements */}
      <GridPattern />
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#c5a059]/5 to-transparent pointer-events-none" />
      
      <div className="container relative z-10 mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div 
          style={{ y, opacity }}
          initial={{ opacity: 0, x: dir === 'rtl' ? 50 : -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className={`flex flex-col gap-8 ${dir === 'rtl' ? 'items-end text-right' : 'items-start text-left'}`}
        >
          {/* Badge */}
          <div className="flex">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#c5a059]/30 bg-[#c5a059]/10 backdrop-blur-md">
              <span className="text-[#c5a059] text-[10px] tracking-[0.2em] font-bold uppercase flex items-center gap-2">
                <span className="text-sm">★</span> {t("hero.badge")}
              </span>
            </div>
          </div>

          {/* Subtitle */}
          <div className={`flex flex-col gap-2 ${dir === 'rtl' ? 'items-end' : 'items-start'}`}>
            <span className="text-[#c5a059] text-xs tracking-[0.3em] font-medium uppercase opacity-80">
              {t("hero.subtitle")}
            </span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif italic leading-tight">
              <span className="text-[#c5a059] block">{t("hero.title_part1")}</span>
              <span className="text-white block not-italic font-sans font-bold mt-2">{t("hero.title_part2")}</span>
            </h1>
          </div>

          {/* Quote */}
          <div className="relative max-w-xl">
            <div className={`absolute top-0 bottom-0 w-[2px] bg-[#c5a059]/40 ${dir === 'rtl' ? '-right-4' : '-left-4'}`} />
            <div className={`${dir === 'rtl' ? 'pr-6 text-right' : 'pl-6 text-left'} flex flex-col gap-4`}>
              <p className="text-lg text-white/70 italic leading-relaxed font-serif whitespace-pre-line">
                {t("hero.quote")}
              </p>
              <span
                className={
                  dir === "rtl"
                    ? "text-[#c5a059] text-sm font-bold"
                    : "text-[#c5a059] text-xs tracking-widest font-bold uppercase"
                }
              >
                {t("hero.quote_author")}
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex flex-wrap gap-6 mt-4">
            <button className="btn-moroccan-gradient px-8 py-4 font-bold text-xs tracking-widest uppercase flex items-center gap-3">
              {t("hero.cta_discover")}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
            <button className="group px-8 py-4 border border-white/20 hover:border-[#c5a059] hover:text-[#c5a059] font-bold text-xs tracking-widest uppercase transition-all flex items-center gap-3">
              {t("hero.cta_join")}
              <ArrowRight className={`w-4 h-4 transition-transform group-hover:translate-x-1 ${dir === 'rtl' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-12 border-t border-white/10 mt-4 w-full">
            {[
              { value: "12", label: t("hero.stat.regions") },
              { value: "75+", label: t("hero.stat.villes") },
              { value: "8", label: t("hero.stat.sectors") },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                className={`flex flex-col gap-1 ${dir === 'rtl' ? 'items-end' : 'items-start'}`}
              >
                <span className="text-3xl font-serif text-[#c5a059]">{stat.value}</span>
                <span className="text-[10px] tracking-[0.2em] text-white/40 uppercase font-bold">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Content - Royal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:flex justify-center items-center"
        >
          {/* Card Backgrounds (Stacked effect) */}
          <div className="absolute w-[400px] h-[550px] border border-[#c5a059]/20 translate-x-4 -translate-y-4" />
          <div className="absolute w-[400px] h-[550px] border border-[#c5a059]/10 translate-x-8 -translate-y-8" />
          
          <div className="relative w-[400px] h-[550px] bg-[#0a2f1f] border border-[#c5a059]/30 shadow-2xl flex flex-col items-center justify-center p-12 text-center gap-8 group overflow-hidden">
            <div className="absolute inset-0 opacity-[0.06] pointer-events-none">
              <img
                src="/pntd.png"
                alt=""
                aria-hidden="true"
                className="w-full h-full object-contain scale-90"
              />
            </div>
            {/* Hover Shine Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <RoyalEmblem />
            
            <div className="flex flex-col gap-3">
              <h3 className="text-[#c5a059] text-sm tracking-[0.2em] font-bold uppercase leading-relaxed">
                {t("hero.royal.title")}
              </h3>
              <p className="text-white/40 text-[10px] tracking-[0.3em] uppercase font-medium">
                {t("hero.royal.blessing")}
              </p>
              <p className="text-[#c5a059]/60 text-xs tracking-[0.2em] uppercase font-bold">
                {t("hero.royal.rank")}
              </p>
            </div>

            {/* Decorative bottom line */}
            <div className="absolute bottom-12 w-12 h-[1px] bg-[#c5a059]/40" />
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] tracking-[0.4em] text-white/40 uppercase font-bold">
          {t("hero.scroll")}
        </span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-[#c5a059] to-transparent relative overflow-hidden">
          <motion.div 
            animate={{ y: [0, 48] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 left-0 w-full h-1/2 bg-white"
          />
        </div>
      </motion.div>
    </section>
  );
}
