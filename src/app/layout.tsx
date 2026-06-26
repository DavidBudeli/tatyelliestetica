import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { WhatsAppButton } from "@/components/WhatsAppButton";
import { assets, siteConfig } from "@/lib/constants";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const title = "Estética Tatyelli Cristina | Estética Facial, Corporal e Depilação a Laser";
const description =
  "Clínica de estética com 10 anos de experiência em procedimentos faciais, corporais, depilação a laser e protocolos personalizados. Agende sua avaliação pelo WhatsApp.";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#062E26",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.domain),
  title,
  description,
  keywords: [
    "estética",
    "clínica de estética",
    "estética facial",
    "estética corporal",
    "depilação a laser",
    "limpeza de pele",
    "drenagem linfática",
    "criolipólise",
    "toxina botulínica",
    "preenchimento",
    "bioestimulador de colágeno",
    "microagulhamento",
    "skinbooster",
    "remoção de tatuagem",
    "secagem de vasinhos",
    "estética Tatyelli Cristina",
  ],
  icons: {
    icon: [
      { url: assets.favicon },
      { url: "/assets/tatyelli/logo/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/assets/tatyelli/logo/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: assets.appleTouchIcon,
  },
  openGraph: {
    title,
    description,
    url: siteConfig.domain,
    siteName: siteConfig.name,
    images: [
      {
        url: assets.og,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [assets.og],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    name: siteConfig.name,
    founder: siteConfig.responsible,
    description,
    email: `mailto:${siteConfig.email}`,
    telephone: "+55 41 98709-5659",
    url: siteConfig.domain,
    image: `${siteConfig.domain}${assets.og}`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    sameAs: [siteConfig.instagramUrl, siteConfig.professionalInstagramUrl],
    knowsAbout: [
      "Estética facial",
      "Estética corporal",
      "Depilação a laser",
      "Limpeza de pele",
      "Drenagem linfática",
      "Criolipólise",
      "Toxina botulínica",
      "Preenchimentos",
      "Bioestimuladores de colágeno",
      "Microagulhamento",
      "Skinbooster",
      "Remoção de tatuagem",
      "Secagem de vasinhos",
    ],
  };

  return (
    <html lang="pt-BR" className={geist.variable}>
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
