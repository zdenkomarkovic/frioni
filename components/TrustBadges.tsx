import React from "react";
import Image from "next/image";

const trustBadges: { icon: string; label: string; desc: React.ReactNode }[] = [
  {
    icon: "/12031.png",
    label: "Sigurnost",
    desc: <>Svaku intervenciju izvodimo pažljivo i odgovorno, sa ciljem da uređaj radi <strong className="text-white">bezbedno</strong> i <strong className="text-white">pouzdano</strong> nakon našeg odlaska.</>,
  },
  {
    icon: "/12032.png",
    label: "Urednost",
    desc: <><strong className="text-white">Štitimo prostor</strong> tokom rada i vodimo računa da iza nas ostane samo <strong className="text-white">čist uređaj</strong>.</>,
  },
  {
    icon: "/12034.png",
    label: "Pouzdanost",
    desc: <>Predlažemo samo ono što je <strong className="text-white">zaista potrebno</strong>. <strong className="text-white">Bez izmišljanja kvarova</strong> i nepotrebnih troškova.</>,
  },
  {
    icon: "/rukovanje.png",
    label: "Oslonac",
    desc: <>Vodimo <strong className="text-white">evidenciju</strong> izvršenih intervencija kako biste i <strong className="text-white">narednih godina</strong> znali kome da se obratite.</>,
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#07091a] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl font-black text-white text-center leading-relaxed mb-10">
          Ne birate samo servisera — birate kome{" "}
          <span className="text-orange-500">verujete</span>.
          <br />
          <span
            className="inline-block text-transparent bg-clip-text"
            style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
          >
            Klima servis Frioni.
          </span>
        </h2>
        <p className="text-gray-400 text-base leading-relaxed text-center max-w-2xl mx-auto mb-10">
          Klima uređaj nije samo aparat. On utiče na kvalitet vazduha, udobnost prostora i svakodnevni boravak vaše porodice ili zaposlenih. Zato svaki servis radimo temeljno, uredno i bez prečica.
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="text-center p-6 rounded-2xl bg-[#0c1220] border border-white/8 hover:border-white/20 transition-all"
            >
              <div className="w-16 h-16 relative mx-auto mb-4">
                <Image src={badge.icon} alt={badge.label} fill className="object-contain" />
              </div>
              <p className="text-white font-black text-sm uppercase mb-1">{badge.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
