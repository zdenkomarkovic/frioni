"use client";

import { useActionState } from "react";
import { submitIzvestaj, type IzvestajFormState } from "@/app/actions/izvestaj";
import Image from "next/image";

const initialState: IzvestajFormState = {
  success: false,
  message: "",
};


const inputClass =
  "bg-[#0a0f20] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/60 transition-colors w-full";

function Field({
  label,
  error,
  children,
  required,
}: {
  label: string;
  error?: string[];
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-gray-300 font-medium">
        {label}{required && <span className="text-orange-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-orange-400 text-xs">{error[0]}</p>}
    </div>
  );
}

function today() {
  return new Date().toLocaleDateString("sr-RS", { day: "2-digit", month: "2-digit", year: "numeric" });
}

export default function IzvestajPage() {
  const [state, action, pending] = useActionState(submitIzvestaj, initialState);

  return (
    <div className="min-h-screen bg-[#050810] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        {/* Header */}
        <div className="text-center mb-10">
          <Image src="/logo.png" alt="FRIONI logo" width={120} height={40} className="h-24 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-black text-white uppercase tracking-widest">
            Izveštaj o izvršenom servisu
          </h1>
          <div className="h-0.5 w-24 mx-auto mt-4" style={{ backgroundImage: "linear-gradient(to right, #1d4ed8, #ea580c)" }} />
        </div>

        {state.success ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center">
            <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-bold text-lg mb-2">Izveštaj poslat!</p>
            <p className="text-gray-400 text-sm">{state.message}</p>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              Novi izveštaj
            </button>
          </div>
        ) : (
          <form action={action} className="space-y-6">
            {state.message && (
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-3 text-orange-400 text-sm">
                {state.message}
              </div>
            )}

            {/* Broj i datum */}
            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 space-y-4">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">Intervencija</p>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Broj intervencije" error={state.errors?.brojIntervencije} required>
                  <input type="text" name="brojIntervencije" placeholder="npr. 2025-001" className={inputClass} />
                </Field>
                <Field label="Datum" error={state.errors?.datum} required>
                  <input type="text" name="datum" defaultValue={today()} className={inputClass} />
                </Field>
              </div>
            </div>

            {/* Podaci o klijentu */}
            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 space-y-4">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">Podaci o klijentu</p>
              <Field label="Ime i prezime" error={state.errors?.ime} required>
                <input type="text" name="ime" placeholder="Petar Petrović" className={inputClass} />
              </Field>
              <Field label="Adresa" error={state.errors?.adresa} required>
                <input type="text" name="adresa" placeholder="Ulica i broj, opština" className={inputClass} />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Telefon" error={state.errors?.telefon} required>
                  <input type="tel" name="telefon" placeholder="06X XXX XXXX" className={inputClass} />
                </Field>
                <Field label="E-mail" error={state.errors?.email} required>
                  <input type="email" name="email" placeholder="klijent@email.com" className={inputClass} />
                </Field>
              </div>
            </div>

            {/* Usluge */}
            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 space-y-4">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">Izvršene usluge</p>
              {state.errors?.usluge && (
                <p className="text-orange-400 text-xs">{state.errors.usluge[0]}</p>
              )}
              <textarea
                name="usluge"
                rows={8}
                placeholder="Usluga..."
                className={`${inputClass} resize-none`}
              />
            </div>

            {/* Napomena */}
            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 space-y-4">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                Napomena servisera{" "}
                <span className="text-gray-600 normal-case font-normal">(opciono)</span>
              </p>
              <textarea
                name="napomena"
                rows={3}
                placeholder="Dodatne napomene ili preporuke za klijenta..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={pending}
              className="w-full text-white py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              {pending ? "Šaljem izveštaj..." : "Pošalji izveštaj klijentu"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
