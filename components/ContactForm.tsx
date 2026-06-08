"use client";

import { useActionState } from "react";
import { submitContact, type ContactFormState } from "@/app/actions/contact";
import Image from "next/image";
import {
  CONTACT_PHONE,
  CONTACT_PHONE_HREF,
  CONTACT_EMAIL,
  CONTACT_ADDRESS,
  GOOGLE_REVIEWS_URL,
} from "@/lib/constants";

const initialState: ContactFormState = {
  success: false,
  message: "",
};

const tipServisaOptions = [
  "Mali servis klima uređaja",
  "Veliki servis klima uređaja",
  "Čišćenje spoljašnje jedinice",
  "Dijagnostika kvara",
  "Dopuna rashladnog plina",
  "Servis inverter klima uređaja",
  "Nešto drugo",
];

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string[];
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-gray-300 font-medium">{label}</label>
      {children}
      {error && (
        <p className="text-orange-400 text-xs">{error[0]}</p>
      )}
    </div>
  );
}

const inputClass =
  "bg-[#0a0f20] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/60 transition-colors";

export default function ContactForm() {
  const [state, action, pending] = useActionState(submitContact, initialState);

  return (
    <section id="kontakt" className="py-20 bg-[#050810]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20">
          <div>
            <p className="text-orange-500 text-xs font-semibold tracking-widest uppercase mb-3">
              Kontaktirajte nas
            </p>
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
              Pošaljite zahtev za servis
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              Popunite formu i kontaktiraćemo vas u najkraćem roku.
              Odgovaramo isti dan, obično za par sati.
            </p>

            {state.success ? (
              <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-8 text-center">
                <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-7 h-7 text-green-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-white font-bold text-lg mb-2">Zahtev primljen!</p>
                <p className="text-gray-400 text-sm">{state.message}</p>
              </div>
            ) : (
              <form action={action} className="space-y-4">
                {state.message && !state.success && (
                  <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 text-orange-400 text-sm">
                    {state.message}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Ime i prezime *" error={state.errors?.ime}>
                    <input
                      type="text"
                      name="ime"
                      placeholder="Petar Petrović"
                      className={inputClass}
                      required
                    />
                  </Field>
                  <Field label="Telefon *" error={state.errors?.telefon}>
                    <input
                      type="tel"
                      name="telefon"
                      placeholder="06X XXX XXXX"
                      className={inputClass}
                      required
                    />
                  </Field>
                </div>

                <Field label="E-mail adresa *" error={state.errors?.email}>
                  <input
                    type="email"
                    name="email"
                    placeholder="vas@email.com"
                    className={inputClass}
                    required
                  />
                </Field>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Tip servisa" error={state.errors?.tipServisa}>
                    <select name="tipServisa" className={inputClass}>
                      <option value="" className="bg-[#0a0f20]">
                        Izaberite...
                      </option>
                      {tipServisaOptions.map((opt) => (
                        <option key={opt} value={opt} className="bg-[#0a0f20]">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Broj klima uređaja" error={state.errors?.brojKlima}>
                    <input
                      type="number"
                      name="brojKlima"
                      placeholder="1"
                      min="1"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Field label="Adresa" error={state.errors?.adresa}>
                    <input
                      type="text"
                      name="adresa"
                      placeholder="Ulica i broj"
                      className={inputClass}
                    />
                  </Field>
                  <Field label="Opština" error={state.errors?.opstina}>
                    <input
                      type="text"
                      name="opstina"
                      placeholder="npr. Novi Beograd"
                      className={inputClass}
                    />
                  </Field>
                </div>

                <Field label="Opis problema" error={state.errors?.opis}>
                  <textarea
                    name="opis"
                    rows={4}
                    placeholder="Opišite simptome ili šta ste primetili..."
                    className={`${inputClass} resize-none`}
                  />
                </Field>

                <div className="flex flex-col gap-1.5">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="saglasnost"
                      className="mt-0.5 w-4 h-4 accent-orange-500 flex-shrink-0"
                      required
                    />
                    <span className="text-gray-400 text-xs leading-relaxed">
                      Slanjem ovog obrasca saglasan/na sam da FRIONI servis koristi moje kontakt podatke isključivo u svrhu odgovora na zahtev za servis.
                    </span>
                  </label>
                  {state.errors?.saglasnost && (
                    <p className="text-orange-400 text-xs">{state.errors.saglasnost[0]}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={pending}
                  className="w-full text-white py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
                  style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
                >
                  {pending ? "Šaljem..." : "Pošalji zahtev"}
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col gap-8">
            <div className="relative h-56 sm:h-72 rounded-2xl overflow-hidden">
              <Image
                src="/12027.png"
                alt="FRIONI tim"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050810]/70 to-transparent" />
            </div>

            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-7 space-y-5">
              <h3 className="text-white font-bold text-lg">
                Kontakt informacije
              </h3>

              <a
                href={CONTACT_PHONE_HREF}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-orange-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-orange-500/25 transition-colors">
                  <svg
                    className="w-5 h-5 text-orange-500"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-orange-400 transition-colors">
                    {CONTACT_PHONE}
                  </p>
                  <p className="text-gray-500 text-xs">Pozovi odmah</p>
                </div>
              </a>

              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/15 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-500/25 transition-colors">
                  <svg
                    className="w-5 h-5 text-blue-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm group-hover:text-blue-400 transition-colors">
                    {CONTACT_EMAIL}
                  </p>
                  <p className="text-gray-500 text-xs">Pišite nam</p>
                </div>
              </a>

              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.8}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">
                    {CONTACT_ADDRESS}
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
