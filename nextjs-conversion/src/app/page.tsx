"use client";

import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Vision from "../components/Vision";
import Clients from "../components/Clients";
import ClientStats from "../components/ClientStats";
import ClientLogos from "../components/ClientLogos";
import Tabs from "../components/Tabs";
import Testimonials from "../components/Testimonials";
import BlogCarousel from "../components/BlogCarousel";
import NewsletterSignup from "../components/NewsletterSignup";
import Footer from "../components/Footer";
import { useScrollEffects } from "../hooks/useScrollEffects";
import { useStickyHeader } from "../hooks/useStickyHeader";
import { useScrollToTop } from "../hooks/useScrollToTop";
import { useOverlayTriggers } from "../hooks/useOverlayTriggers";

export default function Home() {
  // Initialize all scroll and interaction effects
  useScrollEffects();
  useStickyHeader();
  useScrollToTop();
  useOverlayTriggers();

  return (
    <div>
      <div id="top"></div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Vision />
      <Clients />
      <ClientStats />
      <ClientLogos />
      <Tabs />
      <Testimonials />
      <BlogCarousel />
      <NewsletterSignup />
      <Footer />
      {/* The rest of the body content follows the same conversion pattern. */}
    </div>
  );
}
