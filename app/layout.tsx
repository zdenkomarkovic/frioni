import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  SITE_NAME,
  SITE_URL,
  SOCIAL_INSTAGRAM,
} from "@/lib/constants";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Profesionalni servis klima uređaja u Beogradu. Čišćenje, dijagnostika, popravka i godišnje održavanje klima. Pozovite FRIONI – 060 169 6006.",
  keywords: [
    "servis klima uređaja Beograd",
    "čišćenje klime Beograd",
    "popravka klima uređaja",
    "servis klime",
    "klimatizacija Beograd",
    "FRIONI servis",
    "godišnje održavanje klime",
    "dubinsko čišćenje klime",
  ],
  authors: [{ name: "FRIONI" }],
  category: "HVAC servis",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    type: "website",
    locale: "sr_RS",
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: `${SITE_URL}/hero.jpg`,
        width: 1200,
        height: 630,
        alt: "FRIONI – Servis Klima Uređaja Beograd",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [`${SITE_URL}/hero.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "FRIONI",
  description: "Profesionalni servis klima uređaja u Beogradu",
  url: SITE_URL,
  telephone: CONTACT_PHONE,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Beograd",
    addressCountry: "RS",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "19:00",
    },
  ],
  areaServed: { "@type": "City", name: "Beograd" },
  priceRange: "$$",
  image: `${SITE_URL}/hero.jpg`,
  sameAs: [SOCIAL_INSTAGRAM],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sr" className={geist.variable}>
      <body className="bg-[#07091a] text-white antialiased font-[family-name:var(--font-geist)]">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
