import Image from "next/image";
import { CONTACT_PHONE_HREF } from "@/lib/constants";
import Link from "next/link";

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

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute inset-0">
        <Image
          src="/12024.png"
          alt="FRIONI servis klima uređaja Beograd"
          fill
          className="object-cover object-center"
          priority
        />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-[#07091a] via-[#07091a]/85 to-[#07091a]/40" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-t from-[#07091a] via-transparent to-[#07091a]/60" /> */}
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-32 pt-36">
        <div className="max-w-2xl">
          <h1 className="text-orange-500 text-base font-semibold tracking-widest uppercase mb-5">
            Profesionalni servis klima uređaja u Beogradu
          </h1>

          <p className="text-2xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 text-white">
            KADA SU PRIORITETI SIGURNOST, UREDNOST, POUZDANOST I OSLONAC, POZOVITE{" "}
            <span
              className="text-transparent bg-clip-text text-3xl  sm:text-5xl lg:text-6xl"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              {" "}
              FRIONI.
            </span>
          </p>

          <p className="text-gray-200 text-base leading-relaxed mb-10 max-w-lg">
            Lično vođen servis klima uređaja sa dugogodišnjim iskustvom i predanošću svakom poslu.
            Dolazimo tačno kada kažemo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <a
              href={CONTACT_PHONE_HREF}
              className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-base text-center transition-all active:scale-95 flex items-center justify-center gap-3"
            >
              <svg
                className="w-5 h-5 flex-shrink-0"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <span>POZOVI ODMAH</span>
            </a>
            <Link
              href="#kontakt"
              className="relative text-white px-8 py-4 rounded-xl font-bold text-base text-center hover:opacity-90 hover:shadow-2xl hover:shadow-orange-500/30 transition-all active:scale-95"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              POŠALJI ZAHTEV ZA SERVIS
            </Link>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {trustBadges.map((badge) => (
              <div
                key={badge.label}
                className="text-center p-4 rounded-2xl bg-[#0c1220]/80 border border-white/8 backdrop-blur-sm"
              >
                <div className="w-16 h-16 relative mx-auto mb-3">
                  <Image src={badge.icon} alt={badge.label} fill className="object-contain" />
                </div>
                <p className="text-white font-bold text-sm mb-1">{badge.label}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{badge.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
