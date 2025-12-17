import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "@/components/ErrorBoundary";
import Analytics from "@/components/Analytics";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://execor.vamtam.com"),
  title: "A2Z Accounting Dubai | Professional Accounting & Consulting Services",
  description:
    "Transforming businesses for a stronger future. Strategic insights, lasting impact. Professional accounting, tax, and consulting services in Dubai.",
  keywords:
    "accounting Dubai, tax services, business consulting, financial planning, audit services",
  authors: [{ name: "A2Z Accounting" }],
  creator: "A2Z Accounting",
  publisher: "A2Z Accounting",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      {
        url: "/wp-content/uploads/2025/03/fav-icon-150x150.png",
        sizes: "32x32",
      },
      {
        url: "/wp-content/uploads/2025/03/fav-icon-300x300.png",
        sizes: "192x192",
      },
    ],
    apple: "/wp-content/uploads/2025/03/fav-icon-300x300.png",
  },
  robots: "max-image-preview:large",
  alternates: {
    types: {
      "application/rss+xml": [
        { title: "Execor » Feed", url: "https://execor.vamtam.com/feed/" },
        {
          title: "Execor » Comments Feed",
          url: "https://execor.vamtam.com/comments/feed/",
        },
      ],
    },
  },
  openGraph: {
    title: "A2Z Accounting Dubai | Professional Accounting Services",
    description:
      "Transforming businesses for a stronger future with expert accounting and consulting services in Dubai.",
    url: "https://execor.vamtam.com",
    siteName: "A2Z Accounting",
    images: [
      {
        url: "/wp-content/uploads/2025/04/GettyImages-1364777011_edit.png",
        width: 1200,
        height: 630,
        alt: "A2Z Accounting Dubai",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A2Z Accounting Dubai | Professional Accounting Services",
    description:
      "Transforming businesses for a stronger future with expert accounting and consulting services in Dubai.",
    images: ["/wp-content/uploads/2025/04/GettyImages-1364777011_edit.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US">
      <head></head>
      <body>
        <ErrorBoundary>
          <div id="top"></div>
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <Analytics
            measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        </ErrorBoundary>
      </body>
    </html>
  );
}
