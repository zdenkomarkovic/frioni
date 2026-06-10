import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import PersonalService from "@/components/PersonalService";
import HowIWork from "@/components/HowIWork";
import Reviews from "@/components/Reviews";
import Stats from "@/components/Stats";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <PersonalService />
        <Services />
        <HowIWork />
        <Stats />

        <Reviews />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
