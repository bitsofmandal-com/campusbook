import { CoreFeatures } from "@/components/landing/CoreFeatures";
import { Cta } from "@/components/landing/Cta";
import { FAQ } from "@/components/landing/FAQ";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/landing/Footer";
import { Hero } from "@/components/landing/Hero";
import { Navbar } from "@/components/landing/Navbar";
import { Newsletter } from "@/components/landing/Newsletter";
import { Pricing } from "@/components/landing/Pricing";
import { ScrollToTop } from "@/components/landing/ScrollToTop";
import { Team } from "@/components/landing/Team";
import { UseCases } from "@/components/landing/UseCases";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <CoreFeatures />
      {/* <Sponsors /> */}
      <Features />
      <UseCases />

      <Cta />
      {/* <Testimonials /> */}
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
      <Footer />
      <ScrollToTop />
    </main>
  );
}
