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

  // TODO: Ovde dodati slanje emaila (Resend, Nodemailer, itd.)
  console.log("Novi zahtev za servis:", result.data);

  return {
    success: true,
    message: "Vaš zahtev je primljen! Kontaktiraćemo vas u najkraćem roku.",
  };
}
