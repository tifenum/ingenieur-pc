export const metadata = {
  title: "Ingénieur PC | Réparation Informatique Tunisie",
  description: "Réparation d'ordinateurs, assistance à distance, maintenance et création de sites web en Tunisie. 20 ans d'expérience.",
};

import PageIllustration from "@/components/page-illustration";
import Hero from "@/components/hero-home";
import Workflows from "@/components/workflows";
import Features from "@/components/features";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";
import WhyChoose from "@/components/why-choose";

export default function Home() {
  return (
    // Added: pt-24 md:pt-32 pushes the entire page content down cleanly out from behind the fixed menu bar
    <main className="pt-24 md:pt-32">
      <PageIllustration />
      
      <section id="accueil">
        <Hero />
      </section>
      
      <section id="Processus">
        <Workflows />
      </section>
      
      <section id="services">
        <Features />
      </section>
      
      <section id="avantages">
        <WhyChoose />
      </section>
      
      <section id="temoignages">
        <Testimonials />
      </section>
      
      <section id="contact">
        <Cta />
      </section>
    </main>
  );
}