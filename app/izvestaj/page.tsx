"use client";

import { useState } from "react";
import Image from "next/image";

const inputClass =
  "bg-[#0a0f20] border border-white/10 rounded-lg px-4 py-3 text-white text-sm placeholder:text-gray-600 focus:outline-none focus:border-orange-500/60 transition-colors w-full";

function Field({
  label,
  error,
  children,
  required,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
  required?: boolean;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm text-gray-300 font-medium">
        {label}
        {required && <span className="text-orange-500 ml-1">*</span>}
      </label>
      {children}
      {error && <p className="text-orange-400 text-xs">{error}</p>}
    </div>
  );
}

function today() {
  return new Date().toLocaleDateString("sr-RS", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });
}

type FormData = {
  brojIntervencije: string;
  datum: string;
  ime: string;
  adresa: string;
  telefon: string;
  email: string;
  usluge: string;
  napomena: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

function validate(d: FormData): Errors {
  const e: Errors = {};
  if (!d.brojIntervencije.trim()) e.brojIntervencije = "Unesite broj intervencije";
  if (!d.datum.trim()) e.datum = "Unesite datum";
  if (d.ime.trim().length < 2) e.ime = "Unesite ime i prezime";
  if (d.adresa.trim().length < 2) e.adresa = "Unesite adresu";
  if (d.telefon.trim().length < 6) e.telefon = "Unesite telefon";
  if (d.usluge.trim().length < 2) e.usluge = "Unesite izvršene usluge";
  return e;
}

function buildReportHTML(d: FormData): string {
  const uslugeItems = d.usluge
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => `<li style="margin-bottom:6px;">${l.trim()}</li>`)
    .join("");

  const clientRows = [
    ["Ime i prezime", d.ime],
    ["Adresa", d.adresa],
    ["Telefon", d.telefon],
    ...(d.email ? [["E-mail", d.email]] : []),
  ]
    .map(
      ([label, value]) => `
      <div style="display:flex;margin-bottom:9px;">
        <span style="width:140px;font-size:13px;color:#888;">${label}:</span>
        <span style="font-size:13px;font-weight:600;color:#111;">${value}</span>
      </div>`,
    )
    .join("");

  const napomenaBlock = d.napomena.trim()
    ? `
    <div style="padding:0 40px 24px;">
      <div style="font-size:10px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Napomena servisera</div>
      <div style="border-top:1px solid #eee;padding-top:12px;">
        <p style="margin:0;font-size:14px;color:#333;line-height:1.7;font-style:italic;">${d.napomena.trim()}</p>
      </div>
    </div>`
    : "";

  return `
<div style="font-family:Arial,sans-serif;background:#fff;width:794px;color:#111;">

  <div style="background:#07091a;padding:24px 40px;display:flex;align-items:center;justify-content:space-between;">
    <img src="/logo.png" height="60" alt="FRIONI" crossorigin="anonymous" />
    <span style="color:#bbb;font-size:12px;">Servis i održavanje klima uređaja</span>
  </div>

  <div style="padding:32px 40px 16px;">
    <h2 style="margin:0 0 10px;font-size:18px;font-weight:900;color:#111;text-transform:uppercase;letter-spacing:2px;">
      Izveštaj o izvršenom servisu
    </h2>
    <div style="height:3px;width:200px;background:linear-gradient(to right,#1d4ed8,#ea580c);"></div>
  </div>

  <div style="margin:0 40px 28px;padding:16px 24px;background:#f7f8fc;border-radius:8px;display:flex;gap:60px;">
    <div>
      <div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Broj intervencije</div>
      <div style="font-size:16px;font-weight:700;color:#111;">${d.brojIntervencije}</div>
    </div>
    <div>
      <div style="font-size:10px;color:#888;text-transform:uppercase;letter-spacing:1px;margin-bottom:4px;">Datum</div>
      <div style="font-size:16px;font-weight:700;color:#111;">${d.datum}</div>
    </div>
  </div>

  <div style="padding:0 40px 24px;">
    <div style="font-size:10px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Podaci o klijentu</div>
    <div style="border-top:1px solid #eee;padding-top:12px;">${clientRows}</div>
  </div>

  <div style="padding:0 40px 24px;">
    <div style="font-size:10px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:1px;margin-bottom:10px;">Izvršene usluge</div>
    <div style="border-top:1px solid #eee;padding-top:12px;">
      <ul style="margin:0;padding-left:20px;color:#333;font-size:14px;line-height:1.8;">${uslugeItems}</ul>
    </div>
  </div>

  ${napomenaBlock}

  <div style="padding:20px 40px;border-top:1px solid #eee;text-align:center;">
    <p style="margin:0 0 6px;font-size:14px;color:#555;">Hvala vam na ukazanom poverenju.</p>
    <p style="margin:0;font-size:16px;font-weight:900;color:#111;letter-spacing:1px;">FRIONI</p>
    <p style="margin:4px 0 0;font-size:12px;color:#888;">Servis i održavanje klima uređaja · www.frioni.rs</p>
  </div>

  <div style="background:#f8f8f8;padding:14px 40px;border-top:1px solid #e0e0e0;text-align:center;margin-top:16px;">
    <p style="margin:0;font-size:11px;color:#888;">
      Ovaj izveštaj sačuvajte – prilikom narednog servisa omogućava brzi uvid u istoriju uređaja.
    </p>
  </div>

</div>`;
}

