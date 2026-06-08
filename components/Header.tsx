"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { CONTACT_PHONE_HREF, CONTACT_PHONE } from "@/lib/constants";

const navLinks = [
  { href: "#usluge", label: "Usluge" },
  { href: "#o-servisu", label: "O servisu" },
  { href: "#cene", label: "Cene" },
  { href: "#recenzije", label: "Recenzije" },
  { href: "#kontakt", label: "Kontakt" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#07091a]/97 shadow-lg shadow-black/50" : "bg-transparent"
      } border-b border-white/5`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-22 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Frioni logo"
            width={120}
            height={40}
            className="h-20 w-auto"
            priority
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-gray-200 hover:text-white text-sm font-bold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href={CONTACT_PHONE_HREF}
          className="hidden md:block text-white px-5 py-2.5 rounded-lg text-sm font-bold hover:opacity-90 hover:shadow-lg transition-all"
          style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
        >
          {CONTACT_PHONE}
        </a>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          aria-label="Otvori meni"
        >
          <span
            className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? "opacity-0 scale-x-0" : ""}`}
          />
          <span
            className={`w-6 h-0.5 bg-white block transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`}
          />
        </button>
      </div>

      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96" : "max-h-0"}`}
      >
        <div className="bg-[#0a0f20] border-t border-white/5 py-4 px-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block py-3 text-gray-300 hover:text-orange-500 transition-colors border-b border-white/5 last:border-0 text-sm"
            >
              {link.label}
            </a>
          ))}
          <a
            href={CONTACT_PHONE_HREF}
            className="mt-4 block text-white text-center px-5 py-3 rounded-lg font-bold text-sm"
            style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
          >
            {CONTACT_PHONE}
          </a>
        </div>
      </div>
    </header>
  );
}
