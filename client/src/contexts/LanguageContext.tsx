import { createContext, useContext, useState, ReactNode } from "react";

export type Language = "fr" | "ar" | "en";

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Nav
    "nav.home": "Accueil",
    "nav.about": "À propos",
    "nav.regions": "Régions",
    "nav.services": "Services",
    "nav.partners": "Partenaires",
    "nav.join": "Rejoindre",
    "nav.vision": "Vision 2030",

    // Hero
    "hero.badge": "INITIATIVE NATIONALE 2026-2030",
    "hero.subtitle": "ROYAUME DU MAROC · SOCIÉTÉ CIVILE",
    "hero.title_part1": "Pour un Maroc",
    "hero.title_part2": "Solidaire & Prospère",
    "hero.quote": "« Le citoyen est au cœur de toutes les politiques publiques. »",
    "hero.quote_author": "VISION NATIONALE",
    "hero.cta_discover": "DÉCOUVRIR LE PROGRAMME",
    "hero.cta_join": "REJOINDRE",
    "hero.stat.regions": "RÉGIONS",
    "hero.stat.villes": "VILLES",
    "hero.stat.sectors": "SECTEURS",
    "hero.scroll": "DÉFILER",
    "hero.royal.title": "VISION NATIONALE",
    "hero.royal.blessing": "HORIZON 2030",
    "hero.royal.rank": "INITIATIVE MAROCAINE",
    "hero.desc": "Le Programme National de Transformation Digitale, enrichi par l'Intelligence Artificielle, propulse le Maroc vers la Vision 2030 — une économie du savoir, de l'innovation et de la compétitivité mondiale.",
    "hero.cta_explore": "Explorer les Régions",
    "hero.stat_regions": "Régions",
    "hero.stat_sectors": "Secteurs",
    "hero.stat_vision": "Vision",

    // Map section
    "map.title": "Carte des Régions",
    "map.subtitle": "Cliquez sur une région pour découvrir les représentants du PNTD",
    "map.regions_list": "Les 12 Régions du Maroc",
    "map.click_hint": "Sélectionnez une région",

    // Services
    "services.title": "Nos Services",
    "services.subtitle": "Des solutions digitales complètes pour votre transformation numérique",
    "services.apps.title": "Développement d'Applications",
    "services.apps.desc": "Création d'applications mobiles et web innovantes, adaptées aux besoins spécifiques de votre secteur d'activité.",
    "services.web.title": "Conception de Sites Web",
    "services.web.desc": "Design et développement de sites web professionnels, responsives et optimisés pour les moteurs de recherche.",
    "services.solutions.title": "Solutions Électroniques",
    "services.solutions.desc": "Conception de solutions digitales intégrées pour moderniser vos processus et améliorer votre efficacité opérationnelle.",
    "services.marketing.title": "Marketing Digital",
    "services.marketing.desc": "Stratégies de marketing numérique pour renforcer votre présence en ligne et développer votre activité sur les marchés digitaux.",
    "services.discover": "Découvrir",

    // About
    "about.title": "À propos du PNTD",
    "about.subtitle": "Programme National de Transformation Digitale",
    "about.p1": "Le PNTD est une initiative nationale ambitieuse visant à accélérer la transformation numérique du Maroc dans tous les secteurs économiques et sociaux. Enrichi par l'Intelligence Artificielle, ce programme constitue un levier stratégique pour positionner le Royaume comme hub digital régional.",
    "about.p2": "Aligné sur la Vision Royale 2030, le PNTD œuvre pour démocratiser l'accès aux technologies numériques, renforcer les compétences digitales des citoyens et des entreprises, et créer un écosystème d'innovation favorable à la croissance économique durable.",
    "about.sectors_title": "Secteurs Ciblés",
    "about.sector_social": "Économie Sociale",
    "about.sector_edu": "Éducation & Formation",
    "about.sector_entre": "Entrepreneuriat",
    "about.sector_ecom": "Commerce Électronique",
    "about.sector_quality": "Qualité & Sécurité",
    "about.sector_gov": "Gouvernance Digitale",

    // Advantages
    "adv.title": "Pourquoi rejoindre le PNTD?",
    "adv.subtitle": "Des avantages concrets pour votre développement",
    "adv.cert.title": "Accréditation Internationale",
    "adv.cert.desc": "Certifications reconnues à l'échelle mondiale, validant vos compétences digitales auprès des partenaires internationaux.",
    "adv.infra.title": "Infrastructure Digitale",
    "adv.infra.desc": "Accès à une infrastructure technologique de pointe, incluant des plateformes cloud, des outils IA et des ressources numériques avancées.",
    "adv.market.title": "Accès aux Marchés Mondiaux",
    "adv.market.desc": "Connexion aux réseaux internationaux via nos partenariats avec les Émirats Arabes Unis et la Chine.",
    "adv.support.title": "Accompagnement Continu",
    "adv.support.desc": "Suivi personnalisé et coaching expert pour maximiser votre impact et accélérer votre croissance digitale.",

    // Partners
    "partners.title": "Nos Partenaires",
    "partners.subtitle": "Un réseau international d'excellence",
    "partners.intl": "Partenaires Internationaux",
    "partners.companies": "Entreprises Partenaires",

    // Join
    "join.title": "Rejoindre le Programme",
    "join.subtitle": "Faites partie de la révolution digitale marocaine",
    "join.name": "Nom complet",
    "join.email": "Adresse email",
    "join.phone": "Téléphone",
    "join.region": "Région",
    "join.sector": "Secteur d'activité",
    "join.profile": "Type de profil",
    "join.message": "Message (optionnel)",
    "join.submit": "Soumettre ma demande",
    "join.success": "Votre demande a été soumise avec succès!",
    "join.profile_assoc": "Association",
    "join.profile_teacher": "Enseignant / Formateur",
    "join.profile_entre": "Entrepreneur",
    "join.profile_other": "Autre",

    // Vision 2030
    "vision.title": "Vision Maroc 2030",
    "vision.subtitle": "Un Maroc numérique, innovant et compétitif",
    "vision.hero_text": "La Vision Royale 2030 place le digital au cœur du développement national",

    // Region page
    "region.representatives": "Représentants Régionaux",
    "region.contact": "Contacter",
    "region.back": "Retour à la carte",
    "region.no_rep": "Aucun représentant enregistré pour cette région.",
    "region.capital": "Chef-lieu",
    "region.search": "Rechercher une région...",

    // Footer
    "footer.rights": "Tous droits réservés",
    "footer.program": "Programme National de Transformation Digitale",
    "footer.desc": "Le PNTD est une initiative nationale propulsant le Maroc vers un avenir numérique inclusif et prospère.",
    "footer.contact_title": "Contact",
    "footer.nav_title": "Navigation",
    "footer.made_with": "Fait avec",
    "footer.for_morocco": "pour le Maroc Digital",
  },
  ar: {
    "nav.home": "الرئيسية",
    "nav.about": "حول البرنامج",
    "nav.regions": "الجهات",
    "nav.services": "الخدمات",
    "nav.partners": "الشركاء",
    "nav.join": "انضم إلينا",
    "nav.vision": "رؤية 2030",

    "hero.badge": "المبادرة الوطنية 2026-2030",
    "hero.subtitle": "المملكة المغربية · المجتمع المدني",
    "hero.title_part1": "من أجل مغرب",
    "hero.title_part2": "متضامن ومزدهر",
    "hero.quote": "« المواطن هو الغاية من كل مشروع تنموي. »",
    "hero.quote_author": "الرؤية الوطنية",
    "hero.cta_discover": "اكتشف البرنامج",
    "hero.cta_join": "انضم إلينا",
    "hero.stat.regions": "جهة",
    "hero.stat.villes": "مدينة",
    "hero.stat.sectors": "قطاع",
    "hero.scroll": "تمرير",
    "hero.royal.title": "الرؤية الوطنية",
    "hero.royal.blessing": "أفق 2030",
    "hero.royal.rank": "مبادرة مغربية",
    "hero.desc": "البرنامج الوطني للتحول الرقمي، المعزز بالذكاء الاصطناعي، يدفع المغرب نحو رؤية 2030 — اقتصاد المعرفة والابتكار والتنافسية العالمية.",
    "hero.cta_explore": "استكشف الجهات",
    "hero.stat_regions": "جهة",
    "hero.stat_sectors": "قطاع",
    "hero.stat_vision": "رؤية",

    "map.title": "خريطة الجهات",
    "map.subtitle": "انقر على جهة لاكتشاف ممثلي البرنامج الوطني للتحول الرقمي",
    "map.regions_list": "الجهات الـ 12 للمغرب",
    "map.click_hint": "اختر جهة",

    "services.title": "خدماتنا",
    "services.subtitle": "حلول رقمية متكاملة لتحولك الرقمي",
    "services.apps.title": "تطوير التطبيقات",
    "services.apps.desc": "إنشاء تطبيقات جوال وويب مبتكرة، مصممة لتلبية الاحتياجات الخاصة بقطاع نشاطك.",
    "services.web.title": "تصميم المواقع الإلكترونية",
    "services.web.desc": "تصميم وتطوير مواقع ويب احترافية ومتجاوبة ومحسّنة لمحركات البحث.",
    "services.solutions.title": "الحلول الإلكترونية",
    "services.solutions.desc": "تصميم حلول رقمية متكاملة لتحديث عملياتك وتحسين كفاءتك التشغيلية.",
    "services.marketing.title": "التسويق الإلكتروني",
    "services.marketing.desc": "استراتيجيات التسويق الرقمي لتعزيز حضورك على الإنترنت وتنمية نشاطك في الأسواق الرقمية.",
    "services.discover": "اكتشف",

    "about.title": "حول البرنامج الوطني للتحول الرقمي",
    "about.subtitle": "البرنامج الوطني للتحول الرقمي",
    "about.p1": "البرنامج الوطني للتحول الرقمي مبادرة وطنية طموحة تهدف إلى تسريع التحول الرقمي للمغرب في جميع القطاعات الاقتصادية والاجتماعية. معزز بالذكاء الاصطناعي، يشكل هذا البرنامج رافعة استراتيجية لتموضع المملكة كمحور رقمي إقليمي.",
    "about.p2": "بما يتوافق مع الرؤية الملكية 2030، يعمل البرنامج على إضفاء الطابع الديمقراطي على الوصول إلى التقنيات الرقمية، وتعزيز المهارات الرقمية للمواطنين والشركات، وخلق بيئة ابتكار ملائمة للنمو الاقتصادي المستدام.",
    "about.sectors_title": "القطاعات المستهدفة",
    "about.sector_social": "الاقتصاد الاجتماعي",
    "about.sector_edu": "التعليم والتكوين",
    "about.sector_entre": "ريادة الأعمال",
    "about.sector_ecom": "التجارة الإلكترونية",
    "about.sector_quality": "الجودة والأمن",
    "about.sector_gov": "الحوكمة الرقمية",

    "adv.title": "لماذا تنضم إلى البرنامج؟",
    "adv.subtitle": "مزايا ملموسة لتطورك",
    "adv.cert.title": "اعتماد دولي",
    "adv.cert.desc": "شهادات معترف بها عالمياً تُثبت كفاءاتك الرقمية لدى الشركاء الدوليين.",
    "adv.infra.title": "بنية تحتية رقمية",
    "adv.infra.desc": "الوصول إلى بنية تحتية تكنولوجية متطورة تشمل منصات سحابية وأدوات ذكاء اصطناعي.",
    "adv.market.title": "الوصول إلى الأسواق العالمية",
    "adv.market.desc": "الاتصال بالشبكات الدولية عبر شراكاتنا مع الإمارات العربية المتحدة والصين.",
    "adv.support.title": "مرافقة مستمرة",
    "adv.support.desc": "متابعة شخصية وتدريب متخصص لتعظيم تأثيرك وتسريع نموك الرقمي.",

    "partners.title": "شركاؤنا",
    "partners.subtitle": "شبكة دولية من التميز",
    "partners.intl": "الشركاء الدوليون",
    "partners.companies": "الشركات الشريكة",

    "join.title": "انضم إلى البرنامج",
    "join.subtitle": "كن جزءاً من الثورة الرقمية المغربية",
    "join.name": "الاسم الكامل",
    "join.email": "البريد الإلكتروني",
    "join.phone": "الهاتف",
    "join.region": "الجهة",
    "join.sector": "قطاع النشاط",
    "join.profile": "نوع الملف الشخصي",
    "join.message": "رسالة (اختياري)",
    "join.submit": "إرسال الطلب",
    "join.success": "تم إرسال طلبك بنجاح!",
    "join.profile_assoc": "جمعية",
    "join.profile_teacher": "أستاذ / مكوّن",
    "join.profile_entre": "رائد أعمال",
    "join.profile_other": "أخرى",

    "vision.title": "رؤية المغرب 2030",
    "vision.subtitle": "مغرب رقمي ومبتكر وتنافسي",
    "vision.hero_text": "الرؤية الملكية 2030 تضع الرقمي في قلب التنمية الوطنية",

    "region.representatives": "الممثلون الجهويون",
    "region.contact": "تواصل",
    "region.back": "العودة إلى الخريطة",
    "region.no_rep": "لا يوجد ممثلون مسجلون لهذه الجهة.",
    "region.capital": "عاصمة الجهة",
    "region.search": "البحث عن جهة...",

    "footer.rights": "جميع الحقوق محفوظة",
    "footer.program": "البرنامج الوطني للتحول الرقمي",
    "footer.desc": "البرنامج الوطني للتحول الرقمي هو مبادرة وطنية تدفع المغرب نحو مستقبل رقمي شامل ومزدهر.",
    "footer.contact_title": "اتصال",
    "footer.nav_title": "الملاحة",
    "footer.made_with": "صنع بـ",
    "footer.for_morocco": "للمغرب الرقمي",
  },
  en: {
    "nav.home": "Home",
    "nav.about": "About",
    "nav.regions": "Regions",
    "nav.services": "Services",
    "nav.partners": "Partners",
    "nav.join": "Join",
    "nav.vision": "Vision 2030",

    "hero.badge": "NATIONAL INITIATIVE 2026-2030",
    "hero.subtitle": "KINGDOM OF MOROCCO · CIVIL SOCIETY",
    "hero.title_part1": "For a United",
    "hero.title_part2": "& Prosperous Morocco",
    "hero.quote": "« The citizen is at the heart of all public policies. »",
    "hero.quote_author": "NATIONAL VISION",
    "hero.cta_discover": "DISCOVER THE PROGRAM",
    "hero.cta_join": "JOIN",
    "hero.stat.regions": "REGIONS",
    "hero.stat.villes": "CITIES",
    "hero.stat.sectors": "SECTORS",
    "hero.scroll": "SCROLL",
    "hero.royal.title": "NATIONAL VISION",
    "hero.royal.blessing": "HORIZON 2030",
    "hero.royal.rank": "MOROCCAN INITIATIVE",
    "hero.desc": "The National Digital Transformation Program, enriched by Artificial Intelligence, propels Morocco towards Vision 2030 — an economy of knowledge, innovation, and global competitiveness.",
    "hero.cta_explore": "Explore Regions",
    "hero.stat_regions": "Regions",
    "hero.stat_sectors": "Sectors",
    "hero.stat_vision": "Vision",

    "map.title": "Regions Map",
    "map.subtitle": "Click on a region to discover PNTD representatives",
    "map.regions_list": "Morocco's 12 Regions",
    "map.click_hint": "Select a region",

    "services.title": "Our Services",
    "services.subtitle": "Complete digital solutions for your digital transformation",
    "services.apps.title": "App Development",
    "services.apps.desc": "Creating innovative mobile and web applications tailored to your specific sector needs.",
    "services.web.title": "Website Design",
    "services.web.desc": "Design and development of professional, responsive, SEO-optimized websites.",
    "services.solutions.title": "Electronic Solutions",
    "services.solutions.desc": "Integrated digital solutions to modernize your processes and improve operational efficiency.",
    "services.marketing.title": "Digital Marketing",
    "services.marketing.desc": "Digital marketing strategies to strengthen your online presence and grow your business in digital markets.",
    "services.discover": "Discover",

    "about.title": "About PNTD",
    "about.subtitle": "National Digital Transformation Program",
    "about.p1": "The PNTD is an ambitious national initiative aimed at accelerating Morocco's digital transformation across all economic and social sectors. Enhanced by Artificial Intelligence, this program is a strategic lever to position the Kingdom as a regional digital hub.",
    "about.p2": "Aligned with the Royal Vision 2030, the PNTD works to democratize access to digital technologies, strengthen digital skills of citizens and businesses, and create an innovation ecosystem conducive to sustainable economic growth.",
    "about.sectors_title": "Targeted Sectors",
    "about.sector_social": "Social Economy",
    "about.sector_edu": "Education & Training",
    "about.sector_entre": "Entrepreneurship",
    "about.sector_ecom": "E-Commerce",
    "about.sector_quality": "Quality & Security",
    "about.sector_gov": "Digital Governance",

    "adv.title": "Why join PNTD?",
    "adv.subtitle": "Concrete benefits for your development",
    "adv.cert.title": "International Accreditation",
    "adv.cert.desc": "Globally recognized certifications validating your digital skills with international partners.",
    "adv.infra.title": "Digital Infrastructure",
    "adv.infra.desc": "Access to cutting-edge technological infrastructure including cloud platforms, AI tools, and advanced digital resources.",
    "adv.market.title": "Access to Global Markets",
    "adv.market.desc": "Connection to international networks through our partnerships with the UAE and China.",
    "adv.support.title": "Continuous Support",
    "adv.support.desc": "Personalized follow-up and expert coaching to maximize your impact and accelerate your digital growth.",

    "partners.title": "Our Partners",
    "partners.subtitle": "An international network of excellence",
    "partners.intl": "International Partners",
    "partners.companies": "Partner Companies",

    "join.title": "Join the Program",
    "join.subtitle": "Be part of the Moroccan digital revolution",
    "join.name": "Full name",
    "join.email": "Email address",
    "join.phone": "Phone",
    "join.region": "Region",
    "join.sector": "Sector",
    "join.profile": "Profile type",
    "join.message": "Message (optional)",
    "join.submit": "Submit my application",
    "join.success": "Your application has been submitted successfully!",
    "join.profile_assoc": "Association",
    "join.profile_teacher": "Teacher / Trainer",
    "join.profile_entre": "Entrepreneur",
    "join.profile_other": "Other",

    "vision.title": "Morocco Vision 2030",
    "vision.subtitle": "A digital, innovative and competitive Morocco",
    "vision.hero_text": "The Royal Vision 2030 places digital at the heart of national development",

    "region.representatives": "Regional Representatives",
    "region.contact": "Contact",
    "region.back": "Back to map",
    "region.no_rep": "No representatives registered for this region.",
    "region.capital": "Capital",
    "region.search": "Search a region...",

    "footer.rights": "All rights reserved",
    "footer.program": "National Digital Transformation Program",
    "footer.desc": "The PNTD is a national initiative propelling Morocco towards an inclusive and prosperous digital future.",
    "footer.contact_title": "Contact",
    "footer.nav_title": "Navigation",
    "footer.made_with": "Made with",
    "footer.for_morocco": "for Digital Morocco",
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: "fr",
  setLang: () => {},
  t: (key) => key,
  dir: "ltr",
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("fr");

  const t = (key: string): string => {
    return translations[lang][key] ?? translations["fr"][key] ?? key;
  };

  const dir = lang === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, dir }}>
      <div dir={dir} lang={lang}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
