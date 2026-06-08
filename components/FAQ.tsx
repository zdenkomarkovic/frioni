"use client";

import { useState } from "react";

const faqs = [
  {
    question: "Gde obavljate servis klima uređaja u Beogradu?",
    answer:
      "FRIONI pruža usluge servisiranja klima uređaja na teritoriji čitavog Beograda — Novi Beograd, Zemun, Voždovac, Zvezdara, Rakovica, Čukarica, Palilula i ostale opštine. Klima servis Beograd dostupan je za sve marke i modele uređaja.",
  },
  {
    question: "Šta uključuje servis klima uređaja?",
    answer:
      "Servis klima uređaja Beograd koji izvodimo obuhvata čišćenje filtera, pranje unutrašnje jedinice, proveru pritiska i temperature, dezinfekciju sistema i završnu kontrolu rada uređaja. Sve radimo temeljno, po jasnom postupku.",
  },
  {
    question: "Koliko često treba raditi čišćenje klima uređaja?",
    answer:
      "Preporučujemo čišćenje klima Beograd najmanje jednom godišnje, idealno pre letnje sezone. Uređaji koji rade intenzivno (kancelarije, lokali) zahtevaju češće održavanje — na svakih 6 meseci.",
  },
  {
    question: "Šta je dubinsko pranje klime i kada je potrebno?",
    answer:
      "Dubinsko pranje klima Beograd podrazumeva pranje unutrašnje jedinice pod pritiskom sa specijalnim sredstvima. Preporučuje se kada uređaj ispušta neprijatan miris, slabije hladi ili nije servisan duže od godinu dana.",
  },
  {
    question: "Da li servisujete inverter klima uređaje?",
    answer:
      "Da. Servis inverter klima Beograd je jedna od naših specijalnosti. Inverter uređaji zahtevaju pažljiviji pristup tokom dijagnostike i punjenja rashladnim gasom — što je nešto čemu posvećujemo posebnu pažnju.",
  },
  {
    question: "Kako se zakazuje servis i koliko se čeka?",
    answer:
      "Zakazivanje je jednostavno — pozovite nas ili pošaljite zahtev putem kontakt forme. Odgovaramo isti dan, a termin dogovaramo u skladu sa vašim rasporedom. Dolazimo tačno u dogovoreno vreme.",
  },
  {
    question: "Da li nudite redovno održavanje klima uređaja?",
    answer:
      "Da. Održavanje klima uređaja Beograd možete organizovati jednom ili dva puta godišnje. Vodimo evidenciju prethodnih intervencija pa ne morate brinuti o tome kada je uređaj poslednji put servisiran.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-20 bg-[#07091a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3 text-center">
          Česta pitanja
        </p>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white text-center mb-12">
          Sve što vas zanima o servisu klima uređaja
        </h2>

        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div
                key={i}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0c1220] border-orange-500/30"
                    : "bg-[#0c1220] border-white/8 hover:border-white/20"
                }`}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-5 px-6 py-5 text-left group"
                >
                  <span
                    className="text-xl font-black tabular-nums flex-shrink-0"
                    style={{
                      backgroundImage: "linear-gradient(to right, #1d4ed8, #ea580c)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`flex-1 font-semibold text-base sm:text-lg transition-colors ${isOpen ? "text-white" : "text-gray-200 group-hover:text-white"}`}>
                    {faq.question}
                  </span>
                  <span
                    className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen ? "bg-orange-500/20 rotate-45" : "bg-white/5 group-hover:bg-white/10"
                    }`}
                  >
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      className={`w-5 h-5 transition-colors ${isOpen ? "text-orange-400" : "text-gray-400"}`}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                  </span>
                </button>

                <div
                  className={`transition-all duration-300 overflow-hidden ${
                    isOpen ? "max-h-64" : "max-h-0"
                  }`}
                >
                  <div className="px-6 pb-6 pl-16">
                    <p className="text-gray-400 text-base leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
