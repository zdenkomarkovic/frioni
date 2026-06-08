"use server";

import { z } from "zod";

const schema = z.object({
  ime: z.string().min(2, "Unesite ime i prezime"),
  email: z.string().email("Unesite ispravan email"),
  telefon: z.string().min(6, "Unesite ispravan broj telefona"),
  tipServisa: z.string().optional(),
  brojKlima: z.string().optional(),
  adresa: z.string().optional(),
  opstina: z.string().optional(),
  opis: z.string().optional(),
  saglasnost: z.literal("on", { errorMap: () => ({ message: "Morate prihvatiti uslove" }) }),
});

export type ContactFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<string, string[]>>;
};

export async function submitContact(
  _prevState: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const raw = {
    ime: formData.get("ime"),
    email: formData.get("email"),
    telefon: formData.get("telefon"),
    brojKlima: formData.get("brojKlima"),
    tipServisa: formData.get("tipServisa"),
    adresa: formData.get("adresa"),
    opstina: formData.get("opstina"),
    opis: formData.get("opis"),
    saglasnost: formData.get("saglasnost"),
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: "Proverite unete podatke.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { ime, email, telefon, tipServisa, brojKlima, adresa, opstina, opis } = result.data;

  const emailBody = [
    `<h2>Novi zahtev za servis</h2>`,
    `<p><strong>Ime i prezime:</strong> ${ime}</p>`,
    `<p><strong>Telefon:</strong> ${telefon}</p>`,
    `<p><strong>Email:</strong> ${email}</p>`,
    tipServisa ? `<p><strong>Tip servisa:</strong> ${tipServisa}</p>` : "",
    brojKlima ? `<p><strong>Broj klima uređaja:</strong> ${brojKlima}</p>` : "",
    adresa ? `<p><strong>Adresa:</strong> ${adresa}</p>` : "",
    opstina ? `<p><strong>Opština:</strong> ${opstina}</p>` : "",
    opis ? `<p><strong>Opis problema:</strong> ${opis}</p>` : "",
  ].filter(Boolean).join("\n");

  const res = await fetch("https://api.mailjet.com/v3.1/send", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${Buffer.from(
        `${process.env.MAILJET_API_KEY}:${process.env.MAILJET_SECRET_KEY}`
      ).toString("base64")}`,
    },
    body: JSON.stringify({
      Messages: [
        {
          From: {
            Email: process.env.SITE_MAIL_SENDER,
            Name: "FRIONI Servis",
          },
          To: [{ Email: process.env.SITE_MAIL_RECEIVER }],
          ReplyTo: { Email: email, Name: ime },
          Subject: `Novi zahtev za servis – ${ime}`,
          HTMLPart: emailBody,
        },
      ],
    }),
  });

  if (!res.ok) {
    return {
      success: false,
      message: "Greška pri slanju. Pokušajte ponovo ili nas pozovite direktno.",
    };
  }

  return {
    success: true,
    message: "Vaš zahtev je primljen! Kontaktiraćemo vas u najkraćem roku.",
  };
}
