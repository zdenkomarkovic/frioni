"use server";

import { z } from "zod";
import nodemailer from "nodemailer";

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
  console.log("[contact] formData keys:", [...formData.keys()]);
  console.log("[contact] ime:", formData.get("ime"), "| telefon:", formData.get("telefon"), "| email:", formData.get("email"));

  const raw = {
    ime: formData.get("ime") ?? "",
    email: formData.get("email") ?? "",
    telefon: formData.get("telefon") ?? "",
    brojKlima: formData.get("brojKlima") ?? "",
    tipServisa: formData.get("tipServisa") ?? "",
    adresa: formData.get("adresa") ?? "",
    opstina: formData.get("opstina") ?? "",
    opis: formData.get("opis") ?? "",
    saglasnost: formData.get("saglasnost") ?? "",
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

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT ?? "465"),
      secure: (process.env.SMTP_PORT ?? "465") === "465",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"FRIONI Servis" <${process.env.SMTP_USER}>`,
      to: process.env.SITE_MAIL_RECEIVER,
      replyTo: `"${ime}" <${email}>`,
      subject: `Novi zahtev za servis – ${ime}`,
      html: emailBody,
    });
  } catch (err) {
    console.error("[contact] SMTP error:", err);
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
