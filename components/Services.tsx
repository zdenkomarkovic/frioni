"use client";

import { useState } from "react";
import Image from "next/image";

type Service = {
  icon: string;
  title: string;
  price: string;
  description?: string;
  items: string[];
  note?: string;
  featured?: boolean;
};

const services: Service[] = [
  {
    icon: "/12035.png",
    title: "Standard servis klima uređaja",
    price: "4.500 RSD",
    description:
      "Preporučena sezonska kontrola uređaja namenjena proveri ispravnosti rada sistema.",
    items: [
      "Proveru rada uređaja u sezonskom režimu",
      "Proveru dostupnih elektro i freonskih instalacija",
      "Dijagnostiku uređaja sa pregledom osnovnih parametara rada",
      "Dezinfekciju isparivača unutrašnje jedinice",
      "Hemijsko čišćenje i dezinfekciju filtera",
      "Kontrolu odvoda kondenzata",
      "Elektronski izveštaj o izvršenim radovima",
    ],
  },
  {
    icon: "/12036.png",
    title: "Dubinsko mašinsko čišćenje unutrašnje jedinice",
    price: "6.500 RSD",
    description: "Detaljno higijensko i mehaničko čišćenje unutrašnje jedinice.",
    items: [
      "Delimično rasklapanje unutrašnje jedinice",
      "Zaštitu prostora tokom izvođenja radova",
      "Hemijski tretman isparivača",
      "Hemijski tretman ventilatora (turbine)",
      "Hemijski tretman vazdušne komore",
      "Hemijski tretman usmerivača vazduha",
      "Hemijski tretman oplate i poklopaca",
      "Hemijski tretman filtera i drenažnih elemenata",
      "Mašinsko pranje pod pritiskom svih tretiranih elemenata",
      "Dezinfekciju sistema",
      "Sušenje uređaja",
      "Sklapanje i proveru rada po režimima",
      "Elektronski izveštaj o izvršenim radovima",
    ],
  },
  {
    icon: "/12033.png",
    title: "Servis spoljašnje jedinice",
    price: "3.000 RSD",
    items: [
      "Demontažu zaštitne mreže ventilatora",
      "Demontažu ventilatora (ukoliko konstrukcija dozvoljava)",
      "Hemijsko čišćenje kondenzatora",
      "Hemijsko čišćenje vazdušne komore",
      "Hemijsko čišćenje oplate i nosača",
      "Hemijsko čišćenje drenažnih elemenata",
      "Ispiranje pod pritiskom",
      "Sklapanje i proveru rada uređaja",
    ],
    note: "Usluga se izvodi isključivo ukoliko uslovi na objektu omogućavaju bezbedan rad bez rizika po lica i imovinu.",
  },
  {
    icon: "/12037.png",
    title: "Dijagnostika kvara",
    price: "3.000 RSD",
    items: [
      "Izlazak na adresu",
      "Pregled uređaja",
      "Utvrđivanje uzroka problema",
      "Predlog rešenja",
      "Procenu troškova eventualne popravke",
    ],
    note: "U slučaju prihvatanja popravke ili servisne intervencije, dijagnostika se ne naplaćuje posebno.",
  },
  {
    icon: "/12034.png",
    title: "Zamena startnog kondenzatora kompresora",
    price: "6.000 RSD",
    items: [
      "Isključenje uređaja sa mreže",
      "Dijagnostiku kondenzatora",
      "Demontažu neispravnog kondenzatora",
      "Ugradnju novog kondenzatora",
      "Kontrolu električnih spojeva",
      "Probni rad uređaja",
    ],
    note: "Cena uključuje standardni kondenzator.",
  },
  {
    icon: "/12035.png",
    title: "Zamena izolacije freonske instalacije",
    price: "1.000 RSD/m",
    items: [
      "Uklanjanje dotrajale izolacije",
      "Postavljanje nove izolacije freonske instalacije",
      "Obradu i zaštitu spojeva",
      "Vizuelnu kontrolu instalacije nakon zamene",
    ],
    note: "Izvodi se kada uslovi na objektu dozvoljavaju bezbedan pristup instalaciji.",
  },
  {
    icon: "/12033.png",
    title: "Drenažna rešenja",
    price: "1.000 RSD/m",
    items: [
      "Izradu ili korekciju odvoda kondenzata",
      "Ugradnju drenažnog creva",
      "Korekciju pada instalacije",
      "Proveru oticanja kondenzata",
    ],
  },
  {
    icon: "/12036.png",
    title: "Veliki godišnji servis",
    price: "9.500 RSD",
    description: "Preporučuje se jednom godišnje za uređaje koji se redovno koriste.",
    items: [
      "Standard servis",
      "Dubinsko mašinsko čišćenje unutrašnje jedinice",
      "Kontrola odvoda kondenzata",
      "Kontrola dostupnih elektro instalacija",
      "Elektronski izveštaj",
    ],
  },
  {
    icon: "/12038.png",
    title: "FRIONI godišnji program održavanja",
    price: "12.000 RSD godišnje",
    description:
      "Program namenjen korisnicima koji žele maksimalnu brigu o uređaju tokom cele godine.",
    items: [
      "Veliki godišnji servis",
      "Prioritet pri zakazivanju termina",
      "Evidenciju uređaja i izvršenih intervencija",
      "Podsetnik za naredni servis",
      "Elektronsku dokumentaciju svih izvršenih radova",
      "Savetodavnu podršku tokom trajanja pretplate",
    ],
    featured: true,
  },
];

