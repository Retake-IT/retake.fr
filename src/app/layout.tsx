import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retake | Achat et revente de matériel informatique pour les professionnels",
  description: "Découvrez Retake: rachat et reconditionnement de matériel informatique pour les professionnels. Recyclez et valorisez vos équipements !",
  publisher: "Retake",
  keywords: [
    "seconde vie",
    "revente matériel informatique",
    "recyclage informatique",
    "revalorisation informatique",
    "reconditionnement",
    "Retake",
    "équipement informatique écoresponsable",
  ],
  alternates: {
    canonical: "https://retake.fr",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      notranslate: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Retake | Achat et Revente de Matériel Informatique",
    description: "Achetez, revendez et valorisez du matériel informatique chez Retake. Un service destiné aux pros pour des solutions écoresponsables.",
    url: "https://retake.fr",
    siteName: "Retake",
    images: [
      {
        url: "https://retake.fr/img/logo.png",
        width: 1200,
        height: 630,
        alt: "Retake - Achat et revente de matériel informatique",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", // Optimisé pour les aperçus Twitter
    title: "Retake | Achat et Revente de Matériel Informatique",
    description: "Reconditionnez et recyclez votre matériel informatique chez Retake, le service pour les pros.",
    images: ["https://retake.fr/img/logo.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script defer src="https://analytics.retake.fr/script.js" data-website-id="2cabddab-19cf-4987-8d2a-b573ec9fc714"></script>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class">
          <Navbar />
          <div>{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
