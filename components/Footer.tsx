import Image from "next/image";
import { CONTACT_PHONE, CONTACT_PHONE_HREF, CONTACT_EMAIL, CONTACT_ADDRESS } from "@/lib/constants";

const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#o-servisu", label: "O servisu" },
  { href: "#cene", label: "Cene" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Footer() {
  return (
    <footer className="bg-[#040710] border-t border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="Frioni logo"
                width={120}
                height={40}
                className="h-32 w-auto"
              />
            </div>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Profesionalni servis klima uređaja u Beogradu. Sigurnost, urednost i pouzdanost – naše
              su vrednosti od prvog dana.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">
              Navigacija
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-sm mb-5 uppercase tracking-widest">Kontakt</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href={CONTACT_PHONE_HREF}
                  className="text-gray-400 hover:text-orange-400 text-sm transition-colors"
                >
                  {CONTACT_PHONE}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>
                <span className="text-gray-400 text-sm">{CONTACT_ADDRESS}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-xs">
            &copy; {new Date().getFullYear()} FRIONI. Sva prava zadržana.
          </p>
          <p className="text-gray-400 text-xs">
            Izrada sajta:{" "}
            <a
              href="https://manikamwebsolutions.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition-colors"
            >
              Manikam Web Solutions
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
