import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import "./globals.css";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PopupWidget } from "@/components/PopupWidget";
import { JsonLd } from "@/components/JsonLd";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";


const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://retake.fr";
const SITE_NAME = "Retake";
const DEFAULT_TITLE =
  "Retake — Rachat et reconditionnement de matériel informatique";
const DEFAULT_DESCRIPTION =
  "Retake rachète le matériel informatique des entreprises, le reconditionne et le revend à prix accessible aux particuliers et associations. Basé à Strasbourg.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: DEFAULT_TITLE,
    template: "%s | Retake",
  },
  description: DEFAULT_DESCRIPTION,
  applicationName: SITE_NAME,
  publisher: SITE_NAME,
  authors: [{ name: "Léo Nonnenmacher — Retake", url: SITE_URL }],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    locale: "fr_FR",
    url: SITE_URL,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Retake — rachat et reconditionnement de matériel informatique",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/og.png"],
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#171717" },
  ],
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <script defer src="https://cloud.umami.is/script.js" data-website-id="1eff9878-3eb9-4856-b9f5-134aa7b2ce0b"></script>
      </head>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <JsonLd data={[organizationSchema, websiteSchema]} />
        <ThemeProvider attribute="class">
          <Navbar />
          <div className="flex-grow">{children}</div>
          <Footer />
          <PopupWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}
