import { About } from "@/components/About";
import { FAQ } from "@/components/FAQ";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { InstagramSection } from "@/components/InstagramSection";
import { Location } from "@/components/Location";
import { Method } from "@/components/Method";
import { Results } from "@/components/Results";
import { Services } from "@/components/Services";
import { Testimonials } from "@/components/Testimonials";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Method />
        <Results />
        <Testimonials />
        <InstagramSection />
        <Location />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
