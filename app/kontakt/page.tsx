import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kontakt | FRIONI Servis Klima Uređaja",
  description: "Pošaljite zahtev za servis klima uređaja. Kontaktirajte FRIONI tim – odgovaramo isti dan.",
};

export default function KontaktPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
