import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";

import { Sidebar } from "@/components/layout/Sidebar";
import { profile, siteUrl } from "@/content/profile";
import "./globals.css";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["700", "800"],
  display: "swap",
});

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const description =
  "Desenvolvedor Front-End Pleno com mais de 5 anos de experiência em e-commerce, performance web e SEO. React, Next.js, TypeScript, Magento e Tray.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.role}`,
    template: `%s — ${profile.name}`,
  },
  description,
  authors: [{ name: profile.name, url: siteUrl }],
  creator: profile.name,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: profile.name,
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${profile.name} — ${profile.role}`,
    description,
  },
  alternates: { canonical: "/" },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  url: siteUrl,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Curitiba",
    addressRegion: "PR",
    addressCountry: "BR",
  },
  knowsAbout: [
    "E-commerce",
    "Performance web",
    "SEO",
    "React",
    "Next.js",
    "TypeScript",
    "Magento",
  ],
  sameAs: [profile.social.github, profile.social.linkedin],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${archivo.variable} ${plexSans.variable} ${plexMono.variable} antialiased`}
    >
      <body>
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:rounded-[3px] focus:bg-amber focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-on-amber"
        >
          Pular para o conteúdo
        </a>
        {/*
          `grid-cols-1` (= minmax(0, 1fr)) é obrigatório: sem ele o track
          implícito `auto` cresce até o max-width do <main> e estoura a
          viewport no mobile.
        */}
        <div className="grid min-h-screen grid-cols-1 side:grid-cols-[300px_minmax(0,1fr)]">
          <Sidebar />
          {children}
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </body>
    </html>
  );
}
