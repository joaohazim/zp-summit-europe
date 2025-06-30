import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import { GA_TRACKING_ID } from "@/lib/analytics";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "ZP Summit Europe | Spain Edition",
  description: "4 dias de acesso a empresas do setor cripto em Madrid, Castellón, Valência e Barcelona. Conecte-se com oportunidades únicas no ecossistema europeu.",
  keywords: "crypto summit, blockchain europa, spain crypto, bitcoin barcelona, ethereum madrid, cripto valência",
  authors: [{ name: "ZP Summit Europe" }],
  creator: "ZP Summit Europe",
  publisher: "ZP Summit Europe",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "ZP Summit Europe | Spain Edition",
    description: "4 dias de acesso VIP a empresas cripto em Espanha. Madrid, Castellón, Valência e Barcelona. Apenas 25 vagas.",
    url: "https://zpsummit.eu",
    siteName: "ZP Summit Europe",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZP Summit Europe | Spain Edition", 
    description: "4 dias de acesso VIP a empresas cripto em Espanha. Apenas 25 vagas.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        {GA_TRACKING_ID && (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
              id="gtag-init"
              strategy="afterInteractive"
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
