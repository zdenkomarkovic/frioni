import Image from "next/image";
import { CONTACT_PHONE_HREF } from "@/lib/constants";
import Link from "next/link";

export default function Hero() {
  return (
    <section>
      {/* ── MOBILNI PRIKAZ ── */}
      <div className="lg:hidden pt-20">
        <div className="bg-[#07091a] px-4 pt-6 pb-4">
          <h1 className="text-orange-500 text-sm font-semibold tracking-widest uppercase">
            Profesionalni servis klima uređaja frioni u Beogradu
          </h1>
        </div>
        <div className="relative w-full aspect-[4/3]">
          <Image
            src="/12024.png"
            alt="FRIONI servis klima uređaja Beograd"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="bg-[#07091a] px-4 py-10">
          <h2 className="text-lg font-black leading-relaxed mb-5 text-white">
            KADA SU PRIORITETI SIGURNOST, UREDNOST, POUZDANOST I OSLONAC, POZOVITE{" "}
            <span
              className="text-transparent bg-clip-text  block"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              KLIMA SERVIS FRIONI BEOGRAD.
            </span>
          </h2>
          <p className="text-gray-300 text-sm  mb-8">
            Lično vođen servis klima uređaja sa dugogodišnjim iskustvom i predanošću svakom poslu.
            Dolazimo tačno kada kažemo.
          </p>
          <div className="flex flex-row gap-2">
            <a
              href={CONTACT_PHONE_HREF}
              className="bg-transparent border-2 border-white text-white px-2 py-2 rounded-xl font-bold text-xs text-center flex items-center justify-center gap-2 whitespace-nowrap"
            >
              <svg
                className="w-4 h-4 flex-shrink-0"
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
              POZOVI ODMAH
            </a>
            <Link
              href="#kontakt"
              className="text-white px-2 py-2 rounded-xl font-bold text-xs text-center whitespace-nowrap flex items-center justify-center"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              POŠALJI ZAHTEV ZA SERVIS
            </Link>
          </div>
        </div>
      </div>

      {/* ── DESKTOP PRIKAZ ── */}
      <div className="hidden lg:flex relative h-screen items-end">
        <div className="absolute inset-0">
          <Image
            src="/12024.png"
            alt="FRIONI servis klima uređaja Beograd"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <div className="relative w-full max-w-6xl mx-auto px-6 flex justify-end pb-16">
          <div className="max-w-2xl">
            <h1 className="text-orange-500 text-lg font-semibold tracking-widest uppercase mb-5">
              Profesionalni servis klima uređaja frioni u Beogradu
            </h1>
            <h2 className="text-4xl font-black leading-tight mb-6 text-white">
              KADA SU PRIORITETI SIGURNOST, UREDNOST, POUZDANOST I OSLONAC, POZOVITE{" "}
              <span
                className="text-transparent bg-clip-text block text-4xl"
                style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
              >
                KLIMA SERVIS FRIONI BEOGRAD.
              </span>
            </h2>
            <p className="text-gray-200 text-base leading-relaxed mb-10 max-w-lg">
              Lično vođen servis klima uređaja sa dugogodišnjim iskustvom i predanošću svakom poslu.
              Dolazimo tačno kada kažemo.
            </p>
            <div className="flex gap-4">
              <a
                href={CONTACT_PHONE_HREF}
                className="bg-transparent border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-bold text-base text-center transition-all active:scale-95 flex items-center gap-3"
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
                POZOVI ODMAH
              </a>
              <Link
                href="#kontakt"
                className="text-white px-8 py-4 rounded-xl font-bold text-base text-center hover:opacity-90 transition-all active:scale-95"
                style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
              >
                POŠALJI ZAHTEV ZA SERVIS
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
