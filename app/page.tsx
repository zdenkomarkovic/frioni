import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustBadges from "@/components/TrustBadges";
import Services from "@/components/Services";
import PersonalService from "@/components/PersonalService";
import HowIWork from "@/components/HowIWork";
import Pricing from "@/components/Pricing";
import Reviews from "@/components/Reviews";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBadges />
        <PersonalService />
        <HowIWork />
        <Services />

        <Pricing />
        <Reviews />
      </main>
      <Footer />
    </>
  );
}