async function generisiPDF(data: FormData) {
  const [{ default: html2canvas }, { default: jsPDF }] = await Promise.all([
    import("html2canvas"),
    import("jspdf"),
  ]);

  const container = document.createElement("div");
  container.style.cssText = "position:fixed;top:-99999px;left:-99999px;width:794px;";
  container.innerHTML = buildReportHTML(data);
  document.body.appendChild(container);

  await new Promise<void>((resolve) => {
    const imgs = Array.from(container.querySelectorAll<HTMLImageElement>("img"));
    if (imgs.length === 0) { resolve(); return; }
    let loaded = 0;
    imgs.forEach((img) => {
      const done = () => { if (++loaded === imgs.length) resolve(); };
      if (img.complete) done();
      else { img.onload = done; img.onerror = done; }
    });
  });

  const canvas = await html2canvas(container, {
    scale: 2,
    useCORS: true,
    backgroundColor: "#ffffff",
    logging: false,
  });

  document.body.removeChild(container);

  const imgData = canvas.toDataURL("image/jpeg", 0.95);
  const doc = new jsPDF({ unit: "mm", format: "a4" });

  const A4_W = 210;
  const A4_H = 297;
  const imgH = A4_W * (canvas.height / canvas.width);

  if (imgH <= A4_H) {
    doc.addImage(imgData, "JPEG", 0, 0, A4_W, imgH);
  } else {
    const sliceH = Math.floor(canvas.width * (A4_H / A4_W));
    let yOffset = 0;
    let first = true;
    while (yOffset < canvas.height) {
      if (!first) doc.addPage();
      first = false;
      const h = Math.min(sliceH, canvas.height - yOffset);
      const slice = document.createElement("canvas");
      slice.width = canvas.width;
      slice.height = h;
      slice.getContext("2d")!.drawImage(canvas, 0, yOffset, canvas.width, h, 0, 0, canvas.width, h);
      doc.addImage(slice.toDataURL("image/jpeg", 0.95), "JPEG", 0, 0, A4_W, A4_W * (h / canvas.width));
      yOffset += sliceH;
    }
  }

  doc.save(`FRIONI_Izvestaj_${data.brojIntervencije.replace(/[^a-zA-Z0-9]/g, "_")}.pdf`);
}

