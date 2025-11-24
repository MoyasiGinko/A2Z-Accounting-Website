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
import Footer from "../components/Footer";

export default function Home() {
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
      <Footer />
      {/* The rest of the body content follows the same conversion pattern. */}
    </div>
  );
}
