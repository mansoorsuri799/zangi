import type { Metadata, Viewport } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTopWrapper from "@/components/ScrollToTopWrapper";
import WebVitalsTracker from "@/components/WebVitalsTracker";
import { MobileMenuProvider } from "@/components/MobileMenuProvider";
import {
  SITE_URL,
  SITE_NAME,
  BRAND,
  DOWNLOAD_URL,
  APP_VERSION,
  APP_SIZE,
  CONTACT_EMAIL,
  APP_RATING_VALUE,
  APP_RATING_COUNT,
  APP_REVIEW_COUNT,
} from "@/lib/site";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-body",
  preload: true,
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Zangi Private Messenger APK | Download Latest Version for Android (2026)",
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Download Zangi Private Messenger APK — secure messaging with end-to-end encryption, offline P2P mode, no phone number required, HD calls, and ultra-low data usage.",
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", type: "image/x-icon", sizes: "any" },
      { url: "/zangi-app.webp", type: "image/webp" },
    ],
    apple: [{ url: "/zangi-app.webp" }],
  },
  alternates: { canonical: SITE_URL },
  openGraph: {
    title: "Zangi Private Messenger APK | Download Latest Version for Android (2026)",
    description: "Encrypted chat, offline mode, no SIM required. Download Zangi APK free.",
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
    images: [{ url: `${SITE_URL}/zangi-app.webp`, width: 1024, height: 1024, alt: "Zangi" }],
  },
  applicationName: BRAND,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={manrope.variable} data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/zangi-app.webp" />
        <link rel="preconnect" href="https://dl.zangiapp.org" crossOrigin="anonymous" />
        <Script id="deferred-manifest" strategy="lazyOnload">
          {`(function(){var l=document.createElement('link');l.rel='manifest';l.href='/manifest.json';document.head.appendChild(l);})();`}
        </Script>
        {typeof process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID === "string" &&
          process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID &&
          !/^G-XXXXXXXXXX$/i.test(process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID) && (
            <>
              <Script
                src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
                strategy="lazyOnload"
              />
              <Script id="google-analytics" strategy="lazyOnload">
                {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}', {
                  page_path: window.location.pathname,
                  send_page_view: false,
                  transport_type: 'beacon'
                });
              `}
              </Script>
            </>
          )}
      </head>
      <body className={`${manrope.className} antialiased bg-white text-ink min-h-screen flex flex-col`} suppressHydrationWarning>
        <MobileMenuProvider>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <ScrollToTopWrapper />
        </MobileMenuProvider>
        <WebVitalsTracker />

        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: SITE_NAME,
              url: SITE_URL,
              logo: `${SITE_URL}/zangi-app.webp`,
              email: CONTACT_EMAIL,
            }),
          }}
        />
        <Script
          id="app-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: "Zangi Private Messenger",
              operatingSystem: "Android 5.0+",
              applicationCategory: "CommunicationApplication",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
                availability: "https://schema.org/InStock",
                url: DOWNLOAD_URL,
              },
              downloadUrl: DOWNLOAD_URL,
              softwareVersion: APP_VERSION,
              fileSize: APP_SIZE,
              image: `${SITE_URL}/zangi-app.webp`,
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: APP_RATING_VALUE,
                bestRating: "5",
                worstRating: "1",
                ratingCount: APP_RATING_COUNT,
                reviewCount: APP_REVIEW_COUNT,
              },
            }),
          }}
        />
      </body>
    </html>
  );
}
