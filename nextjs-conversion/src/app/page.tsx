import Header from "../components/Header";
import Hero from "../components/Hero";
import Services from "../components/Services";
import About from "../components/About";
import Vision from "../components/Vision";

export default function Home() {
  return (
    <div>
      <div id="top"></div>
      <Header />
      <Hero />
      <Services />
      <About />
      <Vision />
      {/* The rest of the body content follows the same conversion pattern. */}
    </div>
  );
}
