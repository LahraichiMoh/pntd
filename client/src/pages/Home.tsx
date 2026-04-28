import HeroSection from "@/components/HeroSection";
import SloganBanner from "@/components/SloganBanner";
import StatsSection from "@/components/StatsSection";
import MoroccoMap from "@/components/MoroccoMap";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PartnersCarousel from "@/components/PartnersCarousel";
import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="hero">
        <HeroSection />
      </div>
      <SloganBanner />
      <StatsSection />
      <ServicesSection />
      <MoroccoMap />
      <AboutSection />
      <PartnersCarousel />
      <JoinSection />
      <Footer />
    </div>
  );
}
