import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "A2Z Accounting Dubai",
  description: "Professional accounting services in Dubai",
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
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className="no-js">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="preload"
          as="image"
          href="/wp-content/uploads/2025/04/GettyImages-1364777011_edit.png"
          fetchPriority="high"
        />
        <style
          dangerouslySetInnerHTML={{
            __html: `
            img:is([sizes="auto" i], [sizes^="auto," i]) {
              contain-intrinsic-size: 3000px 1500px;
            }
          `,
          }}
        />
      </head>
      <body className="home wp-singular page-template-default page page-id-17 wp-custom-logo wp-embed-responsive wp-theme-execor full header-layout-logo-menu has-page-header no-middle-header responsive-layout vamtam-is-elementor elementor-active elementor-pro-active vamtam-wc-cart-empty wc-product-gallery-slider-active vamtam-font-smoothing layout-full elementor-default elementor-kit-5 elementor-page elementor-page-17">
        {children}
      </body>
    </html>
  );
}