function ServiceCard({ service }: { service: Service }) {
  const [expanded, setExpanded] = useState(false);
  const hasMore = service.items.length > 3;
  const visibleItems = expanded ? service.items : service.items.slice(0, 3);

  return (
    <div
      className={`group flex flex-col h-full rounded-2xl p-6 border transition-all duration-300 ${
        service.featured
          ? "bg-gradient-to-b from-blue-950/60 to-orange-950/40 border-orange-500/40 hover:border-orange-500/70"
          : "bg-[#0c1220] border-white/8 hover:border-orange-500/40 hover:bg-[#0f1628]"
      }`}
    >
      <div className="flex items-start justify-between gap-4 mb-4">
        <div className="w-14 h-14 relative flex-shrink-0">
          <Image
            src={service.icon}
            alt={service.title}
            fill
            className="object-contain group-hover:scale-110 transition-transform duration-300"
          />
        </div>
        <span
          className={`text-sm font-black whitespace-nowrap ${
            service.featured ? "text-orange-400" : "text-white"
          }`}
        >
          od {service.price}
        </span>
      </div>

      <h3
        className={`font-bold text-base mb-2 leading-snug transition-colors ${
          service.featured ? "text-orange-300" : "text-white group-hover:text-orange-400"
        }`}
      >
        {service.title}
      </h3>

      {service.description && (
        <p className="text-gray-400 text-xs leading-relaxed mb-3">{service.description}</p>
      )}

      <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-2">
        Obuhvata:
      </p>

      <ul className="space-y-1.5">
        {visibleItems.map((item) => (
          <li key={item} className="flex items-start gap-2 text-gray-400 text-xs leading-relaxed">
            <span className="w-1 h-1 rounded-full bg-orange-500 flex-shrink-0 mt-1.5" />
            {item}
          </li>
        ))}
      </ul>

      {/* Spacer gura dugme na dno */}
      <div className="flex-1" />

      {hasMore && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="mt-4 w-full text-xs font-semibold py-2 rounded-lg border border-white/10 text-gray-400 hover:text-white hover:border-orange-500/40 transition-all"
        >
          {expanded ? "Vidi manje ↑" : "Vidi više ↓"}
        </button>
      )}

      {service.note && (
        <p className="mt-3 text-gray-500 text-xs leading-relaxed italic border-t border-white/5 pt-3">
          {service.note}
        </p>
      )}
    </div>
  );
}

export default function Services() {
  return (
    <section id="usluge" className="py-20 bg-[#07091a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        <div className="max-w-2xl mb-14">
          <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Moje usluge
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-4">
            Usluge i okvirne cene
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Sve što vaš klima uređaj treba da bi radio besprekorno.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 items-stretch">
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>

        <div className="mt-10 bg-[#0c1220] border border-white/8 rounded-2xl p-6">
          <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
            Napomena o cenama
          </p>
          <p className="text-gray-400 text-sm leading-relaxed mb-2">
            Navedene cene su informativnog karaktera i odnose se na standardne uslove rada.
          </p>
          <p className="text-gray-400 text-sm leading-relaxed">
            Konačna cena može zavisiti od vrste uređaja, stepena zaprljanosti, pristupa uređaju,
            potrebnog vremena za izvođenje radova, visinskih radova, kao i drugih okolnosti zatečenih
            na terenu. O svim troškovima klijent je upoznat pre početka izvođenja radova.
          </p>
        </div>

        <div className="mt-10 text-center">
          <a
            href="/kontakt"
            className="inline-block text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 hover:shadow-xl hover:shadow-orange-500/25 transition-all"
            style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
          >
            Pošalji zahtev za servis
          </a>
        </div>
      </div>
    </section>
  );
}
