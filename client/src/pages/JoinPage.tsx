import JoinSection from "@/components/JoinSection";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function JoinPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="pt-20">
        <JoinSection />
      </div>
      <Footer />
    </div>
  );
}
