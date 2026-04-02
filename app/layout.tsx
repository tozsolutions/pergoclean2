import "./globals.css";
import type { Metadata } from "next";
import { seoKeywords, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "PergoClean | Pergola, Zip Perde, Cam Tavan ve Tente Temizliği",
    template: "%s | PergoClean"
  },
  description: siteConfig.description,
  keywords: seoKeywords,
  alternates: { canonical: "/" },
  openGraph: {
    title: "PergoClean",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: "PergoClean",
    locale: "tr_TR",
    type: "website",
    images: [{ url: "/assets/PergoClean24_02.26_3.png", width: 1200, height: 1200 }]
  },
  twitter: {
    card: "summary_large_image",
    title: "PergoClean",
    description: siteConfig.description,
    images: ["/assets/PergoClean24_02.26_3.png"]
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "PergoClean",
    image: `${siteConfig.url}/assets/PergoClean24_02.26_1.png`,
    url: siteConfig.url,
    telephone: siteConfig.phonePrimary,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Timko İş Merkezi, Macun Mahallesi 177. Cadde V8 Kat 1",
      addressLocality: "Yenimahalle",
      addressRegion: "Ankara",
      addressCountry: "TR"
    },
    areaServed: ["Ankara", "Antalya"],
    sameAs: siteConfig.socials.map((item) => item.href),
    description: siteConfig.description
  };

  return (
    <html lang="tr">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