export default function IzvestajPage() {
  const [formData, setFormData] = useState<FormData>({
    brojIntervencije: "",
    datum: today(),
    ime: "",
    adresa: "",
    telefon: "",
    email: "",
    usluge: "",
    napomena: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const [generating, setGenerating] = useState(false);
  const [done, setDone] = useState(false);

  const set =
    (key: keyof FormData) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setFormData((prev) => ({ ...prev, [key]: e.target.value }));

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const errs = validate(formData);
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setGenerating(true);
    try {
      await generisiPDF(formData);
      setDone(true);
    } finally {
      setGenerating(false);
    }
  }

  return (
    <div className="min-h-screen bg-[#050810] py-12 px-4">
      <div className="max-w-2xl mx-auto">

        <div className="text-center mb-10">
          <Image src="/logo.png" alt="FRIONI logo" width={120} height={40} className="h-24 w-auto mx-auto mb-4" />
          <h1 className="text-2xl font-black text-white uppercase tracking-widest">
            Izveštaj o izvršenom servisu
          </h1>
          <div
            className="h-0.5 w-24 mx-auto mt-4"
            style={{ backgroundImage: "linear-gradient(to right, #1d4ed8, #ea580c)" }}
          />
        </div>

        {done ? (
          <div className="bg-green-500/10 border border-green-500/30 rounded-2xl p-10 text-center">
            <div className="w-14 h-14 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-7 h-7 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <p className="text-white font-bold text-lg mb-2">PDF je preuzet!</p>
            <p className="text-gray-400 text-sm">Izveštaj je generisan i sačuvan na vašem uređaju.</p>
            <button
              onClick={() => {
                setDone(false);
                setFormData((prev) => ({ ...prev, brojIntervencije: "" }));
              }}
              className="mt-6 text-white px-6 py-3 rounded-xl font-bold text-sm hover:opacity-90 transition-all"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              Novi izveštaj
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">

            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 space-y-4">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">Intervencija</p>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Broj intervencije" error={errors.brojIntervencije} required>
                  <input
                    type="text"
                    value={formData.brojIntervencije}
                    onChange={set("brojIntervencije")}
                    placeholder="npr. 2025-001"
                    className={inputClass}
                  />
                </Field>
                <Field label="Datum" error={errors.datum} required>
                  <input
                    type="text"
                    value={formData.datum}
                    onChange={set("datum")}
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 space-y-4">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">Podaci o klijentu</p>
              <Field label="Ime i prezime" error={errors.ime} required>
                <input
                  type="text"
                  value={formData.ime}
                  onChange={set("ime")}
                  placeholder="Petar Petrović"
                  className={inputClass}
                />
              </Field>
              <Field label="Adresa" error={errors.adresa} required>
                <input
                  type="text"
                  value={formData.adresa}
                  onChange={set("adresa")}
                  placeholder="Ulica i broj, opština"
                  className={inputClass}
                />
              </Field>
              <div className="grid grid-cols-2 gap-4">
                <Field label="Telefon" error={errors.telefon} required>
                  <input
                    type="tel"
                    value={formData.telefon}
                    onChange={set("telefon")}
                    placeholder="06X XXX XXXX"
                    className={inputClass}
                  />
                </Field>
                <Field label="E-mail" error={errors.email}>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={set("email")}
                    placeholder="klijent@email.com"
                    className={inputClass}
                  />
                </Field>
              </div>
            </div>

            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 space-y-4">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">Izvršene usluge</p>
              {errors.usluge && <p className="text-orange-400 text-xs">{errors.usluge}</p>}
              <textarea
                value={formData.usluge}
                onChange={set("usluge")}
                rows={8}
                placeholder="Usluga..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <div className="bg-[#0c1220] border border-white/8 rounded-2xl p-6 space-y-4">
              <p className="text-orange-500 text-xs font-bold tracking-widest uppercase">
                Napomena servisera{" "}
                <span className="text-gray-600 normal-case font-normal">(opciono)</span>
              </p>
              <textarea
                value={formData.napomena}
                onChange={set("napomena")}
                rows={3}
                placeholder="Dodatne napomene ili preporuke za klijenta..."
                className={`${inputClass} resize-none`}
              />
            </div>

            <button
              type="submit"
              disabled={generating}
              className="w-full text-white py-4 rounded-xl font-bold text-sm hover:opacity-90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ backgroundImage: "linear-gradient(to right, #1d4ed8 35%, #ea580c 65%)" }}
            >
              {generating ? "Generišem PDF..." : "Generiši i preuzmi PDF"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
