import type { Metadata } from "next";
import "./globals.css";
import ErrorBoundary from "../components/ErrorBoundary";
import Analytics from "../components/Analytics";
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
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/frontend.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/uploads/elementor/css/post-5.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-image.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor-pro/assets/css/widget-nav-menu.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/lib/animations/styles/slideInUp.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeIn.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-heading.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-social-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/conditionals/apple-webkit.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-divider.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/cache/min/1/wp-content/uploads/elementor/custom-icons/theme-icons/style.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/lib/animations/styles/fadeInUp.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-icon-list.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-spacer.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-nested-accordion.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-icon-box.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/widget-nested-tabs.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor-pro/assets/css/modules/sticky.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor-pro/assets/css/modules/motion-fx.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/lib/swiper/v8/css/swiper.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/css/conditionals/e-swiper.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor-pro/assets/css/widget-loop-common.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor-pro/assets/css/widget-loop-carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor/assets/lib/animations/styles/slideInLeft.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/plugins/elementor-pro/assets/css/widget-form.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/uploads/elementor/css/post-17.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/uploads/elementor/css/post-139.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/uploads/elementor/css/post-2094.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/cache/min/1/wp-content/themes/execor/vamtam/assets/css/dist/elementor/elementor-all.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-max.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-below-max.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/themes/execor/vamtam/assets/css/dist/elementor/responsive/elementor-small.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/cache/min/1/wp-content/uploads/elementor/google-fonts/css/dmsans.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/cache/min/1/wp-content/uploads/elementor/google-fonts/css/forum.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/cache/min/1/wp-content/uploads/elementor/google-fonts/css/nothingyoucoulddo.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/uploads/elementor/css/post-7162.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/uploads/elementor/css/post-4557.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/eicons/css/elementor-icons.min.css"
        />
        <link
          rel="stylesheet"
          href="/wp-content/cache/min/1/wp-content/plugins/elementor/assets/lib/font-awesome/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="/homepage.css" />
        <link rel="stylesheet" href="/custom/custom.css" />
      </head>
      <body className="home wp-singular page-template-default page page-id-17 wp-custom-logo wp-embed-responsive wp-theme-execor full header-layout-logo-menu has-page-header no-middle-header responsive-layout vamtam-is-elementor elementor-active elementor-pro-active vamtam-wc-cart-empty wc-product-gallery-slider-active vamtam-font-smoothing layout-full elementor-default elementor-kit-5 elementor-page elementor-page-17">
        <ErrorBoundary>
          <Header />
          {children}
          <Footer />
          <div id="scroll-to-top" className="vamtam-scroll-to-top">
            <div id="scroll-to-top-text">top</div>
          </div>
          <Analytics
            measurementId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}
          />
        </ErrorBoundary>
      </body>
    </html>
  );
}
