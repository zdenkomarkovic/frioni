"use server";

import { z } from "zod";

const schema = z.object({
  brojIntervencije: z.string().min(1, "Unesite broj intervencije"),
  datum: z.string().min(1, "Unesite datum"),
  ime: z.string().min(2, "Unesite ime i prezime"),
  adresa: z.string().min(2, "Unesite adresu"),
  telefon: z.string().min(6, "Unesite telefon"),
  email: z.string().email("Unesite ispravan email"),
  usluge: z.string().min(2, "Unesite izvršene usluge"),
  napomena: z.string().optional(),
});

export type IzvestajFormState = {
  success: boolean;
  message: string;
  errors?: Partial<Record<string, string[]>>;
};

export async function submitIzvestaj(
  _prevState: IzvestajFormState,
  formData: FormData,
): Promise<IzvestajFormState> {
  const raw = {
    brojIntervencije: formData.get("brojIntervencije"),
    datum: formData.get("datum"),
    ime: formData.get("ime"),
    adresa: formData.get("adresa"),
    telefon: formData.get("telefon"),
    email: formData.get("email"),
    usluge: formData.get("usluge"),
    napomena: formData.get("napomena"),
  };

  const result = schema.safeParse(raw);

  if (!result.success) {
    return {
      success: false,
      message: "Proverite unete podatke.",
      errors: result.error.flatten().fieldErrors,
    };
  }

  const { brojIntervencije, datum, ime, adresa, telefon, email, usluge, napomena } = result.data;

  const uslugeHtml = usluge
    .split("\n")
    .filter((l) => l.trim())
    .map((l) => `<li style="margin-bottom:4px;">${l.trim()}</li>`)
    .join("");

  const htmlBody = `
<!DOCTYPE html>
<html lang="sr">
<head><meta charset="UTF-8" /></head>
<body style="margin:0;padding:0;background:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f4f4f4;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 12px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="background:linear-gradient(135deg,#1d4ed8,#ea580c);padding:28px 40px;text-align:center;">
              <img src="https://frioni.vercel.app/logo.png" alt="FRIONI" height="70" style="display:block;margin:0 auto 8px;" />
              <p style="margin:0;color:rgba(255,255,255,0.85);font-size:13px;">Servis i održavanje klima uređaja</p>
            </td>
          </tr>

          <!-- Title -->
          <tr>
            <td style="padding:32px 40px 8px;border-bottom:2px solid #f0f0f0;">
              <h2 style="margin:0;font-size:18px;font-weight:900;color:#111;text-transform:uppercase;letter-spacing:1px;">Izveštaj o izvršenom servisu</h2>
            </td>
          </tr>

          <!-- Meta -->
          <tr>
            <td style="padding:16px 40px 24px;border-bottom:1px solid #f0f0f0;">
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-right:40px;">
                    <p style="margin:0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Broj intervencije</p>
                    <p style="margin:4px 0 0;font-size:15px;font-weight:700;color:#111;">${brojIntervencije}</p>
                  </td>
                  <td>
                    <p style="margin:0;font-size:11px;color:#888;text-transform:uppercase;letter-spacing:1px;">Datum</p>
                    <p style="margin:4px 0 0;font-size:15px;font-weight:700;color:#111;">${datum}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Podaci o klijentu -->
          <tr>
            <td style="padding:24px 40px 8px;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:1px;">Podaci o klijentu</p>
              <table cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td style="padding-bottom:8px;width:140px;font-size:13px;color:#888;">Ime i prezime:</td>
                  <td style="padding-bottom:8px;font-size:13px;font-weight:600;color:#111;">${ime}</td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;font-size:13px;color:#888;">Adresa:</td>
                  <td style="padding-bottom:8px;font-size:13px;font-weight:600;color:#111;">${adresa}</td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px;font-size:13px;color:#888;">Telefon:</td>
                  <td style="padding-bottom:8px;font-size:13px;font-weight:600;color:#111;">${telefon}</td>
                </tr>
                <tr>
                  <td style="font-size:13px;color:#888;">E-mail:</td>
                  <td style="font-size:13px;font-weight:600;color:#111;">${email}</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Izvršene usluge -->
          <tr>
            <td style="padding:24px 40px 8px;border-top:1px solid #f0f0f0;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:1px;">Izvršene usluge</p>
              <ul style="margin:0;padding-left:20px;color:#333;font-size:14px;line-height:1.8;">
                ${uslugeHtml}
              </ul>
            </td>
          </tr>

          ${napomena ? `
          <!-- Napomena -->
          <tr>
            <td style="padding:24px 40px 8px;border-top:1px solid #f0f0f0;">
              <p style="margin:0 0 10px;font-size:11px;font-weight:700;color:#ea580c;text-transform:uppercase;letter-spacing:1px;">Napomena servisera</p>
              <p style="margin:0;font-size:14px;color:#333;line-height:1.7;">${napomena}</p>
            </td>
          </tr>
          ` : ""}

          <!-- Zahvalnica -->
          <tr>
            <td style="padding:24px 40px 32px;border-top:1px solid #f0f0f0;text-align:center;">
              <p style="margin:0 0 20px;font-size:15px;color:#333;">Hvala vam na ukazanom poverenju.</p>
              <p style="margin:0;font-size:16px;font-weight:900;color:#111;letter-spacing:1px;">FRIONI</p>
              <p style="margin:4px 0 0;font-size:12px;color:#888;">Servis i održavanje klima uređaja</p>
              <p style="margin:4px 0 0;font-size:12px;color:#1d4ed8;">www.frioni.rs</p>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f8f8f8;padding:16px 40px;border-top:1px solid #e8e8e8;text-align:center;">
              <p style="margin:0;font-size:11px;color:#aaa;">Ovaj izveštaj predstavlja potvrdu i evidenciju izvršene usluge.</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`;

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
          To: [{ Email: email, Name: ime }],
          ReplyTo: { Email: process.env.SITE_MAIL_RECEIVER, Name: "FRIONI – Nikola" },
          Subject: `FRIONI – Izveštaj o servisu br. ${brojIntervencije}`,
          HTMLPart: htmlBody,
        },
      ],
    }),
  });

  if (!res.ok) {
    return {
      success: false,
      message: "Greška pri slanju. Pokušajte ponovo.",
    };
  }

  return {
    success: true,
    message: `Izveštaj je uspešno poslat na ${email}.`,
  };
}
