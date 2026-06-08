import Image from "next/image";

const trustBadges = [
  {
    icon: "/12031.png",
    label: "Sigurnost",
    desc: "Čuvamo sigurnost na svakom koraku – za vas, vašu porodicu i dom.",
  },
  {
    icon: "/12032.png",
    label: "Urednost",
    desc: "Prostor ostavljamo u istom stanju u kakvom smo ga zatekli – uvek.",
  },
  {
    icon: "/12034.png",
    label: "Pouzdanost",
    desc: "Realna procena stanja bez nepotrebnih radova i troškova.",
  },
  {
    icon: "/rukovanje.png",
    label: "Oslonac",
    desc: "Vodimo istoriju rada i održavanja. Možete se osloniti na nas i naredne godine.",
  },
];

export default function TrustBadges() {
  return (
    <section className="bg-[#07091a] py-14">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {trustBadges.map((badge) => (
            <div
              key={badge.label}
              className="text-center p-6 rounded-2xl bg-[#0c1220] border border-white/8 hover:border-white/20 transition-all"
            >
              <div className="w-16 h-16 relative mx-auto mb-4">
                <Image src={badge.icon} alt={badge.label} fill className="object-contain" />
              </div>
              <p className="text-white font-bold text-sm mb-1">{badge.label}</p>
              <p className="text-gray-400 text-xs leading-relaxed">{badge.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
