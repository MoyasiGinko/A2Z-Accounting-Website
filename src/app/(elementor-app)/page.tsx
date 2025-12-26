import Hero from "@/components/Hero";
import CalcSection from "@/components/CalcSection";
import WhyDubai from "@/components/WhyDubai";
import Services from "@/components/Services";
import Vision from "@/components/Vision";
import Tabs from "@/components/Tabs";
import Clients from "@/components/Clients";
import ClientStats from "@/components/ClientStats";
import ClientLogos from "@/components/ClientLogos";
import Testimonials from "@/components/Testimonials";
import GetInTouch from "@/components/GetInTouch";
import BlogCarouselServer from "@/components/BlogCarouselServer";
import GoogleReviews from "@/components/GoogleReviews";
import PromoSection from "@/components/PromoSection";

export default function Home() {
  return (
    <>
      {/* <div id="top"></div> */}
      {/* Header Spacer */}
      {/* <Header /> */}
      {/* <div id="page" className="main-container"> */}
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
                  {/*new section: calculator (2nd in order)*/}
                  <CalcSection />

                  {/*new section: why dubai (3rd in order)*/}
                  <WhyDubai />

                  <PromoSection />
                  {/* <About /> */}
                  <Vision />
                  <Tabs />
                  <Clients />
                  <ClientStats />
                  <Services />
                  <GoogleReviews />
                  <BlogCarouselServer />
                  {/* <ClientLogos /> */}
                  <Testimonials />
                  <div className="mb-40">
                    <GetInTouch />
                  </div>
                  {/* <NewsletterSignup /> */}
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
      {/* </div> */}
      {/* <Footer />
      <div id="scroll-to-top" className="vamtam-scroll-to-top">
        <div id="scroll-to-top-text">top</div>
      </div> */}
    </>
  );
}
