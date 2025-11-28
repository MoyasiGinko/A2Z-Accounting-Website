"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Vision from "../components/Vision";
import Tabs from "../components/Tabs";
import Clients from "../components/Clients";
import ClientStats from "../components/ClientStats";
import ClientLogos from "../components/ClientLogos";
import Testimonials from "../components/Testimonials";
import GetInTouch from "../components/GetInTouch";
import BlogCarousel from "../components/BlogCarousel";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import { useScrollEffects } from "../hooks/useScrollEffects";
import { useStickyHeader } from "../hooks/useStickyHeader";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useOverlayTriggers } from "../hooks/useOverlayTriggers";
import { useElementReveals } from "../hooks/useElementReveals";
import { useNavMenus } from "../hooks/useNavMenus";
import { useCarousels } from "../hooks/useCarousels";
import { useClientMarquee } from "../hooks/useClientMarquee";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  // Initialize all scroll and interaction effects
  useScrollEffects();
  useStickyHeader();
  useScrollToTop();
  useOverlayTriggers();
  useElementReveals();
  useNavMenus();
  useCarousels();
  useClientMarquee();

  return (
    <>
      <div id="top"></div>
      {/* Header Spacer */}
      <div className="h-16"></div>
      <Header />
      <div id="page" className="main-container">
        <div id="main-content">
          <div id="sub-header" className="layout-full elementor-page-title">
            <div className="meta-header">
              {/* Elementor `page-title` location */}
            </div>
          </div>
          <div id="main" role="main" className="vamtam-main layout-full">
            <div className="page-wrapper">
              <article
                id="post-17"
                className="full post-17 page type-page status-publish hentry"
              >
                <div className="page-content clearfix the-content-parent">
                  <div
                    data-elementor-type="wp-page"
                    data-elementor-id="17"
                    className="elementor elementor-17"
                    data-elementor-post-type="page"
                  >
                    <Hero />
                    <Services />
                    <PromoSection />
                    <About />
                    <Vision />
                    <Tabs />
                    <Clients />
                    <ClientStats />
                    <ClientLogos />
                    <Testimonials />
                    <GetInTouch />
                    <BlogCarousel />
                    <NewsletterSignup />
                  </div>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <div id="scroll-to-top" className="vamtam-scroll-to-top">
        <div id="scroll-to-top-text">top</div>
      </div>
    </>
  );
}
